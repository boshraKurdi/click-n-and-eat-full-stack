import { actLogout, authLogout } from '@store/auth/authSlice';
import './Profile.css'
import { Button, MainTitle } from '@components/index';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { actGetUserOrders } from '@store/orders/ordersSlice';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal'
function Profile() {
    const cookie = Cookie();
    const { data } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { ordersList } = useAppSelector(state => state.orders);
    const logoutHandler = () => {
        dispatch(actLogout())
            .unwrap()
            .then(() => {
                cookie.remove('token');
                dispatch(authLogout())
                navigate('/');
            })
    }
    useEffect(() => {
        dispatch(actGetUserOrders());
    }, [])
    console.log(data?.user)
    const ordersCard = ordersList.map((order) => <div>
        {order.name}
    </div>)
    return (
        <Container className='profile'>
            <MainTitle>Profile</MainTitle>

            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="Settings" title="Settings">
                    <div className="settings">
                        <div>Name: {data?.user.name}</div>
                        <div>Email: {data?.user.email}</div>
                        <div><Button onClick={logoutHandler}>Logout</Button></div>
                    </div>
                </Tab>
                <Tab eventKey="My Orders" title="My Orders">
                    <div className="orders">
                        {ordersCard}
                    </div>
                </Tab>

            </Tabs>



        </Container>
    );
}

export default Profile;