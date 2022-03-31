import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/image';

const Welcome = () => {
	return (
		<Fragment>
			<div className="welcome ">
				<div className="container-1">
					<div className="yoga-info">
						<h1>Yoga</h1>

						<img src={img.yoga} alt="yogaimage" />
					</div>

					<p className="pagraph-yoga-text">Start with Fresh Morning!</p>
				</div>
				<Link to='/home' className="btn-signin hover">
					<span>Sign in</span>
					<img src={img.arrowRight} alt="signin" />
				</Link>
			</div>
		</Fragment>
	);
};

export default Welcome;
