import React from 'react';

interface CardTitleProps {
    title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
    return (
        <div className="flex justify-between items-top">
            <h2 className="text-base font-bold text-black">{title}</h2>
        </div>
    );
};

export default CardTitle;
