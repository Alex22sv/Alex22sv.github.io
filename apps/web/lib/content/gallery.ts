import fs from "fs";
import path from "path";

import { mediaUrl } from "./media";

const CONTENT_PATH = path.join(
    process.cwd(),
    "../../content"
);

export function getGallery(

    collection: string,

    slug: string,

) {

    const gallery = path.join(

        CONTENT_PATH,

        collection,

        slug,

        "gallery",

    );

    if (!fs.existsSync(gallery)) {

        return [];

    }

    return fs

        .readdirSync(gallery)

        .sort()

        .map(file =>

            mediaUrl(

                collection,

                slug,

                "gallery",

                file,

            )

        );

}