import React from 'react';
import CardTitle from './CardTitle';
import Table from '../tables/Table';

interface Header<T> {
    header: string;
    accessor: keyof T;
}

interface TableData<T> {
    headers: Header<T>[];
    body: T[];
}

interface CardTableProps<T> {
    title: string;
    tableData: TableData<T>;
    footerContent?: React.ReactNode;
    onRowClick?: (row: T) => void;
}

type RowType = Record<string, unknown>;

const CardTable = ({ title, tableData, footerContent, onRowClick }: CardTableProps<RowType>) => {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 w-full h-full">
            <CardTitle title={title} />

            <div className="overflow-x-auto">
                <Table columns={tableData.headers} data={tableData.body} onRowClick={onRowClick} />
            </div>

            {footerContent && <div className="mt-4">{footerContent}</div>}
        </div>
    );
};

export default CardTable;