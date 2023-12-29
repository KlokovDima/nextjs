'use client';

import styles from './page.module.css';
import {JSX} from "react";
import {Blogcard, Like} from "@/components";

export default function Home(): JSX {

    const postId = 2;

    const fnLiked = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => console.log(json))
    };

    return (
        <main className={styles.main}>
            <Blogcard></Blogcard>
            <Like display="detail" fnLiked={fnLiked} postId={postId}/>
        </main>
    );
}
