import './Checkout.css'
import { Alert, Container, Form } from 'react-bootstrap'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, CartCardCheck, MainTitle } from '@components/index'
import { z } from 'zod';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hook';

const schema = z.object({
    first: z.string({ required_error: 'required field', invalid_type_error: 'First Name is required!' }),
    last: z.string({ required_error: 'required field', invalid_type_error: 'Last Name is required!' }),
    bank: z.string({ required_error: 'required field', invalid_type_error: 'Bank Number is required!' }),
    address: z.string({ required_error: 'required field', invalid_type_error: 'address is required!' }),
    password: z.string({ required_error: 'required field', invalid_type_error: 'Bank password is required!' }).min(8),
    phone: z.string({ required_error: 'required field', invalid_type_error: 'Phone Number is required!' }).min(12),
});

type Inputs = z.infer<typeof schema>;
type TUser = {
    first: string,
    last: string,
    bank: string,
    address: string,
    phone: string,
    password: string

}
const Checkout = () => {
    const { itemsCart } = useAppSelector(state => state.cart);
    const itemsCartCard = itemsCart.map(item => <CartCardCheck title={item.name} count={item.quantity} price={item.price} key={item.id} id={item.id} />)
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [bankNum, setBankNum] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const data: TUser = {
        first: first,
        last: last,
        phone: phone,
        address: address,
        bank: bankNum,
        password: password,


    }
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),

    });
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            // throw new Error();
            // console.log(data)
            // dispatch(actAuthRegister(data))
            //     .unwrap()
            //     .then(() => navigate('/order'))
            setFirst('')
            setLast('')
            setPhone('')
            setBankNum('')
            setAddress('')
            setPassword('')

        } catch (error) {
            // setError("bank", {
            //     message: 'This bank number is already taken'
            // })
        }
    }

    return (
        <div className='check'>
            <MainTitle>Checkout</MainTitle>
            <Container className='content'>
                <div className="left">
                    <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="username">
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control
                                    required type="text" placeholder="First Name"
                                    value={first} {...register("first"
                                    )}
                                    onChange={(e: any) => setFirst(e.target.value)} />
                                {!errors.first ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.first.message}</Alert>}
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control required type="text" placeholder="Last Name" {...register("last"

                                )}
                                    value={last}
                                    onChange={(e: any) => setLast(e.target.value)}
                                />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}
                                {!errors.last ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.last.message}</Alert>}
                            </Form.Group>

                        </div>
                        <div className="location">
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control required type="text" placeholder="Phone" {...register("phone"

                                )}
                                    value={phone}
                                    onChange={(e: any) => setPhone(e.target.value)}
                                />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}
                                {!errors.phone ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.phone.message}</Alert>}
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control required type="text" placeholder="Address" {...register("address"

                                )}
                                    value={address}
                                    onChange={(e: any) => setAddress(e.target.value)}
                                />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}
                                {!errors.address ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.address.message}</Alert>}
                            </Form.Group>
                        </div>


                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control required type="text" placeholder="Bank Number" {...register("bank"

                            )}
                                value={bankNum}
                                onChange={(e: any) => setBankNum(e.target.value)}
                            />
                            {/* {errors.email && <span>{errors.email.message}</span>} */}
                            {!errors.bank ? <Form.Text className="text-muted">
                            </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.bank.message}</Alert>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control required type="password" placeholder="Password" {...register('password'

                            )}
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)} />
                        </Form.Group>
                        {errors.password && <Alert className='dangerAlert' key='danger' variant='danger'>{errors.password.message}</Alert>}

                        <div className="loginBtn">
                            <Button
                                disabled={isSubmitting} type="submit">
                                {isSubmitting ? "Loading..." : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="right">
                    <div className="cartItems">
                        <h1>Cart List</h1>
                        <div className="list">
                            {itemsCartCard}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Checkout
