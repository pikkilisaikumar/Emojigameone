import './index.css'

const WinOrLoseCard = props => {
  const {topScore, losewinClickOne, loseLoseClickOne} = props

  const onClickPlayAgain = () => {
    losewinClickOne()
  }

  const onclickoneplayAgain = () => {
    loseLoseClickOne()
  }

  if (topScore > 12) {
    return (
      <div className="winorderosecontainer">
        <div>
          <h1 className="youloseheadingone">You Won</h1>
          <p className="topscoreparagraph">Best Score</p>
          <p className="topscoreparagraph1">12/12</p>
          <button type="button" onClick={onclickoneplayAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="imageOne"
        />
      </div>
    )
  }
  return (
    <div className="winorderosecontainer">
      <div>
        <h1 className="youloseheadingone">You Lose</h1>
        <p className="topscoreparagraph">Score</p>
        <p className="topscoreparagraph1">{topScore}/12</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="imageOne"
      />
    </div>
  )
}

export default WinOrLoseCard
