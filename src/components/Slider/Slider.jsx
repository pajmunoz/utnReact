import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import Image from 'react-bootstrap/Image';

export default function Slider({ pictures }) {
    return (
        <div>
            <Carousel className="text-bg-dark">
            {pictures.map((picture) => (
                <Carousel.Item key={picture.id} >
                <Image
                    className="d-block mx-auto"
                    src={picture.url}
                    alt="First slide"
                />
               
            </Carousel.Item>
                     
                    ))}
            </Carousel>
        </div>
    )
}
