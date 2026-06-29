import { getCollection } from "./loader";

export function getAllContent() {

    return [

        ...getCollection("journal"),

    ];

}