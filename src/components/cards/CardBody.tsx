import React from 'react';

interface CardBodyProps {
    description: string;
    value: string;
}

const CardTitle: React.FC<CardBodyProps> = ({ description, value }) => {
    return (
        <div className="flex justify-start items-center text-gray-900 mb-2">
            <span className="text-xs font-semibold text-gray-600 mr-1">{description}</span>
            <span className="text-xs font-semibold">{value}</span>
        </div>
    );
};

export default CardTitle;
