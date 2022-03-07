(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"50s_337x334_French_atlas_", frames: [[0,447,313,281],[0,0,475,445],[315,447,252,337]]}
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



(lib.Alan = function() {
	this.spriteSheet = ss["50s_337x334_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG_475x445 = function() {
	this.spriteSheet = ss["50s_337x334_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Warren = function() {
	this.spriteSheet = ss["50s_337x334_French_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.G_Warren = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Warren();
	this.instance.parent = this;
	this.instance.setTransform(-149,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-168,252,337);


(lib.G_Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54284E").s().p("Ag6BEQgWgXAAgrQAAgsAXgYQAXgZAjAAQAjAAAXAYQAWAYAAArIAAAIIiCAAQABAdAPAPQAPAQAVAAQAQAAAMgJQAMgJAGgTIAfAEQgHAbgUAPQgUAPgeAAQgmAAgXgYgAAygQQgCgWgKgLQgOgRgXAAQgTAAgOANQgOAOgCAXIBiAAIAAAAg");
	this.shape.setTransform(46.6,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54284E").s().p("AgvBaIAAivIAbAAIAAAbQALgTAIgGQAIgGAKAAQAPAAAQAKIgKAbQgMgGgLAAQgJAAgHAGQgIAGgDAKQgFAQAAATIAABbg");
	this.shape_1.setTransform(33,-17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54284E").s().p("AgOB6IAAiwIAdAAIAACwgAgOhWIAAgjIAdAAIAAAjg");
	this.shape_2.setTransform(22.2,-20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#54284E").s().p("AhABOQgQgOAAgWQAAgNAGgLQAFgLAKgGQAJgGANgDIAagEQAkgFAQgGIAAgHQABgTgJgHQgLgKgWAAQgVAAgKAHQgKAHgFATIgdgEQAEgTAJgLQAJgMASgGQARgGAVAAQAXAAAOAFQAPAGAGAIQAHAIACAMQABAIABAUIAAAmQAAAqABALQADALAFAKIgfAAQgEgJgCgMQgQAOgQAFQgOAGgSAAQgdAAgPgOgAgHALQgSADgIADQgHADgEAHQgFAGAAAIQAAAMAKAIQAJAIARAAQAQAAAOgIQANgHAHgNQAEgLAAgTIAAgLQgQAGggAFg");
	this.shape_3.setTransform(8.9,-17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#54284E").s().p("AAqBaIAAhqQAAgSgDgJQgEgJgJgGQgJgFgMAAQgSAAgOAMQgNAMAAAiIAABfIgfAAIAAivIAbAAIAAAZQAUgdAkAAQAPAAAOAGQANAFAGAKQAHAJADANQABAIAAAVIAABrg");
	this.shape_4.setTransform(-10,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#54284E").s().p("AAqBaIAAhqQAAgSgDgJQgEgJgJgGQgJgFgMAAQgSAAgOAMQgNAMAAAiIAABfIgfAAIAAivIAbAAIAAAZQAUgdAkAAQAPAAAOAGQANAFAGAKQAHAJADANQABAIAAAVIAABrg");
	this.shape_5.setTransform(-28.9,-17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#54284E").s().p("Ag7BEQgWgXgBgtQAAgwAbgXQAXgUAgAAQAlAAAWAYQAYAYAAAqQAAAhgLATQgKAUgUAKQgTALgXAAQgkAAgXgYgAgkgyQgPARAAAhQAAAiAPARQAOARAWAAQAWAAAPgRQAPgRAAgiQAAghgPgQQgPgRgWAAQgWAAgOAQg");
	this.shape_6.setTransform(-47.8,-17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#54284E").s().p("AgOB6IAAiwIAdAAIAACwgAgOhWIAAgjIAdAAIAAAjg");
	this.shape_7.setTransform(-61,-20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#54284E").s().p("AgxBOQgSgOgFgcIAdgFQADASALAJQALAKAUAAQAVAAAJgJQAKgIAAgLQAAgLgIgFQgHgEgYgGQgggJgMgFQgNgGgHgLQgGgKAAgNQAAgMAFgKQAFgKAKgHQAHgFAMgDQAMgEAOAAQATAAAQAGQAQAGAHAKQAIAKACARIgdAEQgCgNgJgIQgKgHgQAAQgVAAgJAGQgIAHAAAJQAAAGADAFQAEAFAIADIAZAHQAgAJAMAFQANAFAHAKQAHAKAAAPQAAAPgIAOQgJANgRAHQgQAHgVAAQghAAgSgOg");
	this.shape_8.setTransform(-73.4,-17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#54284E").s().p("AgOB6IAAiwIAdAAIAACwgAgOhWIAAgjIAdAAIAAAjg");
	this.shape_9.setTransform(-85.5,-20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#54284E").s().p("AgNBYIhDivIAgAAIAlBpIALAjIALghIAnhrIAfAAIhDCvg");
	this.shape_10.setTransform(-97.8,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#54284E").s().p("Ag7BEQgWgXgBgtQAAgwAbgXQAXgUAgAAQAlAAAWAYQAYAYAAAqQAAAhgLATQgKAUgUAKQgTALgXAAQgkAAgXgYgAgkgyQgPARAAAhQAAAiAPARQAOARAWAAQAWAAAPgRQAPgRAAgiQAAghgPgQQgPgRgWAAQgWAAgOAQg");
	this.shape_11.setTransform(-125.2,-17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#54284E").s().p("AgnBUQgNgGgHgJQgHgJgCgNQgDgJAAgTIAAhsIAfAAIAABhQAAAXACAIQADAMAIAHQAKAHANAAQAMAAAMgHQAMgHAFgMQAFgMAAgXIAAhdIAdAAIAACvIgaAAIAAgaQgVAegiAAQgQAAgNgGg");
	this.shape_12.setTransform(-144.2,-17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#54284E").s().p("AgmBwQgSgMgKgUQgJgVgBgbQABgbAIgUQAJgWASgLQARgMAWAAQAPAAANAHQAMAHAIALIAAhYIAdAAIAADzIgbAAIAAgWQgRAaggAAQgVAAgRgMgAgfgTQgNARAAAiQAAAiANAQQAPARASAAQAUAAAOgQQAOgQgBghQABgjgOgRQgOgRgVAAQgTAAgNAQg");
	this.shape_13.setTransform(-163.6,-20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#54284E").s().p("AAqBaIAAhqQAAgSgEgJQgDgJgJgGQgJgFgMAAQgSAAgOAMQgOAMAAAiIAABfIgeAAIAAivIAbAAIAAAZQATgdAkAAQAQAAAOAGQANAFAHAKQAGAJADANQABAIABAVIAABrg");
	this.shape_14.setTransform(-191.3,-17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#54284E").s().p("Ag2BwQgWgMgJgWQgKgWAAgnIAAiMIAhAAIAACMQAAAgAGAPQAFAPAPAIQAOAIAVAAQAiAAAQgQQAPgQAAguIAAiMIAgAAIAACMQAAAlgIAVQgJAWgVANQgWAOgjAAQghAAgWgMg");
	this.shape_15.setTransform(-213,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.2,-41.3,295,42);


(lib.G_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG_475x445();
	this.instance.parent = this;
	this.instance.setTransform(-237.5,-222.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.5,-222.5,475,445);


(lib.G_Alan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Alan();
	this.instance.parent = this;
	this.instance.setTransform(-158,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-137,313,281);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.G_Warren("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.8,2.7,0.853,0.853);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNANIgBgDQgFgJABgFQACgGAFgDQAEgEAHAAQAGAAAEAEIAGAGQAGAKgIAIQgCACgIADIgEABg");
	this.shape.setTransform(105.7,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.2,-140.5,233.8,287.5);


// stage content:
(lib._50s_337x334_French = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_98 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(98).call(this.frame_98).wait(1));

	// Alan
	this.instance = new lib.G_Alan("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(114.6,231.3,0.732,0.732,0,0,0,0.1,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:0.2,scaleX:0.74,scaleY:0.74,x:115.7,y:230.4,alpha:1},20).to({regY:0.1,scaleX:0.77,scaleY:0.77,x:121.1,y:225.5},69,cjs.Ease.get(1)).wait(1));

	// Warren
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.8,226.1,0.751,0.751);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({scaleX:0.77,scaleY:0.77,x:273.9,y:223.5,alpha:1},21,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:0.81,scaleY:0.81,x:269.6,y:217.7},51,cjs.Ease.get(1)).to({regY:0.2,scaleX:0.81,scaleY:0.81,x:269.5,y:217.6},8).wait(1));

	// Text2
	this.instance_2 = new lib.G_Text2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(188.5,45.8,0.751,0.751);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({alpha:1},25).wait(14));

	// BG
	this.instance_3 = new lib.G_BG("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(178.3,167,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.78,scaleY:0.78},98,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.5,167,356.5,334);
// library properties:
lib.properties = {
	width: 337,
	height: 334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/50s_337x334_French_atlas_.png", id:"50s_337x334_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;