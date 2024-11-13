'use client'; 

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from 'next/image';
import CardCarousel from './Components/CardCarousel';
import ThemeSwitch from "./Components/ThemeSwitch";

export default function App() {
  return (
    <main>
      <ThemeSwitch/>
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
            No hay límites para lo que se puede lograr. Con dedicación, esfuerzo y una pasión imparable, todo desafío se convierte en una oportunidad y todo sueño en realidad.
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
            Hola, soy Julián Dorado, técnico en sistemas y estudiante de Ingeniería de Software de 19 años, originario de Pasto. Me apasiona desarrollar soluciones innovadoras en backend y frontend, busco constantemente nuevos desafíos que me permitan crecer y aportar a proyectos significativos en el ámbito del software.
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
