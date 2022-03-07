(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"700x326_atlas_", frames: [[0,328,346,263],[0,0,700,326],[348,328,215,326]]}
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



(lib.Alan_700x326 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG_700x326 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Warren_700x326 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.G_Warren = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Warren_700x326();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-163,215,326);


(lib.G_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54274E").s().p("ABaBPIAAhsQAAgNgCgFQgEgIgMAAQgLgBgMAJQgMAHgRATIgHAHIAABdIgZAAIAAhsQAAgNgCgFQgEgIgMAAQgLAAgOAJQgNAJgVAXIAABdIgZAAIAAiZIAZAAIAAAgQAMgOAKgHQAIgHALgEQALgEAKAAQAKAAAHACQAHACAFAFQAFAEACAIQADAHABAIIAVgVQAJgHAKgEQALgEALAAQALAAAHADQAIACAEAFQAFAGADAIQADAIgBALIAAByg");
	this.shape.setTransform(161.9,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54274E").s().p("AAjBLQgHgEgBgLQgKAJgHADQgGAEgIACQgJADgIAAQgJAAgIgDQgHgDgGgFQgGgGgCgHQgDgHAAgKQAAgIACgHQACgHAFgFQAEgGAGgEQAHgDAIgBIA1gNIAAgcQgBgJgGgFQgIgFgOAAQgLAAgHADQgFAEAAAGIACAGIgbAGQgCgFAAgFQAAgIADgGQAFgGAHgFQAIgEAJgDQALgCALAAQALAAAKACQAJADAHAFQAGAFAEAHQAEAHAAAJIAABeQABAGALACIgGAVQgQgBgGgFgAggAVQgFAJABAIQgBAJAGAGQAFAFAKAAQAIAAAIgEQAIgEARgMIAAggg");
	this.shape_1.setTransform(139.5,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54274E").s().p("AgXBLQgNgFgJgLQgKgLgFgPQgFgPAAgSQAAgRAFgPQAFgPAKgLQAJgLAOgFQANgGAQAAQANAAALAEQALAFAIAIQAIAJAEALQAEAMAAAPIAAAPIhoAAQAAANADALQAEALAGAIQAHAIAJAEQAJAEALAAQAKAAAJgEQAJgDAMgJIAKAUQgRALgMAEQgLAEgPAAQgPAAgOgGgAAmgVQAAgIgCgHQgCgHgFgFQgEgEgGgDQgGgCgIAAQgHAAgHACQgHADgFAEQgFAFgEAHQgEAHgCAIIBKAAIAAAAg");
	this.shape_2.setTransform(123.5,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#54274E").s().p("AgqBPIAAiZIAaAAIAAAcQAOgTAIgGQAIgHAJAAQAJAAALAKIgNAWQgHgGgEgBQgHAAgJALQgIAKgLAUIAABbg");
	this.shape_3.setTransform(111.1,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#54274E").s().p("AgfB5QgMgGgIgKQgJgLgFgOQgEgOAAgRQAAgSAFgQQAGgPALgLQALgMANgGQAQgGAPAAQANAAAIACQAJADAHAFIAAhkIAZAAIAAD3IgZAAIAAgUQgLAMgNAGQgMAGgOAAQgOAAgMgFgAgLgHQgJAFgHAHQgIAIgDALQgEALAAAOQAAALADAKQADAKAGAHQAGAHAHAEQAIAEAIAAQAHAAAHgDQAIgCAHgFQAHgGAKgLIAAg2QAAgOgDgGQgDgFgJgEQgIgDgLAAQgMAAgKAEg");
	this.shape_4.setTransform(94.2,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#54274E").s().p("AgXBLQgNgFgJgLQgKgLgFgPQgFgPAAgSQAAgRAFgPQAFgPAKgLQAJgLAOgFQANgGAQAAQANAAALAEQALAFAIAIQAIAJAEALQAEAMAAAPIAAAPIhoAAQAAANADALQAEALAGAIQAHAIAJAEQAJAEALAAQAKAAAJgEQAJgDAMgJIAKAUQgRALgMAEQgLAEgPAAQgPAAgOgGgAAmgVQAAgIgCgHQgCgHgFgFQgEgEgGgDQgGgCgIAAQgHAAgHACQgHADgFAEQgFAFgEAHQgEAHgCAIIBKAAIAAAAg");
	this.shape_5.setTransform(69.3,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#54274E").s().p("AAnB8IAAhtQAAgNgDgEQgEgIgLAAQgNAAgMAJQgNAIgVAXIAABeIgZAAIAAj3IAZAAIAAB9QANgNAIgHQAJgHAKgEQALgEALAAQAKAAAHADQAIACAFAFQAFAGACAIQADAIAAAKIAABzg");
	this.shape_6.setTransform(52.1,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#54274E").s().p("AgMBcQgIgJAAgQIAAhlIgaAAIAAgPIAagHIAAgtIAYAAIAAAtIApAAIAAAWIgpAAIAABWIABAHIAAAKQABAHAIAAQAIAAAPgLIAKARQgOAMgIAEQgIAEgJAAQgMAAgIgKg");
	this.shape_7.setTransform(37.8,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#54274E").s().p("AAmB8IAAhtQAAgNgCgEQgEgIgMAAQgMAAgMAJQgOAIgTAXIAABeIgaAAIAAj3IAaAAIAAB9QANgNAHgHQAJgHAKgEQALgEALAAQAKAAAIADQAHACAFAFQAFAGADAIQACAIAAAKIAABzg");
	this.shape_8.setTransform(14.9,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#54274E").s().p("AgMBcQgIgJAAgQIAAhlIgaAAIAAgPIAagHIAAgtIAYAAIAAAtIApAAIAAAWIgpAAIAABWIABAHIAAAKQABAHAIAAQAIAAAPgLIAKARQgOAMgIAEQgIAEgJAAQgMAAgIgKg");
	this.shape_9.setTransform(0.6,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#54274E").s().p("AgMBwIAAiZIAZAAIAACZgAgLhTQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_10.setTransform(-8.8,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#54274E").s().p("AAlBPIgjhfIgCgJIgBAJIgkBfIgWAAIgzidIAcAAIAlB6IAAAEIABgEIAihfIgKgbIAaAAIApB5IAAAFIAAgFIAnh5IAZAAIg1Cdg");
	this.shape_11.setTransform(-24.3,3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#54274E").s().p("ABaBPIAAhsQAAgNgCgFQgEgIgMAAQgLgBgMAJQgLAHgSATIgHAHIAABdIgZAAIAAhsQABgNgDgFQgEgIgMAAQgMAAgNAJQgOAJgTAXIAABdIgaAAIAAiZIAaAAIAAAgQALgOAKgHQAIgHALgEQALgEAKAAQAKAAAHACQAHACAFAFQAFAEACAIQADAHABAIIAVgVQAJgHAKgEQAMgEAKAAQALAAAHADQAIACAEAFQAFAGADAIQACAIAAALIAAByg");
	this.shape_12.setTransform(-58.5,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#54274E").s().p("AAjBLQgHgEgBgLQgKAJgHADQgGAEgIACQgJADgIAAQgJAAgIgDQgHgDgGgFQgGgGgCgHQgDgHAAgKQAAgIACgHQACgHAEgFQAFgGAGgEQAHgDAIgBIA1gNIAAgcQAAgJgIgFQgHgFgNAAQgMAAgGADQgGAEAAAGIABAGIgaAGQgCgFAAgFQAAgIADgGQAFgGAHgFQAIgEAKgDQAKgCALAAQALAAAKACQAJADAHAFQAHAFADAHQAEAHAAAJIAABeQABAGALACIgGAVQgQgBgGgFgAggAVQgEAJAAAIQAAAJAFAGQAFAFAKAAQAIAAAIgEQAIgEARgMIAAggg");
	this.shape_13.setTransform(-80.9,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#54274E").s().p("AgXBLQgNgFgJgLQgKgLgFgPQgFgPAAgSQAAgRAFgPQAFgPAKgLQAJgLAOgFQANgGAQAAQANAAALAEQALAFAIAIQAIAJAEALQAEAMAAAPIAAAPIhoAAQAAANADALQAEALAGAIQAHAIAJAEQAJAEALAAQAKAAAJgEQAJgDAMgJIAKAUQgRALgMAEQgLAEgPAAQgPAAgOgGgAAmgVQAAgIgCgHQgCgHgFgFQgEgEgGgDQgGgCgIAAQgHAAgHACQgHADgFAEQgFAFgEAHQgEAHgCAIIBKAAIAAAAg");
	this.shape_14.setTransform(-96.9,3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#54274E").s().p("AgMBcQgIgJAAgQIAAhlIgaAAIAAgPIAagHIAAgtIAYAAIAAAtIApAAIAAAWIgpAAIAABWIABAHIAAAKQABAHAIAAQAIAAAPgLIAKARQgOAMgIAEQgIAEgJAAQgMAAgIgKg");
	this.shape_15.setTransform(-110.3,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#54274E").s().p("AgXBLQgNgFgJgLQgKgLgFgPQgFgPAAgSQAAgRAFgPQAFgPAKgLQAJgLAOgFQANgGAQAAQANAAALAEQALAFAIAIQAIAJAEALQAEAMAAAPIAAAPIhoAAQAAANADALQAEALAGAIQAHAIAJAEQAJAEALAAQAKAAAJgEQAJgDAMgJIAKAUQgRALgMAEQgLAEgPAAQgPAAgOgGgAAmgVQAAgIgCgHQgCgHgFgFQgEgEgGgDQgGgCgIAAQgHAAgHACQgHADgFAEQgFAFgEAHQgEAHgCAIIBKAAIAAAAg");
	this.shape_16.setTransform(-131.8,3.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#54274E").s().p("AAnB8IAAhtQAAgNgDgEQgEgIgLAAQgNAAgMAJQgNAIgVAXIAABeIgZAAIAAj3IAZAAIAAB9QANgNAIgHQAJgHAKgEQALgEAKAAQALAAAHADQAIACAFAFQAFAGACAIQADAIAAAKIAABzg");
	this.shape_17.setTransform(-149,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#54274E").s().p("AgNBwIAAjIIhLAAIAAgXICxAAIAAAXIhLAAIAADIg");
	this.shape_18.setTransform(-167.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.4,-22.2,356.8,44.6);


(lib.G_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG_700x326();
	this.instance.parent = this;
	this.instance.setTransform(-350,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-163,700,326);


(lib.G_Alan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Alan_700x326();
	this.instance.parent = this;
	this.instance.setTransform(-173,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-131.5,346,263);


// stage content:
(lib._700x326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Text
	this.instance = new lib.G_Text("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(204.4,43.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59).wait(26));

	// Alan
	this.instance_1 = new lib.G_Alan("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.6,219.3,0.813,0.813,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:0.88,scaleY:0.88,x:334.4,y:210.4,alpha:1},15).to({regX:0,regY:0,scaleX:1,scaleY:1,x:334,y:194.5},60,cjs.Ease.get(1)).wait(6));

	// Warren
	this.instance_2 = new lib.G_Warren("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(611.6,192,0.823,0.823,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({scaleX:0.88,scaleY:0.88,x:605.4,y:182.6,alpha:1},13).to({regX:0,regY:0,scaleX:1,scaleY:1,x:592.5,y:163},60,cjs.Ease.get(1)).wait(1));

	// BG
	this.instance_3 = new lib.G_BG("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(350,163);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.07,scaleY:1.07},84,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,163,700,326);
// library properties:
lib.properties = {
	width: 700,
	height: 326,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/700x326_atlas_.png", id:"700x326_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;