

const ImageCarousel = ({ images }) => {
   
	return (
		<>
			{images.map((image, index) => (
				<CarouselImage image={image.image} />
			))}
		</>
	);
};

export default ImageCarousel;



const CarouselImage = ({image}) => {

    return ( <>
        {/* <Image src={image} /> */}
        <div>test</div>
    </> );
}
 
