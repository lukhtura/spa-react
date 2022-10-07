//Core
import  { useFormField }  from '../../_helpers/hooks/useFormField';

//Styles
import './LoginForm.css'

function LoginForm() {
    const {onChange: onChangeEmail, value: valueEmail} = useFormField();
    const {onChange: onChangePassword, value: valuePassword} = useFormField();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({valueEmail, valuePassword})
    }

    return (
        <div className="login-form-container">
            <h1 className='login-form-header'>LoginForm</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>
                    <p>Your email:</p>
                    <input className='login-form-input' type="email" value={valueEmail} onChange={onChangeEmail} />
                </label>
                <label>
                    <p>Your password: </p>
                    <input className='login-form-input' type="password" value={valuePassword} onChange={onChangePassword} />
                </label>
                <button className='login-form-input login-form-button'
                disabled={valueEmail === '' || valuePassword === ''}
                >Send</button>
            </form>
        </div>
    )
};

export default LoginForm;