import './Button.css'
type TButton = {
    children: React.ReactNode | string,
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset'
}
const Button = ({ children, disabled, type }: TButton) => {
    return (
        <button disabled={disabled} type={type} className='button'>
            {children}
        </button>
    )
}

export default Button
