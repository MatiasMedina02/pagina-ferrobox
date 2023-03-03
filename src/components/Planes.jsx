import { TypeAnimation } from 'react-type-animation';

const Planes = () => {
	return (
		<div id='planes' className="w-full h-full bg-gray-800 pt-10">
			{/* Planes Header */}
			<div className="mx-auto p-8 flex flex-col justify-between items-center">
				<TypeAnimation 
				sequence={[
					'Listo para Empezar?',
					1000,
					'Qué Estás Esperando?',
					1000,
					'Únete',
					2000
				]}
				wrapper='h1'
				cursor={true}
				repeat={Infinity}
				className='mb-4 text-transparent bg-clip-text gradient-ter text-5xl font-light'
				/>
				<p className='text-yellow-500 font-light text-xl'>Elige tu Plan para está <span className='text-red-700 font-bold'>Nueva Versión</span> tuya.</p>
			</div>

			{/* Planes Precios */}
			<div className='container mx-auto py-2 px-8'>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
					<div className='shadow-lg rounded-lg py-12 px-8 text-center'>
						<span className='mb-3 inline-block font-semibold uppercase tracking-wider text-lg text-orange-500'>Crossfit</span>
						<h3 className='text-4xl font-bold mb-6 text-rose-600'>200.000 PYG</h3>
						<ul>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</ul>
						<button className="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
								Seleccionar
							</span>
						</button>
					</div>

					<div className='shadow-lg rounded-lg py-12 px-8 text-center'>
						<span className='mb-3 inline-block font-semibold uppercase tracking-wider text-lg text-orange-500'>Personalizado</span>
						<h3 className='text-4xl font-bold mb-6 text-rose-600'>200.000 PYG</h3>
						<ul>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</ul>
						<button className="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
								Seleccionar
							</span>
						</button>
					</div>

					<div className='shadow-lg rounded-lg py-12 px-8 text-center'>
						<span className='mb-3 inline-block font-semibold uppercase tracking-wider text-lg text-orange-500'>Funcional</span>
						<h3 className='text-4xl font-bold mb-6 text-rose-600'>200.000 PYG</h3>
						<ul>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li className='text-lg mb-2 pb-2 border-b-2 border-yellow-200 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</ul>
						<button className="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
								Seleccionar
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Planes