import React from 'react'

const Hero = () => {
  return (
	<div className="hero">
	<div className='main-content'>
		<h1>YOUR FEET DESERVE THE BEST</h1>
		<p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
			SHOES. 
		</p>
		<div className='hero-btn'>
			<button>Shop Now</button>
			<button className='Category-btn'>Category</button>
		</div>

		<div className='shopping'>
			<p>Also Available On</p>
			<div className='brand-icons'>
				<img src="/images/flipkart.png" alt="flipkart-logo" />
				<img src="/images/amazon.png" alt="amazon-logo" />
			</div>
		</div>
	</div>
	<div className='image'>
		<img src="/images/shoe_image.png" alt="shoe-image" />
	</div>
		
	</div>
  )
}

export default Hero;