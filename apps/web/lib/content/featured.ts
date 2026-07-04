import { getCollection } from "./loader";

export function getFeaturedPosts() {

    return getCollection("journal")

        .filter(post => post.featured);

}