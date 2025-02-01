import { Theme, Theme2, Theme3 } from "./theme";
import styles from "./style.module.css";

export const ThemeList = () => {


    return (
        <div className={styles.theme_list}>
            <Theme />
            <Theme2 />
            <Theme3 />
        </div>
    );
};
