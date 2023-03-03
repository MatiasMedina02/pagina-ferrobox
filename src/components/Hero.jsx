import { Link } from 'react-scroll';
import FerroBoxEntrada from '../assets/ferrobox_entrada.png';
import FerroBoxTeam from '../assets/ferrobox_team.jpg';

const Hero = () => {
	return (
		<div className="w-full h-screen">
				<img className='w-full h-screen bg-cover relative' src={FerroBoxEntrada} alt="Ferrobox Entrada" />
				<div className='w-full grid md:grid-cols-2 absolute top-0'>
					<div className='w-full h-screen bg-black/30 top-0 flex flex-col justify-center md:place-items-start items-center p-6'>
						<p className='pb-4 text-orange-600 font-semibold text-2xl'>Box de Crossfit</p>
						<h1 className='pb-5 font-bold text-7xl text-transparent bg-clip-text gradient-secondary'>Ferrobox</h1>
						<p className='pb-4 md:mr-10 text-xl text-yellow-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore delectus repudiandae, quidem dolores quos sint voluptatem facilis recusandae eligendi, consequatur cumque obcaecati doloribus placeat veniam vero quis cupiditate accusamus?</p>
						<button className='button'>
							<Link to='planes'>Empieza Aquí</Link>
						</button>
					</div>
					<div className='w-full h-full'>
						<img className='w-full h-screen transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 invisible md:visible' src={FerroBoxTeam} alt="FerroBox Team" />
					</div>
				</div>
		</div>
	)
}

export default Hero