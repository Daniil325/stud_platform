import { ColumnMeta } from "../../../common";
import { DataView } from "../../../components/admin/dataView/dataView";

type ThemeItem = {
    id: string;
    name: string;
    description: string;
    lectionId?: string;
    testId: string;
};

const items: ThemeItem[] = [
    {
        id: "1",
        name: "Лекция 1",
        description: "описание",
        lectionId: "213",
        testId: "123",
    },
    {
        id: "2",
        name: "Лекция 1",
        description: "описание",
        lectionId: "213",
        testId: "123",
    },
    {
        id: "3",
        name: "Лекция 1",
        description: "описание",
        lectionId: "213",
        testId: "123",
    },
    {
        id: "4",
        name: "Лекция 1",
        description: "описание",
        lectionId: "213",
        testId: "123",
    },
];

export const ThemeList = () => {
    const columns: ColumnMeta[] = [
        { field: "name", header: "Название" },
        { field: "description", header: "Описание" },
        { field: "lectionId", header: "Лекция" },
        { field: "testId", header: "Тест" },
    ];

    return <DataView items={items} columns={columns} />;
};
