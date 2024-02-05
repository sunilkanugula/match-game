import './index.css'

const TabItems = props => {
  const {eachTabDetails, clickedTabId, isActiveTabId} = props
  const {displayText, tabId} = eachTabDetails
  const classNameActiveTabId = isActiveTabId ? 'active-tab-id' : ''
  const onClickedTabId = () => {
    clickedTabId(tabId)
  }
  return (
    <li className="each-tab-item">
      <button
        type="button"
        className={`${classNameActiveTabId} each-tab-item-button`}
        onClick={onClickedTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
