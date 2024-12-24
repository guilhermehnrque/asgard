import React from 'react';
import CardBody from './OldCardBody';
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
        <div className="flex flex-col flex- bg-white border border-gray-300 rounded-lg p-4 w-full h-full mb-4">
            <CardTitle title={title} />
            <CardBody key={1} description={body[0].description} value={body[0].value} />

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
