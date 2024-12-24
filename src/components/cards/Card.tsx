import React from 'react';
import CardBody from './CardBody';
import CardTitle from './CardTitle';

interface CardProps {
    title: string;
    body: {
        description: string;
        value: string;
    }[];
    children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, body, children }) => {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-full h-full mb-4">
            <div className="flex justify-between items-center mb-4">
                <CardTitle title={title} />

                <div className="hidden md:block">{children}</div>
            </div>

            <div className="flex flex-col">
                {body.map((body, index) => (
                    <CardBody key={index} description={body.description} value={body.value} />
                ))}
            </div>

            <div className="mt-4 md:hidden flex justify-start flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Card;
