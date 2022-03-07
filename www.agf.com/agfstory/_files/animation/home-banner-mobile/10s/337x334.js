(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"337x334_atlas_", frames: [[0,0,700,326],[0,328,491,165]]}
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
	this.spriteSheet = ss["337x334_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3_ = function() {
	this.spriteSheet = ss["337x334_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.G_Copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4AF4A").s().p("Ag3CxQgfgNgWgZQgXgagMgjQgLgkgBgqQABgqALgkQANgiAWgaQAXgZAfgNQAggOAlAAQAgAAAbAKQAZALASAUQATAUAKAcQAJAcABAhIAAAjIj4AAQAAAgAJAbQAHAaARASQAOATAXAJQAVAKAbAAQAYAAAUgIQAVgIAegUIAXAvQgoAagbAJQgcAJgkAAQgkAAgggOgABagxQAAgVgGgRQgFgQgKgLQgKgKgOgGQgPgGgSAAQgSAAgQAGQgQAGgMAKQgNALgKAQQgIARgFAVICwAAIAAAAg");
	this.shape.setTransform(292.9,218.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7AC24").s().p("AhXEYQgagHgTgMQgUgMgKgPQgMgRAAgRQgBgPAMgXQANgZAjglQgcgIgMgKQgMgKAAgPQAAgSARgVQARgUAlgfQgigSgSgeQgRgdAAgmQgBgeALgaQAKgZAUgSQAUgTAagKQAbgKAgAAQAeAAAtAPIA3AAIBCgGIAAAzIhMAAQALAQAFASQAGATAAAWQAAAbgMAZQgLAZgTATQgVATgYALQgbALgaAAIgXgCIgMgBIgkAhQgLANAAAIQAAANAeAAICHAAQAZAAASAFQATAFALAKQAMAKAGAQQAHAQgBAWQAAAggPAcQgPAbgbAWQgbAVgjALQglAMgnAAQgcAAgagHgAhRB7QgfAvAAARQAAAUAYAOQAYANAlAAQAbAAAZgIQAYgHAVgNQATgNALgQQAMgSAAgSQAAgSgMgJQgLgJgYAAIiHAAgAg3jpQgPAGgLANQgLANgGAQQgGAQgBATQABASAGARQAGAQALAMQAMANAOAHQAPAHAQAAQARAAAOgHQAOgHAMgMQAKgMAHgRQAGgQAAgTQAAgTgGgRQgHgQgKgMQgMgNgPgHQgOgHgRAAQgQAAgOAIg");
	this.shape_1.setTransform(254.8,228.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55324F").s().p("ABbC6IAAj/QAAgdgGgOQgJgUgcAAQgcAAgfAXQggAWgvA1IAADcIg8AAIAAlqIA8AAIAABNQAdghAVgRQAUgRAYgKQAagJAaAAQAXAAASAHQASAFAMANQAMAMAGATQAGATAAAaIAAEOg");
	this.shape_2.setTransform(211.7,218.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F8DB7").s().p("ABRCyQgPgLgDgaQgYAVgOAHQgRAKgTAGQgVAGgTAAQgVAAgSgIQgSgGgNgNQgNgMgHgSQgGgRAAgWQAAgUAFgQQAFgRAKgMQAKgNAPgJQAQgIATgFIB9gdIAAhCQAAgWgRgLQgSgMghAAQgcAAgOAIQgNAIAAAPIADAOIg9ANQgGgLAAgLQAAgSAJgPQAKgPARgLQARgLAYgFQAZgGAbAAQAbAAAWAGQAWAGAQAMQAPAMAIAQQAJARAAAVIAADdQACAPAbAFIgOAyQglgCgQgLgAhNAyQgLAUAAAUQAAAVAOANQANANAWAAQAVAAASgJQATgJAngcIAAhMg");
	this.shape_3.setTransform(170.8,218.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5B148").s().p("ABaEjIAAkAQAAgegGgLQgJgUgbAAQgcAAgfAWQggAWgvA0IAADdIg8AAIAApGIA8AAIAAEoQAfgiASgOQAVgSAYgJQAagJAaAAQAYgBARAHQASAFAMANQAMANAGATQAGATAAAZIAAEOg");
	this.shape_4.setTransform(130.1,207.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECB02C").s().p("AgsCyQgigOgZgZQgZgZgNgiQgNgjAAgpQAAgpAOglQANgjAagaQAZgbAjgOQAjgOAoAAQAbAAAbAHQAdAIAfAWIgjAwQgVgRgSgHQgSgHgYAAQgbAAgWAKQgWAKgQASQgRATgIAZQgJAaAAAdQAAAfAJAZQAJAZAQASQARARAXAJQAXAKAdAAQAaAAAUgHQATgGAWgSIAfAwIgYANQgWAMgaAHQgaAGgbAAQgoAAgigNg");
	this.shape_5.setTransform(92.3,218.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6F72").s().p("AhXEYQgZgHgUgMQgUgMgLgPQgMgRAAgRQAAgPAMgXQANgZAjglQgcgIgMgKQgMgKAAgPQAAgSARgVQARgUAlgfQgigSgSgeQgSgdAAgmQAAgeALgaQAKgZAUgSQATgTAbgKQAbgKAfAAQAfAAAtAPIA3AAIBBgGIAAAzIhLAAQALAQAFASQAFATAAAWQAAAbgLAZQgLAZgUATQgTATgaALQgaALgaAAIgXgCIgLgBIglAhQgLANAAAIQAAANAfAAICGAAQAZAAASAFQATAFAMAKQALAKAHAQQAFAQABAWQgBAggPAcQgPAbgbAWQgbAVgjALQglAMgmAAQgdAAgagHgAhSB7QgeAvAAARQAAAUAZAOQAXANAlAAQAbAAAZgIQAZgHATgNQAVgNALgQQALgSAAgSQAAgSgLgJQgMgJgYAAIiGAAgAg4jpQgOAGgLANQgLANgHAQQgFAQAAATQAAASAFARQAHAQALAMQAMANANAHQAPAHARAAQARAAAOgHQAPgHALgMQAKgMAGgRQAHgQAAgTQAAgTgHgRQgFgQgMgMQgLgNgPgHQgOgHgRAAQgQAAgPAIg");
	this.shape_6.setTransform(34.2,228.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F72").s().p("ABbC6IAAj/QAAgdgGgOQgJgUgcAAQgcAAgfAXQggAWgvA1IAADcIg8AAIAAlqIA8AAIAABNQAdghAVgRQAUgRAYgKQAagJAaAAQAXAAASAHQASAFAMANQAMAMAGATQAGATAAAaIAAEOg");
	this.shape_7.setTransform(-8.9,218.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6F72").s().p("AgdEIIAAlqIA7AAIAAFqgAgbjEQgLgMAAgQQAAgQALgMQAMgLAPAAQAQAAAMALQALAMAAAQQAAAQgLAMQgMAMgQAAQgPAAgMgMg");
	this.shape_8.setTransform(-40.7,210.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6F72").s().p("AgsCyQgigOgZgZQgZgZgNgiQgNgjAAgpQAAgpAOglQANgjAagaQAZgbAjgOQAjgOAoAAQAbAAAbAHQAdAIAfAWIgjAwQgVgRgSgHQgSgHgYAAQgbAAgWAKQgWAKgQASQgRATgIAZQgJAaAAAdQAAAfAJAZQAJAZAQASQARARAXAJQAXAKAdAAQAaAAAUgHQATgGAWgSIAfAwIgYANQgWAMgaAHQgaAGgbAAQgoAAgigNg");
	this.shape_9.setTransform(-67.1,218.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("ABRCyQgPgLgDgaQgYAVgOAHQgRAKgTAGQgVAGgTAAQgVAAgSgIQgSgGgNgNQgNgMgHgSQgGgRAAgWQAAgUAFgQQAFgRAKgMQAKgNAPgJQAQgIATgFIB9gdIAAhCQAAgWgRgLQgSgMghAAQgcAAgOAIQgNAIAAAPIADAOIg9ANQgGgLAAgLQAAgSAJgPQAKgPARgLQARgLAYgFQAZgGAbAAQAbAAAWAGQAWAGAQAMQAPAMAIAQQAJARAAAVIAADdQACAPAbAFIgOAyQglgCgQgLgAhNAyQgLAUAAAUQAAAVAOANQANANAWAAQAVAAASgJQATgJAngcIAAhMg");
	this.shape_10.setTransform(-105,218.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("AhjC6IAAlqIA8AAIAABCQAhgrATgQQAUgQAVAAQAWAAAYAZIgdAyQgRgOgJAAQgRgBgVAZQgVAXgZAwIAADXg");
	this.shape_11.setTransform(-134.2,218.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("Ah7EhQgVgFgQgIIAAo8IA9AAIAADsQAXgMASgFQAfgIAkAAQAiAAAcANQAcAMAUAXQAUAXALAfQALAhAAAnQAAAugPAoQgPAlgcAcQgcAcgnAOQgmAPgwAAQgjAAgmgIgAg4gVQgVAHgWAOIAADnQAXALAdAAIAggDQAcgFAcgUQAegWAMgcQAMgbAAguQAAgcgHgWQgHgXgNgPQgPgPgTgIQgUgIgYAAQgZAAgVAHg");
	this.shape_12.setTransform(-170.6,208.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("ADTC6IAAj/QABgggGgLQgJgUgbAAQgaABgcASQgdATgpAqIgQASIAADcIg7AAIAAj/QAAgggGgLQgJgUgbAAQgdAAggAXQgfAWgwA1IAADcIg7AAIAAlqIA7AAIAABNQAdghAVgRQAUgRAagKQAZgJAaAAQAWAAARAFQARAGALAKQAMALAGAQQAGAQACAXQAegiAVgRQATgRAbgKQAZgJAZAAQAYAAASAHQASAFAMANQAMAMAGATQAFATAAAaIAAEOg");
	this.shape_13.setTransform(-226.9,218.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AiXEIIAAoPIEoAAIAAA3IjmAAIAACwIC+AAIAAA3Ii+AAIAAC6IDtAAIAAA3g");
	this.shape_14.setTransform(-280.2,210.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.1,161,619.7,99.4);


(lib.G_Copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6F72").s().p("Ag2CxQgggNgWgZQgXgagLgjQgNgkAAgqQAAgqANgkQAMgiAXgaQAWgZAfgNQAggOAlAAQAgAAAbAKQAZALATAUQASAUAKAcQAKAcAAAhIAAAjIj4AAQAAAgAJAbQAHAaAQASQAPATAWAJQAXAKAaAAQAYAAAVgIQAUgIAdgUIAZAvQgpAagcAJQgcAJgjAAQgkAAgfgOgABagxQgBgVgFgRQgFgQgKgLQgKgKgOgGQgPgGgTAAQgRAAgQAGQgQAGgNAKQgNALgIAQQgKARgFAVICxAAIAAAAg");
	this.shape.setTransform(350.3,408.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6F72").s().p("AhXEYQgZgHgUgMQgUgMgLgPQgMgRABgRQAAgPALgXQANgZAjglQgcgIgMgKQgMgKAAgPQAAgSARgVQARgUAlgfQgigSgSgeQgRgdAAgmQAAgeAKgaQAKgZAUgSQATgTAbgKQAbgKAfAAQAfAAAtAPIA3AAIBCgGIAAAzIhMAAQALAQAFASQAFATABAWQAAAbgMAZQgLAZgUATQgTATgaALQgaALgaAAIgXgCIgMgBIgkAhQgLANAAAIQAAANAfAAICGAAQAZAAASAFQATAFAMAKQALAKAHAQQAFAQAAAWQAAAggPAcQgPAbgbAWQgbAVgjALQglAMgmAAQgdAAgagHgAhSB7QgeAvAAARQAAAUAZAOQAXANAlAAQAbAAAZgIQAYgHAUgNQAVgNALgQQALgSAAgSQAAgSgLgJQgMgJgYAAIiGAAgAg4jpQgOAGgLANQgLANgHAQQgFAQAAATQAAASAFARQAHAQALAMQAMANANAHQAPAHARAAQARAAAOgHQAPgHALgMQAKgMAHgRQAGgQAAgTQAAgTgGgRQgHgQgLgMQgLgNgPgHQgOgHgRAAQgQAAgPAIg");
	this.shape_1.setTransform(312.2,418.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6F72").s().p("ABbC6IAAj/QAAgdgGgOQgJgUgcABQgcgBgfAXQggAWgvA1IAADcIg8AAIAAlqIA8AAIAABNQAdghAVgRQAUgRAYgKQAagJAaAAQAXAAASAHQASAFAMANQAMAMAGATQAGATAAAaIAAEOg");
	this.shape_2.setTransform(269.1,408.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6F72").s().p("ABRCyQgPgLgDgaQgYAVgOAHQgRAKgTAGQgVAGgTAAQgVAAgSgIQgSgGgNgNQgNgMgHgSQgGgRAAgWQAAgUAFgQQAFgRAKgMQAKgNAPgJQAQgIATgFIB9gdIAAhCQAAgWgRgLQgSgMghAAQgcAAgOAIQgNAIAAAPIADAOIg9ANQgGgLAAgLQAAgSAJgPQAKgPARgLQARgLAYgFQAZgGAbAAQAbAAAWAGQAWAGAQAMQAPAMAIAQQAJARAAAVIAADdQACAPAbAFIgOAyQglgCgQgLgAhNAyQgLAUAAAUQAAAVAOANQANANAWAAQAVAAASgJQATgJAngcIAAhMg");
	this.shape_3.setTransform(228.3,408.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6F72").s().p("ABaEkIAAkBQAAgegGgLQgJgUgbAAQgcAAgfAXQggAVgvA0IAADeIg8AAIAApHIA8AAIAAEoQAfgiASgOQAVgSAYgJQAagJAaAAQAYgBARAHQASAFAMANQAMANAGATQAGATAAAZIAAEPg");
	this.shape_4.setTransform(187.6,397.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6F72").s().p("AgsCyQgigOgZgZQgZgZgNgiQgNgjAAgpQAAgpAOglQANgjAagaQAZgbAjgOQAjgOAoAAQAbAAAbAHQAdAIAfAWIgjAwQgVgRgSgHQgSgHgYAAQgbAAgWAKQgWAKgQASQgRATgIAZQgJAaAAAdQAAAfAJAZQAJAZAQASQARARAXAJQAXAKAdAAQAaAAAUgHQATgGAWgSIAfAwIgYANQgWAMgaAHQgaAGgbAAQgoAAgigNg");
	this.shape_5.setTransform(149.7,408.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6F72").s().p("AhXEYQgZgHgUgMQgUgMgKgPQgNgRAAgRQAAgPAMgXQANgZAjglQgcgIgMgKQgMgKAAgPQAAgSARgVQARgUAlgfQgigSgSgeQgSgdAAgmQAAgeALgaQALgZATgSQATgTAbgKQAbgKAfAAQAgAAAsAPIA3AAIBBgGIAAAzIhLAAQALAQAFASQAGATgBAWQAAAbgLAZQgLAZgTATQgUATgZALQgbALgaAAIgXgCIgLgBIglAhQgLANAAAIQAAANAeAAICHAAQAZAAASAFQATAFALAKQANAKAFAQQAHAQAAAWQAAAggQAcQgPAbgbAWQgbAVgjALQglAMgnAAQgcAAgagHgAhRB7QgfAvAAARQAAAUAYAOQAYANAlAAQAbAAAZgIQAYgHAVgNQATgNALgQQAMgSAAgSQAAgSgMgJQgMgJgXAAIiHAAgAg3jpQgPAGgLANQgMANgFAQQgHAQAAATQAAASAHARQAFAQAMAMQAMANAOAHQAOAHARAAQARAAAOgHQAOgHAMgMQALgMAFgRQAHgQAAgTQAAgTgHgRQgFgQgMgMQgLgNgPgHQgOgHgRAAQgQAAgOAIg");
	this.shape_6.setTransform(91.7,418.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6F72").s().p("ABbC6IAAj/QAAgdgGgOQgJgUgcABQgcgBgfAXQggAWgvA1IAADcIg8AAIAAlqIA8AAIAABNQAdghAVgRQAUgRAYgKQAagJAaAAQAXAAASAHQASAFAMANQAMAMAGATQAGATAAAaIAAEOg");
	this.shape_7.setTransform(48.6,408.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6F72").s().p("AgdEIIAAlqIA7AAIAAFqgAgbjEQgLgMAAgQQAAgQALgMQAMgLAPAAQAQAAAMALQALAMAAAQQAAAQgLAMQgMAMgQgBQgPABgMgMg");
	this.shape_8.setTransform(16.8,400.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6F72").s().p("AgsCyQgigOgZgZQgZgZgNgiQgNgjAAgpQAAgpAOglQANgjAagaQAZgbAjgOQAjgOAoAAQAbAAAbAHQAdAIAfAWIgjAwQgVgRgSgHQgSgHgYAAQgbAAgWAKQgWAKgQASQgRATgIAZQgJAaAAAdQAAAfAJAZQAJAZAQASQARARAXAJQAXAKAdAAQAaAAAUgHQATgGAWgSIAfAwIgYANQgWAMgaAHQgaAGgbAAQgoAAgigNg");
	this.shape_9.setTransform(-9.7,408.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6F72").s().p("ABRCyQgPgLgDgaQgYAVgOAHQgRAKgTAGQgVAGgTAAQgVAAgSgIQgSgGgNgNQgNgMgHgSQgGgRAAgWQAAgUAFgQQAFgRAKgMQAKgNAPgJQAQgIATgFIB9gdIAAhCQAAgWgRgLQgSgMghAAQgcAAgOAIQgNAIAAAPIADAOIg9ANQgGgLAAgLQAAgSAJgPQAKgPARgLQARgLAYgFQAZgGAbAAQAbAAAWAGQAWAGAQAMQAPAMAIAQQAJARAAAVIAADdQACAPAbAFIgOAyQglgCgQgLgAhNAyQgLAUAAAUQAAAVAOANQANANAWAAQAVAAASgJQATgJAngcIAAhMg");
	this.shape_10.setTransform(-47.5,408.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6F72").s().p("AhjC6IAAlqIA8AAIAABCQAhgrATgQQAUgQAVAAQAWAAAYAZIgdAyQgRgOgJAAQgRgBgVAZQgVAXgZAwIAADXg");
	this.shape_11.setTransform(-76.7,408.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6F72").s().p("Ah7EhQgVgFgQgIIAAo8IA9AAIAADsQAXgMASgFQAfgIAkAAQAiAAAcANQAcAMAUAXQAUAXALAfQALAhAAAnQAAAugPAoQgPAlgcAcQgcAcgnAOQgmAPgwAAQgjAAgmgIgAg4gVQgVAHgWAOIAADnQAXALAdAAIAggDQAcgFAcgUQAegWAMgcQAMgbAAguQAAgcgHgWQgHgXgNgPQgPgPgTgIQgUgIgYAAQgZAAgVAHg");
	this.shape_12.setTransform(-113.2,398.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6F72").s().p("ADUC6IAAj/QAAgggGgLQgJgUgcABQgZAAgdASQgcATgpAqIgQASIAADcIg7AAIAAj/QAAgggGgLQgJgUgcABQgbgBghAXQggAWguA1IAADcIg9AAIAAlqIA9AAIAABNQAcghAVgRQAUgRAZgKQAagJAaAAQAWAAARAFQARAGALAKQAMALAGAQQAGAQACAXQAegiAUgRQAUgRAagKQAagJAaAAQAYAAARAHQASAFAMANQAMAMAGATQAGATgBAaIAAEOg");
	this.shape_13.setTransform(-169.5,408.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6F72").s().p("AiXEIIAAoPIEoAAIAAA4IjmAAIAACvIC+AAIAAA3Ii+AAIAAC6IDtAAIAAA3g");
	this.shape_14.setTransform(-222.7,400.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.6,351.2,619.7,99.4);


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
(lib._337x334 = function(mode,startPosition,loop) {
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
		{src:"images/337x334_atlas_.png", id:"337x334_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;