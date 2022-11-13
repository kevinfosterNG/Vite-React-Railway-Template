import React from 'react'
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from '@tanstack/react-table'
import Spinner from './Spinner'
import { Link } from 'react-router-dom';


function DataTable(props) {
    // console.log("Data:",props.data);
    // console.log("Schema for this table: ", props.schema);

    const columnHelper = createColumnHelper();
    const columns = [];
    const fields = props.schemas.find(x => x.id === props.schema) ? props.schemas.find(x => x.id === props.schema).fields : [];

    //define the column for each of the elements in the data
    fields.forEach( f => {
        if (f === "id") return;
        columns.push(columnHelper.accessor(f, {header: () => f, cell: info => info.getValue()}))
    })

    const data = props.data;
    const table = useReactTable({
        //dataTable,
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })

    return (typeof props.data === 'undefined') ? <Spinner/> : 
        <div className="p-2">
            <Link to="./new">ADD</Link>
            <table className='table table-zebra table-compact'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                        <th key={header.id}>
                            {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
}

export default DataTable