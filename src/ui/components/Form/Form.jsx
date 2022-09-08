//Core
import { v4 as uuidv4 } from 'uuid';
//Parts
import Button from '../Button/Button';
//Styles
import './Form.css'

const Form = (props) => {

    const handleAdd = (event) => {
        event.preventDefault();
        const { onAdd } = props;
        onAdd({ id: uuidv4(), description: event.target.description.value });
        event.target.reset();
    }

    return (
        <form action="#" max className="form" onSubmit={handleAdd}>
            <input type="text" maxLength="44" name="description" className="form-input" />
            <Button buttonText="Add"/>
        </form>
    );
};

export default Form;