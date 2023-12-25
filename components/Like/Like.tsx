import {JSX} from "react";
import styles from "./Like.module.css";
import Image from "next/image";

export const Like = (): JSX => {
    return (
        <div className={styles.like}>5
            <Image
                className={styles.img}
                src="/like.svg"
                width={16}
                alt="Лайк"
                height={16} />
        </div>
    );
};
