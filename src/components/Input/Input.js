import "./style.css";

const Input = ({type, name, placeholder, className, value }) => {    

    const fieldId = `id_${name}`;

    const finalClassName = className + ' input-component';

    return (
        <input className={finalClassName} id={fieldId} type={type} name={name} placeholder={placeholder} defaultValue={value} />
    )
}

export default Input