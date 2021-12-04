import './index.css'

const EmojiCard = props => {
  const {each, imageEmojiCard} = props
  const {id, emojiName, emojiUrl} = each

  const onclickemojiImage = () => {
    imageEmojiCard(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onclickemojiImage}>
        <img src={emojiUrl} alt={emojiName} className="emojiurlclassone" />
      </button>
    </li>
  )
}

export default EmojiCard
