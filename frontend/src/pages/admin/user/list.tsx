import { ColumnMeta } from "../../../common";
import { DataView } from "../../../components/admin/dataView/dataView";

type UserItem = {
    id: string;
    username: string;
};

const items: UserItem[] = [
    {
        id: "1",
        username: "admin",
    },
     {
        id: "2",
        username: "Иван Иванов",
    },
   
];

export const UserList = () => {
    const columns: ColumnMeta[] = [
        { field: "username", header: "Имя пользователя" },
    ];

    return <DataView items={items} columns={columns} />;
};
