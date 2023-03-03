import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jrdvebr', 'template_uvkung9', form.current, 'B7WqOqP0xHC2Jw0DB')
      .then((result) => {
          console.log(result.text);
					e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
	return (
		<div id="contacto" className="w-full h-screen bg-gray-800 pt-10">
			<form ref={form} onSubmit={sendEmail} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
				<h2 className="w-full text-3xl font-bold leading-tight text-transparent bg-clip-text gradient-secondary uppercase">Contactanos</h2>
				<div>
					<label htmlFor="name" className="block mb-1 ml-1 text-yellow-500 text-lg">Nombre</label>
					<input id="name" name='user_name' type="text" placeholder="Nombre Completo" className="block w-full text-white p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
				</div>
				<div>
					<label htmlFor="email" className="block mb-1 ml-1 text-yellow-500 text-lg">Email</label>
					<input id="email" name='user_email' type="email" placeholder="Tu Email" className="block w-full text-white p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
				</div>
				<div>
					<label htmlFor="message" className="block mb-1 ml-1 text-yellow-500 text-lg">Mensaje</label>
					<textarea id="message" name='message' type="text" placeholder="Dejanos tu mensaje..." className="block w-full text-white p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
				</div>
				<div className="flex justify-center">
					<button type="submit" className="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
						<span className="relative px-20 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
							Enviar
						</span>
					</button>
				</div>
			</form>
		</div>
	)
}

export default Contacto