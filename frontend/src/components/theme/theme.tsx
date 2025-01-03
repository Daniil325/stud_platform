import styles from "./style.module.css";

export const Theme = () => {
    return (
        <div className={styles.theme__container}>
            <div className={styles.theme_wrapper}>
                <h2 className={styles.theme_title}>Лекция 1</h2>
                <p className={styles.theme_description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo
                    necessitatibus nesciunt vero maxime nihil quia quam magnam laborum, eos beatae
                    debitis alias itaque, quo veniam? Hic, atque! Sapiente eos porro facere, neque
                    molestias ea optio vero corporis sit est? Officia unde consequatur fugiat modi
                    doloremque ad voluptas eaque incidunt, est consequuntur, nesciunt quae.
                    Possimus quas excepturi quibusdam fugit veritatis iusto eum, totam asperiores
                    dicta earum magnam! Quia temporibus molestiae necessitatibus quam ullam
                    architecto exercitationem unde facilis ab, incidunt obcaecati. Necessitatibus
                    eligendi neque rem sequi corrupti tempore consequuntur culpa omnis similique
                    veritatis nam ea quia dolorum doloribus assumenda ipsam, excepturi possimus at
                    non aspernatur dignissimos enim hic. Quas dolor quae odio doloremque minima.
                    Autem possimus a quod ratione unde modi, molestias assumenda veritatis facilis
                    hic beatae fugiat laboriosam distinctio, accusantium sit odio adipisci ipsa
                    sapiente? Excepturi iure, expedita error numquam exercitationem impedit est
                    debitis quisquam nulla quas quibusdam similique facilis veniam inventore labore
                    rem dicta? Architecto, debitis dolorum quia asperiores quasi harum, fugit nam
                    magnam possimus quibusdam, tenetur iste consequatur nobis recusandae aut odio.
                    Vitae quaerat impedit dolore facere odio quo dolores vero, recusandae omnis sed
                    expedita? Rerum aspernatur asperiores, nulla necessitatibus ipsum, quae, animi
                    quod labore sint vitae sed?
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
