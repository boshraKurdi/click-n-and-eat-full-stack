import { Col } from 'react-bootstrap'
import './CategoryCard.css'
import { TCategory } from '@customtypes/category'

const CategoryCard = ({ name }: TCategory) => {
    const clickHandler = () => {
        const menuCard = document.querySelectorAll('.menuCard');
        const menuCardImg = document.querySelectorAll('.menuCard img');
        const menuCardP = document.querySelectorAll('.menuCard p');
        menuCardImg.forEach((menu) => {
            menu.addEventListener('click', (e: any) => {
                menuCard.forEach(menu => menu.classList.remove('active'));
                (e.target.parentElement as Element).classList.add('active');
            })
        })
        menuCardP.forEach((menu) => {
            menu.addEventListener('click', (e: any) => {
                menuCard.forEach(menu => menu.classList.remove('active'));
                (e.target.parentElement as Element).classList.add('active');

            })
        })
        menuCard.forEach((menu) => {
            menu.addEventListener('click', (e: any) => {
                menuCard.forEach(menu => menu.classList.remove('active'));
                (e.target as Element).classList.add('active');
            })
        })
    }
    return (
        <Col onClick={clickHandler} lg={3} md={4} sm={4} className="menuCard">
            {/* <img src={`${media[0]?.original_url}`} alt="" /> */}
            <p>{name}</p>
        </Col>)
}

export default CategoryCard
