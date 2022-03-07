import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import TeamMatches from '../TeamMatches'

import './index.css'

class MatchCard extends Component {
  state = {matchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`
    const teamDetails = await fetch(url)
    const team = await teamDetails.json()
    this.setState({
      matchDetails: {
        teamBannerUrl: team.team_banner_url,
        latestMatchDetails: team.latest_match_details,
        recentMatches: team.recent_matches,
      },
      isLoading: false,
    })
  }

  getData = () => {
    const {matchDetails} = this.state

    return (
      <div className="team-data-container">
        <img
          src={matchDetails.teamBannerUrl}
          alt="team banner"
          className="image3"
        />
        <h1 className="heading2">Latest Matches</h1>
        {this.latestGame()}
        <div className="matches-data">{this.matchesData()}</div>
      </div>
    )
  }

  latestGame = () => {
    const {matchDetails} = this.state
    const {latestMatchDetails} = matchDetails
    const latestGameDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    return <LatestMatch matchDetails={latestGameDetails} />
  }

  matchesData = () => {
    const {matchDetails} = this.state
    const {recentMatches} = matchDetails

    const formattedRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    return formattedRecentMatches.map(eachItem => (
      <TeamMatches key={eachItem.id} matchDetails={eachItem} />
    ))
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="match-container">
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getData()
        )}
      </div>
    )
  }
}

export default MatchCard
