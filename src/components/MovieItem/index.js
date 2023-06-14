import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieObj} = props

  const settings = {
    width: '100%',
    height: '260px',
  }

  return (
    <Popup
      modal
      trigger={
        <img
          src={movieObj.thumbnailUrl}
          alt="thumbnail"
          className="video-thumbnail"
        />
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-container">
          <button
            type="button"
            className="close-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ReactPlayer {...settings} url={movieObj.videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
