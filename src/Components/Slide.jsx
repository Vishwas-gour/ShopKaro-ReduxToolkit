/* eslint-disable react/no-unknown-property */
import './css/slide.css'
import Carousel from 'react-bootstrap/Carousel';
function Slide() {
    return (
        <div className='slidebar'>
            <Carousel black>
                <Carousel.Item>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/home/250208/1440x640_VD_Sale_02.jpg?$ORIGIN_JPG$" alt="" />
                    <Carousel.Caption>
                        <h3>  Galaxy A35 </h3>
                        <p>Avail up to ₹ 9000* instant bank discount or up to ₹ 10000* Upgrade bonus</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/b2c-Exclusive-Color_1440x640_Home-page_Paradigm-130225.jpg?$ORIGIN_JPG$" alt="" />

                    <Carousel.Caption>
                        <h3>Galaxy S25 Series Specila Colors </h3>
                        <p>Avail up to ₹ 9000* instant bank discount or ₹ 10000* Upgrade bonus</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/HKV_1440x640-2.jpg?$ORIGIN_JPG$" alt="" />
                    <Carousel.Caption>
                        <h3>Galaxy S25 Ultra</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://images.samsung.com/is/image/samsung/assets/in/offer/b2c-1440x640_Home-page_Paradigm.jpg?$ORIGIN_JPG$" alt="" srcset="" />
                    <Carousel.Caption>
                        <h3>Galaxy S25 | S25+</h3>
                        <p>
                        Get 50% off on Galaxy Accessories 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Slide
