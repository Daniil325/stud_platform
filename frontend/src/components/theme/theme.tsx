import styles from "./style.module.css";

export const Theme = () => {
    return (
        <div className={styles.theme__container}>
            <div className={styles.theme_wrapper}>
                <h2 className={styles.theme_title}>Лекция 1</h2>
                <p className={styles.theme_description}>
                    Распространение компьютерных систем, объединение их в коммуникационные сети
                    усиливает возможности электронного проникновения в них. Проблема компьютерной
                    преступности во всех странах мира, независимо от их географического положения,
                    вызывает необходимость привлечения все большего внимания и сил общественности
                    для организации борьбы данным видом преступлений.
                </p>

                <p className={styles.theme_link}>
                    <img src="./public/pdf.png" alt="" />
                    <span className={styles.theme_link__text}>Файл с лекцией</span>
                </p>

                <p className={styles.theme_link}>
                    <img src="./public/test.svg" alt="" />
                    <span className={styles.theme_link__text}>Тест к лекции</span>
                </p>
            </div>
        </div>
    );
};

export const Theme2 = () => {
    return (
        <div className={styles.theme__container}>
            <div className={styles.theme_wrapper}>
                <h2 className={styles.theme_title}>Лекция 2</h2>
                <p className={styles.theme_description}>
                    В современном мире большинство корпоративных систем, приложений и данных
                    становятся доступными из Глобальной сети, вследствие чего компании сталкиваются
                    с возрастающим числом различных угроз для своей информационной инфраструктуры –
                    НСД, вирусы, атаки типа «отказ в обслуживании» и другие виды вторжений, мишенью
                    для которых становятся приложения, компьютерные сети и инфраструктура КИС
                    (корпоративных информационных систем).
                </p>

                <p className={styles.theme_link}>
                    <img src="./public/pdf.png" alt="" />
                    <span className={styles.theme_link__text}>Файл с лекцией</span>
                </p>

                <p className={styles.theme_link}>
                    <img src="./public/test.svg" alt="" />
                    <span className={styles.theme_link__text}>Тест к лекции</span>
                </p>
            </div>
        </div>
    );
};

export const Theme3 = () => {
    return (
        <div className={styles.theme__container}>
            <div className={styles.theme_wrapper}>
                <h2 className={styles.theme_title}>Лекция 3</h2>
                <p className={styles.theme_description}>
                    Информационная безопасность Российской Федерации (на уровне государства) –
                    состояние защищенности личности, общества и государства от внутренних и внешних
                    информационных угроз, при котором обеспечиваются реализация конституционных
                    прав и свобод человека и гражданина, достойные качество и уровень жизни
                    граждан, суверенитет, территориальная целостность и устойчивое
                    социально-экономическое развитие Российской Федерации, оборона и безопасность
                    государства.
                </p>

                <p className={styles.theme_link}>
                    <img src="./public/pdf.png" alt="" />
                    <span className={styles.theme_link__text}>Файл с лекцией</span>
                </p>

                <p className={styles.theme_link}>
                    <img src="./public/test.svg" alt="" />
                    <span className={styles.theme_link__text}>Тест к лекции</span>
                </p>
            </div>
        </div>
    );
};
