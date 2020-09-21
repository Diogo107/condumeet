import React from 'react';
import './style.scss';
//Import Images
import PdfIcon from './../../assets/images/PdfIcon.png';

function index(props) {
	return (
		<div className="Archive__View">
			<h1>Archive</h1>
			<form>
				<input type="date" placeholder="SELECT A DATE" />
				<select>
					<option>CATEGORY</option>
					<option>Option 1</option>
					<option>Option 2</option>
				</select>
			</form>
			<div className="Category__div--Archive">
				<div>
					<p>CATEGORY</p>
					<h1>Gas</h1>
				</div>
				<button>Download All</button>
			</div>
			<div className="List__div--Archive">
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
				<div className="Bill__Card--Archive">
					<img src={PdfIcon} alt="PDF Image" />
					<div>
						<h3>Bill Gas Energy.pdf</h3>
						<div>
							<p>Jan 16, 2020</p>
							<p>
								<small>|</small>
							</p>
							<p>14.1Mb</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
