import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const GoogleSuggestions = ({suggestionsList}) => {
  const [searchInput, setSearchInput] = useState('')

  const onClickSearchBar = val => {
    setSearchInput(val)
  }

  const onChangeSearchBar = e => {
    setSearchInput(e.target.value)
  }

  const searchResults = suggestionsList.filter(eachSuggestion =>
    eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="app-container">
      <div className="google-suggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-input-suggestions-container">
          <div className="search-input-container">
            <img
              alt="search icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={searchInput}
              onChange={onChangeSearchBar}
            />
          </div>
          <ul className="suggestions-list">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                onClickSearchBar={onClickSearchBar}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleSuggestions
