import { Fragment, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import img from '../../img/image';
import mp3 from '../../video/video';
import Timer from './timer';

const Home = () => {
	const [modeSleep, setModeSleep] = useState(false);

	// boton sleep
	const handleSleepOn = (e) => {
		e.preventDefault();
		console.log('handleSleepOn');
		setModeSleep(true);
	};
	const handleSleepOff = (e) => {
		e.preventDefault();
		console.log('handleSleepOff');
		setModeSleep(false);
	};
	return (
		<Fragment>
			<div className="container-1">
				<div className=" grid-title ">
					<img
						className="btn-sleep_img hover"
						src={img.iconArrow}
						alt="arrow"
					/>

					<h2 className="title-text" style={{ color: 'var(--black-color)' }}>
						Sleep time
					</h2>
				</div>
			</div>
			{/* <!-- targeta header principal --> */}
			<div className=" container-1">
				<div className="card-image">
					<img className="" src={img.sleeping} alt="cardimage" />
					<div className="btn-sleep btn-bg hover">
						<div className="btn-sleep_info">
							<p className="btn-sleep_text">Sleep</p>
							<span className="btn-sleep_min">15 mint</span>
						</div>
						{modeSleep ? (
							<a onClick={handleSleepOff}>
								<img
									className="btn-sleep_img"
									src={img.btnPauseCircleOutline}
									alt=""
								/>
							</a>
						) : (
							<a onClick={handleSleepOn}>
								<img
									className="btn-sleep_img"
									src={img.iconPlayCircleWhite}
									alt=""
								/>
							</a>
						)}
					</div>
					{modeSleep ? (
						<div class="position-clock-circle">
							<p class="btn-sleep_text position-clock-text">
								<Timer/>
								</p>
							<ReactAudioPlayer
								style={{
									opacity: 0,
									'pointer-events': 'none'
								}}
								src={mp3.hoppyNow}
								autoPlay
								controls
                                loop='true'
							/>
							<img
								class="position-clock-img"
								src={img.clockCirclePause}
								alt="clock"
							/>
						</div>
					) : null}
				</div>
			</div>
			{/* <!-- fila --> */}
			<div className="row-title-div container-1">
				<p className="row-title-div_lessons">Lessons</p>
				<p className="row-title-div_playall">Play all</p>
			</div>

			{/* <!-- tarjetas --> */}
			<audio controls autoplay>
				<source src={mp3.hoppyNow} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
			<div className="cards-lesson container-1 ">
				<div className="card-image card-image-lesson  hover">
					<img className="" src={img.sleeping} alt="cardimage" />
					<div className="card-image-lesson-container">
						<div className="card-image-lesson_info">
							<p className="card-text">Abrir Spotify</p>
						</div>
						<div className="card-image-icon">
							<img className="" src={img.rainbow} alt="iconleson" />
						</div>
					</div>
				</div>
				<div className="card-image card-image-lesson hover ">
					<img className="" src={img.sleeping} alt="cardimage" />
					<div className="card-image-lesson-container">
						<div className="card-image-lesson_info">
							<p className="card-text">Abrir Spotify</p>
						</div>
						<div className="card-image-icon">
							<img className="" src={img.rainbow} alt="iconleson" />
						</div>
					</div>
				</div>
				<div className="card-image card-image-lesson  hover">
					<img className="" src={img.sleeping} alt="cardimage" />
					<div className="card-image-lesson-container">
						<div className="card-image-lesson_info">
							<p className="card-text">Abrir Spotify</p>
						</div>
						<div className="card-image-icon">
							<img className="" src={img.rainbow} alt="iconleson" />
						</div>
					</div>
				</div>
				<div className="card-image card-image-lesson  hover">
					<div className="card-image-lesson-container">
						<div className="card-image-lesson_info">
							<p className="card-text">Abrir Spotify</p>
						</div>
						<div className="card-image-icon">
							<img className="" src={img.rainbow} alt="iconleson" />
						</div>
					</div>
				</div>
				<div className="card-image card-image-lesson  hover">
					<div className="card-image-lesson-container">
						<div className="card-image-lesson_info">
							<p className="card-text">Abrir Spotify</p>
						</div>
						<div className="card-image-icon">
							<img className="" src={img.phone} alt="iconleson" />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
