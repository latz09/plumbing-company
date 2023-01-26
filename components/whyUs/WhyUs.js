import { FaFaucet, FaRegClipboard } from 'react-icons/fa';
import { AiFillTool } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ImageCarousel from '../utils/ImageCarousel';

import Image from 'next/image';

const WhyUs = ({ data, images }) => {


	return (
		<div className=' grid gap-8 max-w-7xl mx-auto my-16'>
			<h1 className='text-center text-6xl tracking-widest font-semibold text-orange uppercase opacity-80 font-seri'>
				Why the Good Guys
			</h1>
		
			<div className='grid grid-cols-7 gap-8'>
				<div className='col-span-5 p-8 grid gap-12'>
					{data.map((reasons, index) => (
						<Reasons
							title={reasons.title}
							description={reasons.description}
							imageType={reasons.imageType}
						/>
					))}
				</div>
				<div className='col-span-2 place-self-center  w-full grid place-items-center  '>
					<ImageCarousel  />
				</div>
			</div>
		</div>
	);
};

export default WhyUs;

function Reasons({ title, description, imageType }) {
	return (
		<div className='grid grid-cols-12 gap-2 place-items-center'>
			<div className='col-span-1'>
				<ImageToUse image={imageType} />
			</div>
			<motion.div
				className='col-span-11 grid gap-4 tracking-wide w-5/6 '
				initial={{ opacity: 0.7, scale: 0.85 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.1, duration: 1.1 }}
			>
				<span className='text-2xl  font-bold text-dark/70'>{title}</span>
				<span className='text-lg opacity-80  text-justify  '>
					{description}
				</span>
			</motion.div>
		</div>
	);
}

const ImageToUse = ({ image }) => {
	return (
		<>
			<motion.div
				className='text-6xl text-orange border border-orange/20 bg-orange/5 p-4 rounded-full shadow-lg  '
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{image === 'faucet' && <FaFaucet />}
				{image === 'maintenance' && <AiFillTool />}
				{image === 'renovations' && <FaRegClipboard />}
			</motion.div>
		</>
	);
};
