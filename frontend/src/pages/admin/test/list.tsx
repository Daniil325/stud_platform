import { ColumnMeta } from "../../../common";
import { DataView } from "../../../components/admin/dataView/dataView";

type TestItem = {
    id: string;
    name: string;
    minScore: number,
    timeLimit: number
};

const items: TestItem[] = [
    {
        id: "1",
        name: "тест 1",
        minScore: 30,
        timeLimit: 20
    },
]

export const TestList = () => {
    const columns: ColumnMeta[] = [
        {field: "name", header: "Название"},
        {field: "minScore", header: "Минимальный балл"},
        {field: "timeLimit", header: "Ограничение по времени(в минутах)"},
    ]

    return <DataView items={items} columns={columns} />;
}
