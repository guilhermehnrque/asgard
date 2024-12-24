import React from 'react';
import CardTitle from './CardTitle';

interface CardProps {
    title: string;
    children?: React.ReactNode
}

const CardForm: React.FC<CardProps> = ({ title }) => {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-full h-full mb-4">
            <div className="flex justify-between items-center mb-4">
                <CardTitle title={title} />
            </div>

            <div className="flex flex-col">

                <form className="form-container">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default CardForm;
