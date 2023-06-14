import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  renderActionMoviesSection = () => {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachObj => eachObj.categoryId === 'ACTION',
    )
    return (
      <div className="movie-category-container">
        <h1 className="movie-category-name">Action Movies</h1>
        <div>
          <MoviesSlider moviesList={actionMovies} />
        </div>
      </div>
    )
  }

  renderComedyMoviesSection = () => {
    const {moviesList} = this.props
    const comedyMovies = moviesList.filter(
      eachObj => eachObj.categoryId === 'COMEDY',
    )
    return (
      <div className="movie-category-container">
        <h1 className="movie-category-name">Comedy Movies</h1>
        <div>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="web-image"
        />
        <div className="videos-container">
          {this.renderActionMoviesSection()}
          {this.renderComedyMoviesSection()}
        </div>
      </div>
    )
  }
}

export default PrimeVideo
