import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(eachObj => (
        <MovieItem key={eachObj.id} movieObj={eachObj} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
