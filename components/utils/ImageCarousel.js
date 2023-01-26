import Image from 'next/image';
import image1 from '../../public/images/why-us-carousel/c1.jpg';
import image2 from '../../public/images/why-us-carousel/c2.jpg';
import image3 from '../../public/images/why-us-carousel/c3.jpg';
import image4 from '../../public/images/why-us-carousel/c4.jpg';
import image5 from '../../public/images/why-us-carousel/c5.jpg';
import image6 from '../../public/images/why-us-carousel/c6.jpg';
import image7 from '../../public/images/why-us-carousel/c7.jpg';
import image8 from '../../public/images/why-us-carousel/c8.jpg';
import image9 from '../../public/images/why-us-carousel/c9.jpg';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import {whyUsCarousel} from '../../data/data'
const ImageCarousel = ({}) => {
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
	const i = 0;
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div className='grid gap-8 place-items-center p-12'>
			<div>
				<div className='  shadow-lg'>
					<CarouselImage image={images[imageIndex]} />
				</div>
			</div>
			<ToggleIndex imageIndex={imageIndex} setImageIndex={setImageIndex} />
		</div>
	);
};

export default ImageCarousel;

const CarouselImage = ({ image }) => {
	return (
		<div className=' '>
			<Image src={image} alt='' />
		</div>
	);
};

const ToggleIndex = ({ imageIndex, setImageIndex }) => {
	const handleClickIncrease = () => {
		setImageIndex(imageIndex + 1);
	};
	const handleClickDecrease = () => {
		setImageIndex(imageIndex - 1);
	};

	return (
		<div className=' text-4xl text-orange flex justify-evenly w-full'>
			<button
				className='opacity-70 hover:scale-110 hover:opacity-100 transition duration-700'
				onClick={handleClickDecrease}
			>
				<AiOutlineArrowLeft />
			</button>
			<button
				className='opacity-70 hover:scale-110 hover:opacity-100 transition duration-700'
				onClick={handleClickIncrease}
			>
				<AiOutlineArrowRight />
			</button>
		</div>
	);
};
