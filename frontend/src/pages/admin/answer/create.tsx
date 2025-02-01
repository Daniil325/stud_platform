import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const CreateAnswer = () => {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: "Основная масса угроз информационной безопасности приходится на", code: "NY" },
        {
            name: "Какой вид идентификации и аутентификации получил наибольшее распространение?",
            code: "RM",
        },
        {
            name: "Под какие системы распространение вирусов происходит наиболее динамично?",
            code: "LDN",
        },
        { name: "Заключительным этапом построения системы защиты является", code: "IST" },
        { name: "Какие угрозы безопасности информации являются преднамеренными ?", code: "PRS" },
    ];

    return (
        <Card title="Добавление ответа">
            <div className="card flex align-items-center gap-3">
                <h3>Текст ответа</h3>
                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="card flex align-items-center gap-3">
                <h3>Вопрос</h3>
                <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Выбрать вопрос"
                    className="w-full md:w-14rem"
                />
            </div>

            <div className="card flex align-items-center gap-3">
                <h3>Правильный?</h3>
                <Checkbox onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
            </div>
            <Button label="Добавить" severity="success" />
        </Card>
    );
};
