import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">

            <h1 className="text-6xl font-bold">
                404
            </h1>

            <p className="mt-4 text-muted-foreground">
                The page you're looking for doesn't exist :/
            </p>

            <Link
                href="/"
                className="mt-8 rounded-xl border px-6 py-3"
            >
                Go Home
            </Link>

        </main>
    );
}