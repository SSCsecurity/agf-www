(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"70s_337x334_French_atlas_", frames: [[0,0,1451,334],[1453,0,337,334],[1792,0,183,46]]}
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



(lib.BG_337x334 = function() {
	this.spriteSheet = ss["70s_337x334_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Quote_337x334 = function() {
	this.spriteSheet = ss["70s_337x334_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Signature = function() {
	this.spriteSheet = ss["70s_337x334_French_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.G_Signature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Signature();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-23,183,46);


(lib.G_Quote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Quote_337x334();
	this.instance.parent = this;
	this.instance.setTransform(-168.5,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-167,337,334);


(lib.G_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG_337x334();
	this.instance.parent = this;
	this.instance.setTransform(-725.5,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-725.5,-167,1451,334);


// stage content:
(lib._70s_337x334_French = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_83 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(83).call(this.frame_83).wait(1));

	// Layer 3
	this.instance = new lib.G_Signature("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(222.5,196);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},20).wait(5));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgZApQgKgKAAgSQAAgSAKgJQAIgKANAAQALAAAKAKIAAgkIATAAIAABjIgSAAIAAgKQgFAGgFADQgHADgFAAQgMAAgJgKgAgKgEQgEAFgBAKQAAAMAEAFQAEAIAHAAQAHAAAFgGQAEgGABgLQgBgMgEgFQgFgFgHAAQgFAAgFAFg");
	this.shape.setTransform(296.5,228.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AgXAlIAAhHIASAAIAAAKQAFgIADgCQADgCAFAAQAGAAAHAEIgGAQQgFgDgEAAQgEAAgDACQgCACgCAGQgBAGAAARIAAAXg");
	this.shape_1.setTransform(290.3,230);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("AgSAhQgJgEgEgJQgGgJAAgLQAAgKAGgJQAEgJAIgEQAKgFAJAAQAQAAALALQAKAKAAAQQAAAQgKALQgLALgQAAQgJAAgJgFgAgLgQQgGAGAAAKQAAALAGAFQAEAGAHAAQAHAAAGgGQAFgFAAgLQAAgKgFgGQgGgFgHAAQgHAAgEAFg");
	this.shape_2.setTransform(282.8,230);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.8)").s().p("AgNAzIAAg5IgKAAIAAgOIAKAAIAAgGQAAgJACgFQACgEAFgDQAEgDAJAAQAIAAAHADIgCANIgJgBQgEAAgCACQgCACAAAFIAAAGIAPAAIAAAOIgPAAIAAA5g");
	this.shape_3.setTransform(276.4,228.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.8)").s().p("AAOAlIAAglQAAgLgBgDQgBgEgEgCQgCgBgEgBQgEABgEACQgEADgCAEQgBAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAJgMANAAQAHAAAGACQAEADAEADQACADABAFIABANIAAAsg");
	this.shape_4.setTransform(269.6,230);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.8)").s().p("AgaAgQgHgGAAgKQAAgGADgFQADgEAFgCQAFgCAKgCQANgDAFgCIAAgCQAAgGgCgCQgDgCgHAAQgFAAgDACQgDACgCAFIgRgDQADgLAHgFQAIgFANAAQANAAAGADQAGADACAFQADAEAAANIAAAVIAAAPIAEAJIgTAAIgCgFIgBgDQgFAFgFACQgFADgGAAQgLAAgGgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQADgDABgDIABgKIAAgEg");
	this.shape_5.setTransform(261.4,230);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.8)").s().p("AAeAyIAAhOIgUBOIgTAAIgUhOIAABOIgSAAIAAhjIAeAAIARBDIAShDIAeAAIAABjg");
	this.shape_6.setTransform(251.7,228.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.8)").s().p("AAOAlIAAglQAAgLgBgDQgCgEgDgCQgCgBgEgBQgEABgEACQgEADgBAEQgCAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAKgMAMAAQAHAAAFACQAGADACADQADADABAFIABANIAAAsg");
	this.shape_7.setTransform(237.8,230);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.8)").s().p("AgaAgQgHgGAAgKQAAgGADgFQADgEAFgCQAFgCALgCQAMgDAFgCIAAgCQAAgGgCgCQgEgCgGAAQgFAAgDACQgDACgCAFIgRgDQADgLAHgFQAHgFAOAAQANAAAGADQAGADADAFQACAEAAANIAAAVIAAAPIAEAJIgTAAIgCgFIgBgDQgEAFgGACQgFADgGAAQgLAAgGgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQAEgDABgDIAAgKIAAgEg");
	this.shape_8.setTransform(229.6,230);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_9.setTransform(223.8,228.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_10.setTransform(220,228.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.8)").s().p("AAcAyIgIgXIgoAAIgIAXIgVAAIAnhjIAUAAIAoBjgAANAKIgNgkIgNAkIAaAAg");
	this.shape_11.setTransform(212.9,228.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AgSAKIAAgTIAlAAIAAATg");
	this.shape_12.setTransform(202.6,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},83).wait(1));

	// Layer 2
	this.instance_1 = new lib.G_Quote("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.6,132.1,0.87,0.87,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:168.5,y:167,alpha:1},42,cjs.Ease.get(1)).wait(30));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.004)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_13.setTransform(168.5,167);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.016)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_14.setTransform(168.5,167);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.027)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_15.setTransform(168.5,167);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.039)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_16.setTransform(168.5,167);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.051)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_17.setTransform(168.5,167);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.063)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_18.setTransform(168.5,167);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.075)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_19.setTransform(168.5,167);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.086)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_20.setTransform(168.5,167);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.098)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_21.setTransform(168.5,167);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.11)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_22.setTransform(168.5,167);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.122)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_23.setTransform(168.5,167);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.133)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_24.setTransform(168.5,167);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.141)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_25.setTransform(168.5,167);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.153)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_26.setTransform(168.5,167);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.165)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_27.setTransform(168.5,167);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.176)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_28.setTransform(168.5,167);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.188)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_29.setTransform(168.5,167);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.2)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_30.setTransform(168.5,167);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.212)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_31.setTransform(168.5,167);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.224)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_32.setTransform(168.5,167);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.235)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_33.setTransform(168.5,167);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.247)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_34.setTransform(168.5,167);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.259)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_35.setTransform(168.5,167);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.271)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_36.setTransform(168.5,167);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.282)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_37.setTransform(168.5,167);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.294)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_38.setTransform(168.5,167);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.306)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_39.setTransform(168.5,167);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.318)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_40.setTransform(168.5,167);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.329)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_41.setTransform(168.5,167);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.341)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_42.setTransform(168.5,167);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.353)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_43.setTransform(168.5,167);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.365)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_44.setTransform(168.5,167);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.376)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_45.setTransform(168.5,167);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.388)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_46.setTransform(168.5,167);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.4)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_47.setTransform(168.5,167);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.412)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_48.setTransform(168.5,167);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.42)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_49.setTransform(168.5,167);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.431)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_50.setTransform(168.5,167);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.443)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_51.setTransform(168.5,167);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.455)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_52.setTransform(168.5,167);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.467)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_53.setTransform(168.5,167);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.478)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_54.setTransform(168.5,167);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.49)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_55.setTransform(168.5,167);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.502)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_56.setTransform(168.5,167);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.514)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_57.setTransform(168.5,167);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.525)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_58.setTransform(168.5,167);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.537)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_59.setTransform(168.5,167);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.549)").s().p("A6UaGMAAAg0LMA0pAAAMAAAA0Lg");
	this.shape_60.setTransform(168.5,167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},12).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).wait(25));

	// Layer 1
	this.instance_2 = new lib.G_BG("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(725.5,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-388.5},83,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.5,167,1451,334);
// library properties:
lib.properties = {
	width: 337,
	height: 334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/70s_337x334_French_atlas_.png", id:"70s_337x334_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;