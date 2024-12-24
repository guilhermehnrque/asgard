import React from "react";

interface Column<T> {
    header: string;
    accessor: keyof T;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    onRowClick?: (row: T) => void;
}

const Table = <T,>({ columns, data, onRowClick }: TableProps<T>) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="text-left px-4 py-2 text-gray-700 font-medium border-r"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`border-b hover:bg-gray-50 ${onRowClick ? "cursor-pointer" : ""
                                }`}
                            onClick={() => onRowClick?.(row)}
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-4 py-2 text-gray-600 border-r"
                                >
                                    {row[column.accessor] as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
