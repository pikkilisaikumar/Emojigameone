// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isTrueOne} = props
  return (
    <div className="container-nav">
      {isTrueOne ? (
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="headingone">Emoji Game</h1>
        </nav>
      ) : (
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="headingone">Emoji Game</h1>
        </nav>
      )}
      {isTrueOne && (
        <div className="nav-container">
          <p className="paragraphone">Score: {score}</p>
          <p className="paragraphone">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
