/**********************
function BLOCK.run() will accept three parameters: 
	1. ele for the block element(required),  
	2. orderList for the order list(required),
	3. forceTime for the animation time (optional)

2. the orderList is an array containing one or several objs, such as:
	{
		[ type: 'mov',    //'mov' for move, 'turn' for turn an angle , 'point' for a direction(0, 90, 180, 270) --> (top, left, bottom, right)
		  dir: (int) or (string'forwards')  // the 'forwards' means move in the current direction
		  time: (int)  // the time this action will cost
		],
		[
			type: 'turn',
			angle: (int) //-90 for left, 90 for right, 180 for back, 0 for stay
			time: (int) //the same
		],
		[
			type: 'point',   //to point a direction to turn
			dir: (0 or 90 or 180 or 270)
			time: (int)
		]
	} 
3. forceTime: (int)  //optional, if this set, other order's time will be ignored. The time actions cost will be average. 
*************************/




var CONSTANT = {
	TOPSTEP: 40, //top step of the map(px)
	LEFTSTEP: 41, //left step of the map(px)
	FORCETIME: 1 //force the time of animation(second)
};

var BLOCK = {
	ele : null,
	create: function(game, ele, cood) {
		BLOCK.ele = ele;
		var _cood = {
			dir: 0,
			x: cood.x || 0,
			y: cood.y || 0
		};
		var left = _cood.x * CONSTANT.LEFTSTEP;
		var top = (_cood.y + 1)* CONSTANT.TOPSTEP;
		var game = document.getElementById(game);
		var mapItem = document.getElementById('map-2-2');
		var html = game.innerHTML;
		html += '<div id="' + ele + '" class="block" style="width:'+mapItem.offsetWidth+'px; height:'+(mapItem.offsetHeight - 14)+'px;'
				+ 'left:' + left + 'px; top:' + top + 'px; transform:rotate('+ _cood.dir +'); -webkit-transform:rotate(' + _cood.dir + ');"></div>';
		document.getElementById('game').innerHTML = html;
	},
	destroy: function() {
		var el = document.getElementById(BLOCK.ele);
		el.parentNode.removeChild(el);
		BLOCK.ele = null;
	},
	bind: function() {

		BLOCK.getOrder(document.getElementById('order').value);
	},
	getOrder: function(order) {
		switch (order) {
			case 'GO': 
				BLOCK.run(BLOCK.ele, [{type: 'mov', dir: 0, mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'TUN LEF': 
				BLOCK.run(BLOCK.ele, [{type: 'turn', angle: -90, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'TUN RIG': 
				BLOCK.run(BLOCK.ele, [{type: 'turn', angle: 90, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'TUN BAC': 
				BLOCK.run(BLOCK.ele, [{type: 'turn', angle: 180, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'TRA LEF':
				BLOCK.run(BLOCK.ele, [{type: 'mov', dir: 270, mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'TRA TOP':
				BLOCK.run(BLOCK.ele, [{type: 'mov', dir: 0, mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'MOV LEF':
				BLOCK.run(BLOCK.ele, [{type: 'point', dir: 270, time: 0.5}, {type: 'mov', dir: 'forwards', mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'MOV TOP':
				BLOCK.run(BLOCK.ele, [{type: 'point', dir: 0, time: 0.5}, {type: 'mov', dir: 'forwards', mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'MOV RIG':
				BLOCK.run(BLOCK.ele, [{type: 'point', dir: 90, time: 0.5}, {type: 'mov', dir: 'forwards', mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			case 'MOV BOT':
				BLOCK.run(BLOCK.ele, [{type: 'point', dir: 180, time: 0.5}, {type: 'mov', dir: 'forwards', mov: 1, time: 0.5}], CONSTANT.FORCETIME);
				break;
			default: break;
		}
	},
	run: function(ele, orderList, forceTime) {

		var webkit = false; //browser


		//Get keyframe obj from cssRules
		var keyframe = null;
		var len = document.styleSheets[0].cssRules.length;
		var ele = document.getElementById(ele);
		var currentCss = {
			angle: 0,
			left: 0,
			top: 0,
		};
		var afterCss = {
			angle: 0,
			left: 0,
			top: 0
		};
		var totalTime = 0;

		//browser 
		if (typeof ele.style.animation == 'undefined') {
			webkit = true;
		}

		//Get the current rotate angle and position info
		currentCss.angle = parseInt(ele.style[webkit ? '-webkit-transform' : 'transform'].match(/rotate\((\-?\d+)deg\)/)[1]); 
		currentCss.left = parseInt(ele.style['left']);
		currentCss.top = parseInt(ele.style['top']);
		//After
		afterCss.angle = currentCss.angle;
		afterCss.left = currentCss.left;
		afterCss.top = currentCss.top;

		keyframe = getKeyFrameRules();
		initKeyFrameRules(keyframe);
		updateKeyFrame(keyframe, orderList, forceTime);
		runAnimation(keyframe, totalTime);

		//Get keyframe rules
		function getKeyFrameRules() {
			var keyframe = null;
			for (var i = 0; i < len; i++) {
				if (document.styleSheets[0].cssRules[i].type ==  7) { //CSSRule.KEYFRAMES_RULE == 7, means keyframe
					keyframe = document.styleSheets[0].cssRules[i];
				}
			}
			return keyframe;
		}
		//Delete keyframe rules and insert the 0% one
		function initKeyFrameRules(keyframe) {
			if (keyframe) {
				//delete the rule in the keyframe
				if (keyframe.cssRules.length) {
					var ruleLen = keyframe.cssRules.length;
					for (var q = 0; q < ruleLen; q++) {
						//Every time delete the rule will change the cssRules's length, make sure the to delete the [0]
						keyframe.deleteRule(keyframe.cssRules[0].keyText);
					}
				}
				
				//animation 0% state
				if (webkit) { 
					keyframe.insertRule('0% ' + '{}');
				} else {
					keyframe.appendRule('0% ' + '{}');
				}
				//keyframe.cssRules[p].keyText = '' + perCent[p] + '%';
				keyframe.cssRules[0].style[ webkit ? '-webkit-transform':'transform'] = 'rotate(' + afterCss.angle + 'deg)';
				keyframe.cssRules[0].style.left = afterCss.left + 'px';
				keyframe.cssRules[0].style.top = afterCss.top + 'px';
				return keyframe;

			} else {
				alert("no keyframe!");
				return null;
			}
		}
		//Update the keyframe according to the orderList and the forceTime
		function updateKeyFrame(keyframe, orderList, forceTime) {
			//Read the order List
			totalTime = 0;
			var num = orderList.length;
			var perCent = [0];

			//Get totle time
			if (forceTime) {
				totalTime = forceTime;
				//Average the time of action
				for (var k = 1; k < num; k++) {
					perCent.push(k * 100 / num);
				}
				perCent.push(100);
			} else {
				for (var j = 0; j < num; j++) {
					totalTime += orderList[j].time;
				}
				//Get animation precent
				for (var k = 0; k < num - 1; k++) {
					perCent.push(perCent[k] + orderList[k].time * 100 / totalTime);
				}
				perCent.push(100);
				console.log(perCent);
			}
			
			//Set animation
			for (var p = 0; p < num; p++) {

				if (orderList[p].type == 'turn') {
					afterCss.angle = afterCss.angle + orderList[p].angle;
				} else if (orderList[p].type == 'mov') {
					if (orderList[p].dir == 'forwards') {
						orderList[p].dir = afterCss.angle;
					}
					switch (orderList[p].dir) {
						case 0:
							afterCss.top -= orderList[p].mov * CONSTANT.TOPSTEP;
							break;
						case 90:
							afterCss.left += orderList[p].mov * CONSTANT.LEFTSTEP;
							break;
						case 180:
							afterCss.top += orderList[p].mov * CONSTANT.TOPSTEP;
							break;
						case 270:
							afterCss.left -= orderList[p].mov * CONSTANT.LEFTSTEP;
							break;
					}			
				} else if (orderList[p].type == 'point') {
					afterCss.angle = orderList[p].dir;
				}

				if (webkit) { 
					keyframe.insertRule('' + perCent[p+1] + '% ' + '{}');
				} else {
					keyframe.appendRule('' + perCent[p+1] + '% ' + '{}');
				}
				//keyframe.cssRules[p].keyText = '' + perCent[p] + '%';
				keyframe.cssRules[p+1].style[ webkit ? '-webkit-transform':'transform'] = 'rotate(' + afterCss.angle + 'deg)';
				keyframe.cssRules[p+1].style.left = afterCss.left + 'px';
				keyframe.cssRules[p+1].style.top = afterCss.top + 'px';
			}
		}
		//Put the animation to the element and run
		function runAnimation(keyframe, totalTime) {
			//IF Out of the map
			if (afterCss.top <= 0 || afterCss.top > Map.size.y * CONSTANT.TOPSTEP || afterCss.left <= 0 || afterCss.left > Map.size.x * CONSTANT.LEFTSTEP) {
				alert('wall!');
				return false;
			}

			keyframe.name = 'animate' + Date.parse(new Date());
			ele.style[webkit ? 'WebkitAnimation' : 'animation'] = keyframe.name + ' ' + totalTime + 's';
			//It is important to set the rotate back to [0,360]
			var rotate = afterCss.angle < 0 ?  (afterCss.angle % 360) + 360 : (afterCss.angle % 360);
			ele.style[webkit ? '-webkit-transform' : 'transform'] = 'rotate(' + rotate + 'deg)';
			//ele.style.animationFillMode="forwards" ;
			ele.style['left'] =  afterCss.left + 'px';
			ele.style['top'] =  afterCss.top + 'px';
		}	
	}	
};

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
};
