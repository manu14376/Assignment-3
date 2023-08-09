import './index.css'

const MatchItem = props => {
  const {details, checking} = props
  const {id, imageUrl, thumbnailUrl} = details
  const check = () => {
    checking(id)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={check}>
        <img src={thumbnailUrl} alt="thumbnail" className="match-item" />
      </button>
    </li>
  )
}
export default MatchItem
