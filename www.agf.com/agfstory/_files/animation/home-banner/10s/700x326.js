(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"700x326_atlas_", frames: [[0,0,700,326],[0,328,491,165]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3_ = function() {
	this.spriteSheet = ss["700x326_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.G_Copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4AF4A").s().p("AgfBkQgRgIgMgOQgNgPgHgTQgGgVAAgXQAAgXAGgUQAHgUANgOQAMgOASgIQASgHAVAAQASgBAOAHQAPAFAKALQAKAMAGAPQAFAQAAATIAAATIiKAAQAAASAEAPQAFAPAJAKQAIAKAMAGQANAFAOAAQAOAAALgEQAMgFAQgLIAOAbQgXAOgPAFQgQAFgUABQgUgBgSgHgAAygbQABgMgEgKQgDgIgFgGQgGgHgIgDQgIgDgLAAQgJAAgJADQgJADgHAHQgIAGgFAIQgEAKgEAMIBjAAIAAAAg");
	this.shape.setTransform(162.6,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AC24").s().p("AgxCdQgOgEgLgGQgLgHgGgJQgHgJAAgKQAAgIAHgNQAHgPAUgUQgQgFgHgFQgHgFAAgKQAAgJAKgMQAKgLAUgRQgTgLgKgQQgKgQAAgWQAAgRAGgPQAGgNALgLQALgLAPgFQAPgFASAAQARAAAZAIIAfAAIAlgEIAAAdIgrAAQAGAJADALQADAKAAAMQAAAPgGAPQgGAOgLAKQgMALgOAGQgOAGgPABIgNgBIgGgBIgVASQgGAHAAAEQAAAIARAAIBLAAQAPAAAKACQAKADAHAGQAHAGADAJQADAJAAAMQAAASgJAQQgIAQgPALQgPAMgUAGQgVAIgVAAQgQAAgPgFgAgtBFQgSAaAAAKQAAAMAOAHQANAHAVAAQAPAAAOgEQAOgEALgHQALgIAGgJQAHgKAAgJQAAgLgHgFQgGgGgOAAIhLAAgAgfiDQgIADgGAIQgHAHgDAJQgDAJAAALQAAAKADAKQADAIAHAHQAGAHAIAFQAJAEAJgBQAJAAAIgDQAIgEAGgHQAGgHAEgJQADgKAAgKQAAgLgDgJQgEgJgGgHQgGgIgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(141.1,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55324F").s().p("AAzBoIAAiPQAAgQgDgIQgFgLgQAAQgPAAgRANQgTANgaAdIAAB7IgiAAIAAjLIAiAAIAAArQAQgSAMgKQALgJAOgGQAOgEAPAAQANAAAKADQAKADAGAHQAHAHADALQAEALAAAOIAACXg");
	this.shape_2.setTransform(116.9,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F8DB7").s().p("AAuBkQgJgHgBgOQgOAMgIAEQgJAFgLADQgLAEgLAAQgMAAgKgEQgKgDgIgIQgHgHgEgKQgDgKAAgLQAAgMACgJQADgKAGgGQAGgHAIgGQAJgEALgDIBGgQIAAglQAAgNgKgGQgKgGgSAAQgQAAgIAEQgHAEAAAKIACAHIgjAHQgDgGAAgGQAAgKAFgJQAGgIAJgGQAKgHANgDQAOgCAPAAQAQAAAMADQAMADAJAHQAJAGAEAKQAFAJAAAMIAAB8QABAIAPADIgHAdQgWgCgIgGgAgrAcQgGAMAAAKQAAAMAIAIQAHAGANAAQALAAAKgEQALgFAWgRIAAgpg");
	this.shape_3.setTransform(93.9,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5B148").s().p("AAzCkIAAiQQgBgSgDgFQgEgLgQAAQgQAAgRAMQgSAMgaAeIAAB8IgiAAIAAlHIAiAAIAACmQARgTAKgIQAMgKANgFQAOgFAPAAQAOAAAKAEQAKACAHAIQAGAGADAMQAEAKAAAOIAACYg");
	this.shape_4.setTransform(71.1,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECB02C").s().p("AgYBkQgUgIgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWABQAQAAAOADQARAFARAMIgTAbQgMgKgKgDQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAJgFAPQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgDQALgEANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWgBgTgHg");
	this.shape_5.setTransform(49.8,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6F72").s().p("AgxCdQgOgEgLgGQgLgHgGgJQgHgJAAgKQAAgIAHgNQAHgPAUgUQgQgFgHgFQgHgFAAgKQAAgJAKgMQAKgLAUgRQgTgLgKgQQgKgQAAgWQAAgRAGgPQAGgNALgLQALgLAPgFQAPgFASAAQARAAAZAIIAfAAIAlgEIAAAdIgrAAQAGAJADALQADAKAAAMQAAAPgGAPQgGAOgLAKQgMALgOAGQgOAGgPABIgNgBIgGgBIgVASQgGAHAAAEQAAAIARAAIBLAAQAPAAAKACQAKADAHAGQAHAGADAJQADAJAAAMQAAASgJAQQgIAQgPALQgPAMgUAGQgVAIgVAAQgQAAgPgFgAgtBFQgSAaAAAKQAAAMAOAHQANAHAVAAQAPAAAOgEQAOgEALgHQALgIAGgJQAHgKAAgJQAAgLgHgFQgGgGgOAAIhLAAgAgfiDQgIADgGAIQgHAHgDAJQgDAJAAALQAAAKADAKQADAIAHAHQAGAHAIAFQAJAEAJgBQAJAAAIgDQAIgEAGgHQAGgHAEgJQADgKAAgKQAAgLgDgJQgEgJgGgHQgGgIgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_6.setTransform(17.1,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F72").s().p("AAzBoIAAiPQAAgQgDgIQgFgLgQAAQgQAAgQANQgSANgbAdIAAB7IgiAAIAAjLIAiAAIAAArQARgSALgKQALgJAOgGQAOgEAOAAQAOAAAKADQAKADAHAHQAGAHAEALQADALAAAOIAACXg");
	this.shape_7.setTransform(-7.1,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6F72").s().p("AgRCUIAAjLIAhAAIAADLgAgPhuQgGgHAAgIQAAgJAGgHQAGgGAJgBQAJABAGAGQAHAHAAAJQAAAIgHAHQgGAGgJAAQgJAAgGgGg");
	this.shape_8.setTransform(-24.9,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6F72").s().p("AgYBkQgUgIgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWABQAQAAAOADQARAFARAMIgTAbQgMgKgKgDQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAJgFAPQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgDQALgEANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWgBgTgHg");
	this.shape_9.setTransform(-39.8,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("AAuBkQgJgHgBgOQgOAMgIAEQgJAFgLADQgLAEgLAAQgMAAgKgEQgKgDgIgIQgHgHgEgKQgDgKAAgLQAAgMACgJQADgKAGgGQAGgHAIgGQAJgEALgDIBGgQIAAglQAAgNgKgGQgKgGgSAAQgQAAgIAEQgHAEAAAKIACAHIgjAHQgDgGAAgGQAAgKAFgJQAGgIAJgGQAKgHANgDQAOgCAPAAQAQAAAMADQAMADAJAHQAJAGAEAKQAFAJAAAMIAAB8QABAIAPADIgHAdQgWgCgIgGgAgrAcQgGAMAAAKQAAAMAIAIQAHAGANAAQALAAAKgEQALgFAWgRIAAgpg");
	this.shape_10.setTransform(-61.1,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("Ag3BoIAAjLIAhAAIAAAmQATgYALgJQALgKALABQANAAANANIgQAdQgKgIgEAAQgKAAgMANQgLAOgPAaIAAB4g");
	this.shape_11.setTransform(-77.5,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("AhFCjQgLgDgJgFIAAlBIAiAAIAACFQANgHAKgDQARgEAUAAQATAAAQAHQAQAGALANQALAOAGARQAGASAAAWQAAAagIAWQgIAWgQAPQgQAQgWAHQgVAJgbAAQgTAAgWgEgAgfgMQgMAFgMAHIAACCQANAGAQAAIASgBQAPgEAQgLQARgMAHgPQAHgQAAgaQAAgPgEgNQgEgMgIgJQgIgIgLgFQgLgEgNAAQgOAAgMADg");
	this.shape_12.setTransform(-98,6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("AB3BoIAAiPQAAgSgDgGQgFgLgQAAQgOAAgQALQgQALgXAXIgJAKIAAB7IghAAIAAiPQAAgSgDgGQgFgLgQAAQgQAAgSANQgRANgbAdIAAB7IgiAAIAAjLIAiAAIAAArQAQgSAMgKQALgJAOgGQAPgEAOAAQANgBAKADQAJADAGAGQAGAGAEAKQADAJABAMQASgTAKgKQAMgJAOgGQAPgEAOAAQAOAAAJADQALADAHAHQAGAHADALQAEALAAAOIAACXg");
	this.shape_13.setTransform(-129.7,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AhVCUIAAkoICnAAIAAAgIiCAAIAABjIBrAAIAAAeIhrAAIAABpICFAAIAAAeg");
	this.shape_14.setTransform(-159.6,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.1,-21.3,350.3,57.7);


(lib.G_Copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6F72").s().p("AgfBjQgRgHgMgOQgNgPgHgTQgGgVgBgXQABgXAGgUQAHgUANgOQAMgOASgIQASgHAVgBQASAAAOAHQAPAFAKAMQAKAKAGAQQAFAQAAATIAAAUIiKAAQAAARAEAPQAFAPAJAKQAJAKALAGQANAFAOAAQAOAAALgEQAMgEAQgMIAOAaQgWAPgQAFQgQAFgTABQgUAAgTgJgAAygbQABgMgEgKQgDgIgGgGQgFgHgIgDQgIgDgLAAQgJAAgJADQgJADgHAHQgIAGgFAIQgFAKgDAMIBjAAIAAAAg");
	this.shape.setTransform(220.3,202.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6F72").s().p("AgxCdQgOgEgLgGQgLgHgGgJQgHgJAAgKQAAgIAHgNQAHgPAUgUQgQgFgHgFQgHgGAAgJQAAgJAKgMQAKgLAUgRQgTgKgKgRQgKgQAAgWQAAgRAGgPQAGgNALgLQALgKAPgGQAPgFASgBQARABAZAIIAfAAIAlgDIAAAcIgrAAQAGAJADALQADAKAAAMQAAAQgGAOQgGAOgLAKQgMALgOAGQgOAGgPABIgNgBIgGgBIgVASQgGAHAAAEQAAAIARgBIBLAAQAPAAAKADQAKAEAHAFQAHAGADAJQADAJAAAMQAAASgJAQQgIAPgPAMQgPAMgUAGQgVAIgVAAQgQAAgPgFgAgtBFQgSAaAAAKQAAAMAOAHQANAHAVAAQAPAAAOgEQAOgEALgHQALgIAGgJQAHgJAAgKQAAgLgHgFQgGgGgOAAIhLAAgAgfiDQgIADgGAIQgHAHgDAJQgDAJAAALQAAAKADAKQADAIAHAHQAGAHAIAFQAJADAJAAQAJAAAIgDQAIgEAGgHQAGgHAEgJQADgJAAgLQAAgLgDgJQgEgJgGgHQgGgIgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(198.8,207.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6F72").s().p("AAzBoIAAiPQAAgPgDgJQgFgLgQAAQgQAAgQANQgTANgaAdIAAB7IgiAAIAAjKIAiAAIAAAqQARgSALgKQALgJAOgFQAOgGAPAAQANABAKADQAKADAGAHQAHAHAEALQADALAAAOIAACXg");
	this.shape_2.setTransform(174.6,202.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6F72").s().p("AAuBjQgJgFgBgPQgOAMgIAEQgJAFgLADQgLAEgLAAQgMAAgKgEQgKgDgIgIQgHgHgEgKQgDgJAAgMQAAgMACgJQADgKAGgGQAGgIAIgFQAJgEALgCIBGgRIAAglQAAgNgKgGQgKgGgSAAQgQAAgIAEQgHAEAAAKIACAHIgjAHQgDgGAAgGQAAgKAFgJQAGgIAJgGQAKgGANgEQAOgDAPAAQAQABAMADQAMADAJAHQAJAGAEAKQAFAJAAAMIAAB8QABAIAPADIgHAdQgWgCgIgHgAgrAcQgGALAAAMQAAALAIAIQAHAGANAAQALAAAKgEQALgFAWgQIAAgqg");
	this.shape_3.setTransform(151.6,202.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6F72").s().p("AAzCkIAAiQQAAgSgEgFQgEgLgQAAQgQAAgRAMQgSAMgaAeIAAB8IgiAAIAAlHIAiAAIAACmQARgTAKgIQAMgKANgFQAOgFAPAAQAOAAAJAEQALACAGAIQAHAHADAKQAEALAAAOIAACYg");
	this.shape_4.setTransform(128.8,196.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6F72").s().p("AgYBjQgUgHgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWAAQAQAAAOAEQARAFARAMIgTAbQgMgJgKgEQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAKgFAOQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgEQALgDANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWAAgTgJg");
	this.shape_5.setTransform(107.5,202.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6F72").s().p("AgxCdQgOgEgLgGQgLgHgGgJQgHgJAAgKQAAgIAHgNQAHgPAUgUQgQgFgHgFQgHgGAAgJQAAgJAKgMQAKgLAUgRQgTgKgKgRQgKgQAAgWQAAgRAGgPQAGgNALgLQALgKAPgGQAPgFASgBQARABAZAIIAfAAIAlgDIAAAcIgrAAQAGAJADALQADAKAAAMQAAAQgGAOQgGAOgLAKQgMALgOAGQgOAGgPABIgNgBIgGgBIgVASQgGAHAAAEQAAAIARgBIBLAAQAPAAAKADQAKAEAHAFQAHAGADAJQADAJAAAMQAAASgJAQQgIAPgPAMQgPAMgUAGQgVAIgVAAQgQAAgPgFgAgtBFQgSAaAAAKQAAAMAOAHQANAHAVAAQAPAAAOgEQAOgEALgHQALgIAGgJQAHgJAAgKQAAgLgHgFQgGgGgOAAIhLAAgAgfiDQgIADgGAIQgHAHgDAJQgDAJAAALQAAAKADAKQADAIAHAHQAGAHAIAFQAJADAJAAQAJAAAIgDQAIgEAGgHQAGgHAEgJQADgJAAgLQAAgLgDgJQgEgJgGgHQgGgIgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_6.setTransform(74.8,207.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F72").s().p("AAzBoIAAiPQAAgPgDgJQgFgLgQAAQgQAAgQANQgSANgbAdIAAB7IgiAAIAAjKIAiAAIAAAqQARgSALgKQALgJANgFQAPgGAOAAQAOABAKADQAKADAHAHQAGAHAEALQADALAAAOIAACXg");
	this.shape_7.setTransform(50.6,202.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6F72").s().p("AgRCUIAAjKIAhAAIAADKgAgPhuQgGgHAAgIQAAgJAGgHQAHgGAIgBQAJABAGAGQAHAHAAAJQAAAIgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_8.setTransform(32.8,197.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6F72").s().p("AgYBjQgUgHgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWAAQAQAAAOAEQARAFARAMIgTAbQgMgJgKgEQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAKgFAOQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgEQALgDANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWAAgTgJg");
	this.shape_9.setTransform(17.9,202.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("AAuBjQgJgFgBgPQgOAMgIAEQgJAFgLADQgLAEgLAAQgMAAgKgEQgKgDgIgIQgHgHgEgKQgDgJAAgMQAAgMACgJQADgKAGgGQAGgIAIgFQAJgEALgCIBGgRIAAglQAAgNgKgGQgKgGgSAAQgQAAgIAEQgHAEAAAKIACAHIgjAHQgDgGAAgGQAAgKAFgJQAGgIAJgGQAKgGANgEQAOgDAPAAQAQABAMADQAMADAJAHQAJAGAEAKQAFAJAAAMIAAB8QABAIAPADIgHAdQgWgCgIgHgAgrAcQgGALAAAMQAAALAIAIQAHAGANAAQALAAAKgEQALgFAWgQIAAgqg");
	this.shape_10.setTransform(-3.4,202.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("Ag3BoIAAjKIAhAAIAAAlQATgYALgKQALgJALAAQANAAANAOIgQAdQgKgJgEABQgKAAgMANQgLANgPAbIAAB4g");
	this.shape_11.setTransform(-19.8,202.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("AhFCjQgLgDgJgFIAAlBIAiAAIAACFQANgHAKgDQARgEAUAAQATAAAQAHQAQAGALANQALAOAGARQAGASAAAWQAAAagIAWQgIAWgQAPQgQAPgWAIQgVAJgbAAQgTAAgWgEgAgfgMQgMAFgMAHIAACCQANAGAQAAIASgBQAPgDAQgMQARgMAHgQQAHgPAAgaQAAgPgEgNQgEgMgIgKQgIgHgLgEQgLgGgNAAQgOAAgMAEg");
	this.shape_12.setTransform(-40.3,196.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("AB3BoIAAiPQAAgSgDgGQgFgLgQAAQgOAAgQALQgQALgXAXIgJAKIAAB7IghAAIAAiPQAAgSgDgGQgFgLgQAAQgPAAgTANQgRANgbAdIAAB7IgiAAIAAjKIAiAAIAAAqQAQgSAMgKQALgJAOgFQAPgGAOAAQANABAKACQAJADAGAGQAGAGAEAJQAEAKAAAMQASgTAKgKQAMgJAOgFQAPgGAOAAQAOABAJADQALADAGAHQAHAHADALQAEALAAAOIAACXg");
	this.shape_13.setTransform(-72,202.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AhVCUIAAkoICnAAIAAAgIiCAAIAABjIBrAAIAAAdIhrAAIAABqICFAAIAAAeg");
	this.shape_14.setTransform(-101.9,197.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,169.1,350.3,57.7);


(lib.G_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_();
	this.instance.parent = this;
	this.instance.setTransform(-250,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-130,491,165);


(lib.G_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-350,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-163,700,326);


// stage content:
(lib._700x326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_106 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(106).call(this.frame_106).wait(1));

	// Copy2
	this.instance = new lib.G_Copy2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350,218.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).to({alpha:1},19).wait(2));

	// Copy1
	this.instance_1 = new lib.G_Copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(292.3,28.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},13).to({_off:true},34).wait(1));

	// 1
	this.instance_2 = new lib.G_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(350,163);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9).wait(25).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(62));

	// 3
	this.instance_3 = new lib.G_3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.9,212.6,0.945,0.575,0,33.6,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({alpha:1},9).wait(30).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:0,x:350,y:163},21,cjs.Ease.get(1)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,163,700,326);
// library properties:
lib.properties = {
	width: 700,
	height: 326,
	fps: 24,
	color: "#F7F7F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/700x326_atlas_.png", id:"700x326_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;