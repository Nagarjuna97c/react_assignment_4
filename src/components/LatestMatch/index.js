import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <div className="match-details">
        <p className="heading">{competingTeam}</p>
        <p className="heading2">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="image4"
      />
      <div className="match-details-right">
        <p className="para">First Innings</p>
        <p className="para1">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para1">{secondInnings}</p>
        <p className="para">Man Of The Match</p>
        <p className="para1">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para1">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
