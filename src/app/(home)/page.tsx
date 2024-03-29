import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-24 relative flex items-center justify-center flex-col">
        <div>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md_text-[300px]">
              Doadores 360
            </h1>
          </div>
          <p className="text-center">A doação de sangue na palma da sua mão!</p>
        </div>
      </section>

      <section className="container mx-auto py-8 my-16 flex items-center justify-center flex-col gap-8">
        <article className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Faça a diferença. Doe Sangue.
          </h2>
          <p className="text-lg mb-8">
            Sua doação pode salvar vidas. Agende sua doação hoje mesmo.
          </p>
          <Link
            href="#"
            className="bg-primary text-white p-3 px-6 rounded-full hover:bg-primary/80 transition duration-300"
          >
            Agendar Doação
          </Link>
        </article>

        <article className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Encontre Hemocentros</h2>
          <p className="text-lg mb-8">
            Localize os hemocentros mais próximos de você e faça sua doação.
          </p>
        </article>

        <article className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">
            Informações sobre Doação de Sangue
          </h2>
          <p className="text-lg mb-8">
            Saiba mais sobre quem pode doar, requisitos, processo de doação e
            mais.
          </p>
        </article>
      </section>

      <footer className="bg-foreground text-muted py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Doadores 360. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
