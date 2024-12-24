import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="py-2 px-4 rounded block bg-slate-950 text-white text-xs hover:bg-blue-700 w-full sm:w-32"
            onClick={onClick}
        >
            {label}
        </button>

    );
};

export default Button;