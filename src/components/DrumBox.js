import React, { Component } from "react";
import DrumPad from "./DrumPad";

import "../styles.css";

export default class DrumBox extends Component {
	render() {
		return (
			<div className="box" id="drum-machine">
				<div id="display">
					<DrumPad
						className="drum-pad"
						id="boom"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
					>
						Q
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="clap"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
					>
						W
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="hihat"
						src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
					>
						E
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="kick"
						src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
					>
						A
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="openhat"
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
					>
						S
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="rider"
						src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
					>
						D
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="snare"
						src="http://wavlist.com/soundfx/027/drum_snare2.wav"
					>
						Z
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="tink"
						src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
					>
						X
					</DrumPad>
					<DrumPad
						className="drum-pad"
						id="tom"
						src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
					>
						C
					</DrumPad>
				</div>
			</div>
		);
	}
}
