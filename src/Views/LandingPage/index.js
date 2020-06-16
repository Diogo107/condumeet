import React from 'react';
import './style.scss';
//import images
import LandingPageBuilding from './../../assets/images/LandingPageBuilding.png';
import ListBullet from './../../assets/images/ListBullet.png';

function index(props) {
	return (
		<div className="Landing-Page">
			<section>
				<div>
					<h1 className="color-lightpurple">
						Transforming how we handle Condominiums.{' '}
					</h1>
					<p>
						Digital experience for condominium management for a more transparent
						and collaborative neighborhood while reducing costs.
					</p>
					<button className="background-lightgreen">JOIN FOR FREE</button>
				</div>

				<img src={LandingPageBuilding} alt="Landing Page Building Image" />
			</section>
			<section>
				<h1 className="color-lightpurple">What you can get!</h1>
				<p>A short name that people caracterizes your condominium.</p>
			</section>
			<section>
				<div>
					<h1>Free</h1>
					<h1 className="color-lightgreen">0 €</h1>
					<ul>
						<li>8 apartments</li>
						<li>Expenses Registration</li>
						<li>Neighbors Chat</li>
						<li>PDF Archive</li>
					</ul>
				</div>
				<div>
					<h1>Premium</h1>
					<h1 className="color-lightgreen">
						35 €<small> /year</small>
					</h1>
					<ul>
						<li>Unlimited apartments</li>
						<li>Expenses Registration</li>
						<li>Automatic Payments</li>
						<li>Neighbors Chat</li>
						<li>PDF Archive</li>
						<li>Video Archive</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default index;
