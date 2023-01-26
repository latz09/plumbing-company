const Navbar = () => {
	return (
		<nav className='  bg-gradient-to-b from-orange via-orange/80 to-orange/60 py-8'>
			<div className='flex items-center justify-between max-w-7xl mx-auto'>
				<Logo />
				<NavLinks />
			</div>
		</nav>
	);
};

export default Navbar;

const Logo = () => {
	return (
		<div>
			<h1 className=' text-3xl font-semibold tracking-widest uppercase text-light1'>
				Good Guys <span className='text-light1 font-thin'> Plumbing</span>
			</h1>
		</div>
	);
};

const NavLinks = () => {
	const navlinks = ['Services', 'About', 'Contact'];
	return (
		<div className='flex items-center gap-8 text-3xl text-white'>
			{navlinks.map((navlink, index) => (
				<div key={index}>
					<span>{navlink}</span>
				</div>
			))}
		</div>
	);
};
