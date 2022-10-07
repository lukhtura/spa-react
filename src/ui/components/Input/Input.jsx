//Core
import TextField from '@mui/material/TextField';

function Input(props) {
    const { input, meta, ...rest } = props;
    return (
        <>
            <TextField onChange={input.onChange} value={input.value} {...rest} />
            {meta.error && <span style={{color: 'red'}}>{meta.error}</span>}
        </>
    )
}

export default Input;