import './index.css'
import {useState} from 'react'

const ReadMore = props => {
  const {reactHooksDescription} = props

  //write your code here
  const [text, setDescription] = useState(reactHooksDescription.slice(0, 170))
  const [isReadmoreReadlesstoggle, setReadmoreReadlesstoggle] = useState(true)
  const onClickReadmore = () => {
    if (isReadmoreReadlesstoggle) {
      setDescription(
        reactHooksDescription.slice(0, reactHooksDescription.length),
      )
      setReadmoreReadlesstoggle(false)
    } else {
      setDescription(reactHooksDescription.slice(0, 170))
      setReadmoreReadlesstoggle(true)
    }
  }

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">React Hooks</h1>
        <p className="subtitle">Hooks are a new addition to React</p>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <p className="description">{text}</p>
        <button type="button" className="button" onClick={onClickReadmore}>
          {isReadmoreReadlesstoggle ? 'Read More' : 'Read Less'}
        </button>
      </div>
    </div>
  )
}

export default ReadMore
