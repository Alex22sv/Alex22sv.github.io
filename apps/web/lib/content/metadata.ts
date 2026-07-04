import { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { ContentItem } from "./types";

export function createArticleMetadata(
    post: ContentItem
): Metadata {

    return {

        title: post.title,

        description: post.description,

        openGraph: {

            title: post.title,

            description: post.description,

            url:
                `${siteConfig.url}/${post.collection}/${post.slug}`,

            siteName:
                siteConfig.title,

            type: "article",

        },

    };

}