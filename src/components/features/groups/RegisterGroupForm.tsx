import React from 'react';
import CardBody from '../../cards/CardBody';
import CardFooter from '../../cards/CardFooter';
import Button from '../../Button';

interface CardProps {
    children?: React.ReactNode
}

const RegisterGroupForm: React.FC<CardProps> = () => {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-full h-full mb-4">
            <CardBody>
                <form className="form-container mt-3">
                    <div className='block'>
                        <div className="flex justify-between items-top pb-1 mb-5 border-b border-gray-300">
                            <h2 className="font-bold text-gray-800">Dados do grupo </h2>
                        </div>

                        {/* Primeira linha ocupando 100% */}
                        <div className="mb-4">
                            <label className="mb-2 text-sm font-medium text-gray-600">Nome do grupo</label>
                            <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                        </div>

                        {/* Segunda linha com dois elementos: 15% e 75% */}
                        <div className="grid grid-cols-12 gap-4 mb-4">
                            <div className="col-span-12 sm:col-span-2">
                                <label className="mb-2 text-sm font-medium text-gray-600">Visibilidade</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                            <div className="col-span-12 sm:col-span-10">
                                <label className="mb-2 text-sm font-medium text-gray-600">Tipo de esporte</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                        </div>
                    </div>

                    <div className='block mt-5'>
                        <div className="flex justify-between items-top pb-1 mb-5 border-b border-gray-300">
                            <h2 className="font-bold text-gray-800">Endereço</h2>
                        </div>

                        <div className="mb-4">
                            <label className="mb-2 text-sm font-medium text-gray-600">Descrição do local</label>
                            <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                        </div>

                        {/* Segunda linha com dois elementos: 15% e 75% */}
                        <div className="grid grid-cols-12 gap-4 mb-4">
                            <div className="col-span-12 sm:col-span-10">
                                <label className="mb-2 text-sm font-medium text-gray-600">Rua</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                            <div className="col-span-12 sm:col-span-2">
                                <label className="mb-2 text-sm font-medium text-gray-600">Número</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="col-span-12 sm:col-span-1">
                                <label className="mb-2 text-sm font-medium text-gray-600">CEP</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <label className="mb-2 text-sm font-medium text-gray-600">Cidade</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                            <div className="col-span-12 sm:col-span-1">
                                <label className="mb-2 text-sm font-medium text-gray-600">Estado</label>
                                <input className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                            </div>
                        </div>

                    </div>

                </form>
            </CardBody>

            <CardFooter>
                <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 w-full">
                    <Button label="Voltar" onClick={() => { }} className="w-full sm:w-auto button-tertiary " />
                    <Button label="Salvar" onClick={() => { }} className="w-full sm:w-auto button-primary" />
                </div>
            </CardFooter>

        </div>
    );
};

export default RegisterGroupForm;
