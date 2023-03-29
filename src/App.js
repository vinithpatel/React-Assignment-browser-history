import './App.css'
import {Component} from 'react'
import HistoryItem from './components/HistoryItem'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchText: '',
    historyList: initialHistoryList,
  }

  onDeleteHistoryItem = uniqueNo => {
    this.setState(prevState => {
      const {historyList} = prevState

      const filteredHistoryList = historyList.filter(
        eachHistory => eachHistory.id !== uniqueNo,
      )
      return {historyList: filteredHistoryList}
    })
  }

  onChangeValue = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {searchText, historyList} = this.state

    const filteredHistoryList = historyList.filter(eachHistory => {
      const historyTitle = eachHistory.title.toLowerCase()
      return historyTitle.includes(searchText.toLowerCase())
    })

    const isHistoryPresent = filteredHistoryList.length > 0

    return (
      <div className="bg-container">
        <div className="nav-bar">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="input-container">
            <img
              className="search-logo"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              className="input-search"
              placeholder="Search history"
              value={searchText}
              onChange={this.onChangeValue}
            />
          </div>
        </div>
        <div className="history-container">
          {isHistoryPresent && (
            <ul className="history-items-container">
              {filteredHistoryList.map(eachHistory => (
                <HistoryItem
                  key={eachHistory.id}
                  timeAccessed={eachHistory.timeAccessed}
                  logoUrl={eachHistory.logoUrl}
                  title={eachHistory.title}
                  domainUrl={eachHistory.domainUrl}
                  uniqueNo={eachHistory.id}
                  onDeleteHistoryItem={this.onDeleteHistoryItem}
                />
              ))}
            </ul>
          )}
          {!isHistoryPresent && (
            <p className="no-history-message">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
