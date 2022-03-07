import './index.css'

const TeamMatches = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails

  const resultClass = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="image4"
      />
      <p className="heading3">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className={resultClass}>{matchStatus}</p>
    </li>
  )
}

export default TeamMatches
