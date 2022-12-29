import { Container, Row, Col } from "react-bootstrap"
import img1 from '../assets/img/battle1.jpeg';
import img2 from '../assets/img/battle2.jpeg';
import img3 from '../assets/img/battle3.jpg';
import img4 from '../assets/img/high.jpeg';
import img5 from '../assets/img/wart.jpg';
import img6 from '../assets/img/wart1.png';


export const Captures = () => {
    return (
        <section className="captures" id="captures">
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Captures</h2>
                        </div>

                        <div class="row">
                            <div class="col-sm-6 col-md-4 mb-3">
                                <img src={img1} class="w-100 shadow-1-strong rounded mb-4" alt="..." />
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