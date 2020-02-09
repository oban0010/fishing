
function help(){
	console.log("To eat the fish use eat()");
	console.log("To go fishing use fish()");
	console.log("To start/stop a fire use fire()");
	console.log("To search for bait use bait()");
	console.log("To search for wood use wood woood()");
	console.log("To check inventory use invantory()");
	console.log("To view the instruction use help()");
		
}

help();

game = {
	fire:0,
	bait:0,
	wood:0,
	fish:0
}

function fish(){
		if(game.bait > 0 && game.fire == 0){
		console.log('%c" You have caught 1 pice of bait"','color: red');
		game.fish += 1;
		game.bait -=1;
		return 1;
	}

	else if(game.fire == 1){
		console.log('%c" You must put out the fire"', 'color: red');
		return 0;
	}
	else if(game.bait === 0){
		 console.log('%c" You do not have any bait"','color: red');
		return 0;
	}

}


function fire(){
	if(game.fire == 0){
	if(game.wood >0){
		console.log('%c" You have started the fire"','color: red');
		game.wood -= 1;
		game.fire = 1;
		return 1;
	}
	else{
		console.log('%c" You do not have any wood"','color: red');
		return 0;
	}
}
else if(game.fire == 1){
	console.log('%c" You have put out the fire"','color: red');
	game.fire = 0;
	return 0;
}
}

function bait(){
	if(game.fire == 0){
		console.log('%c" You have 1 pice of bait"','color: red');
		game.bait += 1;
		return 1;
	}
	else{
		console.log('%c" You must have to sopted the fire"','color: red');
		return 0;
	}
}

function wood(){
	if(game.fire == 0){
		console.log('%c" You have found 1 pice of wood"','color: red');
		game.wood += 1;
		return 1;
	}
	else{
		console.log('%c" You must have to sopted the fire"','color: red');
		return 0;
	}
}

 function eat(){
	if(game.fish >0 && game.fire == 1){
		console.log('%c "You have eaten 1 fish"', "color:red");
		game.fish -= 1;
		return 1;
	}
	else if(game.fire == 0){
		console.log('%c " You must have to start the fire "',"color:red");
		return 0;
	}
	else if(game.fish == 0){
		 console.log('%c " You do not have any fish "',"color:red");
		 return 0;
	}
}

function invantory(){
	console.log('%c" you have '+ game.wood +' pices of wood"', 'color: red');
	console.log('%c" you have '+ game.bait +' pices of bait"','color: red');
	console.log('%c" you have '+ game.fish +' pices of fish"','color: red');
	if(game.fire == 1){
		console.log('%c" Your fire is burning"','color: red');
	}
	else{
		console.log('%c" your fire is out"','color: red');
	}
	return 1;
}