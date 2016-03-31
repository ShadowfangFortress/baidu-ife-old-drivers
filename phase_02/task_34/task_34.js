var TOPSTEP = 40;
var LEFTSTEP = 41;
var ROTATETIME = 0.5;
var MOVTIME = 0.5;


var BLOCK = {
	ele : null,
	creat: function(game, ele, cood) {
		BLOCK.ele = ele;
		var _cood = {
			dir: 0,
			x: cood.x || 0,
			y: cood.y || 0
		};
		var left = _cood.x * LEFTSTEP;
		var top = (_cood.y + 1)* TOPSTEP;
		var game = document.getElementById(game);
		var mapItem = document.getElementById('map-2-2');
		var html = game.innerHTML;
		html += '<div id="' + ele + '" class="block" style="width:'+mapItem.offsetWidth+'px; height:'+(mapItem.offsetHeight - 14)+'px;'
				+ 'left:' + left + 'px; top:' + top + 'px; transform:rotate('+ _cood.dir +'); -webkit-transform:rotate(' + _cood.dir + ');"></div>';
		document.getElementById('game').innerHTML = html;
	},
	bind: function() {
		BLOCK.getOrder(document.getElementById('order').value);
	},
	getOrder: function(order) {
		switch (order) {
			case 'GO': 
				BLOCK.run(BLOCK.ele, {angle: 0, mov: 1});
				break;
			case 'TUN LEF': 
				BLOCK.run(BLOCK.ele, {angle: -90, mov: 0});
				break;
			case 'TUN RIG': 
				BLOCK.run(BLOCK.ele, {angle: 90, mov: 0});
				break;
			case 'TUN BAC': 
				BLOCK.run(BLOCK.ele, {angle: 180, mov: 0});
				break;
			default: break;
		}
	},
	run: function(ele, options) {

		var webkit = false; //browser

		var _options = {
			angle: options.angle || 0,
			mov: options.mov || 0,
			angle_time: options.angle_time || ROTATETIME,
			mov_time: options.mov_time || MOVTIME    		//unit: s
		};
		//rotate percent time in the Animate
		var perRotate = _options.angle_time * 100 / (_options.angle_time + _options.mov_time);

		var keyframe = null;
		var len = document.styleSheets[0].cssRules.length;
		var ele = document.getElementById(ele);

		for (var i = 0; i < len; i++) {
			if (document.styleSheets[0].cssRules[i].type ==  7) { //CSSRule.KEYFRAMES_RULE == 7, means keyframe
				keyframe = document.styleSheets[0].cssRules[i];
			}
		}

		//browser 
		if (typeof ele.style.animation == 'undefined') {
			webkit = true;
		}

		if (keyframe) {

			//Get the current rotate angle
			var angleCss = parseInt(ele.style[webkit ? '-webkit-transform' : 'transform'].match(/rotate\((\-?\d+)deg\)/)[1]); 
	
			var leftCss = parseInt(ele.style['left']);
			var topCss = parseInt(ele.style['top']);

			//After rotate 
			var _angleCss = angleCss + _options.angle;
			//var dir = Math.abs(_angleCss) % 360; // 0, 90, 180, 270
			var dir = _angleCss < 0 ?  (_angleCss % 360) + 360 : (_angleCss % 360); //0, 90, 180, 270

			var	_leftCss = leftCss;
			var _topCss = topCss;

			switch(dir) {
				case 0:
					_topCss = topCss - _options.mov * TOPSTEP;
					break;
				case 90:
					_leftCss = leftCss + _options.mov * LEFTSTEP;
					break;
				case 180:
					_topCss = topCss + _options.mov * TOPSTEP;
					break;
				case 270:
					_leftCss = leftCss - _options.mov * LEFTSTEP;
					break;
			}

			//IF Out of the map
			if (_topCss <= 0 || _topCss > Map.size.y * TOPSTEP || _leftCss <= 0 || _leftCss > Map.size.x * LEFTSTEP) {
				alert('wall!');
				return false;
			}

			keyframe.name = 'animate' + Date.parse(new Date());
			//Origin
			keyframe.cssRules[0].style[ webkit ? '-webkit-transform':'transform'] = 'rotate(' + angleCss + 'deg)';
			keyframe.cssRules[0].style.left = leftCss + 'px';
			keyframe.cssRules[0].style.top = topCss + 'px';
			//Rotate animation
			keyframe.cssRules[1].keyText = '' + perRotate + '%';
			keyframe.cssRules[1].style[webkit ? '-webkit-transform':'transform'] = 'rotate(' + _angleCss + 'deg)';
			keyframe.cssRules[1].style.left = leftCss + 'px';
			keyframe.cssRules[1].style.top = topCss + 'px';
			//Move animation
			keyframe.cssRules[2].style[webkit ? '-webkit-transform':'transform'] = 'rotate(' + _angleCss + 'deg)';
			keyframe.cssRules[2].style.left = _leftCss + 'px';
			keyframe.cssRules[2].style.top = _topCss + 'px';

			ele.style[webkit ? 'WebkitAnimation' : 'animation'] = keyframe.name + ' ' + (_options.angle_time + _options.mov_time)+ 's';
			//It is important to set the rotate back to [0,360]
			ele.style[webkit ? '-webkit-transform' : 'transform'] = 'rotate(' + dir + 'deg)';
			//ele.style.animationFillMode="forwards" ;
			ele.style['left'] =  _leftCss + 'px';
			ele.style['top'] =  _topCss + 'px';

		} else {
			alert("no keyframe");
		}
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




/*document.getElementById('block').style.animation = 'mymove 1s';
document.getElementById('block').style.animationFillMode="forwards" ;

setTimeout(function() {
document.styleSheets[0].cssRules[11].deleteRule("0%");
document.styleSheets[0].cssRules[11].deleteRule("50%");
document.styleSheets[0].cssRules[11].deleteRule("100%");
document.styleSheets[0].cssRules[11].name = 'mymove2';
document.styleSheets[0].cssRules[11].appendRule('0% { transform: rotate(90deg); left: 41px; }');
document.styleSheets[0].cssRules[11].appendRule('50% { transform: rotate(180deg); left: 41px; }');
document.styleSheets[0].cssRules[11].appendRule('100% { transform: rotate(180deg); left: 82px; }');
document.getElementById('block').style.animation = 'mymove2 1s';
document.getElementById('block').style.animationFillMode="forwards" ;

}, 2000)
document.styleSheets[0].cssRules[11]*/
