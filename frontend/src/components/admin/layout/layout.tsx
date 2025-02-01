import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";

export const Layout = () => {
    const itemRenderer = (item: MenuItem) => (
        <div className="p-menuitem-content">
            <a className="flex align-items-center p-menuitem-link">
                <span className="mx-2 text-white">{item.label}</span>
            </a>
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
                    template: itemRenderer,
                },
                {
                    label: "Тесты",
                    template: itemRenderer,
                },
                {
                    label: "Вопросы",
                    template: itemRenderer,
                },
                {
                    label: "Ответы на вопросы",
                    template: itemRenderer,
                },
                {
                    label: "Пользователи",
                    template: itemRenderer,
                },
                {
                    label: "Результаты",
                    template: itemRenderer,
                },
            ],
        },
    ];

    return <Menu model={items} className="w-full md:w-15rem h-screen bg-indigo-700" />;
};
