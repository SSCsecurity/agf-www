(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"700x326_atlas_", frames: [[340,447,158,147],[0,149,244,147],[416,149,81,147],[344,0,168,147],[170,298,168,147],[0,0,342,147],[0,596,120,147],[122,596,120,147],[0,447,168,147],[340,298,168,147],[170,447,168,147],[246,149,168,147],[0,298,168,147]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1987 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1988 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1989 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1990 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1990_RGB = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1992 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1994 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._1994_RGB = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._1997 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._1997_RGB = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._1998 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._1998_RGB = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._2000 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEB111").s().p("AgEMmIAA5LIAJAAIAAZLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-80.6,1.1,161.3);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56004E").s().p("AgEMmIAA5LIAJAAIAAZLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-80.6,1.1,161.3);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2BB1E").s().p("AgEMmIAA5LIAJAAIAAZLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-80.6,1.1,161.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F8ABE").s().p("AgEMmIAA5LIAJAAIAAZLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-80.6,1.1,161.3);


(lib.G_2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2000();
	this.instance.parent = this;
	this.instance.setTransform(-84,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_2000, new cjs.Rectangle(-84,-73.5,168,147), null);


(lib.G_1998 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1998();
	this.instance.parent = this;
	this.instance.setTransform(-84,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1998, new cjs.Rectangle(-84,-73.5,168,147), null);


(lib.G_1997 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1997();
	this.instance.parent = this;
	this.instance.setTransform(-84,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1997, new cjs.Rectangle(-84,-73.5,168,147), null);


(lib.G_1994 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1994();
	this.instance.parent = this;
	this.instance.setTransform(-60,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1994, new cjs.Rectangle(-60,-73.5,120,147), null);


(lib.G_1992 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1992();
	this.instance.parent = this;
	this.instance.setTransform(-171,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1992, new cjs.Rectangle(-171,-73.5,342,147), null);


(lib.G_1990 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1990();
	this.instance.parent = this;
	this.instance.setTransform(-84,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1990, new cjs.Rectangle(-84,-73.5,168,147), null);


(lib.G_1989 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1989();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1989, new cjs.Rectangle(-40.5,-73.5,81,147), null);


(lib.G_1988 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1988();
	this.instance.parent = this;
	this.instance.setTransform(-122,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1988, new cjs.Rectangle(-122,-73.5,244,147), null);


(lib.G_1987 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1987();
	this.instance.parent = this;
	this.instance.setTransform(-79,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G_1987, new cjs.Rectangle(-79,-73.5,158,147), null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape.setTransform(140,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAQAAAIAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQANAAANgJIAEAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQABgNgIgIQgGgIgLAAQgVAAgHAdg");
	this.shape_1.setTransform(133.2,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAlQgNgOgBgWQABgWANgOQANgOATAAQASAAAKAIIgFAIQgKgHgNAAQgPAAgKAMQgKALAAARQABASAJAMQALALAPAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgMgNg");
	this.shape_2.setTransform(124.5,38.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_3.setTransform(117.6,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAxIgihhIAKAAIAcBVIAchVIAMAAIgjBhg");
	this.shape_4.setTransform(111,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAPAAQAFAAADAFIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_5.setTransform(104.2,38.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgGgIQgIgIgKAAQgWAAgGAdg");
	this.shape_6.setTransform(95.6,38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_7.setTransform(86.5,38.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_8.setTransform(72,38.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgNgPAAgVQAAgUANgPQAMgOASAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgSAAgMgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMANAAQAOAAAKgMQAJgMAAgRQAAgQgJgMQgKgMgOAAQgNAAgKAMg");
	this.shape_9.setTransform(61.3,38.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_10.setTransform(53.7,36.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgJAJgJAAQgIAAgFgEg");
	this.shape_11.setTransform(48.5,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgQAPgPAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_12.setTransform(41,38.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAlQgNgOgBgWQABgWANgOQANgOATAAQASAAAKAIIgFAIQgKgHgNAAQgPAAgKAMQgKALAAARQABASAJAMQALALAPAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgMgNg");
	this.shape_13.setTransform(32.2,38.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgNgPAAgVQAAgUANgPQANgOARAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgRAAgNgOgAgWgcQgKAMAAAQQAAARAKAMQAJAMANAAQAPAAAJgMQAKgNgBgQQABgQgKgMQgJgMgPAAQgNAAgJAMg");
	this.shape_14.setTransform(22.3,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_15.setTransform(14.9,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_16.setTransform(10.5,35.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_17.setTransform(3.7,38.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAXAAIAAAIIgXAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgIAJgKAAQgIAAgFgEg");
	this.shape_18.setTransform(144.1,9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_19.setTransform(136.7,10.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggAqIAEgJQARAJAKAAQAJAAAHgFQAHgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQANAAAOAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIASAJQAPAHAEAEQAFAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_20.setTransform(127.5,10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_21.setTransform(118.8,10.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgQAPgPAAQgLAAgGgGQgGgHAAgKQAAgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_22.setTransform(109.9,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgJAJgKAAQgHAAgFgEg");
	this.shape_23.setTransform(97.3,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggAqIAEgJQARAJAKAAQAJAAAHgFQAHgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQANAAAOAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIASAJQAPAHAEAEQAFAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_24.setTransform(89.9,10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAHAyIAAhaIgXAAIAAgJIAhAAIAABjg");
	this.shape_25.setTransform(81.1,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgXAiAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_26.setTransform(68.8,10.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIAYIAEgNIADgMIgHgUQAEgCAEAAQAJAAAAALQAAAMgMAYg");
	this.shape_27.setTransform(62.1,4.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgFgGQgHgHABgKQAAgVATgFIAigHIAAgUQgBgPgRAAQgJAAgGADQgGADAAAGIABACIgLABIgBgEQABgTAfAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgTALQgGAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_28.setTransform(55.3,10.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdBAQgKgOAAgVQgBgXANgNQAOgOASAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTAAQgKALAAASQABAQAHALQAJAMAMABQASgBANgTIAAgoQAAgVgYAAQgPAAgLAMg");
	this.shape_29.setTransform(44.8,7.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgPAPgQAAQgKAAgHgGQgFgHAAgKQgBgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgFADQgHADAAAGIAAACIgLABIAAgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgUALQgEAHAAAJQAAAPAOAAQAJAAATgQIAAgZg");
	this.shape_30.setTransform(35.3,10.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_31.setTransform(25.2,10.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgKAAgHgGQgFgHAAgKQAAgVATgFIAigHIAAgUQgBgPgRAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgTALQgGAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_32.setTransform(15.2,10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AggA0QgUgUAAggQABgeASgVQAUgUAbAAQAVAAASAMIgHAIQgPgKgSAAQgWABgPARQgPAQAAAaQAAAbAPASQAQASAZAAQAOAAARgIIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_33.setTransform(5.3,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,146.7,43.6), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAACADQADADAAACQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape.setTransform(108.2,70.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgJAJgKAAQgIAAgEgEg");
	this.shape_1.setTransform(102.6,65.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_2.setTransform(94.9,66.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQANgbAOAAQAFABADAEIgFAJQgCgCgDAAQgLAAgOAcIAAA4g");
	this.shape_3.setTransform(87.9,66.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaBNIAAhVIgpAAIAABVIgKAAIAAhVIgQAAIAAgFIAQgEIAAgQQAAgVALgLQAKgMAQAAQARAAANAKIgFAJQgNgKgNABQgagBAAAnIAAANIAzAAIAABdg");
	this.shape_4.setTransform(78.1,63.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfBDQAJgKAHgNQAEgJAJgYIgihTIAMAAIAaBHIAYhHIALAAIgkBjQgFAPgIANIgMASg");
	this.shape_5.setTransform(63.9,69.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAGgMAHgIQAHgGAHgBQAFABADAEIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_6.setTransform(57.2,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA7QgFgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAXAAIAAAIIgXAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgJAJgKAAQgHAAgEgEg");
	this.shape_7.setTransform(49.9,65.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgFAAgKQAAgXAiAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_8.setTransform(42.1,66.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgSAYgVAAQgLAAgGgHg");
	this.shape_9.setTransform(32.2,66.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdBAQgLgNAAgWQAAgXANgNQANgOATAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgKAMAAASQAAAQAIAMQAIAMANAAQARgBAOgTIAAgoQAAgVgYAAQgPgBgLAMg");
	this.shape_10.setTransform(20.7,63.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_11.setTransform(10.1,66.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_12.setTransform(2,64.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_13.setTransform(175.5,38.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvQgDgDgBgJQgPAPgQAAQgKAAgHgGQgFgGgBgLQAAgVAVgFIAggIIAAgTQABgPgTAAQgIAAgFAEQgHADAAAFIAAACIgKABIAAgEQAAgTAfAAQAcAAAAAXIAAA8QAAAJAJAAIgDAHQgJgBgDgCgAgUALQgEAHAAAJQAAAPAOAAQAKAAARgQIAAgZg");
	this.shape_14.setTransform(165.2,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_15.setTransform(157.8,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdBAQgLgNAAgWQAAgXANgNQANgOATAAQAQAAAKAJIAAhBIAJAAIAACYIgJAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgJAMgBASQAAAQAIAMQAIALANABQARgBAOgTIAAgoQAAgVgZAAQgOgBgLAMg");
	this.shape_16.setTransform(149.4,35.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXAvQgFgDAAgJQgQAPgQAAQgJAAgGgGQgHgGAAgLQABgVATgFIAigIIAAgTQgBgPgRAAQgJAAgGAEQgGADAAAFIAAACIgLABIAAgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAJAAIgCAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_17.setTransform(139.6,38.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_18.setTransform(129.1,38.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgKAAgGgGQgHgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QAAAJAJAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_19.setTransform(118.7,38.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggA0QgUgUAAggQAAgeAUgVQATgUAcAAQAVAAARAMIgGAIQgPgKgTAAQgWABgPARQgPAQAAAaQAAAbAPASQAQASAZAAQAOAAARgIIAFAKQgSAIgTAAQgdAAgTgUg");
	this.shape_20.setTransform(108.4,36.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXAvQgFgDAAgJQgPAPgQAAQgLAAgFgGQgHgGAAgLQABgVATgFIAhgIIAAgTQAAgPgSAAQgIAAgGAEQgGADAAAFIABACIgLABIAAgEQAAgTAfAAQAbAAAAAXIAAA8QABAJAIAAIgCAHQgJgBgCgCgAgTALQgFAHgBAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_21.setTransform(92,38.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAYIAEgNIADgLIgHgVQAEgCAEAAQAJAAAAALQAAANgMAXg");
	this.shape_22.setTransform(79.2,43.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdBAQgLgNAAgWQAAgXANgNQANgOATAAQAQAAAJAJIAAhBIALAAIAACYIgLAAIAAgOQgNARgUAAQgQAAgKgOgAgTgBQgKAMAAASQAAAQAIAMQAIALANABQARgBANgTIAAgoQAAgVgXAAQgPgBgLAMg");
	this.shape_23.setTransform(70.9,35.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_24.setTransform(61.1,38.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAbBMIAAhEQAAgJgCgEQgDgGgJAAQgOAAgZAcIAAA7IgKAAIAAiYIAKAAIAABSQAMgMAGgGQAKgIANAAQAWAAAAAYIAABIg");
	this.shape_25.setTransform(50.7,35.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAlQgNgOABgWQgBgWANgOQAOgOATAAQARAAALAIIgFAIQgLgHgMAAQgPAAgKAMQgKALAAARQAAASAKAMQAKALAQAAQAMAAAKgIIAFAJQgOAIgPAAQgTAAgNgNg");
	this.shape_26.setTransform(41,38.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_27.setTransform(30.7,38.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgSAYgUAAQgMAAgGgHg");
	this.shape_28.setTransform(19.5,38.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgKAAgGgGQgHgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QAAAJAJAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_29.setTransform(9.2,38.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_30.setTransform(2,35.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAIAGIASAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_31.setTransform(192.2,10.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgLAJgGQAKgGAPAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_32.setTransform(183.1,10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgHAAgKQAAgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_33.setTransform(173.9,10.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEBNIAAiZIAJAAIAACZg");
	this.shape_34.setTransform(166.6,7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA0QgUgUAAggQABgeASgVQAUgUAbAAQAWAAARAMIgHAIQgPgKgSAAQgWABgPARQgPAQAAAaQAAAbAPASQAQASAZAAQAOAAARgIIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_35.setTransform(158.3,8.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_36.setTransform(141.9,10.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgSAYgVAAQgLAAgGgHg");
	this.shape_37.setTransform(131.9,10.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAlQgMgOAAgWQAAgWAMgOQAOgOAUAAQAQAAAMAIIgHAIQgKgHgMAAQgPAAgKAMQgJALAAARQgBASALAMQAKALAPAAQALAAALgIIAFAJQgOAIgOAAQgUAAgNgNg");
	this.shape_38.setTransform(122.2,10.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfAkQgMgPAAgVQAAgUAMgPQANgOASAAQATAAAMAOQANAPAAAUQAAAVgNAPQgMAOgTAAQgSAAgNgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMANAAQAOAAAJgMQAKgMAAgRQAAgQgKgMQgJgMgOAAQgNAAgKAMg");
	this.shape_39.setTransform(111.9,10.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgjBFIAAiJIBHAAIAAAKIg8AAIAAA2IAyAAIAAAJIgyAAIAABAg");
	this.shape_40.setTransform(102.7,8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgHAAgKQAAgVAUgFIAhgHIAAgUQAAgPgRAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_41.setTransform(86.6,10.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAbAxIAAhEQgBgJgCgEQgCgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_42.setTransform(76.2,10.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_43.setTransform(68.1,8.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAbBNIAAhFQAAgTgOAAQgOAAgZAcIAAA8IgKAAIAAiZIAKAAIAABSQAMgNAGgFQAKgIANAAQAWAAAAAYIAABJg");
	this.shape_44.setTransform(60.1,7.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AggA0QgTgUAAggQAAgeATgVQATgUAbAAQAWAAAQAMIgFAIQgQgKgSAAQgWABgPARQgPAQAAAaQAAAbAQASQAPASAZAAQAOAAARgIIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_45.setTransform(48.7,8.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgjBFIAAiJIBHAAIAAAKIg8AAIAAA2IAxAAIAAAJIgxAAIAABAg");
	this.shape_46.setTransform(32.4,8.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkAzQgTgVAAgeQAAgeATgVQAVgUAdAAQAYAAASAJIgEAKQgSgIgSAAQgaAAgQAQQgRARAAAaQAAAbARARQARASAaAAQAIAAAUgFIAAguIALAAIAAA2QgUAIgWAAQgeAAgUgVg");
	this.shape_47.setTransform(18.6,8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAsBHIgOgqIg7AAIgOAqIgNAAIAyiNIANAAIAyCNgAgaASIA0AAIgahNg");
	this.shape_48.setTransform(5.7,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,195.5,76.5), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBDQAJgKAHgNQAEgJAJgYIgihTIAMAAIAaBHIAYhHIALAAIgkBjQgFAPgIANIgMASg");
	this.shape.setTransform(73.2,125.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_1.setTransform(63.5,122.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgHAAgLQAAgUAUgFIAhgIIAAgTQAAgOgRAAQgJAAgGADQgGADAAAFIAAABIgKABIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgRIAAgYg");
	this.shape_2.setTransform(53.2,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBKIAAiQIAJAAIAAAQQAJgMAIgDQAHgEAKAAQAQAAAKAMQALANAAAWQgBAWgNAPQgNAPgSAAQgRAAgJgJIAAA5gAgegsIAAApQAAAJAJAFQAGAFAKABQAPAAAKgOQAKgLAAgSQAAgQgIgKQgIgLgNAAQgPAAgQATg");
	this.shape_3.setTransform(43.1,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA6AxIAAhEQAAgJgCgEQgDgHgJAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_4.setTransform(28.4,122.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAkQgMgPAAgVQAAgUANgPQANgOASAAQASAAAMAOQANAPAAAUQAAAVgNAPQgMAOgSAAQgTAAgNgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMAOAAQANAAAJgMQAKgNAAgQQAAgQgKgMQgJgMgNAAQgOAAgKAMg");
	this.shape_5.setTransform(14.2,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAlQgMgOAAgWQAAgWANgOQANgOATAAQARAAALAIIgFAIQgLgHgMAAQgPAAgKAMQgJALAAARQAAASAKAMQAKALAPAAQAMAAAKgIIAFAJQgOAIgPAAQgTAAgNgNg");
	this.shape_6.setTransform(4.5,122.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdBAQgKgNgBgWQAAgWANgOQANgPATAAQAQAAAKAKIAAhBIAJAAIAACYIgJAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgJAMgBASQAAAQAIAMQAIAMANgBQARAAAOgTIAAgnQAAgXgZAAQgOAAgLAMg");
	this.shape_7.setTransform(117,91.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQALgNAHgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_8.setTransform(106.4,94.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgTAYgTAAQgLAAgHgHg");
	this.shape_9.setTransform(95.2,94.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTBNIAAhVIgQAAIAAgFIAQgEIAAgQQAAgVALgLQAJgMARAAQAJABAJADIgFAIIgOgDQgaABAAAlIAAAOIAWAAIAAAIIgWAAIAABVg");
	this.shape_10.setTransform(88.3,91.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQALgNAHgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_11.setTransform(73.3,94.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgLAAgGgGQgGgGAAgMQAAgUAVgFIAhgIIAAgTQAAgPgSAAQgJABgFADQgHADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_12.setTransform(62.9,94.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgHg7QAAgDADgDQACgCACAAQADAAADACQACACAAAEQgBAIgHAAQgHAAAAgIg");
	this.shape_13.setTransform(55.5,92.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdBAQgLgNAAgWQAAgWAOgOQANgPASAAQAQAAAKAKIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgSgBQgLAMAAASQAAAQAIAMQAIAMANgBQARAAAOgTIAAgnQAAgXgYAAQgPAAgKAMg");
	this.shape_14.setTransform(47.1,91.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgMQAAgUAUgFIAhgIIAAgTQAAgPgRAAQgJABgGADQgGADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_15.setTransform(37.3,94.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_16.setTransform(26.8,94.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgMQAAgUAUgFIAhgIIAAgTQAAgPgRAAQgJABgGADQgGADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_17.setTransform(16.4,94.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggA0QgUgUAAggQABgfASgUQAUgUAbAAQAVAAASAMIgGAIQgQgJgSgBQgWAAgPARQgPASAAAZQAAAcAPARQAQARAZAAQAOAAARgHIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_18.setTransform(6.2,92.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgKAAgHgGQgFgGgBgLQAAgVAVgFIAggIIAAgTQABgPgTAAQgIAAgFAEQgHADAAAFIABACIgLABIAAgDQAAgUAfAAQAbAAAAAXIAAA8QABAJAIAAIgCAHQgJgBgCgCgAgUALQgEAHAAAJQAAAPAOAAQAKAAARgQIAAgZg");
	this.shape_19.setTransform(129.1,66.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA7AxIAAhEQAAgUgPAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_20.setTransform(110.2,66.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgNgPAAgVQAAgUANgPQANgOARAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgRAAgNgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMANAAQAPAAAJgMQAKgNAAgQQAAgQgKgMQgJgMgPAAQgNAAgKAMg");
	this.shape_21.setTransform(95.9,66.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAGgMAHgIQAHgGAHgBQAFABADAEIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_22.setTransform(87.9,66.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTBNIAAhVIgQAAIAAgFIAQgEIAAgQQAAgVALgLQAJgMASAAQAJABAIADIgEAIIgPgCQgagBAAAmIAAAOIAWAAIAAAIIgWAAIAABVg");
	this.shape_23.setTransform(82.3,63.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AA6AxIAAhEQAAgJgCgEQgDgHgJAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_24.setTransform(64.1,66.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAXAvQgFgDAAgJQgPAPgQAAQgLAAgFgGQgHgGAAgLQABgVATgFIAhgIIAAgTQAAgPgSAAQgIAAgGAEQgGADAAAFIABACIgLABIAAgDQAAgUAfAAQAbAAAAAXIAAA8QABAJAIAAIgCAHQgJgBgCgCgAgTALQgFAHgBAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_25.setTransform(50.6,66.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAPAAQAFABADAEIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_26.setTransform(43.1,66.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggBFQgKgGAAgJQAAgKARgTQgPgCAAgJQAAgJATgPQgJgDgFgIQgFgJAAgJQAAgQAKgKQAKgJAPAAQAGAAANADIAdgBIAAAJIgWAAQAHAMAAALQAAAOgKAJQgKALgMAAIgKgBQgPANAAAFQAAAFALAAIAjAAQAMAAAFAFQAGAFAAAKQAAASgPAKQgOAMgTAAQgOAAgKgHgAgfAzQAAAHAHAFQAHAEAKAAQAOAAALgIQALgJAAgLQAAgHgDgEQgCgDgHAAIgiAAQgOAUAAAGgAgXg6QgGAGAAAMQAAAKAGAIQAHAIAKAAQAKAAAHgHQAGgIAAgLQAAgLgGgIQgHgHgKAAQgKgBgHAJg");
	this.shape_27.setTransform(34,69.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAkQgMgPAAgVQAAgUAMgPQAOgOARAAQASAAANAOQANAPAAAUQAAAVgNAPQgNAOgSAAQgSAAgNgOgAgXgcQgJAMAAAQQAAAQAJANQAKAMANAAQAOAAAJgMQAKgMAAgRQAAgQgKgMQgJgMgOAAQgNAAgKAMg");
	this.shape_28.setTransform(23.1,66.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAOAAQAGABADAEIgFAJQgDgCgDAAQgKAAgOAcIAAA4g");
	this.shape_29.setTransform(15.1,66.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoBKIAAiQIALAAIAAAPQAIgKAIgEQAHgEAKAAQAQAAAKANQALANAAAVQAAAWgNAPQgNAPgTAAQgRAAgIgKIAAA6gAgdgsIAAApQAAAIAIAHQAHAEAIAAQAQAAAKgNQAKgLAAgSQAAgQgIgKQgIgMgNAAQgQABgOATg");
	this.shape_30.setTransform(5.7,69);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoBKIAAiQIALAAIAAAPQAIgKAIgEQAHgEAKAAQAQAAAKANQALANAAAUQAAAXgNAPQgNAPgTAAQgRAAgIgKIAAA6gAgdgsIAAApQAAAIAIAHQAHAEAIAAQAQAAAKgMQAKgLAAgUQAAgPgIgKQgIgMgNAAQgPABgPATg");
	this.shape_31.setTransform(121.5,41);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_32.setTransform(110.8,38.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAOAAQAFAAAEAFIgFAJQgCgCgEAAQgKAAgOAcIAAA4g");
	this.shape_33.setTransform(103.3,38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAYAxIgXhHIgaBHIgJAAIgehhIALAAIAYBTIAZhFIgEgOIAKAAIAbBVIAahVIAKAAIggBhg");
	this.shape_34.setTransform(92.3,38.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdBAQgKgNAAgWQgBgXANgNQANgOATAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgKAMAAASQABAQAHAMQAJALAMABQARgBAOgTIAAgoQAAgVgZAAQgOgBgLAMg");
	this.shape_35.setTransform(74.2,35.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAQAAAIAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQAMAAAOgJIADAIQgQAKgQAAQgTAAgLgNgAgZgMIA0AAQABgNgIgIQgGgIgLAAQgVAAgHAdg");
	this.shape_36.setTransform(64.3,38.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgFAAgKQAAgXAiAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_37.setTransform(54.8,38.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgKAAgHgGQgFgGAAgLQgBgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgLABIAAgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgUALQgFAIAAAIQAAAPAPAAQAJAAATgQIAAgZg");
	this.shape_38.setTransform(45.7,38.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgmBJIAAiWIAKAAIAABAQANgIAPAAQARgBALAMQAMAMAAAWQAAAYgPAPQgPAPgWAAQgPAAgLgFgAgcgCIAABEQAJACAIABQARAAAMgNQAKgMAAgTQAAgSgIgJQgIgKgNAAQgNAAgOAKg");
	this.shape_39.setTransform(35.7,35.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_40.setTransform(27.3,38.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWALgNQAMgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAANgJIAEAIQgRAKgPAAQgTAAgLgNgAgagMIA1AAQAAgNgGgIQgIgIgKAAQgWAAgHAdg");
	this.shape_41.setTransform(19.7,38.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWALgNQAMgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAAOgJIADAIQgQAKgQAAQgTAAgLgNgAgagMIA1AAQAAgNgHgIQgGgIgLAAQgWAAgHAdg");
	this.shape_42.setTransform(10.2,38.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTBNIAAhWIgQAAIAAgEIAQgEIAAgQQAAgUALgMQAJgLARAAQAJAAAJADIgFAIIgOgCQgagBAAAmIAAAOIAWAAIAAAHIgWAAIAABWg");
	this.shape_43.setTransform(3.9,35.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgJAJgKAAQgIAAgEgEg");
	this.shape_44.setTransform(56.5,9.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAIAGIASAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_45.setTransform(48.8,10.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAHAyIAAhaIgXAAIAAgJIAhAAIAABjg");
	this.shape_46.setTransform(39.6,10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQAMAAAOgJIADAIQgQAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_47.setTransform(26.5,10.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAbBNIAAhFQAAgTgOAAQgOAAgZAcIAAA8IgKAAIAAiZIAKAAIAABSQAMgNAGgFQAKgIAMAAQAXAAAAAYIAABJg");
	this.shape_48.setTransform(16.2,7.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFBFIAAh/IguAAIAAgKIBnAAIAAAKIguAAIAAB/g");
	this.shape_49.setTransform(5.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,132.7,132.5), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAJgJAAQgDAAgDgCg");
	this.shape.setTransform(53,98.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBAQgLgNABgWQAAgWAMgOQAOgPASAAQAQAAAJAKIAAhBIALAAIAACYIgLAAIAAgOQgNARgUAAQgQAAgKgOgAgSgBQgLAMABASQgBAQAJAMQAIAMAMgBQARAAANgTIAAgnQABgXgYAAQgPAAgKAMg");
	this.shape_1.setTransform(44.6,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAMgaAPAAQAFAAADAEIgFAJQgCgCgEAAQgJgBgPAdIAAA4g");
	this.shape_2.setTransform(37,94.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAvQgFgDAAgJQgQAPgPAAQgLAAgFgGQgHgGAAgMQABgUATgFIAhgIIAAgTQAAgPgRAAQgJABgGADQgGADAAAFIABACIgLAAIgBgCQABgUAfAAQAbAAAAAWIAAA9QAAAIAJABIgCAHQgJgBgCgCgAgTALQgGAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_3.setTransform(28,94.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAxIgXhHIgaBHIgJAAIgehhIALAAIAYBTIAahFIgFgOIAKAAIAbBVIAahVIAKAAIggBhg");
	this.shape_4.setTransform(16.2,94.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgMQAAgUAVgFIAhgIIAAgTQAAgPgSAAQgJABgGADQgGADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_5.setTransform(4.5,94.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgJAJgKAAQgIAAgEgEg");
	this.shape_6.setTransform(103.6,65.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_7.setTransform(95,66.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_8.setTransform(84.7,66.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA6AxIAAhEQAAgJgCgEQgDgHgJAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_9.setTransform(71.2,66.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWALgNQAMgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAAOgJIADAIQgQAKgRAAQgSAAgLgNgAgagMIA1AAQAAgNgHgIQgHgIgKAAQgWAAgHAdg");
	this.shape_10.setTransform(57.7,66.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAxIghhhIALAAIAbBVIAdhVIAKAAIgiBhg");
	this.shape_11.setTransform(48.3,66.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAFAIQgSAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_12.setTransform(39,66.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_13.setTransform(31.7,64.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbBMIAAhEQAAgTgOAAQgOAAgZAcIAAA7IgKAAIAAiYIAKAAIAABSQALgMAHgGQAKgIAMAAQAXAAAAAYIAABIg");
	this.shape_14.setTransform(23.8,63.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAlQgMgOAAgWQAAgWANgOQANgOATAAQARAAALAIIgFAIQgLgHgMAAQgPAAgKAMQgKALAAARQAAASAKAMQAKALAQAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgNgNg");
	this.shape_15.setTransform(14.1,66.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgKABIgBgDQAAgUAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_16.setTransform(4.5,66.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_17.setTransform(145.6,38.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA7AxIAAhEQAAgUgPAAQgOAAgZAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQANAAAEAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_18.setTransform(132,38.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_19.setTransform(120.8,36.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFA7QgFgFAAgLIAAhFIgPAAIAAgFIAPgEIAAgbIAKAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgKAJgJAAQgHAAgFgEg");
	this.shape_20.setTransform(115.2,37.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQAMgNARAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQANAAAMgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgVAAgHAdg");
	this.shape_21.setTransform(107.4,38.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTBNIAAhWIgQAAIAAgEIAQgEIAAgQQAAgUALgMQAJgLARAAQAKAAAIADIgFAIQgKgCgEAAQgagBAAAmIAAAOIAWAAIAAAHIgWAAIAABWg");
	this.shape_22.setTransform(101.2,35.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_23.setTransform(94.5,36.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_24.setTransform(89.7,35.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvQgDgDgBgJQgQAPgPAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_25.setTransform(77.3,38.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQAOAAANAHIgFAJQgLgIgMAAQgWAAAAAPQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_26.setTransform(62.5,38.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQAMgNARAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQANAAAMgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgVAAgHAdg");
	this.shape_27.setTransform(53.3,38.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAxIgihhIAMAAIAbBVIAchVIALAAIgjBhg");
	this.shape_28.setTransform(44,38.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgHg7QABgDACgDQACgCACAAQADAAADACQACACAAAEQgBAIgHAAQgHAAAAgIg");
	this.shape_29.setTransform(37,36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQgBATAJAKQAJAMAPAAQANAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_30.setTransform(29.8,38.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAlQgOgOAAgWQAAgWAOgOQANgOAUAAQARAAALAIIgGAIQgKgHgNAAQgPAAgKAMQgKALABARQAAASAKAMQAJALAQAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgMgNg");
	this.shape_31.setTransform(20.7,38.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAAOgJIADAIQgQAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_32.setTransform(11.2,38.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAPAAQAFAAADAFIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_33.setTransform(3.8,38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AggBFQgKgGAAgJQAAgKARgTQgPgCAAgJQAAgJATgOQgJgEgFgIQgFgJAAgJQAAgQAKgKQAKgJAPAAQAGAAANADIAdgBIAAAJIgWAAQAHAMAAAKQAAAOgKAKQgKALgMAAIgKgBQgPAMAAAGQAAAFALAAIAjAAQAMAAAFAFQAGAEAAALQAAARgPALQgOALgTAAQgOABgKgHgAgfAzQAAAHAHAFQAHAEALAAQAOAAAKgIQALgJAAgMQAAgHgCgDQgDgCgHAAIgiAAQgOATAAAGgAgXg7QgGAIAAAKQAAALAGAIQAHAIAKAAQAKAAAHgHQAGgIAAgMQAAgKgGgIQgHgIgKABQgKAAgHAHg");
	this.shape_34.setTransform(134.7,13.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbAxIAAhEQAAgJgCgEQgEgHgJAAQgOAAgYAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_35.setTransform(123.7,10.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEBEIAAheIAJAAIAABegAgGg7QgBgIAHAAQADAAACACQACADAAADQAAADgCADQgCACgDAAQgHAAABgIg");
	this.shape_36.setTransform(115.7,8.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAxIAAhfIAKAAIAAAZQAMgaAOgBQAFAAAEAFIgFAJQgCgCgEgBQgKAAgOAdIAAA5g");
	this.shape_37.setTransform(110.7,10.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdBAQgKgOAAgVQAAgXAMgNQAOgOASAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTAAQgKALAAASQAAAQAIALQAJAMAMABQASgBANgTIAAgoQAAgVgYAAQgPAAgLAMg");
	this.shape_38.setTransform(100.5,7.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEBNIAAiZIAJAAIAACZg");
	this.shape_39.setTransform(93,7.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAkQgNgPAAgVQAAgUANgPQAMgOASAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgSAAgMgOgAgWgcQgKAMAAAQQAAARAKAMQAJAMANAAQAOAAAKgMQAJgMAAgRQAAgQgJgMQgKgMgOAAQgNAAgJAMg");
	this.shape_40.setTransform(85.2,10.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgjAzQgUgVAAgeQAAgeAUgVQAUgUAdAAQAXAAATAJIgFAKQgRgIgSAAQgZAAgRAQQgRARAAAaQAAAbARARQARASAaAAQAHAAAVgFIAAguIALAAIAAA2QgTAIgYAAQgcAAgUgVg");
	this.shape_41.setTransform(72,8.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAbAxIAAhEQAAgUgPAAQgOAAgYAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_42.setTransform(54.4,10.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAQAAAIAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQANAAANgJIAEAIQgRAKgRAAQgSAAgLgNgAgagMIA1AAQAAgNgHgIQgGgIgLAAQgWAAgHAdg");
	this.shape_43.setTransform(44.1,10.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWAxIAAhfIAKAAIAAAZQAGgMAHgIQAHgHAHAAQAFAAADAFIgFAJQgDgCgDgBQgKAAgOAdIAAA5g");
	this.shape_44.setTransform(36.7,10.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgWAxIAAhfIAKAAIAAAZQAMgaAOgBQAFAAAEAFIgFAJQgCgCgEgBQgKAAgOAdIAAA5g");
	this.shape_45.setTransform(29.9,10.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgKAAgHgGQgFgHAAgKQgBgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgFADQgHADAAAGIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgUALQgEAHAAAJQAAAPAOAAQAKAAASgQIAAgZg");
	this.shape_46.setTransform(20.9,10.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAcBHIgbhGIgZBGIgHAAIg1iNIANAAIAtB6IAXg/IgXg7IALAAIAQAtIAQgtIAKAAIgUA5IAYA/IAqh4IAMAAIgyCNg");
	this.shape_47.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,149.4,99.6), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape.setTransform(51.2,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,55.8,22.6), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BuIAAgbIAsg0QAXgdAMgWQAHgNAAgNQAAgMgGgHQgGgHgLAAQgIAAgMAFQgQAHgSAPIgTggQAdgVATgFQARgGAQAAQAbAAAQAQQAQAPAAAbQAAAmghAlIgoAyIBQAAIAAAkg");
	this.shape.setTransform(53.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,61.2,22.6), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBtQgLgCgRgIIAOggQAWANAOAAQAPAAAKgLQALgKAAgQQAAgIgDgIQgEgIgGgDQgFgDgMAAIgZAAIAAgcQAUgDALgHQAOgLAAgRQAAgWgUAAQgHAAgHACIgaAOIgQgbQAPgLANgFQATgJARAAQAaAAAOANQAPAMAAAXQAAAQgKAOQgEAIgFAEIgOAIQAUACAMANQALAPAAAXQAAAggVAUQgVAUgiAAQgPAAgKgDg");
	this.shape.setTransform(53.5,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQAOgCAKgMQAHgIADgJQADgIADgTQgZAKgRAAQgcAAgOgQQgQgPAAgeQAAgkATgUQATgWAfAAQAlAAATAbQAUAaAAAyQAAA5gfAhQgMANgPAHQgPAHgOACQgRADggAAgAgWhCQgIAKAAARQgBAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgBghgIgPQgIgPgOAAQgMAAgJAMg");
	this.shape_2.setTransform(21.1,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,60,22.6), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJBtIAAg0IhWAAIAAgWIBliPIAXAAIAACGIAfAAIAAAfIgfAAIAAA0gAghAaIAqAAIAAg/g");
	this.shape.setTransform(53.7,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIACAAIAggBQAIAAAKgEQANgCAKgMQAHgIADgJQADgIADgTQgZAKgRAAQgcAAgOgQQgQgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA5gfAhQgLANgQAHQgPAHgOACQgRADggAAgAgWhCQgIAKAAARQgBAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgBghgIgPQgIgPgOAAQgMAAgJAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA5geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,61.5,22.6), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BTQgVghAAgyQAAgxAVghQAWggAgAAQAhAAAVAgQAWAhAAAxQAAAygWAhQgVAgghAAQggAAgWgggAgWg3QgKAXAAAgQAAAhAKAXQAJAXANAAQANAAALgXQAJgXAAghQAAgggJgXQgLgXgNAAQgMAAgKAXg");
	this.shape.setTransform(54.3,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA4geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_1.setTransform(37.6,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA3geAiQgOAOgOAGQgPAHgOACQgQADghAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_2.setTransform(21,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,61.9,23.1), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BlQgUgQgBgXQABgOAIgPQAJgOAPgMIARgLIgTgPQgWgQAAgZQAAgXATgQQAUgQAbAAQAaAAAQAOQARAOAAAWQAAAXgTARIgTARIAVANQAeAXAAAaQgBAbgVARQgWASgfAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAKgJQAKgIgBgLQABgQgVgRIgMgKgAgQhOQgHAHAAALQAAANAKAKIAMAMIAMgMQAMgLAAgQQAAgJgHgHQgFgFgKAAQgKgBgHAIg");
	this.shape.setTransform(54,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BlQgUgQgBgXQABgOAIgPQAJgOAPgMIARgLIgTgPQgWgQAAgZQAAgXAUgQQATgQAbAAQAaAAARAOQAQAOAAAWQAAAXgTARIgTARIAVANQAdAXABAaQgBAbgVARQgWASgfAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAJgJQALgIgBgLQABgQgVgRIgMgKgAgQhOQgIAHAAALQAAANALAKIAMAMIAMgMQALgLAAgQQABgJgHgHQgFgFgKAAQgLgBgGAIg");
	this.shape_1.setTransform(37.5,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA3geAiQgOAOgOAGQgPAHgOACQgQADghAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_2.setTransform(21,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,61.4,23.2), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA4geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape.setTransform(54.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BlQgUgQAAgXQAAgOAJgPQAJgOAOgMIARgLIgTgPQgWgQAAgZQAAgXAUgQQATgQAbAAQAaAAARAOQAQAOAAAWQAAAXgTARIgSARIAUANQAdAWAAAbQAAAbgVARQgVASggAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAKgJQAKgIAAgLQAAgQgVgRIgLgKgAgQhOQgIAHAAALQAAANALAKIANAMIALgMQALgLAAgQQAAgJgGgHQgFgFgKAAQgKgBgHAIg");
	this.shape_1.setTransform(37.4,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAATAbQAUAaAAAzQAAA3geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhDQgJAMAAAQQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgNABgIAKg");
	this.shape_2.setTransform(21,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,61.5,23.2), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BTQgWghAAgyQAAgxAWghQAVggAgAAQAhAAAVAgQAWAhAAAxQAAAygWAhQgVAgghAAQggAAgVgggAgWg3QgKAXAAAgQAAAhAKAXQAKAXAMAAQAOAAAKgXQAJgXAAghQAAgggJgXQgKgXgOAAQgMAAgKAXg");
	this.shape.setTransform(57.6,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BTQgVghAAgyQAAgxAVghQAWggAgAAQAhAAAVAgQAWAhAAAxQAAAygWAhQgVAgghAAQggAAgWgggAgXg3QgJAXAAAgQAAAhAJAXQAKAXANAAQANAAALgXQAJgXAAghQAAgggJgXQgKgXgOAAQgNAAgKAXg");
	this.shape_1.setTransform(41,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BTQgWghAAgyQAAgxAWghQAVggAgAAQAhAAAWAgQAVAhAAAxQAAAygVAhQgWAgghAAQggAAgVgggAgWg3QgKAXAAAgQAAAhAKAXQAJAXANAAQAOAAAJgXQAKgXAAghQAAgggKgXQgJgXgOAAQgNAAgJAXg");
	this.shape_2.setTransform(24.4,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BuIAAgbIArg0QAXgcAMgXQAIgNgBgNQAAgMgFgHQgHgHgKAAQgJAAgMAFQgQAHgSAPIgTggQARgMAJgFQALgGAMgDQAQgGAQAAQAcAAAPAQQAQAPAAAbQAAAmggAlIgpAyIBQAAIAAAkg");
	this.shape_3.setTransform(7.4,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,65.2,23.1), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BtIAUgkIAUgqIAphoIhVAAIAAgjICDAAIAAAdIg0B+QgMAdgRAhg");
	this.shape.setTransform(53.5,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BlQgUgQgBgXQABgOAIgPQAJgOAPgMIARgLIgTgPQgWgQAAgZQAAgXAUgQQATgQAbAAQAaAAARAOQAQAOAAAWQAAAXgTARIgTARIAVANQAdAXABAaQgBAbgVARQgWASgfAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAJgJQALgIgBgLQABgQgVgRIgMgKgAgQhOQgHAHAAALQAAANAKAKIAMAMIAMgMQALgLAAgQQABgJgHgHQgFgFgKAAQgKgBgHAIg");
	this.shape_1.setTransform(37.5,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA4geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_2.setTransform(21,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,60.1,23.2), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBtQgOgDgTgHIANghQAYAKANABQAPgBALgKQALgMAAgQQAAgXgRgJQgPgIgpAAIgBAAIAAhsIBtAAIAAAhIhGAAIAAArQAUABANAFQAsAPAAAuQAAAhgVAXQgVAWgfABQgLAAgMgDg");
	this.shape.setTransform(53.8,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA5geAhQgMANgQAHQgPAHgOACQgQADghAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,60.3,22.7), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BXQgUgbAAgyQAAg4AeghQANgOAPgHQAOgHAOgCQAPgDAaAAIAJABIAAAgIgQAAQgVAAgOAFQgPAEgJALQgGAIgEAIQgDAKgDARQAZgKARAAQAcAAAPAQQAPAQAAAdQAAAjgTAWQgTAVgfAAQgkAAgUgagAgHALQgOADgIADQACAgAHAPQAIAPAOAAQANAAAIgLQAJgLAAgQQAAgPgHgIQgIgJgLAAg");
	this.shape.setTransform(54.3,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,61.7,22.7), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BtIAohOIAohoIhUAAIAAgjICDAAIAAAdIg0B+QgMAdgRAhg");
	this.shape.setTransform(53.5,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA5geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA4geAiQgOAOgOAGQgPAHgOACQgQADghAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,60.1,22.6), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BlQgUgQgBgXQABgOAIgPQAJgOAPgMIARgLIgTgPQgWgQAAgZQAAgXATgQQAUgQAbAAQAaAAAQAOQARAOAAAWQAAAXgTARIgTARIAVANQAeAXAAAaQgBAbgVARQgWASgfAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAKgJQAKgIgBgLQABgQgVgRIgMgKgAgQhOQgIAHAAALQAAANALAKIAMAMIAMgMQAMgLAAgQQAAgJgHgHQgFgFgKAAQgLgBgGAIg");
	this.shape.setTransform(54,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA3geAiQgOAOgOAGQgPAHgOACQgQADghAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_1.setTransform(37.6,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAATAbQAUAaAAAzQAAA3geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhDQgJAMAAAQQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgNABgIAKg");
	this.shape_2.setTransform(21,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,61.4,23.2), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA4geAiQgMANgQAHQgPAHgOACQgQADghAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape.setTransform(54.1,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_1.setTransform(37.6,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA4geAiQgOAOgOAGQgOAHgPACQgQADghAAgAgWhCQgJAKAAARQAAAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgNAAgIAMg");
	this.shape_2.setTransform(21,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBtIAAi2IgxAAIAAgjIBbAAIAADZg");
	this.shape_3.setTransform(4.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,61.5,22.6), null);


(lib.M_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-170.3,62.7,1,0.032);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,y:-15.3},9).wait(1));

	// Layer 1
	this.instance_1 = new lib._1998_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,-94);

	this.instance_2 = new lib.Group_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-135.2,78.6,1,1,0,0,0,30.7,11.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEB111").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape.setTransform(-86.7,78);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAJgJAAQgDAAgDgCg");
	this.shape_1.setTransform(-104.2,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBAQgLgNABgWQAAgWAMgOQAOgPASAAQAQAAAJAKIAAhBIALAAIAACYIgLAAIAAgOQgNARgUAAQgQAAgKgOgAgSgBQgLAMABASQgBAQAJAMQAIAMAMgBQARAAANgTIAAgnQABgXgYAAQgPAAgKAMg");
	this.shape_2.setTransform(-112.6,-3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAMgaAPAAQAFAAADAEIgFAJQgCgCgEAAQgJgBgPAdIAAA4g");
	this.shape_3.setTransform(-120.3,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAvQgFgDAAgJQgQAPgPAAQgLAAgFgGQgHgGAAgMQABgUATgFIAhgIIAAgTQAAgPgRAAQgJABgGADQgGADAAAFIABACIgLAAIgBgCQABgUAfAAQAbAAAAAWIAAA9QAAAIAJABIgCAHQgJgBgCgCgAgTALQgGAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_4.setTransform(-129.3,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAxIgXhHIgaBHIgJAAIgehhIALAAIAYBTIAahFIgFgOIAKAAIAbBVIAahVIAKAAIggBhg");
	this.shape_5.setTransform(-141,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgMQAAgUAVgFIAhgIIAAgTQAAgPgSAAQgJABgGADQgGADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_6.setTransform(-152.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgJAJgKAAQgIAAgEgEg");
	this.shape_7.setTransform(-53.6,-30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_8.setTransform(-62.2,-29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_9.setTransform(-72.5,-29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA6AxIAAhEQAAgJgCgEQgDgHgJAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_10.setTransform(-86.1,-29.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWALgNQAMgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAAOgJIADAIQgQAKgRAAQgSAAgLgNgAgagMIA1AAQAAgNgHgIQgHgIgKAAQgWAAgHAdg");
	this.shape_11.setTransform(-99.6,-29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAxIghhhIALAAIAbBVIAdhVIAKAAIgiBhg");
	this.shape_12.setTransform(-109,-28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAFAIQgSAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_13.setTransform(-118.2,-29.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_14.setTransform(-125.5,-31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbBMIAAhEQAAgTgOAAQgOAAgZAcIAAA7IgKAAIAAiYIAKAAIAABSQALgMAHgGQAKgIAMAAQAXAAAAAYIAABIg");
	this.shape_15.setTransform(-133.5,-32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAlQgMgOAAgWQAAgWANgOQANgOATAAQARAAALAIIgFAIQgLgHgMAAQgPAAgKAMQgKALAAARQAAASAKAMQAKALAQAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgNgNg");
	this.shape_16.setTransform(-143.2,-29.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgKABIgBgDQAAgUAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_17.setTransform(-152.7,-29.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_18.setTransform(-11.7,-57.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA7AxIAAhEQAAgUgPAAQgOAAgZAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQANAAAEAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_19.setTransform(-25.2,-57.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_20.setTransform(-36.5,-59.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFA7QgFgFAAgLIAAhFIgPAAIAAgFIAPgEIAAgbIAKAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgKAJgJAAQgHAAgFgEg");
	this.shape_21.setTransform(-42,-58.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQAMgNARAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQANAAAMgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgVAAgHAdg");
	this.shape_22.setTransform(-49.8,-57.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBNIAAhWIgQAAIAAgEIAQgEIAAgQQAAgUALgMQAJgLARAAQAKAAAIADIgFAIQgKgCgEAAQgagBAAAmIAAAOIAWAAIAAAHIgWAAIAABWg");
	this.shape_23.setTransform(-56.1,-60.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_24.setTransform(-62.7,-59.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_25.setTransform(-67.5,-60);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWAvQgDgDgBgJQgQAPgPAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_26.setTransform(-79.9,-57.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQAOAAANAHIgFAJQgLgIgMAAQgWAAAAAPQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_27.setTransform(-94.8,-57.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQAMgNARAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQANAAAMgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgVAAgHAdg");
	this.shape_28.setTransform(-103.9,-57.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAxIgihhIAMAAIAbBVIAchVIALAAIgjBhg");
	this.shape_29.setTransform(-113.3,-56.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgHg7QABgDACgDQACgCACAAQADAAADACQACACAAAEQgBAIgHAAQgHAAAAgIg");
	this.shape_30.setTransform(-120.3,-59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQgBATAJAKQAJAMAPAAQANAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_31.setTransform(-127.4,-57.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXAlQgOgOAAgWQAAgWAOgOQANgOAUAAQARAAALAIIgGAIQgKgHgNAAQgPAAgKAMQgKALABARQAAASAKAMQAJALAQAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgMgNg");
	this.shape_32.setTransform(-136.5,-57.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAAOgJIADAIQgQAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_33.setTransform(-146,-57.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAPAAQAFAAADAFIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_34.setTransform(-153.4,-57.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggBFQgKgGAAgJQAAgKARgTQgPgCAAgJQAAgJATgOQgJgEgFgIQgFgJAAgJQAAgQAKgKQAKgJAPAAQAGAAANADIAdgBIAAAJIgWAAQAHAMAAAKQAAAOgKAKQgKALgMAAIgKgBQgPAMAAAGQAAAFALAAIAjAAQAMAAAFAFQAGAEAAALQAAARgPALQgOALgTAAQgOABgKgHgAgfAzQAAAHAHAFQAHAEALAAQAOAAAKgIQALgJAAgMQAAgHgCgDQgDgCgHAAIgiAAQgOATAAAGgAgXg7QgGAIAAAKQAAALAGAIQAHAIAKAAQAKAAAHgHQAGgIAAgMQAAgKgGgIQgHgIgKABQgKAAgHAHg");
	this.shape_35.setTransform(-22.5,-82.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgEgHgJAAQgOAAgYAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_36.setTransform(-33.5,-85.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QgBgIAHAAQADAAACACQACADAAADQAAADgCADQgCACgDAAQgHAAABgIg");
	this.shape_37.setTransform(-41.6,-87.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAxIAAhfIAKAAIAAAZQAMgaAOgBQAFAAAEAFIgFAJQgCgCgEgBQgKAAgOAdIAAA5g");
	this.shape_38.setTransform(-46.6,-85.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdBAQgKgOAAgVQAAgXAMgNQAOgOASAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTAAQgKALAAASQAAAQAIALQAJAMAMABQASgBANgTIAAgoQAAgVgYAAQgPAAgLAMg");
	this.shape_39.setTransform(-56.7,-87.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEBNIAAiZIAJAAIAACZg");
	this.shape_40.setTransform(-64.2,-88);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgeAkQgNgPAAgVQAAgUANgPQAMgOASAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgSAAgMgOgAgWgcQgKAMAAAQQAAARAKAMQAJAMANAAQAOAAAKgMQAJgMAAgRQAAgQgJgMQgKgMgOAAQgNAAgJAMg");
	this.shape_41.setTransform(-72,-85.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgjAzQgUgVAAgeQAAgeAUgVQAUgUAdAAQAXAAATAJIgFAKQgRgIgSAAQgZAAgRAQQgRARAAAaQAAAbARARQARASAaAAQAHAAAVgFIAAguIALAAIAAA2QgTAIgYAAQgcAAgUgVg");
	this.shape_42.setTransform(-85.2,-87.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgUgPAAQgOAAgYAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_43.setTransform(-102.8,-85.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAQAAAIAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQANAAANgJIAEAIQgRAKgRAAQgSAAgLgNgAgagMIA1AAQAAgNgHgIQgGgIgLAAQgWAAgHAdg");
	this.shape_44.setTransform(-113.2,-85.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWAxIAAhfIAKAAIAAAZQAGgMAHgIQAHgHAHAAQAFAAADAFIgFAJQgDgCgDgBQgKAAgOAdIAAA5g");
	this.shape_45.setTransform(-120.5,-85.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWAxIAAhfIAKAAIAAAZQAMgaAOgBQAFAAAEAFIgFAJQgCgCgEgBQgKAAgOAdIAAA5g");
	this.shape_46.setTransform(-127.3,-85.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgKAAgHgGQgFgHAAgKQgBgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgFADQgHADAAAGIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgUALQgEAHAAAJQAAAPAOAAQAKAAASgQIAAgZg");
	this.shape_47.setTransform(-136.3,-85.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAcBHIgbhGIgZBGIgHAAIg1iNIANAAIAtB6IAXg/IgXg7IALAAIAQAtIAQgtIAKAAIgUA5IAYA/IAqh4IAMAAIgyCNg");
	this.shape_48.setTransform(-148.7,-87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// Layer 4
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(238,177,17,0.149)").s().p("Ag0BlQgUgQgBgXQABgOAIgPQAJgOAPgMIARgLIgTgPQgWgQAAgZQAAgXATgQQAUgQAbAAQAaAAAQAOQARAOAAAWQAAAXgTARIgTARIAVANQAeAXAAAaQgBAbgVARQgWASgfAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAKgJQAKgIgBgLQABgQgVgRIgMgKgAgQhOQgIAHAAALQAAANALAKIAMAMIAMgMQAMgLAAgQQAAgJgHgHQgFgFgKAAQgLgBgGAIg");
	this.shape_49.setTransform(-98,-65.6,2.5,2.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(238,177,17,0.149)").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA3geAiQgOAOgOAGQgPAHgOACQgQADghAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_50.setTransform(-139,-65.5,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.8,-95.6,341.9,191.7);


(lib.M_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.6,62.7,1,0.032);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,y:-15.3},9).wait(1));

	// Layer 1
	this.instance_1 = new lib._1997_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171,-94);

	this.instance_2 = new lib.Group_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.2,78.7,1,1,0,0,0,30.1,11.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56004E").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape.setTransform(86.3,78);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBDQAJgKAHgNQAEgJAJgYIgihTIAMAAIAaBHIAYhHIALAAIgkBjQgFAPgIANIgMASg");
	this.shape_1.setTransform(89.3,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_2.setTransform(79.7,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgHAAgLQAAgUAUgFIAhgIIAAgTQAAgOgRAAQgJAAgGADQgGADAAAFIAAABIgKABIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgRIAAgYg");
	this.shape_3.setTransform(69.3,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAJAAIAAAQQAJgMAIgDQAHgEAKAAQAQAAAKAMQALANAAAWQgBAWgNAPQgNAPgSAAQgRAAgJgJIAAA5gAgegsIAAApQAAAJAJAFQAGAFAKABQAPAAAKgOQAKgLAAgSQAAgQgIgKQgIgLgNAAQgPAAgQATg");
	this.shape_4.setTransform(59.3,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA6AxIAAhEQAAgJgCgEQgDgHgJAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_5.setTransform(44.6,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAkQgMgPAAgVQAAgUANgPQANgOASAAQASAAAMAOQANAPAAAUQAAAVgNAPQgMAOgSAAQgTAAgNgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMAOAAQANAAAJgMQAKgNAAgQQAAgQgKgMQgJgMgNAAQgOAAgKAMg");
	this.shape_6.setTransform(30.3,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAlQgMgOAAgWQAAgWANgOQANgOATAAQARAAALAIIgFAIQgLgHgMAAQgPAAgKAMQgJALAAARQAAASAKAMQAKALAPAAQAMAAAKgIIAFAJQgOAIgPAAQgTAAgNgNg");
	this.shape_7.setTransform(20.6,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBAQgKgNgBgWQAAgWANgOQANgPATAAQAQAAAKAKIAAhBIAJAAIAACYIgJAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgJAMgBASQAAAQAIAMQAIAMANgBQARAAAOgTIAAgnQAAgXgZAAQgOAAgLAMg");
	this.shape_8.setTransform(133.2,-3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQALgNAHgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_9.setTransform(122.5,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgTAYgTAAQgLAAgHgHg");
	this.shape_10.setTransform(111.4,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBNIAAhVIgQAAIAAgFIAQgEIAAgQQAAgVALgLQAJgMARAAQAJABAJADIgFAIIgOgDQgaABAAAlIAAAOIAWAAIAAAIIgWAAIAABVg");
	this.shape_11.setTransform(104.4,-4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQALgNAHgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_12.setTransform(89.4,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgLAAgGgGQgGgGAAgMQAAgUAVgFIAhgIIAAgTQAAgPgSAAQgJABgFADQgHADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_13.setTransform(79,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgHg7QAAgDADgDQACgCACAAQADAAADACQACACAAAEQgBAIgHAAQgHAAAAgIg");
	this.shape_14.setTransform(71.7,-3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdBAQgLgNAAgWQAAgWAOgOQANgPASAAQAQAAAKAKIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgSgBQgLAMAAASQAAAQAIAMQAIAMANgBQARAAAOgTIAAgnQAAgXgYAAQgPAAgKAMg");
	this.shape_15.setTransform(63.3,-3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgMQAAgUAUgFIAhgIIAAgTQAAgPgRAAQgJABgGADQgGADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_16.setTransform(53.4,-1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_17.setTransform(42.9,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgGAAgMQAAgUAUgFIAhgIIAAgTQAAgPgRAAQgJABgGADQgGADAAAFIAAACIgKAAIgBgCQAAgUAgAAQAbAAAAAWIAAA9QAAAIAKABIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_18.setTransform(32.6,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggA0QgUgUAAggQABgfASgUQAUgUAbAAQAVAAASAMIgGAIQgQgJgSgBQgWAAgPARQgPASAAAZQAAAcAPARQAQARAZAAQAOAAARgHIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_19.setTransform(22.3,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgKAAgHgGQgFgGgBgLQAAgVAVgFIAggIIAAgTQABgPgTAAQgIAAgFAEQgHADAAAFIABACIgLABIAAgDQAAgUAfAAQAbAAAAAXIAAA8QABAJAIAAIgCAHQgJgBgCgCgAgUALQgEAHAAAJQAAAPAOAAQAKAAARgQIAAgZg");
	this.shape_20.setTransform(145.2,-29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA7AxIAAhEQAAgUgPAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_21.setTransform(126.3,-29.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAkQgNgPAAgVQAAgUANgPQANgOARAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgRAAgNgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMANAAQAPAAAJgMQAKgNAAgQQAAgQgKgMQgJgMgPAAQgNAAgKAMg");
	this.shape_22.setTransform(112.1,-29.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAGgMAHgIQAHgGAHgBQAFABADAEIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_23.setTransform(104.1,-29.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTBNIAAhVIgQAAIAAgFIAQgEIAAgQQAAgVALgLQAJgMASAAQAJABAIADIgEAIIgPgCQgagBAAAmIAAAOIAWAAIAAAIIgWAAIAABVg");
	this.shape_24.setTransform(98.4,-32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA6AxIAAhEQAAgJgCgEQgDgHgJAAQgPAAgYAdIAAA7IgJAAIAAhEQAAgJgCgEQgDgHgJAAQgPAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQALgJANAAQAMAAAFAIQAEAGAAANQALgNAHgFQALgJAMAAQAXAAAAAZIAABIg");
	this.shape_25.setTransform(80.3,-29.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXAvQgFgDAAgJQgPAPgQAAQgLAAgFgGQgHgGAAgLQABgVATgFIAhgIIAAgTQAAgPgSAAQgIAAgGAEQgGADAAAFIABACIgLABIAAgDQAAgUAfAAQAbAAAAAXIAAA8QABAJAIAAIgCAHQgJgBgCgCgAgTALQgFAHgBAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_26.setTransform(66.7,-29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAPAAQAFABADAEIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_27.setTransform(59.2,-29.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggBFQgKgGAAgJQAAgKARgTQgPgCAAgJQAAgJATgPQgJgDgFgIQgFgJAAgJQAAgQAKgKQAKgJAPAAQAGAAANADIAdgBIAAAJIgWAAQAHAMAAALQAAAOgKAJQgKALgMAAIgKgBQgPANAAAFQAAAFALAAIAjAAQAMAAAFAFQAGAFAAAKQAAASgPAKQgOAMgTAAQgOAAgKgHgAgfAzQAAAHAHAFQAHAEAKAAQAOAAALgIQALgJAAgLQAAgHgDgEQgCgDgHAAIgiAAQgOAUAAAGgAgXg6QgGAGAAAMQAAAKAGAIQAHAIAKAAQAKAAAHgHQAGgIAAgLQAAgLgGgIQgHgHgKAAQgKgBgHAJg");
	this.shape_28.setTransform(50.1,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfAkQgMgPAAgVQAAgUAMgPQAOgOARAAQASAAANAOQANAPAAAUQAAAVgNAPQgNAOgSAAQgSAAgNgOgAgXgcQgJAMAAAQQAAAQAJANQAKAMANAAQAOAAAJgMQAKgMAAgRQAAgQgKgMQgJgMgOAAQgNAAgKAMg");
	this.shape_29.setTransform(39.2,-29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAOAAQAGABADAEIgFAJQgDgCgDAAQgKAAgOAcIAAA4g");
	this.shape_30.setTransform(31.2,-29.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoBKIAAiQIALAAIAAAPQAIgKAIgEQAHgEAKAAQAQAAAKANQALANAAAVQAAAWgNAPQgNAPgTAAQgRAAgIgKIAAA6gAgdgsIAAApQAAAIAIAHQAHAEAIAAQAQAAAKgNQAKgLAAgSQAAgQgIgKQgIgMgNAAQgQABgOATg");
	this.shape_31.setTransform(21.8,-26.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoBKIAAiQIALAAIAAAPQAIgKAIgEQAHgEAKAAQAQAAAKANQALANAAAUQAAAXgNAPQgNAPgTAAQgRAAgIgKIAAA6gAgdgsIAAApQAAAIAIAHQAHAEAIAAQAQAAAKgMQAKgLAAgUQAAgPgIgKQgIgMgNAAQgPABgPATg");
	this.shape_32.setTransform(137.7,-54.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_33.setTransform(126.9,-57.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAOAAQAFAAAEAFIgFAJQgCgCgEAAQgKAAgOAcIAAA4g");
	this.shape_34.setTransform(119.5,-57.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAYAxIgXhHIgaBHIgJAAIgehhIALAAIAYBTIAZhFIgEgOIAKAAIAbBVIAahVIAKAAIggBhg");
	this.shape_35.setTransform(108.4,-56.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdBAQgKgNAAgWQgBgXANgNQANgOATAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgKAMAAASQABAQAHAMQAJALAMABQARgBAOgTIAAgoQAAgVgZAAQgOgBgLAMg");
	this.shape_36.setTransform(90.3,-59.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAQAAAIAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQAMAAAOgJIADAIQgQAKgQAAQgTAAgLgNgAgZgMIA0AAQABgNgIgIQgGgIgLAAQgVAAgHAdg");
	this.shape_37.setTransform(80.5,-57.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgFAAgKQAAgXAiAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_38.setTransform(71,-57.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgKAAgHgGQgFgGAAgLQgBgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgLABIAAgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgUALQgFAIAAAIQAAAPAPAAQAJAAATgQIAAgZg");
	this.shape_39.setTransform(61.8,-57.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgmBJIAAiWIAKAAIAABAQANgIAPAAQARgBALAMQAMAMAAAWQAAAYgPAPQgPAPgWAAQgPAAgLgFgAgcgCIAABEQAJACAIABQARAAAMgNQAKgMAAgTQAAgSgIgJQgIgKgNAAQgNAAgOAKg");
	this.shape_40.setTransform(51.9,-59.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_41.setTransform(43.4,-57.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWALgNQAMgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAANgJIAEAIQgRAKgPAAQgTAAgLgNgAgagMIA1AAQAAgNgGgIQgIgIgKAAQgWAAgHAdg");
	this.shape_42.setTransform(35.9,-57.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWALgNQAMgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAAOgJIADAIQgQAKgQAAQgTAAgLgNgAgagMIA1AAQAAgNgHgIQgGgIgLAAQgWAAgHAdg");
	this.shape_43.setTransform(26.3,-57.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTBNIAAhWIgQAAIAAgEIAQgEIAAgQQAAgUALgMQAJgLARAAQAJAAAJADIgFAIIgOgCQgagBAAAmIAAAOIAWAAIAAAHIgWAAIAABWg");
	this.shape_44.setTransform(20.1,-60.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgJAJgKAAQgIAAgEgEg");
	this.shape_45.setTransform(72.7,-86.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAIAGIASAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_46.setTransform(65,-85.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAHAyIAAhaIgXAAIAAgJIAhAAIAABjg");
	this.shape_47.setTransform(55.7,-85.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAJAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQAMAAAOgJIADAIQgQAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgGgIgLAAQgWAAgGAdg");
	this.shape_48.setTransform(42.7,-85.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAbBNIAAhFQAAgTgOAAQgOAAgZAcIAAA8IgKAAIAAiZIAKAAIAABSQAMgNAGgFQAKgIAMAAQAXAAAAAYIAABJg");
	this.shape_49.setTransform(32.3,-88);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgFBFIAAh/IguAAIAAgKIBnAAIAAAKIguAAIAAB/g");
	this.shape_50.setTransform(21.3,-87.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// Layer 4
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(86,0,78,0.149)").s().p("Ag9BtIAohOIAohoIhUAAIAAgjICDAAIAAAdIg0B+QgMAdgRAhg");
	this.shape_51.setTransform(76,-67.5,2.5,2.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(86,0,78,0.149)").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA5geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_52.setTransform(36.1,-67.4,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-95.6,341.5,191.7);


(lib.M_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-170.3,62.7,1,0.032);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,y:-15.4},9).wait(1));

	// Layer 1
	this.instance_1 = new lib._1994_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51,-94);

	this.instance_2 = new lib.Group_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-134.2,78.7,1,1,0,0,0,30.8,11.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2BB1E").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape.setTransform(-86.7,78);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAACADQADADAAACQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-48.8,-25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgJAJgKAAQgIAAgEgEg");
	this.shape_2.setTransform(-54.4,-30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_3.setTransform(-62.1,-29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQANgbAOAAQAFABADAEIgFAJQgCgCgDAAQgLAAgOAcIAAA4g");
	this.shape_4.setTransform(-69.1,-29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBNIAAhVIgpAAIAABVIgKAAIAAhVIgQAAIAAgFIAQgEIAAgQQAAgVALgLQAKgMAQAAQARAAANAKIgFAJQgNgKgNABQgagBAAAnIAAANIAzAAIAABdg");
	this.shape_5.setTransform(-78.9,-32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBDQAJgKAHgNQAEgJAJgYIgihTIAMAAIAaBHIAYhHIALAAIgkBjQgFAPgIANIgMASg");
	this.shape_6.setTransform(-93.1,-26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAGgMAHgIQAHgGAHgBQAFABADAEIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_7.setTransform(-99.8,-29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEA7QgFgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAXAAIAAAIIgXAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgJAJgKAAQgHAAgEgEg");
	this.shape_8.setTransform(-107.1,-30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgFAAgKQAAgXAiAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_9.setTransform(-114.9,-29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgSAYgVAAQgLAAgGgHg");
	this.shape_10.setTransform(-124.8,-29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBAQgLgNAAgWQAAgXANgNQANgOATAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgKAMAAASQAAAQAIAMQAIAMANAAQARgBAOgTIAAgoQAAgVgYAAQgPgBgLAMg");
	this.shape_11.setTransform(-136.3,-31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_12.setTransform(-146.9,-29.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_13.setTransform(-155,-31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_14.setTransform(18.5,-57.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWAvQgDgDgBgJQgPAPgQAAQgKAAgHgGQgFgGgBgLQAAgVAVgFIAggIIAAgTQABgPgTAAQgIAAgFAEQgHADAAAFIAAACIgKABIAAgEQAAgTAfAAQAcAAAAAXIAAA8QAAAJAJAAIgDAHQgJgBgDgCgAgUALQgEAHAAAJQAAAPAOAAQAKAAARgQIAAgZg");
	this.shape_15.setTransform(8.2,-57.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_16.setTransform(0.8,-59.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdBAQgLgNAAgWQAAgXANgNQANgOATAAQAQAAAKAJIAAhBIAJAAIAACYIgJAAIAAgOQgOARgUAAQgQAAgKgOgAgTgBQgJAMgBASQAAAQAIAMQAIALANABQARgBAOgTIAAgoQAAgVgZAAQgOgBgLAMg");
	this.shape_17.setTransform(-7.6,-59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXAvQgFgDAAgJQgQAPgQAAQgJAAgGgGQgHgGAAgLQABgVATgFIAigIIAAgTQgBgPgRAAQgJAAgGAEQgGADAAAFIAAACIgLABIAAgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAJAAIgCAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_18.setTransform(-17.4,-57.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_19.setTransform(-27.9,-57.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgKAAgGgGQgHgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QAAAJAJAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_20.setTransform(-38.3,-57.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggA0QgUgUAAggQAAgeAUgVQATgUAcAAQAVAAARAMIgGAIQgPgKgTAAQgWABgPARQgPAQAAAaQAAAbAPASQAQASAZAAQAOAAARgIIAFAKQgSAIgTAAQgdAAgTgUg");
	this.shape_21.setTransform(-48.6,-59.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXAvQgFgDAAgJQgPAPgQAAQgLAAgFgGQgHgGAAgLQABgVATgFIAhgIIAAgTQAAgPgSAAQgIAAgGAEQgGADAAAFIABACIgLABIAAgEQAAgTAfAAQAbAAAAAXIAAA8QABAJAIAAIgCAHQgJgBgCgCgAgTALQgFAHgBAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_22.setTransform(-65,-57.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAYIAEgNIADgLIgHgVQAEgCAEAAQAJAAAAALQAAANgMAXg");
	this.shape_23.setTransform(-77.8,-51.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdBAQgLgNAAgWQAAgXANgNQANgOATAAQAQAAAJAJIAAhBIALAAIAACYIgLAAIAAgOQgNARgUAAQgQAAgKgOgAgTgBQgKAMAAASQAAAQAIAMQAIALANABQARgBANgTIAAgoQAAgVgXAAQgPgBgLAMg");
	this.shape_24.setTransform(-86.1,-59.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_25.setTransform(-95.9,-57.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAbBMIAAhEQAAgJgCgEQgDgGgJAAQgOAAgZAcIAAA7IgKAAIAAiYIAKAAIAABSQAMgMAGgGQAKgIANAAQAWAAAAAYIAABIg");
	this.shape_26.setTransform(-106.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAlQgNgOABgWQgBgWANgOQAOgOATAAQARAAALAIIgFAIQgLgHgMAAQgPAAgKAMQgKALAAARQAAASAKAMQAKALAQAAQAMAAAKgIIAFAJQgOAIgPAAQgTAAgNgNg");
	this.shape_27.setTransform(-116,-57.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_28.setTransform(-126.3,-57.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgSAYgUAAQgMAAgGgHg");
	this.shape_29.setTransform(-137.5,-57);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgKAAgGgGQgHgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QAAAJAJAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_30.setTransform(-147.8,-57.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_31.setTransform(-155,-60);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAIAGIASAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_32.setTransform(35.2,-85.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgLAJgGQAKgGAPAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_33.setTransform(26.1,-85.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgHAAgKQAAgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_34.setTransform(16.9,-85.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEBNIAAiZIAJAAIAACZg");
	this.shape_35.setTransform(9.6,-88);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggA0QgUgUAAggQABgeASgVQAUgUAbAAQAWAAARAMIgHAIQgPgKgSAAQgWABgPARQgPAQAAAaQAAAbAPASQAQASAZAAQAOAAARgIIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_36.setTransform(1.3,-87.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_37.setTransform(-15.1,-85.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdAqQgHgHAAgNIAAhGIAKAAIAABCQAAAWAQAAQAQAAAVgbIAAg9IAKAAIAABeIgKAAIAAgVQgSAYgVAAQgLAAgGgHg");
	this.shape_38.setTransform(-25.1,-85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYAlQgMgOAAgWQAAgWAMgOQAOgOAUAAQAQAAAMAIIgHAIQgKgHgMAAQgPAAgKAMQgJALAAARQgBASALAMQAKALAPAAQALAAALgIIAFAJQgOAIgOAAQgUAAgNgNg");
	this.shape_39.setTransform(-34.8,-85.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfAkQgMgPAAgVQAAgUAMgPQANgOASAAQATAAAMAOQANAPAAAUQAAAVgNAPQgMAOgTAAQgSAAgNgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMANAAQAOAAAJgMQAKgMAAgRQAAgQgKgMQgJgMgOAAQgNAAgKAMg");
	this.shape_40.setTransform(-45.1,-85.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgjBFIAAiJIBHAAIAAAKIg8AAIAAA2IAyAAIAAAJIgyAAIAABAg");
	this.shape_41.setTransform(-54.3,-87.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgGgGQgGgHAAgKQAAgVAUgFIAhgHIAAgUQAAgPgRAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAARgQIAAgZg");
	this.shape_42.setTransform(-70.4,-85.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQgBgJgCgEQgCgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_43.setTransform(-80.8,-85.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_44.setTransform(-88.9,-87.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAbBNIAAhFQAAgTgOAAQgOAAgZAcIAAA8IgKAAIAAiZIAKAAIAABSQAMgNAGgFQAKgIANAAQAWAAAAAYIAABJg");
	this.shape_45.setTransform(-96.9,-88);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AggA0QgTgUAAggQAAgeATgVQATgUAbAAQAWAAAQAMIgFAIQgQgKgSAAQgWABgPARQgPAQAAAaQAAAbAQASQAPASAZAAQAOAAARgIIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_46.setTransform(-108.3,-87.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgjBFIAAiJIBHAAIAAAKIg8AAIAAA2IAxAAIAAAJIgxAAIAABAg");
	this.shape_47.setTransform(-124.6,-87.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkAzQgTgVAAgeQAAgeATgVQAVgUAdAAQAYAAASAJIgEAKQgSgIgSAAQgaAAgQAQQgRARAAAaQAAAbARARQARASAaAAQAIAAAUgFIAAguIALAAIAAA2QgUAIgWAAQgeAAgUgVg");
	this.shape_48.setTransform(-138.4,-87.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAsBHIgOgqIg7AAIgOAqIgNAAIAyiNIANAAIAyCNgAgaASIA0AAIgahNg");
	this.shape_49.setTransform(-151.3,-87.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// Layer 4
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(178,187,30,0.149)").s().p("AAJBtIAAg0IhWAAIAAgWIBliPIAXAAIAACGIAfAAIAAAfIgfAAIAAA0gAghAaIAqAAIAAg/g");
	this.shape_50.setTransform(-98.5,-67.9,2.5,2.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(178,187,30,0.149)").s().p("Ag/BQIACAAIAggBQAIAAAKgEQANgCAKgMQAHgIADgJQADgIADgTQgZAKgRAAQgcAAgOgQQgQgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA5gfAhQgLANgQAHQgPAHgOACQgRADggAAgAgWhCQgIAKAAARQgBAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgBghgIgPQgIgPgOAAQgMAAgJAMg");
	this.shape_51.setTransform(-138.8,-67.9,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.8,-96.1,341.9,192.1);


(lib.M_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-170.3,63.6,1,0.043);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,y:-13.6},9).wait(1));

	// Layer 1
	this.instance_1 = new lib._1990_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-94);

	this.instance_2 = new lib.Group_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-133.7,78.5,1,1,0,0,0,30.9,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F8ABE").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape.setTransform(-86.7,78);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(-16.3,-53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAQAAAIAKQAKALAAASIAAAHIhAAAIAAADQAAATAJAKQAJAMAPAAQANAAANgJIAEAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQABgNgIgIQgGgIgLAAQgVAAgHAdg");
	this.shape_2.setTransform(-23.1,-57.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAlQgNgOgBgWQABgWANgOQANgOATAAQASAAAKAIIgFAIQgKgHgNAAQgPAAgKAMQgKALAAARQABASAJAMQALALAPAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgMgNg");
	this.shape_3.setTransform(-31.8,-57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_4.setTransform(-38.7,-59.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAxIgihhIAKAAIAcBVIAchVIAMAAIgjBhg");
	this.shape_5.setTransform(-45.3,-56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAwIAAhdIAKAAIAAAYQAMgbAPAAQAFAAADAFIgFAJQgCgCgEAAQgJAAgPAcIAAA4g");
	this.shape_6.setTransform(-52.1,-57.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAJAKQAIAMAQAAQAMAAANgJIAFAIQgRAKgRAAQgSAAgLgNgAgZgMIA0AAQAAgNgGgIQgIgIgKAAQgWAAgGAdg");
	this.shape_7.setTransform(-60.7,-57.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_8.setTransform(-69.8,-57.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgUgOAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJAMAAQAXAAAAAZIAABIg");
	this.shape_9.setTransform(-84.3,-57.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAkQgNgPAAgVQAAgUANgPQAMgOASAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgSAAgMgOgAgXgcQgJAMAAAQQAAARAJAMQAKAMANAAQAOAAAKgMQAJgMAAgRQAAgQgJgMQgKgMgOAAQgNAAgKAMg");
	this.shape_10.setTransform(-95,-57.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBEIAAheIAJAAIAABegAgGg7QAAgIAGAAQADAAACACQACACAAAEQAAAIgHAAQgGAAAAgIg");
	this.shape_11.setTransform(-102.6,-59.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAKgGIAEAGQgJAJgJAAQgIAAgFgEg");
	this.shape_12.setTransform(-107.8,-58.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgQAPgPAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgGAEQgGADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_13.setTransform(-115.3,-57.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAlQgNgOgBgWQABgWANgOQANgOATAAQASAAAKAIIgFAIQgKgHgNAAQgPAAgKAMQgKALAAARQABASAJAMQALALAPAAQAMAAAKgIIAFAJQgPAIgOAAQgTAAgMgNg");
	this.shape_14.setTransform(-124.1,-57.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAkQgNgPAAgVQAAgUANgPQANgOARAAQATAAANAOQAMAPAAAUQAAAVgMAPQgNAOgTAAQgRAAgNgOgAgWgcQgKAMAAAQQAAARAKAMQAJAMANAAQAPAAAJgMQAKgNgBgQQABgQgKgMQgJgMgPAAQgNAAgJAMg");
	this.shape_15.setTransform(-134,-57.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_16.setTransform(-141.4,-60);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEBMIAAiYIAJAAIAACYg");
	this.shape_17.setTransform(-145.8,-60);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgPAPgQAAQgLAAgGgGQgGgGAAgLQAAgVAVgFIAhgIIAAgTQAAgPgSAAQgJAAgFAEQgHADAAAFIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_18.setTransform(-152.6,-57.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAXAAIAAAIIgXAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgIAJgKAAQgIAAgFgEg");
	this.shape_19.setTransform(-12.2,-86.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAlQgLgOAAgYQAAgWAMgNQALgNASAAQAPAAAKAKQAJALAAASIAAAHIhAAAIAAADQAAATAIAKQAJAMAQAAQAMAAANgJIAEAIQgRAKgQAAQgSAAgLgNgAgZgMIA0AAQAAgNgHgIQgHgIgKAAQgWAAgGAdg");
	this.shape_20.setTransform(-19.6,-85.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggAqIAEgJQARAJAKAAQAJAAAHgFQAHgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQANAAAOAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIASAJQAPAHAEAEQAFAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_21.setTransform(-28.8,-85.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgOgGgEgFQgFgGAAgJQAAgXAiAAQANAAAOAHIgFAJQgLgIgNAAQgIAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgQAAgPgIg");
	this.shape_22.setTransform(-37.5,-85.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAXAvQgEgDgBgJQgQAPgPAAQgLAAgGgGQgGgHAAgKQAAgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgCgCgAgUALQgFAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_23.setTransform(-46.4,-85.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFA7QgEgFAAgLIAAhFIgQAAIAAgFIAQgEIAAgbIAJAAIAAAcIAWAAIAAAIIgWAAIAABGQAAAKAJAAQADAAAJgGIAFAGQgJAJgKAAQgHAAgFgEg");
	this.shape_24.setTransform(-59,-86.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggAqIAEgJQARAJAKAAQAJAAAHgFQAHgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgLAKgGQAJgGAPAAQANAAAOAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIASAJQAPAHAEAEQAFAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_25.setTransform(-66.4,-85.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAHAyIAAhaIgXAAIAAgJIAhAAIAABjg");
	this.shape_26.setTransform(-75.2,-85.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggAqIAEgJQAQAJALAAQAIAAAHgFQAIgEAAgIQAAgJgJgGIgTgKQgNgGgFgFQgFgGAAgJQAAgXAiAAQAOAAANAHIgFAJQgLgIgMAAQgJAAgGAEQgHAEAAAHQAAAIAJAGIARAJQAPAHAEAEQAGAGAAAKQAAANgKAHQgKAGgOAAQgPAAgQgIg");
	this.shape_27.setTransform(-87.5,-85.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAYIAEgNIADgMIgHgUQAEgCAEAAQAJAAAAALQAAAMgMAYg");
	this.shape_28.setTransform(-94.2,-91.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgLAAgFgGQgHgHABgKQAAgVATgFIAigHIAAgUQgBgPgRAAQgJAAgGADQgGADAAAGIABACIgLABIgBgEQABgTAfAAQAbAAAAAXIAAA8QAAAJAKAAIgDAHQgJgBgDgCgAgTALQgGAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_29.setTransform(-101,-85.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdBAQgKgOAAgVQgBgXANgNQAOgOASAAQAQAAAKAJIAAhBIAKAAIAACYIgKAAIAAgOQgOARgUAAQgQAAgKgOgAgTAAQgKALAAASQABAQAHALQAJAMAMABQASgBANgTIAAgoQAAgVgYAAQgPAAgLAMg");
	this.shape_30.setTransform(-111.5,-87.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgPAPgQAAQgKAAgHgGQgFgHAAgKQgBgVAVgFIAhgHIAAgUQAAgPgSAAQgJAAgFADQgHADAAAGIAAACIgLABIAAgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgUALQgEAHAAAJQAAAPAOAAQAJAAATgQIAAgZg");
	this.shape_31.setTransform(-121,-85.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAbAxIAAhEQAAgJgCgEQgDgHgJAAQgOAAgZAdIAAA7IgKAAIAAheIAKAAIAAAYQAMgNAGgFQAKgJANAAQAWAAAAAZIAABIg");
	this.shape_32.setTransform(-131.1,-85.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWAvQgEgDAAgJQgQAPgPAAQgKAAgHgGQgFgHAAgKQAAgVATgFIAigHIAAgUQgBgPgRAAQgJAAgGADQgGADAAAGIAAACIgKABIgBgEQAAgTAgAAQAcAAAAAXIAAA8QgBAJAKAAIgDAHQgJgBgDgCgAgTALQgGAHAAAJQAAAPAPAAQAKAAASgQIAAgZg");
	this.shape_33.setTransform(-141.1,-85.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggA0QgUgUAAggQABgeASgVQAUgUAbAAQAVAAASAMIgHAIQgPgKgSAAQgWABgPARQgPAQAAAaQAAAbAPASQAQASAZAAQAOAAARgIIAEAKQgRAIgTAAQgdAAgTgUg");
	this.shape_34.setTransform(-151,-87.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// Layer 4
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(79,138,190,0.149)").s().p("Ag2BTQgVghAAgyQAAgxAVghQAWggAgAAQAhAAAVAgQAWAhAAAxQAAAygWAhQgVAgghAAQggAAgWgggAgWg3QgKAXAAAgQAAAhAKAXQAJAXANAAQANAAALgXQAJgXAAghQAAgggJgXQgLgXgNAAQgMAAgKAXg");
	this.shape_35.setTransform(-96.5,-66.8,2.5,2.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(79,138,190,0.149)").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA4geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_36.setTransform(-138.2,-66.5,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.8,-95.6,340.9,191.7);


(lib.G_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.G_2000();
	this.instance.parent = this;
	this.instance.setTransform(1210,-36.5);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.G_1998();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1036,-36.5);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.G_1997();
	this.instance_2.parent = this;
	this.instance_2.setTransform(516,-36.5);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.G_1994();
	this.instance_3.parent = this;
	this.instance_3.setTransform(367,-36.5);
	this.instance_3.alpha = 0.398;

	this.instance_4 = new lib.G_1992();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-91,-36.5);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.G_1990();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-351,-36.5);
	this.instance_5.alpha = 0.398;

	this.instance_6 = new lib.G_1989();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-657.5,-36.5);
	this.instance_6.alpha = 0.398;

	this.instance_7 = new lib.G_1988();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-833,-36.5);
	this.instance_7.alpha = 0.398;

	this.instance_8 = new lib.G_1987();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1047,-36.5);
	this.instance_8.alpha = 0.398;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(987.3,62.6,1,1,0,0,0,30.7,11.3);
	this.instance_9.alpha = 0.301;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(814,62.5,1,1,0,0,0,30.7,11.6);
	this.instance_10.alpha = 0.301;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(640.2,62.6,1,1,0,0,0,30.1,11.3);
	this.instance_11.alpha = 0.301;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(466.6,62.6,1,1,0,0,0,30.8,11.3);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(292.7,62.6,1,1,0,0,0,30.1,11.3);
	this.instance_13.alpha = 0.301;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1092.1,62.5,1,1,0,0,0,30.1,11.6);
	this.instance_14.alpha = 0.301;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1163.4,62.4,1,1,0,0,0,32.5,11.5);
	this.instance_15.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape.setTransform(1209.3,61.9);

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-745,62.5,1,1,0,0,0,30.7,11.6);
	this.instance_16.alpha = 0.301;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-918.2,62.5,1,1,0,0,0,30.7,11.6);
	this.instance_17.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_1.setTransform(-697.5,61.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_2.setTransform(-870.9,61.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_3.setTransform(-1044.2,61.9);

	this.instance_18 = new lib.Group_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-571.2,62.4,1,1,0,0,0,30.9,11.5);
	this.instance_18.alpha = 0.301;

	this.instance_19 = new lib.Group_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(121.7,62.6,1,1,0,0,0,30.8,11.3);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.Group_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-52.4,62.6,1,1,0,0,0,30,11.3);
	this.instance_20.alpha = 0.301;

	this.instance_21 = new lib.Group_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-225,62.6,1,1,0,0,0,30.6,11.3);
	this.instance_21.alpha = 0.301;

	this.instance_22 = new lib.Group_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-400.9,62.6,1,1,0,0,0,27.9,11.3);
	this.instance_22.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_4.setTransform(1035.9,61.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_5.setTransform(862.6,61.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_6.setTransform(689.3,61.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_7.setTransform(515.9,61.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_8.setTransform(342.6,61.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_9.setTransform(169.2,61.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_10.setTransform(-4.1,61.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_11.setTransform(-177.4,61.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_12.setTransform(-350.8,61.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_13.setTransform(-524.1,61.9);

	this.instance_23 = new lib.Group_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(866.7,-61.9,1,1,0,0,0,74.7,49.8);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.Group_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(685.1,-45.5,1,1,0,0,0,66.3,66.2);
	this.instance_24.alpha = 0.301;

	this.instance_25 = new lib.Group_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(196.6,-73.5,1,1,0,0,0,97.7,38.2);
	this.instance_25.alpha = 0.301;

	this.instance_26 = new lib.Group_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-520.4,-89.9,1,1,0,0,0,73.3,21.8);
	this.instance_26.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_17},{t:this.instance_16},{t:this.shape},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1128.4,-111.7,2422.4,191.7);


// stage content:
(lib._700x326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_223 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(223).call(this.frame_223).wait(1));

	// 4
	this.instance = new lib.M_4();
	this.instance.parent = this;
	this.instance.setTransform(337,135.5,1,1,0,0,0,-23.2,-1.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208).to({_off:false},0).to({alpha:1},10).wait(6));

	// 3
	this.instance_1 = new lib.M_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(345.1,182.9,1,1,0,0,0,0,45.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({_off:false},0).to({alpha:1},10).wait(30).to({x:13.8,alpha:0},20,cjs.Ease.get(1)).wait(16));

	// 2
	this.instance_2 = new lib.M_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(373.9,132.4,1,1,0,0,0,1.9,-5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({alpha:1},9).wait(20).to({x:0.1,alpha:0},24,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// 1
	this.instance_3 = new lib.M_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(438.7,119.9,1,1,0,0,0,5.1,-17.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({alpha:1},10).wait(19).to({x:-316.2,alpha:0},31,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// BG
	this.instance_4 = new lib.G_BG("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1135,153.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},10).to({x:871.1},25,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({x:116.2},31,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({x:-257.9},24,cjs.Ease.get(1)).wait(40).to({startPosition:0},0).to({x:-589},20,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.6,204.8,2422.4,191.7);
// library properties:
lib.properties = {
	width: 700,
	height: 326,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/700x326_atlas_.png", id:"700x326_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;