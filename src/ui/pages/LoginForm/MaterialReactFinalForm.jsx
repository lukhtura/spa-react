//Core
import { Form, Field } from 'react-final-form';

//Components
import Button from '@mui/material/Button'
import Input from '../Input/Input';

//Styles
import './LoginForm.css';

function MaterialReactFinalForm() {
    const onSubmit = (e) => {
        return e;
    };

    const validate = (values) => {
        const errors = {};
        if (values.login === undefined) {
            errors.login = 'Required';
        };
        if (values.password === undefined) {
            errors.password = 'Required';
        }
        return errors;
    }

    return (
        <div className="login-form-container">
            <h1 className='login-form-header'>LoginForm</h1>
            <Form 
            onSubmit={onSubmit}
            validate={validate}
            render={(props) => {
                const { handleSubmit, errors } = props;
                return (
                    <form onSubmit={handleSubmit} className='login-form'>
                        <Field component={Input} label='Your email' name='login' />
                        <Field component={Input} label='Your password' name='password' />
                        <Button disabled={Object.keys(errors).length !== 0} type="submit" variant='outlined' > Send </Button>
                    </form>
                )
            }}/>
        </div>
    )
};

export default MaterialReactFinalForm;