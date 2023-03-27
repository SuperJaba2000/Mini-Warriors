const Vars = {
	
	version: {
		name: "pre-alpha 0.0.7",
		update: 0,
	},
	
	tileSize: 32,
	tileBuffer: 1,
	
	maxLight: 25,
	viewDistance: 5,
	
	mainCanvas: document.getElementById('scene'),
	minimapCanvas: document.getElementById('minimap'),
	
	changeable: {
	    activeMap: new Map('main'),
	    player: new Player(),
		
		gameState: new GameStates().mainMenu,
		canControl: true,
		
		isOnline: false,
		
	    fps: 60,
	},
	
	graphics: new Graphics(document.getElementById('scene')),
	camera: new Camera(),
	controls: new Controls(),
	
	loader: new TextureLoader('../../../assets-raw/sprites'),
	
	content: new Set([Blocks, Entities, Structures]),
	mods: new Set(),
};