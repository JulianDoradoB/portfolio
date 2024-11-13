'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const CardCarousel = () => {
  const cards = [
    {
      title: 'ONE WAY CLOTHING',
      imageSrc: '/images/hero-card.jpeg',
      description:
        'One Way Clothing utiliza HTML y CSS en Visual Studio Code, ofreciendo una interfaz atractiva. Incluye un chatbot de SnatchBot para atención al cliente eficiente y utiliza iconos de Font Awesome para una experiencia visual moderna.',
    },
    {
      title: 'CODEVERSE',
      imageSrc: '/images/hero-card.jpeg',
      description:
        'Codeverse es una plataforma de cursos en línea creada con Java, enfocada en ofrecer un entorno intuitivo para la compra y gestión de cursos. Utiliza tecnologías backend robustas para garantizar una experiencia fluida y segura para los usuarios.',
    },
    {
      title: 'YOGA STUDIO',
      imageSrc: '/images/hero-card.jpeg',
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
        <div className="w-full max-w-xs mb-4">
          <h4 className="font-bold text-xl text-custom-rojo mb-4">
            {cards[currentIndex].title}
          </h4>
          <div className="relative w-full h-80 mb-4">
            <Image
              alt="Card background"
              className="object-cover rounded-xl mx-auto"
              src={cards[currentIndex].imageSrc}
              width={400}
              height={400}
            />
          </div>
          <p className="text-custom-parrafos mt-4">{cards[currentIndex].description}</p>
        </div>

        <div className="text-center mt-8">
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
