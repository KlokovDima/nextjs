import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";


export interface BlogcardProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
    children: ReactNode,
    tag: 'h1' | 'h2' | 'h3'
}
