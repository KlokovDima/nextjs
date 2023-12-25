import {JSX} from "react";
import Image from "next/image";
import styles from "./Blogcard.module.css";
import {Like} from "@/components";

export const Blogcard = (): JSX => {
    return (
        <div className={styles.blogcard}>
            <Image
                className={styles.img}
                src="/blogcard.jpg"
                sizes="100vw"
                width={0}
                alt="Картинка записи"
                height={0} />
            <div className={styles.headerInfo}>
                <div className={styles.shortInfo}>
                    <div className={styles.tag}>Front-end</div>
                    <div className={styles.publishedAgo}>· 1 месяц назад</div>
                </div>
                <Like />
            </div>
            <h3 className={styles.title}>Как работать с CSS Grid</h3>
            <div className={styles.text}>
                <a className={styles.linkText} href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout">Грид-раскладка (CSS Grid Layout)</a>
                представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..</div>
            <div className={styles.bottomInfo}>
                <div className={styles.timeRead}>3 минуты</div>
                <div className={styles.link}>Читать
                    <Image
                        src="/arrow.svg"
                        width={20}
                        alt="Стрелка вправо"
                        height={20} />
                </div>
            </div>
        </div>
    );
};
