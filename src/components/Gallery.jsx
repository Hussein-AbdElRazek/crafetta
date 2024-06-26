import classes from './styles/Gallery.module.css'
import furniture1 from '../assets/furniture1.png'
import furniture2 from '../assets/furniture2.png'
import sweet1 from '../assets/sweet1.png'
import pancake from '../assets/pancake.png'
import cookies from '../assets/cookies.png'
import fashion1 from '../assets/fashion1.jpg'
import fashion2 from '../assets/fashion2.jpg'
import fashion3 from '../assets/fashion3.jpg'
import fashion4 from '../assets/fashion4.jpg'
import fashion5 from '../assets/fashion5.jpg'

const Gallery = () =>
{
    return (
        <div
            className={classes.gallery}
        >
            <img src={furniture1} alt="" />
            <img src={furniture2} alt="" />

            <img src={sweet1} alt="" />
            <img src={cookies} alt="" />
            <img src={pancake} alt="" />
            
            <img src={fashion4} alt="" />
            <img src={fashion1} alt="" />
            <img src={fashion2} alt="" />
            <img src={fashion3} alt="" />
            <img src={fashion5} alt="" />

        </div>
    )
}

export default Gallery