import React from "react";

const DrumPad = props => {
	const playSound = e => {
		if (e.keyCode === 81) {
			document.querySelectorAll(".clip")[0].play();
		}
	};

	return (
		<div className="drum-pad" onKeyDown={playSound} tabIndex="0">
			{props.children}
			<audio
				src="http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3"
				className="clip"
				id={props.children}
			/>
		</div>
	);
};
export default DrumPad;
