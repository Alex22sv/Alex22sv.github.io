import { ReadingGoodreadsPage } from "@/components/sections/reading/ReadingPage";


export default function ReadingPage() {



  return (

    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        Lecturas
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Una colección de libros que estoy leyendo (por Goodreads).
      </p>

      <div className="mt-12">

        <ReadingGoodreadsPage />

      </div>

    </main>

  );

}
