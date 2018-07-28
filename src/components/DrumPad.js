import React from "react";

const DrumPad = props => {
	const playSound = e => {
		const soundLetter = document.querySelectorAll(".clip");
		// switch case for different keycodes (not the best way to solve(maybe link id passed by parent?))
		switch (e.keyCode) {
			case 81:
				soundLetter[0].play();
				break;
			case 87:
				soundLetter[1].play();
				break;
			case 69:
				soundLetter[2].play();
				break;
			case 65:
				soundLetter[3].play();
				break;
			case 83:
				soundLetter[4].play();
				break;
			case 68:
				soundLetter[5].play();
				break;
			case 90:
				soundLetter[6].play();
				break;
			case 88:
				soundLetter[7].play();
				break;
			case 67:
				soundLetter[8].play();
				break;
		}
	};

	const playClick = () => {
		const letter = document.querySelectorAll("audio");

		switch (props.id) {
			case "boom":
				letter[0].play();
				break;
			case "clap":
				letter[1].play();
				break;
			case "hihat":
				letter[2].play();
				break;
			case "kick":
				letter[3].play();
				// more coming, only temporary solution.
				console.log((document.getElementById("display").innerText = "cymbal"));
				break;
		}
	};

	return (
		<div
			className="drum-pad"
			onKeyDown={playSound}
			onClick={playClick}
			tabIndex="0"
		>
			{props.children}
			<audio src={props.src} className="clip" id={props.children} />
		</div>
	);
};
export default DrumPad;
