console.log("Pokemon-HW")

const game = {
cards: [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
],

round: 0

};

const player = {
	//name: "Eggbert",
	name: "player",
	hands: [],
	score: 0,
	winRound: 0,
};

const computer = {
	name: "computer",
	hands: [],
	score: 0,
	winRound: 0,
};

function removeCards() {
	return game.cards.splice(Math.floor(Math.random()*game.cards.length), 1)[0];
}

function dealCards() {
	player.hands = [];
	computer.hands = [];
	if(game.cards.length >= 6) {
		for (let i = 0; i < 3; i++){
			player.hands.push(removeCards());
			computer.hands.push(removeCards());

		}
	}
	 //console.log(`the player's cards: ${JSON.stringify(player.hands)}, the computer's cards: ${JSON.stringify(computer.hands)}`);
		showCards();
	}
//dealCards();
	//console.log(dealCards());

function showCards() {
	//dealCards();
	for (let i = 0; i < player.hands.length; i++) {

		console.log(`player: ${JSON.stringify(player.hands[i].name)} ${JSON.stringify(player.hands[i].damage)} 
					computer: ${JSON.stringify(computer.hands[i].name)} ${JSON.stringify(computer.hands[i].damage)}`)
	}
}

function cardBattle() {
	dealCards();
	player.score = 0;
	computer.score = 0;
	for (let i = 0; i< player.hands.length; i++) {
		if (player.hands[i].damage > computer.hands[i].damage) {
			player.score += 1;
			console.log(`player score: ${player.score}`);
		} else if (player.hands[i].damage < computer.hands[i].damage) {
			computer.score += 1;
			console.log(`computer score: ${computer.score}`);
		} else {
			console.log("Tie Game!");
		}
	}
}

function winRound() {
	cardBattle();

	if(player.score > computer.score) {
		player.winRound += 1;
		game.round += 1;
		console.log(`player win round ${game.round}`)
	} else if(player.score < computer.score) {
		computer.winRound +=1;
		game.round += 1;
		console.log(`computer win round ${game.round}`)
	} else	{
		console.log("Tie Round!");
		game.round += 1;
	}
}

function battleRound() {
	while(game.cards.length >= 6) {
		//dealCards();
		//showCards();
		//cardBattle();
		winRound();
	}
}

winRound();
function winner() {
	if (player.winRound > computer.winRound) {
		console.log("Winner is player");
	} else if (player.winRound < computer.winRound) {
		console.log("Winner is computer");
	} else {
		console.log("Tie Game");
	}
}

battleRound();
winner();
// result.push(sourceArray[Math.floor(Math.random()*sourceArray.length)]);



















