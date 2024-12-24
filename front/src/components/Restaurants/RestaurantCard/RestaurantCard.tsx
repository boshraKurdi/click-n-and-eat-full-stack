import { Col } from 'react-bootstrap'
import './RestaurantCard.css'
import { TRestaurant } from '@customtypes/restaurant'
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ name, media, address, id }: TRestaurant) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/restaurant/${id}`);
    }
    return (
        <Col id={`${id}`} key={id} sm={12} xs={12} md={6} lg={6} xl={6} className="restCard" onClick={clickHandler}>
            <img src={`${media[0]?.original_url}`} alt="" />
            <div className="details">
                <h3>{name}</h3>
                <h3>{address}</h3>
            </div>
        </Col>)
}

export default RestaurantCard;
