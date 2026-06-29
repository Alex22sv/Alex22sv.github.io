import { ContentItem } from "./types";

export function sortByDate(
    posts: ContentItem[]
){
    return [...posts].sort((a,b)=>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}