import './index.css'

const Navbar = props => {
  const {gameTime, score} = props

  return (
    <nav className="nav-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="game-logo"
        />
      </div>
      <div className="score-time-container">
        <p className="nav-score">
          Score: <span className="score">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="time-img"
        />
        <p className="score">{gameTime} sec</p>
      </div>
    </nav>
  )
}
export default Navbar
