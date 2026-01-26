import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props
  const {displayText} = tabDetails

  const updateActiveTabIdfunc = () => {
    updateActiveTabId(tabDetails.tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={updateActiveTabIdfunc}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
