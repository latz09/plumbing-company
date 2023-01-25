const Navbar = () => {
	return (
		<nav className='  p-6'>
			<div className='flex items-center justify-between max-w-7xl mx-auto'>
				<Logo />
				<div>navigation</div>
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
