import { InputText } from 'primereact/inputtext';

interface InputProps {
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: any;
    onBlur?: any;
    onFocus?: any;
    type?: any;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    id?: string;
    error?: string;
    touched?: boolean;
}
const InputTextComponent: React.FC<InputProps> = ({
    value,
    type,
    id,
    placeholder,
    onChange,
    name,
    className,
    required,
    disabled = false,
    onBlur,
    onFocus,
    error,
    touched
}) => (
    <div className="custom-input-design">
        <InputText 
          value={value} 
          onChange={onChange} 
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          className={className}
          required={required}
          disabled={disabled}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {error && touched ? (<p className="text-[0.7rem] error-message ps-2">{error}</p>) : ("")}
    </div>
);

export default InputTextComponent;
