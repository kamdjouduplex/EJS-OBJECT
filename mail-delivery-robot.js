
const roads = [
	"Alice's House-Bob's House", 
	"Alice's House-Cabin",
	"Alice's House-Post Office", 
	"Bob's House-Town Hall",
	"Daria's House-Ernie's House", 
	"Daria's House-Town Hall",
	"Ernie's House-Grete's House", 
	"Grete's House-Farm",
	"Grete's House-Shop", 
	"Marketplace-Farm",
	"Marketplace-Post Office", 
	"Marketplace-Shop",
	"Marketplace-Town Hall", 
	"Shop-Town Hall"
];

class Graph {
	constructor(){
		this.graph = {};
	}

	addEdge(from, to) {
		if (this.graph[from] == null) {
			this.graph[from] = [to];
		} else {
			this.graph[from].push(to);
		}
	}

	build(roads){
		for (let [from, to] of roads.map(r => r.split("-"))) {
			this.addEdge(from, to);
			this.addEdge(to, from);
		}
		return this.graph;
	}
	
}

const graph = new Graph().build(roads);
/*console.log(graph["Alice's House"]);*/


//Second phase create the village state
class VillageState {
	constructor(place, parcels){
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if( !graph[this.place].includes(destination) ){
			return this;
		} else {
			let parcels = this.parcels.map(p => {
				if(p.place != this.place){
					return p;
				}
				return {place: destination, address: p.address}
			}).filter(p => p.place != p.address);
			return new VillageState(destination, parcels);
		}
	}
}


//let instantiate our village state
/*let first_state = new VillageState("Post Office", [
		{place: "Post Office", address: "Alice's House"}
	]);
let first_move = first_state.move("Alice's House");*/


function runRotot(state, robot, memory){
	for(let turn = 0; ; turn++){
		if(state.parcels.length == 0){
			console.log(`Done in ${turn} turns`);
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

function randomPick(array) {
	let choice = Math.floor(Math.random()*array.length);
	return array[choice];
}

function randomRobot(state){
	return {direction: randomPick(graph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(graph));
		let place;
		do{
			place = randomPick(Object.keys(graph));
		} while(place == address);
		parcels.push({place, address});
	}
	return new VillageState("Post Office", parcels);
}





var mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory){
	if(memory.length == 0){
		memory = mailRoute;
	}
	return {direction: memory[0], memory: route.slice(1)};
}

function findRoute(graph, from, to){
	let work = [{ at: from, route: [] }];
	for (let i = 0; i < work.length; i++) {
		let {at, route} = work[i];
		for (let place of graph[at]) {
			if (place == to){
				return route.concat(place);
			}
			if ( !work.some(w => w.at == place) ){
				work.push({at: place, route: route.concat(place)});
			}
		}
	}
}

function goalOrientedRobot({place, parcels}, route){
	if (route.length == 0) {
		let parcel = parcels[0];
		if (parcel.place != place) {
			route = findRoute(graph, place, parcel.place);
		} else {
			route = findRoute(graph, place, parcel.address);
		}
	}
	return {direction: route[0], memory: route.slice(1)};
}


//run the robot to see how it perfom now
runRotot(VillageState.random(), goalOrientedRobot, []);

/*link:ca.ovh.com
user:*5070-3167-27/tony14pro*
pass:*Tony14pro@Hombee
Original IP address of bproo.com 66.96.147.118
**/



