import React from 'react';

interface CardHeaderProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

const Body: React.FC<CardHeaderProps> = ({ title, description, children }) => {
    return (
        <div className="flex flex-col w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>

            <div className="flex-1 flex flex-col mt-4">
                {children}
            </div>
        </div>
    );
};

export default Body;
