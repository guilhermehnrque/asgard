import React from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

interface CardProps {
    title: string;
    lines: { description: string; value: string }[];
    footerContent?: React.ReactNode;
}

const CardItem: React.FC<CardProps> = ({ title, lines, footerContent }) => {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-full h-full">
            <CardTitle title={title} />

            <CardBody>
                {lines.map((line, index) => (
                    <div key={index} className="mb-1 w-full block">
                        <div className="block text-gray-900">
                            <span className="text-xs font-semibold text-gray-600 mr-2">{line.description}</span>
                            <span className="text-xs font-semibold">{line.value}</span>
                        </div>
                    </div>
                ))}
            </CardBody>

            <CardFooter>
                {footerContent}
            </CardFooter>
        </div>
    );
};

export default CardItem;
