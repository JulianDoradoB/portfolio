'use client';

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from 'next/image';
import CardCarousel from './Components/CardCarousel';
import ThemeSwitch from "./Components/ThemeSwitch";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";


export default function App() {
  return (
    <main className="overflow-hidden">
      <ThemeSwitch/>
      <nav className="bg-custom-dark shadow-md w-full h-20 flex items-center px-5 md:px-10 lg:px-40">
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
              <Link  color="foreground" href="#contacto" className="text-custom-white hover:text-blue-600">
                CONTACTO
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </nav>


      <section className="w-screen h-screen bg-custom-dark bg-opacity-95 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center text-white max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-custom-rojo dark:text-custom-parrafos">JULIAN DORADO</h1>
          <p className="mb-6 text-custom-parrafos dark:text-gray-500">
            No hay límites para lo que se puede lograr. Con dedicación, esfuerzo y una pasión imparable, todo desafío se convierte en una oportunidad y todo sueño en realidad.
          </p>
          <Button 
            color="secondary" 
            radius="none" 
            variant="solid" 
            size="lg"
            className="bg-custom-rojo dark:bg-gray-500 hover:bg-alabaster-red-devil-800 text-white  px-8 py-2"
          >
             <a href="#mis-proyectos">ver portfolio</a>
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
          <h1 className="text-2xl font-bold mb-4 text-custom-rojo dark:text-custom-parrafos">SOBRE MI</h1>
          <p className="mb-6 text-custom-parrafos dark:text-gray-500">
            Hola, soy Julián Dorado, técnico en sistemas y estudiante de Ingeniería de Software de 19 años, originario de Pasto. Me apasiona desarrollar soluciones innovadoras en backend y frontend, busco constantemente nuevos desafíos que me permitan crecer y aportar a proyectos significativos en el ámbito del software.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Button 
              color="secondary" 
              radius="none" 
              variant="solid" 
              size="lg"
              className="bg-custom-rojo hover:bg-alabaster-red-devil-800  text-white  dark:bg-gray-500 px-8 py-2"
            >
                <a 
                  href="/documentos/HOJA DE JULIAN DORADO.pdf" 
                  download="Julián-Dorado-CV.pdf" 
                  className="text-white no-underline"
                >
                  descargar cv
                </a>
            </Button>
            <Button 
              color="secondary" 
              radius="none" 
              variant="solid" 
              size="lg"
              className="bg-custom-rojo hover:bg-alabaster-red-devil-800 text-white dark:bg-gray-500 px-8 py-2"
            >
              más sobre mí
            </Button>
          </div>
        </div>
      </section>

      <section id='mis-proyectos'>
        <CardCarousel />
      </section>
      
      

      <section className="w-screen h-screen bg-custom-dark bg-opacity-100 flex flex-col md:flex-row items-center justify-center px-5 md:px-10 lg:px-40">
        <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-4 md:space-y-0 md:space-x-20">
          
          {/* Primera sección de estudios */}
          <section className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-custom-rojo dark:text-white mb-4">Estudios Iniciales</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">FEBRERO/2009-FEBRERO/2015</time>
                <h3 className="text-lg font-semibold text-custom-rojo dark:text-white">PRIMARIA</h3>
                <p className="mb-4 text-base font-normal text-custom-parrafos dark:text-gray-400">COLEGIO COMFAMILIAR DE NARIÑO SIGLO XXI</p>
                <p className="text-base font-normal text-custom-parrafos dark:text-gray-400">
                  El Colegio Comfamiliar de Nariño Siglo XXI es una institución educativa con una amplia trayectoria, enfocada en brindar una educación integral a sus estudiantes. 
                  La primaria se caracterizó por su enfoque en la formación de valores, habilidades sociales y desarrollo académico.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">FEBRERO/2015-FEBRERO/2021</time>
                <h3 className="text-lg font-semibold text-custom-rojo dark:text-white">BACHILLERATO</h3>
                <p className="text-base font-normal text-custom-parrafos dark:text-gray-400">COLEGIO COMFAMILIAR DE NARIÑO SIGLO XXI</p>
                <p className="text-base font-normal text-custom-parrafos dark:text-gray-400">
                  Durante los años de bachillerato, el colegio continuó con su enfoque académico y de desarrollo personal, promoviendo la participación en actividades extracurriculares y la preparación para la vida universitaria.
                </p>
              </li>
            </ol>
          </section>
          
          {/* Segunda sección de formación técnica */}
          <section className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-custom-rojo dark:text-white mb-4">Formación Técnica</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">FEBREBO/2019-FEBRERO/2021</time>
                <h3 className="text-lg font-semibold text-custom-rojo dark:text-white">TECNICO AUDIOVISUALES</h3>
                <p className="mb-4 text-base font-normal text-custom-parrafos dark:text-gray-400">SENA NARIÑO-PASTO</p>
                <p className="text-base font-normal text-custom-parrafos dark:text-gray-400">
                  El SENA de Nariño en Pasto brindó una formación técnica especializada en audiovisuales, donde se aprendieron habilidades en producción de video, audio y edición, desarrollando competencias clave para la industria audiovisual.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">FEBRERO/2020-FEBRERO/2021</time>
                <h3 className="text-lg font-semibold text-custom-rojo dark:text-white">TECNICO EN SISTEMAS</h3>
                <p className="text-base font-normal text-custom-parrafos dark:text-gray-400">CINAR SISTEMAS</p>
                <p className="text-base font-normal text-custom-parrafos dark:text-gray-400">
                  La formación técnica en sistemas en CINAR me permitió desarrollar habilidades en programación, mantenimiento de equipos informáticos, y gestión de redes, preparándome para afrontar desafíos en el campo de la tecnología.
                </p>
              </li>
            </ol>
          </section>
        </div>
      </section>

      <section className="w-screen h-screen bg-custom-dark bg-opacity-95 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20 px-5 md:px-10 lg:px-20">

        <div className="max-w-sm bg-alabaster-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg h-40 object-cover w-full" src="images/nequi.jpg" alt="Nequi" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VISITA NEQUI</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Durante mi visita a Nequi en Medellín, tuve la oportunidad de participar en una charla profundamente inspiradora que transformó mi perspectiva profesional. Fue una experiencia única en la que no solo conocí el entorno dinámico y la cultura innovadora de esta empresa líder en tecnología financiera. </p>
          </div>
        </div>

        <div className="max-w-sm bg-alabaster-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg h-40 object-cover w-full" src="images/finca.jpg" alt="Finca" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FINCA ORIGENES</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Finca Orígenes es un lugar que mi padre construyó con gran esfuerzo, y para mí es un espacio de paz y conexión. Aquí, rodeado de naturaleza, encuentro el equilibrio perfecto para relajarme y programar, donde el sonido del viento se mezcla con la creatividad y la tranquilidad</p>
          </div>
        </div>

        <div className="max-w-sm bg-alabaster-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg h-40 object-cover w-full" src="images/royal.jpg" alt="Royal" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ROYAL DECAMERON</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tuve la oportunidad de visitar el Royal Decameron, un lugar que combina comodidad y entretenimiento. Disfruté de deliciosa comida, días entre piscinas y el mar, y todo esto me permitió desconectar y recargar energías en un ambiente ideal para la diversión.</p>
          </div>
        </div>

      </section>
      <footer id='contacto'>
        <section className="w-screen h-[50vh] bg-custom-dark bg-opacity-100 flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-40">
          {/* Contenedor del texto y el botón */}
          <div className="flex flex-col justify-center items-start space-y-4 md:w-3/4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-custom-parrafos dark:text-gray-500 text-2xl" />
                <h3 className="text-custom-rojo text-xl font-semibold dark:text-custom-white">JULIAN.DORADO</h3>
              </div>

              <div className="flex items-center space-x-2">
                <CiMail className="text-custom-parrafos text-2xl dark:text-gray-500" />
                <h3 className="text-custom-rojo text-xl font-semibold dark:text-custom-white">JULIAN.DORADO</h3>
              </div>
            </div>

            <p className="text-custom-parrafos text-sm md:text-base max-w-2xl">
              Si tienes alguna pregunta o deseas discutir cómo puedo contribuir a tu equipo, no dudes en contactarme. Estoy disponible por correo electrónico o a través de LinkedIn. ¡Estoy ansioso por conectar y explorar nuevas oportunidades!
            </p>

            <button className="bg-custom-rojo dark:bg-gray-500 hover:bg-alabaster-red-devil-600 text-white font-bold py-2 px-4 rounded">
              Contáctame
            </button>
          </div>

          {/* Contenedor del logo */}
          <div className="flex justify-center items-center md:w-1/4">
            <Image
              src="/images/logojd.png"
              alt="logo"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </section>
      </footer>

    </main>
  );
}
