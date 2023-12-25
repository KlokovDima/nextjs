import styles from './page.module.css';
import {JSX} from "react";
import {Blogcard} from "@/components";

export default function Home(): JSX {
  return (
    <main className={styles.main}>
        <Blogcard></Blogcard>
    </main>
  );
}
