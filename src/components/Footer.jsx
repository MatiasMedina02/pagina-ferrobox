import { Link } from 'react-scroll';
import logoFooter from "../assets/ferrobox_logo2.jpg";
import { BsWhatsapp } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
	return (
    <div aria-label="Site Footer" className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img className="w-[200px] h-[200px]" src={logoFooter} alt="Logo Footer" />
        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer text-lg"
                to='inicio'
                offset={-100}
                smooth={true}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer text-lg"
                to='planes'
                offset={-100}
                smooth={true}
              >
                Planes
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer text-lg"
                to='contacto'
                offset={-100}
                smooth={true}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/FerroBoxEmpujaTusLimites"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook size={30} />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/ferro_box"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram size={30} />
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter size={30} />
            </a>
          </li>

          <li>
            <a
              href="https://wa.link/rmmvno"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Whatsapp</span>
              <BsWhatsapp size={30} />
            </a>
          </li>
        </ul>

        <div className='flex flex-col md:flex-row md:justify-evenly text-center items-center mt-12'>
          <p className='flex text-center items-center text-sm text-gray-500'>
            <FaPhoneAlt />
            +595 971 511341
          </p>
          <p className='flex text-center items-center mt-4 md:mt-0 text-sm text-gray-500'>
            <MdLocationOn size={20} />
            Cristina Luzko, Av. San Roque Gonzalez de Sta. Cruz, Encarnación.
          </p>
          <p className="mt-4 md:mt-0 text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()}. Todos los Derechos Reservados.
          </p>
        </div>
        
      </div>
    </div>
	)
}

export default Footer