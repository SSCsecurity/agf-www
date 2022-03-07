(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"337x334_atlas_", frames: [[0,328,700,326],[0,656,700,326],[0,984,700,326],[0,0,700,326],[0,1312,700,326]]}
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
	this.spriteSheet = ss["337x334_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AlanFull = function() {
	this.spriteSheet = ss["337x334_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AlanFullBlur = function() {
	this.spriteSheet = ss["337x334_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.WomanFront = function() {
	this.spriteSheet = ss["337x334_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.WomenFull = function() {
	this.spriteSheet = ss["337x334_atlas_"];
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
	this.instance.setTransform(-358,-167,1.024,1.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.M_AlanBGBlur, new cjs.Rectangle(-358,-167,716.8,333.8), null);


(lib.G_WomenBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WomenFull();
	this.instance.parent = this;
	this.instance.setTransform(-358,-167,1.024,1.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358,-167,716.8,333.8);


(lib.G_IndustryTotalNumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAnIA8hNIAHAAIg8BNgAAKAeQgGgFAAgIQAAgHAGgGQAFgEAIgBQAIABAFAEQAFAGAAAHQAAAIgFAFQgFAGgIgBQgIABgFgGgAAOAIQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQADgDAAgFQAAgFgDgEQgEgDgFAAQgFAAgEADgAgjgEQgFgFAAgIQAAgIAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAFQgFAFgIgBQgHABgGgFgAgegaQgEAEAAAFQAAAFAEADQADAEAFAAQAGAAADgEQADgDAAgFQAAgFgDgEQgEgDgFAAQgFAAgDADg");
	this.shape.setTransform(-50.8,-3.9,1.042,1.042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAJAAIAAAHIgJAAIAAASgAgMAKIASAAIAAgag");
	this.shape_1.setTransform(-58,-3.9,1.042,1.042);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_2.setTransform(-61.8,-0.8,1.042,1.042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAjIAAgFIAZgfQAFgJAAgGQAAgLgKABQgDgBgDACIgJAHIgFgGIAEgDQAIgHAJAAQASAAAAASIgBAIQgDAGgHAJIgPAUIAcAAIAAAIg");
	this.shape_3.setTransform(-65.9,-3.9,1.042,1.042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgOAAIAAgIIAWAAIAABFg");
	this.shape_4.setTransform(-71.2,-3.9,1.042,1.042);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAJAAIAAAHIgJAAIAAASgAgMAKIASAAIAAgag");
	this.shape_5.setTransform(-85.1,-4.1,1.042,1.042);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_6.setTransform(-88.9,-1,1.042,1.042);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAFAAQAEAAAEgEQAEgEAAgGQAAgLgMAAIgFAAIAAgGQAGgBADgFQAEgFAAgFQAAgIgGAAQgEAAgIAGIgEgGQAFgFADgBIAJgCQAGAAAFAEQAEAEAAAHQAAAFgEAFQgBADgFAEQANACAAAOQAAAKgHAGQgGAHgJAAQgHAAgIgEg");
	this.shape_7.setTransform(-92.9,-4.1,1.042,1.042);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgOAAIAAgIIAXAAIAABFg");
	this.shape_8.setTransform(-97.9,-4.1,1.042,1.042);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAgIADgIQAHAEAGAAQAEAAAEgEQADgEAAgGQAAgLgLAAIgFAAIAAgGQAGgCADgEQAEgEABgGQAAgIgHAAQgEAAgIAGIgFgGQAFgEAEgCQAFgCAEAAQAGAAAEAEQAFAEAAAHQAAAFgEAFQgCAEgEADQANACAAAOQAAAKgHAGQgHAHgIAAQgIAAgHgEg");
	this.shape_9.setTransform(-115.1,-4.1,1.042,1.042);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAgBQABAAAAAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_10.setTransform(-119,-1,1.042,1.042);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgNAAIAAgIIAWAAIAABFg");
	this.shape_11.setTransform(-122.9,-4.1,1.042,1.042);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgOAAIAAgIIAXAAIAABFg");
	this.shape_12.setTransform(-127.2,-4.1,1.042,1.042);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAiIgJgDIAEgIQAHAFAFgBQAFAAAEgEQAEgEAAgGQAAgMgKgCQgDgBgKAAIgBAAIAAghIAeAAIAAAIIgVAAIAAARQALAAAFAGQAHAEAAAMQAAAKgGAHQgGAHgIgBIgIgBg");
	this.shape_13.setTransform(-147.6,-4,1.042,1.042);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAAAAAgBQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAgBQABAAAAAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_14.setTransform(-151.8,-1,1.042,1.042);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAgQgHgFAAgHQAAgHAKgJIAGgFIgHgGQgGgFAAgIQAAgHAGgFQAFgEAIAAQAHAAAFAEQAFAEgBAHQAAAHgFAGIgHAGIAIAFQAJAHAAAIQgBAIgGAFQgGAGgJAAQgJAAgFgFgAgGAKQgFAFAAAFQAAAJALAAQAMAAAAgKQAAgEgGgFIgGgHgAgJgUQAAAEAEAEIAFAGIAFgFQAEgFAAgFQAAgIgJABQgJgBAAAJg");
	this.shape_15.setTransform(-155.9,-4.1,1.042,1.042);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAiQgDAAgGgDIAEgIQAHAFAFgBQAFAAAEgEQAEgEAAgGQAAgMgKgCQgDgBgKAAIgBAAIAAghIAeAAIAAAIIgWAAIAAARQALAAAGAGQAHAEAAAMQAAAKgGAHQgGAHgIgBIgIgBg");
	this.shape_16.setTransform(-177.2,-4.1,1.042,1.042);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABABAAAAQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_17.setTransform(-181.3,-1,1.042,1.042);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAEQAAgRAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgLAAgFADQgDACgCADQgEAFgCALQAJgEAHAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAgggAgLADQABAZALAAQAFAAADgEQAEgFAAgGQAAgNgLAAQgFAAgIADg");
	this.shape_18.setTransform(-185.5,-4.1,1.042,1.042);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAFAAQAEAAAEgEQAEgEAAgGQAAgLgMAAIgFAAIAAgGQAGgBADgFQAEgFAAgFQAAgIgGAAQgEAAgIAGIgEgGQAFgEAEgCQAFgCADAAQAGAAAFAEQAEAEAAAHQAAAFgDAFQgCADgFAEQANACAAAOQAAAKgHAGQgGAHgJAAQgHAAgIgEg");
	this.shape_19.setTransform(-209.2,-4.1,1.042,1.042);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_20.setTransform(-213,-1,1.042,1.042);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAIAAIAAAHIgIAAIAAASgAgMAKIASAAIAAgag");
	this.shape_21.setTransform(-217,-4.1,1.042,1.042);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIAiQgEAAgGgDIAEgIQAHAFAFgBQAFAAAEgEQAEgEAAgGQAAgMgKgCQgDgBgKAAIgBAAIAAghIAeAAIAAAIIgVAAIAAARQALAAAFAGQAHAEAAAMQAAAKgGAHQgGAHgIgBIgHgBg");
	this.shape_22.setTransform(-239.7,-4,1.042,1.042);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAAAQAAAAABgBQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_23.setTransform(-243.8,-1,1.042,1.042);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgbAAIAAgGIAegtIAFAAIAAAsIAJAAIAAAHIgJAAIAAASgAgLAKIARAAIAAgag");
	this.shape_24.setTransform(-247.7,-4.1,1.042,1.042);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAFAAQAEAAAEgEQAEgEAAgGQAAgLgMAAIgEAAIAAgGQAFgBADgFQAEgFAAgFQAAgIgGAAQgEAAgIAGIgEgGQAFgEAEgCQAFgCADAAQAGAAAFAEQAEAEAAAHQAAAFgDAFQgCADgFAEQANACAAAOQAAAKgHAGQgGAHgJAAQgHAAgIgEg");
	this.shape_25.setTransform(-270.3,-4.1,1.042,1.042);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_26.setTransform(-274.2,-1,1.042,1.042);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgcAAIAAgGIAfgtIAFAAIAAAsIAIAAIAAAHIgIAAIAAASgAgMAKIASAAIAAgag");
	this.shape_27.setTransform(-278.1,-4.1,1.042,1.042);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAgQgHgFABgHQgBgHAKgJIAGgFIgHgGQgGgFAAgIQAAgHAGgFQAFgEAHAAQAIAAAFAEQAFAEgBAHQAAAHgFAGIgGAGIAHAFQAJAHAAAIQgBAIgGAFQgGAGgJAAQgJAAgFgFgAgGAKQgFAFAAAFQAAAJALAAQAMAAAAgKQAAgEgGgFIgGgHgAgJgUQAAAEAEAEIAFAGIAFgFQAEgFAAgFQAAgIgJABQgJgBAAAJg");
	this.shape_28.setTransform(-301.2,-4.1,1.042,1.042);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAABABQAAABAAAAQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_29.setTransform(-305.3,-1,1.042,1.042);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAgIADgIQAHAEAGAAQAEAAAEgEQAEgEgBgGQAAgLgLAAIgFAAIAAgGQAHgCACgEQAEgEABgGQgBgIgGAAQgEAAgIAGIgFgGQAGgEADgCQAFgCAEAAQAPAAAAAPQAAAFgDAFIgHAHQANACAAAOQAAAKgGAGQgIAHgIAAQgIAAgHgEg");
	this.shape_30.setTransform(-309.3,-4.1,1.042,1.042);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAgIADgIQAHAEAFAAQAFAAAEgEQAEgEAAgGQAAgLgMAAIgFAAIAAgGQAGgCADgEQAEgEAAgGQAAgIgGAAQgEAAgIAGIgFgGIAJgGQAFgCAEAAQAOAAAAAPQAAAFgDAFIgGAHQANACAAAOQAAAKgHAGQgHAHgJAAQgHAAgHgEg");
	this.shape_31.setTransform(-331.7,-4.1,1.042,1.042);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAABAAAAQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_32.setTransform(-335.6,-1,1.042,1.042);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAjIAAgFIAZgfQAFgIAAgHQAAgLgKABQgDgBgDACIgJAHIgFgGIAEgDQAIgHAJAAQASAAAAASQAAAEgCAEQgBAGgIAJIgPAUIAcAAIAAAIg");
	this.shape_33.setTransform(-339.7,-4.1,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.9,-7.9,295.5,8.2);


(lib.G_Headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAkQgIgBgJgFIAFgJIAGACIAIADIAHABQAFAAAEgCQADgDAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgCgDgEgCIgMgGQgKgEgEgEQgEgEAAgGQAAgFACgEQACgEADgCQAEgDAFgBIAKgBIAJAAQAGABAIAFIgGAJIgKgFIgJgBQgEAAgEADQgEACAAAEQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQAFADAMAGIAJAEIAGAEIADAGIABAHQAAAFgCADQgCAEgDADQgDACgFACQgEABgGAAg");
	this.shape.setTransform(120.8,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAkIAAhGIALAAIAAANQAHgIADgDQAEgDAEAAQAEAAAFAEIgGAKQgDgDgCAAQgEAAgDAFQgEAFgFAJIAAApg");
	this.shape_1.setTransform(115.4,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAjQgDgCAAgGIgIAGIgHADIgHABQgEAAgEgBIgGgEQgCgCgCgEQgBgDAAgEIABgIIADgFIAFgFIAGgBIAZgGIAAgNQgBgEgDgCQgEgDgFAAQgFAAgEACQgCABAAAEIAAACIgLADQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgDACgDIAEgFIAIgDIAKgBIAKABQAEABADACIAFAGQABADAAAEIAAArQABACAFABIgDAKQgHAAgDgCgAgOAKQgCAEAAADQAAAFADACQACADAEAAQAEAAADgCIAMgHIAAgPg");
	this.shape_2.setTransform(108.5,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_3.setTransform(102.8,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_4.setTransform(99.1,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAiQgFgDgFgFQgFgFgDgHQgDgHAAgHQAAgHADgHQADgGAFgFQAFgGAFgDQAHgCAHAAQAGAAAHACQAGADAFAGQAEAFADAGQADAHAAAHQAAAHgDAHQgDAHgEAFQgFAFgGADQgHADgGAAQgHAAgHgDgAgHgYQgFACgCAEIgGAIQgBAFAAAFQAAAFABAFQADAFADAEQACAEAFACQADACAFAAQAEAAAEgCQAEgCADgEQADgEACgFQABgFABgFQgBgFgBgFQgCgEgDgEQgDgEgEgCQgEgCgEAAQgFAAgDACg");
	this.shape_5.setTransform(93.2,4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA3QgGgCgEgFQgEgFgCgGQgDgHABgHQAAgJACgHQADgHAFgEQAFgGAGgDQAHgDAHAAIAKABQADACAEACIAAguIAMAAIAABxIgMAAIAAgJQgFAFgGADQgGADgGAAQgGAAgFgDgAgEgCQgEACgEACQgDADgCAGQgBAFgBAHQABAFABAEQABAFADADQADADADACQADACAEAAIAGgCQAEAAADgDIAIgIIAAgYIgBgKQgCgCgEgBQgDgBgGAAQgFAAgEACg");
	this.shape_6.setTransform(84.5,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQA6IAAg8IgMAAIAAgHIAMgDIAAgMQAAgHACgGQACgHAEgEQAEgEAFgDQAFgCAHAAIAJABIAHADIgFAJQgHgCgEAAQgFAAgEACQgDABgBADIgDAIIgBALIAAAJIAQAAIAAAKIgQAAIAAA8g");
	this.shape_7.setTransform(75.6,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAiQgGgDgFgFQgEgFgDgHQgDgHAAgHQAAgHADgHQADgGAEgFQAFgGAGgDQAHgCAHAAQAGAAAHACQAGADAFAGQAEAFADAGQADAHAAAHQAAAHgDAHQgDAHgEAFQgFAFgGADQgHADgGAAQgHAAgHgDgAgHgYQgFACgDAEIgFAIQgBAFAAAFQAAAFABAFQADAFACAEQADAEAFACQADACAFAAQAEAAAEgCQAEgCADgEQADgEABgFQACgFAAgFQAAgFgCgFQgBgEgDgEQgDgEgEgCQgEgCgEAAQgFAAgDACg");
	this.shape_8.setTransform(68.2,4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAkQgIgBgJgFIAFgJIAGACIAIADIAHABQAFAAAEgCQADgDAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgCgDgEgCIgMgGQgKgEgEgEQgEgEAAgGQAAgFACgEQACgEADgCQAEgDAFgBIAKgBIAJAAQAGABAIAFIgGAJIgKgFIgJgBQgEAAgEADQgEACAAAEQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQAFADAMAGIAJAEIAGAEIADAGIABAHQAAAFgCADQgCAEgDADQgDACgFACQgEABgGAAg");
	this.shape_9.setTransform(56.6,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAkIAAgxIgBgIQgCgEgFAAQgGAAgFAEQgHAFgJAKIAAAqIgLAAIAAhGIALAAIAAAPIAKgJQAEgEAEgCIAKgBIAIABQAEABACACIADAHIABAIIAAA0g");
	this.shape_10.setTransform(48.9,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAiQgFgDgGgFQgEgFgDgHQgDgHAAgHQAAgHADgHQADgGAEgFQAGgGAFgDQAHgCAGAAQAIAAAGACQAGADAFAGQAFAFADAGQACAHAAAHQAAAHgCAHQgDAHgFAFQgFAFgGADQgGADgIAAQgGAAgHgDgAgIgYQgEACgDAEIgEAIQgCAFAAAFQAAAFACAFQACAFACAEQADAEAEACQAFACADAAQAFAAAEgCQAEgCADgEQADgEABgFQACgFAAgFQAAgFgCgFQgBgEgDgEQgDgEgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_11.setTransform(40.5,4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFA0IAAhGIAKAAIAABGgAgFglQgBgDAAgDQAAgDABgCQACgDADAAQADAAACADQACACABADQgBADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_12.setTransform(34.4,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_13.setTransform(30.6,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_14.setTransform(26.9,2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFA0IAAhGIAKAAIAABGgAgFglQgBgDAAgDQAAgDABgCQACgDADAAQADAAACADQACACABADQgBADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_15.setTransform(23.2,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAkIAAgxQAAgGgBgCQgCgEgFAAQgFAAgGAEQgFADgIAJIgDADIAAAqIgLAAIAAgxQAAgGgBgCQgCgEgFAAQgGAAgGAEQgGAFgKAKIAAAqIgLAAIAAhGIALAAIAAAPIAKgJQAFgEAEgCIAKgBIAIABQAEABABACQACACABADIACAHIAJgJQAFgEAEgCIALgBIAHABQAEABACACQADADABAEIABAIIAAA0g");
	this.shape_16.setTransform(14.6,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAkIAAgxIgBgIQgCgEgFAAQgGAAgFAEQgHAFgJAKIAAAqIgLAAIAAhGIALAAIAAAPIAKgJQAEgEAEgCIAKgBIAIABQAEABACACIAEAHIAAAIIAAA0g");
	this.shape_17.setTransform(-0.1,4.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFA0IAAhGIAKAAIAABGgAgEglQgCgDAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_18.setTransform(-6.4,3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBB02C").s().p("AgeAuQAIgKAFgHQAHgMAEgLIgag9IAUAAIAMAgIACAJIACgJIALggIASAAIgYBDIgFAOIgGALIgNATg");
	this.shape_19.setTransform(-15.6,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EBB02C").s().p("AgVAlIAAhIIAQAAIABAQIAIgNQAEgEAEAAQADAAACABQADACACADIgGASQgDgCgDAAQgEgBgFAGQgBADgBAEQgCACAAAEIAAAhg");
	this.shape_20.setTransform(-21.1,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EBB02C").s().p("AgJAsQgEgDAAgIIAAgtIgKAAIAAgMIAKgBIAAgWIARAAIAAAWIAQAAIAAANIgQAAIAAAgIABAIQAAAAABABQAAAAAAABQABAAAAAAQAAAAABAAQAEAAAGgEIAGANIgGAEIgJAEIgIABQgGAAgEgEg");
	this.shape_21.setTransform(-26.6,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EBB02C").s().p("AgLAlQgKgCgIgFIAGgPQAJAFAHADIAHACQAFgBADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgFgDIgMgFIgIgEIgGgEQgCgCgBgDQgCgDAAgEQAAgFADgEQACgFAEgDQAEgDAFgBQAFgBAGAAIAMABQAHABAJAEIgGAQIgFgDIgIgEIgJgBQgEAAgDABQgEACAAAEQAAACADACIAGAEQAIACANAHQAEACACAEQACAEAAAGQAAAEgCAFQgCADgEADQgEAEgFABQgGACgGgBIgLgBg");
	this.shape_22.setTransform(-32.6,4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EBB02C").s().p("AgUAkIgGgEIgEgGIgBgJIAAg1IATAAIAAAuIABAJQACADADAAQADAAADgDIALgKIACgCIAAgrIATAAIAABIIgTAAIAAgMQgGAHgGADQgFADgHAAIgJgBg");
	this.shape_23.setTransform(-40.3,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBB02C").s().p("AgQA3IgJgHQgEgFgCgHQgDgGAAgIQAAgIADgIQADgHAFgFQAEgGAHgDQAGgDAGAAIAHABQAFABAEAEIAAgtIATAAIAABxIgTAAIAAgKQgDAFgEADIgHADIgGABQgGAAgGgDgAgDgBIgGAEQgCAEgBAEQgCAEAAAFIABAJIADAHQACADADACQADABACABQAFgBAEgCQAEgDADgFIAAgTIgBgKQgBgDgDAAQgDgCgFAAQgDgBgDACg");
	this.shape_24.setTransform(-49,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBB02C").s().p("AANAlIAAguQAAgGgCgEQAAgCgEAAQgDAAgEADIgKAJIgCADIAAArIgTAAIAAhIIATAAIAAANQAHgIAFgDQAFgDAHAAQAUAAAAAUIAAA1g");
	this.shape_25.setTransform(-57,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EBB02C").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_26.setTransform(-63.6,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBB02C").s().p("AgLAlQgKgCgIgFIAGgPQAJAFAHADIAHACQAFgBADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgFgDIgMgFIgIgEIgGgEQgCgCgBgDQgCgDAAgEQAAgFADgEQACgFAEgDQAEgDAFgBQAFgBAGAAIAMABQAHABAJAEIgGAQIgFgDIgIgEIgJgBQgEAAgDABQgEACAAAEQAAACADACIAGAEQAIACANAHQAEACACAEQACAEAAAGQAAAEgCAFQgCADgEADQgEAEgFABQgGACgGgBIgLgBg");
	this.shape_27.setTransform(-73.5,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EBB02C").s().p("AgKAkIgZhHIAUAAIAPAvIAAADIAAgDIAQgvIATAAIgbBHg");
	this.shape_28.setTransform(-80.5,4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBB02C").s().p("AgLAlQgKgCgIgFIAGgPQAJAFAHADIAHACQAFgBADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgFgDIgMgFIgIgEIgGgEQgCgCgBgDQgCgDAAgEQAAgFADgEQACgFAEgDQAEgDAFgBQAFgBAGAAIAMABQAHABAJAEIgGAQIgFgDIgIgEIgJgBQgEAAgDABQgEACAAAEQAAACADACIAGAEQAIACANAHQAEACACAEQACAEAAAGQAAAEgCAFQgCADgEADQgEAEgFABQgGACgGgBIgLgBg");
	this.shape_29.setTransform(-91.6,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EBB02C").s().p("AgJAsQgEgDABgIIAAgtIgLAAIAAgMIALgBIAAgWIARAAIAAAWIAQAAIAAANIgQAAIAAAgIAAAIQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAQADAAAHgEIAGANIgHAEIgIAEIgIABQgGAAgEgEg");
	this.shape_30.setTransform(-97.4,3.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBB02C").s().p("AgMAkQgGgDgFgEQgEgFgDgHQgDgHAAgIQAAgIAEgHQACgHAFgFQAFgGAHgDQAGgDAHAAQAGAAAHACQAFADAEAEQAEAEADAHQACAGAAAHIAAAHIgwAAQABAIACADQACAEAEADQAFACAEAAQAFAAADgBQAGgCAIgFIAIAOIgIAFIgMAEIgMAAQgHABgHgDgAAPgHQAAgJgEgDQgDgEgGAAQgGAAgEAEQgDAEgBAIIAbAAIAAAAg");
	this.shape_31.setTransform(-103.4,4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBB02C").s().p("AgLAlQgKgCgIgFIAGgPQAJAFAHADIAHACQAFgBADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgFgDIgMgFIgIgEIgGgEQgCgCgBgDQgCgDAAgEQAAgFADgEQACgFAEgDQAEgDAFgBQAFgBAGAAIAMABQAHABAJAEIgGAQIgFgDIgIgEIgJgBQgEAAgDABQgEACAAAEQAAACADACIAGAEQAIACANAHQAEACACAEQACAEAAAGQAAAEgCAFQgCADgEADQgEAEgFABQgGACgGgBIgLgBg");
	this.shape_32.setTransform(-110.7,4.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBB02C").s().p("AgLAlQgKgCgIgFIAGgPQAJAFAHADIAHACQAFgBADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgFgDIgMgFIgIgEIgGgEQgCgCgBgDQgCgDAAgEQAAgFADgEQACgFAEgDQAEgDAFgBQAFgBAGAAIAMABQAHABAJAEIgGAQIgFgDIgIgEIgJgBQgEAAgDABQgEACAAAEQAAACADACIAGAEQAIACANAHQAEACACAEQACAEAAAGQAAAEgCAFQgCADgEADQgEAEgFABQgGACgGgBIgLgBg");
	this.shape_33.setTransform(-117.7,4.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EBB02C").s().p("AAZA0IgIgaIghAAIgJAaIgUAAIAlhnIARAAIAlBngAAMAKIgMglIgLAlIAXAAg");
	this.shape_34.setTransform(-125.7,3.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EBB02C").s().p("AgVA6IAAg6IgMAAIAAgMIAMgCIAAgJQAAgIACgGQACgHAEgEQAEgFAGgCQAFgCAHAAIAJABQAIABAIAEIgJAOIgIgEIgHgBIgFABIgFAFIgCAGIAAAMIAAAEIANAAIAAAOIgNAAIAAA6g");
	this.shape_35.setTransform(-135.3,2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBB02C").s().p("AgNAkQgHgDgFgFQgFgGgDgGQgDgIAAgIQAAgHADgHQADgHAFgFQAFgGAHgCQAGgDAHAAQAIAAAHADQAGACAFAGQAFAFADAHQADAHAAAHQAAAIgDAIQgDAGgFAGQgFAFgGADQgHACgIAAQgHAAgGgCgAgGgVIgFAFIgEAIIgBAIQAAAFABAEQACAEACAEQACADADACIAGABQAEAAADgBIAFgFQADgEABgEQABgEAAgFIgBgIQgBgEgDgEIgFgFQgDgCgEAAQgCAAgEACg");
	this.shape_36.setTransform(-142.8,4.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EBB02C").s().p("AANA5IAAgvQAAgGgCgEQgBgBgDAAQgDAAgEACIgJAJIgDADIAAAsIgTAAIAAhxIATAAIAAA2QAGgIAGgDQAFgDAHAAQAUAAAAATIAAA2g");
	this.shape_37.setTransform(-154.9,2.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EBB02C").s().p("AgJAsQgEgDAAgIIAAgtIgKAAIAAgMIAKgBIAAgWIARAAIAAAWIAQAAIAAANIgQAAIAAAgIABAIQAAAAABABQAAAAAAABQABAAAAAAQAAAAABAAQAEAAAGgEIAGANIgGAEIgJAEIgIABQgGAAgEgEg");
	this.shape_38.setTransform(-161.6,3.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EBB02C").s().p("AAMAkIgMgpIgLApIgTAAIgWhHIATAAIANAyIAAACIABgCIAMgqIgDgIIATAAIAMAyIAAACIAAgCIAOgyIATAAIgYBHg");
	this.shape_39.setTransform(-169.5,4.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBB02C").s().p("AgNAkQgHgDgFgFQgFgGgDgGQgDgIAAgIQAAgHADgHQADgHAFgFQAFgGAHgCQAGgDAHAAQAIAAAHADQAGACAFAGQAFAFADAHQADAHAAAHQAAAIgDAIQgDAGgFAGQgFAFgGADQgHACgIAAQgHAAgGgCgAgGgVIgFAFIgEAIIgBAIQAAAFABAEQACAEACAEQACADADACIAGABQAEAAADgBIAFgFQADgEABgEQABgEAAgFIgBgIQgBgEgDgEIgFgFQgDgCgEAAQgCAAgEACg");
	this.shape_40.setTransform(-179,4.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EBB02C").s().p("AgVAlIAAhIIAQAAIABAQIAIgNQAEgEAEAAQADAAACABQADACACADIgGASQgDgCgDAAQgEgBgFAGQgBADgBAEQgCACAAAEIAAAhg");
	this.shape_41.setTransform(-185.1,4.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EBB02C").s().p("AgBA1IgLgDIgKgFIgIgHIgHgHIgFgJIgDgLIgBgLIABgKIADgLIAFgJQADgFAFgDIAIgHIAJgEQAFgCAGgBIALgBQAMABAKACQAGACAJADIgFARIgIgDIgLgDIgKgBQgJAAgGACQgIADgFAEQgFAGgDAFQgDAHAAAIQAAAGADAIQADAHAGAEQAGAFAHADQAGADAJAAQAGAAAHgCIAAgcIAUAAIAAApIgKADQgSADgIAAIgMAAg");
	this.shape_42.setTransform(-194.1,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.4,-8,328.1,22.9);


(lib.G_GraphNumbersMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAXQgFgJAAgOQAAgNAFgIQAGgJAIAAQAJAAAFAJQAGAIAAANQAAAOgGAJQgFAJgJAAQgIAAgGgJgAgLAAQAAAYALABQAGAAADgIQADgGAAgLQAAgKgDgHQgDgGgGgBQgLAAAAAYg");
	this.shape.setTransform(15,-94.5,1.042,1.042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAXQgFgJAAgOQAAgNAFgIQAGgJAIAAQAJAAAFAJQAGAIAAANQAAAOgGAJQgFAJgJAAQgIAAgGgJgAgLAAQAAAYALABQAGAAADgIQADgGAAgLQAAgKgDgHQgDgGgGgBQgLAAAAAYg");
	this.shape_1.setTransform(10.3,-94.5,1.042,1.042);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAeQgFgCgDgDIADgGQAHAFAEAAQAEgBADgDQADgEAAgGQAAgJgIgCIgLgBIgBAAIAAgbIAZAAIAAAHIgRAAIAAANQAJABAFAEQAFAEAAAKQAAAJgFAGQgFAGgHAAg");
	this.shape_2.setTransform(5.6,-94.4,1.042,1.042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAbIADgGQAHADADAAQAEAAADgDQADgEAAgFQAAgKgKAAIgDAAIAAgEQAFgCACgDQADgEAAgFQAAgHgFAAQgDAAgHAFIgEgFIAIgFQADgCAEAAQAMAAAAANQAAADgCAGQgCACgEADQALABAAANQAAAIgGAGQgFAFgIAAQgFAAgHgDg");
	this.shape_3.setTransform(1,-94.4,1.042,1.042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAXQgFgJAAgOQAAgNAFgIQAGgJAIAAQAJAAAFAJQAGAIAAANQAAAOgGAJQgFAIgJABQgIgBgGgIgAgLAAQAAAYALABQAGAAADgHQADgHAAgLQAAgKgDgHQgDgGgGgBQgLAAAAAYg");
	this.shape_4.setTransform(1.4,94.4,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-97.7,17.8,195.5);


(lib.G_GraphLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape.setTransform(-37.3,-75.4,1.043,1.043);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_1.setTransform(-34.7,-56.6,1.043,1.043);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_2.setTransform(-37.3,-37.8,1.043,1.043);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_3.setTransform(-34.7,-19,1.043,1.043);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_4.setTransform(-37.3,-0.2,1.043,1.043);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_5.setTransform(-34.7,18.6,1.043,1.043);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_6.setTransform(-37.3,37.4,1.043,1.043);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.5).p("AhDAAICHAA");
	this.shape_7.setTransform(-34.7,56.2,1.043,1.043);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.5).p("AgqAAIBVAA");
	this.shape_8.setTransform(-37.3,75,1.043,1.043);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.5).p("ABKutIiQAAIAAdbICSAA");
	this.shape_9.setTransform(-34.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-95.2,16.7,190.4);


(lib.G_BlackBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape.setTransform(-185.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.9,-164.9,337,334.1);


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
	this.instance.setTransform(-563,-162,1.024,1.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563,-162,716.8,333.8);


(lib.G_AlanBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AlanFull();
	this.instance.parent = this;
	this.instance.setTransform(-564,-162,1.024,1.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-564,-162,716.8,333.8);


(lib.G_AGFNumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAkIAAgIIABAAQAJAAAGgDIAGgFQADgEACgLQgMADgDAAQgIAAgFgFQgEgFAAgJQAAgKAGgHQAGgHAIAAQAVAAAAAhQAAARgJALQgDAEgGADQgEADgMAAgAgIgWQgDAEAAAHQAAALAKAAQAFAAAIgCQAAgZgMAAQgFAAgDAFg");
	this.shape.setTransform(-48.9,0.3,1.042,1.042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAFgDALAAIACAAIAAAIIgBAAQgJAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgGAHQgGAHgIAAQgVAAAAghgAgLADQAAAZAMAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_1.setTransform(-54.4,0.3,1.042,1.042);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAhQgGgHAAgLQAAgLAHgHQAHgHAKAAQAHAAAEADIAAgfIAIAAIAABMIgIAAIAAgGQgGAHgJAAQgJAAgFgGgAgIABQgEAGAAAIQAAAHADAFQAEAFAFAAQAEAAAFgDIAFgGIgBgXQgCgDgIAAQgGAAgFAEg");
	this.shape_2.setTransform(-63.1,0,1.042,1.042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAZIAAghIgBgGQgBgCgEgBQgGABgLANIAAAcIgIAAIAAgvIAIAAIAAAKIAHgHQAEgEAHgBQANAAAAAOIAAAjg");
	this.shape_3.setTransform(-68.8,1.3,1.042,1.042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAGgHAJAAQAJAAAEAFQAGAGAAAJIAAAEIghAAQABASAPAAQAFAAAHgFIADAGQgKAGgHAAQgKAAgFgHgAgLgGIAXAAQgBgLgJAAQgKAAgDALg");
	this.shape_4.setTransform(-74.4,1.4,1.042,1.042);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAgQgFgFgBgGQAAgHAKgKIAGgFIgHgGQgGgEABgJQgBgGAGgFQAFgFAIAAQAHAAAFAFQAEAEABAGQAAAIgHAFIgGAGIAIAGQAIAGAAAIQAAAJgGAEQgGAGgJAAQgIAAgHgFgAgGAKQgFAGAAAFQAAAIALABQAFAAAEgEQADgDAAgEQAAgEgFgFIgHgHgAgIgUQgBAFAEADIAFAGIAEgFQAFgFAAgFQAAgDgCgCQgDgCgEgBQgIABAAAIg");
	this.shape_5.setTransform(-89.9,0.3,1.042,1.042);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAFgDALAAIACAAIAAAIIAAAAQgKAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_6.setTransform(-95.4,0.3,1.042,1.042);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAfIAGgJQAGgKAEgNIAJgZIgbAAIAAgIIAlAAIAAAEIgSAtIgJAVg");
	this.shape_7.setTransform(-120.9,0.4,1.042,1.042);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgKAAgGADIgFAFQgEAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_8.setTransform(-126,0.3,1.042,1.042);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgKAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgHAHgIAAQgVAAAAghgAgMADQACAZALAAQAFAAADgEQAEgFgBgHQAAgMgKAAQgFAAgJADg");
	this.shape_9.setTransform(-151.4,0.3,1.042,1.042);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgKAAgGADIgFAFQgEAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_10.setTransform(-156.9,0.3,1.042,1.042);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAiIgKgEIAEgHQAHAFAFAAQAFAAAEgFQAEgEAAgHQAAgLgKgCQgDgBgKgBIgBAAIAAgfIAeAAIAAAIIgVAAIAAAQQALABAFAFQAHAEAAAMQAAAKgGAHQgGAHgIAAg");
	this.shape_11.setTransform(-181.8,0.4,1.042,1.042);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAGgDALAAIACAAIAAAIIgBAAQgJAAgHADIgFAFQgEAEgCALQAKgDAGAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgEAAgJADg");
	this.shape_12.setTransform(-187.4,0.3,1.042,1.042);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGAjIAAgSIgbAAIAAgFIAdguIAGAAIAAAsIAJAAIAAAHIgJAAIAAASgAgLAKIARAAIAAgbg");
	this.shape_13.setTransform(-212.8,0.3,1.042,1.042);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAGgDALAAIABAAIAAAIIgBAAQgJAAgGADIgFAFQgEAEgCALQAKgDAGAAQAQAAAAATQAAAKgGAHQgFAHgJAAQgVAAAAghgAgLADQAAAZAMAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgEAAgJADg");
	this.shape_14.setTransform(-217.9,0.3,1.042,1.042);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAgIAEgIQAHAEAEAAQAFAAAEgEQAEgEAAgGQAAgMgMAAIgEAAIAAgFQAGgCACgEQAFgEgBgGQAAgIgGAAQgEAAgIAGIgEgGQAEgEAFgCQAFgCADAAQAOAAAAAPQAAAFgCAFIgHAHQAFABAEADQAEAFAAAHQAAAKgGAGQgIAHgJAAQgHAAgHgEg");
	this.shape_15.setTransform(-243.2,0.3,1.042,1.042);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAFgDALAAIACAAIAAAIIAAAAQgKAAgGADIgGAFQgDAEgCALQAKgDAFAAQAIAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_16.setTransform(-248.4,0.3,1.042,1.042);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAjIAAgEIAZghQAFgHAAgGQAAgLgKAAIgGABIgJAHIgFgGIAEgDQAIgHAJAAQARAAAAATIgBAHQgCAGgHAJIgPAUIAcAAIAAAIg");
	this.shape_17.setTransform(-273.8,0.3,1.042,1.042);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQAEgFAFgCQAGgDAKAAIADAAIAAAIIgBAAQgJAAgHADIgFAFQgEAEgCALQAKgDAGAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_18.setTransform(-279.3,0.3,1.042,1.042);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAjIAAg9IgNAAIAAgIIAVAAIAABFg");
	this.shape_19.setTransform(-304.4,0.3,1.042,1.042);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUADQAAgRAJgLQAEgFAFgCQAFgDALAAIACAAIAAAIIgBAAQgJAAgGADIgGAFQgDAEgCALQAKgDAFAAQARAAAAATQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQADgFAAgHQAAgMgKAAQgFAAgIADg");
	this.shape_20.setTransform(-308.8,0.3,1.042,1.042);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAbQgGgKAAgRQAAgPAGgKQAGgLAKAAQAKAAAHALQAGAKAAAPQAAARgGAKQgHAKgKAAQgKAAgGgKgAgJgUQgEAIAAAMQAAANAEAIQADAIAGAAQAGAAAEgIQAEgIAAgNQAAgMgEgIQgEgIgGAAQgGAAgDAIg");
	this.shape_21.setTransform(-335,0.2,1.042,1.042);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUADQAAgQAJgMQADgEAGgDQAGgDALAAIACAAIAAAIIgBAAQgJAAgHADIgFAFQgEAEgCALQAKgDAGAAQAHAAAFAGQAEAEAAAJQAAAKgFAHQgGAHgJAAQgVAAAAghgAgLADQABAZALAAQAFAAADgEQAEgFAAgHQAAgMgLAAQgFAAgIADg");
	this.shape_22.setTransform(-340.6,0.3,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.8,-4.1,296.1,8.2);


(lib.G_ofIndustry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape.setTransform(54.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgDAcQgDgDABgEIAAgfIgJAAIAAgFIAJgCIAAgNIAHAAIAAANIAMAAIAAAHIgMAAIAAAaIAAACIAAADQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQADAAAEgDIADAFIgGAFQgCABgDAAQgDAAgDgDg");
	this.shape_1.setTransform(51,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgGAXQgEgBgDgEQgDgEgCgEQgBgFAAgFQAAgFABgEQACgFADgDQADgEAEgBQAEgCAEAAQAEAAAEABIAFAFQADACABAEQABADAAAEIAAAFIgfAAQAAAEABADIADAGIAFAEIAFABIAGgBIAHgEIADAGQgFAEgEABQgEABgEAAQgEAAgEgCgAAMgGIgBgEIgCgEIgDgCIgEgBIgEABIgEACIgDAEIgBAEIAWAAIAAAAg");
	this.shape_2.setTransform(47,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape_3.setTransform(42.2,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape_4.setTransform(37.5,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAVAkIgHgVIgbAAIgHAVIgJAAIAahGIAIAAIAZBGgAALAIIgLgfIgKAfIAVAAg");
	this.shape_5.setTransform(32.1,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgRAgIAJgMIAGgPIgRgpIAIAAIALAdIABAEIABgEIAKgdIAIAAIgTAxIgFAOIgHAKg");
	this.shape_6.setTransform(24.3,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgMAYIAAguIAIAAIAAAJQAEgGACgCQADgCACAAQADAAADADIgDAHIgEgCQgCAAgDADQgCADgDAGIAAAbg");
	this.shape_7.setTransform(20.9,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgDAcQgDgDABgEIAAgfIgIAAIAAgFIAIgCIAAgNIAHAAIAAANIAMAAIAAAHIgMAAIAAAaIAAACIAAADQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQADAAAEgDIADAFIgGAFQgCABgDAAQgEAAgCgDg");
	this.shape_8.setTransform(17.1,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgFAYIgLgEIADgGIAEACIAFACIAFAAQADAAACgBQADgCAAgDIgBgEIgEgDIgIgEQgGgCgDgCQgDgEAAgDIABgGIAEgEIAGgDIAGgBIAGAAQAEABAFADIgEAGQgDgCgDgBIgGgBQgDABgCABQgDABAAAEIACACQADADAHAEIAHACIADACIADAFIAAAEIgBAGIgDAEIgFADIgHABg");
	this.shape_9.setTransform(13.2,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgMAXIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgGIAAgiIAIAAIAAAgIABAGQABABAAAAQABABAAAAQABAAAAAAQABABABAAIAEgCIAEgCIAJgKIAAgbIAIAAIAAAuIgIAAIAAgKIgFAFIgEADIgEADIgFAAIgGgBg");
	this.shape_10.setTransform(8,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgJAlQgEgCgCgDIgEgHQgCgFAAgFQAAgGACgFQACgEADgDQADgDAFgCQAEgCAEAAIAHABIAFACIAAgfIAIAAIAABLIgIAAIAAgGQgEAEgEACQgEACgDAAQgEAAgEgCgAgDgBQgDABgCABQgCADgBADIgBAIIABAGIACAGIAEADIAFABIAEgBQACAAACgCIAGgFIAAgRIgBgGQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgBQgDAAgDACg");
	this.shape_11.setTransform(2.3,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AAMAYIAAggIgBgGQgBgCgEAAQgDAAgEADIgKAJIAAAcIgIAAIAAguIAIAAIAAAKIAHgHIAEgDIAHgBIAGABIADACQACACABACIABAGIAAAig");
	this.shape_12.setTransform(-3.2,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgDAjIAAhFIAHAAIAABFg");
	this.shape_13.setTransform(-7.6,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgLAnIAAgoIgIAAIAAgFIAIgCIAAgHQAAgGACgDIAEgHQADgDADgCQAEgBAEgBIAFABIAGABIgEAHQgEgBgDAAIgGAAIgDAEIgCAFIgBAIIAAAFIAKAAIAAAHIgKAAIAAAog");
	this.shape_14.setTransform(-12.5,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgIAXQgEgCgDgDQgEgEgBgFQgCgEAAgFQAAgEACgFQABgEAEgEQADgDAEgCQAEgCAEAAQAFAAAEACQAEACAEADQADAEABAEQACAFAAAEQAAAFgCAEQgBAFgDAEQgEADgEACQgEACgFAAQgEAAgEgCgAgFgQIgEAEIgEAGIgBAGIABAHIAEAFIAEAFIAFABQADAAADgBIAFgFIADgFIABgHIgBgGIgDgGQgCgDgDgBQgDgBgDAAIgFABg");
	this.shape_15.setTransform(-17.5,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AghAmIA7hLIAHAAIg6BLgAAPAiIgFgEIgEgGQgCgDAAgEIACgHIAEgGQACgDADgBQAEAAAEAAIAHAAIAGAEIADAGIACAHQAAAEgCADIgDAGIgGAEIgHABQgEAAgEgBgAASAGIgEACIgCAEIgBAFIABAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEADIAFABIAEgBIAEgDIADgEIAAgEIAAgFIgDgEIgEgCIgEgBIgFABgAgdAAQgDgBgCgDIgEgGIgCgHQAAgEACgDIAEgGIAFgEQAEgBAEAAIAHABIAFAEIAEAGQACADAAAEIgCAHIgEAGQgCADgDABIgHAAQgEAAgEAAgAgagcQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgCADIgBAFIABAFIACAEIAEACIAFABIAEgBIAEgCIADgEIABgFIgBgFIgDgDIgEgDIgEgBIgFABg");
	this.shape_16.setTransform(-27.3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-6.5,93.3,16.6);


(lib.Disclaimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJApIAFgIIAEgKIACgLIAAgMIAAgLIgCgLIgEgKIgFgIIAHAAIACAEIAEAIIAEAPIACANIgBAOIgFAPIgDAHIgDAFg");
	this.shape.setTransform(33.4,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAYQgCgCAAgEIAAgaIgHAAIAAgEIAHgCIAAgMIAGAAIAAAMIALAAIAAAGIgLAAIAAAWIAAACIAAACQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAQADAAAEgDIACAFIgFAEIgFABQgCAAgDgDg");
	this.shape_1.setTransform(30.9,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAHAAIAAAIIAEgHQABAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQACAAADADIgDAGIgDgCQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBABIgEAIIAAAXg");
	this.shape_2.setTransform(28.4,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAUQgEgBgCgEQgDgDgBgDQgCgEAAgFIACgHQABgEADgDQACgDAEgBQAEgDADAAQAEAAAEADQADABADADQADADACAEIABAHQAAAFgBAEQgCADgDADQgDAEgDABIgIABIgHgBgAgEgNIgEADIgDAFIgBAFIABAGIADAFQABADADAAIAEABIAFgBQACAAACgDQACgCAAgDIABgGIgBgFIgCgFIgEgDIgFgCIgEACg");
	this.shape_3.setTransform(24.2,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAHAAIAAAGIAGgFQAEgCADAAIAHACIAFAEQACADABADQACAEAAAFQAAAFgCAEQgBADgDADQgDADgEACQgEABgDAAIgGAAIgEgCIAAAXgAgCgYIgEADIgFAEIAAAOIABAEIADADIAFABIAFgBIAFgDIACgFIABgGIAAgGIgDgEIgDgDIgEgBIgDAAg");
	this.shape_4.setTransform(19.5,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAUIgHgEIgDgHIgBgJIABgHIADgIQADgCAEgCIAHgCQADAAADACQADABACADIADAEIABAHIAAAEIgbAAIABAGIADAFIAEADIAFABIAFgBIAFgCIADAFIgIADIgGABQgEABgDgCgAAKgFIAAgDIgDgEIgCgCIgEAAIgDAAIgDACIgCAEIgCADIATAAIAAAAg");
	this.shape_5.setTransform(14.9,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAVIAAgoIAIAAIAAAIIAFgHQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQACAAAEADIgEAGIgDgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABIgEAIIAAAXg");
	this.shape_6.setTransform(11.6,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_7.setTransform(6.4,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJAUQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEADIgDACIgFAAIgEAAIgDgCIgDgEIgBgEIABgEIABgEIAEgCIADgBIAOgDIAAgHQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgBIgFAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAIABACIgHACIgBgDIACgEIADgDIAEgCIAFgBIAGABIAEADIACACIACAFIAAAYQAAAAAAABQAAAAAAAAQABABAAAAQABAAABAAIgCAFQgEABgCgCgAgIAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIADgBIAHgDIAAgJg");
	this.shape_8.setTransform(3.2,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAUIgDgCIgCgDIgBgFIAAgeIAGAAIAAAcQAAAEACABQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIADgBIADgCIAIgIIAAgYIAHAAIAAAoIgHAAIAAgJIgEAFIgDADIgEABIgEABIgFgBg");
	this.shape_9.setTransform(-1.3,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAVIAAgcIAAgEQgBgDgDAAQgEAAgCADIgJAIIAAAYIgHAAIAAgoIAHAAIAAAJIAGgGIADgDIAHgBIAEABIAEACIACAEIAAAEIAAAeg");
	this.shape_10.setTransform(-6.2,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAVIAAgcIgBgEQgBgDgEAAQgDAAgCADIgJAIIAAAYIgHAAIAAgoIAHAAIAAAJIAFgGIAFgDIAFgBIAFABIADACIACAEIABAEIAAAeg");
	this.shape_11.setTransform(-11.1,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJAUQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEADIgDACIgFAAIgEAAIgDgCIgDgEIgBgEIABgEIABgEIAEgCIADgBIAOgDIAAgHQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgFgBIgFAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAIABACIgHACIgBgDIACgEIADgDIAEgCIAFgBIAGABIAEADIACACIACAFIAAAYQAAAAAAABQAAAAAAAAQABABAAAAQABAAABAAIgCAFQgEABgCgCgAgIAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIADgBIAHgDIAAgJg");
	this.shape_12.setTransform(-15.7,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAfIAAgGIAFABIAHgBIAEgDIAEgEIAEgHIADgJIgFACIgGACIgDAAIgHgBQgCgBgDgCIgDgEIgBgHQABgFABgEQABgDADgDIAFgFQADgBAEAAQAEAAAEACQADABADAEQACADABAFIABALIAAAGIgBAIIgDAGIgEAGIgEAEIgFADIgEACIgGAAgAgFgXIgDADQAAABgBAAQAAABgBAAQAAAAAAABQAAABAAAAIgBAGIAAAFIACADIAEACIAEABIAEgBIAJgDIAAgDIgBgIQAAgDgDgCQgBgDgCgBIgFgBIgFABg");
	this.shape_13.setTransform(-22.4,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAdQgDgBgCgEQgDgDgBgFQgCgFAAgGIABgGIACgHIACgHIAEgGIAEgEIAFgDIAEgCIAGAAIAGAAIAAAGIgFAAIgHABIgEACIgEAEIgEAHIgDAJIAFgCQAEgCAFAAIAHABIAEADIAEAFIABAGQAAAFgCAEIgEAGQgCADgDACQgEABgEAAQgDAAgEgCgAgCAAIgJAEIAAADIABAIIACAFIAEAEQADABACAAIAEgBIAEgDIADgEIABgGIgBgFIgCgDIgEgDIgEAAIgEAAg");
	this.shape_14.setTransform(-27.3,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAfIAAgGIAFABIAHgBIAEgDIAEgEIAEgHIADgJIgFACIgGACIgDAAIgHgBQgCgBgCgCIgEgEIgBgHQABgFABgEQABgDADgDIAFgFQAEgBADAAQAEAAADACQAEABADAEQACADABAFIABALIAAAGIgCAIIgCAGIgEAGIgEAEIgFADIgEACIgGAAgAgEgXIgEADQAAABgBAAQAAABgBAAQAAAAAAABQAAABgBAAIAAAGIAAAFIACADIAEACIAEABIAFgBIAIgDIAAgDIgBgIQgBgDgCgCQgBgDgCgBIgFgBIgEABg");
	this.shape_15.setTransform(-32.1,14.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AACAVIAAgkIgJAAIAAgGIAPAAIAAAqg");
	this.shape_16.setTransform(-36.8,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAeIAAg7IAfAAIAAAHIgZAAIAAAUIAVAAIAAAFIgVAAIAAAbg");
	this.shape_17.setTransform(-42.4,13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAeIgGgBIgFgDIgEgEIgEgFIgDgFIgCgGIAAgGIAAgFIACgGIACgFIAFgFIAEgEIAFgCIAGgCIAGgBQAHAAAGACIAHADIgEAGIgCgCIgHgBIgHgBIgFAAIgEACIgEACIgEAEQgCADgCAEIgBAIIAAAFIABAEQADAFADADQADAEAFABIAEACIAFAAIAKgBIAAgUIAIAAIAAAZIgFABIgHABIgIABIgGgBg");
	this.shape_18.setTransform(-48.4,13.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAeIgGgRIgXAAIgGARIgIAAIAWg8IAHAAIAWA8gAAKAGIgKgaIgJAaIATAAg");
	this.shape_19.setTransform(-54.1,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAUQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAgAgDgMQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_20.setTransform(-60.1,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAUIgFgEIgFgHIgBgJIABgHIAFgIQACgCADgCIAHgCQAEAAADACQADABACADIADAEIABAHIAAAEIgbAAIABAGIADAFIAEADIAFABIAFgBIAGgCIACAFIgIADIgHABQgDABgEgCgAAKgFIgBgDIgCgEIgCgCIgEAAIgCAAIgEACIgDAEIgBADIATAAIAAAAg");
	this.shape_21.setTransform(-63.3,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAUIgHgEIgEgHQgCgEAAgEQAAgEACgEQACgEACgDQADgDAEgBQAEgDAEAAIAFABIAHAEIgDAFIgFgDIgEAAIgFABIgEADIgEAFIAAAFIABAGQAAAEADACIAEACIAFABIAFgBIAFgCIADAGIgCABIgGACIgGAAQgEABgDgCg");
	this.shape_22.setTransform(-67.2,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAHAAIAAAIIAEgHQABAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQADAAACADIgDAGIgDgCQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABgBABIgEAIIAAAXg");
	this.shape_23.setTransform(-70.5,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAUIgDgCIgCgDIgBgFIAAgeIAGAAIAAAcQABAEABABQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIADgBIADgCIAIgIIAAgYIAHAAIAAAoIgHAAIAAgJIgEAFIgDADIgEABIgEABIgFgBg");
	this.shape_24.setTransform(-74.8,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAUQgEgBgCgEQgDgDgCgDQgBgEAAgFIABgHQACgEADgDQACgDAEgBQAEgDADAAQAEAAAEADQAEABACADQADADABAEIACAHQAAAFgCAEQgBADgDADQgCAEgEABIgIABIgHgBgAgEgNIgEADIgDAFIAAAFIAAAGIADAFQACADACAAIAEABIAFgBQACAAACgDQACgCAAgDIABgGIgBgFIgCgFIgEgDIgFgCIgEACg");
	this.shape_25.setTransform(-79.6,14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAeIgGgBIgHgEIAEgGIAGAEQAEABAEAAIAFgBIADgBIACgDIABgEIgBgEQgBgDgEgCIgJgFIgFgDIgEgEIgDgEIAAgEQAAgDABgDQABgDADgCIAGgDQAEgCADAAQAGAAAEACIAHADIgDAGIgGgDIgIgBIgEABIgEABIgCADIgBADIABADIACADIALAIQAGACADADIAEAEIABAGIgBAHIgEAFQgDADgEABIgHABIgFgBg");
	this.shape_26.setTransform(-84.4,13.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADApIgDgFIgDgHIgEgOIgCgPIACgNIAEgPIADgIIADgEIAHAAIgFAIIgEAKIgBALIgBALIABAMIABALIAEAKQACAFADADg");
	this.shape_27.setTransform(-87.9,14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgCgGQAAgDgFAAQgEAAgEAEIgLALIAAAgIgJAAIAAg2IAJAAIAAAMIAHgHIAFgFIAIgBIAHABQADABABACQACACAAACIACAHIAAAog");
	this.shape_28.setTransform(-96.2,13.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAbQgEgDgEgEQgDgEgCgFQgDgFAAgGQAAgFADgFQACgFADgEQAEgEAEgCQAFgDAFAAQAFAAAGADQAEACAEAEQADAEACAFQADAFAAAFQAAAGgDAFQgCAFgDAEQgEAEgEADQgGACgFAAQgFAAgFgCgAgFgSIgGAEQgDADAAAEQgCAEAAADIACAIQAAAEADADIAGAEQADACACAAQADAAADgCIAGgEQACgDABgEIACgIQAAgDgCgEQgBgEgCgDIgGgEQgDgCgDAAQgCAAgDACg");
	this.shape_29.setTransform(-102.7,13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAnIAAg1IAIAAIAAA1gAgDgdQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_30.setTransform(-107.4,12.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAgQgCgDAAgFIAAgkIgJAAIAAgFIAJgCIAAgQIAIAAIAAAQIAOAAIAAAHIgOAAIAAAeIAAADIAAADQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQADAAAFgEIADAGIgHAFIgGACQgEAAgDgEg");
	this.shape_31.setTransform(-110.7,12.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_32.setTransform(-115.4,13.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAnIAAg1IAIAAIAAA1gAgDgdQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_33.setTransform(-119.7,12.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAbQgFgCgDgEQgEgEgCgFQgCgFAAgGQAAgGACgFQACgFAEgEQAEgEAFgCQAFgDAFAAIAIACQAFABAEADIgFAHIgGgDIgGgBQgEAAgCABIgGAEQgDADgBAEQgBAEAAADQAAAFABAEQABADADADIAGAEQACACAFAAIAHgBIAGgEIAEAHIgDACIgHADIgIABQgFAAgGgCg");
	this.shape_34.setTransform(-123.7,13.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJAbQgFgDgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQAEgEAFgCQAEgDAFAAQAGAAAEADQAFACAEAEQAEAEACAFQACAFAAAFQAAAGgCAFQgCAFgEAEQgEAEgFADQgEACgGAAQgFAAgEgCgAgGgSIgFAEQgDADgBAEQgBAEAAADIABAIQABAEADADIAFAEQADACADAAQADAAAEgCIAFgEQADgDABgEIABgIQAAgDgBgEQgBgEgDgDIgFgEQgEgCgDAAQgDAAgDACg");
	this.shape_35.setTransform(-129.6,13.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_36.setTransform(-135.5,13.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_37.setTransform(-140.9,13.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAYApIgIgYIgfAAIgIAYIgLAAIAehRIAJAAIAeBRgAANAIIgNgjIgMAjIAZAAg");
	this.shape_38.setTransform(-147.1,12.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_39.setTransform(-156.3,13.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLAqQgDgBgEgEQgCgEgCgEQgCgFAAgGQAAgHACgGIAGgJQAEgDAFgCQAFgDAFAAIAHABIAGADIAAgjIAJAAIAABWIgJAAIAAgHQgEAEgFACQgEADgEAAQgFAAgFgDgAgDgCIgGAEIgEAHIgBAIIABAIIADAFQACADADACIAFABIAEgBIAGgDIAGgFIAAgTIgBgHQgCgCgCgBIgHgBQgEAAgDABg");
	this.shape_40.setTransform(-162.4,11.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AANAcIAAgmIgBgGQgBgDgEAAQgEAAgEAEIgMALIAAAgIgJAAIAAg2IAJAAIAAAMIAIgHIAGgFIAIgBIAFABQADABACACQACACAAACIABAHIAAAog");
	this.shape_41.setTransform(-168.6,13.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAbIgFgCQgCgDgBgDIAAgGIAAgoIAJAAIAAAlQgBAFACADQACACADAAIAEgBIAFgDIALgKIAAghIAJAAIAAA1IgJAAIAAgLIgGAGIgEAEIgFACIgGABIgGgBg");
	this.shape_42.setTransform(-175.1,13.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVAnIAAhOIArAAIAAAIIghAAIAAAbIAbAAIAAAIIgbAAIAAAjg");
	this.shape_43.setTransform(-180.5,12.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAIAAIAABXg");
	this.shape_44.setTransform(-188.4,11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_45.setTransform(-192.7,13.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOAbIgEgCQgCgDgBgDIgBgGIAAgoIAJAAIAAAlQABAFABADQACACADAAIAEgBIAFgDIAKgKIAAghIAJAAIAAA1IgJAAIAAgLIgEAGIgGAEIgEACIgGABIgHgBg");
	this.shape_46.setTransform(-198.8,13.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEAgQgDgDAAgFIAAgkIgJAAIAAgFIAJgCIAAgQIAIAAIAAAQIAPAAIAAAHIgPAAIAAAeIAAADIABADQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACAAAGgEIAEAGIgIAFIgGACQgEAAgDgEg");
	this.shape_47.setTransform(-203.9,12.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOAbIgEgCQgCgDgBgDIgBgGIAAgoIAJAAIAAAlQAAAFACADQABACAEAAIAFgBIAEgDIAKgKIAAghIAJAAIAAA1IgJAAIAAgLIgEAGIgGAEIgEACIgGABIgHgBg");
	this.shape_48.setTransform(-208.9,13.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAeAnIAAhEIgDAKIgYA6IgIAAIgWg4IgDgLIAABDIgJAAIAAhOIAOAAIAYA+IABAHIABgHIAZg+IAOAAIAABOg");
	this.shape_49.setTransform(-217.4,12.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgBgGQgCgDgEAAQgEAAgEAEIgLALIAAAgIgJAAIAAg2IAJAAIAAAMIAHgHIAFgFIAIgBIAHABQADABABACQACACABACIABAHIAAAog");
	this.shape_50.setTransform(-228.9,13.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_51.setTransform(-235,13.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAnIAAg1IAIAAIAAA1gAgDgdQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_52.setTransform(-239.4,12.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKAqQgFgBgDgEQgCgEgCgEQgCgFAAgGQAAgHACgGIAGgJQAEgDAEgCQAGgDAFAAIAHABIAGADIAAgjIAJAAIAABWIgJAAIAAgHQgEAEgEACQgFADgEAAQgFAAgEgDgAgDgCIgGAEIgEAHIgBAIIABAIIADAFQACADACACIAGABIAFgBIAFgDIAGgFIAAgTIgBgHQgCgCgCgBIgHgBQgEAAgDABg");
	this.shape_53.setTransform(-244.3,11.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_54.setTransform(-250.1,13.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AANAcIAAgmIgBgGQgBgDgEAAQgEAAgEAEIgMALIAAAgIgJAAIAAg2IAJAAIAAAMIAIgHIAGgFIAIgBIAFABQAEABABACQACACAAACIABAHIAAAog");
	this.shape_55.setTransform(-256.2,13.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_56.setTransform(-262.3,13.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAAAoIgGgCIgHgEIgHgEIgEgHIgEgHIgCgHIgBgJIABgIIACgHIAEgIIAEgGIAHgEIAGgEIAHgDIAIAAQAFAAAKACQAEACAFAEIgFAHQgEgEgFgBQgFgBgGAAQgFAAgFACQgFADgEADQgEAFgCAFQgCAGgBAHQABAHACAGQACAFAEAFQAEAFAFACQAFACAHAAIAJgBIAJgDIAEAIIgLADQgGACgFAAIgJgBg");
	this.shape_57.setTransform(-268.3,12.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMAsIAAguIgJAAIAAgFIAJgCIAAgJQAAgGACgFQABgEADgEQADgDAEgCQAEgBAFAAIAGAAIAGACIgDAIQgGgCgDAAQgEAAgCABIgEAEIgCAGIgBAIIAAAHIAMAAIAAAHIgMAAIAAAug");
	this.shape_58.setTransform(-275.9,11.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKAbQgEgDgEgEQgDgEgCgFQgDgFAAgGQAAgFADgFQACgFADgEQAEgEAEgCQAGgDAEAAQAGAAAFADQAEACAEAEQADAEACAFQADAFAAAFQAAAGgDAFQgCAFgDAEQgEAEgEADQgFACgGAAQgEAAgGgCgAgFgSIgGAEQgCADgBAEQgCAEAAADIACAIQABAEACADIAGAEQADACACAAQADAAADgCIAGgEQADgDAAgEIACgIQAAgDgCgEQAAgEgDgDIgGgEQgDgCgDAAQgCAAgDACg");
	this.shape_59.setTransform(-281.6,13.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_60.setTransform(30.2,-0.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAcIAAg1IAJAAIAAAKIAHgJQADgDADAAQADAAAEAEIgFAIIgDgDQgDAAgDAEQgDAEgDAGIAAAgg");
	this.shape_61.setTransform(26.1,-0.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgIAbQgEgCgEgEQgCgEgCgFQgCgFgBgHQABgFACgGIAEgJQAEgDAFgCQAFgDAEAAQAFAAAEACQAEACADADQACADACAEQACAEAAAFIAAAFIglAAQAAAEACAEQAAAEADADQACADAEABQACACAEAAQADAAADgCIAIgEIADAHQgFAEgFABQgEACgFAAQgFAAgFgCgAAOgGIgCgGIgCgEIgDgDIgGAAIgDAAIgFADIgDAEIgCAGIAaAAIAAAAg");
	this.shape_62.setTransform(20.8,-0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgSAsIgFgDIAAhUIAJAAIAAAjIAGgCQAFgCAEAAQAGAAADACQAFACADADQADAEACADQABAFAAAGQAAAIgCAFQgDAGgDAEQgFAEgFADQgGACgHAAIgLgBgAgIgCIgGACIAAAjQAEACAEAAIAFgBQADgBAEgDQAEgDADgEQABgFAAgHIgBgHIgDgFQgCgCgDgBQgDgCgDAAQgEAAgDACg");
	this.shape_63.setTransform(15,-2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAgAcIAAgmIgBgGQgCgDgEAAQgEAAgEADIgKAJIgDADIAAAgIgIAAIAAgmIgBgGQgBgDgEAAQgEAAgFAEIgMALIAAAgIgJAAIAAg1IAJAAIAAALIAIgIIAGgDIAIgCIAGABIADADIADADIABAGIAIgIIAHgDQADgCAEAAIAHABIAEADIADAEIABAHIAAAog");
	this.shape_64.setTransform(6.6,-0.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAbQgEgCgEgEQgCgEgCgFQgCgFgBgHQABgFACgGIAEgJQAEgDAFgCQAFgDAEAAQAFAAAEACQAEACACADQADADACAEQACAEAAAFIAAAFIglAAQAAAEACAEQAAAEADADQACADAEABQACACAEAAQADAAADgCIAIgEIADAHQgFAEgFABQgEACgFAAQgFAAgFgCgAAOgGIgCgGIgCgEIgDgDIgGAAIgDAAIgFADIgDAEIgCAGIAaAAIAAAAg");
	this.shape_65.setTransform(-1.3,-0.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAgAcIAAgmIgBgGQgCgDgEAAQgEAAgEADIgKAJIgDADIAAAgIgIAAIAAgmIgBgGQgBgDgEAAQgEAAgFAEIgMALIAAAgIgJAAIAAg1IAJAAIAAALIAIgIIAGgDIAIgCIAGABIADADIADADIABAGIAIgIIAHgDQADgCAEAAIAHABIAEADIADAEIABAHIAAAog");
	this.shape_66.setTransform(-9.2,-0.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAIAAIAABXg");
	this.shape_67.setTransform(-18.7,-2.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgDAsIAAhXIAIAAIAABXg");
	this.shape_68.setTransform(-21.5,-2.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_69.setTransform(-25.8,-0.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgUAlQAHgIADgGIAIgRIgUgvIAKAAIAMAhIACAFIABgFIALghIAJAAIgVA4IgHAQIgIALg");
	this.shape_70.setTransform(-34.1,0.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgSAsIgFgDIAAhUIAJAAIAAAjIAGgCQAFgCAEAAQAGAAADACQAFACADADQADAEACADQABAFAAAGQAAAIgCAFQgDAGgDAEQgFAEgFADQgGACgHAAIgLgBgAgIgCIgGACIAAAjQAEACAEAAIAFgBQADgBAEgDQAEgDADgEQABgFAAgHIgBgHIgDgFQgCgCgDgBQgDgCgDAAQgEAAgDACg");
	this.shape_71.setTransform(-39.4,-2.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAgQgCgDAAgFIAAgkIgJAAIAAgFIAJgCIAAgQIAIAAIAAAQIAOAAIAAAHIgOAAIAAAeIAAADIAAADQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQADAAAFgEIADAGIgHAFIgGACQgEAAgDgEg");
	this.shape_72.setTransform(-47.7,-1.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgBgGQgBgDgFAAQgEAAgEAEIgLALIAAAgIgJAAIAAg1IAJAAIAAALIAHgIIAFgDIAIgCIAGABQADABACACQACACABACIABAHIAAAog");
	this.shape_73.setTransform(-52.7,-0.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgIAbQgEgCgEgEQgDgEgBgFQgCgFAAgHQAAgFACgGIAEgJQAEgDAFgCQAEgDAFAAQAFAAAEACQAEACACADQADADACAEQABAEABAFIAAAFIglAAQAAAEACAEQAAAEADADQACADAEABQACACAEAAQADAAADgCIAIgEIAEAHQgGAEgFABQgEACgFAAQgFAAgFgCgAAOgGIgBgGIgDgEIgDgDIgGAAIgDAAIgFADIgDAEIgCAGIAaAAIAAAAg");
	this.shape_74.setTransform(-58.8,-0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAgAcIAAgmIgBgGQgCgDgEAAQgEAAgEADIgKAJIgDADIAAAgIgIAAIAAgmIgBgGQgBgDgEAAQgEAAgFAEIgMALIAAAgIgJAAIAAg1IAJAAIAAALIAIgIIAGgDIAIgCIAGABIADADIADADIABAGIAIgIIAHgDQADgCAEAAIAHABIAEADIADAEIABAHIAAAog");
	this.shape_75.setTransform(-66.7,-0.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIAbQgEgCgEgEQgDgEgBgFQgCgFAAgHQAAgFACgGIAEgJQAEgDAFgCQAEgDAFAAQAFAAAEACQAEACACADQADADACAEQABAEABAFIAAAFIglAAQAAAEACAEQAAAEADADQACADAEABQACACAEAAQADAAADgCIAIgEIAEAHQgGAEgFABQgEACgFAAQgFAAgFgCgAAOgGIgBgGIgDgEIgDgDIgGAAIgDAAIgFADIgDAEIgCAGIAaAAIAAAAg");
	this.shape_76.setTransform(-74.5,-0.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgMAqIgHgDIgFgEIgBgFIABgGIAIgJIgGgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgDACgDIAIgHQgFgDgCgEQgDgFAAgFQAAgFACgEQABgDADgDQADgDAEgCQAEgBAFAAQAEAAAGACIAIAAIAKgBIAAAIIgLAAQACACAAADIABAGQAAAEgCAEQgBAEgDADQgDADgEABIgHACIgDAAIgCgBIgGAEIgBAEQAAAAAAAAQAAABABAAQAAAAABAAQABAAABAAIAUAAIAGABIAFADQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABIABAFQAAAFgCAEQgCAEgEADQgEAEgGABQgFACgFAAIgIgBgAgLASQgFAIAAACQAAADAEACQADACAGAAIAHgBIAGgDIAFgEQACgDAAgDQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgDAAIgUAAgAgIgiIgDADQgCACgBACIgBAFIABAGQAAAAABABQAAABAAAAQAAAAABABQAAAAABABIADADIAFABIAEgBIAEgDIACgEIABgGIgBgFIgCgEIgEgDIgEgBIgFABg");
	this.shape_77.setTransform(-80.2,0.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_78.setTransform(-86.3,-0.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgBgGQgBgDgFAAQgEAAgEAEIgLALIAAAgIgJAAIAAg1IAJAAIAAALIAHgIIAFgDIAIgCIAGABQADABACACQACACABACIABAHIAAAog");
	this.shape_79.setTransform(-92.3,-0.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAMAbQgCgCAAgEIgGAFIgFACIgGABIgGgBIgEgDIgDgFIgBgGIABgFIACgEIAEgEIAFgBIASgEIAAgKQAAgDgDgCQgCgCgFAAIgGABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIABACIgKACIAAgDIABgFIAEgEIAGgDIAHgBIAHABIAGADIAEAEIABAGIAAAgQAAADAEAAIgCAIQgGgBgCgBgAgLAIIgBAGQAAADACACQACACADAAQADAAACgCIAJgFIAAgMg");
	this.shape_80.setTransform(-98.5,-0.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAgAcIAAgmIgBgGQgCgDgEAAQgEAAgEADIgKAJIgDADIAAAgIgIAAIAAgmIgBgGQgBgDgEAAQgEAAgFAEIgMALIAAAgIgJAAIAAg1IAJAAIAAALIAIgIIAGgDIAIgCIAGABIADADIADADIABAGIAIgIIAHgDQADgCAEAAIAHABIAEADIADAEIABAHIAAAog");
	this.shape_81.setTransform(-106.4,-0.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgOAcIAAg1IAJAAIAAAKIAHgJQADgDADAAQADAAAEAEIgFAIIgDgDQgDAAgDAEQgCAEgEAGIAAAgg");
	this.shape_82.setTransform(-115.9,-0.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgIAbQgEgCgEgEQgDgEgBgFQgCgFAAgHQAAgFACgGIAEgJQAEgDAFgCQAEgDAGAAQAEAAAEACQAEACACADQADADACAEQABAEABAFIAAAFIglAAQAAAEACAEQABAEACADQACADAEABQACACAEAAQADAAADgCIAIgEIAEAHQgHAEgDABQgFACgFAAQgEAAgGgCgAAOgGIgBgGIgDgEIgEgDIgFAAIgDAAIgFADIgDAEIgCAGIAaAAIAAAAg");
	this.shape_83.setTransform(-121.2,-0.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLArQgEgDgDgDQgDgEgBgFQgCgEAAgGQAAgHACgGIAGgJQAEgDAEgCQAGgDAFAAIAHABIAGADIAAgjIAJAAIAABWIgJAAIAAgHIgJAHQgEACgEAAQgFAAgFgCgAgDgBIgGACIgEAIIgBAIIABAIIADAFQACADADACIAFABIAFgBIAFgDIAGgFIAAgTIgBgHQgCgCgCgBIgHgBQgEAAgDACg");
	this.shape_84.setTransform(-127.5,-2.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAOAcIAAgmIgBgGQgBgDgFAAQgEAAgEAEIgLALIAAAgIgJAAIAAg1IAJAAIAAALIAHgIIAFgDIAIgCIAGABQADABACACQACACABACIABAHIAAAog");
	this.shape_85.setTransform(-133.7,-0.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNAbIgFgCQgCgCAAgEIgBgGIAAgoIAJAAIAAAlQAAAFABADQABACAEAAIAFgBIAEgDIALgKIAAghIAJAAIAAA1IgJAAIAAgLIgGAGIgEAEIgFACIgGABIgGgBg");
	this.shape_86.setTransform(-140.2,-0.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_87.setTransform(-149.2,-0.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgEAgQgCgDAAgFIAAgkIgJAAIAAgFIAJgCIAAgQIAIAAIAAAQIAOAAIAAAHIgOAAIAAAeIAAADIAAADQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACAAAGgEIAEAGIgIAFIgGACQgEAAgDgEg");
	this.shape_88.setTransform(-153.7,-1.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgHAbQgFgCgDgEQgDgEgDgFQgCgFAAgHQAAgFACgGIAGgJQADgDAFgCQAFgDAFAAQAEAAAEACQAEACADADQACADACAEQACAEgBAFIAAAFIgkAAQAAAEABAEQABAEADADQACADADABQADACAEAAQAEAAADgCIAHgEIADAHQgFAEgEABQgFACgFAAQgEAAgFgCgAANgGIgBgGIgBgEIgFgDIgEAAIgFAAIgEADIgDAEIgCAGIAZAAIAAAAg");
	this.shape_89.setTransform(-158.3,-0.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_90.setTransform(-163.8,-0.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGAcIgNgEIAEgIIAEACIAGACIAGABQAEAAACgCQADgCAAgDIgBgEIgEgEIgJgEQgIgDgDgDQgDgDAAgFIABgHIAEgEQADgCAEgBQADgCAEAAIAHABQAFABAGADIgFAHIgIgDIgGgBQgDAAgDACQgDACAAADIABADQAEADAJAEIAHADIAFADIACAFIABAFQAAAEgCADQgBADgCACIgGADIgIABg");
	this.shape_91.setTransform(-169.2,-0.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAYApIgIgYIgfAAIgIAYIgLAAIAehRIAJAAIAeBRgAANAIIgNgjIgMAjIAZAAg");
	this.shape_92.setTransform(-175.4,-2.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgdAMIAAgHIA7AAIAAAHgAgdgEIAAgHIA7AAIAAAHg");
	this.shape_93.setTransform(-185.2,-0.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgWAnIAAhOIAKAAIAABGIAjAAIAAAIg");
	this.shape_94.setTransform(-193.9,-2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAYApIgIgYIgfAAIgIAYIgLAAIAehRIAJAAIAeBRgAANAIIgNgjIgMAjIAZAAg");
	this.shape_95.setTransform(-201,-2.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgEAnIAAhGIgaAAIAAgIIA9AAIAAAIIgaAAIAABGg");
	this.shape_96.setTransform(-206.9,-2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgHAoIgIgCIgHgDIgFgGIgFgGIgEgGIgCgIIgBgJIABgHIACgIIAEgIIAFgGIAFgEIAHgEIAIgDIAHAAIAIAAIAIADIAHAEIAGAEIAEAGIAEAIIACAIIABAHIgBAJIgCAIIgEAGIgEAGIgGAGIgHADIgIACIgIABIgHgBgAgKgdQgFACgEAFQgEAFgDAFQgCAHAAAFQAAAHACAFQADAGAEAFQAEAEAFADQAFACAFAAQAGAAAFgCQAFgDAEgEQAFgFACgGQACgFAAgHQAAgFgCgHQgCgFgFgFQgEgFgFgCQgFgCgGgBQgFABgFACg");
	this.shape_97.setTransform(-214.7,-2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgEAnIAAhGIgaAAIAAgIIA9AAIAAAIIgaAAIAABGg");
	this.shape_98.setTransform(-222.5,-2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEAnIAAgkIgbgqIALAAIAUAiIAWgiIAKAAIgcApIAAAlg");
	this.shape_99.setTransform(-232,-2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAQAnIgVgiIgLAAIAAAiIgKAAIAAhOIAYAAIALABQAEACADADQADADACAEQABAEAAAFQAAAEgBAFQgCAEgEADIgFADIgHACIAYAjgAgQgCIANAAIAGgBIAFgDIADgFIABgGIgBgHQgBgCgCgCIgEgCIgHgBIgNAAg");
	this.shape_100.setTransform(-238.4,-2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEAnIAAhGIgaAAIAAgIIA9AAIAAAIIgaAAIAABGg");
	this.shape_101.setTransform(-245.6,-2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgIAoIgHgCIgKgGIAFgIIAJAGQAGACAFAAIAGgBIAFgCIADgEIABgFIgBgGQgDgEgEgCIgMgHIgIgEIgFgFIgDgFIgBgGQAAgEACgEQABgFAEgCQADgDAFgCQAFgBAFAAQAHAAAGACQAEABAGAEIgFAIIgIgFIgLgBIgFABIgFACIgDAEQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABAEIADAEQAHAFAIAEIAMAHQADADACAEQABAEAAAEQAAAFgCAEQgBAEgEADQgDADgFABQgFACgFAAIgIgBg");
	this.shape_102.setTransform(-252,-2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgLAnQgGgCgDgEIgFgEIgDgFQgCgEAAgJIAAgzIAKAAIAAAwIAAALQABADADADQAEADADACQAFACAEAAQAFAAAEgCQAFgCACgDQADgDACgDIAAgLIAAgwIAKAAIAAAzQgBAKgBADIgDAFIgEAEQgEAEgGACQgGACgGAAQgGAAgFgCg");
	this.shape_103.setTransform(-259.4,-1.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AggAnIAAhOIAaAAIAIABIAHACIAHADIAGAGIAFAFIADAHIACAIIABAHIgBAHIgCAHIgDAHIgFAHIgFAFIgHAEIgHACIgJAAgAgWAfIAPAAQAHAAAEgCQAFgBAEgEQAEgEADgIIADgMQAAgGgDgGQgCgFgEgFQgEgEgGgCQgFgCgGgBIgPAAg");
	this.shape_104.setTransform(-267.5,-2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAVAoIgng9IgCgDIgBgBIgBgDIAABDIgKAAIAAhOIANAAIAnA7IABACIABAEIAAABIAAhCIAKAAIAABPg");
	this.shape_105.setTransform(-276.6,-2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgEAnIAAhOIAJAAIAABOg");
	this.shape_106.setTransform(-283,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.8,-11.1,324.9,32.6);


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
	this.instance_1.setTransform(-162.7,-112);
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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAgIAAg/IAIAAIAAA5IAdAAIAAAGg");
	this.shape.setTransform(-227.2,-110.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAhIgGgTIgZAAIgGATIgJAAIAYhBIAIAAIAXBBgAAKAGIgKgcIgJAcIATAAg");
	this.shape_1.setTransform(-233,-110.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgVAAIAAgHIAxAAIAAAHIgVAAIAAA4g");
	this.shape_2.setTransform(-237.8,-110.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAgIgGgBIgFgDIgFgEIgEgFIgDgGIgCgGIAAgHIAAgGIACgHIADgFIAEgFIAFgEIAFgDIAGgCIAGAAIAHAAIAGACIAFADIAFAEIAEAFIADAFIACAHIAAAGIAAAHIgCAGIgDAGIgEAFIgFAEIgFADIgGABIgHABIgGgBgAgIgXQgEACgEADIgFAIQgCAGAAAEQAAAFACAFQACAFADAEQAEADAEACQAEACAEAAQAFAAAEgCQAEgCAEgDQADgEACgFQACgFAAgFQAAgEgCgGIgFgIQgEgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(-244.1,-110.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgVAAIAAgHIAxAAIAAAHIgVAAIAAA4g");
	this.shape_4.setTransform(-250.5,-110.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAgIAAgdIgVgiIAJAAIAQAbIASgbIAIAAIgXAhIAAAeg");
	this.shape_5.setTransform(-258.1,-110.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAgIgRgbIgJAAIAAAbIgIAAIAAg/IAUAAIAIABQADABADADQADACABADIABAHQAAAEgBAEIgEAGIgEACIgGABIATAdgAgNgBIALAAIAEgBIAEgCQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIABgGIgBgFIgDgEIgDgBIgFAAIgLAAg");
	this.shape_6.setTransform(-263.3,-110.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgVAAIAAgHIAxAAIAAAHIgVAAIAAA4g");
	this.shape_7.setTransform(-269.1,-110.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAgIgGgBIgIgFIAEgGIAHAEQAFACAEAAIAFgBIADgCIADgDIABgEIgBgEIgFgGIgKgFIgHgEIgEgDIgDgFIAAgEIABgHIAFgGQADgCAEgBQAEgCADABQAGgBAFACIAIAEIgEAGIgHgDIgJgBIgDABIgFACIgCACIgBAEIABADIACADIAMAIIAKAGIAEAEIABAHIgBAIIgEAGQgDACgEABQgEACgEgBIgGgBg");
	this.shape_8.setTransform(-274.2,-110.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAgQgEgCgEgDIgDgDIgDgEIgBgLIAAgpIAIAAIAAAnIAAAIIADAFQADADADACIAHABIAIgBIAFgFQADgCAAgDIABgIIAAgnIAIAAIAAApQAAAIgCADIgCAEIgDADQgEADgEACQgFABgFAAQgEAAgFgBg");
	this.shape_9.setTransform(-280.2,-110.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAgIAAg/IAVAAIAGAAIAHACIAFADIAFAEIADAFIAEAFIACAGIAAAGIAAAGIgCAGIgDAGIgDAFIgGAEIgEADIgHACIgHAAgAgSAaIAMAAQAGAAADgCQAFgBACgDQAEgEADgGQABgDABgHQAAgFgCgEQgCgFgEgDQgDgEgFgBQgEgCgFAAIgMAAg");
	this.shape_10.setTransform(-286.8,-110.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARAgIgfgwIgBgDIgBgCIgBgCIAAA3IgIAAIAAg/IAKAAIAfAvIABACIABADIABABIAAg1IAIAAIAAA/g");
	this.shape_11.setTransform(-294.2,-110.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_12.setTransform(-299.3,-110.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},48).wait(43));

	// AGFNumbers
	this.instance_3 = new lib.G_AGFNumbers("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.4,63.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).to({alpha:1},9).wait(51));

	// AGFGroup
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECB02C").s().p("AgaA0IAAhlIAQAAIAAAIIAFgGQAFgEAEAAQAGAAAEADQAEACADAFIAFAKQABAHAAAHQAAAIgBAHQgDAGgEAFQgDAFgFADQgGADgFAAQgHAAgDgCIAAAigAgGghIgEAHIAAAWQAAAEACADQADAEAEAAIADgCIAEgEIADgHIABgKQAAgGgDgJQgDgGgEAAQgCAAgEAEg");
	this.shape_13.setTransform(-246.2,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECB02C").s().p("AgQAhIgFgDIgCgGIgBgJIAAgwIARAAIAAAuIAAAFQAAAAABABQAAABABAAQAAABABAAQAAAAABAAIAAAAQAEAAAGgIIACgDIAAgrIAQAAIAABCIgQAAIAAgJIgJAIQgDACgFAAIgIgBg");
	this.shape_14.setTransform(-253,10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECB02C").s().p("AgLAhQgFgDgEgEQgEgFgCgHQgCgGAAgIQAAgHACgGQACgGAEgGQAEgEAFgDQAGgDAFAAQAHAAAFADQAFADAEAEQAEAGACAGQACAGAAAHQAAAIgCAGQgCAHgEAFQgEAEgFADQgFADgHAAQgFAAgGgDgAgHgQIgCAIIgBAIIABAKIACAHQAEAGADAAIAEgCIAEgEIADgHIABgKIgBgIIgDgIIgEgEIgEgCQgDAAgEAGg");
	this.shape_15.setTransform(-259.6,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECB02C").s().p("AgRAiIAAhCIAOAAIABANQACgGACgEQAEgFADABIAEABIAFADIgFARQgDgCgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABIgCADQgBAGAAAHIAAAeg");
	this.shape_16.setTransform(-264.4,9.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECB02C").s().p("AgBAxIgIgDIgIgEIgHgGIgFgHIgEgJIgDgJIAAgLIAAgKIACgJIAFgJIAFgGIAHgGQADgDAEgCIAJgDIAIgBQAJAAAGABQAIACAHAFIgGAQQgOgIgIAAQgGAAgEACQgGADgDAEQgEAEgDAHQgBAFAAAIQgBAGADAHQACAHAFAEQADAFAGADQAEACAGAAIAEAAIAEgCIAAgbIASAAIAAAnIgOAEQgIACgGAAIgJgBg");
	this.shape_17.setTransform(-271.4,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECB02C").s().p("AgYAwIAAhfIAxAAIAAAOIggAAIAAAbIAbAAIAAANIgbAAIAAApg");
	this.shape_18.setTransform(-281.3,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECB02C").s().p("AgBAxIgJgDIgHgEIgGgGIgGgHIgEgJIgDgJIgBgLIABgKIADgJIADgJIAGgGIAGgGQAEgDAEgCIAIgDIAJgBQAJAAAGABQAIACAIAFIgHAQQgOgIgIAAQgGAAgEACQgGADgDAEQgEAEgCAHQgDAFAAAIQAAAGADAHQACAHAEAEQAFAFAEADQAFACAGAAIAEAAIAFgCIAAgbIARAAIAAAnIgOAEQgIACgHAAIgIgBg");
	this.shape_19.setTransform(-289.3,8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECB02C").s().p("AASAwIgHgYIgVAAIgHAYIgSAAIAchfIAPAAIAcBfgAAIAJIgIggIgHAgIAPAAg");
	this.shape_20.setTransform(-297.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},24).wait(67));

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
	var mask_graphics_48 = new cjs.Graphics().p("A54hAIAAkxIA6AAIAAExg");
	var mask_graphics_49 = new cjs.Graphics().p("A54g/IAAkxIDlAAIAAExg");
	var mask_graphics_50 = new cjs.Graphics().p("A54g/IAAkxIGRAAIAAExg");
	var mask_graphics_51 = new cjs.Graphics().p("A54g+IAAkxII9AAIAAExg");
	var mask_graphics_52 = new cjs.Graphics().p("A54g9IAAkxILpAAIAAExg");
	var mask_graphics_53 = new cjs.Graphics().p("A54g9IAAkxIOUAAIAAExg");
	var mask_graphics_54 = new cjs.Graphics().p("A54g8IAAkxIRAAAIAAExg");
	var mask_graphics_55 = new cjs.Graphics().p("A54g7IAAkxITsAAIAAExg");
	var mask_graphics_56 = new cjs.Graphics().p("A54g7IAAkxIWXAAIAAExg");
	var mask_graphics_57 = new cjs.Graphics().p("A55g6IAAkxIZEAAIAAExg");
	var mask_graphics_58 = new cjs.Graphics().p("A55g6IAAkxIbvAAIAAExg");
	var mask_graphics_59 = new cjs.Graphics().p("A55g5IAAkxIebAAIAAExg");
	var mask_graphics_60 = new cjs.Graphics().p("A55g4IAAkxMAhGAAAIAAExg");
	var mask_graphics_61 = new cjs.Graphics().p("A55g4IAAkxMAjyAAAIAAExg");
	var mask_graphics_62 = new cjs.Graphics().p("A55g3IAAkxMAmeAAAIAAExg");
	var mask_graphics_63 = new cjs.Graphics().p("A55g2IAAkxMApJAAAIAAExg");
	var mask_graphics_64 = new cjs.Graphics().p("A55g2IAAkxMAr1AAAIAAExg");
	var mask_graphics_65 = new cjs.Graphics().p("A55g1IAAkxMAuhAAAIAAExg");
	var mask_graphics_66 = new cjs.Graphics().p("A55g1IAAkxMAxNAAAIAAExg");
	var mask_graphics_67 = new cjs.Graphics().p("A57g0IAAkxMAz4AAAIAAExg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_graphics_48,x:-165.7,y:-37}).wait(1).to({graphics:mask_graphics_49,x:-165.7,y:-36.9}).wait(1).to({graphics:mask_graphics_50,x:-165.7,y:-36.9}).wait(1).to({graphics:mask_graphics_51,x:-165.7,y:-36.8}).wait(1).to({graphics:mask_graphics_52,x:-165.7,y:-36.7}).wait(1).to({graphics:mask_graphics_53,x:-165.7,y:-36.7}).wait(1).to({graphics:mask_graphics_54,x:-165.7,y:-36.6}).wait(1).to({graphics:mask_graphics_55,x:-165.7,y:-36.5}).wait(1).to({graphics:mask_graphics_56,x:-165.8,y:-36.5}).wait(1).to({graphics:mask_graphics_57,x:-165.8,y:-36.4}).wait(1).to({graphics:mask_graphics_58,x:-165.8,y:-36.4}).wait(1).to({graphics:mask_graphics_59,x:-165.8,y:-36.3}).wait(1).to({graphics:mask_graphics_60,x:-165.8,y:-36.2}).wait(1).to({graphics:mask_graphics_61,x:-165.8,y:-36.2}).wait(1).to({graphics:mask_graphics_62,x:-165.8,y:-36.1}).wait(1).to({graphics:mask_graphics_63,x:-165.8,y:-36}).wait(1).to({graphics:mask_graphics_64,x:-165.8,y:-36}).wait(1).to({graphics:mask_graphics_65,x:-165.8,y:-35.9}).wait(1).to({graphics:mask_graphics_66,x:-165.8,y:-35.9}).wait(1).to({graphics:mask_graphics_67,x:-165.5,y:-35.8}).wait(24));

	// WhiteLine
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.5).p("Egx4AAbIHhglIF3ASIFtgdIEOAwIGfgwIC5AwIEpglIHUAlIFXg4IF7A4IDAhOIBfBOIFShIIEzBhIF3hRIGfBRIG9hRIDmBRIDXhhIDBBh");
	this.shape_21.setTransform(-165.4,-57.9,0.52,1.042);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.5).p("Egx4AAbIHhglIF3ASIFtgdIEOAwIGfgwIC5AwIEpglIHUAlIFXg4IF7A4IDAhOIBfBOIFShIIEzBhIF3hRIGfBRIG9hRIDmBRIDXhhIDBBh");
	this.shape_22.setTransform(-165.4,-61,0.52,1.042);

	var maskedShapeInstanceList = [this.shape_21,this.shape_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21}]},48).wait(43));

	// Mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_26 = new cjs.Graphics().p("A39EnIAAgUMAv6AAAIAAAUg");
	var mask_1_graphics_27 = new cjs.Graphics().p("A39EnIAAhbMAv6AAAIAABbg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A39EnIAAiiMAv6AAAIAACig");
	var mask_1_graphics_29 = new cjs.Graphics().p("A39EnIAAjpMAv6AAAIAADpg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A39EnIAAkwMAv6AAAIAAEwg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A39EnIAAl3MAv6AAAIAAF3g");
	var mask_1_graphics_32 = new cjs.Graphics().p("A39EnIAAm+MAv6AAAIAAG+g");
	var mask_1_graphics_33 = new cjs.Graphics().p("A39EnIAAoFMAv6AAAIAAIFg");
	var mask_1_graphics_34 = new cjs.Graphics().p("A39EnIAApMMAv6AAAIAAJMg");
	var mask_1_graphics_35 = new cjs.Graphics().p("A39FKIAAqTMAv6AAAIAAKTg");
	var mask_1_graphics_36 = new cjs.Graphics().p("A39FuIAArbMAv6AAAIAALbg");
	var mask_1_graphics_37 = new cjs.Graphics().p("A39GRIAAshMAv6AAAIAAMhg");
	var mask_1_graphics_38 = new cjs.Graphics().p("A39G1IAAtpMAv6AAAIAANpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_1_graphics_26,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_27,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_28,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_29,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_30,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_31,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_32,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_33,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_34,x:-153.4,y:29.5}).wait(1).to({graphics:mask_1_graphics_35,x:-153.4,y:26}).wait(1).to({graphics:mask_1_graphics_36,x:-153.4,y:22.4}).wait(1).to({graphics:mask_1_graphics_37,x:-153.4,y:18.9}).wait(1).to({graphics:mask_1_graphics_38,x:-153.4,y:15.3}).wait(53));

	// OrangeBars
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EBB02C").s().p("AjhFGIAAqLIHDAAIAAKLg");
	this.shape_23.setTransform(-17.5,22.6,0.505,1.043);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBB02C").s().p("AjiF3IAArtIHFAAIAALtg");
	this.shape_24.setTransform(-48.1,17.4,0.505,1.043);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBB02C").s().p("AjiEbIAAo1IHEAAIAAI1g");
	this.shape_25.setTransform(-78.7,27,0.505,1.043);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EBB02C").s().p("AjiDbIAAm1IHFAAIAAG1g");
	this.shape_26.setTransform(-109.3,33.7,0.505,1.043);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBB02C").s().p("AjhCdIAAk4IHDAAIAAE4g");
	this.shape_27.setTransform(-139.9,40.2,0.505,1.043);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EBB02C").s().p("AjiBXIAAitIHFAAIAACtg");
	this.shape_28.setTransform(-170.5,47.4,0.505,1.043);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBB02C").s().p("AjhA7IAAh0IHDAAIAAB0g");
	this.shape_29.setTransform(-201.1,50.4,0.505,1.043);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EBB02C").s().p("AjiApIAAhRIHFAAIAABRg");
	this.shape_30.setTransform(-231.7,52.2,0.505,1.043);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBB02C").s().p("AjiAgIAAg/IHEAAIAAA/g");
	this.shape_31.setTransform(-262.3,53.1,0.505,1.043);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBB02C").s().p("AjhAUIAAgnIHDAAIAAAng");
	this.shape_32.setTransform(-292.8,54.4,0.505,1.043);

	var maskedShapeInstanceList = [this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},26).wait(65));

	// Mask3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_48 = new cjs.Graphics().p("AYeETIhwBnIh5hWIjoBWIjZhWIjDBWIihhnIiwBNIgxhSIhlBSIjGg8IiyA8Ij1goIibAoIhhgzIjYAzIiNgzIi+AfIjEgUIj7AoIAAraMA0DAAAIAAL0g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_2_graphics_48,x:-165.5,y:-93.2}).wait(43));

	// B10
	this.instance_7 = new lib.G_B10("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-17,-54,0.485,0.015);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({scaleY:1,y:-86.1},6).wait(15));

	// B9
	this.instance_8 = new lib.G_B9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-47.7,-54,0.485,0.014);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).to({scaleY:1,y:-89.1},4).wait(20));

	// B8
	this.instance_9 = new lib.G_B8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-78.3,-56.2,0.485,0.018,0,0,0,-0.1,0);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).to({regY:-0.1,scaleY:1,y:-83.6},4).wait(22));

	// B7
	this.instance_10 = new lib.G_B7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-108.9,-56.3,0.485,0.023);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(61).to({_off:false},0).to({scaleY:1,y:-78.8},4).wait(26));

	// B6
	this.instance_11 = new lib.G_B6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-139.5,-56.2,0.485,0.029,0,0,0,-0.1,0);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({_off:false},0).to({regY:-0.1,scaleY:1,y:-73},4).wait(29));

	// B5
	this.instance_12 = new lib.G_B5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-170.1,-56.3,0.485,0.047);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(56).to({_off:false},0).to({scaleY:1,y:-66.3},5).wait(30));

	// B4
	this.instance_13 = new lib.G_B4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-200.7,-56.2,0.485,0.063,0,0,0,-0.1,0);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},0).to({regY:-0.1,scaleY:1,y:-63.7},5).wait(32));

	// B3
	this.instance_14 = new lib.G_B3("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-231.3,-56.3,0.485,0.08,0,0,0,-0.1,0);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52).to({_off:false},0).to({scaleY:1,y:-62},5).wait(34));

	// B2
	this.instance_15 = new lib.G_B2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-261.9,-56.2,0.485,0.093);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(49).to({_off:false},0).to({scaleY:1,y:-61.2},5).wait(37));

	// B1
	this.instance_16 = new lib.G_B1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-292.5,-56.3,0.485,0.119,0,0,0,-0.1,0);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(48).to({_off:false},0).to({scaleY:1,y:-60},3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.5,-158.5,328.1,22.8);


(lib.M_AlanBlur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.G_AlanFront("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.M_AlanBlur, new cjs.Rectangle(-563,-162,716.8,333.8), null);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M_Graph();
	this.instance.parent = this;
	this.instance.setTransform(-14,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-131,328.1,22.8);


// stage content:
(lib._337x334 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({y:134.1,alpha:1},12).wait(9));

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
	this.instance_4.setTransform(144.2,167.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92).to({_off:false},0).to({x:144,y:168,alpha:1},15).wait(23));

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
	this.instance_6.setTransform(-190,0,1.024,1.024);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({_off:true},50).wait(65));

	// GreyLayer2
	this.instance_7 = new lib.G_BlackBG("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(354,164.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:0.699},10).to({_off:true},40).wait(65));

	// WomenBG
	this.instance_8 = new lib.G_WomenBG("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(168.1,167.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({alpha:1},10).to({_off:true},50).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 337,
	height: 334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/337x334_atlas_.png", id:"337x334_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;