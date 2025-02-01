import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";

export const TestPage = () => {
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked) _ingredients.push(e.value);
        else _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    };

    return (
        <Card title="Тест 1" className="w-full ml-2">
            <div>
                <h2>Основная масса угроз информационной безопасности приходится на</h2>
                <div className="flex flex-column flex-wrap gap-3">
                    <div className="flex align-items-center">
                        <RadioButton
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={(e) => setIngredient(e.value)}
                            checked={ingredient === "Cheese"}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                            Троянские программы
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={(e) => setIngredient(e.value)}
                            checked={ingredient === "Mushroom"}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                            Черви
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton
                            inputId="ingredient3"
                            name="pizza"
                            value="Pepper"
                            onChange={(e) => setIngredient(e.value)}
                            checked={ingredient === "Pepper"}
                        />
                        <label htmlFor="ingredient3" className="ml-2">
                            Шпионские программы
                        </label>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h2>
                    Какой вид идентификации и аутентификации получил наибольшее распространение?
                </h2>
                <div className="flex flex-column flex-wrap justify-content-center gap-3">
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Cheese")}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                            одноразовые пароли
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Mushroom")}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                            постоянные пароли
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient3"
                            name="pizza"
                            value="Pepper"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Pepper")}
                        />
                        <label htmlFor="ingredient3" className="ml-2">
                            системы PKI
                        </label>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h2>Под какие системы распространение вирусов происходит наиболее динамично?</h2>
                <div className="flex flex-column flex-wrap justify-content-center gap-3">
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Cheese")}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                            Windows
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Mushroom")}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                            Android
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient3"
                            name="pizza"
                            value="Pepper"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Pepper")}
                        />
                        <label htmlFor="ingredient3" className="ml-2">
                            Mac OS
                        </label>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h2>Заключительным этапом построения системы защиты является</h2>
                <div className="flex flex-column flex-wrap justify-content-center gap-3">
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Cheese")}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                            анализ уязвимых мест
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Mushroom")}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                            планирование
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient3"
                            name="pizza"
                            value="Pepper"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Pepper")}
                        />
                        <label htmlFor="ingredient3" className="ml-2">
                            сопровождение
                        </label>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h2>Какие угрозы безопасности информации являются преднамеренными ?</h2>
                <div className="flex flex-column flex-wrap justify-content-center gap-3">
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Cheese")}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                            Ошибки персонала
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Mushroom")}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                            Не авторизованный доступ
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox
                            inputId="ingredient3"
                            name="pizza"
                            value="Pepper"
                            onChange={onIngredientsChange}
                            checked={ingredients.includes("Pepper")}
                        />
                        <label htmlFor="ingredient3" className="ml-2">
                            Открытие электронного письма, содержащего вирус
                        </label>
                    </div>
                </div>
            </div>

            <hr />
            
            <Button label="Завершить тест" security="secondary"/>
        </Card>
    );
};
