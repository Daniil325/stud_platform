import { DataTable } from "primereact/datatable"
import { ColumnMeta } from "../../../common"
import { Column } from "primereact/column"

type Props = {
    items: object[],
    columns: ColumnMeta[]
}

export const DataView = ({items, columns}: Props) => {
    return (
        <div className="card">
            <DataTable 
                value={items}
                showGridlines
                rowHover
            >
            {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} body={col.body} />
                ))}
            </DataTable>
        </div>
    )
}