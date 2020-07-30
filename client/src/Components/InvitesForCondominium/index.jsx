import React, {
	Component,
	useState,
	useContext,
	createContext,
	useEffect,
} from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';
import FacePurple from './../../assets/images/FacePurple.png';
import AddUser from './../../assets/images/AddUser.png';
import CloseButton from './../../assets/images/CloseButton.png';
import ShareIcon from './../../assets/images/ShareIcon.png';
//Import Services
import { validateEmail } from './../../Sevices/APIs.js';
import { inviteAllNeighbors } from './../../Sevices/Condominiums';
import { createCondominium } from './../../Sevices/Condominiums';
import { useCookies } from 'react-cookie';
//Import Context
import { SignUpContext } from './../../Context/SignUpContext.js';

function Index(props) {
	const [neighborsList, setNeighborsList] = useState([]);
	const [neighbor, setNeighbor] = useState();
	const [condominiumCode, setCondominiumCode] = useState();
	const [signUpForm, setSignUpForm] = useContext(SignUpContext);
	const [cookies, setCookie] = useCookies();
	const createFirstCondominium = async () => {
		const token = cookies.user.token;
		if (
			signUpForm.condominiumName !== '' &&
			signUpForm.address !== '' &&
			signUpForm.place_id !== '' &&
			signUpForm.postal_code !== '' &&
			signUpForm.condominiumFeatures !== ''
		) {
			const result = await createCondominium(signUpForm, token);
			setCondominiumCode(result.data.id);
		}
	};
	useEffect(() => {
		createFirstCondominium();
	}, []);

	return (
		<div>
			<button
				onClick={() => {
					props.history.push('/signup/welcome/create/features');
				}}
			>
				<img src={Arrow} alt="Arrow" />
			</button>
			<div className="progress-bar">
				<h1>Create your condominium.</h1>
				<ul className="progress">
					<li className="progress__circle progress--done progress--active">
						<p className="purple-text">Name</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active progress--done ">
						<p>Location</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--done progress--active">
						<p>Caracterization</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active progress--done">
						<p>Feactures</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active">
						<p>Finish</p>
					</li>
				</ul>
			</div>
			<div className="welcome__invites">
				<h1>
					Welcome to {signUpForm.condominiumName} <br />
					Now, call your Neightbors
				</h1>
				<h4>Your condominium code.</h4>
				<p>Share the code with your neighbours or send them a invite.</p>
				<div className="condomium-code">
					<h5>{condominiumCode}</h5>
					{/* Clicar na imagem partilhar para copiar para o clipboard */}
					<img
						src={ShareIcon}
						alt="Share Icon"
						style={{ width: '24px', height: '24px' }}
					/>
				</div>
				<div className="invite-neighbor">
					<img
						src={FacePurple}
						alt="Face"
						style={{ width: '40px', height: '40px' }}
					/>
					<form
						onSubmit={async (event) => {
							event.preventDefault();
							await setSignUpForm((previousState) => ({
								...signUpForm,
								condominiumNeighbors: [
									...signUpForm.condominiumNeighbors,
									neighbor,
								],
							}));
							setNeighbor('');
						}}
					>
						<input
							placeholder="Your neighbor email"
							type="email"
							value={neighbor}
							onChange={(event) => {
								setNeighbor(event.target.value);
							}}
						/>
						<button>
							<img src={AddUser} alt="Add Friend" />
						</button>
					</form>
				</div>
				{signUpForm.condominiumNeighbors &&
					signUpForm.condominiumNeighbors.map((single) => (
						<div className="neighbor-email">
							<img
								src={FacePurple}
								alt="Face"
								style={{ width: '25px', height: '25px' }}
							/>
							<div>
								<p>{single}</p>
								<button
									onClick={() => {
										let list = signUpForm.condominiumNeighbors.filter(
											(selected) => {
												return selected !== single;
											}
										);
										setSignUpForm((previousState) => ({
											...signUpForm,
											condominiumNeighbors: list,
										}));
									}}
								>
									<img
										src={CloseButton}
										alt="Face"
										style={{ width: '16px', height: '16px' }}
									/>
								</button>
							</div>
						</div>
					))}
				<button
					id="button__invite-all"
					className="background-lightpurple"
					onClick={() => {
						const data = {
							token: cookies.user.token,
							emails: signUpForm.condominiumNeighbors,
							id: condominiumCode,
						};
						inviteAllNeighbors(data);
					}}
				>
					Invite All
				</button>
				<button
					id="button__continue"
					onClick={() => {
						props.history.push(`/dashboard/overview/${condominiumCode}`);
					}}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Index;
