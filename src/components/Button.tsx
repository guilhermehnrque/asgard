import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className}) => {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
        >
            {label}
        </button>

    );
};

export default Button;