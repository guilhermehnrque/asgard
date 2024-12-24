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
            {/* Header com título e botão para telas grandes */}
            <div className="flex justify-between items-center mb-4">
                <CardTitle title={title} />

                {/* Botão visível apenas em telas grandes */}
                <div className="hidden md:block">{children}</div>
            </div>

            {/* Corpo do card */}
            <div className="flex flex-col">
                {body.map((body, index) => (
                    <CardBody key={index} description={body.description} value={body.value} />
                ))}
            </div>

            {/* Botão visível apenas em telas pequenas */}
            <div className="mt-4 md:hidden flex justify-start flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Card;
