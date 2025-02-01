import { Card } from "primereact/card";
import { ColumnMeta } from "../../../common";
import { DataView } from "../../../components/admin/dataView/dataView";
import { boolFieldTemplate } from "../../../components/fieldTemplates";
import { Button } from "primereact/button";

type AnswerItem = {
    id: string;
    text: string;
    isRight: boolean;
    cost: string;
    question: string;
};

const items: AnswerItem[] = [
    {
        id: "1",
        text: "Троянские программы",
        isRight: true,
        cost: "1",
        question: "Основная масса угроз информационной безопасности приходится на",
    },
    {
        id: "2",
        text: "Черви",
        isRight: false,
        cost: "0",
        question: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
    },
    {
        id: "3",
        text: "Шпионские программы",
        isRight: false,
        cost: "0",
        question: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
    },

    {
        id: "4",
        text: "одноразовые пароли",
        isRight: false,
        cost: "0",
        question: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
    },
    {
        id: "5",
        text: "постоянные пароли",
        isRight: true,
        cost: "1",
        question: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
    },
    {
        id: "6",
        text: "системы PKI",
        isRight: false,
        cost: "0",
        question: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
    },

    {
        id: "7",
        text: "Windows",
        isRight: false,
        cost: "0",
        question: "Под какие системы распространение вирусов происходит наиболее динамично ?",
    },
    {
        id: "8",
        text: "Mac OS",
        isRight: false,
        cost: "0",
        question: "Под какие системы распространение вирусов происходит наиболее динамично ?",
    },
    {
        id: "9",
        text: "Android",
        isRight: true,
        cost: "0",
        question: "Под какие системы распространение вирусов происходит наиболее динамично ?",
    },
];

export const AnswerList = () => {
    const columns: ColumnMeta[] = [
        { field: "question", header: "Вопрос" },
        { field: "text", header: "Ответ" },
        {
            field: "isRight",
            header: "Правильнй?",
            body: (rowData: AnswerItem) => boolFieldTemplate(rowData.isRight),
        },
        { field: "cost", header: "Вес ответа" },
    ];


    const header = (
        <div className="ml-3 pt-3">
            <Button label="Добавить ответ" icon="pi pi-plus" severity="success" />
        </div>
        
    )

    return (
        <Card header={header}>
            <DataView items={items} columns={columns} />
        </Card>
        
    )
};
