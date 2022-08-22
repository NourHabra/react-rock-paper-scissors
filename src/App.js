import "./App.css";
import React from "react";
import logo from "./images/logo.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rules from "./images/image-rules.svg";
import closeIcon from "./images/icon-close.svg";

const freshRound = {
	user: null,
	comp: null,
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.playAgain = this.playAgain.bind(this);
		this.selectMove = this.selectMove.bind(this);
		this.toggleRules = this.toggleRules.bind(this);
		this.state = {
			user: null,
			comp: null,
			score: 0,
		};
		/* 
		Functions:
		Select move for user
		Select move for computer
		determine winner
		update score
		*/
	}

	playAgain(e) {
		document.getElementById("computer-selection").style.display = "none";
		document.getElementById("user-selection").style.display = "flex";
		this.setState(freshRound);
	}

	selectMove(move) {
		const compMove = ["rock", "paper", "scissors"][
			Math.floor(Math.random() * 3)
		];

		this.setState({
			user: move,
			comp: compMove,
		});
		if (move == compMove) {
			document.getElementById("result").innerText = "Draw!";
		} else if (move == "rock") {
			if (compMove == "paper") {
				document.getElementById("result").innerText = "You Lose!";
			} else if (compMove == "scissors") {
				document.getElementById("result").innerText = "You Win!";
				this.setState((state) => {
					return { score: state.score + 1 };
				});
			}
		} else if (move == "paper") {
			if (compMove == "scissors") {
				document.getElementById("result").innerText = "You Lose!";
			} else if (compMove == "rock") {
				document.getElementById("result").innerText = "You Win!";
				this.setState((state) => {
					return { score: state.score + 1 };
				});
			}
		} else if (move == "scissors") {
			if (compMove == "rock") {
				document.getElementById("result").innerText = "You Lose!";
			} else if (compMove == "paper") {
				document.getElementById("result").innerText = "You Win!";
				this.setState((state) => {
					return { score: state.score + 1 };
				});
			}
		}
		document.getElementById("computer-selection").style.display = "flex";
		document.getElementById("user-selection").style.display = "none";
	}

	toggleRules(mode) {
		document.getElementById("rules-layer").style.display = mode;
		document.getElementById("rules-button").style.opacity =
			mode == "flex" ? 0.3 : 1;
	}

	render() {
		return (
			<div className="App">
				<div className="rules-layer" id="rules-layer">
					<div className="rules-container">
						<div className="rules-header">
							<h2>Rules</h2>
							<button
								id="close-button"
								onClick={() => this.toggleRules("none")}
							>
								<img src={closeIcon} alt="exit" />
							</button>
						</div>
						<img src={rules} alt="rules" />
					</div>
				</div>
				<button
					onClick={() => this.toggleRules("flex")}
					id="rules-button"
				>
					Rules
				</button>
				<div className="header">
					<img src={logo} alt="logo" />
					<div className="scoreboard">
						<p>SCORE</p>
						<p id="score">{this.state.score}</p>
					</div>
				</div>
				<div className="user-selection" id="user-selection">
					<div className="top-buttons">
						<div className="button-container" id="paper">
							<button
								onClick={() => this.selectMove("paper")}
								value="paper"
								className="button"
							>
								<img src={paper} />
							</button>
						</div>
						<div className="button-container" id="scissors">
							<button
								onClick={() => this.selectMove("scissors")}
								value="scissors"
								className="button"
							>
								<img src={scissors} />
							</button>
						</div>
					</div>
					<div className="lower-button">
						<div className="button-container" id="rock">
							<button
								onClick={() => this.selectMove("rock")}
								value="rock"
								className="button"
							>
								<img src={rock} />
							</button>
						</div>
					</div>
				</div>
				<div className="computer-selection" id="computer-selection">
					<div className="selections">
						<div className="selection-section">
							<p>You selected</p>
							<div
								className={
									"button-container " + this.state.user
								}
							>
								<div id="user-selected" className="button">
									{this.state.user == "paper" && (
										<img src={paper} />
									)}
									{this.state.user == "rock" && (
										<img src={rock} />
									)}
									{this.state.user == "scissors" && (
										<img src={scissors} />
									)}
								</div>
							</div>
						</div>
						<div className="selection-section">
							<p>Computer selected</p>
							<div
								className={
									"button-container " + this.state.comp
								}
							>
								<div id="computer-selected" className="button">
									{this.state.comp == "paper" && (
										<img src={paper} />
									)}
									{this.state.comp == "rock" && (
										<img src={rock} />
									)}
									{this.state.comp == "scissors" && (
										<img src={scissors} />
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="result">
						<p id="result">You Win!</p>
						<button onClick={this.playAgain}>Play Again</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
