import React from "react";
import attack from "./Image/attack.png";
import defance from "./Image/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefance = this.handleDefance.bind(this);
    // this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.state = {
      count: 0,
      gameStatus: " ",
      lastPlay: "",
    };
  }
  handleAttack() {
    this.setState((previous) => {
      let countRandom = previous.count + Math.round(Math.random() * 10);
      let lastPlayRecord = "";
      let gameStatusRecord = "";

      if (countRandom >= 10) {
        lastPlayRecord = "Attack";
        gameStatusRecord = "Won";
      } else if (countRandom <= -10) {
        lastPlayRecord = "Defance";
        gameStatusRecord = "Lose";
      }
      return {
        gameStatus: gameStatusRecord,
        lastPlay: lastPlayRecord,
        count: countRandom,
      };
    });
  }
  handleDefance = () => {
    this.setState((previous) => {
      let countRandom = previous.count - Math.round(Math.random() * 10);
      let lastPlayRecord = "";
      let gameStatusRecord = "";

      if (countRandom > 10) {
        lastPlayRecord = "Attack";
        gameStatusRecord = "Won";
      } else if (countRandom < -10) {
        lastPlayRecord = "Defance";
        gameStatusRecord = "Lose";
      }
      return {
        gameStatus: gameStatusRecord,
        lastPlay: lastPlayRecord,
        count: countRandom,
      };
    });
  };
  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefance();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };
  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game score: {this.state.count} </h1>
        <p>You win at +10 points and lose at -10 ponits!</p>
        <p>Last play: {this.state.lastPlay} </p>
        <h3>Game Status: {this.state.gameStatus} </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            onClick={this.handleAttack}
            src={attack}
            alt="attack"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
          ></img>
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            className="p-4 rounded"
            onClick={this.handleDefance}
            src={defance}
            alt="defance"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
