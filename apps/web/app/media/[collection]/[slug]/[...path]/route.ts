import fs from "fs";
import path from "path";
import mime from "mime";

import { NextResponse } from "next/server";

const CONTENT_PATH = path.join(
    process.cwd(),
    "../../content"
);

export async function GET(
    request: Request,
    {
        params,
    }: {
        params: Promise<{
            collection: string;
            slug: string;
            path: string[];
        }>;
    }
) {

    const {
        collection,
        slug,
        path: resource,
    } = await params;

    const filePath = path.join(
        CONTENT_PATH,
        collection,
        slug,
        ...resource
    );

    if (!fs.existsSync(filePath)) {

        return new NextResponse(
            "Not Found",
            {
                status: 404,
            }
        );

    }

    const file = fs.readFileSync(filePath);

    const type = mime.getType(filePath) ?? "application/octet-stream";

    return new NextResponse(file, {

        headers: {

            "Content-Type": type,

        }
    });

}