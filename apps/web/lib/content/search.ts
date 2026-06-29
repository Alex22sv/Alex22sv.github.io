import { ContentItem } from "./types";

export function searchPosts(
    posts: ContentItem[],
    query: string
) {

    if (!query) {

        return posts;

    }

    return posts.filter(post => {

        const q = query.toLowerCase();

        return (

            post.title
                .toLowerCase()
                .includes(q)

            ||

            post.description
                .toLowerCase()
                .includes(q)

            ||

            post.tags.some(tag =>

                tag
                    .toLowerCase()
                    .includes(q)

            )

        );

    });

}