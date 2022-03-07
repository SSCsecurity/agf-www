(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"70s_700x326_French_atlas_", frames: [[0,0,1521,326],[0,328,722,326],[724,328,183,46]]}
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



(lib.MainBG = function() {
	this.spriteSheet = ss["70s_700x326_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MainQuote = function() {
	this.spriteSheet = ss["70s_700x326_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Signature = function() {
	this.spriteSheet = ss["70s_700x326_French_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.G_Signature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Signature();
	this.instance.parent = this;
	this.instance.setTransform(-92,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-1,183,46);


(lib.G_MainQuote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MainQuote();
	this.instance.parent = this;
	this.instance.setTransform(-400,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-163,722,326);


(lib.G_MainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MainBG();
	this.instance.parent = this;
	this.instance.setTransform(-1051,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1051,-163,1521,326);


(lib.G_Black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg2rAZeMAAAgy7MBtXAAAMAAAAy7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-163,700.1,326);


// stage content:
(lib._70s_700x326_French = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_125 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(125).call(this.frame_125).wait(1));

	// Signature
	this.instance = new lib.G_Signature("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(533.5,189);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({alpha:1},11).wait(4));

	// AlanText
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgZApQgJgKAAgSQAAgSAJgJQAIgKANAAQAMAAAIAKIAAgkIATAAIAABjIgRAAIAAgKQgEAGgHADQgGADgFAAQgNAAgIgKgAgKgEQgFAFABAKQAAAMACAFQAFAIAIAAQAGAAAFgGQAFgGgBgLQABgMgFgFQgFgFgGAAQgHAAgEAFg");
	this.shape.setTransform(605.7,243.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AgXAlIAAhHIASAAIAAAKQAFgHADgDQADgCAFAAQAGAAAHADIgGARQgFgDgEAAQgEAAgDACQgCADgCAFQgBAGAAARIAAAXg");
	this.shape_1.setTransform(599.5,245.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("AgSAhQgJgEgFgJQgEgJAAgLQAAgKAEgJQAFgJAJgEQAIgFAKAAQAQAAALALQALAKAAAQQAAAQgLALQgLALgQAAQgJAAgJgFgAgMgQQgEAGAAAKQAAALAEAFQAGAGAGAAQAIAAAEgGQAGgFAAgLQAAgKgGgGQgEgFgIAAQgGAAgGAFg");
	this.shape_2.setTransform(592,245.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.8)").s().p("AgMAzIAAg4IgMAAIAAgPIAMAAIAAgGQAAgJACgEQABgFAGgDQAEgDAHAAQAJAAAIADIgDANIgIgBQgFAAgCACQgBACAAAFIAAAGIAOAAIAAAPIgOAAIAAA4g");
	this.shape_3.setTransform(585.6,243.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.8)").s().p("AAOAlIAAglQAAgLgCgDQgBgEgDgBQgCgDgEAAQgEAAgEADQgEADgBAEQgCAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAKgMAMAAQAHAAAFACQAGADACADQADADABAFIABANIAAAsg");
	this.shape_4.setTransform(578.8,245.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.8)").s().p("AgbAgQgGgGAAgKQAAgGADgFQADgEAFgCQAGgCAKgCQAMgDAFgCIAAgCQAAgGgDgCQgDgCgGAAQgFAAgDACQgDACgBAFIgSgDQADgLAHgFQAHgFAOAAQAMAAAHADQAGADADAFQACAEAAANIAAAVIABAPIADAJIgTAAIgBgFIgBgDQgGAFgFACQgFADgGAAQgLAAgHgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQAEgDABgDIAAgKIAAgEg");
	this.shape_5.setTransform(570.6,245.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.8)").s().p("AAeAyIAAhOIgUBOIgTAAIgUhOIAABOIgSAAIAAhjIAeAAIARBDIAShDIAeAAIAABjg");
	this.shape_6.setTransform(560.9,243.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.8)").s().p("AAOAlIAAglQAAgLgCgDQgBgEgCgBQgDgDgEAAQgEAAgEADQgEADgCAEQgBAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAJgMAOAAQAGAAAFACQAFADAEADQACADABAFIABANIAAAsg");
	this.shape_7.setTransform(547,245.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.8)").s().p("AgbAgQgGgGAAgKQAAgGADgFQADgEAFgCQAGgCAJgCQANgDAFgCIAAgCQAAgGgDgCQgCgCgHAAQgFAAgDACQgDACgBAFIgSgDQADgLAHgFQAIgFANAAQANAAAFADQAHADACAFQADAEAAANIAAAVIABAPIADAJIgTAAIgBgFIgBgDQgGAFgFACQgFADgGAAQgLAAgHgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQAEgDAAgDIABgKIAAgEg");
	this.shape_8.setTransform(538.8,245.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_9.setTransform(533,243.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_10.setTransform(529.2,243.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.8)").s().p("AAcAyIgIgXIgoAAIgIAXIgVAAIAnhjIAUAAIAoBjgAANALIgNglIgNAlIAaAAg");
	this.shape_11.setTransform(522.1,243.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AgSAKIAAgTIAlAAIAAATg");
	this.shape_12.setTransform(511.8,245.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},125).wait(1));

	// Quote
	this.instance_1 = new lib.G_MainQuote("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(415.6,125.7,0.722,0.722,0,0,0,0.4,0.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({regX:0,regY:0.1,scaleX:1,scaleY:1,x:385.5,y:163.1,alpha:1},104,cjs.Ease.get(1)).wait(7));

	// Grey
	this.instance_2 = new lib.G_Black("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(350,163);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:0.398},106).wait(1));

	// MainBG
	this.instance_3 = new lib.G_MainBG("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1051,163);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:230},121,cjs.Ease.get(1)).wait(1));

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
		{src:"images/70s_700x326_French_atlas_.png", id:"70s_700x326_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;