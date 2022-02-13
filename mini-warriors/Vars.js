class vars{
	
	version = Object.freeze({
		name: "0.1",
		update: 0,
	});
	
	tileSize = 32;
	tileBuffer = 2;
	
	maxLight = 55;
	
	mainCanvas = document.getElementById('scene');
	minimapCanvas = document.getElementById('minimap');
	
	mspf(){
		return 1000 / this.changeable.fps;
	};
	
	changeable = {
	        activeMap: new Map('main'),
		camera: new Camera(),
	        player: new Player(),
			 
	        fps: 60,
		pause: false
	};
	
	graphics  = new Graphics(document.getElementById('scene'));
	controls = new Controls();
	
	mods = new Set();
	
};

const Vars = new vars();