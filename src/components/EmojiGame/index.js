/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojiCard: 0, isTrueOne: true}

  imageEmojiCard = id => {
    const {emojiCard, score} = this.state
    if (emojiCard === id || score >= 12) {
      this.setState({isTrueOne: false, topScore: score + 1})
    } else {
      this.setState({
        score: score + 1,
        isTrueOne: true,
        emojiCard: id,
      })
    }
  }

  losewinClickOne = () => {
    this.setState({score: 0, isTrueOne: true})
  }

  loseLoseClickOne = () => {
    this.setState({score: 0, topScore: 0, isTrueOne: true})
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isTrueOne} = this.state
    console.log(isTrueOne)

    emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="background-one">
        <NavBar score={score} topScore={topScore} isTrueOne={isTrueOne} />
        <div className="containerunorderlist">
          {isTrueOne ? (
            <ul className="unroderlist">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  each={each}
                  imageEmojiCard={this.imageEmojiCard}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              topScore={topScore}
              losewinClickOne={this.losewinClickOne}
              loseLoseClickOne={this.loseLoseClickOne}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
