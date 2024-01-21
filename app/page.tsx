'use client';

import styles from './page.module.css';
import {JSX} from "react";
import {Blogcard, Like} from "@/components";

export default function Home(): JSX {

    const postId = 2;

    const fnLiked = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => console.log(json));
    };

    const arr = new Array(12).fill().map(() => Math.floor(Math.random() * 100));

    console.log(arr);

    return (
        <main className={styles.main}>
            <div className={styles.blogs}>
                {arr.map((item) => <Blogcard key={item}></Blogcard>)}
            </div>
            {/*<Like display="detail" fnLiked={fnLiked} postId={postId}/>*/}
        </main>
    );
}
