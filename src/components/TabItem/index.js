import './index.css'

const TabItem = props => {
  const {details, ChangeActiveTabId, isActive} = props
  const {tabId, displayText} = details

  const activeClassName = isActive ? 'active-tab' : ''

  const changeTabId = () => {
    ChangeActiveTabId(tabId)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
