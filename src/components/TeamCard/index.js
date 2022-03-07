import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, name, teamImageUrl} = itemDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link-container">
        <img src={teamImageUrl} alt={name} className="image2" />
        <p className="heading1">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
