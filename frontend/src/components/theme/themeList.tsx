import { Theme } from "./theme";
import styles from "./style.module.css";

export const ThemeList = () => {


    return (
        <div className={styles.theme_list}>
            <Theme />
            <Theme />
            <Theme />
            <Theme />
            <Theme />
        </div>
    );
};
