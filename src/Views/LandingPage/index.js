import React, { useState } from 'react';
import './style.scss';
//import images
import LandingPageBuilding from './../../assets/images/LandingPageBuilding.png';
//Import Services
import axios from 'axios';

function Index(props) {
	const [email, setEmail] = useState();
	const [successful, setSucessful] = useState(false);

	const handleForm = async (e) => {
		e.preventDefault();
		const result = await axios.post(
			'https://gmail.us17.list-manage.com/subscribe/post?u=3629eb921ff4887f897adb5d0&amp;id=778e03d58c',
			{ 'mce-EMAIL': email }
		);
		console.log(result);
		if (result.status == 200) {
			setSucessful(true);
		}
	};

	return (
		<div className="Landing-Page">
			<section>
				<div>
					{/* <h1 className="color-lightpurple">
						Transforming how we handle Condominiums.{' '}
					</h1>
					<p>
						Digital experience for condominium management for a more transparent
						and collaborative neighborhood while reducing costs.
					</p>
					<button className="background-lightgreen">JOIN FOR FREE</button> */}
					<div id="mc_embed_signup">
						<form
							action="https://gmail.us17.list-manage.com/subscribe/post?u=3629eb921ff4887f897adb5d0&amp;id=778e03d58c"
							//onSubmit={handleForm}
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_blank"
							novalidate
						>
							<div id="mc_embed_signup_scroll">
								<h2>Subscribe to keep updated</h2>
								<div className="mc-field-group">
									<label for="mce-EMAIL">
										Email Address <span className="asterisk">*</span>
									</label>
									<input
										type="email"
										value={email}
										name="EMAIL"
										className="required email"
										id="mce-EMAIL"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									{successful && <span>You were successfully subscribed!</span>}
								</div>
								<div id="mce-responses" className="clear">
									<div
										className="response"
										id="mce-error-response"
										style={{ display: 'none' }}
									></div>
									<div
										className="response"
										id="mce-success-response"
										style={{ display: 'none' }}
									></div>
								</div>
								<div
									style={{ position: 'absolute', left: '-5000px' }}
									aria-hidden="true"
								>
									<input
										type="text"
										name="b_3629eb921ff4887f897adb5d0_778e03d58c"
										tabindex="-1"
										value=""
									/>
								</div>
								<div className="clear">
									<input
										type="submit"
										value="Subscribe"
										name="subscribe"
										id="mc-embedded-subscribe"
										className="button"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
				<img src={LandingPageBuilding} alt="Landing Page Building" />
			</section>
			{/* <section>
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
					<button className="background-lightpurple">Choose</button>
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
					<button className="background-lightpurple">Choose</button>
				</div>
			</section> */}
		</div>
	);
}

export default Index;
