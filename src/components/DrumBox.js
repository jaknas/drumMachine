import React, { Component } from "react";
import DrumPad from "./DrumPad";

import "../styles.css";

export default class DrumBox extends Component {
	render() {
		return (
			<div className="box" id="drum-machine">
				<div id="display">
					<DrumPad className="drum-pad" id="boom">
						Q
					</DrumPad>
					<DrumPad className="drum-pad" id="clap">
						W
					</DrumPad>
					<DrumPad className="drum-pad" id="hihat">
						E
					</DrumPad>
					<DrumPad className="drum-pad" id="kick">
						A
					</DrumPad>
					<DrumPad className="drum-pad" id="openhat">
						S
					</DrumPad>
					<DrumPad className="drum-pad" id="rider">
						D
					</DrumPad>
					<DrumPad className="drum-pad" id="snare">
						Z
					</DrumPad>
					<DrumPad className="drum-pad" id="tink">
						X
					</DrumPad>
					<DrumPad className="drum-pad" id="tom">
						C
					</DrumPad>
				</div>
			</div>
		);
	}
}
