'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const CardCarousel = () => {
  const cards = [
    {
      title: 'ONE WAY CLOTHING',
      imageSrc: '/images/ONEWAY.PNG',
      description:
        'One Way Clothing utiliza HTML y CSS en Visual Studio Code, ofreciendo una interfaz atractiva. Incluye un chatbot de SnatchBot para atención al cliente eficiente y utiliza iconos de Font Awesome para una experiencia visual moderna.',
    },
    {
      title: 'CODEVERSE',
      imageSrc: '/images/Codeverse.png',
      description:
        'Codeverse es una plataforma de cursos en línea creada con Java, enfocada en ofrecer un entorno intuitivo para la compra y gestión de cursos. Utiliza tecnologías backend robustas para garantizar una experiencia fluida y segura para los usuarios.',
    },
    {
      title: 'YOGA STUDIO',
      imageSrc: '/images/YOGASTUDIO.PNG',
      description:
        'Yoga Studio es una página web diseñada con HTML y CSS puro, que ofrece una experiencia visualmente atractiva y fluida. Utiliza transiciones y animaciones para crear una interfaz interactiva y relajante, perfecta para promover clases y eventos de yoga, sin depender de frameworks adicionales.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-screen bg-custom-dark bg-opacity-95 flex flex-col items-center justify-center px-5 md:px-10 lg:px-20">
      <div className="relative w-full max-w-4xl flex flex-col items-center text-center">
        <div className="w-full max-w-xs mb-2"> {/* Reducido el espacio */}
          <h4 className="font-bold text-xl text-custom-rojo dark:text-custom-parrafos mb-2"> {/* Reducido el margen */}
            {cards[currentIndex].title}
          </h4>
          <div className="relative w-full h-64 mb-2 flex items-center justify-center"> {/* Reducido el tamaño de la imagen */}
            <Image
              alt="Card background"
              className="object-cover rounded-xl mx-auto"
              src={cards[currentIndex].imageSrc}
              width={350}
              height={350} // Ajustado tamaño de la imagen
            />
          </div>
          <p className="text-custom-parrafos dark:text-gray-500 mt-2"> {/* Ajustado espacio inferior */}
            {cards[currentIndex].description}
          </p>
        </div>

        <div className="text-center mt-4"> {/* Reducido margen */}
          <div className="flex justify-center space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-white'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1))
            }
            className="bg-black text-white p-2 rounded-full"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1))
            }
            className="bg-black text-white p-2 rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
