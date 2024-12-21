import { MainTitle } from '@components/index'
import Burger from '@assets/imgs/burger.jpg'
import Pizza from '@assets/imgs/pizza.jpg'
import Nuggets from '@assets/imgs/nuggets.jpg'
import Noodles from '@assets/imgs/noodles.jpeg'
import iceCream from '@assets/imgs/iceCream.webp'
import Salad from '@assets/imgs/salad.jpeg'
import Donut from '@assets/imgs/donut.jpeg'
import hotDog from '@assets/imgs/hotDog.webp'
import './Menu.css'
import { Container } from 'react-bootstrap'
const Menu = () => {
    return (
        <div className="menu">

            <Container>
                <MainTitle>Menu</MainTitle>
                <div className="menuList">
                    <div className="left">
                        <div className="menuCard">
                            <img src={Burger} alt="" />
                            <div className="details">
                                <h3>Burger</h3>
                            </div>
                        </div>
                        <div className="menuCard">
                            <img src={Salad} alt="" />
                            <div className="details">
                                <h3>Salad</h3>
                            </div>
                        </div>
                        <div className="menuCard">
                            <img src={Pizza} alt="" />
                            <div className="details">
                                <h3>Pizza</h3>
                            </div>
                        </div>
                        <div className="menuCard">
                            <img src={Noodles} alt="" />
                            <div className="details">
                                <h3>Noodles</h3>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="menuCard">
                            <img src={Nuggets} alt="" />
                            <div className="details">
                                <h3>Nuggets</h3>
                            </div>
                        </div>
                        <div className="menuCard">
                            <img src={hotDog} alt="" />
                            <div className="details">
                                <h3>Hot Dog</h3>
                            </div>
                        </div>
                        <div className="menuCard">
                            <img src={iceCream} alt="" />
                            <div className="details">
                                <h3>Ice Cream</h3>
                            </div>
                        </div>
                        <div className="menuCard">
                            <img src={Donut} alt="" />
                            <div className="details">
                                <h3>Donut</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Menu
