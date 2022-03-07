(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"90s_700x326_French_atlas_", frames: [[340,447,158,147],[0,149,244,147],[416,149,81,147],[344,0,168,147],[170,298,168,147],[0,0,342,147],[122,596,120,147],[0,596,120,147],[0,447,168,147],[246,149,168,147],[340,298,168,147],[0,298,168,147],[170,447,168,147]]}
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
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1988 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1989 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1990 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1990_RGB = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1992 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._1994 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._1994_RGB = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._1997 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._1997_RGB = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._1998 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._1998_RGB = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._2000 = function() {
	this.spriteSheet = ss["90s_700x326_French_atlas_"];
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAFADAHAAQAGAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape.setTransform(-101.9,-7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgHANIAAA2g");
	this.shape_1.setTransform(-108.9,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgFgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAEAFQAFAFAFADQAHADAHAAQAGAAAFgDQAGgCAHgEIAEAIQgJAFgIACQgHACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgCAEgCAHIAyAAIAAAAgAAGglIgTgdIALAAIAPAdg");
	this.shape_2.setTransform(-117.5,-9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgEACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQACACAAAEQAAADgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(-124.4,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_4.setTransform(-129.1,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgDgCgEAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_5.setTransform(-135.6,-8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAEgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgLABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_6.setTransform(-144.1,-7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAsQgJgDgGgGQgFgGgEgJQgCgJAAgKQgBgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgEgDgFgCQgHgCgFAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQADAHAFAFQAEAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_7.setTransform(-152.9,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_8.setTransform(-27.3,-33.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_9.setTransform(-36.5,-33.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAFADAHAAQAGAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_10.setTransform(-50.2,-33.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_11.setTransform(-60.4,-36.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_12.setTransform(-74.7,-33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_13.setTransform(-81.6,-36.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkBGIAAiPIAJAAIAAA9QAHgFAGgBQAGgCAIAAQAIAAAHADQAHACAEAGQAGAGADAHQACAIAAALQABAMgEAJQgDAKgHAHQgGAGgKAEQgJADgKAAQgTgBgGgDgAgOgJQgGACgHAFIAABBQAJADAHAAQAKAAAGgEQAHgDAFgFQAFgGADgIQACgHAAgJQAAgIgCgHQgCgHgEgDQgEgFgFgDQgGgCgFAAQgIAAgFACg");
	this.shape_14.setTransform(-88.6,-36.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA4AuIAAhAQAAgJgCgEIgEgEQgDgCgFABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAhAQAAgJgCgEIgEgEQgDgCgEABIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAFgBQAGgDAHABQAGAAAEABQAEACACAEQACACABAGIABAKQAKgNAHgEQAFgFAFgBQAGgDAGABQAGgBADACIAHAEQADADABAEIABAMIAABDg");
	this.shape_15.setTransform(-102.4,-33.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_16.setTransform(-115.2,-33.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_17.setTransform(-124.3,-33.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZAuIAAhAQAAgJgCgEIgDgEQgDgCgFABIgIABIgHAFQgOALgHAKIAAA3IgKAAIAAhZIAKAAIAAAXQAKgNAGgEQAFgFAFgBQAGgDAGABQAGgBADACQAEACADACQACADABAEQACAFAAAHIAABDg");
	this.shape_18.setTransform(-133.7,-33.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_19.setTransform(-143.6,-33.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAXIAEgMIADgMIgGgTQADgCAEAAQAEAAACACQADADAAAGQAAAIgFAJIgHARg");
	this.shape_20.setTransform(-150.6,-39.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_21.setTransform(-155.2,-36.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_22.setTransform(-11.5,-59.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAsQgFgBgDgDQgDgEgCgEQgBgGAAgFIAAhDIAJAAIAAA+QAAAJAEAGQABADADABQAEACAEAAIAIgBIAHgEQAGgEANgQIAAg6IAKAAIAABaIgKAAIAAgVQgJAMgGAFQgFADgFABQgFACgGAAQgFAAgEgCg");
	this.shape_23.setTransform(-20.8,-59.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAsQgIgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgMgjQgFADgFAGQgEAFgCAHQgDAHAAAHQAAAIADAHQACAHAEAFQAFAGAFADQAHADAFAAQAHAAAFgDQAGgDAEgGQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgFAAgHADg");
	this.shape_24.setTransform(-31.2,-59.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmBGIAAiJIAKAAIAAAPIAIgJIAHgFQAHgEAJAAQAIAAAGAEQAHACAEAHQAFAGADAHQADAIAAAKQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgEIAAA2gAgHg7IgIAEQgHAFgGAIIAAAoQAAADACAEQACADADADQAHAEAJABQAGAAAHgDQAGgEAFgFQAEgFADgIQACgHAAgJQAAgHgCgHQgCgGgDgFQgEgFgFgCQgFgEgGAAIgIACg");
	this.shape_25.setTransform(-41.2,-57);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWAtIgWglIgWAlIgLAAIAcgtIgcgsIAMAAIAVAlIAWglIAKAAIgbAsIAdAtg");
	this.shape_26.setTransform(-55.8,-59.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_27.setTransform(-62,-61.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgDgCgEAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_28.setTransform(-66.7,-59.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmBGIAAiJIAKAAIAAAPIAIgJIAHgFQAHgEAJAAQAIAAAGAEQAHACAEAHQAFAGADAHQADAIAAAKQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgEIAAA2gAgHg7IgIAEQgHAFgGAIIAAAoQAAADACAEQACADADADQAHAEAJABQAGAAAHgDQAGgEAFgFQAEgFADgIQACgHAAgJQAAgHgCgHQgCgGgDgFQgEgFgFgCQgFgEgGAAIgIACg");
	this.shape_29.setTransform(-75.6,-57);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAaAvIAAhBQgBgIgCgFIgDgEQgDgCgFAAIgIACIgIAFQgNALgHAJIAAA5IgKAAIAAhaIAKAAIAAAXQAKgMAHgGQAFgEAEgBQAFgDAHAAQAGAAADACQAEABACADQADADABAFQACAEAAAGIAABFg");
	this.shape_30.setTransform(-91.6,-59.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAsQgFgBgDgDQgDgEgCgEQgBgGAAgFIAAhDIAJAAIAAA+QAAAJAEAGQABADADABQAEACAEAAIAIgBIAHgEQAGgEANgQIAAg6IAKAAIAABaIgKAAIAAgVQgJAMgGAFQgFADgFABQgFACgGAAQgFAAgEgCg");
	this.shape_31.setTransform(-102.2,-59.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEA4QgDgCgBgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACADAAQAFAAAIgGIAEAGQgEAEgFACQgFACgEAAQgIAAgDgEg");
	this.shape_32.setTransform(-115.4,-60.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_33.setTransform(-120.6,-61.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAJgEAHAAQAIAAAIAEQAIAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_34.setTransform(-128.1,-59.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTBDIAFgIQAHAEAFAAQAEgBADgCQADgCAAgDQABgGgGgCIgMgBIgCAAIAMgVQgHgBgHgEQgGgEgFgFQgGgHgCgHQgDgIAAgJQAAgLAEgJQADgJAGgHQAGgGAIgEQAIgDAJAAQAHAAAHACQAIACAEAEIgEAIQgFgEgGgCQgFgBgHAAQgHAAgFADQgHACgEAGQgEAGgCAGQgDAIAAAIQAAAIADAIQABAGAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAFgBAFgEIAEAIQgGADgGACQgIACgHAAIgIAOIAFAAQAFABAEADQAEAEAAAHQAAAIgGAEQgFAEgIAAQgIAAgKgDg");
	this.shape_35.setTransform(-137.3,-57);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAFADQAGADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_36.setTransform(-146.4,-59.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_37.setTransform(-153.4,-59.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAAAAAABQABABAAAAQAAABABAAQAAABABAAIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_38.setTransform(-29,-82.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAZAuIAAg/QAAgKgBgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgFADgBQAHgDAGABQAGgBADACQAEACACACQAEADABAEQABAFAAAGIAABEg");
	this.shape_39.setTransform(-39.4,-85.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgCACgDQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACADAAACQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_40.setTransform(-47.1,-86.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_41.setTransform(-51.8,-85.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_42.setTransform(-61.5,-87.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_43.setTransform(-68.6,-87.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAGgDQAGgDAFgGQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgGgDQgGgDgGAAQgGAAgFADg");
	this.shape_44.setTransform(-76,-85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAABDIgNgEQgGgCgFgEIgKgIIgIgKIgGgMIgEgNIgBgOIABgOIAEgNIAGgLIAIgKIAKgIQAFgEAHgCIAMgEIANgBQALAAAKACQAKACAJAEIgEAKQgJgFgIgCQgIgBgJAAIgMABIgKADIgKAFIgIAGQgJALgDAHQgEAPAAAIIABAMIADALIAFAKIAHAJIAJAHQAEAEAGACIAKADIAMABQAHAAAUgEIAAgsIALAAIAAAzQgKAEgKACIgVABIgNgBg");
	this.shape_45.setTransform(-88.5,-87);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAZAuIAAg/QAAgKgCgEIgDgEQgEgCgEABIgIABIgIAFQgNALgHAKIAAA3IgKAAIAAhZIAKAAIAAAXQAKgNAHgEQAEgFAFgBQAFgDAHABQAFgBAEACQAEACADACQACADABAEQACAFAAAGIAABEg");
	this.shape_46.setTransform(-105.3,-85.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAHgCAGgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_47.setTransform(-115.1,-85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_48.setTransform(-122.1,-85.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgCAAQgFAAgHAIQgEAGgIANIAAA2g");
	this.shape_49.setTransform(-128.6,-85.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_50.setTransform(-137.1,-85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAaBDIgZhCIgXBCIgHAAIgziFIAMAAIArB0IAWg8IgWg4IALAAIAPAqIAPgqIAJAAIgTA1IAYA9IAnhyIAMAAIgwCFg");
	this.shape_51.setTransform(-148.9,-86.9);

	this.instance_1 = new lib._1998_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,-94);

	this.instance_2 = new lib.Group_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-135.2,78.6,1,1,0,0,0,30.7,11.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EEB111").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_52.setTransform(-86.7,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.instance_2},{t:this.instance_1},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 4
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(238,177,17,0.149)").s().p("Ag0BlQgUgQgBgXQABgOAIgPQAJgOAPgMIARgLIgTgPQgWgQAAgZQAAgXATgQQAUgQAbAAQAaAAAQAOQARAOAAAWQAAAXgTARIgTARIAVANQAeAXAAAaQgBAbgVARQgWASgfAAQgeAAgVgPgAgNAYQgSAPAAASQAAALAJAIQAJAJAMAAQANAAAKgJQAKgIgBgLQABgQgVgRIgMgKgAgQhOQgIAHAAALQAAANALAKIAMAMIAMgMQAMgLAAgQQAAgJgHgHQgFgFgKAAQgLgBgGAIg");
	this.shape_53.setTransform(-98,-65.6,2.5,2.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(238,177,17,0.149)").s().p("Ag/BQIADAAIAegBQAJAAAJgEQANgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA3geAiQgOAOgOAGQgPAHgOACQgQADghAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_54.setTransform(-139,-65.5,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.8,-100.9,341.9,196.9);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape.setTransform(96.8,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAFADQAGADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_1.setTransform(88.1,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_2.setTransform(81.1,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQACADAAADQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(74.7,41.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAFgGAKgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQADADABAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgCgDgAgTAKQgCAEgBAEIgBAIQgBAGAEAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_4.setTransform(67.9,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_5.setTransform(60.8,43.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAIgEAIAAQAJAAAHAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgHAEgJAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQACgHABgIQgBgHgCgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_6.setTransform(51.6,43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZAvIAAhAQAAgKgBgEIgFgEQgDgBgEAAIgIABIgHAFQgNALgJAKIAAA4IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAGgEADgBQAHgCAGAAQAGAAADABQAEABACADQAEADABAEQABAFAAAGIAABFg");
	this.shape_7.setTransform(41.1,43.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAGAHADAIQADAJAAAJQAAAKgDAJQgDAIgGAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgFADgEAGQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAGAFADQAHADAFAAQAGAAAHgDQAFgDAEgGQAEgFADgHQACgHABgIQgBgHgCgHQgDgHgEgFQgEgGgFgDQgHgDgGAAQgFAAgHADg");
	this.shape_8.setTransform(30.6,43.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaBJIAAhBQAAgIgCgEQgCgDgDgCQgDgBgEAAIgIABIgIAGQgMAKgJAJIAAA5IgJAAIAAiRIAJAAIAABOQALgMAHgFQAEgEAEgCQAHgCAGAAQAFAAAEABQAEACACADQADADACAEQABAFAAAFIAABFg");
	this.shape_9.setTransform(20.2,40.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_10.setTransform(120.2,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAGADQAGADAGAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_11.setTransform(111.5,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_12.setTransform(101.3,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgHANIAAA2g");
	this.shape_13.setTransform(89.1,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAtQgFgCgDgDQgDgDgCgGQgBgEAAgHIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEABAEAAIAIAAIAHgFQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFABgGAAQgFAAgEgBg");
	this.shape_14.setTransform(79.8,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_15.setTransform(70.1,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_16.setTransform(56.4,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQABAIAFAFQADAFAHADQAGADAGAAQAHAAAGgDQAGgCAGgEIADAIQgIAFgHACQgIACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_17.setTransform(47.7,15.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_18.setTransform(38.7,17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFQAAgEACgFIADgHQAFgGAKgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgJABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADABAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgCAHQgJgBgCgDgAgTAKQgCAEgBAEIgBAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_19.setTransform(30,17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglBGIAAiPIAKAAIAAA9QAHgFAGgBQAGgCAIAAQAIAAAHADQAHACAEAGQAGAGACAHQADAIAAALQAAAMgDAJQgEAKgGAHQgHAGgJAEQgIADgLAAQgSgBgIgDgAgOgJQgGACgHAFIAABBQAIADAIAAQAKAAAGgEQAHgDAFgFQAFgGACgIQADgHAAgJQAAgIgCgHQgCgHgEgDQgEgFgFgDQgGgCgGAAQgGAAgGACg");
	this.shape_20.setTransform(20.5,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_21.setTransform(149.6,-7.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQABAIAFAFQADAFAHADQAGADAGAAQAHAAAGgDQAGgCAGgEIADAIQgIAFgHACQgIACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_22.setTransform(140.9,-9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_23.setTransform(133.9,-8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAAAAAABQABABAAAAQAAABABAAQAAABABAAIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFQAAAFACAFIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_24.setTransform(125.2,-5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMBAQgHgDgGgHQgFgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAFAFAFADQAGADAHAAQAGAAAGgDQAHgCAGgEIADAIQgIAFgIACQgHACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_25.setTransform(115.5,-9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACADAAQAFAAAIgGIAEAGQgEAEgFACQgFACgEAAQgHAAgEgEg");
	this.shape_26.setTransform(107.9,-9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAaAvIAAhAQAAgKgDgEIgEgEQgCgCgFAAIgIACIgIAFQgMALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAHgGQAFgEAEgBQAFgDAHAAQAFAAAEACQAEABACADQADADACAFQABAEAAAGIAABFg");
	this.shape_27.setTransform(99.8,-8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgEACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQADACAAAEQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_28.setTransform(92.1,-9.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_29.setTransform(80.3,-7.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAHgCAGgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_30.setTransform(71.6,-7.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEA4QgDgCgBgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFACADQADACADAAQAEAAAIgGIAFAGQgEAEgFACQgEACgFAAQgIAAgDgEg");
	this.shape_31.setTransform(64.1,-9.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmBGIAAiJIAKAAIAAAPIAIgJIAHgFQAHgDAJgBQAIABAGADQAHACAEAHQAFAGADAHQADAJAAAJQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgFIAAA3gAgHg7IgIAEQgHAEgGAKIAAAnQAAADACAEQACAEADACQAHAEAJAAQAGAAAHgCQAGgEAFgFQAEgFADgIQACgHAAgJQAAgIgCgGQgCgGgDgFQgEgFgFgCQgFgDgGgBIgIACg");
	this.shape_32.setTransform(56.3,-5.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA4AvIAAhAQAAgKgCgEIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhAQAAgKgCgEIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGABAEACQAEABACADQACADABAFIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_33.setTransform(42.3,-8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAGAHADAIQADAJAAAJQAAAKgDAJQgDAIgGAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgFADgFAGQgEAFgCAHQgCAHgBAHQABAIACAHQACAHAEAFQAFAGAFADQAHADAFAAQAGAAAHgDQAFgDAEgGQAEgFADgHQACgHABgIQgBgHgCgHQgDgHgEgFQgEgGgFgDQgHgDgGAAQgFAAgHADg");
	this.shape_34.setTransform(28.8,-7.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAsQgIgDgHgGQgFgGgEgJQgCgJAAgKQgBgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgEgDgFgCQgGgCgGAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQADAHAEAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_35.setTransform(19.6,-7.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_36.setTransform(156.4,-33.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_37.setTransform(146.2,-36.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_38.setTransform(131.9,-33.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AA4AuIAAhAQAAgJgCgEIgEgEQgDgCgFABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAhAQAAgJgCgEIgEgEQgDgCgEABIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAFgBQAGgDAHABQAGAAAEABQAEACACAEQACACABAGIABAKQAKgNAHgEQAFgFAFgBQAGgDAGABQAGgBADACIAHAEQADADABAEIABAMIAABDg");
	this.shape_39.setTransform(119,-33.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA4AuIAAhAQAAgJgCgEIgEgEQgDgCgFABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAhAQAAgJgCgEIgEgEQgDgCgEABIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAFgBQAGgDAHABQAGAAAEABQAEACACAEQACACABAGIABAKQAKgNAHgEQAFgFAFgBQAGgDAGABQAGgBADACIAHAEQADADABAEIABAMIAABDg");
	this.shape_40.setTransform(102.3,-33.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAFgGAKgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgJABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQADADABAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgCgDgAgTAKQgCAEgBAEIgBAIQgBAGAEAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_41.setTransform(89.5,-33.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_42.setTransform(82.4,-33.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_43.setTransform(73.7,-31.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAsQgIgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgMgjQgFADgFAGQgEAFgCAHQgDAHAAAHQAAAIADAHQACAHAEAFQAFAGAFADQAHADAFAAQAHAAAFgDQAGgDAEgGQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgFAAgHADg");
	this.shape_44.setTransform(63.3,-33.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_45.setTransform(55.7,-33.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgmBHIAAiKIAKAAIAAAPIAIgJIAHgGQAHgCAJAAQAIAAAGACQAHADAEAGQAFAHADAIQADAHAAALQAAALgEAJQgDAIgGAIQgGAGgIAEQgIAEgIAAQgIAAgGgCQgGgCgEgGIAAA4gAgHg7IgIAEQgHAEgGAJIAAAnQAAAEACAEQACADADADQAHAFAJgBQAGAAAHgDQAGgCAFgHQAEgEADgHQACgJAAgIQAAgIgCgGQgCgGgDgFQgEgFgFgDQgFgCgGAAQgEgBgEACg");
	this.shape_46.setTransform(46.8,-31.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAZAuIAAhAQAAgJgBgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgFADgBQAHgDAGABQAGgBADACQAEACADACQADADABAEQABAFAAAHIAABDg");
	this.shape_47.setTransform(30.9,-33.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUAtQgFgCgDgDQgDgDgCgGQgBgEAAgHIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEABAEAAIAIAAIAHgFQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFABgGAAQgFAAgEgBg");
	this.shape_48.setTransform(20.3,-33.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgEAIQgDgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_49.setTransform(162.5,-59.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_50.setTransform(156.2,-61.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgCAAQgFAAgHAIQgEAGgIANIAAA2g");
	this.shape_51.setTransform(151.4,-59.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRBKIAAhSIgQAAIAAgEIAQgEIAAgQQAAgKACgHQADgIAFgFQAEgFAGgDQAHgDAIAAQAJAAAHADIgEAJQgIgDgFAAQgHAAgFACQgFADgCAFQgDAEgBAHQgCAHAAAIIAAAMIAUAAIAAAIIgUAAIAABSg");
	this.shape_52.setTransform(146,-62.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgSBKIAAhSIgPAAIAAgEIAPgEIAAgQQABgKACgHQACgIAFgFQAFgFAGgDQAHgDAIAAQAJAAAHADIgEAJQgIgDgFAAQgHAAgFACQgEADgDAFQgDAEgCAHQgBAHAAAIIAAAMIAVAAIAAAIIgVAAIAABSg");
	this.shape_53.setTransform(140.7,-62.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgGADgEAGQgEAFgCAHQgCAHgBAHQABAIACAHQACAHAEAFQAEAGAGADQAHADAFAAQAHAAAGgDQAFgDAEgGQAEgFADgHQADgHgBgIQABgHgDgHQgDgHgEgFQgEgGgFgDQgGgDgHAAQgFAAgHADg");
	this.shape_54.setTransform(131.5,-59.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAWBAQgEgDgBgJQgHAIgGADQgHAEgJAAQgFAAgEgBQgEgCgDgDQgDgDgBgEQgCgEAAgFIACgJIADgHQAFgGAKgDIAfgIIAAgRQAAgHgFgEQgFgDgHAAQgIAAgGADQgGADAAAFIABABIgKABIgBgDQAAgEACgEQACgDAEgDIAKgDIAMgBIALABQAFABADADQAEACACAEQABAEAAAGIAAA6QAAADACADQACACAFABIgCAGQgJgBgCgCgAgTAeQgCAEgBADIgBAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgDAJgIIAAgYgAAAglIgSgdIALAAIAPAdg");
	this.shape_55.setTransform(116.8,-61.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_56.setTransform(102.6,-59.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAaAvIAAhBQAAgIgCgFIgFgEQgDgCgEAAIgIACIgHAFQgNALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAHgDAGAAQAGAAADACQAEABACADQAEADABAFQABAEAAAGIAABFg");
	this.shape_57.setTransform(92.8,-59.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAZAvIAAhBQAAgIgBgFIgFgEQgDgCgEAAIgIACIgHAFQgNALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAGgEADgBQAHgDAGAAQAGAAADACQAEABADADQADADAAAFQACAEAAAGIAABFg");
	this.shape_58.setTransform(82.2,-59.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAFADQAGADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_59.setTransform(72.3,-59.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQACADAAADQAAADgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_60.setTransform(65.4,-61.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_61.setTransform(57.5,-61.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_62.setTransform(48.1,-59.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAZAvIAAhBQAAgIgBgFIgEgEQgDgCgFAAIgIACIgHAFQgOALgHAJIAAA5IgKAAIAAhaIAKAAIAAAXQAKgMAGgGQAFgEAFgBQAGgDAGAAQAGAAADACQAEABADADQACADABAFQACAEAAAGIAABFg");
	this.shape_63.setTransform(38.2,-59.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_64.setTransform(28.3,-59.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAsQgIgDgHgGQgFgGgEgJQgCgJAAgKQgBgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgEgDgFgCQgGgCgGAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQADAHAEAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_65.setTransform(19.6,-59.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQABAIAFAFQADAFAHADQAGADAGAAQAGAAAHgDQAFgCAHgEIADAIQgIAFgHACQgHACgJAAQgIAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgEADgCAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_66.setTransform(144.1,-86.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEA4QgDgCAAgDIgBgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFADADQACACAEAAQADAAAIgGIAFAGQgEAEgFACQgFACgEAAQgIAAgDgEg");
	this.shape_67.setTransform(136.6,-86.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQABAIAFAFQADAFAHADQAGADAGAAQAHAAAGgDQAGgCAGgEIADAIQgIAFgHACQgIACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_68.setTransform(129.2,-86.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgCACgDQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADADAAACQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_69.setTransform(122.3,-86.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgIAsQgIgDgHgGQgFgGgEgJQgCgJAAgKQgBgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgEgDgFgCQgGgCgGAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQADAHAEAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_70.setTransform(115.9,-85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgLgjQgGADgFAGQgEAFgCAHQgDAHAAAHQAAAIADAHQACAHAEAFQAFAGAGADQAGADAFAAQAHAAAFgDQAGgDAEgGQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_71.setTransform(106.2,-85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_72.setTransform(96.5,-85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_73.setTransform(82.8,-85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_74.setTransform(75.8,-85.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgCgJQgDgKAAgLQAAgLADgHQACgJAGgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAFAFQADAFAHADQAFADAHAAQAGAAAHgDQAFgCAHgEIAEAIQgJAFgHACQgIACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgEADgCAFQgCAEgCAHIAyAAIAAAAgAAFglIgSgdIALAAIAPAdg");
	this.shape_75.setTransform(67.3,-86.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgCACgDQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACADAAACQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_76.setTransform(60.4,-86.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AA4AuIAAg/QAAgKgCgEIgEgEQgDgCgFABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAg/QAAgKgCgEIgEgEQgDgCgEABIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAFgBQAGgDAHABQAGAAAEABQAEACACAEQACADABAEIABALQAKgNAHgEQAFgFAFgBQAGgDAGABQAGgBADACIAHAEQADADABAEIABALIAABEg");
	this.shape_77.setTransform(49.7,-85.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAGgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_78.setTransform(36.9,-85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_79.setTransform(29.9,-85.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgmBCIAAiDIAlAAQAIAAAIACQAIADAFAEQAFAFADAHQADAHAAAKQAAAKgDAIQgEAJgGAEQgGAFgIAEQgJACgJAAIgVgBIAAA0gAgbAFIASABQAIAAAGgCQAHgCAFgDQAFgEACgGQADgHAAgIQAAgIgCgFQgCgGgEgDQgEgEgGgCQgGgBgHgBIgXAAg");
	this.shape_80.setTransform(21.2,-87);

	this.instance_1 = new lib._1997_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171,-94);

	this.instance_2 = new lib.Group_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.2,78.7,1,1,0,0,0,30.1,11.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#56004E").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_81.setTransform(86.3,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.instance_2},{t:this.instance_1},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 4
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(86,0,78,0.149)").s().p("Ag9BtIAohOIAohoIhUAAIAAgjICDAAIAAAdIg0B+QgMAdgRAhg");
	this.shape_82.setTransform(76,-67.5,2.5,2.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(86,0,78,0.149)").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgPAAgeQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAyQAAA5geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhCQgIAKAAARQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgPQgIgPgOAAQgMAAgJAMg");
	this.shape_83.setTransform(36.1,-67.4,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-100.9,341.5,196.9);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAHAAQAGAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape.setTransform(-70.4,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAuIAAhAQAAgJgDgEIgEgEQgCgBgFgBIgIACIgIAFQgMALgJAJIAAA4IgJAAIAAhZIAJAAIAAAXQALgNAHgEQAFgEADgCQAGgCAHAAQAFAAAEABQAEACACACQADADACAEQABAFAAAHIAABDg");
	this.shape_1.setTransform(-80.2,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaAuIAAhAQAAgJgCgEIgFgEQgDgBgEgBIgIACIgHAFQgNALgJAJIAAA4IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgEAEgCQAHgCAGAAQAGAAADABQAEACACACQAEADABAEQABAFAAAHIAABDg");
	this.shape_2.setTransform(-90.8,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAGADAGAAQAGAAAHgCQAFgCAHgFIADAIQgIAGgHACQgHACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_3.setTransform(-100.7,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_4.setTransform(-107.6,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_5.setTransform(-115.5,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAEgHQAFgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_6.setTransform(-124.9,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZAuIAAhAQAAgJgBgEIgFgEQgDgBgEgBIgIACIgHAFQgNALgJAJIAAA4IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgEADgCQAHgCAGAAQAGAAADABQAEACACACQAEADABAEQABAFAAAHIAABDg");
	this.shape_7.setTransform(-134.8,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAEgHQAFgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_8.setTransform(-144.7,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAsQgIgDgFgGQgGgGgDgJQgDgJAAgKQAAgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAFAEIgEAIQgEgDgGgCQgHgCgGAAQgHAAgFADQgGADgFAFQgEAGgDAHQgCAHAAAHQAAAJACAHQACAHAGAFQAEAFAGADQAGADAIAAQAGAAAFgCQAFgBAFgEIAEAIQgGAEgHACQgHACgHAAQgJAAgIgEg");
	this.shape_9.setTransform(-153.4,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAHgCAGgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_10.setTransform(-6.7,-7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_11.setTransform(-13.5,-10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_12.setTransform(-18,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_13.setTransform(-24.8,-7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaBJIAAhBQAAgIgCgEQgCgDgDgCQgDgBgEAAIgIABIgHAGQgNAJgJAKIAAA5IgJAAIAAiRIAJAAIAABOQALgMAGgFQAFgEAEgCQAHgCAGAAQAFAAAEABQAEACACADQAEADABAEQABAFAAAFIAABFg");
	this.shape_14.setTransform(-34.6,-10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAsQgHgDgGgGQgGgGgDgJQgEgJAAgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgGgCgHAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAEgBAGgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_15.setTransform(-43.8,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAFAFQADAFAHADQAFADAHAAQAGAAAHgDQAFgCAHgEIAEAIQgJAFgHACQgIACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgEADgCAFQgCAEgCAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_16.setTransform(-52.9,-9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAXIAFgMIACgMIgGgTQAEgCADAAQAEAAACACQADADAAAGQAAAIgEAJIgIARg");
	this.shape_17.setTransform(-59.9,-14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_18.setTransform(-64.5,-10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWBAQgEgDgBgJQgHAIgGADQgHAEgJAAQgFAAgEgBQgEgCgDgDQgDgDgBgEQgCgEAAgFQAAgFACgEIADgHQAFgGAKgDIAfgIIAAgRQAAgHgFgEQgFgDgHAAQgIAAgGADQgGADAAAFIAAABIgJABIgBgDQAAgEACgEQACgDAEgDIAKgDIAMgBIALABQAFABADADQAEACABAEQACAEAAAGIAAA6QAAADACADQACACAFABIgCAGQgJgBgCgCgAgTAeQgCAEgBADIgBAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgDAJgIIAAgYgAAAglIgSgdIALAAIAPAdg");
	this.shape_19.setTransform(-76.2,-9.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_20.setTransform(-90.4,-7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_21.setTransform(-97.4,-8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAFAFQADAFAHADQAFADAHAAQAGAAAHgDQAFgCAHgEIAEAIQgJAFgHACQgIACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgEADgCAFQgCAEgCAHIAyAAIAAAAgAAFglIgSgdIALAAIAPAdg");
	this.shape_22.setTransform(-106,-9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgEACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQACACAAAEQAAADgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_23.setTransform(-112.9,-9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA4AvIAAhAQAAgKgCgEIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhAQAAgKgCgEIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGABAEACQAEABACADQACADABAFIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_24.setTransform(-123.5,-8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_25.setTransform(-136.4,-7.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_26.setTransform(-143.4,-8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmBGIAAiJIAKAAIAAAPIAIgJIAHgFQAHgDAJgBQAIABAGADQAHACAEAHQAFAGADAHQADAJAAAJQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgFIAAA3gAgHg7IgIAEQgHAEgGAKIAAAnQAAADACAEQACAEADACQAHAEAJAAQAGAAAHgCQAGgEAFgFQAEgFADgIQACgHAAgJQAAgIgCgGQgCgGgDgFQgEgFgFgCQgFgDgGgBIgIACg");
	this.shape_27.setTransform(-152.3,-5.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAGADAGAAQAGAAAHgCQAFgCAHgFIADAIQgIAGgHACQgHACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_28.setTransform(-35.4,-33.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZAuIAAhAQAAgJgBgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgFADgBQAHgDAGABQAGgBADACQAEACACACQAEADABAEQABAFAAAHIAABDg");
	this.shape_29.setTransform(-45.3,-33.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAtQgFgCgDgDQgDgDgCgGQgBgEAAgHIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEABAEAAIAIAAIAHgFQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFABgGAAQgFAAgEgBg");
	this.shape_30.setTransform(-55.9,-33.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAXIAFgMIACgMIgGgTQADgCAEAAQAEAAACACQADADAAAGQAAALgMAXg");
	this.shape_31.setTransform(-68.5,-28.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghBCIAAiDIBDAAIAAAJIg4AAIAAA0IAuAAIAAAJIguAAIAAA9g");
	this.shape_32.setTransform(-75.2,-35.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAABDIgNgEQgGgCgFgEIgKgIIgIgKIgGgMIgEgNIgBgOIABgOIAEgNIAGgLIAIgKIAKgIQAFgEAHgCIAMgEIANgBQALAAAKACQAKACAJAEIgEAKQgJgFgIgCQgIgBgJAAIgMABIgKADIgKAFIgIAGQgJALgDAHQgEAPAAAIIABAMIADALIAFAKIAHAJIAJAHQAEAEAGACIAKADIAMABQAHAAAUgEIAAgsIALAAIAAAzQgKAEgKACIgVABIgNgBg");
	this.shape_33.setTransform(-88.3,-35.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AArBEIgOgpIg5AAIgNApIgMAAIAviHIANAAIAvCHgAAZARIgZhJIgYBJIAxAAg");
	this.shape_34.setTransform(-100.6,-35.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_35.setTransform(-115.9,-33.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAaAuIAAhAQgBgJgCgEIgDgEQgDgCgFABIgIABIgIAFQgNALgHAKIAAA3IgKAAIAAhZIAKAAIAAAXQAKgNAHgEQAFgFAEgBQAFgDAHABQAGgBADACQAEACACACQADADABAEQACAFAAAHIAABDg");
	this.shape_36.setTransform(-125.8,-33.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_37.setTransform(-133.4,-35.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaBJIAAhBQAAgIgDgFQgBgCgDgBQgDgCgEAAIgIACIgIAEQgMAKgJAKIAAA5IgJAAIAAiRIAJAAIAABNQALgLAHgFQAFgEADgBQAGgDAHAAQAFAAAEACQAEABACACQADADACAFQABAFAAAFIAABFg");
	this.shape_38.setTransform(-141,-36.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AABBEIgLgFIgLgFQgFgEgEgEIgIgKIgHgNIgDgNIgBgOIABgNIAEgOQACgFAEgGIAHgKIAKgIQAFgEAFgDQAGgCAFgBIAOgBQAKAAAJACQAJADAIAGIgGAIQgHgEgHgDQgIgDgJABIgLABIgJADQgJAEgHAIQgGAHgFALQgDAKAAAMQABAQACAIQAHANAFAGIAIAHIAJAFIAKAEIALABQAIAAAIgCIAOgGIAEAKQgIAEgJACQgJABgJAAIgOAAg");
	this.shape_39.setTransform(-151.8,-35.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAaAvIAAhBQgBgIgCgFIgDgEQgDgCgFAAIgIACIgIAFQgNALgHAJIAAA5IgKAAIAAhaIAKAAIAAAXQAKgMAHgGQAFgEAEgBQAFgDAHAAQAGAAADACQAEABACADQADADABAFQACAEAAAGIAABFg");
	this.shape_40.setTransform(-8.3,-59.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAGgDQAGgDAFgGQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgGgDQgGgDgGAAQgGAAgFADg");
	this.shape_41.setTransform(-18.8,-59.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_42.setTransform(-26.3,-61.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgBgDIgBgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACAEAAQAEAAAHgGIAFAGQgEAEgFACQgFACgEAAQgIAAgDgEg");
	this.shape_43.setTransform(-31.6,-60.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAsQgJgDgGgGQgFgGgEgJQgCgJAAgKQgBgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgEgDgFgCQgHgCgFAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQADAHAFAFQAEAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_44.setTransform(-38.6,-59.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAHgCAGgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_45.setTransform(-47.6,-59.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_46.setTransform(-54.6,-59.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_47.setTransform(-61,-61.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgzBCIAAiDIApAAIAMABIANADQAFADAFADIAKAHIAHAJIAGAMIADALIABAPIgBAMIgDAOIgFALIgIAKIgJAJIgLAGQgFADgHAAQgGACgHAAgAgoA4IAcAAIAMgBIAKgDIAJgFIAIgHQAGgIAEgLQADgLAAgMQAAgIgEgOQgDgKgIgHQgHgGgKgFQgJgDgLAAIgcAAg");
	this.shape_48.setTransform(-69.7,-61.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAGADAGAAQAGAAAHgCQAFgCAHgFIADAIQgIAGgHACQgHACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_49.setTransform(-86.7,-59.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_50.setTransform(-93.6,-61.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_51.setTransform(-98.4,-59.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgLgjQgGADgFAGQgEAFgCAHQgDAHAAAHQAAAIADAHQACAHAEAFQAFAGAGADQAGADAFAAQAHAAAFgDQAGgDAEgGQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_52.setTransform(-107.6,-59.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAAAAAABQABABAAAAQAAABABAAQAAAAABABIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_53.setTransform(-117.4,-56.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMBAQgIgDgEgHQgGgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAGgGAGgDQAIgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAFAFQADAFAHADQAFADAHAAQAGAAAHgDQAFgCAHgEIAEAIQgJAFgHACQgIACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgEADgCAFQgCAEgCAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_54.setTransform(-127.1,-61.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgBgDIgBgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACAEAAQAEAAAHgGIAFAGQgEAEgFACQgFACgEAAQgIAAgDgEg");
	this.shape_55.setTransform(-134.7,-60.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_56.setTransform(-142.1,-59.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AABBDIgLgDIgLgHQgFgDgEgFIgIgKIgHgLIgDgOIgBgOIABgOIAEgMQACgHAEgFIAHgKIAKgIQAFgEAFgCQAGgDAFgBIAOgCQAKAAAJAEQAJADAIAFIgGAIQgHgEgHgDQgIgDgJAAIgLACIgJADQgJAEgHAIQgGAHgFALQgDAKAAANQABAQACAGQAHAPAFAFIAIAHIAJAFIAKADIALABQAIAAAIgCIAOgEIAEAJQgIADgJACQgJACgJAAIgOgBg");
	this.shape_57.setTransform(-151.8,-61.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAEgHQAFgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_58.setTransform(-29.9,-85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_59.setTransform(-36.9,-87.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_60.setTransform(-48.6,-85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_61.setTransform(-58.8,-87.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACADAAQAFAAAIgGIAEAGQgEAEgFACQgFACgEAAQgHAAgEgEg");
	this.shape_62.setTransform(-71.6,-86.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAaAuIAAg/QAAgKgDgEIgEgEQgCgCgFABIgIABIgIAFQgMALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAHgEQAFgFADgBQAGgDAHABQAFgBAEACQAEACACACQADADACAEQABAFAAAGIAABEg");
	this.shape_63.setTransform(-79.8,-85.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAGADAGAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_64.setTransform(-89.6,-85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA4AuIAAg/QAAgKgCgEIgEgEQgDgCgFABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAg/QAAgKgCgEIgEgEQgDgCgEABIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAFgBQAGgDAHABQAGAAAEABQAEACACAEQACADABAEIABALQAKgNAHgEQAFgFAFgBQAGgDAGABQAGgBADACIAHAEQADADABAEIABALIAABEg");
	this.shape_65.setTransform(-102.5,-85.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAHAAQAGAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_66.setTransform(-115.4,-85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgJAsQgHgDgGgGQgGgGgDgJQgEgJAAgKQABgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgGgCQgFgCgHAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQACAHAEAFQAFAFAGADQAGADAHAAQAHAAAFgCQAEgBAGgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_67.setTransform(-124,-85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAZAuIAAg/QAAgKgBgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgFADgBQAHgDAGABQAGgBADACQAEACADACQADADAAAEQACAFAAAGIAABEg");
	this.shape_68.setTransform(-133.8,-85.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAEgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgLABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_69.setTransform(-143.7,-85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgiBCIAAiDIALAAIAAB6IA6AAIAAAJg");
	this.shape_70.setTransform(-152.2,-87);

	this.instance_1 = new lib._1994_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51,-94);

	this.instance_2 = new lib.Group_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-134.2,78.7,1,1,0,0,0,30.8,11.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B2BB1E").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_71.setTransform(-86.7,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.instance_2},{t:this.instance_1},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 4
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(178,187,30,0.149)").s().p("AAJBtIAAg0IhWAAIAAgWIBliPIAXAAIAACGIAfAAIAAAfIgfAAIAAA0gAghAaIAqAAIAAg/g");
	this.shape_72.setTransform(-98.5,-67.9,2.5,2.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(178,187,30,0.149)").s().p("Ag/BQIACAAIAggBQAIAAAKgEQANgCAKgMQAHgIADgJQADgIADgTQgZAKgRAAQgcAAgOgQQgQgPAAgeQAAgkATgUQATgWAgAAQAkAAATAbQAUAaAAAyQAAA5gfAhQgLANgQAHQgPAHgOACQgRADggAAgAgWhCQgIAKAAARQgBAOAIAIQAHAJAMAAIAMgBQAOgDAIgDQgBghgIgPQgIgPgOAAQgMAAgJAMg");
	this.shape_73.setTransform(-138.8,-67.9,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.8,-100.9,341.9,196.9);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape.setTransform(-31,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_1.setTransform(-41.3,-35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAEgHQAFgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_2.setTransform(-50.6,-33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAuIAAg/QAAgKgBgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgFADgBQAHgDAGABQAGgBADACQAEACACACQAEADABAEQABAFAAAGIAABEg");
	this.shape_3.setTransform(-60.6,-33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAEgHQAFgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_4.setTransform(-70.4,-33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACBEIgMgFIgLgFQgGgEgDgEIgJgKIgGgNIgDgNIgBgOIABgNIAEgOQACgFADgGIAIgKIAKgIQAFgEAFgDQAGgCAFgBIAOgBQAJAAAJACQAKADAIAGIgGAIQgHgEgHgDQgIgDgJABIgLABIgIADQgKAEgHAIQgGAIgEAKQgEAKAAAMQABAQADAIQAGAOAFAFIAIAHIAJAFIAKAEIALABQAIAAAIgCIAOgGIAEAKQgIAEgJACQgKACgIAAIgNgBg");
	this.shape_5.setTransform(-80.2,-35.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAtQgFgCgDgDQgDgEgCgFQgBgFAAgGIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEACAEAAIAIgBIAHgFQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFACgGAAQgFAAgEgCg");
	this.shape_6.setTransform(-96.6,-33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAEgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgLABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_7.setTransform(-106.3,-33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBKIAAhSIgPAAIAAgEIAPgEIAAgQQABgJACgIQADgIAEgFQAFgGAGgCQAGgDAJAAQAJAAAHAEIgEAIQgIgDgFAAQgHAAgFACQgFADgCAEQgDAFgCAHQgBAGAAAJIAAANIAUAAIAAAHIgUAAIAABSg");
	this.shape_8.setTransform(-117.4,-36.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgCACgDQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACADAAACQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_9.setTransform(-123.7,-35.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEA4QgDgCgBgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFACADQADACADAAQAEAAAIgGIAFAGQgEAEgFACQgEACgFAAQgIAAgDgEg");
	this.shape_10.setTransform(-129,-34.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAsQgJgDgGgGQgFgGgEgJQgDgJAAgKQABgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAFAEIgGAIQgDgDgHgCQgGgCgFAAQgIAAgGADQgFADgFAFQgEAGgDAHQgCAHAAAHQAAAJACAHQADAHAEAFQAFAFAGADQAGADAHAAQAHAAAFgCQAEgBAFgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_11.setTransform(-135.9,-33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAFgGAKgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQADADABAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgCgDgAgTAKQgCAEgBAEIgBAIQgBAGAEAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_12.setTransform(-145,-33.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAXIAEgMIADgMIgGgTQAEgCADAAQAFAAACACQACADAAAGQAAAIgFAJIgHARg");
	this.shape_13.setTransform(-152.1,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_14.setTransform(-156.7,-36);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_15.setTransform(-55.2,-58.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_16.setTransform(-65.4,-61.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaAvIAAhBQAAgIgCgFIgFgEQgDgBgEgBIgIACIgHAFQgNALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgNAGgFQAFgDAEgCQAHgCAGgBQAGABADABQAEABACADQAEADABAFQABAEAAAHIAABEg");
	this.shape_17.setTransform(-80.5,-59);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgFADgEAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAEAGAFADQAGADAGAAQAGAAAHgDQAFgDAFgGQADgFADgHQACgHABgIQgBgHgCgHQgDgHgDgFQgFgGgFgDQgHgDgGAAQgGAAgGADg");
	this.shape_18.setTransform(-91,-58.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgEQAAgCACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQACADAAACQAAAEgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_19.setTransform(-98.5,-60.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA4QgDgCgBgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFACADQADACADAAQAEAAAIgGIAFAGQgEAEgFACQgEACgFAAQgIAAgDgEg");
	this.shape_20.setTransform(-103.8,-60.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgEQAAgCACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQACADAAACQAAAEgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_21.setTransform(-109,-60.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgBgDIgCgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACADAAQAFAAAIgGIAEAGQgEAEgFACQgFACgEAAQgHAAgEgEg");
	this.shape_22.setTransform(-114.3,-60.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgCAAQgFAAgHAIQgEAGgIANIAAA2g");
	this.shape_23.setTransform(-119.6,-59);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_24.setTransform(-128.1,-58.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmBHIAAiKIAKAAIAAAPIAIgJIAHgFQAHgEAJAAQAIAAAGAEQAHACAEAHQAFAGADAHQADAIAAAKQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgEIAAA3gAgHg7IgIAEQgHAFgGAIIAAAoQAAADACAEQACADADADQAHAEAJABQAGAAAHgEQAGgCAFgHQAEgEADgIQACgIAAgIQAAgHgCgHQgCgGgDgFQgEgFgFgCQgFgEgGAAIgIACg");
	this.shape_25.setTransform(-137.7,-56.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMBAQgHgDgGgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAFAFAFADQAGADAIAAQAFAAAGgDQAHgCAGgEIADAIQgIAFgIACQgGACgIAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_26.setTransform(-147.9,-60.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_27.setTransform(-154.9,-59);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAHAAQAGAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_28.setTransform(-15.5,-84.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_29.setTransform(-25.7,-87.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_30.setTransform(-40,-84.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAsQgHgDgGgGQgGgGgDgJQgDgJgBgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgHgCgGAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAFgBAFgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_31.setTransform(-48.7,-84.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACADAAADQAAADgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_32.setTransform(-55.5,-86.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAvIghhdIALAAIAaBSIAbhSIALAAIghBdg");
	this.shape_33.setTransform(-62.2,-84.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_34.setTransform(-68.9,-84.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAGADAGAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_35.setTransform(-77.5,-84.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_36.setTransform(-86.5,-84.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgHANIAAA2g");
	this.shape_37.setTransform(-98.1,-84.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_38.setTransform(-106.7,-84.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACADAAADQAAADgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_39.setTransform(-113.6,-86.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA4AuIAAg/QAAgKgCgEIgEgEQgDgBgFAAIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAg/QAAgKgCgEIgEgEQgDgBgEAAIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgEAFgCQAGgCAHAAQAGAAAEACQAEABACADQACAEABAEIABALQAKgNAHgEQAFgEAFgCQAGgCAGAAQAGAAADABIAHAEQADADABAEIABALIAABEg");
	this.shape_40.setTransform(-124.2,-84.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_41.setTransform(-137.1,-84.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_42.setTransform(-144.1,-84.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmBCIAAiDIAlAAQAIAAAIACQAIADAFAEQAFAFADAHQADAHAAAKQAAAKgDAIQgEAJgGAEQgGAGgIADQgJADgJAAIgVgCIAAA0gAgbAFIASABQAIAAAGgCQAHgCAFgDQAFgEACgGQADgHAAgIQAAgIgCgFQgCgGgEgDQgEgEgGgCQgGgCgHABIgXAAg");
	this.shape_43.setTransform(-152.7,-86.7);

	this.instance_1 = new lib._1990_RGB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-94);

	this.instance_2 = new lib.Group_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-133.7,78.5,1,1,0,0,0,30.9,11.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4F8ABE").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_44.setTransform(-86.7,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.instance_2},{t:this.instance_1},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 4
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(79,138,190,0.149)").s().p("Ag2BTQgVghAAgyQAAgxAVghQAWggAgAAQAhAAAVAgQAWAhAAAxQAAAygWAhQgVAgghAAQggAAgWgggAgWg3QgKAXAAAgQAAAhAKAXQAJAXANAAQANAAALgXQAJgXAAghQAAgggJgXQgLgXgNAAQgMAAgKAXg");
	this.shape_45.setTransform(-96.5,-66.8,2.5,2.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(79,138,190,0.149)").s().p("Ag+BQIACAAIAegBQAJAAAKgEQAMgCALgMQAHgJADgIQADgJADgSQgZAKgRAAQgcAAgPgQQgPgQAAgdQAAgjATgVQATgWAgAAQAkAAAUAbQATAaAAAzQAAA4geAhQgMANgQAHQgOAHgPACQgQADggAAgAgWhDQgIAMAAAQQAAAOAHAIQAHAJAMAAIAMgBQAOgDAIgDQgCghgHgOQgIgPgOgBQgMABgJAKg");
	this.shape_46.setTransform(-138.2,-66.5,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.8,-100.5,340.9,196.6);


(lib.G_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAEAFAGADQAHADAHAAQAFAAAGgCQAHgCAGgFIAEAIQgJAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape.setTransform(847.5,-24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_1.setTransform(840.5,-24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgMBAQgHgDgFgHQgGgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQABAIAEAFQAFAFAGADQAFADAHAAQAHAAAFgDQAHgCAGgEIADAIQgIAFgIACQgHACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAAFglIgSgdIALAAIAPAdg");
	this.shape_2.setTransform(832,-26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(825.1,-26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgHANIAAA2g");
	this.shape_4.setTransform(820.3,-24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_5.setTransform(813.9,-24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFQAAgEACgFIADgHQAFgGAKgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQACACAFABIgCAHQgJgBgCgDgAgTAKQgCAEgBAEIgBAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_6.setTransform(805.3,-24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgJAsQgIgDgGgGQgFgGgEgJQgDgJAAgKQABgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgFAIQgDgDgHgCQgGgCgGAAQgHAAgGADQgGADgEAFQgFAGgBAHQgDAHAAAHQAAAJADAHQACAHAEAFQAFAFAGADQAGADAHAAQAHAAAFgCQAEgBAFgEIAFAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_7.setTransform(796.6,-24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgEAEgBAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_8.setTransform(922.1,-49.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_9.setTransform(913,-49.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAEAFAGADQAHADAHAAQAFAAAGgCQAHgCAGgFIAEAIQgJAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_10.setTransform(899.3,-49.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_11.setTransform(889.1,-52.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAFADAHAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_12.setTransform(874.7,-49.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_13.setTransform(867.9,-52.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AglBGIAAiPIAKAAIAAA9QAHgFAGgBQAGgCAJAAQAHAAAHADQAHACAEAGQAGAGACAHQAEAIAAALQAAAMgEAJQgEAKgGAHQgGAGgKAEQgJADgLAAQgRgBgIgDgAgOgJQgGACgHAFIAABBQAIADAIAAQAJAAAHgEQAHgDAFgFQAFgGACgIQADgHAAgJQAAgIgCgHQgCgHgDgDQgEgFgGgDQgFgCgHAAQgGAAgGACg");
	this.shape_14.setTransform(860.9,-52.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AA4AvIAAhAQAAgKgCgEIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhAQAAgKgCgEIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGABAEACQAEABACADQACADABAFIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_15.setTransform(847.1,-49.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAFADAHAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_16.setTransform(834.2,-49.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_17.setTransform(825.2,-49.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAaAvIAAhAQAAgKgDgEIgEgEQgCgCgFAAIgIACIgIAFQgMALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAHgGQAFgEADgBQAGgDAHAAQAFAAAEACQAEABACADQADADACAFQABAEAAAGIAABFg");
	this.shape_18.setTransform(815.7,-49.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAGADAGAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_19.setTransform(805.9,-49.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgIAXIAFgMIACgMIgGgTQADgCAEAAQAFAAACACQACADAAAGQAAAIgEAJIgIARg");
	this.shape_20.setTransform(798.8,-55.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_21.setTransform(794.3,-52.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_22.setTransform(938,-75.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgUAtQgFgCgDgDQgDgDgCgGQgBgEAAgHIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEABAEAAIAIAAIAHgFQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFABgGAAQgFAAgEgBg");
	this.shape_23.setTransform(928.7,-75.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAIgEAIAAQAIAAAIAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQACgHABgIQgBgHgCgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_24.setTransform(918.3,-75.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgmBHIAAiKIAKAAIAAAPIAIgJIAHgGQAHgCAJAAQAIAAAGACQAHADAEAGQAFAHADAIQADAHAAALQAAALgEAJQgDAIgGAIQgGAGgIAEQgIAEgIAAQgIAAgGgCQgGgCgEgGIAAA4gAgHg7IgIAEQgHAEgGAJIAAAnQAAAEACAEQACADADADQAHAFAJgBQAGAAAHgDQAGgCAFgHQAEgEADgHQACgJAAgIQAAgIgCgGQgCgGgDgFQgEgFgFgDQgFgCgGAAIgIABg");
	this.shape_25.setTransform(908.2,-73.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAWAtIgWglIgWAlIgLAAIAcgtIgcgsIAMAAIAVAlIAWglIAKAAIgbAsIAdAtg");
	this.shape_26.setTransform(893.6,-75.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_27.setTransform(887.5,-77.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_28.setTransform(882.7,-75.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgmBHIAAiKIAKAAIAAAPIAIgJIAHgGQAHgCAJAAQAIAAAGACQAHADAEAGQAFAHADAIQADAHAAALQAAALgEAJQgDAIgGAIQgGAGgIAEQgIAEgIAAQgIAAgGgCQgGgCgEgGIAAA4gAgHg7IgIAEQgHAEgGAJIAAAnQAAAEACAEQACADADADQAHAFAJgBQAGAAAHgDQAGgCAFgHQAEgEADgHQACgJAAgIQAAgIgCgGQgCgGgDgFQgEgFgFgDQgFgCgGAAQgEgBgEACg");
	this.shape_29.setTransform(873.8,-73.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AAZAuIAAhAQAAgJgBgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAGgFADgBQAHgDAGABQAGgBADACQAEACACACQAEADABAEQABAFAAAHIAABDg");
	this.shape_30.setTransform(857.9,-75.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgUAtQgFgCgDgDQgDgDgCgGQgBgEAAgHIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEABAEAAIAIAAIAHgFQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFABgGAAQgFAAgEgBg");
	this.shape_31.setTransform(847.3,-75.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgEA4QgDgCAAgDIgBgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACAEAAQADAAAIgGIAFAGQgEAEgFACQgFACgEAAQgIAAgDgEg");
	this.shape_32.setTransform(834.1,-76.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_33.setTransform(828.9,-77.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgGADgEAGQgEAFgCAHQgCAHgBAHQABAIACAHQACAHAEAFQAEAGAGADQAHADAFAAQAHAAAFgDQAGgDAEgGQAEgFADgHQADgHgBgIQABgHgDgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgFAAgHADg");
	this.shape_34.setTransform(821.4,-75.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgSBDIADgIQAJADAFAAQADAAADgBQAEgCAAgFQgBgFgFgCIgMgBIgBAAIALgVQgHgBgHgEQgHgDgFgHQgEgGgDgGQgDgJABgJQAAgLADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGADIgGAJQgEgEgGgBQgFgCgGAAQgIAAgGADQgFACgFAGQgFAGgCAGQgCAIAAAIQAAAIACAIQACAGAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgFIAGAIQgHAEgHADQgHABgGAAIgJAPIAEAAQAHAAADADQAEAEAAAHQAAAHgGAFQgGAEgGAAQgJAAgJgDg");
	this.shape_35.setTransform(812.1,-73.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_36.setTransform(803.1,-75.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_37.setTransform(796.1,-75.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAAAAAABQABABAAAAQAAABABAAQAAAAABABIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_38.setTransform(920.5,-98.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AAZAvIAAhBQAAgIgCgFIgDgEQgDgCgFAAIgIACIgIAFQgNALgHAJIAAA5IgKAAIAAhaIAKAAIAAAXQAKgMAHgGQAEgEAFgBQAFgDAHAAQAFAAAEACQAEABADADQACADABAFQACAEAAAGIAABFg");
	this.shape_39.setTransform(910,-101.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_40.setTransform(902.4,-103.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgDgCgEAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_41.setTransform(897.6,-101.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_42.setTransform(888,-103.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_43.setTransform(880.9,-103.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAGAHADAIQADAJAAAJQAAAKgDAJQgDAIgGAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgFADgEAGQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAGAFADQAGADAGAAQAGAAAHgDQAFgDAFgGQADgFADgHQACgHAAgIQAAgHgCgHQgDgHgDgFQgFgGgFgDQgHgDgGAAQgGAAgGADg");
	this.shape_44.setTransform(873.5,-101.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AAABDIgNgEQgGgCgFgEIgKgIIgIgKIgGgMIgEgNIgBgOIABgOIAEgNIAGgLIAIgKIAKgIQAFgEAHgCIAMgEIANgBQALAAAKACQAKACAJAEIgEAKQgJgFgIgCQgIgBgJAAIgMABIgKADIgKAFIgIAGQgJALgDAHQgEAPAAAIIABAMIADALIAFAKIAHAJIAJAHQAEAEAGACIAKADIAMABQAHAAAUgEIAAgsIALAAIAAAzQgKAEgKACQgLABgKAAIgNgBg");
	this.shape_45.setTransform(860.9,-103.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AAaAvIAAhBQAAgIgCgFIgFgEQgDgCgEAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAGgDAHAAQAFAAAEACQAEABACADQADADACAFQABAEAAAGIAABFg");
	this.shape_46.setTransform(844.2,-101.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_47.setTransform(834.3,-101.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgCAAQgFAAgHAIQgEAGgIANIAAA2g");
	this.shape_48.setTransform(827.3,-101.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_49.setTransform(820.9,-101.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgEAEgBAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_50.setTransform(812.3,-101.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AAbBDIgahCIgYBCIgGAAIgziFIAMAAIArB0IAWg8IgXg4IAMAAIAPAqIAPgqIAKAAIgUA1IAYA9IAnhyIAMAAIgwCFg");
	this.shape_51.setTransform(800.5,-103.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_52.setTransform(699.9,27.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_53.setTransform(691.2,27.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_54.setTransform(684.2,27.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQACACAAADQAAAEgCACQgBAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_55.setTransform(677.9,25.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_56.setTransform(671,27.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_57.setTransform(663.9,27.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AgQAsQgIgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAHgEQAJgEAHAAQAIAAAJAEQAHAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgHAEQgJAEgIAAQgIAAgIgEgAgLgjQgGADgFAGQgEAFgCAHQgDAHAAAHQAAAIADAHQACAHAEAFQAFAGAGADQAFADAGAAQAHAAAFgDQAGgDAEgGQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_58.setTransform(654.7,27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AAaAuIAAhAQAAgIgDgFIgDgEQgDgBgFgBIgIACIgIAFQgMALgIAJIAAA4IgKAAIAAhZIAKAAIAAAXQAKgMAHgGQAFgDADgCQAGgCAHgBQAFABAEABQAEACACACQADADACAFQABAEAAAHIAABDg");
	this.shape_59.setTransform(644.3,27.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAIgEAIAAQAIAAAIAEQAIAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_60.setTransform(633.8,27.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AAZBJIAAhBQAAgIgCgFQgBgCgDgBQgCgCgFAAIgIACIgIAEQgNAKgHAKIAAA5IgKAAIAAiRIAKAAIAABNQAKgLAHgFQAEgEAFgBQAFgDAHAAQAFAAAEACQAEABADACQACADABAFQACAEAAAGIAABFg");
	this.shape_61.setTransform(623.4,24.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_62.setTransform(723.4,1.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_63.setTransform(714.7,1.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_64.setTransform(704.5,-1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_65.setTransform(692.2,1.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AgUAsQgFgBgDgDQgDgEgCgFQgBgEAAgGIAAhDIAJAAIAAA+QAAAKAEAFQABADADABQAEADAEAAIAIgBIAHgFQAGgEANgQIAAg6IAKAAIAABaIgKAAIAAgVQgJAMgGAFQgFADgFABQgFADgGAAQgFAAgEgDg");
	this.shape_66.setTransform(682.9,1.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_67.setTransform(673.2,1.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_68.setTransform(659.6,1.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("AgMBAQgHgDgGgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAEAFAGADQAGADAIAAQAFAAAGgDQAHgCAGgEIADAIQgIAFgIACQgGACgIAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_69.setTransform(650.9,-0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_70.setTransform(641.8,1.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_71.setTransform(633.1,1.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("AgkBGIAAiPIAJAAIAAA9QAHgFAGgBQAGgCAJAAQAHAAAHADQAHACAFAGQAFAGADAHQACAIAAALQAAAMgDAJQgDAKgHAHQgGAGgKAEQgJADgKAAQgTgBgGgDgAgOgJQgGACgHAFIAABBQAJADAHAAQAJAAAHgEQAHgDAFgFQAFgGADgIQACgHAAgJQAAgIgCgHQgCgHgEgDQgDgFgGgDQgGgCgFAAQgIAAgFACg");
	this.shape_72.setTransform(623.7,-1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_73.setTransform(752.7,-24);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AgMBAQgHgDgGgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAEAFAGADQAHADAHAAQAFAAAGgDQAHgCAGgEIAEAIQgJAFgIACQgGACgIAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgEADgCAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_74.setTransform(744,-26);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_75.setTransform(737,-24.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_76.setTransform(728.3,-21.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("AgMBAQgIgDgFgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAEAFQAFAFAFADQAHADAHAAQAGAAAGgDQAFgCAHgEIAEAIQgJAFgHACQgIACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgEADgCAFQgCAEgCAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_77.setTransform(718.6,-26);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACADAAQAFAAAHgGIAFAGQgEAEgFACQgEACgFAAQgHAAgEgEg");
	this.shape_78.setTransform(711.1,-25.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("AAZAuIAAhAQAAgJgCgEIgDgEQgEgBgEgBIgIACIgHAFQgOALgHAJIAAA4IgKAAIAAhZIAKAAIAAAXQAKgNAHgEQAEgEAFgCQAFgCAHgBQAFABAEABQAEACADACQACADABAEQACAFAAAHIAABDg");
	this.shape_79.setTransform(702.9,-24.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAABABQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_80.setTransform(695.3,-26);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_81.setTransform(683.5,-24);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAFADAHAAQAGAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgEACgEADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_82.setTransform(674.8,-24);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("AgEA4QgCgCgBgDIgBgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACAEAAQAEAAAHgGIAFAGQgEAEgFACQgFACgEAAQgIAAgDgEg");
	this.shape_83.setTransform(667.2,-25.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("AgmBHIAAiKIAKAAIAAAPIAIgJIAHgGQAHgDAJAAQAIAAAGADQAHAEAEAFQAFAGADAJQADAHAAALQAAALgEAJQgDAIgGAHQgGAHgIAEQgIAEgIAAQgIAAgGgCQgGgCgEgFIAAA3gAgHg7IgIAEQgHAEgGAJIAAAnQAAAEACAEQACADADADQAHAFAJAAQAGgBAHgDQAGgCAFgHQAEgEADgHQACgJAAgIQAAgIgCgGQgCgGgDgFQgEgFgFgDQgFgDgGAAIgIACg");
	this.shape_84.setTransform(659.5,-21.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("AA4AuIAAhAQAAgJgCgEIgEgEQgDgBgFgBIgIACIgIAFQgNALgIAJIAAA4IgJAAIAAhAQAAgJgCgEIgEgEQgDgBgEgBIgIACIgJAFQgNALgIAJIAAA4IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgEAFgCQAGgCAHgBQAGAAAEACQAEACACAEQACACABAGIABAKQAKgNAHgEQAFgEAFgCQAGgCAGgBQAGABADABIAHAEQADADABAEIABAMIAABDg");
	this.shape_85.setTransform(645.5,-24.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAJgEAHAAQAIAAAIAEQAIAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_86.setTransform(632,-24);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("AgJAsQgIgDgFgGQgGgGgDgJQgDgJgBgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgHgCgGAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAEgBAGgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_87.setTransform(622.7,-24);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAEAFQAFAFAFADQAHADAHAAQAGAAAFgCQAGgCAHgFIAEAIQgJAGgIACQgHACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_88.setTransform(759.6,-49.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_89.setTransform(749.4,-52.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAEAFAGADQAHADAHAAQAFAAAGgCQAHgCAGgFIAEAIQgJAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_90.setTransform(735,-49.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("AA4AvIAAhAQAAgKgCgEIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhAQAAgKgCgEIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGABAEACQAEABACADQACADABAFIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_91.setTransform(722.1,-49.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("AA4AvIAAhAQAAgKgCgEIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhAQAAgKgCgEIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGABAEACQAEABACADQACADABAFIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_92.setTransform(705.5,-49.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgEAEgBAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_93.setTransform(692.6,-49.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_94.setTransform(685.5,-49.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAAAAAABQABABAAAAQAAABABAAQAAABABAAIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_95.setTransform(676.8,-47.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAGAHADAIQADAJAAAJQAAAKgDAJQgDAIgGAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgFADgEAGQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAGAFADQAGADAGAAQAGAAAHgDQAFgDAFgGQADgFADgHQACgHAAgIQAAgHgCgHQgDgHgDgFQgFgGgFgDQgHgDgGAAQgGAAgGADg");
	this.shape_96.setTransform(666.5,-49.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgEAAQgFAAgGAIQgEAGgHANIAAA2g");
	this.shape_97.setTransform(658.9,-49.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("AgmBGIAAiJIAKAAIAAAPIAIgJIAHgFQAHgDAJgBQAIABAGADQAHACAEAHQAFAGADAHQADAJAAAJQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgFIAAA3gAgHg7IgIAEQgHAEgGAKIAAAnQAAADACAEQACAEADACQAHAEAJAAQAGAAAHgCQAGgEAFgFQAEgFADgIQACgHAAgJQAAgIgCgGQgCgGgDgFQgEgFgFgCQgFgDgGgBIgIACg");
	this.shape_98.setTransform(650,-47.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("AAaAvIAAhAQAAgKgCgEIgFgEQgDgCgEAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAHgDAGAAQAFAAAEACQAEABACADQADADACAFQABAEAAAGIAABFg");
	this.shape_99.setTransform(634,-49.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("AgUAsQgFgBgDgDQgDgEgCgEQgBgFAAgGIAAhDIAJAAIAAA+QAAAJAEAGQABADADABQAEACAEABIAIgCIAHgEQAGgEANgQIAAg6IAKAAIAABaIgKAAIAAgVQgJAMgGAFQgFADgFABQgFACgGABQgFgBgEgCg");
	this.shape_100.setTransform(623.4,-49.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_101.setTransform(765.7,-75.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_102.setTransform(759.3,-77.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_103.setTransform(754.6,-75.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AgSBKIAAhSIgPAAIAAgEIAPgEIAAgQQAAgJADgIQACgIAFgFQAFgFAGgDQAHgDAIAAQAJAAAHAEIgEAIQgIgDgFAAQgHAAgFADQgEACgDAEQgDAFgBAHQgCAHAAAIIAAANIAVAAIAAAHIgVAAIAABSg");
	this.shape_104.setTransform(749.2,-78.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("AgRBKIAAhSIgQAAIAAgEIAQgEIAAgQQgBgJADgIQADgIAFgFQAEgFAGgDQAHgDAIAAQAJAAAHAEIgEAIQgIgDgFAAQgHAAgFADQgFACgCAEQgDAFgCAHQgBAHAAAIIAAANIAUAAIAAAHIgUAAIAABSg");
	this.shape_105.setTransform(743.8,-78.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAIgEAIAAQAIAAAIAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQADgFADgHQACgHABgIQgBgHgCgHQgDgHgDgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_106.setTransform(734.7,-75.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("AAVBAQgDgDgBgJQgHAIgGADQgHAEgKAAQgEAAgEgBQgEgCgDgDQgDgDgBgEQgCgEAAgFIABgJIAFgHQAFgGAIgDIAggIIAAgRQAAgHgFgEQgFgDgHAAQgIAAgGADQgGADAAAFIABABIgKABIgBgDQAAgEACgEQACgDAEgDIAKgDIAMgBIALABQAFABADADQADACADAEQABAEAAAGIAAA6QAAADACADQADACAEABIgCAGQgJgBgDgCgAgSAeQgDAEgCADIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgDAJgIIAAgYgAAAglIgSgdIALAAIAQAdg");
	this.shape_107.setTransform(720,-77.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAEAFAGADQAHADAHAAQAFAAAGgCQAHgCAGgFIAEAIQgJAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_108.setTransform(705.8,-75.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("AAaAuIAAhAQgBgJgCgEIgDgEQgDgCgFABIgIABIgIAFQgNALgHAKIAAA3IgKAAIAAhZIAKAAIAAAXQAKgNAHgEQAFgFAEgBQAFgDAHABQAGgBADACQAEACACACQADADABAEQACAFAAAHIAABDg");
	this.shape_109.setTransform(695.9,-75.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AAaAuIAAhAQAAgJgCgEIgFgEQgDgCgEABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAHgEQAEgFAEgBQAGgDAHABQAFgBAEACQAEACACACQADADACAEQABAFAAAHIAABDg");
	this.shape_110.setTransform(685.3,-75.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_111.setTransform(675.5,-75.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_112.setTransform(668.6,-77.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_113.setTransform(660.6,-78.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_114.setTransform(651.3,-75.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("AAaAuIAAhAQAAgJgCgEIgFgEQgDgCgEABIgIABIgHAFQgNALgJAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAEgBQAHgDAGABQAFgBAEACQAEACACACQAEADABAEQABAFAAAHIAABDg");
	this.shape_115.setTransform(641.3,-75.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQgBAGAEAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_116.setTransform(631.5,-75.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AgJAsQgIgDgFgGQgGgGgDgJQgDgJgBgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgHgCgGAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAEgBAGgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_117.setTransform(622.7,-75.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AgMBAQgHgDgGgHQgFgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAFAFAFADQAGADAHAAQAGAAAGgDQAHgCAGgEIADAIQgIAFgIACQgHACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_118.setTransform(747.3,-103.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACADAAQAFAAAIgGIAEAGQgEAEgFACQgFACgEAAQgHAAgEgEg");
	this.shape_119.setTransform(739.7,-102.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#999999").s().p("AgMBAQgHgDgGgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAEAFAGADQAGADAIAAQAFAAAGgDQAHgCAGgEIAEAIQgJAFgIACQgGACgIAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgFACQgEABgEAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_120.setTransform(732.3,-103.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_121.setTransform(725.4,-103.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#999999").s().p("AgJAsQgHgDgGgGQgGgGgDgJQgDgJgBgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgHgCgGAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAFgBAFgEIAEAIQgGAEgGACQgIACgHAAQgJAAgIgEg");
	this.shape_122.setTransform(719,-101.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#999999").s().p("AgPAsQgJgEgFgGQgGgHgDgIQgDgJAAgKQAAgJADgJQADgIAGgHQAGgGAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgHAEgJAAQgIAAgHgEgAgMgjQgGADgEAGQgEAFgCAHQgCAHgBAHQABAIACAHQACAHAEAFQAEAGAGADQAHADAFAAQAHAAAFgDQAGgDAEgGQAEgFADgHQACgHAAgIQABgHgDgHQgDgHgEgFQgEgGgGgDQgFgDgHAAQgFAAgHADg");
	this.shape_123.setTransform(709.3,-101.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_124.setTransform(699.7,-101.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_125.setTransform(686,-101.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_126.setTransform(679,-101.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#999999").s().p("AgMBAQgHgDgFgHQgGgGgCgJQgDgKAAgLQAAgLADgHQADgJAFgGQAFgGAHgDQAIgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJADAHQACAIADAFQAFAFAGADQAFADAHAAQAHAAAFgDQAHgCAGgEIADAIQgIAFgIACQgHACgHAAQgJAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgDAEgBAHIAyAAIAAAAgAAGglIgTgdIALAAIAPAdg");
	this.shape_127.setTransform(670.4,-103.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#999999").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQADADAAADQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_128.setTransform(663.5,-103.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#999999").s().p("AA4AvIAAhBQAAgIgCgFIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhBQAAgIgCgFIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGAAAEADQAEABACADQACAEABAEIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_129.setTransform(652.9,-101.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAGADAGAAQAGAAAHgCQAFgCAHgFIADAIQgIAGgHACQgHACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_130.setTransform(640,-101.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgDgCgEAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_131.setTransform(633,-101.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#999999").s().p("AgmBCIAAiDIAlAAQAIAAAIACQAIACAFAFQAFAFADAHQADAIAAAJQAAAKgDAJQgEAHgGAFQgGAFgIADQgJADgJABIgVgDIAAA1gAgbAEIASACQAIAAAGgCQAHgCAFgCQAFgFACgGQADgGAAgJQAAgIgCgGQgCgFgEgEQgEgDgGgCQgGgBgHAAIgXAAg");
	this.shape_132.setTransform(624.4,-103.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_133.setTransform(185.4,1.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#999999").s().p("AAaAvIAAhAQAAgKgCgEIgFgEQgDgBgEAAIgIABIgHAFQgNALgJAKIAAA4IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAHgCAGAAQAGAAADABQAEABACADQAEADABAEQABAFAAAGIAABFg");
	this.shape_134.setTransform(175.6,1.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#999999").s().p("AAZAvIAAhAQAAgKgBgEIgFgEQgDgBgEAAIgIABIgHAFQgNALgJAKIAAA4IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAGgEADgBQAHgCAGAAQAGAAADABQAEABADADQADADABAEQABAFAAAGIAABFg");
	this.shape_135.setTransform(165,1.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAFADQAGADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_136.setTransform(155.1,1.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#999999").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgDACgDQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQACADAAADQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_137.setTransform(148.2,-0.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_138.setTransform(140.3,-1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_139.setTransform(130.9,1.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#999999").s().p("AAZAvIAAhAQAAgKgCgEIgDgEQgDgBgFAAIgIABIgHAFQgOALgHAKIAAA4IgKAAIAAhaIAKAAIAAAXQAKgMAGgGQAGgEAEgBQAGgCAGAAQAGAAADABQAEABADADQACADABAEQACAFAAAGIAABFg");
	this.shape_140.setTransform(121,1.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_141.setTransform(111.1,1.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#999999").s().p("AgIAsQgIgDgHgGQgFgGgEgJQgCgJAAgKQgBgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgEgDgFgCQgGgCgGAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQADAHAEAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgJAAgHgEg");
	this.shape_142.setTransform(102.4,1.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_143.setTransform(249.1,-24);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_144.setTransform(242.3,-26.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_145.setTransform(237.8,-26.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_146.setTransform(231,-24);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#999999").s().p("AAZBJIAAhBQAAgIgBgFQgCgCgDgBQgDgCgEAAIgIACIgHAEQgNAKgJAKIAAA5IgJAAIAAiRIAJAAIAABNQALgLAGgFQAGgEADgBQAHgDAGAAQAFAAAEACQAEABADACQADADABAFQABAFAAAFIAABFg");
	this.shape_147.setTransform(221.2,-26.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#999999").s().p("AgJAsQgIgDgFgGQgGgGgDgJQgDgJAAgKQAAgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAFAEIgEAIQgEgDgGgCQgHgCgGAAQgHAAgFADQgGADgFAFQgEAGgDAHQgCAHAAAHQAAAJACAHQACAHAGAFQAEAFAGADQAGADAIAAQAGAAAFgCQAFgBAFgEIAEAIQgGAEgHACQgHACgHAAQgJAAgIgEg");
	this.shape_148.setTransform(212,-24);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#999999").s().p("AgMBAQgIgDgFgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAEAFQAFAFAFADQAHADAHAAQAGAAAFgDQAGgCAHgEIAEAIQgJAFgIACQgHACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgCAEgCAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_149.setTransform(202.9,-26);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#999999").s().p("AgIAXIAEgMIADgMIgGgTQADgCAEAAQAEAAACACQADADAAAGQAAAIgFAJIgHARg");
	this.shape_150.setTransform(195.9,-30.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_151.setTransform(191.3,-26.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#999999").s().p("AAWBAQgEgDgBgJQgHAIgGADQgHAEgKAAQgEAAgEgBQgEgCgDgDQgDgDgBgEQgCgEAAgFIACgJIADgHQAGgGAJgDIAfgIIAAgRQAAgHgFgEQgFgDgHAAQgIAAgGADQgGADAAAFIAAABIgKABIAAgDQAAgEACgEQACgDAEgDIAKgDIAMgBIALABQAFABAEADQACACACAEQACAEAAAGIAAA6QAAADACADQADACAEABIgDAGQgIgBgCgCgAgTAeQgDAEAAADIgBAIQgBAGAEAEQAEAEAGAAQAGAAAGgEQAGgDAJgIIAAgYgAABglIgTgdIALAAIAPAdg");
	this.shape_152.setTransform(179.6,-26);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQACgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQACAHAFAFQADAFAHADQAFADAHAAQAGAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_153.setTransform(165.4,-24);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgEAIQgEgCgDAAQgEAAgHAIQgEAGgHANIAAA2g");
	this.shape_154.setTransform(158.4,-24.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#999999").s().p("AgMBAQgIgDgFgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAFAFQAEAFAFADQAHADAHAAQAGAAAFgDQAGgCAHgEIAEAIQgJAFgIACQgHACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgCAEgCAHIAyAAIAAAAgAAGglIgTgdIALAAIAPAdg");
	this.shape_155.setTransform(149.8,-26);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAABABQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_156.setTransform(142.9,-26);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#999999").s().p("AA4AuIAAhAQAAgJgCgEIgEgEQgDgBgFgBIgIACIgIAFQgNALgIAJIAAA4IgJAAIAAhAQAAgJgCgEIgEgEQgDgBgEgBIgIACIgJAFQgNALgIAJIAAA4IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgEAFgCQAGgCAHgBQAGAAAEACQAEACACAEQACACABAGIABAKQAKgNAHgEQAFgEAFgCQAGgCAGgBQAGABADABIAHAEQADADABAEIABAMIAABDg");
	this.shape_157.setTransform(132.3,-24.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_158.setTransform(119.4,-24);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_159.setTransform(112.4,-24.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#999999").s().p("AgmBHIAAiKIAKAAIAAAPIAIgJIAHgGQAHgDAJAAQAIAAAGADQAHAEAEAFQAFAGADAJQADAHAAALQAAALgEAJQgDAIgGAHQgGAHgIAEQgIAEgIAAQgIAAgGgCQgGgCgEgFIAAA3gAgHg7IgIAEQgHAEgGAJIAAAnQAAAEACAEQACADADADQAHAFAJAAQAGgBAHgDQAGgCAFgHQAEgEADgHQACgJAAgIQAAgIgCgGQgCgGgDgFQgEgFgFgDQgFgDgGAAIgIACg");
	this.shape_160.setTransform(103.5,-21.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAFADQAGADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_161.setTransform(220.4,-49.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#999999").s().p("AAZAvIAAhAQAAgKgCgEIgDgEQgDgCgFAAIgIACIgHAFQgOALgHAJIAAA5IgKAAIAAhaIAKAAIAAAXQAKgMAGgGQAFgEAFgBQAGgDAGAAQAGAAADACQAEABADADQACADABAFQACAEAAAGIAABFg");
	this.shape_162.setTransform(210.5,-49.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#999999").s().p("AgUAsQgFgBgDgDQgDgEgCgEQgBgFAAgGIAAhDIAJAAIAAA+QAAAJAEAGQABADADABQAEACAEABIAIgCIAHgEQAGgEANgQIAAg6IAKAAIAABaIgKAAIAAgVQgJAMgGAFQgFADgFABQgFACgGABQgFgBgEgCg");
	this.shape_163.setTransform(199.9,-49.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#999999").s().p("AgIAXIAFgNIACgKIgGgUQADgCAEAAQAEAAACADQADACAAAGQAAALgMAXg");
	this.shape_164.setTransform(187.3,-44.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#999999").s().p("AghBCIAAiDIBDAAIAAAKIg5AAIAAAzIAvAAIAAAIIgvAAIAAA+g");
	this.shape_165.setTransform(180.6,-51.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#999999").s().p("AAABDIgNgEQgGgCgFgEIgKgIIgIgKIgGgMIgEgNIgBgOIABgOIAEgNIAGgLIAIgKIAKgIQAFgEAHgCIAMgEIANgBQALAAAKACQAKACAJAEIgEAKQgJgFgIgCQgIgBgJAAIgMABIgKADIgKAFIgIAGQgJALgDAHQgEAPAAAIIABAMIADALIAFAKIAHAJIAJAHQAEAEAGACIAKADIAMABQAHAAAUgEIAAgsIALAAIAAAzQgKAEgKACIgVABIgNgBg");
	this.shape_166.setTransform(167.5,-51.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#999999").s().p("AAqBEIgNgoIg5AAIgNAoIgMAAIAwiHIAMAAIAvCHgAAZARIgZhJIgYBJIAxAAg");
	this.shape_167.setTransform(155.2,-52);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#999999").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAGADAGAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_168.setTransform(139.9,-49.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#999999").s().p("AAaAvIAAhAQAAgKgCgEIgFgEQgDgCgEAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAHgDAGAAQAFAAAEACQAEABACADQADADACAFQABAEAAAGIAABFg");
	this.shape_169.setTransform(130,-49.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#999999").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgEACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQADACAAAEQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_170.setTransform(122.4,-51.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#999999").s().p("AAaBJIAAhBQAAgIgCgEQgCgDgDgCQgDgBgEAAIgIABIgHAGQgNAJgJAKIAAA5IgJAAIAAiRIAJAAIAABOQALgMAGgFQAFgEAEgCQAHgCAGAAQAFAAAEABQAEACACADQAEADABAEQABAFAAAFIAABFg");
	this.shape_171.setTransform(114.8,-52.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#999999").s().p("AACBDIgMgEIgLgGQgGgDgEgFIgIgKIgGgMIgDgNIgBgOIABgOIAEgMQACgGADgGIAIgKIAJgIQAFgEAGgCQAGgDAGgBIAMgCQAKAAAJAEQAKADAIAFIgGAIQgHgFgHgCQgIgDgJAAIgLACIgIADQgKAEgHAIQgGAHgEALQgEALAAAMQABAQADAGQAGAOAFAGIAIAHIAJAFIAKADIALABQAIAAAHgCIAPgEIAEAJQgIADgJACQgKACgIABIgNgCg");
	this.shape_172.setTransform(104,-51.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#999999").s().p("AAaAuIAAhAQAAgJgCgEIgFgEQgDgCgEABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAEgBQAHgDAGABQAFgBAEACQAEACACACQADADACAEQABAFAAAHIAABDg");
	this.shape_173.setTransform(247.5,-75.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAIgEAIAAQAJAAAHAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgHAEgJAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQACgHABgIQgBgHgCgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_174.setTransform(237,-75.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#999999").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_175.setTransform(229.5,-77.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#999999").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACADAAQAFAAAHgGIAFAGQgEAEgFACQgEACgFAAQgHAAgEgEg");
	this.shape_176.setTransform(224.2,-76.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#999999").s().p("AgIAsQgIgDgHgGQgFgGgEgJQgCgJAAgKQAAgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgDgDgHgCQgFgCgGAAQgIAAgGADQgFADgFAFQgFAGgCAHQgCAHAAAHQAAAJACAHQACAHAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgIAAgIgEg");
	this.shape_177.setTransform(217.2,-75.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_178.setTransform(208.2,-75.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_179.setTransform(201.2,-75.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#999999").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_180.setTransform(194.8,-77.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#999999").s().p("AgzBCIAAiDIApAAIAMABIANAEQAFABAFAEIAKAHIAHAJIAGALIADANIABANIgBAOIgDAMIgFAMIgIALIgJAHIgLAGQgFADgHACQgGABgHAAgAgoA5IAcAAIAMgBIAKgEIAJgFIAIgHQAGgIAEgLQADgLAAgMQAAgIgEgNQgDgLgIgGQgHgIgKgDQgJgFgLAAIgcAAg");
	this.shape_181.setTransform(186.1,-77.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#999999").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAGADQAFADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_182.setTransform(169.1,-75.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_183.setTransform(162.2,-77.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_184.setTransform(157.4,-75.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAJgEAHAAQAIAAAIAEQAIAEAFAGQAHAHACAIQAEAJAAAJQAAAKgEAJQgCAIgHAHQgFAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_185.setTransform(148.2,-75.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#999999").s().p("AgUBGQgGgBgFgDQgEgDgDgEQgCgDAAgEQAAgGAGgJIAKgNQgHgBgEgCQgDgDAAgFQAAgEADgEQAEgFALgJIgIgFIgFgGQgFgIAAgKQAAgHACgGQADgGAEgFQAFgEAGgCQAGgDAIAAQAGAAALAEIAPAAIANgBIAAAJIgVAAQAEAGABAFQACAEAAAGQAAAGgDAGQgCAGgFAFQgEAEgGADQgGACgFAAIgDAAIgGAAIgLAJQgEAFAAADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAIAAIAhAAQAGAAAEACQAEABADACQACACACAEIABAJQAAAIgEAHQgEAHgGAEQgGAFgJADQgIADgIAAQgHAAgGgCgAgZAkQgFAIAAAFQAAADACADIAFAFQAHAEAKAAQAGAAAGgCQAGgCAFgEQAFgEADgFQACgFAAgFQAAgHgCgDQgCgDgHAAIggAAgAgPg9QgEACgDADQgDAEgBAEQgCAFAAAFIACAKIAFAIIAHAFQAEACAFAAQAFAAADgCQAEgCADgDQADgEACgEQABgFAAgFQAAgFgBgFIgFgIQgDgDgEgCQgEgCgEAAQgFAAgFACg");
	this.shape_186.setTransform(138.4,-73);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#999999").s().p("AgMBAQgIgDgFgHQgFgGgDgJQgCgKAAgLQAAgLACgHQADgJAGgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAFAFACAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQACAIAFAFQAEAFAFADQAHADAHAAQAGAAAFgDQAGgCAHgEIAEAIQgJAFgIACQgHACgIAAQgIAAgHgDgAAaAHQAAgGgCgEQgBgFgEgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgDADgDAFQgCAEgCAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_187.setTransform(128.7,-77.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#999999").s().p("AgEA4QgCgCgCgDIAAgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACADAAQAFAAAHgGIAFAGQgEAEgFACQgEACgFAAQgHAAgEgEg");
	this.shape_188.setTransform(121.1,-76.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAEgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgLABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_189.setTransform(113.7,-75.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#999999").s().p("AACBEIgMgFIgLgFQgGgEgEgEIgIgKIgGgNIgDgNIgBgOIABgNIAEgOQACgFADgGIAIgKIAJgIQAFgEAGgDQAGgCAGgBIAMgBQAKAAAJACQAKADAIAGIgGAIQgHgEgHgDQgIgDgJABIgLABIgIADQgKAEgHAIQgGAHgEALQgEAKAAAMQABAQADAIQAGANAFAGIAIAHIAJAFIAKAEIALABQAIAAAHgCIAPgGIAEAKQgIAEgJACQgKABgIAAIgNAAg");
	this.shape_190.setTransform(104,-77.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_191.setTransform(225.9,-101.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_192.setTransform(218.9,-103.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAHADAHAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_193.setTransform(207.2,-101.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_194.setTransform(197,-103.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#999999").s().p("AgEA4QgDgCAAgDIgBgKIAAhCIgQAAIAAgEIAQgEIAAgaIAIAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACAEAAQADAAAJgGIAEAGQgEAEgFACQgEACgFAAQgIAAgDgEg");
	this.shape_195.setTransform(184.2,-102.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#999999").s().p("AAaAvIAAhBQAAgIgCgFIgFgEQgDgCgEAAIgIACIgHAFQgNALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAHgDAGAAQAGAAADACQAEABACADQAEADABAFQABAEAAAGIAABFg");
	this.shape_196.setTransform(176,-101.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAGAAAHgCQAFgCAHgFIADAIQgIAGgHACQgHACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_197.setTransform(166.2,-101.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#999999").s().p("AA4AvIAAhBQAAgIgCgFIgEgEQgDgCgFAAIgIACIgIAFQgNALgIAJIAAA5IgJAAIAAhBQAAgIgCgFIgEgEQgDgCgEAAIgIACIgJAFQgNALgIAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAFgBQAGgDAHAAQAGAAAEADQAEABACADQACAEABAEIABALQAKgMAHgGQAFgEAFgBQAGgDAGAAQAGAAADACIAHAEQADADABAFIABAKIAABFg");
	this.shape_198.setTransform(153.3,-101.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#999999").s().p("AgMAtQgIgEgEgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAFAFQADAFAHADQAGADAGAAQAHAAAGgCQAGgCAGgFIADAIQgIAGgHACQgIACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_199.setTransform(140.4,-101.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#999999").s().p("AgJAsQgHgDgGgGQgGgGgDgJQgDgJgBgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgHgCgGAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAFgBAFgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_200.setTransform(131.8,-101.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#999999").s().p("AAZAvIAAhBQAAgIgCgFIgDgEQgEgCgEAAIgIACIgIAFQgNALgHAJIAAA5IgKAAIAAhaIAKAAIAAAXQAKgMAHgGQAEgEAFgBQAFgDAHAAQAFAAAEACQAEABADADQACADABAFQACAEAAAGIAABFg");
	this.shape_201.setTransform(122,-101.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQADADADAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_202.setTransform(112.1,-101.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#999999").s().p("AgiBCIAAiDIALAAIAAB5IA6AAIAAAKg");
	this.shape_203.setTransform(103.6,-103.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAFgHQAFgGAIgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIABACIgKABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADACAEQABAEAAAFIAAA6QAAAEACACQADACAEABIgCAHQgJgBgDgDgAgSAKQgDAEgCAEIgBAIQAAAGAEAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_204.setTransform(-468.9,-49.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_205.setTransform(-479.2,-51.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_206.setTransform(-488.6,-49.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#999999").s().p("AAaAuIAAhAQAAgJgCgEIgFgEQgDgBgEgBIgIACIgHAFQgNALgJAJIAAA4IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgEAEgCQAHgCAGgBQAGABADABQAEACACACQAEADABAEQABAFAAAHIAABDg");
	this.shape_207.setTransform(-498.5,-49.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgDAHQgIgBgDgDgAgTAKQgDAEgBAEIAAAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_208.setTransform(-508.4,-49.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#999999").s().p("AABBDIgLgDIgLgGQgFgEgEgFIgIgJIgHgMIgDgOIgBgOIABgNIAEgOQACgGAEgFIAHgKIAKgIQAFgEAFgDQAGgCAFgBQAHgCAHABQAKAAAJACQAJADAIAGIgGAIQgHgFgHgCQgIgCgJgBIgLACIgJADQgJAEgHAIQgGAIgFAKQgDAKAAAMQABARACAGQAHAOAFAGIAIAHIAJAFIAKAEIALAAQAIAAAIgBIAOgGIAEAKQgIAEgJACQgJABgJAAIgOgBg");
	this.shape_209.setTransform(-518.1,-51.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#999999").s().p("AgUAtQgFgCgDgDQgDgDgCgGQgBgEAAgHIAAhBIAJAAIAAA+QAAAIAEAFQABAEADACQAEABAEAAIAIgBIAHgEQAGgEANgQIAAg5IAKAAIAABZIgKAAIAAgVQgJAMgGAEQgFAEgFACQgFABgGAAQgFAAgEgBg");
	this.shape_210.setTransform(-534.5,-49.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#999999").s().p("AAVAsQgDgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIABgJIAEgHQAFgGAJgCIAggHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgDgDgAgSAKQgEAEgBAEIgBAIQABAGADAEQADAEAIAAQAFAAAGgEQAGgEAJgIIAAgXg");
	this.shape_211.setTransform(-544.3,-49.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#999999").s().p("AgRBKIAAhSIgQAAIAAgEIAQgEIAAgQQgBgJADgIQADgHAEgGQAFgGAGgCQAGgDAJAAQAJAAAHAEIgEAIQgIgDgFAAQgHAAgFADQgFACgCAEQgDAFgCAHQgBAHAAAIIAAANIAUAAIAAAHIgUAAIAABSg");
	this.shape_212.setTransform(-555.3,-52.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#999999").s().p("AgEBBIAAhZIAIAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQADACAAADQAAAEgDACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_213.setTransform(-561.6,-51.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#999999").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACADAAQAFAAAHgGIAFAGQgEAEgFACQgEACgFAAQgHAAgEgEg");
	this.shape_214.setTransform(-566.9,-50.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#999999").s().p("AgIAsQgIgDgHgGQgFgGgEgJQgCgJAAgKQAAgKADgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAHACAGAEIgGAIQgDgDgHgCQgGgCgFAAQgIAAgGADQgFADgFAFQgEAGgDAHQgCAHAAAHQAAAJACAHQADAHAEAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgBAEgEIAGAIQgHAEgHACQgGACgIAAQgIAAgIgEg");
	this.shape_215.setTransform(-573.9,-49.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#999999").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgJAAQgFAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFQAAgEACgFIADgHQAFgGAKgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgJABIgBgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACADACQAEADABAEQACAEAAAFIAAA6QAAAEACACQACACAFABIgCAHQgJgBgCgDgAgTAKQgCAEgBAEIgBAIQAAAGADAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_216.setTransform(-582.9,-49.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#999999").s().p("AgIAXIAEgMIADgMIgGgTQAEgCADAAQAEAAADACQACADAAAGQAAAIgFAJIgHARg");
	this.shape_217.setTransform(-590.1,-55.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#999999").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_218.setTransform(-594.6,-52);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAHgCAGgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_219.setTransform(-493.1,-74.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_220.setTransform(-503.3,-77.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#999999").s().p("AAaAvIAAhAQAAgKgCgEIgFgEQgDgCgEAAIgIACIgIAFQgMALgJAJIAAA5IgJAAIAAhaIAJAAIAAAXQALgMAGgGQAFgEAEgBQAHgDAGAAQAFAAAEACQAEABACADQADADACAFQABAEAAAGIAABFg");
	this.shape_221.setTransform(-518.4,-75);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#999999").s().p("AgQAsQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgJADgJQAEgIAFgHQAGgGAHgEQAIgEAIAAQAIAAAIAEQAIAEAGAGQAFAHAEAIQADAJAAAJQAAAKgDAJQgEAIgFAHQgGAGgIAEQgIAEgIAAQgIAAgIgEgAgLgjQgHADgDAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQADAGAHADQAFADAGAAQAGAAAHgDQAFgDAFgGQADgFADgHQACgHABgIQgBgHgCgHQgDgHgDgFQgFgGgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_222.setTransform(-528.9,-74.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#999999").s().p("AgEBBIAAhaIAIAAIAABagAgEgzQgCgCAAgDQAAgEACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQADACAAAEQAAADgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_223.setTransform(-536.4,-76.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#999999").s().p("AgEA4QgDgCgBgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAVAAIAAAHIgVAAIAABDQAAAFACADQADACADAAQAEAAAIgGIAFAGQgEAEgFACQgEACgFAAQgHAAgEgEg");
	this.shape_224.setTransform(-541.7,-76.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#999999").s().p("AgEBBIAAhaIAJAAIAABagAgEgzQgCgCAAgDQAAgEACgCQACgCACAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQACACAAAEQAAADgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_225.setTransform(-546.9,-76.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#999999").s().p("AgEA4QgCgCgCgDIgBgKIAAhCIgPAAIAAgEIAPgEIAAgaIAJAAIAAAbIAWAAIAAAHIgWAAIAABDQAAAFADADQACACADAAQAFAAAIgGIAEAGQgEAEgFACQgFACgEAAQgHAAgEgEg");
	this.shape_226.setTransform(-552.2,-76.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAEgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgDgCgCAAQgGAAgGAIQgEAGgIANIAAA2g");
	this.shape_227.setTransform(-557.5,-75);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#999999").s().p("AAWAsQgEgDgBgIQgHAHgGADQgHAFgKAAQgEAAgEgCQgEgBgDgDQgDgDgBgEQgCgFAAgFIACgJIADgHQAGgGAJgCIAfgHIAAgTQAAgGgFgEQgFgEgHAAQgIAAgGADQgGADAAAFIAAACIgKABIAAgDQAAgFACgDQACgEAEgCIAKgEIAMgBIALABQAFACAEACQACADACAEQACAEAAAFIAAA6QAAAEACACQADACAEABIgDAHQgIgBgCgDgAgTAKQgDAEAAAEIgBAIQgBAGAEAEQAEAEAGAAQAGAAAGgEQAGgEAJgIIAAgXg");
	this.shape_228.setTransform(-566.1,-74.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#999999").s().p("AgmBGIAAiJIAKAAIAAAPIAIgJIAHgFQAHgDAJgBQAIABAGADQAHACAEAHQAFAGADAHQADAJAAAJQAAALgEAKQgDAJgGAGQgGAIgIADQgIAEgIAAQgIAAgGgCQgGgDgEgFIAAA3gAgHg7IgIAEQgHAEgGAKIAAAnQAAADACAEQACAEADACQAHAEAJAAQAGAAAHgCQAGgEAFgFQAEgFADgIQACgHAAgJQAAgIgCgGQgCgGgDgFQgEgFgFgCQgFgDgGgBIgIACg");
	this.shape_229.setTransform(-575.6,-72.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#999999").s().p("AgMBAQgHgDgGgHQgFgGgDgJQgCgKAAgLQAAgLACgHQAEgJAFgGQAFgGAIgDQAHgDAIAAQAHAAAGACQAGADAEAFQAEAFADAGQACAGAAAJIAAAGIg9AAIAAAEQAAAJACAHQADAIADAFQAEAFAGADQAHADAHAAQAGAAAFgDQAHgCAGgEIAEAIQgJAFgIACQgGACgJAAQgIAAgHgDgAAaAHQAAgGgCgEQgCgFgDgEQgDgDgEgCQgEgCgFAAQgFAAgEACQgFABgDAEQgEADgCAFQgCAEgCAHIAyAAIAAAAgAgBglIAPgdIALAAIgTAdg");
	this.shape_230.setTransform(-585.8,-76.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_231.setTransform(-592.8,-75);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAIAAQAFAAAGgCQAHgCAGgFIADAIQgIAGgIACQgGACgIAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgEACgEADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_232.setTransform(-453.4,-100.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#999999").s().p("AgRBHQgGgDgFgHQgFgGgCgIQgDgJAAgKQAAgLAEgJQADgIAGgHQAGgGAHgEQAIgDAJAAQAHAAAGACQAGACAFAFIAAg+IAKAAIAACRIgKAAIAAgNIgIAIIgJAFQgHACgIAAQgHAAgHgDgAgHgIQgGACgFAGQgEAEgDAIQgCAHAAAJQAAAHACAHQACAHADAFQAEAFAFADQAFAEAGAAQAEAAAEgCIAJgEQAGgFAGgIIAAgmIgBgIIgEgGQgCgDgFgCQgEgBgHAAQgGAAgHADg");
	this.shape_233.setTransform(-463.6,-103.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#999999").s().p("AgMAtQgHgEgFgGQgGgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAHgDQAIgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQABAHAEAFQAFAFAGADQAGADAGAAQAHAAAFgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_234.setTransform(-478,-100.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#999999").s().p("AgJAsQgHgDgGgGQgGgGgDgJQgEgJAAgKQAAgKAEgJQADgJAGgGQAGgHAIgDQAIgEAJAAQAHAAAHACQAIACAEAEIgEAIQgFgDgFgCQgGgCgHAAQgHAAgFADQgHADgEAFQgEAGgCAHQgDAHAAAHQAAAJADAHQABAHAGAFQAEAFAGADQAGADAHAAQAHAAAFgCQAEgBAGgEIAEAIQgGAEgGACQgIACgHAAQgIAAgJgEg");
	this.shape_235.setTransform(-486.6,-100.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_236.setTransform(-493.5,-102.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#999999").s().p("AgEAuIghhbIALAAIAaBRIAbhRIAKAAIggBbg");
	this.shape_237.setTransform(-500.1,-100.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_238.setTransform(-506.9,-100.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgCgJQgDgJAAgLQAAgKADgJQADgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJADAHQACAHADAFQAFAFAFADQAGADAHAAQAGAAAGgCQAHgCAGgFIADAIQgIAGgIACQgHACgHAAQgJAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgDADgDAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_239.setTransform(-515.4,-100.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#999999").s().p("AgQAuQgHgCgHgEIAEgIIAMAFQAGADAHAAQAIAAAHgEIAFgFQACgDAAgEQAAgNgbgLQgMgFgFgFQgFgGAAgIQAAgGADgEQACgEAFgDQAEgDAGgBQAGgCAHAAQAHAAAGACIAMAFIgEAIIgLgFQgGgCgGAAQgIAAgGAEQgDABgBADQgCADAAADQAAAFACADQACADAEACIARAJQAOAHAEAEIAEAGIABAJQAAAGgCAFQgDAEgEAEQgFADgGABQgGACgGAAQgIAAgHgCg");
	this.shape_240.setTransform(-524.5,-100.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#999999").s().p("AgVAuIAAhZIAJAAIAAAXQAFgIAIgLQAHgGAGAAQAFAAADAEIgEAIQgDgCgEAAQgEAAgHAIQgEAGgIANIAAA2g");
	this.shape_241.setTransform(-536.1,-100.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#999999").s().p("AgMAtQgIgEgFgGQgFgHgDgJQgCgJAAgLQAAgKACgJQADgIAGgGQAGgGAGgDQAIgEAIAAQAHAAAGADQAGACAEAFQAFAFACAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHAEAFQAEAFAFADQAGADAIAAQAFAAAHgCQAFgCAHgFIAEAIQgJAGgHACQgIACgIAAQgIAAgHgDgAAagLQAAgGgCgFQgBgFgEgEQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDADQgEADgCAGQgCAFgCAHIAyAAIAAAAg");
	this.shape_242.setTransform(-544.6,-100.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#999999").s().p("AgEBBIAAhZIAJAAIAABZgAgEgzQgCgCAAgEQAAgDACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACACAAADQAAAEgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_243.setTransform(-551.5,-102.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#999999").s().p("AA4AuIAAhAQAAgJgCgEIgEgEQgDgCgFABIgIABIgIAFQgNALgIAKIAAA3IgJAAIAAhAQAAgJgCgEIgEgEQgDgCgEABIgIABIgJAFQgNALgIAKIAAA3IgJAAIAAhZIAJAAIAAAXQALgNAGgEQAFgFAFgBQAGgDAHABQAGAAAEABQAEACACAEQACACABAGIABAKQAKgNAHgEQAFgFAFgBQAGgDAGABQAGgBADACIAHAEQADADABAEIABAMIAABDg");
	this.shape_244.setTransform(-562.2,-100.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#999999").s().p("AgMAtQgHgEgGgGQgFgHgDgJQgCgJAAgLQAAgKACgJQAEgIAFgGQAFgGAIgDQAHgEAIAAQAHAAAGADQAGACAEAFQAEAFADAHQACAHAAAIIAAAHIg9AAIAAADQAAAJACAHQADAHADAFQAEAFAGADQAHADAHAAQAGAAAFgCQAHgCAGgFIAEAIQgJAGgIACQgGACgJAAQgIAAgHgDgAAagLQAAgGgCgFQgCgFgDgEQgDgEgEgCQgEgCgFAAQgEAAgFACQgFACgDADQgEADgCAGQgDAFgBAHIAyAAIAAAAg");
	this.shape_245.setTransform(-575,-100.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#999999").s().p("AgVAuIAAhZIAKAAIAAAXQADgIAJgLQAHgGAGAAQAFAAADAEIgFAIQgCgCgDAAQgGAAgGAIQgEAGgHANIAAA2g");
	this.shape_246.setTransform(-582,-100.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#999999").s().p("AgmBCIAAiDIAlAAQAIAAAIACQAIACAFAFQAFAFADAHQADAHAAAKQAAAKgDAIQgEAJgGAEQgGAGgIADQgJACgJAAIgVgBIAAA0gAgbAFIASABQAIAAAGgCQAHgCAFgDQAFgEACgGQADgGAAgJQAAgIgCgFQgCgGgEgDQgEgEgGgCQgGgBgHgBIgXAAg");
	this.shape_247.setTransform(-590.7,-102.7);

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

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_248.setTransform(1209.3,61.9);

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-745,62.5,1,1,0,0,0,30.7,11.6);
	this.instance_16.alpha = 0.301;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-918.2,62.5,1,1,0,0,0,30.7,11.6);
	this.instance_17.alpha = 0.301;

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_249.setTransform(-697.5,61.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_250.setTransform(-870.9,61.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#666666").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_251.setTransform(-1044.2,61.9);

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

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_252.setTransform(1035.9,61.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_253.setTransform(862.6,61.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_254.setTransform(689.3,61.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_255.setTransform(515.9,61.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_256.setTransform(342.6,61.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_257.setTransform(169.2,61.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_258.setTransform(-4.1,61.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_259.setTransform(-177.4,61.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_260.setTransform(-350.8,61.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#585858").s().p("AtJC0IAAlnIaTAAIAAFng");
	this.shape_261.setTransform(-524.1,61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.instance_17},{t:this.instance_16},{t:this.shape_248},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1128.4,-117,2422.4,197);


// stage content:
(lib._90s_700x326_French = function(mode,startPosition,loop) {
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
	this.instance_3.setTransform(337.1,119.9,1,1,0,0,0,5.1,-17.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({alpha:1},10).wait(19).to({x:336.7},0).to({x:-316.2,alpha:0},31,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// BG
	this.instance_4 = new lib.G_BG("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1135,153.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},10).to({x:770.1},25,cjs.Ease.get(1)).wait(29).to({x:769.1},0).to({x:116.2},31,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({x:-257.9},24,cjs.Ease.get(1)).wait(40).to({startPosition:0},0).to({x:-589},20,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.6,199.5,2422.4,197);
// library properties:
lib.properties = {
	width: 700,
	height: 326,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/90s_700x326_French_atlas_.png", id:"90s_700x326_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;