'use client';

import {JSX, useEffect, useState} from "react";
import {LikeProps} from "./Like.props";
import classNames from "classnames";
const cn = classNames.bind();

import styles from "./Like.module.css";
import LikeIcon from "/public/like.svg";
import LikeIconDetail from "/public/likedetail.svg";

export const Like = ({ display = 'list', fnLiked, postId, ...props }: LikeProps): JSX => {

    const [isLike, setLike] = useState(false);

    useEffect(() => {
        if (typeof fnLiked === 'function') fnLiked(postId);
    }, [isLike]);

    const changeLike = () => {
        setLike(() => !isLike);
    };

    const likeDetail = <div className={cn(styles.likeDetail, {[styles.liked]: isLike})} onClick={ changeLike } {...props}>
        <LikeIconDetail />
    </div>;
    const likeList = <div className={cn(styles.like, {[styles.liked]: isLike})} onClick={ changeLike } {...props}>5
        <LikeIcon />
    </div>;

    switch (display)
    {
        case "detail":
            return likeDetail;

        case "list":
            return likeList;
    }

};
