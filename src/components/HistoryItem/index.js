import './index.css'

const HistoryItem = props => {
  const {
    uniqueNo,
    timeAccessed,
    logoUrl,
    title,
    domainUrl,
    onDeleteHistoryItem,
  } = props
  const onClickDeleteLog = () => {
    onDeleteHistoryItem(uniqueNo)
  }

  return (
    <li className="history-item">
      <div className="history-info-card">
        <p className="time">{timeAccessed}</p>
        <div className="title-info-card">
          <img
            className="history-domain-logo"
            src={logoUrl}
            alt="domain logo"
          />
          <div className="title-card">
            <p className="title">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onClickDeleteLog}
        data-testid="delete"
      >
        <img
          className="delete-logo"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
