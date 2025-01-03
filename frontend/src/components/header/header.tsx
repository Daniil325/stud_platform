import styles from "./style.module.css"


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                
                <div className={styles.header__text}>
                    <h1>Курс по информационной безопасности</h1>
                </div>

                <div className={styles.header__user_container}>
                    
                        <div className={styles.user_image__container}>
                            <img className={styles.user_image} src="./public/user-128.svg" alt="" />
                        </div>

                        <div className={styles.user_name}>
                            <h3>Иван Иванов</h3>
                        </div>
                    
                </div>

            </div>
        </header>
    )
}