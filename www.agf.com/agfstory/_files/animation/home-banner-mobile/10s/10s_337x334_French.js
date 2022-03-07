(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"10s_337x334_French_atlas_", frames: [[0,0,700,326],[0,328,491,165]]}
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
	this.spriteSheet = ss["10s_337x334_French_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3_ = function() {
	this.spriteSheet = ss["10s_337x334_French_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.G_Copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4AF4A").s().p("AgYCwQgQgSAAgdIAAjEIgxAAIAAgcIAxgNIAAhVIAwAAIAABVIBOAAIAAApIhOAAIAACnIABANIABASQABAOAQAAQAPAAAcgVIAUAhQgaAWgQAHQgPAIgRAAQgZAAgPgSg");
	this.shape.setTransform(323.5,204.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AC24").s().p("ABKCXIAAjPQAAgXgFgMQgHgPgXgBQgWAAgZASQgaATgnAqIAACzIgxAAIAAkmIAxAAIAAA+QAYgbAQgNQARgOATgIQAVgHAWAAQASAAAPAFQAPAFAJAKQAKAKAFAQQAEAPAAAVIAADbg");
	this.shape_1.setTransform(296,207.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#553150").s().p("AgsCQQgZgLgTgVQgSgUgJgdQgLgdABgiQgBgiALgdQAJgcASgVQATgUAagLQAagLAdAAQAaAAAVAIQAVAJAPAQQAPAQAIAXQAJAWAAAcIAAAcIjJAAQAAAaAGAWQAHAVAMAPQANAPASAHQASAIAVAAQATAAARgGQAQgGAZgRIATAmQggAVgXAIQgXAHgdAAQgcAAgagLgABJgoQAAgRgFgNQgEgNgIgJQgIgJgMgFQgMgEgOAAQgPAAgNAEQgNAFgKAJQgLAJgHANQgHANgEARICPAAIAAAAg");
	this.shape_2.setTransform(263.1,208.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F8DB7").s().p("ACsCXIAAjPQAAgagFgJQgHgPgXgBQgUAAgXAPQgXAQghAiIgOAOIAACzIgvAAIAAjPQAAgagFgJQgHgPgXgBQgXAAgaASQgaATgmAqIAACzIgxAAIAAkmIAxAAIAAA+QAXgbARgNQAQgOAVgIQAVgHAVAAQASAAAOAEQAOAEAIAJQAKAJAFANQAFANABASQAZgcAQgNQARgOAVgIQAVgHAUAAQAUAAAOAFQAPAFAJAKQAKAKAFAQQAFAPAAAVIAADbg");
	this.shape_3.setTransform(220.3,207.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4AF4A").s().p("AgsCQQgZgLgTgVQgSgUgJgdQgLgdABgiQgBgiALgdQAJgcATgVQASgUAagLQAagLAdAAQAaAAAVAIQAVAJAPAQQAPAQAIAXQAJAWAAAcIAAAcIjJAAQAAAaAGAWQAHAVAMAPQANAPASAHQASAIAVAAQATAAARgGQAQgGAZgRIATAmQggAVgXAIQgXAHgdAAQgcAAgagLgABJgoQAAgRgFgNQgEgNgIgJQgIgJgMgFQgMgEgOAAQgPAAgNAEQgNAFgKAJQgLAJgHANQgHANgEARICPAAIAAAAg");
	this.shape_4.setTransform(177.6,208.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7AC24").s().p("AhGDjQgVgFgQgKQgQgKgJgMQgKgOAAgOQAAgMAKgSQAKgVAdgeQgXgGgKgIQgJgIAAgNQAAgOANgSQAOgQAegYQgbgQgPgXQgOgYAAgfQAAgYAIgVQAJgVAQgPQAQgPAVgIQAWgIAaAAQAZAAAkAMIAsAAIA2gFIAAApIg+AAQAJANAEAPQAFAPAAASQAAAWgKAVQgIAUgQAPQgQAQgVAJQgVAJgWAAIgSgCIgJAAIgeAaQgJAKAAAHQAAAKAZAAIBtAAQAUAAAPAEQAPAEAKAJQAKAIAEANQAFANAAASQAAAZgNAYQgMAWgWARQgWARgcAKQgeAJgfAAQgXAAgVgGgAhCBkQgZAmAAAOQAAAQAUALQATALAeAAQAWAAAUgGQAUgGAQgLQARgKAJgOQAJgOAAgOQAAgPgJgIQgKgHgTAAIhtAAgAgti+QgMAGgJAKQgJAKgFANQgFAOAAAPQAAAPAFAOQAFANAJAKQAKAKALAGQAMAFAOAAQANAAAMgFQALgGAKgKQAJgKAEgNQAFgOAAgPQAAgPgFgOQgFgNgJgKQgJgKgMgGQgLgGgOAAQgNAAgMAGg");
	this.shape_5.setTransform(146.6,216);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#55324F").s().p("ABKCXIAAjPQAAgXgFgMQgHgPgXgBQgXAAgZASQgaATgmAqIAACzIgxAAIAAkmIAxAAIAAA+QAYgbAQgNQARgOATgIQAWgHAUAAQAUAAAOAFQAPAFAKAKQAJAKAEAQQAFAPABAVIAADbg");
	this.shape_6.setTransform(111.7,207.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F8DB7").s().p("ABDCQQgNgJgCgVQgUASgMAGQgNAHgQAFQgQAFgQAAQgRAAgPgGQgPgFgKgLQgKgKgGgOQgGgOABgSQgBgQAFgNQAEgOAIgKQAJgKAMgIQAMgGAQgEIBlgYIAAg1QAAgSgNgJQgPgKgbAAQgWAAgMAHQgKAGgBANIADALIgxAKQgFgIgBgKQABgOAHgNQAIgLAOgJQAOgJATgFQAUgEAWAAQAWAAATAFQARAEANAKQAMAKAHANQAHAOAAARIAAC0QACALAWAEIgMApQgfgCgLgJgAg+ApQgJAQAAAQQAAARALALQALAKASAAQARAAAOgHQAQgIAfgXIAAg9g");
	this.shape_7.setTransform(78.5,208.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A5B148").s().p("ABJDtIAAjQQAAgagFgIQgHgPgWgBQgXAAgZASQgaASgmAqIAAC0IgwAAIAAnZIAwAAIAADwQAZgbAPgMQAQgOAVgIQAUgHAVAAQATAAAPAFQAPAFAJAKQAKAKAFAQQAEAPAAAUIAADcg");
	this.shape_8.setTransform(45.5,199.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECB02C").s().p("AgkCQQgbgLgUgUQgUgUgLgcQgLgcAAgiQAAghAMgeQAKgdAVgVQAUgVAcgMQAegLAgAAQAWAAAVAFQAYAHAZARIgbAoQgSgOgPgGQgOgFgUAAQgWAAgRAIQgTAIgNAPQgNAPgHAUQgGAVgBAXQAAAaAHAUQAIAUANAPQAOAOASAIQATAHAXAAQAWAAAPgFQAQgGASgOIAZAnIgUALQgSAKgUAFQgVAFgWAAQggAAgdgLg");
	this.shape_9.setTransform(14.7,208.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("AgsCQQgagLgSgVQgSgUgKgdQgKgdABgiQgBgiAKgdQAKgcASgVQATgUAZgLQAbgLAdAAQAaAAAWAIQAUAJAQAQQAOAQAIAXQAIAWAAAcIAAAcIjIAAQAAAaAGAWQAHAVAMAPQANAPASAHQASAIAVAAQAUAAAQgGQARgGAYgRIATAmQggAVgXAIQgXAHgdAAQgcAAgagLgABJgoQAAgRgEgNQgFgNgIgJQgIgJgMgFQgLgEgQAAQgOAAgNAEQgNAFgKAJQgLAJgHANQgHANgFARICQAAIAAAAg");
	this.shape_10.setTransform(-32,208.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("AgXDtIAAnZIAvAAIAAHZg");
	this.shape_11.setTransform(-55.2,199.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("AhQCXIAAkmIAwAAIAAA2QAbgjAPgNQARgNARAAQASAAATAUIgYApQgNgMgIAAQgNAAgRATQgRAUgVAnIAACug");
	this.shape_12.setTransform(-87.3,207.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("AgYDXIAAkmIAwAAIAAEmgAgWifQgJgJAAgNQAAgOAJgJQAKgJAMAAQANAAAJAJQAKAJAAAOQAAANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_13.setTransform(-109.1,201.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AgXDtIAAnZIAvAAIAAHZg");
	this.shape_14.setTransform(-124.9,199.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6F72").s().p("AgXDtIAAnZIAvAAIAAHZg");
	this.shape_15.setTransform(-140.4,199.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6F72").s().p("AgYDXIAAkmIAwAAIAAEmgAgWifQgJgJAAgNQAAgOAJgJQAKgJAMAAQANAAAJAJQAKAJAAAOQAAANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_16.setTransform(-156.1,201.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6F72").s().p("AgtCQQgZgLgSgVQgSgUgKgdQgJgdgBgiQABgiAJgdQAKgcATgVQASgUAZgLQAagLAfAAQAZAAAVAIQAWAJAOAQQAPAQAIAXQAJAWgBAcIAAAcIjIAAQAAAaAHAWQAGAVANAPQAMAPARAHQATAIAVAAQAUAAAQgGQAQgGAZgRIATAmQghAVgWAIQgXAHgcAAQgeAAgagLgABJgoQgBgRgEgNQgEgNgIgJQgIgJgMgFQgLgEgQAAQgOAAgNAEQgNAFgKAJQgLAJgHANQgHANgFARICQAAIAAAAg");
	this.shape_17.setTransform(-179.2,208.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6F72").s().p("AhNCTQgPgGgKgKQgJgLgFgPQgGgQAAgUIAAjcIAxAAIAADQQAAAbAIAMQAJAMASAAQAMAAAOgGIAcgQQAUgOAlgsIAAizIAxAAIAAEmIgxAAIAAg+IgaAgQgPANgOAIQgPAJgOAFQgPAEgRAAQgTAAgPgFg");
	this.shape_18.setTransform(-212.2,208.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E6F72").s().p("AgjCQQgcgLgUgUQgVgUgKgcQgLgcAAgiQAAghALgeQALgdAVgVQAVgVAcgMQAdgLAgAAQAWAAAWAFQAXAHAZARIgcAoQgRgOgPgGQgOgFgUAAQgWAAgSAIQgRAIgNAPQgOAPgHAUQgHAVABAXQAAAaAGAUQAIAUANAPQANAOATAIQASAHAYAAQAWAAAPgFQAQgGASgOIAZAnIgTALQgTAKgVAFQgUAFgXAAQgfAAgcgLg");
	this.shape_19.setTransform(-243.2,208.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6F72").s().p("AgkCQQgbgLgUgUQgUgUgLgcQgLgcAAgiQAAghALgeQAMgdAUgVQAUgVAcgMQAdgLAhAAQAWAAAVAFQAYAHAZARIgcAoQgRgOgOgGQgPgFgUAAQgWAAgRAIQgTAIgNAPQgNAPgHAUQgGAVgBAXQAAAaAIAUQAGAUAOAPQAOAOASAIQATAHAXAAQAWAAAPgFQAQgGASgOIAZAnIgUALQgSAKgUAFQgVAFgWAAQghAAgcgLg");
	this.shape_20.setTransform(-272.1,208.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6F72").s().p("ACDDdIgsh/IitAAIgsB/Ig5AAICgm5IA4AAICfG5gABGAtIhGjDIhFDDICLAAg");
	this.shape_21.setTransform(-306.8,200.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.3,161,680.1,81.6);


(lib.G_Copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6F72").s().p("AgYCwQgQgSAAgdIAAjEIgxAAIAAgcIAxgNIAAhVIAwAAIAABVIBOAAIAAApIhOAAIAACnIAAANIACASQABAOAPAAQAQAAAcgVIAUAhQgaAWgPAHQgQAIgRAAQgYAAgQgSg");
	this.shape.setTransform(381,394.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6F72").s().p("ABKCXIAAjPQAAgYgFgLQgHgQgXAAQgXAAgZASQgaASgmArIAACzIgwAAIAAkmIAwAAIAAA+QAXgbARgNQARgOAUgIQAVgHAUAAQAUAAAOAFQAPAEAKALQAJAKAEAQQAGAPAAAVIAADbg");
	this.shape_1.setTransform(353.4,398.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6F72").s().p("AgtCQQgZgLgSgVQgSgUgKgdQgKgdAAgiQAAgiAKgdQAKgcASgVQATgUAZgLQAagLAfAAQAZAAAWAIQAUAJAQAQQAOAQAIAXQAIAWAAAcIAAAcIjIAAQAAAaAHAWQAGAVANAPQAMAPASAHQASAIAVAAQATAAARgGQAQgGAZgRIATAmQghAVgWAIQgXAHgdAAQgdAAgagLgABJgoQAAgRgEgNQgFgNgIgJQgIgJgMgFQgMgEgPAAQgOAAgNAEQgNAFgKAJQgKAJgIANQgHANgFARICQAAIAAAAg");
	this.shape_2.setTransform(320.6,398.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6F72").s().p("ACsCXIAAjPQAAgagFgJQgHgQgXAAQgUAAgXAPQgXAPghAjIgOAOIAACzIgvAAIAAjPQAAgagFgJQgHgQgXAAQgXAAgaASQgaASgmArIAACzIgxAAIAAkmIAxAAIAAA+QAXgbARgNQAQgOAVgIQAVgHAVAAQASAAAOAEQAOAFAIAIQAKAJAFANQAFANABASQAZgbAQgOQARgOAVgIQAVgHAUAAQAUAAAOAFQAPAEAJALQAKAKAFAQQAFAPAAAVIAADbg");
	this.shape_3.setTransform(277.7,398.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6F72").s().p("AgtCQQgZgLgSgVQgSgUgKgdQgKgdAAgiQAAgiAKgdQAKgcASgVQATgUAZgLQAagLAfAAQAZAAAWAIQAUAJAQAQQAOAQAIAXQAIAWAAAcIAAAcIjIAAQAAAaAHAWQAGAVANAPQAMAPARAHQATAIAVAAQATAAARgGQAQgGAZgRIATAmQghAVgWAIQgXAHgdAAQgdAAgagLgABJgoQAAgRgEgNQgFgNgIgJQgIgJgMgFQgMgEgPAAQgOAAgNAEQgNAFgKAJQgKAJgIANQgHANgFARICQAAIAAAAg");
	this.shape_4.setTransform(235.1,398.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6F72").s().p("AhGDjQgVgFgQgKQgQgKgJgMQgKgOAAgOQAAgMAKgSQAKgVAdgeQgXgGgKgIQgJgIAAgNQAAgOANgSQAOgQAegYQgbgQgPgXQgOgYAAgfQAAgYAIgVQAJgVAQgPQAQgPAVgIQAWgIAaAAQAZAAAkAMIAsAAIA2gFIAAApIg+AAQAJANAEAPQAFAPAAASQAAAWgKAVQgIAUgQAPQgQAQgVAJQgVAJgWAAIgSgCIgJAAIgeAaQgJAKAAAHQAAAKAZAAIBtAAQAUAAAPAEQAPAEAKAJQAKAIAEANQAFANAAASQAAAZgNAYQgMAWgWARQgWARgcAKQgeAJgfAAQgXAAgVgGgAhCBkQgZAmAAAOQAAAQAUALQATALAeAAQAWAAAUgGQAUgGAQgLQARgKAJgOQAJgOAAgOQAAgPgJgIQgKgHgTAAIhtAAgAgti+QgMAGgJAKQgJAKgFANQgFAOAAAPQAAAPAFAOQAFANAJAKQAKAKALAGQAMAFAOAAQANAAAMgFQALgGAKgKQAJgKAEgNQAFgOAAgPQAAgPgFgOQgFgNgJgKQgJgKgMgGQgLgGgOAAQgNAAgMAGg");
	this.shape_5.setTransform(204.1,406.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6F72").s().p("ABKCXIAAjPQAAgYgFgLQgHgQgXAAQgWAAgaASQgZASgnArIAACzIgwAAIAAkmIAwAAIAAA+QAXgbASgNQAPgOAVgIQAUgHAVAAQAUAAAOAFQAPAEAKALQAJAKAEAQQAGAPgBAVIAADbg");
	this.shape_6.setTransform(169.1,398.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F72").s().p("ABDCQQgNgJgCgVQgUASgLAGQgOAHgQAFQgRAFgPAAQgRAAgPgGQgOgFgLgLQgKgKgGgOQgFgOgBgSQABgQAEgNQAEgOAIgKQAJgKAMgIQAMgGAQgEIBmgYIAAg1QgBgSgOgJQgNgKgbAAQgXAAgLAHQgLAGAAANIACALIgyAKQgEgIAAgKQgBgOAJgNQAHgLAOgJQAOgJAUgFQATgEAXAAQAVAAASAFQASAEANAKQANAKAGANQAHAOAAARIAAC0QABALAXAEIgMApQgegCgMgJgAg+ApQgJAQABAQQgBARALALQALAKASAAQARAAAOgHQAPgIAhgXIAAg9g");
	this.shape_7.setTransform(135.9,398.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6F72").s().p("ABJDtIAAjQQAAgagFgIQgHgQgWAAQgXAAgZASQgaARgmArIAAC0IgxAAIAAnZIAxAAIAADwQAZgbAOgMQASgOATgIQAVgHAVAAQAUAAAOAFQAOAEAKALQAKAKAFAQQAEAPAAAUIAADcg");
	this.shape_8.setTransform(102.9,389.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6F72").s().p("AgjCQQgcgLgUgUQgVgUgKgcQgLgcAAgiQAAghAMgeQAKgdAVgVQAUgVAdgMQAdgLAgAAQAWAAAWAFQAYAHAYARIgbAoQgSgOgPgGQgOgFgUAAQgWAAgRAIQgSAIgNAPQgOAPgHAUQgHAVABAXQAAAaAGAUQAIAUANAPQANAOATAIQATAHAXAAQAVAAAQgFQAQgGASgOIAZAnIgUALQgRAKgWAFQgUAFgXAAQgfAAgcgLg");
	this.shape_9.setTransform(72.1,398.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("AgtCQQgZgLgSgVQgSgUgKgdQgJgdgBgiQABgiAJgdQAKgcASgVQATgUAZgLQAagLAfAAQAZAAAWAIQAUAJAQAQQAOAQAIAXQAJAWgBAcIAAAcIjIAAQAAAaAHAWQAGAVANAPQAMAPARAHQATAIAVAAQAUAAAQgGQAQgGAZgRIATAmQghAVgWAIQgXAHgdAAQgdAAgagLgABJgoQgBgRgDgNQgFgNgIgJQgIgJgMgFQgMgEgPAAQgOAAgNAEQgNAFgKAJQgKAJgIANQgHANgFARICQAAIAAAAg");
	this.shape_10.setTransform(25.5,398.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("AgXDtIAAnZIAvAAIAAHZg");
	this.shape_11.setTransform(2.3,389.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("AhRCXIAAkmIAxAAIAAA2QAbgjAPgNQARgNAQAAQASAAAUAUIgXApQgOgMgIAAQgNAAgRATQgRAUgVAnIAACug");
	this.shape_12.setTransform(-29.9,398.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("AgYDXIAAkmIAwAAIAAEmgAgWifQgJgJAAgOQAAgNAJgJQAKgJAMAAQANAAAJAJQAKAJAAANQAAAOgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_13.setTransform(-51.6,391.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AgXDtIAAnZIAvAAIAAHZg");
	this.shape_14.setTransform(-67.4,389.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6F72").s().p("AgXDtIAAnZIAvAAIAAHZg");
	this.shape_15.setTransform(-82.9,389.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6F72").s().p("AgYDXIAAkmIAwAAIAAEmgAgWifQgJgJAAgOQAAgNAJgJQAKgJAMAAQANAAAJAJQAKAJAAANQAAAOgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_16.setTransform(-98.7,391.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6F72").s().p("AgsCQQgZgLgTgVQgSgUgJgdQgKgdAAgiQAAgiAKgdQAJgcATgVQASgUAagLQAagLAdAAQAaAAAVAIQAWAJAOAQQAPAQAIAXQAJAWAAAcIAAAcIjJAAQAAAaAGAWQAHAVAMAPQANAPASAHQASAIAVAAQATAAARgGQAQgGAZgRIATAmQggAVgXAIQgXAHgcAAQgdAAgagLgABJgoQAAgRgFgNQgEgNgIgJQgIgJgMgFQgMgEgOAAQgPAAgNAEQgNAFgKAJQgLAJgHANQgHANgEARICPAAIAAAAg");
	this.shape_17.setTransform(-121.7,398.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6F72").s().p("AhNCTQgPgGgJgKQgLgLgFgPQgEgQgBgUIAAjcIAxAAIAADQQAAAbAJAMQAHAMATAAQAMAAAOgGIAcgQQAUgOAlgsIAAizIAyAAIAAEmIgyAAIAAg+IgbAgQgNANgPAIQgPAJgOAFQgQAEgQAAQgUAAgOgFg");
	this.shape_18.setTransform(-154.7,398.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E6F72").s().p("AgkCQQgbgLgUgUQgUgUgLgcQgLgcAAgiQAAghALgeQAMgdAUgVQAVgVAbgMQAdgLAhAAQAWAAAVAFQAZAHAYARIgcAoQgRgOgOgGQgPgFgUAAQgWAAgSAIQgRAIgOAPQgNAPgHAUQgGAVgBAXQAAAaAIAUQAGAUAOAPQAOAOASAIQATAHAXAAQAVAAAQgFQAQgGASgOIAZAnIgTALQgSAKgVAFQgWAFgVAAQghAAgcgLg");
	this.shape_19.setTransform(-185.8,398.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6F72").s().p("AgkCQQgbgLgUgUQgVgUgKgcQgLgcAAgiQAAghAMgeQAKgdAVgVQAUgVAdgMQAdgLAgAAQAWAAAVAFQAZAHAYARIgbAoQgSgOgPgGQgOgFgUAAQgWAAgRAIQgSAIgOAPQgNAPgHAUQgHAVAAAXQABAaAGAUQAIAUANAPQANAOATAIQATAHAXAAQAWAAAPgFQAQgGASgOIAZAnIgUALQgRAKgWAFQgVAFgWAAQgfAAgdgLg");
	this.shape_20.setTransform(-214.6,398.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6F72").s().p("ACDDdIgsh/IitAAIgsB/Ig5AAICgm5IA4AAICfG5gABGAtIhGjDIhFDDICLAAg");
	this.shape_21.setTransform(-249.4,391.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.9,351.2,680.1,81.6);


(lib.G_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_();
	this.instance.parent = this;
	this.instance.setTransform(-250,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-117,491,165);


(lib.G_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-350,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-151,700,326);


// stage content:
(lib._10s_337x334_French = function(mode,startPosition,loop) {
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
	this.instance.setTransform(168.5,105.2,0.481,0.481,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).to({alpha:1},19).wait(2));

	// Copy1
	this.instance_1 = new lib.G_Copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.7,13.5,0.481,0.481);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},13).to({_off:true},34).wait(1));

	// 1
	this.instance_2 = new lib.G_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.1,114,0.681,0.681,0,0,0,0.1,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9).wait(25).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(62));

	// 3
	this.instance_3 = new lib.G_3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(179.1,151.1,0.655,0.398,0,33.6,0,0.2,0.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({alpha:1},9).wait(30).to({startPosition:0},0).to({regX:0.1,regY:0,scaleX:0.68,scaleY:0.68,skewX:0,x:171.8,y:134.5},21,cjs.Ease.get(1)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.2,178.2,476.7,222);
// library properties:
lib.properties = {
	width: 337,
	height: 334,
	fps: 24,
	color: "#F7F7F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/10s_337x334_French_atlas_.png", id:"10s_337x334_French_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;