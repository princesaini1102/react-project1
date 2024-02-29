import React from 'react'


const Navigation = () => {
  return (
	<div>
		<nav>
			<div className='main'>
             <img className='nike-logo' src="/images/nikelogo.png" alt="logo"/>
			</div>
			<ul>
				<li href="#">Menu</li>
				<li href="#">Location</li>
				<li href="#">About</li>
				<li href="#">Contact</li>
			</ul>

			<button>Login</button>

		</nav>
	</div>
  )
}

export default Navigation;