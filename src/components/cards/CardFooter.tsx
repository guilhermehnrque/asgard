import React from 'react';

interface CardProps {
    children?: React.ReactNode
}

const CardFooter: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="block w-full">
            {children}
        </div>
    );
};

export default CardFooter;
