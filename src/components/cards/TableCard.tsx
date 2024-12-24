import React from 'react';
import CardTitle from './CardTitle';
import Table from '../tables/Table';

interface Header {
    header: string;
    accessor: string;
}

interface TableCardProps {
    title: string;
    body: {
        headers: Header[];
        data: Record<string, any>[];
    };
    children?: React.ReactNode;
}

const TableCard: React.FC<TableCardProps> = ({ title, body, children }) => {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-full h-full mb-4">
            <div className="flex justify-between items-center mb-4">
                <CardTitle title={title} />
                <div className="hidden md:block">{children}</div>
            </div>

            <div className="flex flex-col">
                <Table columns={body.headers} data={body.data} />
            </div>
        </div>
    );
};

export default TableCard;
