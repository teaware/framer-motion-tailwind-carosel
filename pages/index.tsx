import Head from "next/head";
import Carousel from "@/components/Carousel";

const cards = [
  { name: "Red", color: "bg-red-500" },
  { name: "Orange", color: "bg-orange-500" },
  { name: "Amber", color: "bg-amber-500" },
  { name: "Yellow", color: "bg-yellow-500" },
  { name: "Lime", color: "bg-lime-500" },
  { name: "Green", color: "bg-green-500" },
  { name: "Blue", color: "bg-blue-500" },
  { name: "Indigo", color: "bg-indigo-500" },
  { name: "Pink", color: "bg-pink-500" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer Motion Carousel</title>
        <meta
          name="description"
          content="A Carousel Created with Framer Motion & Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-xl mt-10 mb-8 text-center">
          A Carousel Created with Framer Motion & Tailwind CSS
        </h1>
        <div className="relative p-5">
          <div className="pb-5">
            <Carousel>
              {cards.map((card) => (
                <p
                  key={card.name}
                  className={`${card.color} flex items-center justify-center rounded-xl h-72 p-6`}
                >
                  {card.name}
                </p>
              ))}
            </Carousel>
          </div>
        </div>
      </main>
    </>
  );
}
