import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/xbox.png';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-md-start">
                        <div className="social-icon">
                        <a href="https://account.xbox.com/en-us/Profile?xr=mebarnav&rtc=1"><img src={navIcon3} alt="xbox"></img></a>
                        <a href="https://www.facebook.com/kyle.atwood.94"><img src={navIcon1} alt="facebook" /></a>
                        <a href="https://twitter.com/KyleAtwood19"><img src={navIcon2} alt="twitter" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}