'use client'; // Asegúrate de que sea un componente de cliente

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardHeader, CardBody } from "@nextui-org/react";

const CardCarousel = () => {
  const cards = [
    {
      title: 'ONE WAY CLOTHING',
      imageSrc: '/images/hero-card.jpeg',
      description: 'One Way Clothing utiliza HTML y CSS en Visual Studio Code, ofreciendo una interfaz atractiva. Incluye un chatbot de SnatchBot para atención al cliente eficiente y utiliza iconos de Font Awesome para una experiencia visual moderna.',
    },
    {
      title: 'CODEVERSE',
      imageSrc: '/images/hero-card.jpeg',
      description: 'Codeverse es una plataforma de cursos en línea creada con Java, enfocada en ofrecer un entorno intuitivo para la compra y gestión de cursos. Utiliza tecnologías backend robustas para garantizar una experiencia fluida y segura para los usuarios.',
    },
    {
      title: 'YOGA STUDIO',
      imageSrc: '/images/hero-card.jpeg',
      description: 'Yoga Studio es una página web diseñada con HTML y CSS puro, que ofrece una experiencia visualmente atractiva y fluida. Utiliza transiciones y animaciones para crear una interfaz interactiva y relajante, perfecta para promover clases y eventos de yoga, sin depender de frameworks adicionales.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // 5000 ms = 5 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-screen bg-custom-dark bg-opacity-95 flex flex-col items-center justify-center px-5 md:px-10 lg:px-20">
      {/* Carrusel de tarjetas */}
      <div className="relative w-full max-w-4xl flex flex-col items-center text-center">
        {/* Contenido de la tarjeta */}
        <div className="w-full max-w-xs mb-4">
          <h4 className="font-bold text-xl text-custom-rojo mb-4">
            {cards[currentIndex].title}
          </h4>
          {/* Imagen centrada sin que sobreponga el texto */}
          <div className="relative w-full h-80 mb-4">
            <Image
              alt="Card background"
              className="object-cover rounded-xl mx-auto"
              src={cards[currentIndex].imageSrc}
              width={400} // Tamaño cuadrado
              height={400} // Tamaño cuadrado
            />
          </div>
          <p className="text-custom-parrafos mt-4">{cards[currentIndex].description}</p>
        </div>

        {/* Puntos de navegación */}
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

        {/* Navegación de botones */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
          {/* Botón de retroceso */}
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? cards.length - 1 : prevIndex - 1
              )
            }
            className="bg-black text-white p-2 rounded-full"
          >
            ←
          </button>
          
          {/* Botón de avance */}
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === cards.length - 1 ? 0 : prevIndex + 1
              )
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

export default function App() {
  return (
    <main>
      <nav className="bg-custom-dark shadow-md w-full h-24 flex items-center px-5 md:px-20 lg:px-40">
        <Navbar className="flex w-full items-center justify-between">
          <NavbarBrand className="flex items-center gap-3">
            <Image 
              src="/images/logojd.png" 
              alt="logo"
              width={100} 
              height={100} 
              className="rounded-lg"
            />
          </NavbarBrand>
          <NavbarContent className="flex gap-4 md:gap-8">
            <NavbarItem>
              <Link color="foreground" href="#mis-proyectos" className="text-custom-white hover:text-blue-600">
                MIS PROYECTOS
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#sobre-mi" aria-current="page" className="text-custom-white hover:text-blue-600">
                SOBRE MI
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-custom-white hover:text-blue-600">
                CONTACTO
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </nav>

      <section className="w-screen h-screen bg-custom-dark bg-opacity-95 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center text-white max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-custom-rojo">JULIAN DORADO</h1>
          <p className="mb-6 text-custom-parrafos">
            "No hay límites para lo que se puede lograr. Con dedicación, esfuerzo y una pasión imparable, todo desafío se convierte en una oportunidad y todo sueño en realidad."
          </p>
          <Button 
            color="secondary" 
            radius="none" 
            variant="solid" 
            size="lg"
            className="bg-custom-rojo text-white px-8 py-2"
          >
            ver portfolio
          </Button>
        </div>
        <div className="flex justify-center items-center bg-custom-imagen">
          <Image 
            src="/images/foto header.png" 
            alt="profile photo"
            width={200} 
            height={300} 
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section id='sobre-mi' className="w-screen h-screen bg-custom-dark bg-opacity-100 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20 px-5 md:px-10 lg:px-40">
        <div className="flex justify-center items-center bg-custom-imagen">
          <Image 
            src="/images/IMG_1114.png" 
            alt="profile photo"
            width={200} 
            height={300} 
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center text-white max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-custom-rojo">SOBRE MI</h1>
          <p className="mb-6 text-custom-parrafos">
            "Hola, soy Julián Dorado, técnico en sistemas y estudiante de Ingeniería de Software de 19 años, originario de Pasto. Me apasiona desarrollar soluciones innovadoras en backend y frontend, busco constantemente nuevos desafíos que me permitan crecer y aportar a proyectos significativos en el ámbito del software."
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Button 
              color="secondary" 
              radius="none" 
              variant="solid" 
              size="lg"
              className="bg-custom-rojo text-white px-8 py-2"
            >
              descargar cv
            </Button>
            <Button 
              color="secondary" 
              radius="none" 
              variant="solid" 
              size="lg"
              className="bg-custom-rojo text-white px-8 py-2"
            >
              más sobre mí
            </Button>
          </div>
        </div>
      </section>
      <section id='mis-proyectos'>
        <CardCarousel />
      </section>
    </main>
  );
}


