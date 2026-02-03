import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onClickSearchBar} = props
  const {suggestion} = suggestionDetails

  const onClickSearchBarfun = e => {
    onClickSearchBar(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSearchBarfun}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
