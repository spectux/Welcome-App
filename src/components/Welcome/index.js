import {useState} from 'react'
import './index.css'

const Welcome = () => {
  const [subscribed, setSubscribed] = useState(false)

  const handleButtonClick = () => {
    setSubscribed(!subscribed)
  }

  return (
    <div className="welcome-container row">
    <div className="col-4">
      <h1 className="heading">Welcome</h1>
      <p className="paragraph">Thank you! Happy Learning</p>
      <button className="subscribe-button" onClick={handleButtonClick}>
        {subscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
    </div>
  )
}

export default Welcome
