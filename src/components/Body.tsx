import React from 'react';

interface CardHeaderProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

const Body: React.FC<CardHeaderProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex-1 flex flex-col mt-4">
                {children}
            </div>
        </div>
    );
};

export default Body;
