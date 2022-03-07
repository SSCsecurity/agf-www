(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"10s_700x326_French_atlas_", frames: [[0,0,700,326],[0,328,491,165]]}
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
	this.spriteSheet = ss["10s_700x326_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3_ = function() {
	this.spriteSheet = ss["10s_700x326_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.G_Copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4AF4A").s().p("AgQB5QgLgMAAgUIAAiHIgiAAIAAgUIAigJIAAg6IAgAAIAAA6IA3AAIAAAdIg3AAIAABzIABAJIABANQAAAKALAAQALgBATgOIAOAXQgSAOgKAGQgLAFgMABQgRgBgKgNg");
	this.shape.setTransform(224.2,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AC24").s().p("AAzBoIAAiPQAAgQgDgIQgFgLgQAAQgPAAgRANQgTANgaAdIAAB7IgiAAIAAjLIAiAAIAAArQAQgSAMgKQALgJAOgGQAOgEAPAAQANAAAKADQAKADAGAHQAHAHADALQAEALAAAOIAACXg");
	this.shape_1.setTransform(205.1,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#553150").s().p("AgfBkQgRgIgMgOQgNgPgHgTQgGgVAAgXQAAgXAGgUQAHgUANgOQAMgOASgIQASgHAVAAQASgBAOAHQAPAFAKALQAKAMAGAPQAFAQAAATIAAATIiKAAQAAASAEAPQAFAPAJAKQAIAKAMAGQANAFAOAAQAOAAAMgEQALgFAQgLIAOAbQgXAOgPAFQgQAFgUABQgUgBgSgHgAAygbQABgMgEgKQgDgIgFgGQgGgHgIgDQgIgDgLAAQgJAAgJADQgJADgHAHQgIAGgFAIQgEAKgEAMIBjAAIAAAAg");
	this.shape_2.setTransform(182.4,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F8DB7").s().p("AB3BoIAAiPQAAgSgDgGQgFgLgQAAQgOAAgQALQgQALgXAXIgJAKIAAB7IghAAIAAiPQAAgSgDgGQgFgLgQAAQgQAAgRANQgSANgbAdIAAB7IgiAAIAAjLIAiAAIAAArQARgSALgKQALgJAPgGQAOgEAOAAQANgBAKADQAJADAFAGQAHAGAEAKQADAJABAMQARgTALgKQAMgJAPgGQAOgEAOAAQAOAAAKADQAKADAHAHQAGAHAEALQADALAAAOIAACXg");
	this.shape_3.setTransform(152.7,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4AF4A").s().p("AgfBkQgRgIgNgOQgMgPgHgTQgGgVgBgXQABgXAGgUQAHgUAMgOQAOgOARgIQASgHAVAAQARgBAPAHQAOAFALALQAKAMAGAPQAFAQABATIAAATIiLAAQAAASAFAPQAEAPAIAKQAJAKAMAGQANAFAOAAQAOAAALgEQAMgFAQgLIAOAbQgWAOgQAFQgQAFgTABQgUgBgTgHgAAygbQAAgMgDgKQgDgIgGgGQgFgHgIgDQgIgDgKAAQgKAAgJADQgJADgHAHQgHAGgGAIQgEAKgEAMIBjAAIAAAAg");
	this.shape_4.setTransform(123.2,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AC24").s().p("AgxCdQgOgEgLgGQgLgHgGgJQgHgJAAgKQAAgIAHgNQAHgPAUgUQgQgFgHgFQgHgFAAgKQAAgJAKgMQAKgLAUgRQgTgLgKgQQgKgQAAgWQAAgRAGgPQAGgNALgLQALgLAPgFQAPgFASAAQARAAAZAIIAfAAIAlgEIAAAdIgrAAQAGAJADALQADAKAAAMQAAAPgGAPQgGAOgLAKQgMALgOAGQgOAGgPABIgNgBIgGgBIgVASQgGAHAAAEQAAAIARAAIBLAAQAPAAAKACQAKADAHAGQAHAGADAJQADAJAAAMQAAASgJAQQgIAQgPALQgPAMgUAGQgVAIgVAAQgQAAgPgFgAgtBFQgSAaAAAKQAAAMAOAHQANAHAVAAQAPAAAOgEQAOgEALgHQALgIAGgJQAHgKAAgJQAAgLgHgFQgGgGgOAAIhLAAgAgfiDQgIADgGAIQgHAHgDAJQgDAJAAALQAAAKADAKQADAIAHAHQAGAHAIAFQAJAEAJgBQAJAAAIgDQAIgEAGgHQAGgHAEgJQADgKAAgKQAAgLgDgJQgEgJgGgHQgGgIgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_5.setTransform(101.7,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#55324F").s().p("AAzBoIAAiPQAAgQgDgIQgFgLgQAAQgQAAgQANQgSANgbAdIAAB7IgiAAIAAjLIAiAAIAAArQARgSALgKQALgJAOgGQAOgEAOAAQAOAAAKADQAKADAHAHQAGAHAEALQADALAAAOIAACXg");
	this.shape_6.setTransform(77.5,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F8DB7").s().p("AAuBkQgJgHgBgOQgOAMgIAEQgJAFgLADQgLAEgLAAQgMAAgKgEQgKgDgIgIQgHgHgEgKQgDgKAAgLQAAgMACgJQADgKAGgGQAGgHAIgGQAJgEALgDIBGgQIAAglQAAgNgKgGQgKgGgSAAQgQAAgIAEQgHAEAAAKIACAHIgjAHQgDgGAAgGQAAgKAFgJQAGgIAJgGQAKgHANgDQAOgCAPAAQAQAAAMADQAMADAJAHQAJAGAEAKQAFAJAAAMIAAB8QABAIAPADIgHAdQgWgCgIgGgAgrAcQgGAMAAAKQAAAMAIAIQAHAGANAAQALAAAKgEQALgFAWgRIAAgpg");
	this.shape_7.setTransform(54.5,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A5B148").s().p("AAzCkIAAiQQAAgSgEgFQgEgLgQAAQgQAAgRAMQgSAMgaAeIAAB8IgiAAIAAlHIAiAAIAACmQARgTAKgIQAMgKANgFQAOgFAPAAQAOAAAJAEQALACAGAIQAHAGADAMQAEAKAAAOIAACYg");
	this.shape_8.setTransform(31.7,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECB02C").s().p("AgYBkQgUgIgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWABQAQAAAOADQARAFARAMIgTAbQgMgKgKgDQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAJgFAPQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgDQALgEANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWgBgTgHg");
	this.shape_9.setTransform(10.4,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("AgfBkQgRgIgMgOQgNgPgHgTQgGgVAAgXQAAgXAGgUQAHgUANgOQAMgOASgIQASgHAVAAQASgBAOAHQAPAFAKALQAKAMAGAPQAFAQAAATIAAATIiKAAQAAASAEAPQAFAPAJAKQAIAKAMAGQANAFAOAAQAOAAALgEQAMgFAQgLIAOAbQgXAOgPAFQgQAFgUABQgUgBgSgHgAAygbQABgMgEgKQgDgIgFgGQgGgHgIgDQgIgDgLAAQgJAAgJADQgJADgHAHQgIAGgFAIQgEAKgEAMIBjAAIAAAAg");
	this.shape_10.setTransform(-21.9,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("AgQCkIAAlHIAhAAIAAFHg");
	this.shape_11.setTransform(-38,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("Ag4BoIAAjLIAiAAIAAAmQATgYAKgJQAMgKAMABQAMAAAOANIgRAdQgJgIgGAAQgJAAgMANQgLAOgPAaIAAB4g");
	this.shape_12.setTransform(-60.3,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("AgQCUIAAjLIAhAAIAADLgAgPhuQgGgHAAgIQAAgJAGgHQAHgGAIgBQAJABAHAGQAGAHAAAJQAAAIgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_13.setTransform(-75.3,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AgQCkIAAlHIAhAAIAAFHg");
	this.shape_14.setTransform(-86.2,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6F72").s().p("AgQCkIAAlHIAhAAIAAFHg");
	this.shape_15.setTransform(-97,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6F72").s().p("AgQCUIAAjLIAgAAIAADLgAgPhuQgGgHAAgIQAAgJAGgHQAGgGAJgBQAJABAGAGQAHAHAAAJQAAAIgHAHQgGAGgJAAQgJAAgGgGg");
	this.shape_16.setTransform(-107.9,7.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6F72").s().p("AgfBkQgRgIgNgOQgMgPgHgTQgGgVgBgXQABgXAGgUQAHgUAMgOQAOgOARgIQASgHAVAAQARgBAPAHQAOAFALALQAKAMAGAPQAFAQABATIAAATIiLAAQAAASAFAPQAEAPAIAKQAJAKAMAGQANAFAOAAQAOAAALgEQAMgFAQgLIAOAbQgWAOgQAFQgQAFgTABQgUgBgTgHgAAygbQAAgMgDgKQgDgIgGgGQgFgHgIgDQgIgDgKAAQgKAAgJADQgJADgHAHQgHAGgGAIQgEAKgEAMIBjAAIAAAAg");
	this.shape_17.setTransform(-123.9,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6F72").s().p("Ag1BlQgKgDgHgIQgHgHgDgKQgEgLAAgOIAAiYIAiAAIAACPQAAATAGAJQAFAIANAAQAIAAAKgEIATgMQAOgJAageIAAh8IAiAAIAADLIgiAAIAAgrIgTAWQgJAJgKAGQgKAGgKADQgLADgLAAQgOAAgKgEg");
	this.shape_18.setTransform(-146.7,12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E6F72").s().p("AgYBkQgUgIgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWABQAQAAAOADQARAFARAMIgTAbQgMgKgKgDQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAJgFAPQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgDQALgEANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWgBgTgHg");
	this.shape_19.setTransform(-168.2,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6F72").s().p("AgYBkQgUgIgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWABQAQAAAOADQARAFARAMIgTAbQgMgKgKgDQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAJgFAPQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgDQALgEANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWgBgTgHg");
	this.shape_20.setTransform(-188.1,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6F72").s().p("ABbCZIgfhYIh3AAIgeBYIgoAAIBvkxIAmAAIBuExgAAwAfIgwiHIgvCHIBfAAg");
	this.shape_21.setTransform(-212.2,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.2,-21.3,472.1,57.7);


(lib.G_Copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6F72").s().p("AgQB5QgLgMAAgUIAAiHIgiAAIAAgUIAigIIAAg7IAgAAIAAA7IA3AAIAAAcIg3AAIAABzIABAJIABANQAAAKALgBQALAAATgOIAOAWQgSAPgKAGQgLAFgMABQgRgBgKgNg");
	this.shape.setTransform(281.9,199.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6F72").s().p("AAzBoIAAiPQAAgPgDgJQgFgLgQAAQgQAAgQANQgTANgaAdIAAB7IgiAAIAAjKIAiAAIAAAqQARgSALgKQALgJAOgFQAOgGAOAAQAOABAKADQAKADAGAHQAHAHAEALQADALAAAOIAACXg");
	this.shape_1.setTransform(262.8,202.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6F72").s().p("AgfBjQgRgHgMgOQgNgPgHgTQgGgVAAgXQAAgXAGgUQAHgUANgOQAMgOASgIQASgHAVgBQASAAAOAHQAPAFAKAMQAKAKAGAQQAFAQAAATIAAAUIiKAAQAAARAEAPQAFAPAJAKQAJAKALAGQANAFAOAAQAOAAALgEQAMgEAQgMIAOAaQgWAPgQAFQgQAFgTABQgUAAgTgJgAAygbQABgMgEgKQgDgIgGgGQgFgHgIgDQgIgDgLAAQgJAAgJADQgJADgHAHQgIAGgFAIQgFAKgDAMIBjAAIAAAAg");
	this.shape_2.setTransform(240.1,202.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6F72").s().p("AB3BoIAAiPQAAgSgDgGQgFgLgQAAQgOAAgQALQgQALgXAXIgJAKIAAB7IghAAIAAiPQAAgSgDgGQgFgLgQAAQgQAAgSANQgRANgbAdIAAB7IgiAAIAAjKIAiAAIAAAqQARgSALgKQALgJAOgFQAPgGAOAAQANABAKACQAJADAFAGQAHAGAEAJQADAKABAMQARgTALgKQAMgJAOgFQAPgGAOAAQAOABAKADQAKADAHAHQAGAHAEALQADALAAAOIAACXg");
	this.shape_3.setTransform(210.4,202.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6F72").s().p("AgfBjQgRgHgNgOQgMgPgHgTQgGgVgBgXQABgXAGgUQAHgUAMgOQAOgOARgIQASgHAVgBQARAAAPAHQAOAFALAMQALAKAFAQQAFAQABATIAAAUIiLAAQAAARAFAPQAEAPAIAKQAKAKALAGQANAFAPAAQANAAALgEQAMgEAQgMIAOAaQgWAPgQAFQgQAFgTABQgUAAgTgJgAAzgbQAAgMgEgKQgDgIgGgGQgFgHgIgDQgIgDgKAAQgKAAgJADQgJADgHAHQgHAGgGAIQgEAKgEAMIBkAAIAAAAg");
	this.shape_4.setTransform(180.9,202.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6F72").s().p("AgxCdQgOgEgLgGQgLgHgGgJQgHgJAAgKQAAgIAHgNQAHgPAUgUQgQgFgHgFQgHgGAAgJQAAgJAKgMQAKgLAUgRQgTgKgKgRQgKgQAAgWQAAgRAGgPQAGgNALgLQALgKAPgGQAPgFASgBQARABAZAIIAfAAIAlgDIAAAcIgrAAQAGAJADALQADAKAAAMQAAAQgGAOQgGAOgLAKQgMALgOAGQgOAGgPABIgNgBIgGgBIgVASQgGAHAAAEQAAAIARgBIBLAAQAPAAAKADQAKAEAHAFQAHAGADAJQADAJAAAMQAAASgJAQQgIAPgPAMQgPAMgUAGQgVAIgVAAQgQAAgPgFgAgtBFQgSAaAAAKQAAAMAOAHQANAHAVAAQAPAAAOgEQAOgEALgHQALgIAGgJQAHgJAAgKQAAgLgHgFQgGgGgOAAIhLAAgAgfiDQgIADgGAIQgHAHgDAJQgDAJAAALQAAAKADAKQADAIAHAHQAGAHAIAFQAJADAJAAQAJAAAIgDQAIgEAGgHQAGgHAEgJQADgJAAgLQAAgLgDgJQgEgJgGgHQgGgIgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_5.setTransform(159.4,207.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6F72").s().p("AAzBoIAAiPQAAgPgDgJQgFgLgQAAQgQAAgQANQgSANgbAdIAAB7IgiAAIAAjKIAiAAIAAAqQARgSALgKQALgJANgFQAPgGAOAAQAOABAKADQAKADAHAHQAGAHAEALQADALAAAOIAACXg");
	this.shape_6.setTransform(135.2,202.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F72").s().p("AAuBjQgJgFgBgPQgOAMgIAEQgJAFgLADQgLAEgLAAQgMAAgKgEQgKgDgIgIQgHgHgEgKQgDgJAAgMQAAgMACgJQADgKAGgGQAGgIAIgFQAJgEALgCIBGgRIAAglQAAgNgKgGQgKgGgSAAQgQAAgIAEQgHAEAAAKIACAHIgjAHQgDgGAAgGQAAgKAFgJQAGgIAJgGQAKgGANgEQAOgDAPAAQAQABAMADQAMADAJAHQAJAGAEAKQAFAJAAAMIAAB8QABAIAPADIgHAdQgWgCgIgHgAgrAcQgGALAAAMQAAALAIAIQAHAGANAAQALAAAKgEQALgFAWgQIAAgqg");
	this.shape_7.setTransform(112.2,202.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6F72").s().p("AAzCkIAAiQQAAgSgDgFQgGgLgPAAQgQAAgRAMQgSAMgaAeIAAB8IgiAAIAAlHIAiAAIAACmQARgTAKgIQAMgKAOgFQAOgFAOAAQAOAAAJAEQALACAGAIQAHAHADAKQAEALAAAOIAACYg");
	this.shape_8.setTransform(89.4,196.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6F72").s().p("AgYBjQgUgHgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWAAQAQAAAOAEQARAFARAMIgTAbQgMgJgKgEQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAKgFAOQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgEQALgDANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWAAgTgJg");
	this.shape_9.setTransform(68.1,202.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("AgfBjQgRgHgMgOQgNgPgHgTQgGgVgBgXQABgXAGgUQAHgUANgOQAMgOASgIQASgHAVgBQASAAAOAHQAPAFAKAMQAKAKAGAQQAFAQAAATIAAAUIiKAAQAAARAEAPQAFAPAJAKQAJAKALAGQANAFAOAAQAOAAALgEQAMgEAQgMIAOAaQgWAPgQAFQgQAFgTABQgUAAgTgJgAAygbQABgMgEgKQgDgIgGgGQgFgHgIgDQgIgDgLAAQgJAAgJADQgJADgHAHQgIAGgFAIQgFAKgDAMIBjAAIAAAAg");
	this.shape_10.setTransform(35.8,202.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("AgQCkIAAlHIAhAAIAAFHg");
	this.shape_11.setTransform(19.7,196.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("Ag4BoIAAjKIAiAAIAAAlQATgYAKgKQAMgJALAAQANAAAOAOIgRAdQgJgJgGABQgJAAgMANQgLANgPAbIAAB4g");
	this.shape_12.setTransform(-2.6,202.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("AgRCUIAAjKIAiAAIAADKgAgPhuQgGgHAAgIQAAgJAGgHQAHgGAIgBQAJABAHAGQAGAHAAAJQAAAIgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_13.setTransform(-17.6,197.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AgQCkIAAlHIAhAAIAAFHg");
	this.shape_14.setTransform(-28.5,196.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6F72").s().p("AgQCkIAAlHIAhAAIAAFHg");
	this.shape_15.setTransform(-39.3,196.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6F72").s().p("AgQCUIAAjKIAhAAIAADKgAgPhuQgGgHAAgIQAAgJAGgHQAHgGAIgBQAJABAGAGQAHAHAAAJQAAAIgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_16.setTransform(-50.2,197.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6F72").s().p("AgfBjQgRgHgNgOQgMgPgHgTQgGgVgBgXQABgXAGgUQAHgUAMgOQAOgOARgIQASgHAVgBQARAAAPAHQAOAFALAMQALAKAEAQQAGAQABATIAAAUIiLAAQAAARAFAPQAEAPAIAKQAKAKALAGQANAFAPAAQANAAALgEQAMgEAQgMIAOAaQgWAPgQAFQgQAFgTABQgUAAgTgJgAAzgbQAAgMgEgKQgDgIgGgGQgFgHgIgDQgIgDgKAAQgKAAgJADQgJADgHAHQgHAGgGAIQgEAKgEAMIBkAAIAAAAg");
	this.shape_17.setTransform(-66.2,202.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6F72").s().p("Ag1BlQgKgDgHgIQgHgHgDgKQgEgLAAgOIAAiYIAiAAIAACPQAAATAGAJQAFAIANAAQAIAAAKgEIATgMQAOgJAageIAAh8IAiAAIAADLIgiAAIAAgrIgTAWQgJAJgKAGQgKAGgKADQgLADgLAAQgOAAgKgEg");
	this.shape_18.setTransform(-89,202.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E6F72").s().p("AgYBjQgUgHgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWAAQAQAAAOAEQARAFARAMIgTAbQgMgJgKgEQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAKgFAOQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgEQALgDANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWAAgTgJg");
	this.shape_19.setTransform(-110.5,202.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6F72").s().p("AgYBjQgUgHgNgOQgOgOgIgTQgHgUAAgXQAAgXAHgUQAIgUAOgPQAPgPATgHQAUgJAWAAQAQAAAOAEQARAFARAMIgTAbQgMgJgKgEQgKgEgOAAQgPAAgMAGQgNAFgJALQgJAKgFAOQgEAOAAAQQAAASAFAOQAEAOAKAKQAJAJANAGQAMAFARAAQAOAAALgEQALgDANgKIARAaIgNAIQgNAHgOADQgPAFgPAAQgWAAgTgJg");
	this.shape_20.setTransform(-130.4,202.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6F72").s().p("ABbCZIgfhYIh3AAIgeBYIgoAAIBvkxIAmAAIBuExgAAwAfIgwiHIgvCHIBfAAg");
	this.shape_21.setTransform(-154.5,197.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,169.1,472.1,57.7);


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
(lib._10s_700x326_French = function(mode,startPosition,loop) {
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
		{src:"images/10s_700x326_French_atlas_.png", id:"10s_700x326_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;