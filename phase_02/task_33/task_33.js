var BLOCK = {
	currentCood: {
		dir: 0,
		x: 0,
		y: 0
	},
	nextCood:{
		dir: 0,
		x: 0,
		y: 0
	},
	dirMap: ['N', 'E', 'S', 'W'],
	init: function(x, y, dir) {
		BLOCK.nextCood.x = BLOCK.currentCood.x = x;
		BLOCK.nextCood.y = BLOCK.currentCood.y = y;
		BLOCK.nextCood.dir = BLOCK.currentCood.dir = BLOCK.dirMap.indexOf(dir);
		BLOCK.updatePosition();
	},
	bind: function() {
		//console.log(document.getElementById('order').value);
		BLOCK.getOrder(document.getElementById('order').value);
	},
	getOrder: function(order) {
		switch (order) {
			case 'GO': 
				BLOCK.getDestination(BLOCK.currentCood.dir, 1);
				//console.log(BLOCK.nextCood);
				BLOCK.updatePosition();
				break;
			case 'TUN LEF': 
				BLOCK.nextCood.dir = BLOCK.getDir(-1);
				//console.log(BLOCK.nextCood);
				BLOCK.updatePosition();
				break;
			case 'TUN RIG': 
				BLOCK.nextCood.dir = BLOCK.getDir(1);
				//console.log(BLOCK.nextCood);
				BLOCK.updatePosition();
				break;
			case 'TUN BAC': 
				BLOCK.nextCood.dir = BLOCK.getDir(2);
				//console.log(BLOCK.nextCood);
				BLOCK.updatePosition();
				break;
			default: break;
		}
	},
	getDestination: function(dest, mov) {
		switch (dest){
			case 0:
				BLOCK.nextCood.y -= mov;
				break;
			case 1: 
				BLOCK.nextCood.x += mov;
				break;
			case 2:
				BLOCK.nextCood.y += mov;
				break;
			case 3:
				BLOCK.nextCood.x -= mov;
				break;
			default: break;
		}
	},
	getDir: function(num) {
		return (BLOCK.currentCood.dir + num + 4) % 4;
	},
	updatePosition: function() {
		if (BLOCK.nextCood.x > Map.size.x || BLOCK.nextCood.y > Map.size.y || BLOCK.nextCood.x < 1 || BLOCK.nextCood.y < 1) {
			BLOCK.nextCood.x = BLOCK.currentCood.x;
			BLOCK.nextCood.y = BLOCK.currentCood.y;
			BLOCK.nextCood.dir = BLOCK.currentCood.dir;
			alert('wall!');
			return;
		}
		var className = 'poi-' + BLOCK.dirMap[BLOCK.nextCood.dir];
		var currentPosition = 'map-' + BLOCK.currentCood.x + '-' + BLOCK.currentCood.y;
		var nextPosition = 'map-' + BLOCK.nextCood.x + '-' + BLOCK.nextCood.y;
		document.getElementById(currentPosition).setAttribute('class', '');
		document.getElementById(nextPosition).setAttribute('class', className);
		BLOCK.currentCood.x = BLOCK.nextCood.x; 
		BLOCK.currentCood.y = BLOCK.nextCood.y; 
		BLOCK.currentCood.dir = BLOCK.nextCood.dir; 
	}
}

var Map = {
	size:{
		x: 0,
		y: 0
	},
	init: function(x, y, el) {
		Map.size.x = x;
		Map.size.y = y;
		var str = '';
		str += '<table id="maptable" class="map"><tbody>';
		for (var i = 0; i <= y; i++) {
			str += '<tr>';
			for (var j = 0; j <= x; j++) {
				if (i == 0 && j > 0) {
					str += '<td id="map-'+j+'-'+i+'" class="title">'+j+'</td>';
				} else if (i == 0 && j == 0) {
					str += '<td id="map-'+j+'-'+i+'" class="title"></td>';
				} else if (i > 0 && j == 0){
					str += '<td id="map-'+j+'-'+i+'" class="title">'+i+'</td>';
				} else {
					str += '<td id="map-'+j+'-'+i+'"></td>';
				}				
			}
			str += '</tr>';
		}
		str += '</tboy></table>'
		document.getElementById(el).innerHTML = str;
	}
}
