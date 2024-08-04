import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { HouseFill, PersonFill, EnvelopeFill, BellFill, GearFill, HeartFill, StarFill, ChatFill, CartFill } from 'react-bootstrap-icons';
import './Cards.scss';

const iconMap = {
    house: HouseFill,
    person: PersonFill,
    envelope: EnvelopeFill,
    bell: BellFill,
    gear: GearFill,
    heart: HeartFill,
    star: StarFill,
    chat: ChatFill,
    cart: CartFill,
  };

function Cards({icon,title, description}) {

    const IconComponent = iconMap[icon];
  return (
    <Card className= "bg-light mb-5 p-5 h-100">
      <Card.Body className="card-content ">
      {IconComponent && <IconComponent size={50} className="icon-overlay" />}
        <Card.Title>
        {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
 
}

Cards.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Cards;