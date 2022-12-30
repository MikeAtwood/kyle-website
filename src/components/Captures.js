import { Container, Row, Col } from "react-bootstrap"
import img1 from '../assets/img/battle1.jpeg';
import img2 from '../assets/img/battle2.jpeg';
import img3 from '../assets/img/battle3.jpg';
import img4 from '../assets/img/high.jpeg';
import img5 from '../assets/img/wart.jpg';
import img6 from '../assets/img/wart1.png';
import Carousel from 'react-bootstrap/Carousel';

export const Captures = () => {
    return (
        <section className="captures" id="captures">
            <Container>
                <Row>

                    <Col size={12}>
                        
                        <Carousel className="carousel">
                            <Carousel.Item interval={8000}>
                                <img
                                    className="d-block w-100"
                                    src={img4}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>High On Life</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={8000}>
                                <img
                                    className="d-block w-100"
                                    src={img5}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>War Thunder</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Battlefield 2042</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        

                        <div>
                            <h2>Captures</h2>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img1} class="w-00 shadow-1-strong rounded mb-4" alt="..." />
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img2} class="w-100 shadow-1-strong rounded mb-4" alt="..." />
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img3} class="w-100 shadow-1-strong rounded mb-4" alt="..." />
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img4} class="w-100 shadow-1-strong rounded mb-4" alt="..." />
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img5} class="w-100 shadow-1-strong rounded mb-4" alt="..." />
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img6} class="w-100 shadow-1-strong rounded mb-4" alt="..." />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}