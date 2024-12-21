import { Card } from 'react-bootstrap';
import './ProductCard.css'
import Button from '@components/feedBack/Button/Button';
import React from 'react';
type TProduct = {
    text: string,
    title: string,
    img: string,
    price: React.ReactNode
}
function ProductCard({ img, title, text, price }: TProduct) {
    return (
        <Card style={
            {
                width: '18rem'
            }
        }> <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}                </Card.Text>
                <Card.Text className='price'>
                    {price}$
                </Card.Text>
                <Button>Buy</Button>
            </Card.Body>
        </Card>);
}

export default ProductCard;