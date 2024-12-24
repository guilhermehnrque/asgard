import React from 'react';

interface CardBodyProps {
    children?: React.ReactNode
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
    return (
        <div className="block text-gray-900 mb-2">
            {children}
        </div>
    );
};

export default CardBody;
