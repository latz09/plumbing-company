import LandingHero from '../components/landing/LandingHero';
import CardLayout from '../components/utils/Card';
import { BsHandThumbsUp } from 'react-icons/bs';
import { openingCards, reasons, whyUsCarouselImages } from '../data/data';
import WhyUs from '../components/whyUs/WhyUs';

export default function Home() {
	console.log(whyUsCarouselImages)
	return (
		<div className='grid  gap-16 mb-40'>
			<LandingHero />
			<CardLayout data={openingCards} />
			<WhyUs data={reasons} images={whyUsCarouselImages}/>
		</div>
	);
}
