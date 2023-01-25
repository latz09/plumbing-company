import Navbar from "./Navbar";

const MainLayout = ({children}) => {
	return (
		<div className="flex flex-col h-full bg-light text-dark ">
			{/* <Navbar /> */}
            <main className='min-h-screen flex-grow '>{children}</main>
            {/* <div>footer</div> */}
		</div>
	);
};

export default MainLayout;