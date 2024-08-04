
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './MainCard.scss'

function BasicExample() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="col-10">
        <Card className="bg-light" style={{textAlign: 'center' }}>
          <Card.Body>
            <Card.Title><h1 className="fw-bold mt-5">A warm Welcome!</h1></Card.Title>
            <Card.Text className="fs-4">
              Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
            </Card.Text>
            <Button className="btn btn-primary btn-lg mb-5" variant="primary">Call to action</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default BasicExample;
