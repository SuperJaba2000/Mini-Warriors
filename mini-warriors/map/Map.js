class Map{
	
	SEED = 12345;
	SIZE = 100;
	
	constructor(name, version){
		this.name = name;
		this.version = version;
	}
	
	generate(){
		noise.setSeed(this.SEED);
		this.worlds = [new World('Basic World', this.SIZE, 2)];
		
		for(let world = 0; world < 1; world++){
			this.worlds[world].generate();
		}
	}
	
	update(){
		this.worlds[this.activeWorld].update();
	}
	
	playerAdd(player, worldIndex, dimensionIndex){
		this.worlds[worldIndex].playerAdd(player, dimensionIndex);
	}
	
	getActiveWorld() {
		return this.worlds[this.activeWorld];
	}
	
	worlds = [];
	activeWorld = 0;
}