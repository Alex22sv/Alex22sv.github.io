"use client";

import Image from "next/image";

type Props = {
    images: string[];
};

export function Gallery({
    images,
}: Props) {

    if (images.length === 0) {

        return null;

    }

    return (

        <section className="mt-20">

            <h2 className="mb-8 text-3xl font-bold">
                Gallery
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                {images.map((image) => (

                    <div className="aspect-video overflow-hidden rounded-xl border">

                        <Image

                            fill

                            src={image}

                            alt=""

                            className="object-cover transition duration-300 hover:scale-105"

                        />

                    </div>

                ))}

            </div>

        </section>

    );

}