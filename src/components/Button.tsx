import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            className={`py-2 px-4 rounded bg-blue-500 text-white text-sm hover:bg-blue-700 w-32}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;