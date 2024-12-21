import { MainTitle } from '@components/index'
import './Restaurant.css'
import { Container } from 'react-bootstrap'
import VersaillesRestaurant from '@assets/imgs/Versailles Restaurant.jpg'
import HotMeal from '@assets/imgs/Hot Meal.jpg'
import whiteSwan from '@assets/imgs/swan.jpg'
import Takeout from '@assets/imgs/take.png'
import Soul from '@assets/imgs/soulandvibe.jpeg'
import SubWay from '@assets/imgs/SubWay.jpg'
import Lazeez from '@assets/imgs/lazeezfood.avif'
import Dragon from '@assets/imgs/Dragonpalace.jpg'

const Restaurant = () => {
    return (
        <div className="rest">
            <Container>
                <MainTitle>Restuarants</MainTitle>
                <div className="restList">
                    <div className="left">
                        <div className="restCard">
                            <img src={VersaillesRestaurant} alt="" />
                            <div className="details">
                                <h3>Versailles</h3>
                            </div>
                        </div>
                        <div className="restCard">
                            <img src={HotMeal} alt="" />
                            <div className="details">
                                <h3>Hot Meal</h3>
                            </div>
                        </div>
                        <div className="restCard">
                            <img src={Takeout} alt="" />
                            <div className="details">
                                <h3>Curbside Delivery</h3>
                            </div>
                        </div>
                        <div className="restCard">
                            <img src={whiteSwan} alt="" />
                            <div className="details">
                                <h3>White Swan</h3>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="restCard">
                            <img src={Lazeez} alt="" />
                            <div className="details">
                                <h3>Lazeez Food</h3>
                            </div>
                        </div>
                        <div className="restCard">
                            <img src={SubWay} alt="" />
                            <div className="details">
                                <h3>Subway</h3>
                            </div>
                        </div>
                        <div className="restCard">
                            <img src={Soul} alt="" />
                            <div className="details">
                                <h3>Soul & Vibe</h3>
                            </div>
                        </div>
                        <div className="restCard">
                            <img src={Dragon} alt="" />
                            <div className="details">
                                <h3>Dragon Palace</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Restaurant
