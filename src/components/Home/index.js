import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const teamsData = await fetch('https://apis.ccbp.in/ipl')
    const teamsNew = await teamsData.json()
    const {teams} = teamsNew

    this.setState({
      teamsList: teams.map(eachItem => ({
        name: eachItem.name,
        id: eachItem.id,
        teamImageUrl: eachItem.team_image_url,
      })),
      isLoading: false,
    })
  }

  loading = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getTeams = teamsList => (
    <ul className="data-container">
      <li className="heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="image"
        />
        <h1 className="main-heading">IPL DashBoard</h1>
      </li>

      {teamsList.map(eachItem => (
        <TeamCard key={eachItem.id} itemDetails={eachItem} />
      ))}
    </ul>
  )

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? this.loading() : this.getTeams(teamsList)}
      </div>
    )
  }
}

export default Home
