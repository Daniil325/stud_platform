import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";


export const LeftMenu = () => {
    const itemRenderer = (item: MenuItem) => (
        <div className="p-menuitem-content">
            <Link 
                to={"/admin/" + item.engLabel}
                className="flex align-items-center p-menuitem-link"
            >
                <span className="mx-2 text-white">{item.label}</span>
            </Link>
        </div>
    );

    let items: MenuItem[] = [
        {
            template: () => {
                return (
                    <span className="inline-flex gap-1 px-2 py-2">
                        <span className="font-medium text-xl font-semibold text-white">
                            Админ панель
                        </span>
                    </span>
                );
            },
        },
        {
            items: [
                {
                    label: "Темы",
                    engLabel: "theme",
                    template: itemRenderer,
                },
                {
                    label: "Тесты",
                    engLabel: "tests",
                    template: itemRenderer,
                },
                {
                    label: "Вопросы",
                    engLabel: "questions",
                    template: itemRenderer,
                },
                {
                    label: "Ответы на вопросы",
                    engLabel: "answers",
                    template: itemRenderer,
                },
                {
                    label: "Пользователи",
                    engLabel: "users",
                    template: itemRenderer,
                },
                {
                    label: "Результаты",
                    engLabel: "results",
                    template: itemRenderer,
                },
            ],
        },
    ];

    return <Menu model={items} className="w-full md:w-15rem h-screen bg-indigo-700" />;
};

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
    <div className="min-h-screen surface-ground flex">
        <LeftMenu/>
        <div className="p-3 w-full">
            {children}
        </div>
    </div>
);
}
