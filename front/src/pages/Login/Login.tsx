import { Alert, Container, Form } from 'react-bootstrap'
import './Login.css'
import { zodResolver } from '@hookform/resolvers/zod'
import './Login.css'
import { Button } from '@components/index'
import { z } from 'zod';
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from 'react-router-dom'
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type Inputs = z.infer<typeof schema>;
const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            throw new Error();
            console.log(data)

        } catch (error) {
            setError("email", {
                message: 'This email is already taken'
            })
        }
    }
    return (
        <div className="login">
            <Container className='loginCont'>
                <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" {...register("email"

                        )} />
                        {/* {errors.email && <span>{errors.email.message}</span>} */}
                        {!errors.email ? <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.email.message}</Alert>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" {...register('password'

                        )} />
                    </Form.Group>
                    {errors.password && <Alert className='dangerAlert' key='danger' variant='danger'>{errors.password.message}</Alert>}

                    <div className="textCreate">
                        <NavLink to='/registeration'>Create a new account</NavLink>
                    </div>
                    <div className="loginBtn">
                        <Button
                            disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Loading..." : "Submit"}
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Login
