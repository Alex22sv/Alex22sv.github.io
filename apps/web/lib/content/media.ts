export function mediaUrl(

    collection: string,

    slug: string,

    folder: string,

    file: string,

) {

    return `/media/${collection}/${slug}/${folder}/${file}`;

}