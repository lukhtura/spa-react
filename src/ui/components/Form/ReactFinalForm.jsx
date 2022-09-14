//Core
import { Form, Field } from 'react-final-form';
import { v4 as uuidv4 } from 'uuid';
//Parts
import Button from '../Button/Button';
//Styles
import './Form.css'

const TodoForm = (props) => {

    const handleAdd = (event) => {
        event.preventDefault();
        const { onAdd } = props;
        onAdd({ id: uuidv4(), description: event.target.description.value });
        event.target.reset();
    }

    return (
        <Form
            render={() => {
                return (
                    <form action="#" className="form" onSubmit={handleAdd}>
                        <input type="text" maxLength="44" name="description" className="form-input" />
                        <Button buttonText="Add" />
                    </form>
                )
            }}
        />
    )
};

export default TodoForm;