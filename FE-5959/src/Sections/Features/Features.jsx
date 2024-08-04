import Cards from '../../Components/Cards/Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const features = [
    {
        id:1,
        icon: "house",
        title: "Fresh New Layout",
        description:
        "With Bootstrap 5, we've created a fresh new layout for this template!"
    },
    {
        id:2,
        title: "Free to download",
        icon: "person",
        description:
        "As always, Start Bootstrap has a powerful collection of free templates."
    },
    {
        id:3,
        title: "Jumbotron hero header",
        icon: "envelope",
        description:
        "The heroic part of this template is the jumbotron hero header!"
    },
    {
        id:4,
        title: "Feature boxes",
        icon: "bell",
        description:
        "We've created some custom feature boxes using Bootstrap icons!"
    },
    {
        id:5,
        title: "Simple clean code",
        icon: "gear",
        description:
        "We keep our dependencies up to date and squash bugs as they come!"
    },
    {
        id:6,
        title: "A name you trust",
        icon: "heart",
        description:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
    }
]

function Features() {
    return (
      <Container>
        <Row>
          {features.map(feature => (
            <Col lg={4} sm={6} className="mb-4"  key={feature.id}>
              <Cards
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

export default Features;