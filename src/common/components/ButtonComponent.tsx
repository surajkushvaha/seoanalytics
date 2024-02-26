import { Button } from 'primereact/button';

interface ButtonProps {
    label?: string;
    type?: any;
    onClick?: any;
    className?: string;
    disabled?: boolean;
    icon?: any;
    tooltip?: string;
    loading?: boolean;
}
const ButtonComponent: React.FC<ButtonProps> = ({
    label,
    type,
    onClick,
    disabled,
    icon,
    className,
    tooltip,
    loading,
}) => (
    <div className='custom-button-design'>
        <Button
            label={label}
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
            icon={icon}
            tooltip={tooltip}
            loading={loading}
        />
    </div>
);

export default ButtonComponent;
