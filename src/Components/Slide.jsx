/* eslint-disable react/no-unknown-property */
import './css/slide.css'
import Carousel from 'react-bootstrap/Carousel';
function Slide() {
    return (
        <div className='slidebar'>
            <Carousel fade>
                <Carousel.Item>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/home/250208/1440x640_VD_Sale_02.jpg?$ORIGIN_JPG$" alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/b2c-Exclusive-Color_1440x640_Home-page_Paradigm-130225.jpg?$ORIGIN_JPG$" alt="" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/HKV_1440x640-2.jpg?$ORIGIN_JPG$" alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/b2c-1440x640_Home-page_Paradigm.jpg?$ORIGIN_JPG$" alt="" srcset="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Slide
