// Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="border-bottom bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col className="mt-4">
            <p className="mb-0">© 2024 Buse Yazgan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
