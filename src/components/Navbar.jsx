import { useState } from 'react';
import { Link } from 'react-scroll';
import logoFerroBox from '../assets/ferrobox_logo.jpeg'
import { BsSun } from 'react-icons/bs'

const Navbar = () => {
	let links = [
		{name:"inicio", link:"/"},
		{name:"planes", link:"/"},
		{name:"contacto", link:"/"},
	];

	let [open, setOpen] = useState(false);
	return (
		<div className='w-full shadow-md fixed z-10 top-0 left-0'>
			<div className='flex items-center justify-between gradient-primary py-4 px-7 md:px-10'>
					<div className='w-[60px] h-[60px]'>
						<Link to='inicio' onClick={() => setOpen(!open)} smooth={true} duration={500} offset={-100}>
							<img className='cursor-pointer' src={logoFerroBox} alt="Logo FerroBox" />
						</Link>
					</div>

					<div>
						<button className=''>
							<BsSun size={25} />
						</button>
					</div>

					<div onClick={() => setOpen(!open)} className='text-3xl right-8 top-8 cursor-pointer md:hidden'>
						<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
					</div>

					<ul className={`md:flex md:items-center absolute md:static md:bg-none gradient-primary md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in
					${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
						{
							links.map(link => (
								<li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 pb-2 last-of-type:my-0 border-b border-black md:border-none">
									<Link to={link.name} smooth={true} duration={500} offset={-100} onClick={() => setOpen(!open)} className="text-gray-800 hover:text-gray-100 duration-500 uppercase cursor-pointer">{link.name}</Link>
								</li>
							))
						}
					</ul>
			</div>
		</div>
	)
}

export default Navbar