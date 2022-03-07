(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"60s_700x326_French_atlas_", frames: [[0,328,700,326],[0,984,700,326],[0,1312,700,326],[0,0,700,326],[0,656,700,326]]}
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



(lib.AlanFront = function() {
	this.spriteSheet = ss["60s_700x326_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AlanFull = function() {
	this.spriteSheet = ss["60s_700x326_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AlanFullBlur = function() {
	this.spriteSheet = ss["60s_700x326_French_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.WomanFront = function() {
	this.spriteSheet = ss["60s_700x326_French_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.WomenFull = function() {
	this.spriteSheet = ss["60s_700x326_French_atlas_"];
	this.gotoAndStop(4);
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


(lib.M_AlanBGBlur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AlanFullBlur();
	this.instance.parent = this;
	this.instance.setTransform(-350,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.M_AlanBGBlur, new cjs.Rectangle(-350,-163,700,326), null);


(lib.G_WomenBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WomenFull();
	this.instance.parent = this;
	this.instance.setTransform(-350,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-163,700,326);


(lib.G_IndustryTotalNumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAnIA8hNIAHAAIg8BNgAAKAeQgGgFAAgIQAAgHAGgGQAFgEAIgBQAIABAFAEQAFAGAAAHQAAAIgFAFQgFAGgIgBQgIABgFgGgAAOAIQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQADgDAAgFQAAgFgDgEQgEgDgFAAQgFAAgEADgAgjgEQgFgFAAgIQAAgIAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAFQgFAFgIgBQgHABgGgFgAgegaQgEAEAAAFQAAAFAEADQADAEAFAAQAGAAADgEQADgDAAgFQAAgFgDgEQgEgDgFAAQgFAAgDADg");
	this.shape.setTransform(289.2,0,1.042,1.042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAJAAIAAAHIgJAAIAAASgAgMAKIASAAIAAgag");
	this.shape_1.setTransform(282,-0.1,1.042,1.042);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAjIAAgFIAZgfQAFgJAAgGQAAgLgKABQgDgBgDACIgJAHIgFgGIAEgDQAIgHAJAAQASAAAAASIgBAIQgDAGgHAJIgPAUIAcAAIAAAIg");
	this.shape_2.setTransform(274.1,-0.1,1.042,1.042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgOAAIAAgIIAWAAIAABFg");
	this.shape_3.setTransform(268.8,-0.1,1.042,1.042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgCgJIACAAIADABIABADQAAAFgFAKg");
	this.shape_4.setTransform(277.8,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAJAAIAAAHIgJAAIAAASgAgMAKIASAAIAAgag");
	this.shape_5.setTransform(223.4,-0.1,1.042,1.042);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAFAAQAEAAAEgEQAEgEAAgGQAAgLgMAAIgFAAIAAgGQAGgBADgFQAEgFAAgFQAAgIgGAAQgEAAgIAGIgEgGQAFgFADgBIAJgCQAGAAAFAEQAEAEAAAHQAAAFgEAFQgBADgFAEQANACAAAOQAAAKgHAGQgGAHgJAAQgHAAgIgEg");
	this.shape_6.setTransform(215.6,-0.1,1.042,1.042);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgOAAIAAgIIAXAAIAABFg");
	this.shape_7.setTransform(210.6,-0.1,1.042,1.042);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgCgJIACAAIADABIABADQAAAFgFAKg");
	this.shape_8.setTransform(219.4,3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAgIADgIQAHAEAGAAQAEAAAEgEQADgEAAgGQAAgLgLAAIgFAAIAAgGQAGgCADgEQAEgEABgGQAAgIgHAAQgEAAgIAGIgFgGQAFgEAEgCQAFgCAEAAQAGAAAEAEQAFAEAAAHQAAAFgEAFQgCAEgEADQANACAAAOQAAAKgHAGQgHAHgIAAQgIAAgHgEg");
	this.shape_9.setTransform(159.9,-0.1,1.042,1.042);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgNAAIAAgIIAWAAIAABFg");
	this.shape_10.setTransform(152.1,-0.1,1.042,1.042);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgOAAIAAgIIAXAAIAABFg");
	this.shape_11.setTransform(147.8,-0.1,1.042,1.042);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgDgJIADAAIADABIABADQAAAFgFAKg");
	this.shape_12.setTransform(155.8,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAiIgJgDIAEgIQAHAFAFgBQAFAAAEgEQAEgEAAgGQAAgMgKgCQgDgBgKAAIgBAAIAAghIAeAAIAAAIIgVAAIAAARQALAAAFAGQAHAEAAAMQAAAKgGAHQgGAHgIgBIgIgBg");
	this.shape_13.setTransform(95.4,0,1.042,1.042);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAgQgHgFAAgHQAAgHAKgJIAGgFIgHgGQgGgFAAgIQAAgHAGgFQAFgEAIAAQAHAAAFAEQAFAEgBAHQAAAHgFAGIgHAGIAIAFQAJAHAAAIQgBAIgGAFQgGAGgJAAQgJAAgFgFgAgGAKQgFAFAAAFQAAAJALAAQAMAAAAgKQAAgEgGgFIgGgHgAgJgUQAAAEAEAEIAFAGIAFgFQAEgFAAgFQAAgIgJABQgJgBAAAJg");
	this.shape_14.setTransform(87.1,-0.1,1.042,1.042);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgDgJIADAAIADABIABADQAAAFgFAKg");
	this.shape_15.setTransform(91,3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAiQgDAAgGgDIAEgIQAHAFAFgBQAFAAAEgEQAEgEAAgGQAAgMgKgCQgDgBgKAAIgBAAIAAghIAeAAIAAAIIgWAAIAAARQALAAAGAGQAHAEAAAMQAAAKgGAHQgGAHgIgBIgIgBg");
	this.shape_16.setTransform(32.3,0,1.042,1.042);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAEQAAgRAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgLAAgFADQgDACgCADQgEAFgCALQAJgEAHAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAgggAgLADQABAZALAAQAFAAADgEQAEgFAAgGQAAgNgLAAQgFAAgIADg");
	this.shape_17.setTransform(24,0,1.042,1.042);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgCgJIACAAIADABIABADQAAAFgFAKg");
	this.shape_18.setTransform(28,3.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAFAAQAEAAAEgEQAEgEAAgGQAAgLgMAAIgFAAIAAgGQAGgBADgFQAEgFAAgFQAAgIgGAAQgEAAgIAGIgEgGQAFgEAEgCQAFgCADAAQAGAAAFAEQAEAEAAAHQAAAFgDAFQgCADgFAEQANACAAAOQAAAKgHAGQgGAHgJAAQgHAAgIgEg");
	this.shape_19.setTransform(-31.2,-0.1,1.042,1.042);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAIAAIAAAHIgIAAIAAASgAgMAKIASAAIAAgag");
	this.shape_20.setTransform(-39,-0.1,1.042,1.042);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgDgJIADAAIADABIABADQAAAFgFAKg");
	this.shape_21.setTransform(-35.2,3.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAiQgEAAgGgDIAEgIQAHAFAFgBQAFAAAEgEQAEgEAAgGQAAgMgKgCQgDgBgKAAIgBAAIAAghIAeAAIAAAIIgVAAIAAARQALAAAFAGQAHAEAAAMQAAAKgGAHQgGAHgIgBIgHgBg");
	this.shape_22.setTransform(-94.2,0,1.042,1.042);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgbAAIAAgGIAegtIAFAAIAAAsIAJAAIAAAHIgJAAIAAASgAgLAKIARAAIAAgag");
	this.shape_23.setTransform(-102.2,-0.1,1.042,1.042);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgCgJIACAAIADABIABADQAAAFgFAKg");
	this.shape_24.setTransform(-98.5,3.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAFAAQAEAAAEgEQAEgEAAgGQAAgLgMAAIgEAAIAAgGQAFgBADgFQAEgFAAgFQAAgIgGAAQgEAAgIAGIgEgGQAFgEAEgCQAFgCADAAQAGAAAFAEQAEAEAAAHQAAAFgDAFQgCADgFAEQANACAAAOQAAAKgHAGQgGAHgJAAQgHAAgIgEg");
	this.shape_25.setTransform(-157.3,-0.1,1.042,1.042);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAIAAIAAAHIgIAAIAAASgAgMAKIASAAIAAgag");
	this.shape_26.setTransform(-165.1,-0.1,1.042,1.042);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgDgJIADAAIADABIABADQAAAFgFAKg");
	this.shape_27.setTransform(-161.1,3.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAgQgHgFABgHQgBgHAKgJIAGgFIgHgGQgGgFAAgIQAAgHAGgFQAFgEAHAAQAIAAAFAEQAFAEgBAHQAAAHgFAGIgGAGIAHAFQAJAHAAAIQgBAIgGAFQgGAGgJAAQgJAAgFgFgAgGAKQgFAFAAAFQAAAJALAAQAMAAAAgKQAAgEgGgFIgGgHgAgJgUQAAAEAEAEIAFAGIAFgFQAEgFAAgFQAAgIgJABQgJgBAAAJg");
	this.shape_28.setTransform(-220.2,-0.1,1.042,1.042);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSAgIADgIQAHAEAGAAQAEAAAEgEQAEgEgBgGQAAgLgLAAIgFAAIAAgGQAHgCACgEQAEgEABgGQgBgIgGAAQgEAAgIAGIgFgGQAGgEADgCQAFgCAEAAQAPAAAAAPQAAAFgDAFIgHAHQANACAAAOQAAAKgGAGQgIAHgIAAQgIAAgHgEg");
	this.shape_29.setTransform(-228.4,-0.1,1.042,1.042);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgCgJIACAAIADABIABADQAAAFgFAKg");
	this.shape_30.setTransform(-224.7,3.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAgIADgIQAHAEAFAAQAFAAAEgEQAEgEAAgGQAAgLgMAAIgFAAIAAgGQAGgCADgEQAEgEAAgGQAAgIgGAAQgEAAgIAGIgFgGIAJgGQAFgCAEAAQAOAAAAAPQAAAFgDAFIgGAHQANACAAAOQAAAKgHAGQgHAHgJAAQgHAAgHgEg");
	this.shape_31.setTransform(-283.2,-0.1,1.042,1.042);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAjIAAgFIAZgfQAFgIAAgHQAAgLgKABQgDgBgDACIgJAHIgFgGIAEgDQAIgHAJAAQASAAAAASQAAAEgCAEQgBAGgIAJIgPAUIAcAAIAAAIg");
	this.shape_32.setTransform(-291.2,-0.1,1.042,1.042);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAKIACgFIABgFIgCgJIACAAIADABIABADQAAAFgFAKg");
	this.shape_33.setTransform(-286.9,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293.4,-4.1,587,8.6);


(lib.G_Headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBBDIAAgKIgLgBIgJgDIgOgIIAHgLIANAIQAFACAJABIAAgoIgHgFIgLgFIgHgHIgEgHIgBgIQAAgGACgFQACgEAEgEQADgEAGgDIANgDIAAgKIAGAAIAAAKQALABAGABIAOAHIgHALIgLgFQgGgCgHgBIAAAnIAEACQAOAHADACQAEAEADAFQACAGAAAFQAAAHgDAGQgCAGgFAEIgIAFIgMADIAAAKgAAFAsQAIgBAEgEQAEgFAAgGQAAgGgBgCQgBgCgJgHIgFgDgAgOgmQgEAEAAAGQAAAEACADIAFAFIAKAHIAAgjQgIACgFAEg");
	this.shape.setTransform(241.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAlQgHgDgFgFQgFgFgCgIQgDgHAAgJQAAgIADgHQACgIAFgFQAFgFAHgDQAHgDAGAAQAHAAAGACQAFADAEAEQADAEACAGQACAGABAHIAAAHIgzAAQAAAGABAFQACAGAEAEQADADAEACQAEACAGAAQAFAAAEgBIALgGIAEAKQgIAFgGACQgGACgHAAQgHAAgGgDgAATgJQAAgFgBgDQgBgEgCgCQgDgCgDgBIgHgBIgGABQgDABgCACQgDACgCAEIgDAIIAkAAIAAAAg");
	this.shape_1.setTransform(229.5,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA7QgGgDgEgFQgEgFgCgHQgDgHAAgIQAAgJADgIQADgHAFgFQAGgGAGgDQAIgDAHAAIAKABIAIAEIAAgxIANAAIAAB5IgNAAIAAgKQgFAGgGADQgHADgGAAQgHAAgGgDgAgFgDQgEACgEADQgDAEgCAGQgCAFAAAHQAAAGABAEQACAFADAEQACADAEACQAEACAEAAIAGgBIAIgEIAIgIIAAgaIgBgKQgCgDgEgBQgEgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(220.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAnQgIgCgJgEIAFgLIAFADIAJADIAIABQAGAAADgDQAEgCAAgFQAAgDgBgCIgGgGIgNgGQgLgEgFgEQgEgFAAgGQAAgFACgEQACgEAEgDQADgDAGgBQAFgCAGAAIAJABQAHABAIAFIgGAKIgLgFIgJgBQgFAAgEACQgEADAAAEQAAADACACQAFAEANAGIAKAEIAGAEIADAGIABAIQAAAFgBAEQgCAEgEADIgIAEQgFACgGAAg");
	this.shape_3.setTransform(208.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAnIAAg1QAAgGgBgDQgCgEgGAAQgGAAgFAFQgHAFgKALIAAAtIgMAAIAAhLIAMAAIAAAQIAKgKQAFgEAEgCQAFgCAGAAIAIABQAEACADACQACADABAEIABAJIAAA4g");
	this.shape_4.setTransform(200.4,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgGgGQgEgFgEgIQgDgHAAgIQAAgHADgHQAEgIAEgFQAGgGAHgDQAGgDAHAAQAHAAAIADQAGADAFAGQAFAFADAIQADAHAAAHQAAAIgDAHQgDAIgFAFQgFAGgGADQgIADgHAAQgHAAgGgDgAgJgZQgDACgEAEIgFAJQgBAFAAAFIABALIAFAJIAHAHQAFACAEAAQAFAAAEgCIAIgHQADgEACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgEgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_5.setTransform(191.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFA3IAAhLIALAAIAABLgAgFgoQgCgDAAgDQAAgEACgBQADgDACAAQADAAADADQACABAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_6.setTransform(184.9,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFA9IAAh5IALAAIAAB5g");
	this.shape_7.setTransform(180.9,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFA9IAAh5IALAAIAAB5g");
	this.shape_8.setTransform(176.9,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFA3IAAhLIALAAIAABLgAgFgoQgCgDAAgDQAAgEACgBQADgDACAAQADAAADADQACABAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_9.setTransform(172.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsAnIAAg1IgBgJQgCgEgGAAQgFAAgGAEQgGAEgIAJIgEAEIAAAtIgLAAIAAg1QAAgGgBgDQgCgEgGAAQgGAAgHAFQgGAFgKALIAAAtIgNAAIAAhLIANAAIAAAQIAKgKQAFgEAFgCQAFgCAFAAIAJABQADABACADQACACABADQACAEAAAEIAKgKQAFgEAFgCQAFgCAGAAIAJABQADACACACQADADACAEIABAJIAAA4g");
	this.shape_10.setTransform(163.8,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAnIAAg1QAAgGgBgDQgCgEgGAAQgGAAgFAFQgHAFgKALIAAAtIgMAAIAAhLIAMAAIAAAQIAKgKQAFgEAEgCQAFgCAGAAIAIABQAEACADACQACADABAEIABAJIAAA4g");
	this.shape_11.setTransform(148,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAlQgHgDgEgFQgGgFgCgIQgDgHAAgJQAAgIADgHQACgIAGgFQAEgFAHgDQAGgDAHAAQAHAAAGACQAFADAEAEQADAEACAGQADAGAAAHIAAAHIgzAAQAAAGABAFQACAGAEAEQADADAEACQAEACAGAAQAFAAAEgBIALgGIAEAKQgIAFgGACQgGACgHAAQgHAAgGgDgAATgJQAAgFgBgDQgBgEgCgCQgCgCgEgBIgHgBIgFABQgEABgCACQgDACgCAEIgDAIIAkAAIAAAAg");
	this.shape_12.setTransform(139.6,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECB02C").s().p("AgNAmQgHgDgFgEQgFgGgCgHQgDgHAAgJQAAgIADgIQADgIAFgGQAGgFAHgEQAHgDAHAAQAHAAAGADQAGADAEAEQAFAFACAGQADAHAAAIIAAAIIgzAAQABAIACAEQACAEAFADQAFACAEAAQAFAAAEgBQAGgCAJgGIAIAQIgJADQgGADgGACIgNABQgIAAgHgDgAAPgIQAAgJgDgEQgDgEgHAAQgGAAgEAFQgFAEgBAIIAdAAIAAAAg");
	this.shape_13.setTransform(127.6,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECB02C").s().p("AgJA8IAAhNIATAAIAABNgAgHgkQgDgEAAgFQAAgFADgFQADgDAEAAQAFAAADADQADAFAAAFQAAAFgDAEQgDAFgFAAQgEAAgDgFg");
	this.shape_14.setTransform(121.6,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECB02C").s().p("AgXAoIAAhNIASAAIAAARQAFgKAEgEQAEgEAFgBIAGACIAFAEIgHATQgDgBgDAAQgFgBgEAGQgCADgBAEQgCADAAAEIAAAkg");
	this.shape_15.setTransform(117.3,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECB02C").s().p("AgKAwQgDgFAAgIIAAgwIgMAAIAAgMIAMgCIAAgXIASAAIAAAXIAQAAIAAAOIgQAAIAAAiIAAAJQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQADAAAHgEIAHAOIgIAFIgIADIgJABQgHAAgEgDg");
	this.shape_16.setTransform(111.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECB02C").s().p("AgMAoQgLgDgIgEIAHgQQAJAFAHADIAIABQAFAAAEgCQADgBAAgDQAAgDgCgCIgGgEIgMgFIgJgEIgHgEIgDgGQgCgEAAgEQAAgFADgFQACgEAEgDQAFgEAGgBQAFgCAGAAIANABQAHACAKAFIgGAQIgGgDIgJgEIgJgCQgEAAgDADQgEACAAADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACAFACIAXAKQADACADAFQACAFAAAFQAAAFgCAFQgCAEgFADQgDADgHACQgFABgHAAIgMgBg");
	this.shape_17.setTransform(105.1,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECB02C").s().p("AgVAmQgEgBgCgDIgFgHQgBgEAAgGIAAg3IAUAAIAAAwQAAAHACAEQABADADAAQADgBAEgDQAFgDAGgHIADgDIAAgtIAUAAIAABMIgUAAIAAgNQgHAIgGADQgFAEgIAAQgFAAgEgCg");
	this.shape_18.setTransform(96.8,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECB02C").s().p("AgRA7QgFgDgFgFQgEgFgCgHQgDgIAAgIQAAgJADgIQADgHAFgFQAFgHAGgDQAIgDAGAAIAHABQAGABAFADIAAgvIATAAIAAB5IgTAAIAAgLQgEAGgEADIgIADIgGABQgHAAgGgDgAgEgBQgDABgCADQgDAEgCAFQgBAEAAAGIABAJIAEAIQACADACACQADACADAAQAFAAAEgDQAEgDAFgGIAAgVQgBgGgBgEQgBgDgEgBQgDgCgFAAQgDAAgEACg");
	this.shape_19.setTransform(87.6,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECB02C").s().p("AANAoIAAgyIgBgKQgBgDgEAAQgDAAgEADIgKALIgDADIAAAuIgUAAIAAhNIAUAAIAAANQAHgIAGgDQAGgEAGAAQAWAAAAAXIAAA4g");
	this.shape_20.setTransform(79.1,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECB02C").s().p("AgJA8IAAhNIATAAIAABNgAgHgkQgDgEAAgFQAAgFADgFQADgDAEAAQAFAAADADQADAFAAAFQAAAFgDAEQgDAFgFAAQgEAAgDgFg");
	this.shape_21.setTransform(72.4,-0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ECB02C").s().p("AgLAaIAFgNIADgMIgKgWQAIgDAGAAQAGAAAEADQADAEAAAGQAAAIgEAJQgEAKgGAKg");
	this.shape_22.setTransform(68.2,-3.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ECB02C").s().p("AgJA9IAAh5IATAAIAAB5g");
	this.shape_23.setTransform(64.2,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECB02C").s().p("AgUA4QgEgBgDgDQgDgDgCgEQgBgEAAgEIABgIQACgGAFgDQADgDAJgCIAVgHIAAgGQAAgFgDgDQgBgDgFAAQgEAAgDACQgEACAAADIABACIgTADIgBgFQAAgFACgEQADgEADgCQAFgDAGgCQAGgBAHAAQAHAAAFABQAFACADADQADADADAFQABAEAAAGIAAAgQAAAFABACQABABAEABIgDAPIgEAAQgIAAgDgCQgEgCgCgFQgFAFgFADQgFACgGAAQgEAAgFgCgAgLAcIgCAGQAAAEACACQADACADAAQAFAAADgCIAFgEIAAgPgAgDgeIgTgbIARAAIAPAbg");
	this.shape_24.setTransform(54.1,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ECB02C").s().p("AgKAwQgDgFAAgIIAAgwIgMAAIAAgMIAMgCIAAgXIASAAIAAAXIAQAAIAAAOIgQAAIAAAiIAAAJQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQADAAAHgEIAHAOIgIAFIgIADIgJABQgHAAgEgDg");
	this.shape_25.setTransform(43.4,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECB02C").s().p("AgXAoIAAhNIASAAIAAARQAFgKAEgEQAEgEAFgBIAGACIAFAEIgHATQgDgBgDAAQgFgBgEAGQgCADgBAEQgCADAAAEIAAAkg");
	this.shape_26.setTransform(38.6,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECB02C").s().p("AgPAmQgGgDgGgGQgFgFgDgIQgDgHAAgJQAAgIADgHQADgIAFgFQAGgGAGgDQAIgDAHAAQAIAAAIADQAGADAGAGQAGAFACAIQADAHAAAIQAAAJgDAHQgCAIgGAFQgGAGgGADQgIADgIAAQgHAAgIgDgAgGgWQgEACgCADIgEAIQgCAFABAEIABAKIAEAIQACAEAEACQAEABACAAQAEAAADgBQADgCADgEIAEgIIACgKQgBgEgBgFIgEgIQgDgDgDgCQgDgCgEAAQgCAAgEACg");
	this.shape_27.setTransform(30.9,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ECB02C").s().p("AgkA7IAAhzIAUAAIAAALQAFgHADgCQAGgFAHAAQAHAAAGADQAGAEAEAEQAEAGADAHQACAHAAAIQAAAKgDAHQgDAHgFAHQgFAFgHAEQgHADgHAAIgGgBQgFgBgFgDIAAApgAgIgnQgEADgEAGIAAAaIABAFIADADQAFACAFAAQADAAAEgCQADgCADgCIAEgIIABgKIgBgKIgDgHIgFgGQgDgBgEAAQgEAAgEADg");
	this.shape_28.setTransform(22.4,3.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECB02C").s().p("AgkA7IAAhzIAUAAIAAALQAFgHADgCQAGgFAHAAQAHAAAGADQAGAEAEAEQAEAGADAHQACAHAAAIQAAAKgDAHQgDAHgFAHQgFAFgHAEQgHADgHAAIgGgBQgFgBgFgDIAAApgAgIgnQgEADgEAGIAAAaIABAFIADADQAFACAFAAQADAAAEgCQADgCADgCIAEgIIABgKIgBgKIgDgHIgFgGQgDgBgEAAQgEAAgEADg");
	this.shape_29.setTransform(13.4,3.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ECB02C").s().p("AgTAoQgFgCgDgDQgDgDgBgEQgCgEAAgEIABgIQACgFAEgDQAFgDAIgCIAVgHIAAgGQAAgGgCgDQgDgDgEAAQgEAAgEACQgCACAAADIAAACIgTAEIgBgGQAAgEACgFQADgDAEgDQAEgDAGgBQAGgCAHAAQAHAAAFACQAFABAEADQADADABAFQACAEAAAHIAAAfQAAAFABACQABABAEABIgDAPIgFAAQgHAAgDgCQgEgCgCgEQgGAFgEACQgFACgGAAQgEAAgEgBgAgLALIgBAGQAAAEABADQADABAEAAQADAAAEgCIAFgEIAAgOg");
	this.shape_30.setTransform(4.8,1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ECB02C").s().p("AgXAoIAAhNIASAAIAAARQAFgKAEgEQAEgEAFgBIAGACIAFAEIgHATQgDgBgDAAQgFgBgEAGQgCADgBAEQgCADAAAEIAAAkg");
	this.shape_31.setTransform(-1.5,1.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECB02C").s().p("AgXAoIAAhNIASAAIAAARQAFgKAEgEQAEgEAFgBIAGACIAFAEIgHATQgDgBgDAAQgFgBgEAGQgCADgBAEQgCADAAAEIAAAkg");
	this.shape_32.setTransform(-11.2,1.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ECB02C").s().p("AgTAoQgFgCgDgDQgDgDgCgEQgBgEAAgEIABgIQACgFAEgDQAEgDAJgCIAVgHIAAgGQAAgGgCgDQgDgDgDAAQgFAAgDACQgDACAAADIAAACIgTAEIgBgGQAAgEACgFQACgDAEgDQAFgDAGgBQAGgCAHAAQAHAAAFACQAFABADADQAEADACAFQABAEAAAHIAAAfQAAAFABACQABABAEABIgDAPIgEAAQgIAAgDgCQgDgCgDgEQgGAFgEACQgFACgFAAQgGAAgDgBgAgLALIgCAGQABAEACADQACABADAAQAFAAACgCIAGgEIAAgOg");
	this.shape_33.setTransform(-18.5,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ECB02C").s().p("AgkA7IAAhzIAUAAIAAALQAFgHADgCQAGgFAHAAQAHAAAGADQAGAEAEAEQAEAGADAHQACAHAAAIQAAAKgDAHQgDAHgFAHQgFAFgHAEQgHADgHAAIgGgBQgFgBgFgDIAAApgAgIgnQgEADgEAGIAAAaIABAFIADADQAFACAFAAQADAAAEgCQADgCADgCIAEgIIABgKIgBgKIgDgHIgFgGQgDgBgEAAQgEAAgEADg");
	this.shape_34.setTransform(-26.8,3.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ECB02C").s().p("AgXA+IAAg+IgMAAIAAgNIAMgBIAAgKQAAgJADgHQACgHAEgEQAFgFAGgDQAFgCAIAAIAKABQAHABAJAEIgIAPIgJgDIgIgBQgDAAgDABQgDABgCADQgBADgBAEIgBANIAAAFIAQAAIAAAOIgQAAIAAA+g");
	this.shape_35.setTransform(-36.7,-0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ECB02C").s().p("AgJA8IAAhNIATAAIAABNgAgHgkQgDgEAAgFQAAgFADgFQADgDAEAAQAFAAADADQADAFAAAFQAAAFgDAEQgDAFgFAAQgEAAgDgFg");
	this.shape_36.setTransform(-42.5,-0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ECB02C").s().p("AgKAwQgDgFAAgIIAAgwIgMAAIAAgMIAMgCIAAgXIASAAIAAAXIAQAAIAAAOIgQAAIAAAiIAAAJQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQADAAAHgEIAHAOIgIAFIgIADIgJABQgHAAgEgDg");
	this.shape_37.setTransform(-47.1,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECB02C").s().p("AgKAmQgIgDgFgFQgFgFgDgIQgDgHAAgJQAAgJADgHQAEgIAFgFQAGgGAHgDQAIgDAIAAIAMACQAHABAJAEIgKAQIgIgFIgIgBQgFAAgEACQgDACgDADIgFAIQgCAEAAAFQAAAFACAEIAEAHIAHAGQADABAEAAQAFAAAEgBIALgGIAIARIgHACQgFADgGABIgMABQgIAAgHgDg");
	this.shape_38.setTransform(-53.2,1.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ECB02C").s().p("AgUAoQgEgCgDgDQgDgDgCgEQgBgEAAgEIABgIQACgFAFgDQADgDAJgCIAVgHIAAgGQAAgGgDgDQgCgDgDAAQgFAAgDACQgEACAAADIABACIgTAEIgBgGQAAgEACgFQADgDADgDQAFgDAGgBQAGgCAHAAQAHAAAFACQAFABADADQAEADACAFQABAEAAAHIAAAfQAAAFABACQABABAEABIgDAPIgEAAQgIAAgDgCQgDgCgDgEQgFAFgFACQgFACgGAAQgEAAgFgBgAgLALIgCAGQAAAEACADQADABADAAQAEAAADgCIAGgEIAAgOg");
	this.shape_39.setTransform(-61,1.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ECB02C").s().p("AgLAaIAFgNIADgMIgKgWQAIgDAGAAQAGAAAEADQADAEAAAGQAAAIgEAJQgEAKgGAKg");
	this.shape_40.setTransform(-67.1,-3.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ECB02C").s().p("AgJA9IAAh5IATAAIAAB5g");
	this.shape_41.setTransform(-71.1,-0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ECB02C").s().p("AgNAmQgHgDgFgEQgFgGgCgHQgDgHAAgJQAAgIADgIQADgIAFgGQAGgFAHgEQAHgDAHAAQAHAAAGADQAGADAEAEQAFAFACAGQADAHAAAIIAAAIIgzAAQABAIACAEQACAEAFADQAFACAEAAQAFAAAEgBQAGgCAJgGIAIAQIgJADQgGADgGACIgNABQgIAAgHgDgAAPgIQAAgJgDgEQgDgEgHAAQgGAAgEAFQgFAEgBAIIAdAAIAAAAg");
	this.shape_42.setTransform(-81.1,1.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#ECB02C").s().p("AgRA7QgGgDgEgFQgEgFgCgHQgDgIAAgIQAAgJADgIQADgHAFgFQAFgHAGgDQAIgDAGAAIAHABQAFABAGADIAAgvIATAAIAAB5IgTAAIAAgLQgEAGgEADIgIADIgGABQgHAAgGgDgAgEgBQgDABgCADQgDAEgCAFQgBAEAAAGIABAJIADAIQADADACACQADACADAAQAFAAAEgDQAFgDAEgGIAAgVQAAgGgCgEQgBgDgEgBQgDgCgFAAQgDAAgEACg");
	this.shape_43.setTransform(-89.8,-0.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ECB02C").s().p("AgNAmQgHgDgFgEQgFgGgCgHQgDgHAAgJQAAgIADgIQADgIAFgGQAGgFAHgEQAHgDAHAAQAHAAAGADQAGADAEAEQAFAFACAGQADAHAAAIIAAAIIgzAAQABAIACAEQACAEAFADQAFACAEAAQAFAAAEgBQAGgCAJgGIAIAQIgJADQgGADgGACIgNABQgIAAgHgDgAAPgIQAAgJgDgEQgDgEgHAAQgGAAgEAFQgFAEgBAIIAdAAIAAAAg");
	this.shape_44.setTransform(-101.9,1.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ECB02C").s().p("AgKAmQgIgDgFgFQgFgFgDgIQgDgHAAgJQAAgJADgHQADgIAGgFQAFgGAIgDQAIgDAIAAIAMACQAHABAJAEIgKAQIgIgFIgIgBQgFAAgEACQgDACgDADIgFAIQgCAEAAAFQAAAFACAEIAEAHIAHAGQADABAEAAQAFAAAEgBIALgGIAIARIgIACQgEADgGABIgMABQgIAAgHgDg");
	this.shape_45.setTransform(-109.4,1.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ECB02C").s().p("AANAoIAAgyIgBgKQgBgDgEAAQgDAAgEADIgLALIgCADIAAAuIgUAAIAAhNIAUAAIAAANQAHgIAGgDQAGgEAGAAQAWAAAAAXIAAA4g");
	this.shape_46.setTransform(-117.7,1.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECB02C").s().p("AgUAoQgEgCgDgDQgDgDgCgEQgBgEAAgEIABgIQACgFAFgDQADgDAJgCIAVgHIAAgGQAAgGgDgDQgCgDgDAAQgFAAgDACQgEACAAADIABACIgTAEIgBgGQAAgEACgFQADgDADgDQAFgDAGgBQAGgCAHAAQAHAAAFACQAFABADADQAEADACAFQABAEAAAHIAAAfQAAAFABACQABABAEABIgDAPIgEAAQgIAAgDgCQgDgCgDgEQgFAFgFACQgFACgGAAQgEAAgFgBgAgLALIgCAGQAAAEACADQADABADAAQAEAAADgCIAGgEIAAgOg");
	this.shape_47.setTransform(-126.2,1.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECB02C").s().p("AgMAoQgKgDgJgEIAGgQQAKAFAHADIAIABQAFAAADgCQAEgBAAgDQAAgDgCgCIgGgEIgNgFIgIgEIgHgEIgDgGQgCgEABgEQgBgFADgFQACgEAFgDQADgEAHgBQAFgCAGAAIANABQAHACAKAFIgGAQIgGgDIgJgEIgJgCQgEAAgEADQgDACAAADQAAAAAAABQAAABAAAAQABABAAAAQABABAAAAQACACAFACIAXAKQADACADAFQACAFAAAFQAAAFgDAFQgCAEgDADQgFADgGACQgFABgHAAIgMgBg");
	this.shape_48.setTransform(-134,1.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#ECB02C").s().p("AgMAoQgKgDgJgEIAGgQQAKAFAHADIAIABQAGAAACgCQAEgBAAgDQAAgDgCgCIgGgEIgNgFIgIgEIgGgEIgEgGQgBgEgBgEQABgFACgFQACgEAEgDQAFgEAFgBQAGgCAGAAIANABQAIACAJAFIgGAQIgFgDIgJgEIgJgCQgFAAgDADQgEACAAADQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACACAFACIAXAKQAEACACAFQACAFAAAFQAAAFgDAFQgCAEgDADQgFADgFACQgGABgHAAIgMgBg");
	this.shape_49.setTransform(-141.5,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ECB02C").s().p("AgJA8IAAhNIATAAIAABNgAgHgkQgDgEAAgFQAAgFADgFQADgDAEAAQAFAAADADQADAFAAAFQAAAFgDAEQgDAFgFAAQgEAAgDgFg");
	this.shape_50.setTransform(-147.2,-0.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ECB02C").s().p("AgPAmQgGgDgGgGQgFgFgDgIQgDgHAAgJQAAgIADgHQADgIAFgFQAGgGAGgDQAIgDAHAAQAIAAAIADQAGADAGAGQAGAFACAIQADAHAAAIQAAAJgDAHQgCAIgGAFQgGAGgGADQgIADgIAAQgHAAgIgDgAgGgWQgEACgCADIgEAIQgCAFABAEIABAKIAEAIQACAEAEACQAEABACAAQAEAAADgBQADgCADgEIAEgIIACgKQgBgEgBgFIgEgIQgDgDgDgCQgDgCgEAAQgCAAgEACg");
	this.shape_51.setTransform(-153.6,1.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ECB02C").s().p("AgXAoIAAhNIASAAIAAARQAFgKAEgEQAEgEAFgBIAGACIAFAEIgHATQgDgBgDAAQgFgBgEAGQgCADgBAEQgCADAAAEIAAAkg");
	this.shape_52.setTransform(-160.1,1.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#ECB02C").s().p("AAAA5IgJgDIgJgEIgJgHIgIgJIgGgKQgCgFgBgHQgCgGABgGQgBgGACgGIADgKQACgFADgFIAIgJIAIgHIAKgFIAKgDIAMAAQAKAAAJACQAJADAGAFIgIARQgFgEgGgCQgGgCgIAAQgIABgFACQgHACgFAFQgFAGgCAGQgDAHAAAHQAAAIADAIQACAHAGAEQAFAGAGACQAIADAJABIALgCIANgEIADASIgOAGQgIABgKAAg");
	this.shape_53.setTransform(-167.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.9,-12,423.6,24.1);


(lib.G_GraphNumbersMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAEIACgBIAEAGIgCABgAgGAJIAEgGIACABIgEAGgAADAAIAHgDIAAADIgHAAgAgJAAIAAgDIAHADIgBAAgAAAgCIAAgHIABAAIAAAHg");
	this.shape.setTransform(9.8,-97.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAXQgFgJAAgOQAAgNAFgIQAGgJAIAAQAJAAAFAJQAGAIAAANQAAAOgGAJQgFAJgJAAQgIAAgGgJgAgLAAQAAAYALABQAGAAADgIQADgGAAgLQAAgKgDgHQgDgGgGgBQgLAAAAAYg");
	this.shape_1.setTransform(5.9,-94.5,1.042,1.042);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAXQgFgJAAgOQAAgNAFgIQAGgJAIAAQAJAAAFAJQAGAIAAANQAAAOgGAJQgFAJgJAAQgIAAgGgJgAgLAAQAAAYALABQAGAAADgIQADgGAAgLQAAgKgDgHQgDgGgGgBQgLAAAAAYg");
	this.shape_2.setTransform(1.2,-94.5,1.042,1.042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAeQgFgCgDgDIADgGQAHAFAEAAQAEgBADgDQADgEAAgGQAAgJgIgCIgLgBIgBAAIAAgbIAZAAIAAAHIgRAAIAAANQAJABAFAEQAFAEAAAKQAAAJgFAGQgFAGgHAAg");
	this.shape_3.setTransform(-3.5,-94.4,1.042,1.042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAbIADgGQAHADADAAQAEAAADgDQADgEAAgFQAAgKgKAAIgDAAIAAgEQAFgCACgDQADgEAAgFQAAgHgFAAQgDAAgHAFIgEgFIAIgFQADgCAEAAQAMAAAAANQAAADgCAGQgCACgEADQALABAAANQAAAIgGAGQgFAFgIAAQgFAAgHgDg");
	this.shape_4.setTransform(-10.1,-94.4,1.042,1.042);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAXQgFgJAAgOQAAgNAFgIQAGgJAIAAQAJAAAFAJQAGAIAAANQAAAOgGAJQgFAIgJABQgIgBgGgIgAgLAAQAAAYALABQAGAAADgHQADgHAAgLQAAgKgDgHQgDgGgGgBQgLAAAAAYg");
	this.shape_5.setTransform(6.9,94.4,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-102,28.6,199.8);


(lib.G_GraphLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape.setTransform(-7.8,-75.4,1.043,1.043);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_1.setTransform(-5.2,-56.6,1.043,1.043);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_2.setTransform(-7.8,-37.8,1.043,1.043);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_3.setTransform(-5.2,-19,1.043,1.043);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_4.setTransform(-7.8,-0.2,1.043,1.043);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_5.setTransform(-5.2,18.6,1.043,1.043);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_6.setTransform(-7.8,37.4,1.043,1.043);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_7.setTransform(-5.2,56.2,1.043,1.043);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_8.setTransform(-7.8,75,1.043,1.043);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.5).p("ABKutIiQAAIAAdbICSAA");
	this.shape_9.setTransform(-5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-95.2,16.7,190.4);


(lib.G_BlackBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg3TAZyMAAAgzjMBunAAAMAAAAzjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.9,-164.9,708,330);


(lib.G_B10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiE4IAApvIHFAAIAAJvg");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-32.5,47.2,65);


(lib.G_B9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiFVIAAqpIHFAAIAAKpg");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-35.6,47.3,71.2);


(lib.G_B8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiEKIAAoTIHFAAIAAITg");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-27.7,47.3,55.5);


(lib.G_B7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiDdIAAm5IHFAAIAAG5g");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-23,47.2,46.1);


(lib.G_B6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiCkIAAlIIHFAAIAAFIg");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-17.1,47.2,34.3);


(lib.G_B5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiBlIAAjJIHFAAIAADJg");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-10.5,47.2,21.1);


(lib.G_B4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiBMIAAiXIHFAAIAACXg");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-7.9,47.3,15.8);


(lib.G_B3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiA8IAAh3IHFAAIAAB3g");
	this.shape.setTransform(0,0,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-6.2,47.3,12.5);


(lib.G_B2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiAdIAAg5IHFAAIAAA5g");
	this.shape.setTransform(0,0,1.042,1.844);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-5.4,47.2,10.8);


(lib.G_B1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhASIAAgjIHDAAIAAAjg");
	this.shape.setTransform(0,-0.4,1.042,2.31,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-4.2,47.2,8.4);


(lib.G_AlanFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AlanFront();
	this.instance.parent = this;
	this.instance.setTransform(-350,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-163,700,326);


(lib.G_AlanBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AlanFull();
	this.instance.parent = this;
	this.instance.setTransform(-350,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-163,700,326);


(lib.G_AGFNumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgGQgCgDgDAAQgEABgEADQgEADgHAHIAAAdIgIAAIAAgxIAIAAIAAALIAHgGIAGgFIAHgBIAFABIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape.setTransform(275,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAkIAAgxIAHAAIAAAxgAgDgaQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_1.setTransform(270.7,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLApIAAgqIgIAAIAAgFIAIgCIAAgIQAAgGACgEQABgEADgDQADgDADgCQAEgCAFAAIAFABIAFACIgDAHIgIgCIgGABQgCABgBADIgCAFIgBAIIAAAGIALAAIAAAHIgLAAIAAAqg");
	this.shape_2.setTransform(268.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAkIAAgIIABAAQAJAAAGgDIAGgFQADgEACgLQgMADgDAAQgIAAgFgFQgEgFAAgJQAAgKAGgHQAGgHAIAAQAVAAAAAhQAAARgJALQgDAEgGADQgEADgMAAgAgIgWQgDAEAAAHQAAALAKAAQAFAAAIgCQAAgZgMAAQgFAAgDAFg");
	this.shape_3.setTransform(288.8,0.3,1.042,1.042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAFgDALAAIACAAIAAAIIgBAAQgJAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgGAHQgGAHgIAAQgVAAAAghgAgLADQAAAZAMAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_4.setTransform(283.3,0.3,1.042,1.042);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAgQgFgFgBgGQAAgHAKgKIAGgFIgHgGQgGgEABgJQgBgGAGgFQAFgFAIAAQAHAAAFAFQAEAEABAGQAAAIgHAFIgGAGIAIAGQAIAGAAAIQAAAJgGAEQgGAGgJAAQgIAAgHgFgAgGAKQgFAGAAAFQAAAIALABQAFAAAEgEQADgDAAgEQAAgEgFgFIgHgHgAgIgUQgBAFAEADIAFAGIAEgFQAFgFAAgFQAAgDgCgCQgDgCgEgBQgIABAAAIg");
	this.shape_5.setTransform(218.6,0.3,1.042,1.042);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAFgDALAAIACAAIAAAIIAAAAQgKAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_6.setTransform(213.1,0.3,1.042,1.042);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAfIAGgJQAGgKAEgNIAJgZIgbAAIAAgIIAlAAIAAAEIgSAtIgJAVg");
	this.shape_7.setTransform(155.5,0.4,1.042,1.042);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgKAAgGADIgFAFQgEAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_8.setTransform(150.4,0.3,1.042,1.042);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgKAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgHAHgIAAQgVAAAAghgAgMADQACAZALAAQAFAAADgEQAEgFgBgHQAAgMgKAAQgFAAgJADg");
	this.shape_9.setTransform(92.4,0.3,1.042,1.042);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgKAAgGADIgFAFQgEAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_10.setTransform(86.9,0.3,1.042,1.042);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAiIgKgEIAEgHQAHAFAFAAQAFAAAEgFQAEgEAAgHQAAgLgKgCQgDgBgKgBIgBAAIAAgfIAeAAIAAAIIgVAAIAAAQQALABAFAFQAHAEAAAMQAAAKgGAHQgGAHgIAAg");
	this.shape_11.setTransform(29.4,0.4,1.042,1.042);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAGgDALAAIACAAIAAAIIgBAAQgJAAgHADIgFAFQgEAEgCALQAKgDAGAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgEAAgJADg");
	this.shape_12.setTransform(23.8,0.3,1.042,1.042);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgbAAIAAgFIAdguIAGAAIAAAsIAJAAIAAAHIgJAAIAAASgAgLAKIARAAIAAgbg");
	this.shape_13.setTransform(-33.8,0.3,1.042,1.042);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAGgDALAAIABAAIAAAIIgBAAQgJAAgGADIgFAFQgEAEgCALQAKgDAGAAQAQAAAAATQAAAKgGAHQgFAHgJAAQgVAAAAghgAgLADQAAAZAMAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgEAAgJADg");
	this.shape_14.setTransform(-38.9,0.3,1.042,1.042);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAEAAQAFAAAEgEQAEgEAAgGQAAgMgMAAIgEAAIAAgFQAGgCACgEQAFgEgBgGQAAgIgGAAQgEAAgIAGIgEgGQAEgEAFgCQAFgCADAAQAOAAAAAPQAAAFgCAFIgHAHQAFABAEADQAEAFAAAHQAAAKgGAGQgIAHgJAAQgHAAgHgEg");
	this.shape_15.setTransform(-96.9,0.3,1.042,1.042);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAFgDALAAIACAAIAAAIIAAAAQgKAAgGADIgGAFQgDAEgCALQAKgDAFAAQAIAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_16.setTransform(-102.1,0.3,1.042,1.042);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAjIAAgEIAZghQAFgHAAgGQAAgLgKAAIgGABIgJAHIgFgGIAEgDQAIgHAJAAQARAAAAATIgBAHQgCAGgHAJIgPAUIAcAAIAAAIg");
	this.shape_17.setTransform(-159.9,0.3,1.042,1.042);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgJAAgHADIgFAFQgEAEgCALQAKgDAGAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_18.setTransform(-165.4,0.3,1.042,1.042);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgNAAIAAgIIAVAAIAABFg");
	this.shape_19.setTransform(-223.4,0.3,1.042,1.042);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAFgDALAAIACAAIAAAIIgBAAQgJAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_20.setTransform(-227.8,0.3,1.042,1.042);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAbQgGgKAAgRQAAgPAGgKQAGgLAKAAQAKAAAHALQAGAKAAAPQAAARgGAKQgHAKgKAAQgKAAgGgKgAgJgUQgEAIAAAMQAAANAEAIQADAIAGAAQAGAAAEgIQAEgIAAgNQAAgMgEgIQgEgIgGAAQgGAAgDAIg");
	this.shape_21.setTransform(-286,0.2,1.042,1.042);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQADgEAGgDQAGgDALAAIACAAIAAAIIgBAAQgJAAgHADIgFAFQgEAEgCALQAKgDAGAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_22.setTransform(-291.6,0.3,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293.8,-8.1,584.8,17.2);


(lib.G_ofIndustry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgGAXQgEgBgDgEQgDgEgCgEQgBgFAAgFQAAgFABgEQACgFADgDQADgEAEgBQAEgCAEAAQAEAAAEABIAFAFQADACABAEQABADAAAEIAAAFIgfAAQAAAEABADIADAGIAFAEIAFABIAGgBIAHgEIADAGQgFAEgEABQgEABgEAAQgEAAgEgCgAAMgGIgBgEIgCgEIgDgCIgEgBIgEABIgEACIgDAEIgBAEIAWAAIAAAAg");
	this.shape.setTransform(53.3,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgDAjIAAgvIAHAAIAAAvgAgCgZQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(49.6,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgMAYIAAguIAIAAIAAAJQAEgGACgCQACgCADAAQADAAADADIgEAHIgDgCQgCAAgDADQgCADgDAGIAAAbg");
	this.shape_2.setTransform(47,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgDAcQgDgDABgEIAAgfIgIAAIAAgFIAIgCIAAgNIAHAAIAAANIAMAAIAAAHIgMAAIAAAaIAAACIAAADQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQADAAAEgDIADAFIgGAFQgCABgDAAQgEAAgCgDg");
	this.shape_3.setTransform(43.2,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape_4.setTransform(39.3,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgMAXIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgGIAAgiIAIAAIAAAgIABAGQABABAAAAQABABAAAAQABAAAAAAQABABABAAIAEgCIAEgCIAJgKIAAgbIAIAAIAAAuIgIAAIAAgKIgFAFIgEADIgEADIgFAAIgGgBg");
	this.shape_5.setTransform(34.1,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgJAlQgEgCgCgDIgEgHQgCgFAAgFQAAgGACgFQACgEADgDQADgDAFgCQAEgCAEAAIAHABIAFACIAAgfIAIAAIAABLIgIAAIAAgGQgEAEgEACQgEACgDAAQgEAAgEgCgAgDgBQgDABgCABQgCADgBADIgBAIIABAGIACAGIAEADIAFABIAEgBQACAAACgCIAGgFIAAgRIgBgGQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgBQgDAAgDACg");
	this.shape_6.setTransform(28.4,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AAMAYIAAggIgBgGQgBgCgEAAQgDAAgEADIgKAJIAAAcIgIAAIAAguIAIAAIAAAKIAHgHIAEgDIAHgBIAGABIADACQACACABACIABAGIAAAig");
	this.shape_7.setTransform(22.9,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgDAjIAAgvIAHAAIAAAvgAgDgZQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_8.setTransform(18.8,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgFANIADgHIACgGIgFgKIAFgCQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQACABAAAEQAAAEgCAEIgEAKg");
	this.shape_9.setTransform(16.2,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_10.setTransform(13.7,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgGAXQgEgBgDgEQgDgEgCgEQgBgFAAgFQAAgFABgEQACgFADgDQADgEAEgBQAEgCAEAAQAEAAAEABIAFAFQADACABAEQABADAAAEIAAAFIgfAAQAAAEABADIADAGIAFAEIAFABIAGgBIAHgEIADAGQgFAEgEABQgEABgEAAQgEAAgEgCgAAMgGIgBgEIgCgEIgDgCIgEgBIgEABIgEACIgDAEIgBAEIAWAAIAAAAg");
	this.shape_11.setTransform(7.5,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgJAlQgEgCgCgDIgEgHQgCgFAAgFQAAgGACgFQACgEADgDQADgDAFgCQAEgCAEAAIAHABIAFACIAAgfIAIAAIAABLIgIAAIAAgGQgEAEgEACQgEACgDAAQgEAAgEgCgAgDgBQgDABgCABQgCADgBADIgBAIIABAGIACAGIAEADIAFABIAEgBQACAAACgCIAGgFIAAgRIgBgGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgBQgDAAgDACg");
	this.shape_12.setTransform(2,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape_13.setTransform(-5.5,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgLAnIAAgoIgIAAIAAgFIAIgCIAAgHQABgGABgDIAEgHQADgDADgCQAEgBAEgBIAFABIAGABIgEAHQgFgBgDAAIgFAAIgDAEIgCAFIgBAIIAAAFIAKAAIAAAHIgKAAIAAAog");
	this.shape_14.setTransform(-8.5,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgDAjIAAgvIAHAAIAAAvgAgCgZQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_15.setTransform(-12,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgDAcQgCgDgBgEIAAgfIgIAAIAAgFIAIgCIAAgNIAHAAIAAANIANAAIAAAHIgNAAIAAAaIAAACIAAADQABAAAAABQAAAAAAABQABAAAAAAQABAAAAAAQADAAAEgDIAEAFIgHAFQgDABgDAAQgDAAgCgDg");
	this.shape_16.setTransform(-14.9,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AgFAXQgEgBgEgEQgDgDgBgFQgCgEAAgGQAAgEACgFQABgEAEgEQADgEAEgBQAFgCAEAAIAHABQAEABAEADIgEAGIgFgDIgGgBQgDAAgCABQgDABgCADIgEAFIgBAHIABAIIAEAFIAFAEIAGABIAGgBIAFgDIAEAGIgDABIgGADIgHABQgEAAgFgCg");
	this.shape_17.setTransform(-18.6,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AAKAXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIgGAEIgDACIgGABIgFgBIgEgDIgCgDIgBgGIABgEIABgEIADgDIAFgBIAQgDIAAgJQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQgCgBgDAAIgGABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIgIACIgBgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIADgDIAGgCIAGgBIAHABIAEACIADAEIACAFIAAAcQAAAAAAABQAAAAABAAQAAABABAAQABAAAAAAIgBAHQgGgBgCgBgAgJAHIgBAEQAAABAAABQAAABAAAAQAAABAAAAQABABAAAAQACABADABIAEgBIAIgGIAAgJg");
	this.shape_18.setTransform(-23.5,2.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape_19.setTransform(-31,2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AgGAXQgEgBgDgEQgDgEgCgEQgBgFAAgFQAAgFABgEQACgFADgDQADgEAEgBQAEgCAEAAQAEAAAEABIAFAFQADACABAEQABADAAAEIAAAFIgfAAQAAAEABADIADAGIAFAEIAFABIAGgBIAHgEIADAGQgFAEgEABQgEABgEAAQgEAAgEgCgAAMgGIgBgEIgCgEIgDgCIgEgBIgEABIgEACIgDAEIgBAEIAWAAIAAAAg");
	this.shape_20.setTransform(-35.7,2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgJAlQgEgCgCgDIgEgHQgCgFAAgFQAAgGACgFQACgEADgDQADgDAFgCQAEgCAEAAIAHABIAFACIAAgfIAIAAIAABLIgIAAIAAgGQgEAEgEACQgEACgDAAQgEAAgEgCgAgDgBQgDABgCABQgCADgBADIgBAIIABAGIACAGIAEADIAFABIAEgBQACAAACgCIAGgFIAAgRIgBgGQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgBQgDAAgDACg");
	this.shape_21.setTransform(-41.1,1.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AghAmIA7hLIAHAAIg6BLgAAPAiIgFgEIgEgGQgCgDAAgEIACgHIAEgGQACgDADgBQAEAAAEAAIAHAAIAGAEIADAGIACAHQAAAEgCADIgDAGIgGAEIgHABQgEAAgEgBgAASAGIgEACIgCAEIgBAFIABAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEADIAFABIAEgBIAEgDIADgEIAAgEIAAgFIgDgEIgEgCIgEgBIgFABgAgdAAQgDgBgCgDIgEgGIgCgHQAAgEACgDIAEgGIAFgEQAEgBAEAAIAHABIAFAEIAEAGQACADAAAEIgCAHIgEAGQgCADgDABIgHAAQgEAAgEAAgAgagcQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgCADIgBAFIABAFIACAEIAEACIAFABIAEgBIAEgCIADgEIABgFIgBgFIgDgDIgEgDIgEgBIgFABg");
	this.shape_22.setTransform(-50.8,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-6.5,115.3,16.6);


(lib.Disclaimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAyIAGgJIAEgNIADgNIABgPIgBgNIgDgOIgEgMIgGgKIAIAAIADAFIAFAJIAFASIACARIgCARIgFASIgFAJIgDAGg");
	this.shape.setTransform(376,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAmIAAgHIAGAAIAJgBIAFgDIAFgFIAFgJQACgDABgHIgGACIgGACIgFABQgEAAgEgCQgDgBgDgDQgCgCgCgEIgBgIQAAgFACgFQABgEADgEQADgEAEgBQAFgCAEAAQAFAAAEACQAEACADAEQADAFACAFQACAGAAAIIgBAIIgCAJIgDAIIgFAHIgFAEIgGAFIgFACIgHAAgAgGgdIgEAFIgDAEIgCAHIABAGQABADACABIAEADIAGABIAFgBIAKgEIABgEQAAgFgCgEQgBgEgCgCQgCgDgDgCQgCgBgDgBIgGABg");
	this.shape_1.setTransform(371.7,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAjQgEgCgDgDQgEgFgBgFQgCgHAAgHIABgIIACgJIADgIIAFgHIAFgFIAFgEIAGgCIAHAAIAHAAIAAAHIgFAAQgGgBgDACIgFADIgFAFIgGAIIgDALIAHgCIALgDQAEAAAEACIAGADQACACABAEQACAEAAAFQAAAFgCAFIgFAIQgDADgEACQgEACgEAAQgFAAgEgDgAgDAAIgLAFIAAAEIABAIQABAFADACIAEAFQADABADABIAGgCIAEgEIADgFQACgDAAgDIgBgHIgDgEIgEgDQgDAAgDAAIgFAAg");
	this.shape_2.setTransform(365.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAmIAAgHIAGAAIAJgBIAFgDIAFgFIAFgJQACgDABgHIgGACIgGACIgFABQgEAAgEgCQgDgBgDgDQgCgCgCgEIgBgIQAAgFACgFQABgEADgEQADgEAEgBQAFgCAEAAQAFAAAEACQAEACADAEQADAFACAFQACAGAAAIIgBAIIgCAJIgDAIIgFAHIgFAEIgGAFIgFACIgHAAgAgGgdIgEAFIgDAEIgCAHIABAGQABADACABIAEADIAGABIAFgBIAKgEIABgEQAAgFgCgEQgBgEgCgCQgCgDgDgCQgCgBgDgBIgGABg");
	this.shape_3.setTransform(359.8,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACAaIAAgsIgLAAIAAgHIATAAIAAAzg");
	this.shape_4.setTransform(354.1,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAYQgFgCgDgDQgDgEgBgEQgDgFAAgGQAAgFADgFQABgFADgDQAEgEAEgCQAEgBAEAAQAEAAAEABIAHAEQACADABAEQACAEgBAEIAAAFIghAAIABAHQACAEACACIAFAEQACACADAAQAEAAADgCIAHgDIADAGQgGAEgDABQgEABgFAAQgEAAgEgCgAAMgGIgBgFIgBgEIgEgCIgEgBIgEABIgEACIgDAEIgCAFIAXAAIAAAAg");
	this.shape_5.setTransform(347.2,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAnQgEgCgDgDQgDgEgBgEQgCgFAAgFQAAgGACgFQACgFADgDQAEgEAEgCQAFgCAEAAIAIABIAEADIAAghIAJAAIAABPIgJAAIAAgGQgDAEgEACQgFACgDAAQgEAAgEgCgAgDgCQgDACgCABQgCADgCAEQgBADAAAFIABAHIADAFIAEAEIAFABIAEgBQADgBACgCIAFgFIAAgRIgBgHQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgHgBIgGABg");
	this.shape_6.setTransform(341.4,-0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIApAAIAAAHIggAAIAAAZIAaAAIAAAHIgaAAIAAAgg");
	this.shape_7.setTransform(333.5,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAlIgHgCIgGgEIgGgEIgFgGIgDgGIgCgHIgBgIIAAgHIADgHIADgGIAFgGIAFgEIAHgEIAHgCIAHgBQAJAAAGACIAJAEIgDAHIgEgCIgIgCIgIAAIgHAAIgFACIgFADIgEAEQgEAEgCAFQgCAFAAAFIABAGIACAFQACAGAEAEQAFAEAFACIAFACIAHABQAFAAAHgCIAAgYIAJAAIAAAeIgFABIgJACIgKABIgHgBg");
	this.shape_8.setTransform(326.1,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAlIgHgVIgdAAIgHAVIgKAAIAbhJIAJAAIAbBJgAAMAIIgMghIgLAhIAXAAg");
	this.shape_9.setTransform(319.2,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAoIAAhPIAHAAIAABPg");
	this.shape_10.setTransform(311.9,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFABgFQACgFADgDQADgEAEgCQAFgBAFAAQAEAAADABIAGAEQADADABAEQACAEAAAEIAAAFIghAAIAAAHQACAEACACIAFAEQACACAEAAQADAAADgCIAGgDIAEAGQgFAEgFABQgDABgFAAQgEAAgFgCgAANgGIgBgFIgDgEIgDgCIgFgBIgDABIgEACIgDAEIgCAFIAYAAIAAAAg");
	this.shape_11.setTransform(308.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAZIgEgDQgCgCgBgCIgBgGIAAglIAJAAIAAAjIABAGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAFgBIAEgCQADgDAGgHIAAgeIAJAAIAAAxIgJAAIAAgKIgEAFIgFAEIgEACIgFABIgGgBg");
	this.shape_12.setTransform(302.5,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgFQgCgDgDgBQgEAAgEAEQgEADgHAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAFAAIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape_13.setTransform(296.6,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgFQgCgDgDgBQgEAAgEAEQgEADgHAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAFAAIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape_14.setTransform(290.6,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_15.setTransform(285,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDAeQgDgDAAgFIAAggIgIAAIAAgFIAIgCIAAgPIAIAAIAAAPIANAAIAAAHIgNAAIAAAbIAAACIAAADQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQACAAAFgEIADAGIgHAEQgCACgDAAQgDAAgDgDg");
	this.shape_16.setTransform(278,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAHgIQADgCACAAQADgBAEAEIgEAHIgEgCQgCAAgDADIgGAKIAAAcg");
	this.shape_17.setTransform(274.9,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgEQgEgDgCgFQgCgFAAgFQAAgEACgFQACgFAEgEQADgDAFgCQAEgCAEAAQAFAAAFACIAHAFQAEAEACAFQACAFAAAEQAAAFgCAFQgCAFgEADQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgRIgFAEIgDAGIgBAHIABAHQABAEACACIAFAEQADACACAAIAGgCIAFgEIADgGQACgDAAgEIgCgHIgDgGIgFgEIgGgBQgCAAgDABg");
	this.shape_18.setTransform(269.7,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAIAAIAAAHQAEgEAEgCQAEgCAEAAQAEAAAEACQAEACADADQADADABAFIACAKQAAAGgCAFQgCAEgDAEQgEAEgEABQgFADgFAAIgGgBIgGgDIAAAdgAgDgdIgFACIgGAGIAAARQAAAEABABQACADACABIAGABQADAAAEgCQADgBACgDIAEgFIABgIIgBgHIgDgFQgCgDgCgBIgFgBIgEABg");
	this.shape_19.setTransform(264,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAIAAIAAAHQAEgEAEgCQAEgCAEAAQAEAAAEACQAEACADADQADADABAFIACAKQAAAGgCAFQgCAEgDAEQgEAEgEABQgFADgFAAIgGgBIgGgDIAAAdgAgDgdIgFACIgGAGIAAARQAAAEABABQACADACABIAGABQADAAAEgCQADgBACgDIAEgFIABgIIgBgHIgDgFQgCgDgCgBIgFgBIgEABg");
	this.shape_20.setTransform(258.1,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_21.setTransform(252.3,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAHgIQADgCACAAQADgBAEAEIgEAHIgEgCQgCAAgDADIgGAKIAAAcg");
	this.shape_22.setTransform(248.3,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAYQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAgDgPQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_23.setTransform(241.8,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFABgFQACgFADgDQADgEAEgCQAFgBAFAAQAEAAADABIAGAEQADADABAEQACAEAAAEIAAAFIghAAIAAAHQACAEACACIAFAEQACACAEAAQADAAADgCIAGgDIAEAGQgFAEgFABQgDABgFAAQgEAAgFgCgAANgGIgBgFIgDgEIgCgCIgGgBIgDABIgEACIgDAEIgCAFIAYAAIAAAAg");
	this.shape_24.setTransform(235.2,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAYQgFgCgDgDQgEgDgCgFQgCgFAAgGQAAgEACgFQACgFAEgEQAEgDAEgCQAFgCAFAAIAHABQAEABAFADIgGAGQgCgCgCgBIgGgBIgHABIgEAEQgDADgBADIgBAHIABAIQABADADADIAFADQACACAEAAIAHgBIAFgEIAFAHIgEACIgGACIgIABQgEAAgFgCg");
	this.shape_25.setTransform(230.3,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAHgIQADgCACAAQADgBAEAEIgEAHIgEgCQgCAAgDADIgGAKIAAAcg");
	this.shape_26.setTransform(226.3,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAZIgEgDQgCgCgBgCIgBgGIAAglIAJAAIAAAjIABAGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAFgBIAEgCQADgDAGgHIAAgeIAJAAIAAAxIgJAAIAAgKIgEAFIgFAEIgEACIgFABIgGgBg");
	this.shape_27.setTransform(221,0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgEQgEgDgCgFQgCgFAAgFQAAgEACgFQACgFAEgEQADgDAFgCQAEgCAEAAQAFAAAFACQAEACADADQAEAEACAFQACAFAAAEQAAAFgCAFQgCAFgEADQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgRIgFAEIgDAGIgBAHIABAHQABAEACACIAFAEQADACACAAIAGgCIAFgEIADgGQACgDAAgEIgCgHIgDgGIgFgEIgGgBQgCAAgDABg");
	this.shape_28.setTransform(215.1,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIADgHIAEACIAGACIAEABQAEAAADgCQADgCgBgCIgBgEIgDgEIgJgEQgHgCgDgDQgDgDAAgEQAAgEABgCIAFgFIAFgCIAHgBIAHAAQAEABAFADIgEAHIgHgEIgGgBQgDAAgDACQgCACAAADIABADQADADAJADIAGADIAEADIADAEIAAAFIgBAGIgDAEIgGADIgIABg");
	this.shape_29.setTransform(209.8,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAEAyIgEgGIgDgJIgHgRIgBgSIABgRIAHgSIADgJIAEgFIAIAAQgDAEgDAGIgFAMIgCAOIgBANIABAPIACANIAFANQADAFADAEg");
	this.shape_30.setTransform(206,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgFQgCgDgDgBQgEAAgEAEQgEADgHAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAFAAIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape_31.setTransform(197.7,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgEQgEgDgCgFQgCgFAAgFQAAgEACgFQACgFAEgEQADgDAFgCQAEgCAEAAQAFAAAFACQAEACADADQAEAEACAFQACAFAAAEQAAAFgCAFQgCAFgEADQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgRIgFAEIgDAGIgBAHIABAHQABAEACACIAFAEQADACACAAIAGgCIAFgEIADgGQACgDAAgEIgCgHIgDgGIgFgEIgGgBQgCAAgDABg");
	this.shape_32.setTransform(191.7,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAkIAAgxIAHAAIAAAxgAgDgaQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_33.setTransform(187.5,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAeQgDgDAAgFIAAggIgIAAIAAgFIAIgCIAAgPIAIAAIAAAPIANAAIAAAHIgNAAIAAAbIAAACIAAADQAAABAAAAQAAABAAAAQABAAAAAAQABABABAAQACAAAFgEIADAGIgHAEQgCACgDAAQgDAAgDgDg");
	this.shape_34.setTransform(184.4,-0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_35.setTransform(180.2,0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAkIAAgxIAHAAIAAAxgAgDgaQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_36.setTransform(176.2,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAYQgFgCgDgDQgEgDgCgFQgBgFAAgGQAAgEABgFQACgFAEgEQADgDAFgCQAFgCAFAAIAHABQAEABAFADIgGAGQgCgCgDgBIgFgBIgHABIgFAEQgCADgBADIgBAHIABAIQABADACADIAGADQACACAEAAIAHgBIAFgEIAFAHIgEACIgGACIgIABQgFAAgEgCg");
	this.shape_37.setTransform(172.6,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgEQgEgDgCgFQgCgFAAgFQAAgEACgFQACgFAEgEQADgDAFgCQAEgCAEAAQAFAAAFACQAEACADADQAEAEACAFQACAFAAAEQAAAFgCAFQgCAFgEADQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgRIgFAEIgDAGIgBAHIABAHQABAEACACIAFAEQADACACAAIAGgCIAFgEIADgGQACgDAAgEIgCgHIgDgGIgFgEIgGgBQgCAAgDABg");
	this.shape_38.setTransform(167.1,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIAEgHIADACIAGACIAEABQAFAAACgCQADgCgBgCIgBgEIgDgEIgJgEQgHgCgDgDQgDgDAAgEQAAgEABgCIAFgFIAFgCIAHgBIAGAAQAFABAFADIgEAHIgHgEIgGgBQgDAAgDACQgCACAAADIABADQADADAJADIAGADIAEADIACAEIABAFIgBAGIgDAEIgGADIgIABg");
	this.shape_39.setTransform(161.7,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIADgHIAEACIAGACIAFABQAEAAACgCQACgCABgCIgBgEIgFgEIgIgEQgHgCgDgDQgDgDAAgEQAAgEACgCIADgFIAGgCIAHgBIAHAAQAEABAFADIgEAHIgHgEIgFgBQgEAAgDACQgCACAAADIABADQAEADAHADIAHADIAEADIADAEIAAAFIgBAGIgEAEIgFADIgHABg");
	this.shape_40.setTransform(156.8,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAWAlIgHgVIgdAAIgHAVIgKAAIAbhJIAJAAIAbBJgAAMAIIgMghIgLAhIAXAAg");
	this.shape_41.setTransform(151.1,-0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIAEgHIADACIAGACIAFABQAEAAACgCQADgCAAgCIgCgEIgEgEIgIgEQgHgCgDgDQgDgDAAgEQAAgEACgCIADgFIAHgCIAGgBIAGAAQAFABAFADIgEAHIgHgEIgFgBQgEAAgCACQgDACAAADIABADQADADAIADIAHADIAEADIACAEIABAFIgBAGIgDAEIgGADIgHABg");
	this.shape_42.setTransform(142.7,0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAnQgDgCgDgDQgDgEgBgEQgCgFAAgFQAAgGACgFQACgFAEgDQADgEAEgCQAFgCAFAAIAGABIAGADIAAghIAIAAIAABPIgIAAIAAgGQgEAEgEACQgFACgDAAQgFAAgEgCgAgCgCQgEACgCABQgCADgBAEQgCADAAAFIABAHIADAFIAEAEIAFABIAEgBQADgBACgCIAGgFIAAgRIgBgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgGgBIgGABg");
	this.shape_43.setTransform(137.1,-0.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgFQgCgDgDgBQgEAAgEAEQgEADgHAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAFAAIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape_44.setTransform(131.4,0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMAZIgEgDQgCgCgBgCIgBgGIAAglIAJAAIAAAjIABAGQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAFgBIAEgCQADgDAGgHIAAgeIAJAAIAAAxIgJAAIAAgKIgEAFIgFAEIgEACIgFABIgGgBg");
	this.shape_45.setTransform(125.4,0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIApAAIAAAHIggAAIAAAZIAaAAIAAAHIgaAAIAAAgg");
	this.shape_46.setTransform(120.5,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAoIAAhPIAHAAIAABPg");
	this.shape_47.setTransform(113.2,-1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_48.setTransform(109.3,0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAZIgEgDQgCgCgBgCIgBgGIAAglIAJAAIAAAjIABAGQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAFgBIAEgCQADgDAGgHIAAgeIAJAAIAAAxIgJAAIAAgKIgEAFIgFAEIgEACIgFABIgGgBg");
	this.shape_49.setTransform(103.7,0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDAeQgDgDAAgFIAAggIgIAAIAAgFIAIgCIAAgPIAIAAIAAAPIANAAIAAAHIgNAAIAAAbIAAACIAAADQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQACAAAFgEIADAGIgHAEQgCACgDAAQgDAAgDgDg");
	this.shape_50.setTransform(99.1,-0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAZIgEgDQgCgCgBgCIgBgGIAAglIAJAAIAAAjIABAGQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAFgBIAEgCQADgDAGgHIAAgeIAJAAIAAAxIgJAAIAAgKIgEAFIgFAEIgEACIgFABIgGgBg");
	this.shape_51.setTransform(94.4,0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAbAkIAAg+IgCAJIgWA1IgHAAIgUg0IgDgKIAAA+IgIAAIAAhHIAMAAIAWA5IABAFIABgFIAXg5IAMAAIAABHg");
	this.shape_52.setTransform(86.6,-0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgFQgCgDgDgBQgEAAgEAEQgEADgHAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAFAAIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape_53.setTransform(76.1,0.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_54.setTransform(70.5,0.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDAkIAAgxIAHAAIAAAxgAgDgaQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_55.setTransform(66.6,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgJAnQgEgCgDgDQgDgEgBgEQgCgFAAgFQAAgGACgFQACgFADgDQAEgEAEgCQAFgCAEAAIAIABIAFADIAAghIAIAAIAABPIgIAAIAAgGQgEAEgEACQgEACgEAAQgEAAgEgCgAgCgCQgEACgCABQgCADgBAEQgCADAAAFIABAHIADAFIAEAEIAFABIAEgBQADgBACgCIAGgFIAAgRIgCgHQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgHgBIgFABg");
	this.shape_56.setTransform(62.1,-0.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_57.setTransform(56.7,0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAMAZIAAgiIAAgFQgCgDgDgBQgEAAgEAEQgEADgHAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAFAAIAEADQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIABAGIAAAkg");
	this.shape_58.setTransform(51.2,0.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_59.setTransform(45.6,0.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAlIgGgCIgGgDIgGgFIgEgGIgDgGIgDgHIAAgIIAAgHIADgHIADgGIAEgGIAGgEIAGgEIAGgCIAHgBQAFAAAJADQAEABAEADIgEAHQgEgDgFgBIgJgBQgGAAgEACQgEACgEAEQgEADgCAGQgBAFAAAGQAAAGACAFQABAGAEAEQAEAEAFACQAEACAHAAIAIAAIAIgDIADAHIgKADIgKACIgIgBg");
	this.shape_60.setTransform(40.1,-0.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_61.setTransform(31.3,0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDAoIAAhPIAHAAIAABPg");
	this.shape_62.setTransform(27.4,-1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAYQgFgCgDgDQgDgEgCgEQgCgFAAgGQAAgFACgFQACgFADgDQADgEAFgCQAEgBAFAAQADAAAEABIAGAEQADADABAEQABAEAAAEIAAAFIghAAIABAHQABAEADACIAFAEQACACADAAQAEAAADgCIAGgDIAEAGQgFAEgEABQgEABgFAAQgEAAgEgCgAAMgGIAAgFIgCgEIgEgCIgEgBIgEABIgEACIgDAEIgCAFIAXAAIAAAAg");
	this.shape_63.setTransform(20.8,0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJAnQgEgCgDgDQgDgEgBgEQgCgFAAgFQAAgGACgFQACgFADgDQAEgEAFgCQAEgCAFAAIAHABIAEADIAAghIAJAAIAABPIgJAAIAAgGQgDAEgEACQgEACgEAAQgEAAgEgCgAgDgCQgDACgCABQgDADgBAEQgBADAAAFIABAHIADAFIAEAEIAFABIAEgBQADgBACgCIAFgFIAAgRIgBgHQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgHgBIgGABg");
	this.shape_64.setTransform(15.1,-0.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIAEgHIADACIAGACIAEABQAEAAADgCQACgCAAgCIgBgEIgDgEIgJgEQgHgCgDgDQgDgDAAgEQAAgEACgCIADgFIAHgCIAGgBIAGAAQAFABAFADIgEAHIgHgEIgGgBQgDAAgCACQgDACAAADIABADQADADAJADIAGADIAEADIACAEIABAFIgBAGIgDAEIgGADIgIABg");
	this.shape_65.setTransform(7.1,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgGAYQgFgCgDgDQgDgEgBgEQgCgFgBgGQABgFACgFQABgFADgDQAEgEAEgCQAEgBAEAAQAEAAAEABIAHAEQACADABAEQACAEgBAEIAAAFIghAAIACAHQABAEACACIAFAEQACACADAAQAEAAADgCIAHgDIADAGQgGAEgEABQgDABgFAAQgEAAgEgCgAAMgGIgBgFIgBgEIgDgCIgGgBIgDABIgEACIgDAEIgCAFIAXAAIAAAAg");
	this.shape_66.setTransform(2.1,0.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAHgIQADgCACAAQADgBAEAEIgEAHIgEgCQgCAAgDADIgGAKIAAAcg");
	this.shape_67.setTransform(-1.9,0.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgQAoIgFgCIAAhOIAJAAIAAAhIAFgDIAJgBQAEAAAEACIAGAFQADADACADQABAFAAAFQAAAHgCAFQgCAFgEAEQgDAEgGACQgFACgGAAIgKgBgAgHgCIgFACIAAAgQACABAFAAIAEAAQADgBADgDQAFgDACgEQABgDAAgHIgBgHQAAgDgDgCIgEgCQgDgBgDAAIgGABg");
	this.shape_68.setTransform(-6.8,-0.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAdAZIAAgiIgBgFQgBgDgEgBQgDABgEADIgKAIIgCACIAAAdIgHAAIAAgiIgBgFQgBgDgEgBQgEAAgEAEQgFADgGAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAGAAIACACQABABAAAAQABABAAAAQAAABAAAAQABABAAAAIABAFIAHgHIAGgDIAHgBIAGAAIAEADIADAEIAAAGIAAAkg");
	this.shape_69.setTransform(-14.6,0.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgDgDQgDgEgCgEQgBgFAAgGQAAgFABgFQACgFADgDQADgEAEgCQAFgBAFAAQAEAAADABIAGAEQADADABAEQACAEAAAEIAAAFIghAAIAAAHQACAEACACIAFAEQACACAEAAQADAAADgCIAGgDIAEAGQgFAEgFABQgDABgFAAQgEAAgFgCgAANgGIgBgFIgDgEIgDgCIgFgBIgDABIgEACIgDAEIgCAFIAYAAIAAAAg");
	this.shape_70.setTransform(-21.8,0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAdAZIAAgiIgBgFQgBgDgEgBQgDABgEADIgKAIIgCACIAAAdIgHAAIAAgiIgBgFQgBgDgEgBQgEAAgEAEQgFADgGAHIAAAdIgIAAIAAgwIAIAAIAAAKIAHgHIAGgDIAHgBIAGAAIACACQABABAAAAQABABAAAAQAAABAAAAQABABAAAAIABAFIAHgHIAGgDIAHgBIAGAAIAEADIADAEIAAAGIAAAkg");
	this.shape_71.setTransform(-29,0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIAEgHIADACIAGACIAEABQAEAAADgCQACgCAAgCIgBgEIgDgEIgJgEQgHgCgDgDQgDgDAAgEQAAgEABgCIAFgFIAGgCIAGgBIAGAAQAFABAFADIgEAHIgHgEIgGgBQgDAAgCACQgDACAAADIABADQADADAJADIAGADIAEADIACAEIABAFIgBAGIgDAEIgGADIgIABg");
	this.shape_72.setTransform(-38.9,0.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgGAYQgFgCgDgDQgDgEgBgEQgDgFAAgGQAAgFADgFQABgFADgDQAEgEAEgCQAEgBAEAAQAEAAAEABIAHAEQACADABAEQACAEgBAEIAAAFIghAAIABAHQACAEACACIAFAEQACACADAAQAEAAADgCIAHgDIADAGQgGAEgDABQgEABgFAAQgEAAgEgCgAAMgGIgBgFIgBgEIgEgCIgEgBIgEABIgEACIgDAEIgCAFIAXAAIAAAAg");
	this.shape_73.setTransform(-43.9,0.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgDAoIAAhPIAHAAIAABPg");
	this.shape_74.setTransform(-47.8,-1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgFAaIgMgFIAEgHIADACIAGACIAEABQAFAAACgCQADgCgBgCIgBgEIgDgEIgJgEQgHgCgDgDQgDgDAAgEQAAgEABgCIAFgFIAFgCIAHgBIAGAAQAFABAFADIgEAHIgHgEIgGgBQgDAAgDACQgCACAAADIABADQADADAJADIAGADIAEADIACAEIABAFIgBAGIgDAEIgGADIgIABg");
	this.shape_75.setTransform(-54.3,0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgMAZIgEgDQgCgCgBgCIgBgGIAAglIAJAAIAAAjIABAGQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAFgBIAEgCQADgDAGgHIAAgeIAJAAIAAAxIgJAAIAAgKIgEAFIgFAEIgEACIgFABIgGgBg");
	this.shape_76.setTransform(-59.7,0.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgDgEQgEgDgCgFQgCgFAAgFQAAgEACgFQACgFAEgEQADgDAFgCQAEgCAEAAQAFAAAFACQAEACADADQAEAEACAFQACAFAAAEQAAAFgCAFQgCAFgEADQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgRIgFAEIgDAGIgBAHIABAHQABAEACACIAFAEQADACACAAIAGgCIAFgEIADgGQACgDAAgEIgCgHIgDgGIgFgEIgGgBQgCAAgDABg");
	this.shape_77.setTransform(-65.6,0.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgDAeQgDgDAAgFIAAggIgIAAIAAgFIAIgCIAAgPIAIAAIAAAPIANAAIAAAHIgNAAIAAAbIAAACIAAADQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQACAAAFgEIADAGIgHAEQgCACgDAAQgDAAgDgDg");
	this.shape_78.setTransform(-70.2,-0.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAHgIQADgCACAAQADgBAEAEIgEAHIgEgCQgCAAgDADIgGAKIAAAcg");
	this.shape_79.setTransform(-76,0.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_80.setTransform(-80.9,0.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAIAAIAAAHQAEgEAEgCQAEgCAEAAQAEAAAEACQAEACADADQADADABAFIACAKQAAAGgCAFQgCAEgDAEQgEAEgEABQgFADgFAAIgGgBIgGgDIAAAdgAgDgdIgFACIgGAGIAAARQAAAEABABQACADACABIAGABQADAAAEgCQADgBACgDIAEgFIABgIIgBgHIgDgFQgCgDgCgBIgFgBIgEABg");
	this.shape_81.setTransform(-86.3,1.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAjQgEgCgDgDQgDgEgCgEQgBgGAAgFQAAgGABgFQACgEADgEQADgDAEgCQAFgBAEAAQAFAAADABIAGAEQADADABADQACADAAAFIAAAFIghAAIABAIQABADACADIAFAEQACACAEAAQADAAADgCIAGgEIAEAHQgGAEgEAAQgDACgFAAQgEAAgFgCgAANAEIgCgFIgCgDIgCgCIgGgBIgDABIgEACIgDADIgCAFIAYAAIAAAAgAgCgSIAIgSIAKAAIgMASg");
	this.shape_82.setTransform(-94.8,-0.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAHgIQADgCACAAQADgBAEAEIgEAHIgEgCQgCAAgDADIgGAKIAAAcg");
	this.shape_83.setTransform(-98.8,0.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgHAjQgEgCgDgDQgDgEgBgEQgCgGgBgFQABgGACgFQABgEADgEQAEgDADgCQAFgBAEAAQAEAAAEABIAHAEQACADABADQACADgBAFIAAAFIghAAIACAIQABADACADIAFAEQACACADAAQAEAAADgCIAHgEIADAHQgGAEgEAAQgDACgFAAQgEAAgFgCgAAMAEIgBgFIgBgDIgDgCIgGgBIgDABIgEACIgDADIgCAFIAXAAIAAAAgAgDgSIAJgSIAKAAIgMASg");
	this.shape_84.setTransform(-103.6,-0.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgLAmIgHgCIgDgEIgCgFIACgFIAGgIIgFgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgCADgEIAHgGQgFgCgCgEQgDgFAAgEQAAgFACgDIADgHQADgCAEgBQAEgBAEAAQAEAAAGACIAHAAIAJgBIAAAHIgKAAIACAEIABAGIgCAHIgEAGQgDADgDABQgEACgCAAIgEAAIgCAAIgEADIgCADQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIASAAIAGABIAEABIACAEIACAFQAAAEgDAFQgCADgDADQgEADgFABQgFACgEAAIgIgBgAgKARQgFAHAAACQAAADAEABQADACAFAAIAGgBIAGgDQADgCACgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgCgCgDAAIgSAAgAgHggIgDAEIgCADIgCAFIACAFIACAEIADACIAFABIADgBIAEgCIACgEIABgFIgBgFIgCgDIgEgEIgDgBIgFABg");
	this.shape_85.setTransform(-108.8,1.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgLApIAAgqIgIAAIAAgFIAIgCIAAgIQAAgGACgEQABgEADgDQADgDADgCQAEgCAFAAIAFABIAFACIgDAHIgIgCIgGABQgCABgBADIgCAFIgBAIIAAAGIALAAIAAAHIgLAAIAAAqg");
	this.shape_86.setTransform(-115.3,-1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgDAkIAAgxIAHAAIAAAxgAgDgaQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_87.setTransform(-119,-0.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgDAeQgDgDAAgFIAAggIgIAAIAAgFIAIgCIAAgPIAIAAIAAAPIANAAIAAAHIgNAAIAAAbIAAACIAAADQAAABAAAAQAAABAAAAQABAAAAAAQABABABAAQACAAAFgEIADAGIgHAEQgCACgDAAQgDAAgDgDg");
	this.shape_88.setTransform(-122,-0.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgFAYQgFgCgDgDQgDgDgCgFQgCgFAAgGQAAgEACgFQACgFADgEQAEgDAEgCQAFgCAFAAIAHABQAEABAEADIgEAGQgDgCgDgBIgFgBIgGABIgGAEQgCADgBADIgBAHIABAIQABADACADIAGADQACACAEAAIAGgBIAGgEIAEAHIgDACIgHACIgHABQgEAAgFgCg");
	this.shape_89.setTransform(-125.9,0.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AALAYQgCgBAAgEIgFAEIgFACIgFABIgFgBIgFgDIgCgEIgBgFIAAgFIADgEIADgDIAFgBIAQgEIAAgJQAAgDgCgCQgDgBgDAAIgGABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgIACIgBgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIADgDIAGgDIAGAAIAHAAIAFADIADAEIABAFIAAAeQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIgBAHQgGAAgCgCgAgKAHIgBAFQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACADAAIAEgCIAIgFIAAgKg");
	this.shape_90.setTransform(-131.1,0.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgaALIAAgHIA1AAIAAAHgAgagEIAAgGIA1AAIAAAGg");
	this.shape_91.setTransform(-139.5,0.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIAoAAIAAAHIgfAAIAAAYIAaAAIAAAHIgaAAIAAAaIAgAAIAAAHg");
	this.shape_92.setTransform(-147.9,-0.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgDAkIAAhHIAIAAIAABHg");
	this.shape_93.setTransform(-152.8,-0.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAOAkIgTgfIgJAAIAAAfIgJAAIAAhHIAVAAIAKABQAEABADADQADADABADIACAIQAAAFgCADIgFAHQgCACgDABIgGACIAVAggAgOgBIAMAAIAFgBQACgBACgCIADgEIABgHIgBgGIgDgEIgEgBIgFgBIgMAAg");
	this.shape_94.setTransform(-157.2,-0.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgEAkIAAhAIgYAAIAAgHIA5AAIAAAHIgZAAIAABAg");
	this.shape_95.setTransform(-163.8,-0.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgHAlIgGgCIgKgFIAFgHIAIAEQAFACAFAAIAFAAIAFgDQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIgBgFQgCgDgEgDIgLgGIgHgEIgFgEIgDgFIAAgFQAAgFABgDQACgEADgCQADgDAFgBQAEgCAFAAQAGAAAGACIAJAEIgFAIIgHgEIgKgBIgFAAIgEADIgDADIgBAEIABAEIACADIAOAJIALAGQADACABAEQACADAAAEQAAAFgCAEQgBAEgEACQgDADgEABQgFACgEAAIgHgBg");
	this.shape_96.setTransform(-169.7,-0.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgKAkIgJgFIgEgEIgDgFQgBgDgBgJIAAguIAJAAIAAAsIABAJQABADADADQACADAEACQAFABADAAQAEAAAEgBQAEgCADgDQADgDAAgDIACgJIAAgsIAJAAIAAAuQgBAJgCADIgCAFIgEAEIgJAFQgFABgGAAIgKgBg");
	this.shape_97.setTransform(-176.5,-0.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgdAkIAAhHIAYAAIAHAAIAHACIAGAEIAFAEIAFAFIADAGIACAHIAAAHIAAAHIgCAHIgDAGIgEAGIgGAFIgFADIgIACIgHAAgAgUAdIAOAAQAGAAAEgCQAFgBADgEQAEgEADgGIACgMQAAgFgCgGQgCgFgEgEQgEgEgFgCQgEgCgGAAIgOAAg");
	this.shape_98.setTransform(-183.9,-0.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AATAlIgjg4IgCgDIgBgBIgBgDIAAA+IgJAAIAAhHIAMAAIAjA2IABABIABAEIABABIAAg8IAJAAIAABIg");
	this.shape_99.setTransform(-192.3,-0.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgDAkIAAhHIAIAAIAABHg");
	this.shape_100.setTransform(-198.1,-0.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgDANIAAgYIAHAAIAAAYg");
	this.shape_101.setTransform(-201.1,-3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgDAkIAAhHIAIAAIAABHg");
	this.shape_102.setTransform(-204.1,-0.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIAoAAIAAAHIgfAAIAAAYIAZAAIAAAHIgZAAIAAAaIAgAAIAAAHg");
	this.shape_103.setTransform(-211.1,-0.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgdAkIAAhHIAYAAIAHAAIAHACIAGAEIAFAEIAFAFIADAGIACAHIAAAHIAAAHIgCAHIgDAGIgEAGIgGAFIgFADIgIACIgHAAgAgUAdIAOAAQAGAAAEgCQAFgBADgEQAEgEADgGIACgMQAAgFgCgGQgCgFgEgEQgEgEgFgCQgEgCgGAAIgOAAg");
	this.shape_104.setTransform(-218,-0.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIAJAAIAABAIAgAAIAAAHg");
	this.shape_105.setTransform(-227.1,-0.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAWAlIgHgVIgdAAIgHAVIgKAAIAbhJIAJAAIAbBJgAAMAIIgMghIgLAhIAXAAg");
	this.shape_106.setTransform(-233.6,-0.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgEAkIAAhAIgYAAIAAgHIA5AAIAAAHIgZAAIAABAg");
	this.shape_107.setTransform(-239.1,-0.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgHAlIgHgCIgGgDIgFgFIgEgFIgEgHIgCgHIAAgIIAAgHIACgHIAEgHIAEgFIAFgFIAGgDIAHgCIAHgBIAIABIAHACIAGADIAFAFIAEAFIAEAHIACAHIAAAHIAAAIIgCAHIgEAHIgEAFIgFAFIgGADIgHACIgIABIgHgBgAgJgaQgFACgEAEQgEAEgCAFQgCAGAAAFQAAAGACAGQACAFAEAEQAEAEAFACQAEADAFAAQAGAAAEgDQAFgCADgEQAFgEACgFQACgGAAgGQAAgFgCgGQgCgFgFgEQgDgEgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_108.setTransform(-246.2,-0.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgEAkIAAhAIgYAAIAAgHIA5AAIAAAHIgZAAIAABAg");
	this.shape_109.setTransform(-253.3,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.3,-9.1,639,17.2);


(lib.M_Graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(1));

	// IndustryTotalDisclaimer
	this.instance = new lib.Disclaimer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-43.6,83);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({alpha:1},6).wait(1));

	// "%ofIndustry...
	this.instance_1 = new lib.G_ofIndustry("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.3,-104.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).to({alpha:1},8).wait(7));

	// IndustryTotalNumbers
	this.instance_2 = new lib.G_IndustryTotalNumbers("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.9,-38.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({alpha:1},15).wait(19));

	// "IndustryTotal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAgIAAg/IAkAAIAAAHIgcAAIAAAVIAXAAIAAAGIgXAAIAAAXIAdAAIAAAGg");
	this.shape.setTransform(-172.8,-103.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_1.setTransform(-177.2,-103.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAgIgRgbIgJAAIAAAbIgIAAIAAg/IAUAAIAIABQADABADADQADACABADIABAHQAAAEgBAEIgEAGIgEACIgGABIATAdgAgNgBIALAAIAEgBIAEgCQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIABgGIgBgFIgDgEIgDgBIgFAAIgLAAg");
	this.shape_2.setTransform(-181.1,-103.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgVAAIAAgHIAxAAIAAAHIgVAAIAAA4g");
	this.shape_3.setTransform(-186.9,-103.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAgIgGgBIgIgFIAEgGIAHAEQAFACAEAAIAFgBIADgCIADgDIABgEIgBgEIgFgGIgLgGIgFgDIgFgDIgDgFIAAgEIABgHIAFgGQACgCAEgBQAEgBAEAAQAGAAAFABIAIAEIgEAGIgHgDIgJgBIgDABIgFACIgCACIgBAEIABADIACADIAMAIIAKAGIAEAEIABAHIgBAIIgEAGQgEACgDABQgEACgEgBIgGgBg");
	this.shape_4.setTransform(-192.1,-103.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAgQgEgCgEgDIgDgDIgDgEIgBgLIAAgpIAIAAIAAAnIAAAIIADAFQADADADACIAHABIAIgBIAFgFQADgCAAgDIABgIIAAgnIAIAAIAAApQAAAIgCADIgCAEIgDADQgEADgEACQgFABgFAAQgEAAgFgBg");
	this.shape_5.setTransform(-198.1,-103.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAgIAAg/IAWAAIAFAAIAGACIAGADIAFAEIAEAFIADAFIABAGIABAGIgBAGIgBAGIgDAGIgEAFIgEAEIgGADIgGACIgGAAgAgSAaIAMAAQAGAAAEgCQADgBADgDQAEgEACgGQACgDAAgHQAAgFgCgEQgBgFgEgDQgDgEgEgBQgFgCgFAAIgMAAg");
	this.shape_6.setTransform(-204.6,-103.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAgIgggxIgBgCIgBgCIAAgCIAAA3IgJAAIAAg/IALAAIAfAvIABACIABADIAAABIAAg1IAJAAIAAA/g");
	this.shape_7.setTransform(-212,-103.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_8.setTransform(-217.2,-103.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_9.setTransform(-219.8,-105.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_10.setTransform(-222.5,-103.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAgIAAg/IAjAAIAAAHIgbAAIAAAVIAWAAIAAAGIgWAAIAAAXIAbAAIAAAGg");
	this.shape_11.setTransform(-228.6,-103.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAgIAAg/IAVAAIAHAAIAGACIAFADIAFAEIADAFIADAFIADAGIAAAGIAAAGIgDAGIgCAGIgDAFIgGAEIgEADIgHACIgHAAgAgSAaIAMAAQAGAAADgCQAEgBAEgDQADgEADgGQABgDABgHQAAgFgCgEQgCgFgEgDQgDgEgFgBQgEgCgFAAIgMAAg");
	this.shape_12.setTransform(-234.7,-103.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAgIAAg/IAIAAIAAA5IAcAAIAAAGg");
	this.shape_13.setTransform(-242.7,-103.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATAhIgGgTIgZAAIgGATIgJAAIAYhBIAHAAIAYBBgAAKAGIgKgcIgJAcIATAAg");
	this.shape_14.setTransform(-248.5,-103.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgVAAIAAgHIAxAAIAAAHIgVAAIAAA4g");
	this.shape_15.setTransform(-253.4,-103.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAgIgGgBIgFgDIgFgEIgEgFIgDgGIgCgGIAAgHIAAgGIACgGIADgGIAEgFIAFgEIAFgDIAGgCIAGAAIAHAAIAGACIAFADIAFAEIAEAFIADAGIACAGIAAAGIAAAHIgCAGIgDAGIgEAFIgFAEIgFADIgGABIgHABIgGgBgAgIgXQgEACgEADIgFAIQgCAFAAAFQAAAFACAFQACAFADADQAEAEAEACQAEACAEAAQAFAAAEgCQAEgCAEgEQADgDACgFQACgFAAgFQAAgFgCgFIgFgIQgEgDgEgCQgEgCgFgBQgEABgEACg");
	this.shape_16.setTransform(-259.7,-103.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgVAAIAAgHIAxAAIAAAHIgVAAIAAA4g");
	this.shape_17.setTransform(-266,-103.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},48).wait(43));

	// AGFNumbers
	this.instance_3 = new lib.G_AGFNumbers("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.4,63.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).to({alpha:1},9).wait(51));

	// AGFGroup
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECB02C").s().p("AgYAwIAAhfIAxAAIAAAOIggAAIAAAbIAbAAIAAANIgbAAIAAApg");
	this.shape_18.setTransform(-207.9,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECB02C").s().p("AgBAxIgIgDIgIgEIgHgGIgFgIIgEgIIgDgKIAAgKIAAgJIACgKIAFgIIAFgIIAGgGQAEgCAEgCIAJgDIAIgBQAJAAAHACQAHACAHADIgGAQQgPgHgHgBQgGABgEACQgFACgEAEQgEAGgDAFQgBAHAAAHQgBAGADAHQACAGAFAGQAEAEAFADQAEACAGABIAEgBIAEgBIAAgcIASAAIAAAnIgOAEQgIACgGAAIgJgBg");
	this.shape_19.setTransform(-215.9,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECB02C").s().p("AASAwIgGgYIgXAAIgGAYIgSAAIAchfIAPAAIAcBfgAAIAJIgIggIgIAgIAQAAg");
	this.shape_20.setTransform(-223.7,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECB02C").s().p("AgJAhQgFgCgEgEQgEgFgCgGQgCgHAAgHQABgIABgHQACgHAEgFQADgEAGgDQAFgDAGAAQAGAAAEADQAFACADAEQADAEACAGQABAGABAGIAAAGIgkAAIABAEQAAAHADAEIAEAEQABABADAAIAJgBIAJgDIAFAMQgGADgFABQgGACgIAAQgFAAgFgDgAAJgHQAAgHgCgFQgCgDgEgBQgEAAgCAEQgDAFAAAHIARAAIAAAAg");
	this.shape_21.setTransform(-233.1,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ECB02C").s().p("AgbA0IAAhlIARAAIAAAJIAGgHQAEgEAFAAQAFAAAEADQAFADADAEIADALQACAGAAAHQAAAIgCAHQgBAGgFAFQgDAFgFADQgGADgFAAQgGAAgEgDIAAAjgAgGghIgEAHIAAAXQAAADACADQADADAEAAIADgBIAEgFIADgGIABgKQAAgGgDgJQgDgGgEAAQgCAAgEAEg");
	this.shape_22.setTransform(-239.2,16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ECB02C").s().p("AgQAiIgFgEIgCgGIgBgIIAAgyIARAAIAAAvIAAAEQAAABABABQAAABABAAQAAABABAAQAAAAABAAIAAAAQAEgBAGgHIACgEIAAgrIAQAAIAABEIgQAAIAAgKIgJAIQgDACgFAAIgIAAg");
	this.shape_23.setTransform(-246.1,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECB02C").s().p("AgLAhQgFgCgEgGQgEgFgCgGQgCgGAAgIQAAgGACgHQACgHAEgEQAEgFAFgDQAGgDAFAAQAHAAAFADQAFADAEAFQAEAEACAHQACAHAAAGQAAAIgCAGQgCAGgEAFQgEAGgFACQgFADgHAAQgFAAgGgDgAgHgQIgCAIIgBAIIABAKIACAIQAEAFADAAIAEgBIAEgFIADgHIABgKIgBgIIgDgIIgEgFIgEgBQgDAAgEAGg");
	this.shape_24.setTransform(-252.6,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ECB02C").s().p("AgRAjIAAhEIAPAAIAAAPQACgHACgEQADgEAEgBIAEABIAFAFIgFARQgCgDgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABIgDADQAAAFAAAHIAAAgg");
	this.shape_25.setTransform(-257.4,14.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECB02C").s().p("AgBAxIgJgDIgHgEIgHgGIgFgIIgEgIIgDgKIgBgKIABgJIACgKIAFgIIAFgIIAGgGQAEgCAEgCIAJgDIAIgBQAJAAAHACQAHACAHADIgGAQQgPgHgHgBQgGABgEACQgFACgEAEQgEAGgDAFQgCAHAAAHQABAGACAHQACAGAEAGQAFAEAEADQAFACAGABIAEgBIAEgBIAAgcIASAAIAAAnIgOAEQgIACgHAAIgIgBg");
	this.shape_26.setTransform(-264.4,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},24).wait(67));

	// GraphNumbersMain
	this.instance_4 = new lib.G_GraphNumbersMain("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-315.2,-37.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({alpha:1},9).wait(71));

	// GraphLines
	this.instance_5 = new lib.G_GraphLines("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-290.6,-37.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},9).wait(77));

	// Headline
	this.instance_6 = new lib.G_Headline("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-130.1,-150.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9).wait(82));

	// Mask2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_48 = new cjs.Graphics().p("A4Hg9IAAkwIA6AAIAAEwg");
	var mask_graphics_49 = new cjs.Graphics().p("A4Hg9IAAkwIGZAAIAAEwg");
	var mask_graphics_50 = new cjs.Graphics().p("A4Hg9IAAkwIL3AAIAAEwg");
	var mask_graphics_51 = new cjs.Graphics().p("A4Hg9IAAkwIRWAAIAAEwg");
	var mask_graphics_52 = new cjs.Graphics().p("A4Hg9IAAkwIW0AAIAAEwg");
	var mask_graphics_53 = new cjs.Graphics().p("A4Hg9IAAkwIcSAAIAAEwg");
	var mask_graphics_54 = new cjs.Graphics().p("A4Hg9IAAkwMAhwAAAIAAEwg");
	var mask_graphics_55 = new cjs.Graphics().p("A4Hg9IAAkwMAnOAAAIAAEwg");
	var mask_graphics_56 = new cjs.Graphics().p("A4Hg9IAAkwMAstAAAIAAEwg");
	var mask_graphics_57 = new cjs.Graphics().p("A5Fg9IAAkwMAyLAAAIAAEwg");
	var mask_graphics_58 = new cjs.Graphics().p("A70g9IAAkwMA3pAAAIAAEwg");
	var mask_graphics_59 = new cjs.Graphics().p("A+jg9IAAkwMA9HAAAIAAEwg");
	var mask_graphics_60 = new cjs.Graphics().p("EghTgA9IAAkwMBCnAAAIAAEwg");
	var mask_graphics_61 = new cjs.Graphics().p("EgkCgA9IAAkwMBIFAAAIAAEwg");
	var mask_graphics_62 = new cjs.Graphics().p("EgmxgA9IAAkwMBNjAAAIAAEwg");
	var mask_graphics_63 = new cjs.Graphics().p("EgpggA9IAAkwMBTBAAAIAAEwg");
	var mask_graphics_64 = new cjs.Graphics().p("EgsPgA9IAAkwMBYfAAAIAAEwg");
	var mask_graphics_65 = new cjs.Graphics().p("Egu/gA9IAAkwMBd/AAAIAAEwg");
	var mask_graphics_66 = new cjs.Graphics().p("EgxugA9IAAkwMBjdAAAIAAEwg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg0dgA9IAAkwMBo7AAAIAAEwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_graphics_48,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_49,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_50,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_51,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_52,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_53,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_54,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_55,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_56,x:-154.4,y:-36.6}).wait(1).to({graphics:mask_graphics_57,x:-148.1,y:-36.6}).wait(1).to({graphics:mask_graphics_58,x:-130.6,y:-36.6}).wait(1).to({graphics:mask_graphics_59,x:-113.1,y:-36.6}).wait(1).to({graphics:mask_graphics_60,x:-95.6,y:-36.6}).wait(1).to({graphics:mask_graphics_61,x:-78,y:-36.6}).wait(1).to({graphics:mask_graphics_62,x:-60.5,y:-36.6}).wait(1).to({graphics:mask_graphics_63,x:-43,y:-36.6}).wait(1).to({graphics:mask_graphics_64,x:-25.5,y:-36.6}).wait(1).to({graphics:mask_graphics_65,x:-7.9,y:-36.6}).wait(1).to({graphics:mask_graphics_66,x:9.6,y:-36.6}).wait(1).to({graphics:mask_graphics_67,x:27.1,y:-36.6}).wait(24));

	// WhiteLine
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.5).p("Egx4AAbIHhglIF3ASIFtgdIEOAwIGfgwIC5AwIEpglIHUAlIFXg4IF7A4IDAhOIBfBOIFShIIEzBhIF3hRIGfBRIG9hRIDmBRIDXhhIDBBh");
	this.shape_27.setTransform(30.3,-58.6,1.042,1.042);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.5).p("Egx4AAbIHhglIF3ASIFtgdIEOAwIGfgwIC5AwIEpglIHUAlIFXg4IF7A4IDAhOIBfBOIFShIIEzBhIF3hRIGfBRIG9hRIDmBRIDXhhIDBBh");
	this.shape_28.setTransform(30.3,-61.7,1.042,1.042);

	var maskedShapeInstanceList = [this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},48).wait(43));

	// Mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_26 = new cjs.Graphics().p("EgwaAEpIAAgWMBg1AAAIAAAWg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgwaAEpIAAhdMBg1AAAIAABdg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgwaAEpIAAikMBg1AAAIAACkg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgwaAEpIAAjrMBg1AAAIAADrg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgwaAEpIAAkxMBg1AAAIAAExg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgwaAEoIAAl3MBg1AAAIAAF3g");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgwaAEoIAAm+MBg1AAAIAAG+g");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgwaAEoIAAoFMBg1AAAIAAIFg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgwaAEoIAApMMBg1AAAIAAJMg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgwaAFKIAAqTMBg1AAAIAAKTg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgwaAFuIAArbMBg1AAAIAALbg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgwaAGRIAAshMBg1AAAIAAMhg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgwaAG1IAAtpMBg1AAAIAANpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_1_graphics_26,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_27,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_28,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_29,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_30,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_31,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_32,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_33,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_34,x:37.7,y:29.7}).wait(1).to({graphics:mask_1_graphics_35,x:37.7,y:26.3}).wait(1).to({graphics:mask_1_graphics_36,x:37.7,y:22.7}).wait(1).to({graphics:mask_1_graphics_37,x:37.7,y:19.2}).wait(1).to({graphics:mask_1_graphics_38,x:37.7,y:15.6}).wait(53));

	// OrangeBars
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBB02C").s().p("AjhFGIAAqLIHDAAIAAKLg");
	this.shape_29.setTransform(322.8,22.3,1.043,1.043);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EBB02C").s().p("AjiF3IAArtIHFAAIAALtg");
	this.shape_30.setTransform(259.7,17.1,1.043,1.043);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBB02C").s().p("AjiEbIAAo1IHEAAIAAI1g");
	this.shape_31.setTransform(196.6,26.8,1.043,1.043);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBB02C").s().p("AjiDbIAAm1IHFAAIAAG1g");
	this.shape_32.setTransform(133.4,33.5,1.043,1.043);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBB02C").s().p("AjhCdIAAk4IHDAAIAAE4g");
	this.shape_33.setTransform(70.3,40,1.043,1.043);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EBB02C").s().p("AjiBXIAAitIHFAAIAACtg");
	this.shape_34.setTransform(7.2,47.2,1.043,1.043);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EBB02C").s().p("AjhA7IAAh0IHDAAIAAB0g");
	this.shape_35.setTransform(-55.9,50.2,1.043,1.043);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBB02C").s().p("AjiApIAAhRIHFAAIAABRg");
	this.shape_36.setTransform(-119.1,52,1.043,1.043);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EBB02C").s().p("AjiAgIAAg/IHEAAIAAA/g");
	this.shape_37.setTransform(-182.2,52.9,1.043,1.043);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EBB02C").s().p("AjhAUIAAgnIHDAAIAAAng");
	this.shape_38.setTransform(-245.3,54.2,1.043,1.043);

	var maskedShapeInstanceList = [this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},26).wait(65));

	// Mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_48 = new cjs.Graphics().p("EAw4AEUIjgBmIjwhWInQBWImxhWImHBWIlBhmIlgBMIhjhSIjIBSImMg8IllA8InogoIk2AoIjBgzImxAzIkagzIl8AfImHgUIn2AoIAAraMBoBAAAIAAL0g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_2_graphics_48,x:30,y:-94.2}).wait(43));

	// B10
	this.instance_7 = new lib.G_B10("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(325.5,-19.3);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({y:-86.1},6).wait(15));

	// B9
	this.instance_8 = new lib.G_B9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(262.3,-16.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).to({y:-89.1},4).wait(20));

	// B8
	this.instance_9 = new lib.G_B8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(199.3,-24.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).to({y:-83.5},4).wait(22));

	// B7
	this.instance_10 = new lib.G_B7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(136.2,-28.8);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(61).to({_off:false},0).to({y:-78.8},4).wait(26));

	// B6
	this.instance_11 = new lib.G_B6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(73.1,-34.7);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({_off:false},0).to({y:-72.9},4).wait(29));

	// B5
	this.instance_12 = new lib.G_B5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(10,-41.3);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(56).to({_off:false},0).to({y:-66.3},5).wait(30));

	// B4
	this.instance_13 = new lib.G_B4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-53,-43.9);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},0).to({y:-63.6},5).wait(32));

	// B3
	this.instance_14 = new lib.G_B3("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-116.1,-45.6);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52).to({_off:false},0).to({y:-62},5).wait(34));

	// B2
	this.instance_15 = new lib.G_B2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-179.2,-46.4);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(49).to({_off:false},0).to({y:-61.2},5).wait(37));

	// B1
	this.instance_16 = new lib.G_B1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-242.3,-47.6);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({y:-60},3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305,-162.5,423.6,24.1);


(lib.M_AlanBlur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.G_AlanFront("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.M_AlanBlur, new cjs.Rectangle(-350,-163,700,326), null);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M_Graph();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.5,-129.5,423.6,24.1);


// stage content:
(lib._60s_700x326_French = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// CakeBG
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(351,136.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},12).wait(9));

	// AlanFront
	this.instance_1 = new lib.G_AlanFront("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-351.9,163);
	this.instance_1._off = true;

	this.instance_2 = new lib.M_AlanBlur();
	this.instance_2.parent = this;
	this.instance_2.setTransform(350,163);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({x:350},10,cjs.Ease.get(1)).to({_off:true},34).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({alpha:0},11).to({_off:true},1).wait(37));

	// GreyLayer
	this.instance_3 = new lib.G_BlackBG("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(354,165);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({alpha:0.699},7).wait(66));

	// AlanBG
	this.instance_4 = new lib.M_AlanBGBlur();
	this.instance_4.parent = this;
	this.instance_4.setTransform(350,163);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92).to({_off:false},0).to({alpha:1},15).wait(23));

	// AlanBG
	this.instance_5 = new lib.G_AlanBG("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(350,163);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({alpha:1},10).to({_off:true},51).wait(22));

	// WomenFront
	this.instance_6 = new lib.WomanFront();
	this.instance_6.parent = this;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({_off:true},50).wait(65));

	// GreyLayer2
	this.instance_7 = new lib.G_BlackBG("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(354,165);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:0.699},10).to({_off:true},40).wait(65));

	// WomenBG
	this.instance_8 = new lib.G_WomenBG("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(350,163);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({alpha:1},10).to({_off:true},50).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 700,
	height: 326,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/60s_700x326_French_atlas_.png", id:"60s_700x326_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;