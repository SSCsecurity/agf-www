(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"337x326_atlas_NP_", frames: [[0,0,2722,2566],[0,2568,700,549]]}
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



(lib.Tiger_Cropped = function() {
	this.spriteSheet = ss["337x326_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TigerLo = function() {
	this.spriteSheet = ss["337x326_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.G_TigerLo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TigerLo();
	this.instance.parent = this;
	this.instance.setTransform(-350,-274.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-274.5,700,549);


(lib.G_Tiger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tiger_Cropped();
	this.instance.parent = this;
	this.instance.setTransform(-1023,-959,0.731,0.731);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1023,-959,1990.9,1876.8);


// stage content:
(lib._337x326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_224 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(1));

	// TigerMain
	this.instance = new lib.G_Tiger("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(517.4,338.7,1.025,1.025);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},14).wait(22).to({startPosition:0},0).to({x:-466,y:-370},40,cjs.Ease.get(1)).wait(20).to({startPosition:0},0).to({x:732,y:733},45,cjs.Ease.get(1)).wait(20).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.49,scaleY:0.49,x:390.6,y:408.9},34).to({regX:1.6,regY:1.1,scaleX:0.1,scaleY:0.1,x:139.5,y:170.6,alpha:0},25).wait(1));

	// Layer 1
	this.instance_1 = new lib.G_TigerLo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(335.2,326.6,3.379,3.379,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).to({regX:0,regY:0,scaleX:0.62,scaleY:0.62,x:124.6,y:164.8},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 337,
	height: 334,
	fps: 24,
	color: "#F7F7F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/337x326_atlas_NP_.jpg", id:"337x326_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;