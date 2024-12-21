import './Cart.css'
import burger from '@assets/imgs/burger.jpg';
import CartIcon from '@assets/svgs/bag-svgrepo-com.svg?react';
import { useState } from 'react';
const Cart = ({ count }: { count: number }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="cart" onClick={() => setShow(true)}>
                <div className="count">{count}</div>
                <CartIcon style={{ width: '50px', height: '50px' }} />
            </div>
            <div className={show ? "cartList show" : "cartList"}>
                <div className="cartItem">
                    <img src={burger} alt="" />
                    <div className="title">ksldlka</div>
                    <div className="counting">
                        <span className='plus'>
                            +</span>
                        <div className='num'>1</div>
                        <span className="minus">-</span>
                    </div>
                    <div className="price">20$</div>
                </div>
                <div className="cartItem">
                    <img src={burger} alt="" />
                    <div className="title">ksldlka</div>
                    <div className="counting">
                        <span className='plus'>
                            +</span>
                        <div className='num'>1</div>
                        <span className="minus">-</span>
                    </div>
                    <div className="price">20$</div>
                </div>
                <div className="total">
                    Total Price : 200$
                </div>
                <div className="btns">
                    <button onClick={() => setShow(!show)} className='close'>Close</button>
                    <button className='checkout'>Checkout</button>
                </div>
            </div>
        </>
    )
}
export default Cart
