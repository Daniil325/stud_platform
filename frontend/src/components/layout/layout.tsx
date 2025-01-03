import styles from "./style.module.css"


export const Layout = () => {
    return (
        <aside className={styles.aside__container}>
            <div className={styles.aside_items}>

                <div className={styles.aside_item}>
                    <p className={styles.item_title}>Лекция 1</p>
                </div>
                <div className={styles.aside_item}>
                    <p className={styles.item_title}>Лекция 2</p>
                </div>
                <div className={styles.aside_item}>
                    <p className={styles.item_title}>Лекция 3</p>
                </div>
                <div className={styles.aside_item}>
                    <p className={styles.item_title}>Лекция 4</p>
                </div>
                <div className={styles.aside_item}>
                    <p className={styles.item_title}>Лекция 5</p>
                </div>

            </div>
        </aside>
    )
}