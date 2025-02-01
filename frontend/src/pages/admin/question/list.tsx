import { Card } from "primereact/card";
import { ColumnMeta } from "../../../common";
import { DataView } from "../../../components/admin/dataView/dataView";

type QuestionItem = {
    id: string;
    name: string;
    test: string;
};

const items: QuestionItem[] = [
    {
        id: "1",
        name: "Основная масса угроз информационной безопасности приходится на",
        test: "Тест 1",
    },
    {
        id: "2",
        name: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
        test: "Тест 1",
    },
    {
        id: "3",
        name: "Под какие системы распространение вирусов происходит наиболее динамично?",
        test: "Тест 1",
    },
    {
        id: "4",
        name: "Заключительным этапом построения системы защиты является",
        test: "Тест 1",
    },
    {
        id: "5",
        name: "Какие угрозы безопасности информации являются преднамеренными ?",
        test: "Тест 1",
    },
];

export const QuestionList = () => {
    const columns: ColumnMeta[] = [
        { field: "name", header: "Текст вопроса" },
        { field: "test", header: "Тест" },
    ];

    return (
        <Card title="Список вопросов">
            <DataView items={items} columns={columns} />
        </Card>
        
    )
};
