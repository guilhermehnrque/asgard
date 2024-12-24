import React from 'react';

interface CardTitleProps {
    title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
    return (
        <div className="flex justify-between items-top mb-2">
            <h2 className="font-bold text-gray-800">{title}</h2>
        </div>
    );
};

export default CardTitle;
