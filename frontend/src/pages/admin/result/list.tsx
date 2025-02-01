import { ColumnMeta } from "../../../common";
import { DataView } from "../../../components/admin/dataView/dataView";

type ResultItem = {
    id: string;
    user: string;
    test: string;
    result: number;
};

const items: ResultItem[] = [
    {
        id: "1",
        user: "Иван Иванов",
        test: "Тест 1",
        result: 50,
    }
];

export const ResultList = () => {
    const columns: ColumnMeta[] = [
        { field: "user", header: "Пользователь" },
        { field: "test", header: "Тест" },
        { field: "result", header: "Результат" },
    ];

    return <DataView items={items} columns={columns} />;
};
