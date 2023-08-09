import './index.css'

const GameReset = props => {
  const {score, gameRestart} = props

  const Restart = () => [gameRestart()]
  return (
    <div className="gameEndCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="score-details">YOUR SCORE</p>
      <p className="score-details">{score}</p>
      <button type="button" className="reset-btn" onClick={Restart}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameReset
