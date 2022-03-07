// $Id: rifcalc.js,v 1.4.6.16 2015/04/27 15:15:55 wesleyw Exp $
//  
// The RIF Calculator Javascript engine
//  
// Ayinde Yakubu, Copyright (c) 2003, Unisen Inc
//
// Define all required functions
//
// Define the different selection types possible
var gInflationRate =0
var gMIN        = 0;
var gPERCENT    = 2;
var gSET_AMOUNT = 1;
var gAMORTIZED  = 3;
var gMAX  		= 4;
// Define global constants
var gMandatedAge = 71.0;
var gCutOffAge = 90.0;
var gLastAge   = 150.0;
var gAgeCount  = 32.0; 
var gCutoffYear = 1992.0;
var gAgeCountRedesign2015  = 83.0; 
var gAgeCountStart = 55;
var gAgeCountStart2015 = 18;
var gLIFWHTRateCount = 7;
var gLIFWHTRate = new Array(gLIFWHTRateCount);
// Define RIF withdrawal schedules
var gPre1992  = new Array(gAgeCount);
var gPost1992 = new Array(gAgeCount);
var gAges     = new Array(gAgeCount);
var gRIFFactor2015  = new Array(gAgeCountRedesign2015);
var gFundsPost1992 = false;

var gLIFGroupMax = 8;
var gLIFFactorMax = 83;
var gLIFFactor = new Array(gLIFGroupMax);
var gLIFAgeCountStart=50;

var gTheYear = new Array(100);
var gTheRIF  = new Array(100);
var gGrossPayment = new Array(100);

// list tax regimes  
var gQUEBEC = "quebec";
var gCANADA = "canada";
var gQUEBECCODEA1 = 15240;
var	gQUEBECCODEA2 = 92976;
var	gQUEBECCODEA3 = 120780;
var	gQUEBECCODEARATE1= 0.16;
var	gQUEBECCODEARATE2 =0.18;
var	gQUEBECCODEARATE3= 0.2129;
//Deduct with holding tax or not
var deductWHT = "true";

var resultTableStr = "";
var rifArray;
var rifObject;
var rifTableArray;
var rifTableObject;



var lifArray;
var lifObject;
var lifTableArray;
var lifTableObject;

var tfsaArray;
var tfsaObject;
var tfsaTableArray;
var tfsaTableObject;
var queryParameters;
var paymentFreqName;
var rifSummary = "";
var lifSummary = "";
var tfsaSummary = "";
var calcSummaryTableStr = "";
var calcSummaryTableErrorStr = "";
initializeTables();

//Initialize all tables
function initializeTables()
{
     initPre1992();
	 initPost1992();
	 initAgesNew();
	 initRIFFactor2015();
	 initLIFFactor();
	 initLIFWHTRate();
} 

function initLIFWHTRate()
{
	gLIFWHTRate[0]=0.1;
	gLIFWHTRate[1]=0.2;
	gLIFWHTRate[2]=0.3;
	gLIFWHTRate[3]=0.05;
	gLIFWHTRate[4]=0.21;
	gLIFWHTRate[5]=0.23;
	gLIFWHTRate[6]=0.2429;
	
}

function initLIFFactor()
{
	gLIFFactor[0]=new Array(gLIFFactorMax);
	for (j=0;j<gLIFFactorMax;j++){
		gLIFFactor[0][j]=0;
	}
	gLIFFactor[1]=new Array(gLIFFactorMax);
	for (j=0;j<gLIFFactorMax;j++){
		gLIFFactor[1][j]=0;
	}
	//MIN
	gLIFFactor[2]=new Array(gLIFFactorMax);
	gLIFFactor[2][0]=0.025;						//50
	gLIFFactor[2][1]=0.0256410256410256;					//51
	gLIFFactor[2][2]=0.0263157894736842;					//52		
	gLIFFactor[2][3]=0.027027027027027;					//53
	gLIFFactor[2][4]=0.027777777777778;					//54
	gLIFFactor[2][5]=0.0285714285714286;					//55
	gLIFFactor[2][6]=0.0294117647058824;					//56
	gLIFFactor[2][7]=0.0303030303030303;					//57
	gLIFFactor[2][8]=0.03125;					//58
	gLIFFactor[2][9]=0.032258064516129;					//59
	gLIFFactor[2][10]=0.0333333333333333;					//60	
	gLIFFactor[2][11]=0.0344827586206897;					//61
	gLIFFactor[2][12]=0.0357142857142857;					//62
	gLIFFactor[2][13]=0.037037037037037;					//63		
	gLIFFactor[2][14]=0.0384615384615385;					//64
	gLIFFactor[2][15]=0.04;						//65
	gLIFFactor[2][16]=0.0416666666666667;					//66
	gLIFFactor[2][17]=0.0434782608695652;					//67
	gLIFFactor[2][18]=0.0454545454545455;					//68
	gLIFFactor[2][19]=0.0476190476190476;					//69
	gLIFFactor[2][20]=0.05;						//70	
	gLIFFactor[2][21]=0.0528;					//71
	gLIFFactor[2][22]=0.054;					//72		
	gLIFFactor[2][23]=0.0553;					//73
	gLIFFactor[2][24]=0.0567;					//74
	gLIFFactor[2][25]=0.0582;					//75
	gLIFFactor[2][26]=0.0598;					//76
	gLIFFactor[2][27]=0.0617;					//77
	gLIFFactor[2][28]=0.0636;					//78
	gLIFFactor[2][29]=0.0658;					//79
	gLIFFactor[2][30]=0.0682;					//80	
	gLIFFactor[2][31]=0.0708;					//81
	gLIFFactor[2][32]=0.0738;					//82
	gLIFFactor[2][33]=0.0771;					//83		
	gLIFFactor[2][34]=0.0808;					//84
	gLIFFactor[2][35]=0.0851;					//85
	gLIFFactor[2][36]=0.0899;					//86
	gLIFFactor[2][37]=0.0955;					//87
	gLIFFactor[2][38]=0.1021;					//88
	gLIFFactor[2][39]=0.1099;					//89
	gLIFFactor[2][40]=0.1192;					//90
	gLIFFactor[2][41]=0.1306;					//91
	gLIFFactor[2][42]=0.1449;					//92
	gLIFFactor[2][43]=0.1634;					//93		
	gLIFFactor[2][44]=0.1879;					//94
	gLIFFactor[2][45]=0.2;						//95
	gLIFFactor[2][46]=0.2;						//96
	gLIFFactor[2][47]=0.2;						//97
	gLIFFactor[2][48]=0.2;						//98
	gLIFFactor[2][49]=0.2;						//99
	gLIFFactor[2][50]=1;						//100
	
	
	//NL LIF MIN
	gLIFFactor[3]=new Array(gLIFFactorMax);
	gLIFFactor[3][0]=0.025;						//50
	gLIFFactor[3][1]=0.0256;					//51
	gLIFFactor[3][2]=0.0263;					//52		
	gLIFFactor[3][3]=0.0270;					//53
	gLIFFactor[3][4]=0.0278;					//54
	gLIFFactor[3][5]=0.0286;					//55
	gLIFFactor[3][6]=0.0294;					//56
	gLIFFactor[3][7]=0.0303;					//57
	gLIFFactor[3][8]=0.0313;					//58
	gLIFFactor[3][9]=0.0323;					//59
	gLIFFactor[3][10]=0.0333;					//60
	gLIFFactor[3][11]=0.0345;					//61
	gLIFFactor[3][12]=0.0357;					//62
	gLIFFactor[3][13]=0.0370;					//63		
	gLIFFactor[3][14]=0.0385;					//64
	gLIFFactor[3][15]=0.04;						//65
	gLIFFactor[3][16]=0.0417;					//66
	gLIFFactor[3][17]=0.0435;					//67
	gLIFFactor[3][18]=0.0455;					//68
	gLIFFactor[3][19]=0.0476;					//69
	gLIFFactor[3][20]=0.05;						//70	
	gLIFFactor[3][21]=0.0528;					//71
	gLIFFactor[3][22]=0.054;					//72		
	gLIFFactor[3][23]=0.0553;					//73
	gLIFFactor[3][24]=0.0567;					//74
	gLIFFactor[3][25]=0.0582;					//75
	gLIFFactor[3][26]=0.0598;					//76
	gLIFFactor[3][27]=0.0617;					//77
	gLIFFactor[3][28]=0.0636;					//78
	gLIFFactor[3][29]=0.0658;					//79
	gLIFFactor[3][30]=0.0682;					//80
	gLIFFactor[3][31]=1;						//81
	gLIFFactor[3][32]=1;						//82
	gLIFFactor[3][33]=1;						//83		
	gLIFFactor[3][34]=1;						//84
	gLIFFactor[3][35]=1;						//85
	gLIFFactor[3][36]=1;						//86
	gLIFFactor[3][37]=1;						//87
	gLIFFactor[3][38]=1;						//88
	gLIFFactor[3][39]=1;						//89
	gLIFFactor[3][40]=1;						//90
	gLIFFactor[3][41]=1;						//91
	gLIFFactor[3][42]=1;						//92
	gLIFFactor[3][43]=1;						//93		
	gLIFFactor[3][44]=1;						//94
	gLIFFactor[3][45]=1;						//95
	gLIFFactor[3][46]=1;						//96
	gLIFFactor[3][47]=1;						//97
	gLIFFactor[3][48]=1;						//98
	gLIFFactor[3][49]=1;						//99
	gLIFFactor[3][50]=1;						//100
	
	//AB,BC,SK,ON,NB
	gLIFFactor[4]=new Array(gLIFFactorMax);
	gLIFFactor[4][0]=0.0627;						//50
	gLIFFactor[4][1]=0.063107;					//51
	gLIFFactor[4][2]=0.063545;					//52		
	gLIFFactor[4][3]=0.064016;					//53
	gLIFFactor[4][4]=0.064523;					//54
	gLIFFactor[4][5]=0.065070;					//55
	gLIFFactor[4][6]=0.065659;					//56
	gLIFFactor[4][7]=0.066295;					//57
	gLIFFactor[4][8]=0.066983;					//58
	gLIFFactor[4][9]=0.067729;					//59
	gLIFFactor[4][10]=0.068537;					//60
	gLIFFactor[4][11]=0.069415;					//61
	gLIFFactor[4][12]=0.070370;					//62
	gLIFFactor[4][13]=0.071412;					//63		
	gLIFFactor[4][14]=0.072551;					//64
	gLIFFactor[4][15]=0.073799;					//65
	gLIFFactor[4][16]=0.075169;					//66
	gLIFFactor[4][17]=0.076678;					//67
	gLIFFactor[4][18]=0.078345;					//68
	gLIFFactor[4][19]=0.080193;					//69
	gLIFFactor[4][20]=0.082250;					//70	
	gLIFFactor[4][21]=0.084548;					//71
	gLIFFactor[4][22]=0.087129;					//72		
	gLIFFactor[4][23]=0.090042;						//73
	gLIFFactor[4][24]=0.093351;					//74
	gLIFFactor[4][25]=0.097135;					//75
	gLIFFactor[4][26]=0.101495;					//76
	gLIFFactor[4][27]=0.106566;					//77
	gLIFFactor[4][28]=0.112526;					//78
	gLIFFactor[4][29]=0.119616;					//79
	gLIFFactor[4][30]=0.128177;					//80
	gLIFFactor[4][31]=0.138700;					//81
	gLIFFactor[4][32]=0.151921;					//82
	gLIFFactor[4][33]=0.168995;					//83		
	gLIFFactor[4][34]=0.191852;					//84
	gLIFFactor[4][35]=0.223959;					//85
	gLIFFactor[4][36]=0.272256;					//86
	gLIFFactor[4][37]=0.352934;					//87
	gLIFFactor[4][38]=0.514563;					//88
	gLIFFactor[4][39]=1;						//89
	gLIFFactor[4][40]=1;						//90
	gLIFFactor[4][41]=1;						//91
	gLIFFactor[4][42]=1;						//92
	gLIFFactor[4][43]=1;						//93		
	gLIFFactor[4][44]=1;						//94
	gLIFFactor[4][45]=1;						//95
	gLIFFactor[4][46]=1;						//96
	gLIFFactor[4][47]=1;						//97
	gLIFFactor[4][48]=1;						//98
	gLIFFactor[4][49]=1;						//99
	gLIFFactor[4][50]=1;						//100
	
	
	//AB,BC,SK,ON,NB (ignore this)
	//possibly Manitoba and Quebec 
	gLIFFactor[5]=new Array(gLIFFactorMax);
	gLIFFactor[5][0]=0.061;						//50
	gLIFFactor[5][1]=0.061;					//51
	gLIFFactor[5][2]=0.061;					//52		
	gLIFFactor[5][3]=0.061;					//53
	gLIFFactor[5][4]=0.061;					//54
	gLIFFactor[5][5]=0.064;					//55
	gLIFFactor[5][6]=0.065;					//56
	gLIFFactor[5][7]=0.065;					//57
	gLIFFactor[5][8]=0.066;					//58
	gLIFFactor[5][9]=0.067;					//59
	gLIFFactor[5][10]=0.067;				//60
	gLIFFactor[5][11]=0.068;				//61
	gLIFFactor[5][12]=0.069;				//62
	gLIFFactor[5][13]=0.07;					//63		
	gLIFFactor[5][14]=0.071;					//64
	gLIFFactor[5][15]=0.072;					//65
	gLIFFactor[5][16]=0.073;					//66
	gLIFFactor[5][17]=0.074;					//67
	gLIFFactor[5][18]=0.076;					//68
	gLIFFactor[5][19]=0.077;					//69
	gLIFFactor[5][20]=0.079;					//70	
	gLIFFactor[5][21]=0.081;					//71
	gLIFFactor[5][22]=0.083;					//72		
	gLIFFactor[5][23]=0.085;					//73
	gLIFFactor[5][24]=0.088;					//74
	gLIFFactor[5][25]=0.091;					//75
	gLIFFactor[5][26]=0.094;					//76
	gLIFFactor[5][27]=0.098;					//77
	gLIFFactor[5][28]=0.103;					//78
	gLIFFactor[5][29]=0.108;					//79
	gLIFFactor[5][30]=0.115;					//80
	gLIFFactor[5][31]=0.121;					//81
	gLIFFactor[5][32]=0.129;					//82
	gLIFFactor[5][33]=0.138;					//83		
	gLIFFactor[5][34]=0.148;					//84
	gLIFFactor[5][35]=0.16;						//85
	gLIFFactor[5][36]=0.173;					//86
	gLIFFactor[5][37]=0.189;					//87
	gLIFFactor[5][38]=0.2;						//88
	gLIFFactor[5][39]=0.2;						//89
	gLIFFactor[5][40]=0.2;						//90
	gLIFFactor[5][41]=0.2;						//91
	gLIFFactor[5][42]=0.2;						//92
	gLIFFactor[5][43]=0.2;						//93		
	gLIFFactor[5][44]=0.2;						//94
	gLIFFactor[5][45]=0.2;						//95
	gLIFFactor[5][46]=0.2;						//96
	gLIFFactor[5][47]=0.2;						//97
	gLIFFactor[5][48]=0.2;						//98
	gLIFFactor[5][49]=0.2;						//99
	gLIFFactor[5][50]=0.2;						//100
	
	//FD
	gLIFFactor[6]=new Array(gLIFFactorMax);
	gLIFFactor[6][0]=0.041309;					//50
	gLIFFactor[6][1]=0.041646;					//51
	gLIFFactor[6][2]=0.042008;					//52		
	gLIFFactor[6][3]=0.042400;						//53
	gLIFFactor[6][4]=0.042822;					//54
	gLIFFactor[6][5]=0.043280;					//55
	gLIFFactor[6][6]=0.043776;					//56
	gLIFFactor[6][7]=0.044314;						//57
	gLIFFactor[6][8]=0.044898;					//58
	gLIFFactor[6][9]=0.045536;					//59
	gLIFFactor[6][10]=0.046231;					//60
	gLIFFactor[6][11]=0.046992;					//61
	gLIFFactor[6][12]=0.047826;					//62
	gLIFFactor[6][13]=0.048743;					//63		
	gLIFFactor[6][14]=0.049754;					//64
	gLIFFactor[6][15]=0.050873;					//65
	gLIFFactor[6][16]=0.052115;					//66
	gLIFFactor[6][17]=0.053500;					//67
	gLIFFactor[6][18]=0.055051;					//68
	gLIFFactor[6][19]=0.056795;					//69
	gLIFFactor[6][20]=0.058770;					//70	
	gLIFFactor[6][21]=0.061019;					//71
	gLIFFactor[6][22]=0.063598;					//72		
	gLIFFactor[6][23]=0.066581;					//73
	gLIFFactor[6][24]=0.070065;					//74
	gLIFFactor[6][25]=0.074179;					//75
	gLIFFactor[6][26]=0.078884;					//76
	gLIFFactor[6][27]=0.084316;					//77
	gLIFFactor[6][28]=0.090657;					//78
	gLIFFactor[6][29]=0.098154;					//79
	gLIFFactor[6][30]=0.107154;					//80
	gLIFFactor[6][31]=0.118159;					//81
	gLIFFactor[6][32]=0.131921;					//82
	gLIFFactor[6][33]=0.149619;					//83		
	gLIFFactor[6][34]=0.173224;					//84
	gLIFFactor[6][35]=0.206279;					//85
	gLIFFactor[6][36]=0.255872;					//86
	gLIFFactor[6][37]=0.338539;					//87
	gLIFFactor[6][38]=0.503894;					//88
	gLIFFactor[6][39]=1;						//89
	gLIFFactor[6][40]=1;						//90
	gLIFFactor[6][41]=1;						//91
	gLIFFactor[6][42]=1;						//92
	gLIFFactor[6][43]=1;						//93		
	gLIFFactor[6][44]=1;						//94
	gLIFFactor[6][45]=1;						//95
	gLIFFactor[6][46]=1;						//96
	gLIFFactor[6][47]=1;						//97
	gLIFFactor[6][48]=1;						//98
	gLIFFactor[6][49]=1;						//99
	gLIFFactor[6][50]=1;						//100
	
	//NL
	gLIFFactor[7]=new Array(gLIFFactorMax);
	gLIFFactor[7][0]=0.0627;						//50
	gLIFFactor[7][1]=0.063107;					//51
	gLIFFactor[7][2]=0.063545;					//52		
	gLIFFactor[7][3]=0.064016;					//53
	gLIFFactor[7][4]=0.064523;					//54
	gLIFFactor[7][5]=0.065070;					//55
	gLIFFactor[7][6]=0.065659;					//56
	gLIFFactor[7][7]=0.066295;					//57
	gLIFFactor[7][8]=0.06983;					//58
	gLIFFactor[7][9]=0.067729;					//59
	gLIFFactor[7][10]=0.068537;					//60
	gLIFFactor[7][11]=0.069415;					//61
	gLIFFactor[7][12]=0.070370;					//62
	gLIFFactor[7][13]=0.071412;					//63		
	gLIFFactor[7][14]=0.072551;					//64
	gLIFFactor[7][15]=0.073799;					//65
	gLIFFactor[7][16]=0.075169;					//66
	gLIFFactor[7][17]=0.076678;					//67
	gLIFFactor[7][18]=0.078345;					//68
	gLIFFactor[7][19]=0.080193;					//69
	gLIFFactor[7][20]=0.082250;					//70	
	gLIFFactor[7][21]=0.084548;					//71
	gLIFFactor[7][22]=0.087129;					//72		
	gLIFFactor[7][23]=0.090042;						//73
	gLIFFactor[7][24]=0.093351;					//74
	gLIFFactor[7][25]=0.097135;					//75
	gLIFFactor[7][26]=0.101495;					//76
	gLIFFactor[7][27]=0.106566;					//77
	gLIFFactor[7][28]=0.112526;					//78
	gLIFFactor[7][29]=0.119616;					//79
	gLIFFactor[7][30]=0.128177;					//80
	gLIFFactor[7][31]=0.138700;					//81
	gLIFFactor[7][32]=0.151921;					//82
	gLIFFactor[7][33]=0.168995;					//83		
	gLIFFactor[7][34]=0.191852;					//84
	gLIFFactor[7][35]=0.223959;					//85
	gLIFFactor[7][36]=0.272256;					//86
	gLIFFactor[7][37]=0.352934;					//87
	gLIFFactor[7][38]=0.514563;					//88
	gLIFFactor[7][39]=1;						//89
	gLIFFactor[7][40]=1;						//90
	gLIFFactor[7][41]=1;						//91
	gLIFFactor[7][42]=1;						//92
	gLIFFactor[7][43]=1;						//93		
	gLIFFactor[7][44]=1;						//94
	gLIFFactor[7][45]=1;						//95
	gLIFFactor[7][46]=1;						//96
	gLIFFactor[7][47]=1;						//97
	gLIFFactor[7][48]=1;						//98
	gLIFFactor[7][49]=1;						//99
	gLIFFactor[7][50]=1;						//100
	
	
	
}
function initRIFFactor2015()
{
	gRIFFactor2015[0]=0.013888889	//18
	gRIFFactor2015[1]=0.014084507	//19
	gRIFFactor2015[2]=0.014285714	//20
	gRIFFactor2015[3]=0.014492754	//21
	gRIFFactor2015[4]=0.014705882	//22
	gRIFFactor2015[5]=0.014925373	//23
	gRIFFactor2015[6]=0.015151515	//24
	gRIFFactor2015[7]=0.015384615	//25
	gRIFFactor2015[8]=0.015625	//26
	gRIFFactor2015[9]=0.015873016	//27
	gRIFFactor2015[10]=0.016129032	//28
	gRIFFactor2015[11]=0.016393443	//29
	gRIFFactor2015[12]=0.016666667	//30
	gRIFFactor2015[13]=0.016949153	//31
	gRIFFactor2015[14]=0.017241379	//32
	gRIFFactor2015[15]=0.01754386	//33
	gRIFFactor2015[16]=0.017857143	//34
	gRIFFactor2015[17]=0.018181818	//35
	gRIFFactor2015[18]=0.018518519	//36
	gRIFFactor2015[19]=0.018867925	//37
	gRIFFactor2015[20]=0.019230769	//38
	gRIFFactor2015[21]=0.019607843	//39
	gRIFFactor2015[22]=0.02
	gRIFFactor2015[23]=0.020408163	//41
	gRIFFactor2015[24]=0.020833333	//42
	gRIFFactor2015[25]=0.021276596	//43
	gRIFFactor2015[26]=0.02173913	//44
	gRIFFactor2015[27]=0.022222222	//45
	gRIFFactor2015[28]=0.022727273	//46
	gRIFFactor2015[29]=0.023255814	//47
	gRIFFactor2015[30]=0.023809524	//48
	gRIFFactor2015[31]=0.024390244	//49
	gRIFFactor2015[32]=0.025	//50
	gRIFFactor2015[33]=0.025641026	//51
	gRIFFactor2015[34]=0.026315789	//52
	gRIFFactor2015[35]=0.027027027	//53
	gRIFFactor2015[36]=0.027777778	//54
	gRIFFactor2015[37]=0.028571429	//55
	gRIFFactor2015[38]=0.029411765	//56
	gRIFFactor2015[39]=0.03030303	//57
	gRIFFactor2015[40]=0.03125	//58
	gRIFFactor2015[41]=0.032258065	//59
	gRIFFactor2015[42]=0.033333333	//60
	gRIFFactor2015[43]=0.034482759	//61
	gRIFFactor2015[44]=0.035714286	//62
	gRIFFactor2015[45]=0.037037037	//63
	gRIFFactor2015[46]=0.038461538	//64
	gRIFFactor2015[47]=0.0400	//65
	gRIFFactor2015[48]=0.041666667	//66
	gRIFFactor2015[49]=0.043478261	//67
	gRIFFactor2015[50]=0.045454545	//68
	gRIFFactor2015[51]=0.047619048	//69
	gRIFFactor2015[52]=0.0500	//70
	gRIFFactor2015[53]=0.0528	//71
	gRIFFactor2015[54]=0.0540	//72
	gRIFFactor2015[55]=0.0553	//73
	gRIFFactor2015[56]=0.0567	//74
	gRIFFactor2015[57]=0.0582	//75
	gRIFFactor2015[58]=0.0598	//76
	gRIFFactor2015[59]=0.0617	//77
	gRIFFactor2015[60]=0.0636	//78
	gRIFFactor2015[61]=0.0658	//79
	gRIFFactor2015[62]=0.0682	//80
	gRIFFactor2015[63]=0.0708	//81
	gRIFFactor2015[64]=0.0738	//82
	gRIFFactor2015[65]=0.0771	//83
	gRIFFactor2015[66]=0.0808	//84
	gRIFFactor2015[67]=0.0851	//85
	gRIFFactor2015[68]=0.0899	//86
	gRIFFactor2015[69]=0.0955	//87
	gRIFFactor2015[70]=0.1021	//88
	gRIFFactor2015[71]=0.1099	//89
	gRIFFactor2015[72]=0.1192	//90
	gRIFFactor2015[73]=0.1306	//91
	gRIFFactor2015[74]=0.1449	//92
	gRIFFactor2015[75]=0.1634	//93
	gRIFFactor2015[76]=0.1879	//94
	gRIFFactor2015[77]=0.2	//95
	gRIFFactor2015[78]=0.2	//96
	gRIFFactor2015[79]=0.2	//97
	gRIFFactor2015[80]=0.2	//98
	gRIFFactor2015[81]=0.2	//99
	gRIFFactor2015[82]=1	//100

}
// -- RIF withdrawal schedule  - ages
function initAges()
{ 
    for ( var i = 0; i < gAgeCount; i++)
	{
	     gAges[i] = i + gMandatedAge ;
    }
}
//-- RIF withdrawal schedule  - 
//2014/10/12 update: set gmanadatedAte from 69 to 71 , so for the purpose of  keeping the same value of post1992, keep the same size of gAge,even new gmandatedage is 71,set back to 69
function initAgesNew()
{ 
  var oldGMandatedAge = gMandatedAge-2;
	for ( var i = 0; i < gAgeCount; i++)
	{
	     gAges[i] = i + oldGMandatedAge ;
  }
}
// --- 
// The pre 1992 RIF withdrawal schedule
// These figures are preset by the government
// ---
function initPre1992()
{
    gPre1992[0] = 4.76;
    gPre1992[1] = 5.00;
    gPre1992[2] = 5.26;
    gPre1992[3] = 5.56;
    gPre1992[4] = 5.88;
    gPre1992[5] = 6.25;
    gPre1992[6] = 6.67;
    gPre1992[7] = 7.14;
    gPre1992[8] = 7.69;
    gPre1992[9] = 8.33;
    gPre1992[10] = 8.53;
    gPre1992[11] = 8.75;
    gPre1992[12] = 8.99;
    gPre1992[13] = 9.27;
    gPre1992[14] = 9.58;
    gPre1992[15] = 9.93;
    gPre1992[16] = 10.33;
    gPre1992[17] = 10.79;
    gPre1992[18] = 11.33;
    gPre1992[19] = 11.96;
    gPre1992[20] = 12.71;
    gPre1992[21] = 13.62;
    gPre1992[22] = 14.73;
    gPre1992[23] = 16.12;
    gPre1992[24] = 17.92;
    gPre1992[25] = 20.00;
    gPre1992[26] = 20.00;
    gPre1992[27] = 20.00;
    gPre1992[28] = 20.00;
    gPre1992[29] = 20.00;
    gPre1992[30] = 20.00;
    gPre1992[31] = 20.00;
}

// ---
// The post 1992 RIF withdrawal schedule
// These figures are preset by the government
// ---
function initPost1992()
{
    gPost1992[0] = 4.76;
	gPost1992[1] = 5.00;
	gPost1992[2] = 7.38;
	gPost1992[3] = 7.48;
	gPost1992[4] = 7.59;
	gPost1992[5] = 7.71;
	gPost1992[6] = 7.85;
	gPost1992[7] = 7.99;
	gPost1992[8] = 8.15;
	gPost1992[9] = 8.33;
	gPost1992[10] = 8.53;
	gPost1992[11] = 8.75;
	gPost1992[12] = 8.99;
	gPost1992[13] = 9.27;
	gPost1992[14] = 9.58;
	gPost1992[15] = 9.93;
	gPost1992[16] = 10.33;
    gPost1992[17] = 10.79;
	gPost1992[18] = 11.33;
	gPost1992[19] = 11.96;
	gPost1992[20] = 12.71;
	gPost1992[21] = 13.62;
	gPost1992[22] = 14.73;
	gPost1992[23] = 16.12;
	gPost1992[24] = 17.92;
	gPost1992[25] = 20.00;
	gPost1992[26] = 20.00;
	gPost1992[27] = 20.00;
	gPost1992[28] = 20.00;
	gPost1992[29] = 20.00;
	gPost1992[30] = 20.00;
	gPost1992[31] = 20.00;
}



// ---
// The payment fraction rule. The formula used to calculate the minimum if the applicant
// is below 69 years
// -- 
function paymentsFraction(appAge)
{

    var age = parseFloat(appAge);
	if ( age < gCutOffAge ) 
	{
	    //alert ( "Age -> " + age );
		//alert ( "Cut off->" + gCutOffAge);
		
	    return ( 1.0 / ( gCutOffAge - age ));
	}
	else
	{
		//alert("FIXME: Confirm how age " + age + " should be handled");
		return (0);
    }
}

// ---
// The RIF withdrawal schedule. This is the mandated mininum withdrawal % contained
// in a table based on age and plan start date. The minimum age defined in the table
// is 69 and there are two types of plans pre- and post-1992 due to changes in legislation
// ---
function findWDSchedule(age, fundsPost1992)
{
   var pos = -1;  //Use a sentinel for values
   var val = 0.0;
   for ( var i = 0; i < gAgeCount; i++)
   {   
      var m_age = gAges[i];
      //alert("Table: " + m_age + " Incoming: " + age);
      
      if ( age == m_age ) 
	  {
	     pos = i;
		 break;
	  }
   }
   
   // Use the index to locate percentage
   if ( pos == -1 )
   {  
      //alert("The age " +  age + " is not within the range 69 - 100 ");
	   return (20.0); //Default percent for any age above 100
   }
   
   if (fundsPost1992 == "yes" || fundsPost1992 == "true")
   {
         val = gPost1992[pos];
   }
   else {
         val = gPre1992[pos];
   }
   return val;   
}


// ---
// The actual percentage used to calculate minimum withdrawal allowed. If the
// applicant is under the age of 69 use the payment fractions rule, otherwise
// use the RIF withdrawal schedule percentage
// ---
function rifWithdrawalPercent(age, fundsPost1992)
{
      //alert("Age: " + age);
      var val = 0.0;
      if ( age < gMandatedAge )
	  {
         val = paymentsFraction(age);
	  }
	  else
	  {
	    val = percent(findWDSchedule(age, fundsPost1992));
	  }
      //alert("Age-> " + age +" percent-> " + percent);
      console.log("age is "+age+" rifWithdrawalPercent is "+val);
	  return (val);
}

// ---
//  Interest factor for the remainder of year 1
// ---
function yearOneIntrFactor( currentDate, expectedROR)
{  
	var daysLeftInYear1 = daysLeftInYear (currentDate);
	var daysInYear1 = getNumberOfDaysInYear(currentDate);
	//alert ("Current date-> " + currentDate);
	//alert ("ROR->" + expectedROR);
	console.log("issueDate for yearOneIntrFactor"+currentDate+" daysLeftInYear1:"+daysLeftInYear1+" daysInYear1:"+daysInYear1);
    var interestFactor = expectedROR  * (daysLeftInYear1 / daysInYear1 );	
	return interestFactor;
}


// ---
// The opening value of the Plan as of Jan 1st year two. This
// will include interest accrued for the partial year.
// ---
function yearOneRIFValue(startingBal, year1IntrFactor)
{
  //alert( "Starting Balance-> " + startingBal);
  //alert("Year One Interest Factor->" + year1IntrFactor);
  var result = startingBal * ( 1.0 + year1IntrFactor) ;   
   return ( result );  
}

// ---
// RIF Value. The opening value of the Plan as of Dec 31st that year
// ---
function calculateRIFValue(startingBal, expectedROR, rifWithdrawalAmt)
{ 
  //  alert ( "starting bal->" + startingBal + " rif with amt-> " +rifWithdrawalAmt );
    var result = startingBal * ( 1.0 + expectedROR ) - rifWithdrawalAmt;
    return result;
}


// ---
// RIF Minimum withdrawal. The minimum amount that must be withdrawn from the plan each
// year as mandated by government rules. Any amount in excess of this will be subject to
// provincial withholding tax.
// ---
function rifWithdrawalMinimum(startingBalance, rifWPercent)
{
    var result = new Number(startingBalance) * new Number(rifWPercent);
	return result;
}


// ---
// RIF Withdrawal Amount. This is dependent on the type of withdrawal. The applicant has
// three choices - Minimum, Percentage, or Amount
// ---
function rifWithdrawalAmount(selectionType, startingBalance, amount, rifIntrFactor, withdrawalPercent, toAge, currentAge)
{
   var withdAmount = 0.0;
   
   //alert ("Selection type: " + selectionType);
   //alert ("Amortization: " + amortizedPayment);
   if ( selectionType == gMIN )
   {
	   withdAmount = rifWithdrawalMinimum(startingBalance, rifIntrFactor);
   }else if ( selectionType == gMAX )
   { 
       withdAmount = startingBalance * withdrawalPercent;
       //alert("Percent - selection type - amount -" + withdAmount);
   }
   else if ( selectionType == gPERCENT )
   { 
       withdAmount = startingBalance * withdrawalPercent;
       //alert("Percent - selection type - amount -" + withdAmount);
   }
   else if ( selectionType == gSET_AMOUNT )
   {
       withdAmount = amount;
   }       
   else if ( selectionType == gAMORTIZED )
   {
       //alert(selectionType);
       //alert(firstTimeAmortz);
        withdAmount = calculateRegularAmortization(startingBalance, toAge, currentAge);
   }
   
   //alert(withdAmount);
   
   return (withdAmount);
}


//---
// Calculate regular amortization. This is the normal amortization
// after first year amortization has been calculated.
//---
function calculateRegularAmortization(startingBalance, lastAge, currentAge)
{
    var sBal = parseFloat(startingBalance);
    var lAge = parseFloat(lastAge);
    var cAge = parseFloat(currentAge);
    if (lAge == cAge )
    {
       return 0.0;
    }
    
    var result = sBal/(lAge - cAge - 1.0);
    return result;
}

// Returns the plan description based on the selection type

function  getPlanDescr(selectionType)
{
     
     //alert ("Amortization: " + amortizedPayment);
     if ( selectionType == gMIN )
     {
  	   return "MINIMUM";
     }
     else if ( selectionType == gSET_AMOUNT )
     {
         return "FIXED AMOUNT";
     }else if ( selectionType == gMAX )
     {
         return "MAXIMUM";
     }        
     return "UNKNOWN";
}


// ---
// Taxable Amount. The amount of withdrawal that is in excess of the minimum
// ---
function taxableAmount(rifWDAmount, rifMinAmount)
{
   return (rifWDAmount - rifMinAmount);
}

// ---
// Withholding tax amount. The amount of tax payable based on  applying a tax rate
// to the taxable amount. Based on a range and the province of residence since
// Quebec has a different rate than the other provinces.
// ---
function withHoldingTax(taxableAmount, taxRate)
{
    return ( taxableAmount * taxRate );
}


// --- 
// Calculate Quebec tax
// ---
function quebecTaxSchedule(amount)
{
    if ( amount >= 0.0 && amount <= 5000.0 )
	{
	    return (0.21);
	}
	else if ( amount > 5000.0 && amount <= 15000.0  )
	{
	    return (0.30);
	}
	else 
	{
	   return (0.35);
	}
}


// -- Calculate Non Quebec Tax
function canadaTaxSchedule(amount)
{
    
    if ( amount >= 0.0 && amount <= 5000.0 )
	{
	    return (0.10);
	}
	else if ( amount > 5000.0 && amount <= 15000.0  )
	{
	    //alert("Amount to withdraw: " + amount);
	    return (0.20);
	}
	else 
	{
	   return (0.30);
	}
}

// --- 
// Calculate taxable amount
// ---
function calculateTax(amount, province)
{
   var tax = 0.0;
   var taxrate = 0.0;
    
   if ( province != gQUEBEC )
   {
       //alert("[calculateTax] + amount: " + amount); 
       taxrate =  canadaTaxSchedule(amount);
   }
   else
   {
       taxrate = quebecTaxSchedule(amount);
   }
   tax = withHoldingTax(amount, taxrate);
   
   return (tax);
}

//---
// This calculates the first amortization of the series. The first
// amortization calculates growth due to improvement in the 
//
//---
function calculateAmortization(openingBalance, expROR, period, years)
{
    var result = 0.0;
    var interestRate = expROR / period;
    
    var totalYears = period * years;
    var compdIntr = Math.pow((1.0 + interestRate), totalYears);
    var tempOne = openingBalance * compdIntr * interestRate;
    
    var tempTwo = compdIntr - 1.0;
    result = tempOne / tempTwo;

    //alert("Amortized Payment: " + result);
    
    return result;

}

// ---
// Net Amount of withdrawal. The net amount of payment after applicable taxes have
// been withheld.
// ---
function netAmountWithdrawal(rifWdAmount, withHoldingTx)
{
     return (rifWdAmount - withHoldingTx);
}




// --
// Process the payment selection type. Converts the string to int values
// FIXME. It might be better to use a simple lookup table here
//
// --- 
function identifySelectionType(str)
{
    if ( str == "MIN" )
	{
	   return gMIN;
	}
	else if ( str == "FIXED" )
	{
	   return gSET_AMOUNT;
	}else if( str== "MAX")
	{
		   return gMAX;
		}
	else
	{
	   return alert("You must select a payment type");
	}
}

// ---
// Identify the client's residence for tax purposes
// ---
function evaluateResidence(value)
{    
   var prov = "";
   
   if ( value == "yes" )
   {
      prov = gQUEBEC;
   }
   else
   {
     prov = gCANADA;
   }
   return prov;
 }

function prepareRIFPercent(str)
{ 
    //alert(str);
    var val = str;
    if ( isNaN(str) )
    { 
       val = extractLastSign(str, "%");
    }
    if ( val.lastIndexOf(",") != - 1 )
    {
        var tempStr2  = tempStr.split(",");
        tempStr = tempStr2.join("");
        
    }
    result = val/100.0;
    return result;
}
function runRIFGraph(myForm){
	console.log("send request to backend");
	/*var jsonString =  "[{\"age\":\"60\",\"value\":\"0\"},{\"age\":\"62\",\"value\":\"0\"},{\"age\":\"64\",\"value\":\"0\"}," +
	"{\"age\":\"66\",\"value\":\"50000\"},{\"age\":\"68\",\"value\":\"50000\"},{\"age\":\"70\",\"value\":\"47500\"},{\"age\":\"72\",\"value\":\"46000\"},{\"age\":\"74\",\"value\":\"45000\"}," + 
	"{\"age\":\"76\",\"value\":\"43000\"},{\"age\":\"78\",\"value\":\"41000\"},{\"age\":\"80\",\"value\":\"40000\"},{\"age\":\"82\",\"value\":\"38000\"},{\"age\":\"84\",\"value\":\"35000\"}," + 
	"{\"age\":\"86\",\"value\":\"30000\"},{\"age\":\"88\",\"value\":\"26000\"},{\"age\":\"90\",\"value\":\"21000\"},{\"age\":\"92\",\"value\":\"10\"},{\"age\":\"94\",\"value\":\"11000\"}," + 
	"{\"age\":\"96\",\"value\":\"8000\"},{\"age\":\"98\",\"value\":\"6000\"}," +
	"{\"age\":\"100\",\"value\":\"0\"},{\"age\":\"102\",\"value\":\"0\"},{\"age\":\"104\",\"value\":\"0\"}," + 
	"]";*/
	var rifObjectJsonString;
	
	if(rifArray.length>0){
		
		rifObjectJsonString=JSON.stringify(rifArray);
		console.log(rifObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/genRifCalcImage.action?lang=fr&planType=FERR", 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: rifObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		        $("#calcImageID").attr("src","data:image/gif;base64," + data);
		       // console.log(data);
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});
	}

	
	
}


function runLIFGraph(myForm){
	console.log("send request to backend");
	/*var jsonString =  "[{\"age\":\"60\",\"value\":\"0\"},{\"age\":\"62\",\"value\":\"0\"},{\"age\":\"64\",\"value\":\"0\"}," +
	"{\"age\":\"66\",\"value\":\"50000\"},{\"age\":\"68\",\"value\":\"50000\"},{\"age\":\"70\",\"value\":\"47500\"},{\"age\":\"72\",\"value\":\"46000\"},{\"age\":\"74\",\"value\":\"45000\"}," + 
	"{\"age\":\"76\",\"value\":\"43000\"},{\"age\":\"78\",\"value\":\"41000\"},{\"age\":\"80\",\"value\":\"40000\"},{\"age\":\"82\",\"value\":\"38000\"},{\"age\":\"84\",\"value\":\"35000\"}," + 
	"{\"age\":\"86\",\"value\":\"30000\"},{\"age\":\"88\",\"value\":\"26000\"},{\"age\":\"90\",\"value\":\"21000\"},{\"age\":\"92\",\"value\":\"10\"},{\"age\":\"94\",\"value\":\"11000\"}," + 
	"{\"age\":\"96\",\"value\":\"8000\"},{\"age\":\"98\",\"value\":\"6000\"}," +
	"{\"age\":\"100\",\"value\":\"0\"},{\"age\":\"102\",\"value\":\"0\"},{\"age\":\"104\",\"value\":\"0\"}," + 
	"]";*/
	var lifObjectJsonString;
	
	if(lifArray.length>0){
		
		lifObjectJsonString=JSON.stringify(lifArray);
		console.log(lifObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/genRifCalcImage.action?lang=fr&planType=FRV", 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: lifObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		        $("#calcImageID").attr("src","data:image/gif;base64," + data);
		       // console.log(data);
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});
	}

	
	
}


function runTFSAGraph(myForm){
	console.log("send request to backend");
	/*var jsonString =  "[{\"age\":\"60\",\"value\":\"0\"},{\"age\":\"62\",\"value\":\"0\"},{\"age\":\"64\",\"value\":\"0\"}," +
	"{\"age\":\"66\",\"value\":\"50000\"},{\"age\":\"68\",\"value\":\"50000\"},{\"age\":\"70\",\"value\":\"47500\"},{\"age\":\"72\",\"value\":\"46000\"},{\"age\":\"74\",\"value\":\"45000\"}," + 
	"{\"age\":\"76\",\"value\":\"43000\"},{\"age\":\"78\",\"value\":\"41000\"},{\"age\":\"80\",\"value\":\"40000\"},{\"age\":\"82\",\"value\":\"38000\"},{\"age\":\"84\",\"value\":\"35000\"}," + 
	"{\"age\":\"86\",\"value\":\"30000\"},{\"age\":\"88\",\"value\":\"26000\"},{\"age\":\"90\",\"value\":\"21000\"},{\"age\":\"92\",\"value\":\"10\"},{\"age\":\"94\",\"value\":\"11000\"}," + 
	"{\"age\":\"96\",\"value\":\"8000\"},{\"age\":\"98\",\"value\":\"6000\"}," +
	"{\"age\":\"100\",\"value\":\"0\"},{\"age\":\"102\",\"value\":\"0\"},{\"age\":\"104\",\"value\":\"0\"}," + 
	"]";*/
	var tfsaObjectJsonString;
	
	if(tfsaArray.length>0){
		
		tfsaObjectJsonString=JSON.stringify(tfsaArray);
		console.log(tfsaObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/genRifCalcImage.action?lang=fr&planType=CELI", 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: tfsaObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		        $("#calcImageID").attr("src","data:image/gif;base64," + data);
		       // console.log(data);
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});
	}

	
	
}

function generateCalculatorReport(userRole,planType){
	
	if("INV"==userRole){
		window.open('/t2scr/static/app/tools/rifcalc/CALCULATRICE_DE_FERR.action?lang=fr&cmdString=generatePDF&planType='+planType,'_blank');
	}else{	
		var isOpen = $('.pdfPortionClientInfomation').dialog('isOpen');
		if(isOpen){
	    	$('.pdfPortionClientInfomation').dialog('close');
	    }
		
		$(".pdfPortionClientInfomation").dialog({
			position:		{my:"center", at:"center", of: window},
		   	modal: 			true,
			resizable: 		false,
			draggable: 		false,
			minWidth:       "350",
			width: 			"350",
			minHeight:      "220",
			height: 		"220",
			dialogClass:	"account-detail-pdf-option-dialog-style"
		});
	}
}
//
// ---
// This method is called by the html forms. It checks that inputs are valid,
// converts them from text to appropriate items, and then call the RIF calculator. The
// RIF calculator expects correct data type
// ---
function runRIF(myForm)
{
	console.log("run it");
	queryParameters=null;
	//parse date of birth
   var dob=myForm.txtBirthDate.value;
   
   var dateOfBirth;
   var dateOfBirthSpouse;  
   if(dob!=""){
	    dateOfBirth = stringToDate2015(dob);
   }

   
   var issdate=myForm.txtIssueDate.value;
   var issueDate=stringToDate2015(issdate);
   console.log("issueDate"+issueDate+"dateOfBirth"+dateOfBirth);
   
   if (issueDate == null || issueDate == false)
   {
      myForm.txtIssueDate.focus();
      return false;
   }
   /*issue log 398 remove the firstPayDate field and using getSmartFirstPaymentDate function instead
    * var firstPayDateTxt=myForm.firstPayDate.value;
   var firstPayDate=stringToDate2015(firstPayDateTxt);
   if (firstPayDate == null || firstPayDate == false)
   {
      myForm.firstPayDate.focus();
      return false;
   }*/
   var expectedROR=prepareFrenchPercent(myForm.txtROR.value);
   var adjustedROR=getAdjustedROR(expectedROR);
   console.log("adjustedROR "+adjustedROR);
   var lastAge = prepareFrenchNumber("100");
   var startingBalance = prepareFrenchNumber(myForm.txtPlanValue.value);
   
  
   var selectionType = identifySelectionType(myForm.paymentType.value);
   
   //FIXME - Code this within the form
   var period = prepareFrenchNumber(myForm.paymentFreq.value);
   console.log("period is "+period);
   // alert ("Period: " + period);
   paymentFreqName="";
   for ( i = 0; i < MAP_SIZE; i++)
   { 
   		if(parseFloat(gPeriodValue[i])==parseFloat(period)){
   			paymentFreqName = gPeriods[i];
   		}	  
   }
   var firstPayDate=getSmartFirstPaymentDate2015(issueDate,period);
   console.log("firstPayDate:"+firstPayDate);
   var deductWHT=myForm.deductWithTax.value;
   console.log("deductWHT"+deductWHT);
   if(deductWHT=="true"){
	   var province = evaluateResidence(myForm.quebecResident.value);
   }else{ 
	   var province = evaluateResidence("no"); 
   }

   //alert(province);
   
   var post1992 ;
   //alert(post1992);
   
   var annualWithPercent=0.0;
   var annualWithAmount=0.0;


   annualWithAmount=prepareFrenchNumber(myForm.txtAmount.value);
   var minimumAssume=preRIFCalculator2015(dateOfBirth, adjustedROR, lastAge, issueDate, firstPayDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period);
   console.log("pre calculation:"+minimumAssume+" annualWithAmount "+annualWithAmount+" selectionType "+selectionType);
   console.log("dateOfBirth"+ dateOfBirth+"adjustedROR"+adjustedROR+"lastAge"+lastAge+"issueDate"+issueDate+"firstPayDate"+firstPayDate+"startingBalance"+startingBalance+"selectionType"+selectionType+"deductWHT"+deductWHT+"annualWithPercent"+annualWithPercent+"annualWithAmount"+annualWithAmount+ "post1992"+post1992+"province"+province+"period"+period);
   queryParameters="&issueDate="+issdate+"&startBalance="+startingBalance+"&DOB="+dob+"&quebecResident="+myForm.quebecResident.value+"&paymentType="+myForm.paymentType.value+"&paymentFrequency="+paymentFreqName+"&deductWHT="+deductWHT+"&ror="+myForm.txtROR.value;

   if(selectionType==1){
	   //if payment Type is Annual dollar amount, then will compare the annual withdrawal amount with minimum amount,
	   //if annual withdrawal amount< minimum, then show the minimum result
	   if(parseFloat(annualWithAmount)<parseFloat(minimumAssume)){
		   rifCalculatorRedesign2015(dateOfBirth, adjustedROR, lastAge, issueDate, firstPayDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,true);
	   }else{
		   rifCalculatorRedesign2015(dateOfBirth, adjustedROR, lastAge, issueDate, firstPayDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false);
	   }
   }else{
   		rifCalculatorRedesign2015(dateOfBirth, adjustedROR, lastAge, issueDate, firstPayDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false);
	}
   
// Build table sorter pagination sector
   console.log("queryParameters="+queryParameters);
   console.log("rifTableArray size is "+rifTableArray.length);
   var table_size=parseInt(rifTableArray.length);
   var perPageOptions ="";
 
   $('#calculator-result-body').html(calcSummaryTableStr + rifSummary);
   if(calcSummaryTableErrorStr!=""){
	   $('#calculationError').html(calcSummaryTableErrorStr);
	   $('#doShowSummaryError').val('true');
	   $('#calculationError').show();
	   $('.summarylabel').removeClass('pb10');
	   $('.summarylabel').addClass('pb3');
	   
   }else{
	   $('#doShowSummaryError').val('false');
	   $('#calculationError').hide();
   }
   if(table_size == 0){
	   $("#rif-calculator-pager").attr("style","display: none");
	   $("#result_summary_container").addClass("noValue");
	   $('#rif-calculator-result-table').html(resultTableStr);
   }else{
	   if(table_size<=10){
	 	 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option>";
	  }else if(table_size>10&&table_size<=20){
		 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option>";
	  }else{
	  //table_size>20
	  	perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option><option value='30'>30</option>";
	  }
	   var paginationString = '<table  width="100%" cellpadding="0" cellspacing="0"><tr><td class="table-container-header-sub-title" width="20%"></td><td class="table-container-header-pager pb10" width="80%" align="right" valign="bottom"><table border="0" cellpadding="0" cellspacing="0"><tr><td><div id="rifCalculatorResultPager" class="pagerAGFRedesign pager rifCalculatorPagerForNoneIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pt8 pr5"><span id="prevButton" class="prev clickable dib vam pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="pagesID"><span>Pages:</span><select class="gotoPage select" id="gotoPageID" style="width: 57px;"></select></td><td class="pt5 pr5"><ul  class="pagecount" > </ul></td><td class="pt8 pr25"><span id="nextButton" class="next clickable dib vam pager-text" >Suivant > </span></td><td class="pt4"><select class="pagesize select" id="perPageID" style="width: 57px;" >'+perPageOptions+'</select><span class="pl5 perPage"> par page</span></td></td></tr></table></div><div id="rifCalculatorResultPager" class="pagerAGFRedesign pager rifCalculatorPagerForIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pr5 vam"><span id="prevButton" class="prev clickable pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="pagesID"><select class="gotoPage select" id="gotoPageID" style="width: 57px;"></select></td><td class="pr5"><ul  class="pagecount" style="vertical-align:3px" > </ul></td><td class="pr25 vam"><span id="nextButton" class="next clickable pager-text" >Suivant ></span></td><td class="pr5 pt5"><select class="pagesize select" id="perPageID" style="width: 57px;" >'+perPageOptions+'</select></td><td class="vam"><span class="perPage"> par page</span></td></tr></table></div></td></tr></table></td></tr></table>';
	
	   
	   $('#rif-calculator-pager').html(paginationString);
	   $('#rif-calculator-result-table').html(resultTableStr);
	
	  
	
	   if (!!document.documentMode) {	
		//ie
			$(".rifCalculatorPagerForNoneIE").remove();
		}else{
	
			$(".rifCalculatorPagerForIE").remove();
		}
	   
	   var pagerOptions = {
			// target the pager markup - see the HTML block below
			container: $("#rifCalculatorResultPager"),
	
			// use this url format "http:/mydatabase.com?page={page}&size={size}"
			ajaxUrl: null,
	
			// process ajax so that the data object is returned along with the total number of rows
			// example: { "data" : [{ "ID": 1, "Name": "Foo", "Last": "Bar" }], "total_rows" : 100 }
			ajaxProcessing: function(ajax){
				if (ajax && ajax.hasOwnProperty('data')) {
					// return [ "data", "total_rows" ];
					return [ ajax.data, ajax.total_rows ];
				}
			},
	
			// output string - default is '{page}/{totalPages}'
			// possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
			output: '{startRow} to {endRow} ({totalRows})',
	
			// apply disabled classname to the pager arrows when the rows at either extreme is visible - default is true
			updateArrows: true,
	
			// starting page of the pager (zero based index)
			page: 0,
	
			// Number of visible rows - default is 10
			size: 10,
	
			// if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
			// table row set to a height to compensate; default is false
			fixedHeight: true,
	
			// remove rows from the table to speed up the sort of large tables.
			// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
			removeRows: false,
	
			// css class names of pager arrows
			cssNext: '.next', // next page arrow
			cssPrev: '.prev', // previous page arrow
			cssFirst: '.first', // go to first page arrow
			cssLast: '.last', // go to last page arrow
			cssGoto: '.gotoPage', // select dropdown to allow choosing a page
	
			//cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
			cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option
	
			// class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
			cssDisabled: 'disabled' // Note there is no period "." in front of this class name
	
		};
	   
	   //Tablesorter config 
		$("#tablesorter_rifcalculatorbox")
			.bind("pagerInitialized pagerComplete",function(e,c) { 
				 var i, pages = '', t = [],
		         cur = c.page + 1,
		         start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
		         end = cur < 3 ? 5 - cur : 2;
		         for (i = start; i < end; i++) {
				         if (cur + i >= 1 && cur + i < c.totalPages) { t.push( cur + i ); }
				     }
				        // make sure first and last page are included in the pagination
				        if ($.inArray(1, t) === -1) { t.push(1); }
				        if ($.inArray(c.totalPages, t) === -1) { t.push(c.totalPages); }
				        // sort the list
				        t = t.sort(function(a, b){ return a - b; });
				        // make links and spacers
				        $.each(t, function(j, v){
				            pages += '<li id="' + v + '"><a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a></li>';
				           // pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : ' | ' );
				           	pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ?'<li id="' + (j==0?'p':'n') + '"><a href="#" >' + '...' + '</a></li>' : ( j >= t.length - 1 ? '' : '  ' );
				           
				            // console.log("cur:"+cur+" v:"+v+" j:"+j+" t[j+1]:"+t[j+1]+" tlength:"+ t.length);
				             
				        });
				        $('.pagecount').html(pages);
			})
			.tablesorter({
				theme: 'default',
				widthFixed: true,
				headers:{
					0: {sorter: false},
					1: {sorter: false},
					2: {sorter: false},
					3: {sorter: false},
					4: {sorter: false},
					5:{sorter: false}, 
					6:{sorter: false}, 
					7:{sorter: false},
					8:{sorter: false},
					9:{sorter: false}
					},
				widgets: ['zebra']
			})
	   .tablesorterPager(pagerOptions)
		.bind("pageMoved",function() { 
			$("#gotoPageID").multiselect('refresh');
			 }); 
	   
		$("#perPageID").multiselect({
			height:				"auto",
			minWidth:			50,
			multiple: 			false,
			header:				false,
			selectedList: 		1,		
			classes:			"custom-pager-select custom-menu perPageID",
			beforeopen: function() {
				// to fix position issue in IE 8
				if($.browser.msie && ($.browser.version <= 8)) {
					globalTempScrollTop = document.documentElement.scrollTop;
					window.scrollTo(0,0);							
				}					
			},					
			open: function() {
				$("button.perPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');
	
				// to fix position issue in IE 8
				if($.browser.msie && ($.browser.version <= 8)) {
					document.documentElement.scrollTop = globalTempScrollTop;
				}					
			},	
			close: function() {
				$("button.perPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
			}			
		});
		$("button.perPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
		setTimeout(function() {$("#perPageID").next('button.ui-multiselect').width(50);},15);
		
		
	    $("#gotoPageID").multiselect({
			height:				"auto",
			minWidth:			50,
			multiple: 			false,
			header:				false,
			selectedList: 		1,		
			classes:			"custom-pager-select custom-menu gotoPageID",
			beforeopen: function() {
				// to fix position issue in IE 8
				if($.browser.msie && ($.browser.version <= 8)) {
					globalTempScrollTop = document.documentElement.scrollTop;
					window.scrollTo(0,0);							
				}					
			},					
			open: function() {
				$("button.gotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');
	
				// to fix position issue in IE 8
				if($.browser.msie && ($.browser.version <= 8)) {
					document.documentElement.scrollTop = globalTempScrollTop;
				}					
			},	
			close: function() {
				$("button.gotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
			}			
		});
		$("button.gotoPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
		setTimeout(function() {$("#gotoPageID").next('button.ui-multiselect').width(50);},15);
		
		
		$("#perPageID").change(function () {	
		 	$("#gotoPageID").multiselect('refresh');
		 	$("#rif-calculator-result-container").css("height","auto");
		 	
		 	
	
		});	
		
		$('.pager .pagecount').bind('click', 'a', function(e){
		    //console.log("click11");
		    e.preventDefault();
		    var parentNode=$(e.target).parent(); 
		     
			console.log($(parentNode).attr("id"));
	
			var pageNumber=$(parentNode).attr("id");	
			var pg;	
			var pgindex;	
			var currentPageParentNode=$(".current").parent();
			var currentPageNumber=$("#gotoPageID").val();					
			if(pageNumber.indexOf("p")!=-1){
				//previous action
				console.log("previous "+currentPageNumber);
				pg=parseInt(currentPageNumber)-1;
				pgindex=$("#gotoPageID option[value="+pg+"]").index();
			}else if(pageNumber.indexOf("n")!=-1){
				//next action
				console.log("next "+currentPageNumber);
				pg=parseInt(currentPageNumber)+1;
				pgindex=$("#gotoPageID option[value="+pg+"]").index();
				
			}else{
				console.log("normal");
				pg=parseInt(pageNumber);
				pgindex=$("#gotoPageID option[value="+pg+"]").index();
			}
			console.log("currentpg "+pg+" pgindex "+pgindex);		
			$("#gotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
		   	$("#gotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
			$("#gotoPageID").multiselect('refresh');
			$('#gotoPageID').trigger("change");
	    });
		$("#pagesID").attr("style","display: none");
   }
}




function beginRIFBody()
{
  document.write("<BODY BGCOLOR='#ffffff' MARGINWIDTH='5' MARGINHEIGHT='5' LEFTMARGIN='5' TOPMARGIN='5'>");
  document.write("<TABLE WIDTH='100%' CELLSPACING='0' CELLPADDING='0' BORDER='0'>");
  document.write("<TR>");
  document.write("<TD> <TABLE WIDTH='100%' class='page-header-table'><TR><TD class='page-header-td'>RIF Illustrator</TD></TR></TABLE></TD>");
  document.write("</TR>");
  document.write("<TR><TD>&nbsp;</TD></TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='100%'><P CLASS='textpad-notopmarg' align='right'>");
  document.write("<A CLASS=\"underline\" href='javascript:showHelp()'><img src=\"image/help.gif\" border=\"0\">Aide</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<A CLASS=\"underline\" href='rifcalc.zip'><img src=\"image/download.gif\" border=\"0\">Download</A>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<A CLASS=\"underline\" HREF=\"#\" ONCLICK=\"decreaseFontSize();return false;\"><img src=\"image/font_minus.gif\" border=\"0\">Font</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<A CLASS=\"underline\" HREF=\"#\" ONCLICK=\"increaseFontSize();return false;\"><img src=\"image/font_plus.gif\" border=\"0\">Font</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");
  document.write("<a CLASS=\"underline\" href=javascript:window.print()><img src='image/btn_print.gif' border='0'> Print</a>");
  document.write("<img src=\"images/dot.gif\" border=\"0\" height=\"1\" width=\"20\">");  
  document.write("</P></TD>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='100%'><P CLASS='textpad-notopmarg'>This calculator determines the income stream available for a Registered Income Fund in retirement.</P></TD>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='100%' align='center'>");
  // document.write("<table width='80%' border='0' cellpadding='0' cellspacing='10'>");
  document.write("<TABLE WIDTH='100%' CELLSPACING='0' CELLPADDING='0' BORDER='1' BORDERCOLOR='#DCDCDC'>");
  document.write("<tr>");
  document.write("<TD COLSPAN='12' class='headpad-gray-px11-subheader'>RIF ILLUSTRATOR RESULTS</td>");
  document.write("</tr>");
  document.write("<TR><TD COLSPAN='12'><IMG SRC='image/dot.gif' WIDTH='1' HEIGHT='5' ALT='' BORDER='0'></TD</TR>");
  //document.write("</table>");
  //document.write("<table width='100%' border='0' cellpadding='0' cellspacing='0'>");
  //document.write("<TR>");
  //document.write("<TD BGCOLOR='#E6E5E5'>");
  //document.write("<table width='100%' border='0' cellpadding='1' cellspacing='1'>");
}


function endRIFBody()
{
 // document.write("</TD>");
  //document.write("</TR>");
 // document.write("</TABLE>");
  document.write("</TD>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD WIDTH='780'>");
  document.write("<TABLE WIDTH='600' CELLSPACING='0' CELLPADDING='0' BORDER='0' ALIGN='center'>");
  document.write("<TR>");
  document.write("<TD COLSPAN='13'><IMG SRC='image/dot.gif' WIDTH='1' HEIGHT='40' ALT='' BORDER='0'></TD>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("</TR>");
  document.write("<TR>");
  document.write("<TD COLSPAN='13'><IMG SRC='image/dot.gif' WIDTH='1' HEIGHT='10' ALT='' BORDER='0'></TD>");
  document.write("</TR>");
  document.write("</TABLE>");
  document.write("</BODY>");
}


function writeTbody()
{
	resultTableStr += "<tbody>";
}

function endTbody()
{
	resultTableStr += "</tbody>";
}


function writeRRIFHeader2015()
{
	
	   
       beginHeaderRow();
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-top' colspan='3' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'>Date</div>"; 
       resultTableStr += "</th>";
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-top last-table-data-head-cell' colspan='4' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'>Paiement</div>"; 
       resultTableStr += "</th>";
       
       endRow();
       beginRow();
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' rowspan='2' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Ann&#233;e</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>&#194;ge</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Valeur ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Taux de retrait minimum du<br>FERR (%)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Montant annuel ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Retenue<br>d'imp&#244;t ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom last-table-data-head-cell'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Montant net<br>par p&#233;riode ($)</div>";
       resultTableStr += "</th>";
       
       endHeaderRow();
      

}

function writeLIFHeader2015()
{
	
	   
       beginHeaderRow();
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-top' colspan='3' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'>Date</div>"; 
       resultTableStr += "</th>";
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-top last-table-data-head-cell' colspan='5' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'>Paiement</div>"; 
       resultTableStr += "</th>";
       
       endRow();
       beginRow();
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' rowspan='2' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Ann&#233;e</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>&#194;ge</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Valeur ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n' style='padding-left:10px'>Taux de retrait minimum du<br>FRV (%)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n' style='padding-left:10px'>Taux de retrait maximum du<br>FRV (%)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n' style='padding-left:10px'>Montant <br>annuel ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Retenue d'imp&#244;t ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom last-table-data-head-cell'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Montant net<br>par p&#233;riode ($)</div>";
       resultTableStr += "</th>";
       
       endHeaderRow();
      

}

function writeTFSAHeader2015()
{
	
	   
       beginHeaderRow();
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-top' colspan='2' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'>Date</div>"; 
       resultTableStr += "</th>";
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-top last-table-data-head-cell' colspan='3' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'>Paiement</div>"; 
       resultTableStr += "</th>";
       
       endRow();
       beginRow();
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' rowspan='2' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Ann&#233;e</div>";
       resultTableStr += "</th>";
       
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Valeur ($)</div>";
       resultTableStr += "</th>";
             
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Retour des<br>investissements ($)</div>";
       resultTableStr += "</th>";
             
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom' >";
       resultTableStr += "<div class='table-data-head-cell-div fs11n' style='padding-left:10px'>Montant annuel ($)</div>";
       resultTableStr += "</th>";
       
       resultTableStr += "<th class='table-data-head-cell table-data-head-cell-colspan-bottom last-table-data-head-cell'>";
       resultTableStr += "<div class='table-data-head-cell-div fs11n'  style='padding-left:10px'>Montant net<br>par p&#233;riode ($)</div>";
       resultTableStr += "</th>";
       
       endHeaderRow();
      

}
function writeLinks(title, link)
{

 // alert("<a href= \"" + link + "\">" + title + "</a>");
  document.write("<a href=\"/" + link +"\">" + title +"</a>");
  
  
}

// Print a new line for the specified number of times
function newLine(times)
{

   var loopEnd = 0.0;
   var val = parseInt(times);
   // alert (val);
   if ( isNaN(val) == true )
   {
       loopEnd = 1.0;
   }
   
   for ( i = 0 ; i < loopEnd; i++ )
   {
          document.write("<br>");
   }
}

function beginTable() {
	
	resultTableStr += "<table>";
	
}
//-- 
// End the table tag
//-- 
function endTable()
{
   resultTableStr += "</table>";
}

function beginRow(rowClass)
{
	if(rowClass){
		resultTableStr += "<tr class='"+rowClass+"'>";
	}else
		resultTableStr += "<tr>";
}

function beginHeaderRow()
{
  //resultTableStr += "<tr VALIGN='top' bgcolor='#FFCC66'>";
  resultTableStr += "<thead class='table-data-head-row'><tr>";
  
}

function beginRowWhite()
{
  resultTableStr += "<tr class='data-row-white'>";
}

function beginRowGray()
{
  resultTableStr += "<tr class='data-row-gray'>";
}

function endRow()
{
  resultTableStr += "</tr>";
}

function endHeaderRow()
{
  resultTableStr += "</tr></thead>";
}

function beginHeaderRowData(cellClass)
{
	if(cellClass){
		resultTableStr += "<th class='"+cellClass+"'>";
	}else
		resultTableStr += "<th class='table-data-head-cell'>";
	
}

function endHeaderRowData()
{
	resultTableStr += "</th>";
}

function beginForm()
{
  document.write("<form name=myForm>");
}

function endForm()
{
   document.write("</form>");
}
   
function beginRowData(className)
{
	resultTableStr += "<td class='table-data-cell table-data-right'>";

}
function beginRowDataCenter(className)
{
	resultTableStr += "<td class='table-data-cell'>";	
}
function beginRowResultData()
{
  resultTableStr += "<td align='left'>";
}

function endRowData()
{
  resultTableStr += "</td>";
}






// --
// Plot the Gross payment graph
// --
function createParamsArray(myForm)
{
   var params = new Array();
   params[0] = null;
   params[1] = myForm.quebecResident.value;
   params[2] = null;
   params[3] = myForm.txtPlanValue.value;
   params[4] = myForm.paymentType.value;
   params[5] = myForm.txtROR.value;
   params[6] = myForm.txtBirthDate.value;
   params[7] = myForm.txtIssueDate.value;
   params[8] = myForm.txtToAge.value;
   params[9] = null;
   params[10] = myForm.txtGrossIncome.value;
   params[11] = myForm.txtWithHoldingTax.value;
   params[12] = myForm.txtNetIncome.value;
   params[13] = myForm.txtLastAge.value;
   params[14] = myForm.txtLastRifValue.value;
   return params;
   
}



//calculate the min first
function preRIFCalculator2015(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
      selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period)
{

	var birthYear=dateOfBirth;

	
	
	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareNumber(firstPayYear)-prepareNumber(birthYear)-1;
	
	var openYear=issueDate.getFullYear();

	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	var startAgeGettingContribution=prepareNumber(openYear)-prepareNumber(birthYear)-1;	
	var tempAgeGettingContribution=startAgeGettingContribution;
	var tempStartBalance=startingBalance;
	//because 2012 investor only invest part of the year,so will calculate the yearfraction,2013,2014 will be whole year interest.	
	var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	var firstYearRemainingDays=getFirstYearRemainingDays(issueDate,openYearEnd,0);
	console.log("firstYearRemainingDays:"+firstYearRemainingDays);
	var rorPerDay=parseFloat(expectedROR/360);
	console.log("rorPerDay:"+rorPerDay);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	var firstYearEndValue=1-FV2015(rorPerDay,firstYearRemainingDays,0,startingBalance,1);
	
	console.log("firstYearEndValue:"+firstYearEndValue);
	tempStartBalance=firstYearEndValue;
	
	//var startAge= prepareNumber(openYear)-prepareNumber(birthYear);

	var age=startAgeGettingPayment;
	var valueOnJan=tempStartBalance;
	var minimum;
	
	displayYear  = prepareNumber(age)+prepareNumber(birthYear)+1;	// year of birth (4 digits)
	console.log("year="+displayYear+" age="+age+"valueOnJan="+valueOnJan);
	minimum=getMinimum(valueOnJan,getRIFFactor2015(age));
	return minimum;
}
function rifCalculatorRedesign2015(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
      selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,isMinimumAssume)
{
	
	rifArray=[];
	rifTableArray=[];
	resultTableStr = "";
	resultTableStr += "<table id='tablesorter_rifcalculatorbox'  class='tablesorter calculated-data' width='100%' cellspacing='0' cellpadding='0' border='0' style=' table-layout:fixed'>";
	resultTableStr +="<col width=8%><col width=6%><col width=12%><col width=18%><col width=14%><col width=18%><col width=24%>	";
	writeHeader2015();
	writeTbody();
	
	console.log("open value "+startingBalance);
	console.log("ROR "+expectedROR);
	var birthYear=dateOfBirth.getFullYear();
	console.log("year of birth "+birthYear);
	console.log("open date "+issueDate);

	
	
	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareFrenchNumber(firstPayYear)-prepareFrenchNumber(birthYear)-1;
	
	
	var openYear=issueDate.getFullYear();
	console.log("open year "+openYear);
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=prepareNumber(openYear)-prepareNumber(birthYear)-1;	
	var tempAgeGettingContribution=startAgeGettingContribution;
	var tempStartBalance=startingBalance;
	
	//because 2012 investor only invest part of the year,so will calculate the yearfraction,2013,2014 will be whole year interest.	
	var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	console.log("open year end "+openYearEnd);
	var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	//console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	//console.log("Actual Interesting Earning "+actualInterestEarning);
	
	var age;
	var yearsActiveCount;
	console.log("openYear:"+openYear+" firstPayYear:"+firstPayYear+" selectionType:"+selectionType);
	var tempYearGettingContribution;
	
	var valueOnJan;
	var minimum;
	var annualAnnualPayout;
	var diffenence;
	var wTaxRate;
	var wTax;
	var netAnnualPayout;
	var grossAnnualPayout;
	var grossPerPay;
	var netPerPay;
	var fv;
	var yearEndValue;
	var roi;
	var displayFlag;
	var displayFlagForever=false;
	var totalNetPayouts=0;
	var totalWithholdingTaxes=0;

	var alreadyFound=false;
	var balanceRemaining=0;
	
	
	/*
	 * if the first payment year is within the same year as the issue date and payment type is minimum amount then calculaotr should show $0 minimum payment for the that year
	 */
	if(openYear==firstPayYear&&selectionType==0){
		console.log("result will show 0 minimum  ");
		age=startAgeGettingPayment+1;
		tempYearGettingContribution=prepareNumber(openYear);
		yearsActiveCount=0;
		var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		var firstYearRemainingDays=getFirstYearRemainingDays(issueDate,openYearEnd,0);
		console.log("firstYearRemainingDays:"+firstYearRemainingDays);
		var rorPerDay=parseFloat(expectedROR/360);
		console.log("rorPerDay:"+rorPerDay);
		var firstYearEndValue=1-FV2015(rorPerDay,firstYearRemainingDays,0,startingBalance,1);		
		console.log("firstYearEndValue:"+firstYearEndValue);
		tempStartBalance=firstYearEndValue;
		
	}else if(openYear==firstPayYear&&selectionType==1){
		console.log("result will show withhlding tax");
		age=startAgeGettingPayment+1;
		tempYearGettingContribution=prepareNumber(openYear);
		yearsActiveCount=0;
		var firstYearDifference=annualWithAmount;
		var firstYearWTaxRate=getWTaxRate2015(province,firstYearDifference,deductWHT);
		var firstYearWTax=getWTax2015(province,firstYearDifference,firstYearWTaxRate,deductWHT);
		
		var firstYearNetPerPay=0;

		var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	
		var firstYearRemainingDays=getFirstYearRemainingDays(issueDate,openYearEnd,0);
		console.log("firstYearRemainingDays:"+firstYearRemainingDays);
		var rorPerDay=parseFloat(expectedROR/360);
		console.log("rorPerDay:"+rorPerDay);
		var firstYearEndValue=1-FV2015(rorPerDay,firstYearRemainingDays,0,startingBalance,1);		
		console.log("firstYearEndValue:"+firstYearEndValue);
		
		
		
		console.log(" riffactor"+getRIFFactor2015(age)+" difference="+firstYearDifference+" wtax rate="+firstYearWTaxRate+" wTax="+firstYearWTax+" yearEndValue="+firstYearEndValue);
		
		
				
		tempStartBalance=firstYearEndValue;
		if(isMinimumAssume){
			selectionType=0;
			annualWithAmount=prepareNumber("0");
		}
	}else{
		
		tempAgeGettingContribution++;
		tempYearGettingContribution=prepareNumber(openYear)+1;
		age=startAgeGettingPayment;
		yearsActiveCount=0;
		tempStartBalance=parseFloat(tempStartBalance)+parseFloat(actualInterestEarning);
		if(isMinimumAssume){
			selectionType=0;
			annualWithAmount=prepareNumber("0");
		}
	}
	/*
	 * if the first payment year is within the same year as the issue date and payment type is minimum amount then calculaotr should show $0 minimum payment for the that year
	 */
	
	
	

	
	console.log("Quebec Resident "+province);
	console.log("payment type "+selectionType);
	console.log("payment frequency "+period);
	
	var dummyGraphObject1=new Object();
	dummyGraphObject1.age=age-6;
	dummyGraphObject1.value=0;	
	rifArray.push(dummyGraphObject1);
	
	var dummyGraphObject2=new Object();
	dummyGraphObject2.age=age-4;
	dummyGraphObject2.value=0;	
	rifArray.push(dummyGraphObject2);
	
	var dummyGraphObject3=new Object();
	dummyGraphObject3.age=age-2;
	dummyGraphObject3.value=0;	
	rifArray.push(dummyGraphObject3);
	
	valueOnJan=tempStartBalance;
	//change for new spreadsheet_v.3 2015.10.09
	var isFirstYearWTax=true;

	//spreadsheet_v.4 2016.12.16, add graph
	//graphGapAge is every 2 graphGapAge will draw a bar
	var graphStep=2;
	var lastGraphAge;
	var graphGapAge=age+1;
	console.log("graphGapAge "+graphGapAge);
	for ( var i = startAgeGettingPayment; i <= toAge; i++ )
	{ 
		displayYear  = prepareNumber(age)+prepareNumber(birthYear)+1;	// year of birth (4 digits)
		console.log("year="+displayYear+" age="+age+"valueOnJan="+valueOnJan);
		minimum=getMinimum(valueOnJan,getRIFFactor2015(age));
		//annualAnnualPayout is net pay
		annualAnnualPayout=getAnnualPayout2015(selectionType,minimum,annualWithAmount);
		difference=getDifference2015(annualAnnualPayout,minimum);
		wTaxRate=getWTaxRate2015(province,difference,deductWHT);
		if(isFirstYearWTax){
			wTax=getFirstYearWTax2015(province,difference,wTaxRate,deductWHT);
		}else{
			wTax=getWTax2015(province,difference,wTaxRate,deductWHT);
		}
		isFirstYearWTax=false;
		grossAnnualPayout=getGrossPayout2015(annualAnnualPayout,wTax);
		grossPerPay=getGrossPerPay(grossAnnualPayout,period);
		netPerPay=getNetPerPay(annualAnnualPayout,period);
		fv=FV2015(expectedROR/period,period,-1*grossPerPay,valueOnJan,0);
		yearEndValue=1-fv;
		
		displayFlag=getDisplayFlag(valueOnJan,annualAnnualPayout,age);
		console.log("display="+displayFlag+" riffactor"+getRIFFactor2015(age)+" minimum="+minimum+" annual payout="+annualAnnualPayout+" difference="+difference+" wtax rate="+wTaxRate+" wTax="+wTax+" grossAnnualPayout="+grossAnnualPayout+" grossPerPay="+grossPerPay+" netPerPay="+netPerPay+" fv="+fv+" yearEndValue="+yearEndValue);
		
		if(displayFlag==false){
			yearsActiveCount=yearsActiveCount+1;
			beginRow("table-data-row");

		
			beginRowDataCenter();
			resultTableStr += displayYear;
			endRowData();
			
			beginRowDataCenter();
			resultTableStr += age; 
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(valueOnJan));
			endRowData();
			
			beginRowDataCenter();
			resultTableStr += convertFrenchNumber(convertToMoney(getRIFFactor2015(age)*100))+" %";
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(minimum));
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(wTax));
			endRowData();
			
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(netPerPay));
			endRowData();
			totalNetPayouts=totalNetPayouts+netPerPay*period;
			totalWithholdingTaxes=totalWithholdingTaxes+wTax;
			
			
			if(age<graphGapAge){
				//for the graph
					lastGraphAge=age;
					rifObject=new Object();
					rifObject.age=age;
					rifObject.value=netPerPay;
					console.log(JSON.stringify(rifObject));
					rifArray.push(rifObject);	
				}else{
					graphGapAge=age+graphStep;
				}
				
				
				//prepare to save rifTableObject to backend session for print;
				rifTableObject=new Object();
				rifTableObject.age=age;
				rifTableObject.value=netPerPay;
				rifTableObject.wTax=wTax;
				rifTableObject.minimum=minimum;
				rifTableObject.rifFactor=Math.round(getRIFFactor2015(age)*100*100)/100;
				rifTableObject.valueOnJan=valueOnJan;
				rifTableObject.year=displayYear;
				rifTableObject.grossPerPay=grossPerPay;
				rifTableObject.totalNetPayouts=totalNetPayouts;
				rifTableArray.push(rifTableObject);	
				//end
		}else{
			if(alreadyFound==false){
				balanceRemaining=valueOnJan;
				alreadyFound=true;
			}
		}
		
		valueOnJan=yearEndValue;
		age=age+1;

		
		
		calcSummaryTableStr = "";
		calcSummaryTableErrorStr="";
		if(isMinimumAssume){
			console.log("will show minimum")
			calcSummaryTableErrorStr +="Si vous indiquez un paiement annuel inf&#233;rieur au paiement minimum annuel exig&#233; dans une ann&#233;e donn&#233;e, la calculatrice de FRR augmentera le paiement au montant minimum exig&#233;";
		}else{
			console.log("will not show minimum");
		}
		calcSummaryTableStr +="<table width='100%' cellspacing='0' cellpadding='0' border='0'>";
	
		 
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Ann&#233;es en vigueur :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += yearsActiveCount;
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Valeur initiale du r&#233;gime :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=  convertFrenchNumber(convertToMoney(startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Versement net :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalNetPayouts))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Imp&#244;ts retenus :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalWithholdingTaxes))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Solde restant:</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(balanceRemaining))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='fs12n'>Rrevenu de placement :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=convertFrenchNumber(convertToMoney(balanceRemaining+totalNetPayouts+totalWithholdingTaxes-startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr += "</table>";		
	
		
		
		
		
		
			
	
		
	}
	
	if(lastGraphAge==null){
		lastGraphAge=age;
	}
	var dummyGraphObject4=new Object();
	dummyGraphObject4.age=lastGraphAge+2;
	dummyGraphObject4.value=0;	
	rifArray.push(dummyGraphObject4);
	
	var dummyGraphObject5=new Object();
	dummyGraphObject5.age=lastGraphAge+4;
	dummyGraphObject5.value=0;	
	rifArray.push(dummyGraphObject5);
	
	var dummyGraphObject6=new Object();
	dummyGraphObject6.age=lastGraphAge+6;
	dummyGraphObject6.value=0;	
	rifArray.push(dummyGraphObject6);
	
	
	if(rifTableArray.length==0){
		resultTableStr += "<tr class='table-data-row'><td class='table-data-cell table-data-cell-error' colspan='7'>Il n'y a pas d'informations disponibles pour cette recherche.</td></tr>"
		
		rifArray=[];
		var dummyGraphObjectEmpty=new Object();
		dummyGraphObjectEmpty.age=100;
		dummyGraphObjectEmpty.value=0;	
		rifArray.push(dummyGraphObjectEmpty);
		
	}
	endTbody();
	endTable();
	
	
	queryParameters+="&totalNetPayouts="+convertFrenchNumber(convertToMoney(totalNetPayouts))+"&balanceRemaining="+convertFrenchNumber(convertToMoney(balanceRemaining))+"&InvestmentIncome="+convertFrenchNumber(convertToMoney(balanceRemaining+totalNetPayouts+totalWithholdingTaxes-startingBalance))+"&totalWithholdingTaxes="+convertFrenchNumber(convertToMoney(totalWithholdingTaxes));
	
	//send the table data to backend session;
	
	var rifTableObjectJsonString;
	//if(rifTableArray.length>0){
		
		rifTableObjectJsonString=JSON.stringify(rifTableArray);
		console.log(rifTableObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/rrifCalcAction.action?lang=fr"+queryParameters, 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: rifTableObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		      
		        console.log("success save the data into session");
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});
	//}
}


function getYearFraction(startDate,endDate,basis){
	/*
	 * Basis    Optional. The type of day count basis to use. 
	   Basis Day count basis 
	   0 or omitted US (NASD) 30/360 
	   1 Actual/actual ,such as the leap year 366 days a year
	   2 Actual/360 
	   3 Actual/365 
	   4 European 30/360 
	 */
	var wholeYearDays=0;
	var daysBtwn=0;
	if(basis==0){
		wholeYearDays=360;
		daysBtwn=(endDate.getFullYear()-startDate.getFullYear())*360+(endDate.getMonth()-startDate.getMonth())*30+(endDate.getDate()-startDate.getDate());
	}else if(basis==1){
		wholeYearDays=366;
		daysBtwn=daysBetween(startDate,endDate);
	}else if(basis==2){
		wholeYearDays=360;
		daysBtwn=daysBetween(startDate,endDate);
	}else if(basis==3){
		wholeYearDays=365;
		daysBtwn=daysBetween(startDate,endDate);
	}else{
		wholeYearDays=360;
		daysBtwn=(endDate.getFullYear()-startDate.getFullYear())*360+(endDate.getMonth()-startDate.getMonth())*30+(endDate.getDate()-startDate.getDate());
	}
	//return Math.round(daysBtwn/wholeYearDays*100)/100;
	var yrFraction=daysBtwn/wholeYearDays
	return yrFraction;
}
function getFirstYearRemainingDays(startDate,endDate,basis){
	/*
	 * Basis    Optional. The type of day count basis to use. 
	   Basis Day count basis 
	   0 or omitted US (NASD) 30/360 
	   1 Actual/actual ,such as the leap year 366 days a year
	   2 Actual/360 
	   3 Actual/365 
	   4 European 30/360 
	 */
	var wholeYearDays=0;
	var daysBtwn=0;
	if(basis==0){
		wholeYearDays=360;
		daysBtwn=(endDate.getFullYear()-startDate.getFullYear())*360+(endDate.getMonth()-startDate.getMonth())*30+(endDate.getDate()-startDate.getDate());
	}else if(basis==1){
		wholeYearDays=366;
		daysBtwn=daysBetween(startDate,endDate);
	}else if(basis==2){
		wholeYearDays=360;
		daysBtwn=daysBetween(startDate,endDate);
	}else if(basis==3){
		wholeYearDays=365;
		daysBtwn=daysBetween(startDate,endDate);
	}else{
		wholeYearDays=360;
		daysBtwn=(endDate.getFullYear()-startDate.getFullYear())*360+(endDate.getMonth()-startDate.getMonth())*30+(endDate.getDate()-startDate.getDate());
	}
	//return Math.round(daysBtwn/wholeYearDays*100)/100;
	console.log("daysBtwn:"+daysBtwn);
	return daysBtwn;
}
function getRIFFactor(age)
{
    //alert("Age: " + age);
    var val = 0.0;
    val=gRIFFactor[age-gAgeCountStart];
	  return val;
}

function getEndDateOfYear(year){
	var endDay="12/31/";
	return stringToDate2015(endDay+year);
}
function getBeginDateOfYear(year){
	var beginDay="01/01/";
	return stringToDate2015(beginDay+year);
}
function getSmartFirstPaymentDate2015(issueDate){
	var endDayOfYear=stringToDate2015("12/31/"+issueDate.getFullYear());
	return endDayOfYear;
}
function getSmartFirstPaymentDate(issueDate,period){
	var nowDate=new Date();
	var endDayOfMonth;
	var endDayOfYear=stringToDate2015("12/31/"+issueDate.getFullYear());
	var endDayOfJune=stringToDate2015("06/30/"+issueDate.getFullYear());
	var endDayOfMarch=stringToDate2015("03/31/"+issueDate.getFullYear());
	var endDayOfSeptemper=stringToDate2015("09/30/"+issueDate.getFullYear());
	if(issueDate>nowDate){
		console.log("will use issueDate to calculate the first payment date");
		endDayOfMonth=new Date(issueDate.getFullYear(), issueDate.getMonth() + 1, 0);
		endDayOfYear=stringToDate2015("12/31/"+issueDate.getFullYear());
		endDayOfJune=stringToDate2015("06/30/"+issueDate.getFullYear());
		endDayOfMarch=stringToDate2015("03/31/"+issueDate.getFullYear());
		if(period==1){
			return endDayOfYear;
		}else if(period==12||period==24){
			return endDayOfMonth;
		}else if(period==2){	
			if(issueDate<endDayOfJune){
				return endDayOfJune;
			}else{
				return endDayOfYear;
			}
		}else if(period==4){
			if(nowDate< endDayOfMarch){
				return endDayOfMarch;
			}else if(endDayOfMarch<issueDate&& issueDate< endDayOfJune){
				return endDayOfJune;
			}else if(endDayOfJune<issueDate&& issueDate< endDayOfSeptemper){
				return endDayOfSeptemper;
			}else if(endDayOfSeptemper<issueDate&& issueDate<endDayOfYear){
				return endDayOfYear;
			}else{
			
			}	  
		}else{
			console.log("no such period");
			return endDayOfYear;
		}
	}else{
		console.log("will use nowDate to calculate the first payment date");
		endDayOfMonth=new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
		endDayOfYear=stringToDate2015("12/31/"+nowDate.getFullYear());
		endDayOfJune=stringToDate2015("06/30/"+nowDate.getFullYear());
		endDayOfMarch=stringToDate2015("03/31/"+nowDate.getFullYear());
		if(period==1){
			return endDayOfYear;
		}else if(period==12||period==24){
			return endDayOfMonth;
		}else if(period==2){	
			if(nowDate<endDayOfJune){
				return endDayOfJune;
			}else{
				return endDayOfYear;
			}
		}else if(period==4){
		 	if(nowDate< endDayOfMarch){
				return endDayOfMarch;
			}else if(endDayOfMarch<nowDate&& nowDate< endDayOfJune){
				return endDayOfJune;
			}else if(endDayOfJune<nowDate&& nowDate< endDayOfSeptemper){
				return endDayOfSeptemper;
			}else if(endDayOfSeptemper<nowDate&& nowDate<endDayOfYear){
				return endDayOfYear;
			}else{
			
			}	 
		}else{
			console.log("no such period");
			return endDayOfYear;
		}
	}
	
	//issue log 398
	//Intellegently calculate the first payment date base on the start date(issue date):
	/*if (start date > now()){
		if(paymentfrequency==annual){
			return Dec-31-(start date year)
		}else if(paymentfrequency==monthly){
			return (start date month)-30/31/28/29-(start date year)
		}else if(paymentfrequency==semi-annual){
			if(start date< Jun 30){
				return Jun-30-(start date year)
			}else{
				return Dec-31-(start date year)
			}
		}else{
		 	//quaterly
		 	if(start date< Mar 31){
				return Mar 31-(start date year)
			}else if(Mar 31<start date< Jun 30){
				return Jun 30-(start date year)
			}else if(Jun 30<start date< Sep 30){
				return Sep 30-(start date year)
			}else if(Sep 30<start date< Dec 31){
				return Dec-31-(start date year)
			}else{
			
			}	 
		}
	  }else{
	  	if(paymentfrequency==annual){
			return Dec-31-(now()year)
		}else if(paymentfrequency==monthly){
			return (now() month)-30/31/28/29-(now() year)
		}else if(paymentfrequency==semi-annual){
			if(now()< Jun 30){
				return Jun-30-(now() year)
			}else{
				return Dec-31-(now() year)
			}
		}else{
		 	//quaterly
		 	if(now()< Mar 31){
				return Mar 31-(now() year)
			}else if(Mar 31<now()< Jun 30){
				return Jun 30-(now() year)
			}else if(Jun 30<now()< Sep 30){
				return Sep 30-(now() year)
			}else if(Sep 30<now()< Dec 31){
				return Dec-31-(now() year)
			}else{
			
			}
		}
	  }
	*/
	
	
}
function getFirstHalfAnnualReturn(yearOpenValue,expectedROR){
	return Math.round(yearOpenValue*expectedROR*100)/100;
}
function getFirstHalfActualReturn(firstHalfAnnualReturn,firstHalfYearFraction){
	return Math.round(firstHalfAnnualReturn*firstHalfYearFraction*100)/100;
}
function getPayDayValue(yearOpenValue,firstHalfActualReturn){
	return Math.round((yearOpenValue+firstHalfActualReturn)*100)/100;
}

function getMinimum(yearOpenValue,rifFactor){
	return Math.round(yearOpenValue*rifFactor*100)/100;
}

function getBalance(payDayValue,minimum){
	return Math.round((payDayValue-minimum)*100)/100;
}
function getSecondHalfAnnualReturn(balance,expectedROR){
	return Math.round(balance*expectedROR*100)/100;
}
function getSecondHalfActualReturn(secondHalfAnnualReturn,secondHalfYearFraction){
	return Math.round(secondHalfAnnualReturn*secondHalfYearFraction*100)/100;
}

function getYearEndValue(balance,secondHalfActualReturn){
	return Math.round((balance+secondHalfActualReturn)*100)/100;
}
function getROI(firstHalfActualReturn, secondHalfActualReturn){
	return Math.round((firstHalfActualReturn+secondHalfActualReturn)*100)/100;
}



function getAnnualReturn2015(openValue,ROR){
	return Math.round((openValue*ROR)*100)/100;
}

function getActualReturn2015(annualReturn,openYearFraction){
	return Math.round(annualReturn*openYearFraction*100)/100;
}

function getRIFFactor2015(age)
{
    //alert("Age: " + age);
    var val = 0.0;
    var factorIndex=age-gAgeCountStart2015;
    if(factorIndex>=0){
    	val=gRIFFactor2015[age-gAgeCountStart2015];
    }
	 return val;
}
function getLIFFactor2017(group,age)
{
      //alert("Age: " + age);
      var val = 0.0;
      var factorIndex=age-gLIFAgeCountStart;
      if(factorIndex>=0){
      	val=gLIFFactor[group][factorIndex];
	  }
	  return val;
}
function getAnnualPayout2015(selectionType,mininum,annualWithdrawAmount){

	if(selectionType==gMIN){
		//if payment type is mininum
		return mininum;
		
	}else{
		//gAMOUNT
		//if payment type is annual other amount
		if(mininum>annualWithdrawAmount){
			return mininum;
		}else{
			return annualWithdrawAmount;
		}

	}
}

function getAnnualPayout2017(selectionType,mininum,maxinum,annualWithdrawAmount){

	if(selectionType==gMIN){
		//if payment type is mininum
		return mininum;
		
	}else if(selectionType==gMAX){
		return maxinum;
	}else{
		//gAMOUNT
		//if payment type is annual other amount
		if(mininum>annualWithdrawAmount){
			return mininum;
		}else{
			return annualWithdrawAmount;
		}

	}
}
function getGrossPayout2015(annualPayout,wTax){
	return Math.round((parseFloat(annualPayout)+parseFloat(wTax))*100)/100;
}

//get real net pay per #781
function getRealNetPayPer(excess,period,wTaxRate,netPayPer){
	return netPayPer-(parseFloat(excess)/parseFloat(period))*parseFloat(wTaxRate);
}

//issue log 415:Robert O. provided a solution where currently in the formally that calculates the difference between the Ann Payout and Minimum is (Ann Payout - Minimum) replace it with If (Ann Payout - Minimum >0, Ann Payout - Minimum,0)
function getDifference2015(annualAnnualPayout,mininum){
	if(annualAnnualPayout>mininum){
		return annualAnnualPayout-mininum;
	}else{
		return 0;
	}
}
function getWTaxRate2015(province,difference,deductWHT){
	if(deductWHT=="true"){
		if(province==gCANADA){
			if(difference==0){
				return 0;
			}else{
				if(difference<5000){
					return 0.1;
				}else{
					if(difference>15000){
						return 0.3;
					}else{
						return 0.2;
					}
				}
			}
		}else{
			if(difference==0){
				return 0;
			}else{
				if(difference<5000){
					return 0.05;
				}else{
					if(difference>15000){
						return 0.15;
					}else{
						return 0.1;
					}
				}
			}
		}
	}else{
		return 0;
	}
}

function getQCExcess(province,difference){
	if(province==gCANADA){
		return 0;
	}else{
		if((parseFloat(difference)- parseFloat(gQUEBECCODEA1))<=0){
			return 4;
		}else if((parseFloat(difference)- parseFloat(gQUEBECCODEA2))<=0){
			return 5;
		}else if((parseFloat(difference)- parseFloat(gQUEBECCODEA3))<=0){
			return 6;
		}else{
			return 7;
		}
	}
}
function getROCExcess(province,difference){
	if(province==gCANADA){
		if((parseFloat(difference)- parseFloat(5000))<=0){
			return 1;
		}else if((parseFloat(difference)- parseFloat(15000))>=0){
			return 3;
		}else{
			return 2;
		}
	}else{
		return 0;
	}
}
function getWTaxRate2017(WHTCode){
	 var val = 0.0;	 
	 var factorIndex=WHTCode-1;
     if(factorIndex>=0){
     	val=gLIFWHTRate[factorIndex];
	  }
	  return val;
}
function getWTaxRate2015(province,difference,deductWHT){
	if(deductWHT=="true"){
		if(province==gCANADA){
			if(difference==0){
				return 0;
			}else{
				if(difference<5000){
					return 0.1;
				}else{
					if(difference>15000){
						return 0.3;
					}else{
						return 0.2;
					}
				}
			}
		}else{
			if(difference==0){
				return 0;
			}else{
				if(difference<5000){
					return 0.05;
				}else{
					if(difference>15000){
						return 0.15;
					}else{
						return 0.1;
					}
				}
			}
		}
	}else{
		return 0;
	}
	
}
function getFirstYearWTax2015(province,difference,wTaxRate,deductWHT){
	if(province==gCANADA){
		return Math.round(difference*wTaxRate*100)/100;
	}else{
		//get code A excess
		var codeAExcess=0;
		var rqRate=0;
		if((parseFloat(difference)- parseFloat(gQUEBECCODEA1))<0){
			codeAExcess=0;
		}else{
			codeAExcess=parseFloat(difference)- parseFloat(gQUEBECCODEA1);
		}
		
		//get rq Rate
		if(deductWHT="true"){
			if(codeAExcess==0){
				rqRate=0;
			}else{
				if(codeAExcess<=gQUEBECCODEA2){
					rqRate=gQUEBECCODEARATE1;
				}else{
					if(codeAExcess>gQUEBECCODEA3){
						rqRate=gQUEBECCODEARATE3;
					}else{
						rqRate=gQUEBECCODEARATE2;
					}
				}
			}
		}
		console.log("codeAExcess:"+codeAExcess+" CRA rate:"+wTaxRate+" RQ rate:"+rqRate);
		//get withholding tax
		return Math.round((parseFloat(difference*wTaxRate)+parseFloat(codeAExcess*rqRate))*100)/100;
	}
}
function getWTax2015(province,difference,wTaxRate,deductWHT){
	if(province==gCANADA){
		return Math.round(difference*wTaxRate*100)/100;
	}else{
		//get code A excess
		var codeAExcess=0;
		var rqRate=0;
		if((parseFloat(difference)- parseFloat(gQUEBECCODEA1))<0){
			codeAExcess=0;
		}else{
			codeAExcess=parseFloat(difference)- parseFloat(gQUEBECCODEA1);
		}
		
		//get rq Rate
		if(deductWHT=="true"){
			if(codeAExcess==0){
				rqRate=0;
			}else{
				if(codeAExcess<=gQUEBECCODEA2){
					rqRate=gQUEBECCODEARATE1;
				}else{
					if(codeAExcess>gQUEBECCODEA3){
						rqRate=gQUEBECCODEARATE3;
					}else{
						rqRate=gQUEBECCODEARATE2;
					}
				}
			}
		}
		console.log("difference:"+difference+" codeAExcess:"+codeAExcess+" CRA rate:"+wTaxRate+" RQ rate:"+rqRate);
		//get withholding tax
		return Math.round(parseFloat(difference*wTaxRate)*100)/100;
	}
}
function getNetAnnualPayout2015(annualPayout,wTax){
	return Math.round((annualPayout-wTax)*100)/100;
}
function getGrossPerPay(grossAnnualPayout,period){
	return Math.round((grossAnnualPayout/period)*100)/100;
}
function getNetPerPay(netAnnualPayout,period){
	return Math.round((netAnnualPayout/period)*100)/100;
}
function getAnnualPayment2017(payPer,period){
	return Math.round((payPer*period)*100)/100;
}
function FV2015(rate, nper, pmt, pv, type) {
	var pow = Math.pow(1 + rate, nper),
	     fv;
	  if (rate) {
	   fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
	  } else {
	   fv = -1 * (pv + pmt * nper);
	  }
	  console.log("rate:"+rate+" nper:"+nper+" pmt:"+pmt+" pv:"+pv+" type:"+type+"fv"+fv.toFixed(2)); 
	  return fv.toFixed(2);
	}
function getDisplayFlag(valueOnJan,annualPayout,age){
	console.log("age="+age+" valueOnJan="+valueOnJan+" annualPayout="+annualPayout);
	if(valueOnJan<=annualPayout || age>=100 ){
		return true;
	}else{
		return false;
	}
}
function getAdjustedROR(expectedROR){
	return (1+expectedROR)/(1+parseFloat(gInflationRate))-1;
}

function preLIFCalculatorMIN2017(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
        selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,accountType,firstYearBeginDate,pjIndex,paymentPer)
{

	var birthYear=dateOfBirth;

	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareNumber(firstPayYear)-prepareNumber(birthYear);
	
	console.log("startAgeGettingPayment:"+startAgeGettingPayment);
	var openYear=issueDate.getFullYear();
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=prepareFrenchNumber(firstPayYear)-prepareFrenchNumber(birthYear);

	var tempStartBalance=startingBalance;
	
	
	var openYearEnd=firstPayDate;
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	console.log("Actual Interesting Earning "+actualInterestEarning);
	
	
	var minpjvalue = gPensionJurisdictionMinValue[pjIndex];
	var maxpjvalue=  gPensionJurisdictionMaxValue[pjIndex];
	console.log("pjvalue min: "+minpjvalue+" max "+maxpjvalue);
	var age;
	var valueOnJan;
	var minimum;

	//for pre-existing client, show the current year as the first year
	if(accountType==1){
		  //pre-existing
		firstMinValue=startingBalance;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		valueOnJan=tempStartBalance;

	}else{
		//new
		var firstYearEndValue=actualInterestEarning+startingBalance;
		firstMinValue=firstYearEndValue;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment+1;
		valueOnJan=tempStartBalance;
	}
	
	var minFactor=0;
	var maxFactor=0;
	var adjustedMaxFactor=0;
	
	var factorAge=0;
	var netPaymentPerPeriod=0;
	
	factorAge=parseFloat(age)-1;
	minFactor=getLIFFactor2017(minpjvalue,factorAge);
	maxFactor=getLIFFactor2017(maxpjvalue,factorAge);
	if(maxFactor>expectedROR){
		adjustedMaxFactor=maxFactor;
	}else{
		adjustedMaxFactor=expectedROR;
	}
	minimum=getMinimum(valueOnJan,minFactor);

 return minimum;
}

function preLIFCalculatorMAX2017(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
        selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,accountType,firstYearBeginDate,pjIndex,paymentPer)
{

	var birthYear=dateOfBirth;

	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareNumber(firstPayYear)-prepareNumber(birthYear);
	
	console.log("startAgeGettingPayment:"+startAgeGettingPayment);
	var openYear=issueDate.getFullYear();
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=prepareFrenchNumber(firstPayYear)-prepareFrenchNumber(birthYear);

	var tempStartBalance=startingBalance;
	
	
	var openYearEnd=firstPayDate;
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	console.log("Actual Interesting Earning "+actualInterestEarning);
	
	
	var minpjvalue = gPensionJurisdictionMinValue[pjIndex];
	var maxpjvalue=  gPensionJurisdictionMaxValue[pjIndex];
	console.log("pjvalue min: "+minpjvalue+" max "+maxpjvalue);
	var age;
	var valueOnJan;
	var maximum;

	//for pre-existing client, show the current year as the first year
	if(accountType==1){
		  //pre-existing
		firstMinValue=startingBalance;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		valueOnJan=tempStartBalance;

	}else{
		//new
		var firstYearEndValue=actualInterestEarning+startingBalance;
		firstMinValue=firstYearEndValue;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment+1;
		valueOnJan=tempStartBalance;
	}
	
	var minFactor=0;
	var maxFactor=0;
	var adjustedMaxFactor=0;
	
	var factorAge=0;
	var netPaymentPerPeriod=0;
	
	factorAge=parseFloat(age)-1;
	minFactor=getLIFFactor2017(minpjvalue,factorAge);
	maxFactor=getLIFFactor2017(maxpjvalue,factorAge);
	if(maxFactor>expectedROR){
		adjustedMaxFactor=maxFactor;
	}else{
		adjustedMaxFactor=expectedROR;
	}
	maximum=getMinimum(valueOnJan,adjustedMaxFactor);

 return maximum;
}
//calculate the min first
function preRIFCalculator2017(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
      selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,accountType,firstYearBeginDate)
{

	console.log("open value "+startingBalance);
	console.log("ROR "+expectedROR);
	var birthYear=dateOfBirth;
	console.log("year of birth "+birthYear);
	console.log("open date "+issueDate);
	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareFrenchNumber(firstPayYear)-prepareFrenchNumber(birthYear);
	var openYear=issueDate.getFullYear();
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=prepareNumber(openYear)-prepareNumber(birthYear)-1;	
	var tempAgeGettingContribution=startAgeGettingContribution;
	var tempStartBalance=startingBalance;
	
	//because 2012 investor only invest part of the year,so will calculate the yearfraction,2013,2014 will be whole year interest.	
	//var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	console.log("open year end "+openYearEnd);
	var openYearEnd=firstPayDate;
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	console.log("Actual Interesting Earning "+actualInterestEarning);
	
	var age;
	var yearsActiveCount;
	console.log("openYear:"+openYear+" firstPayYear:"+firstPayYear+" selectionType:"+selectionType);

	var valueOnJan;
	var minimum;

	var fv;
	var firstMinValue;

	var firstYearNetPerPay=0;	
	var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	
	var firstYearRemainingDays=getFirstYearRemainingDays(issueDate,openYearEnd,0);
	console.log("firstYearRemainingDays:"+firstYearRemainingDays);
	var rorPerDay=parseFloat(expectedROR/360);
	console.log("rorPerDay:"+rorPerDay);
	var firstYearEndValue=1-FV2015(rorPerDay,firstYearRemainingDays,0,startingBalance,1);		
	console.log("firstYearEndValue:"+firstYearEndValue);
		
	tempStartBalance=firstYearEndValue;
	console.log("Quebec Resident "+province);
	console.log("payment type "+selectionType);
	console.log("payment frequency "+period);
	console.log("tempStartBalance: "+tempStartBalance);
	console.log("startAgeGettingPayment: "+startAgeGettingPayment);
	console.log("selectionType: "+selectionType+" annualWithAmount: "+annualWithAmount);
	//for pre-existing client, show the current year as the first year
	if(accountType==1){
		firstMinValue=startingBalance;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		var tempAge=age-1;
		valueOnJan=tempStartBalance;
		
		
		
	}else{
		var firstYearEndValue=actualInterestEarning+startingBalance;
		firstMinValue=firstYearEndValue;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment+1;
		valueOnJan=tempStartBalance;
		
	}
	
	var factorAge=0;
	var netPaymentPerPeriod=0;
	factorAge=prepareNumber(age)-1;
	minimum=getMinimum(valueOnJan,getRIFFactor2015(factorAge));
	return minimum;
}


function lifCalculatorRedesign2017(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
        selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,isMinimumAssume,isMaximumAssume,accountType,firstYearBeginDate,pjIndex,paymentPer)
{
	lifArray=[];
	lifTableArray=[];
	resultTableStr = "";
	resultTableStr += "<table id='tablesorter_lifcalculatorbox'  class='tablesorter calculated-data' width='100%' cellspacing='0' cellpadding='0' border='0' style=' table-layout:fixed'>";
	resultTableStr +="<col width=8%><col width=8%><col width=13%><col width=13%><col width=13%><col width=15%><col width=15%><col width=15%>	";
	writeLIFHeader2015();
	writeTbody();
	
	console.log("open value "+startingBalance);
	console.log("ROR "+expectedROR);
	var birthYear=dateOfBirth;
	console.log("year of birth "+birthYear);
	console.log("open date "+issueDate);
	
	
	var firstPayYear=firstPayDate.getFullYear();;
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareFrenchNumber(firstPayYear)-prepareFrenchNumber(birthYear);
	
	console.log("startAgeGettingPayment:"+startAgeGettingPayment);
	var openYear=issueDate.getFullYear();
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=prepareNumber(openYear)-prepareNumber(birthYear)-1;	
	var tempAgeGettingContribution=startAgeGettingContribution;
	var tempStartBalance=startingBalance;
	
	//because 2012 investor only invest part of the year,so will calculate the yearfraction,2013,2014 will be whole year interest.	
	//var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	console.log("open year end "+openYearEnd);
	var openYearEnd=firstPayDate;
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	console.log("Actual Interesting Earning "+actualInterestEarning);
	
	
	var minpjvalue = gPensionJurisdictionMinValue[pjIndex];
	var maxpjvalue=  gPensionJurisdictionMaxValue[pjIndex];
	console.log("pjvalue min: "+minpjvalue+" max "+maxpjvalue);
	var age;
	var yearsActiveCount;
	console.log("openYear:"+openYear+" firstPayYear:"+firstPayYear+" selectionType:"+selectionType);
	var tempYearGettingContribution;
	
	var valueOnJan;
	var minimum;
	var maximum;
	var annualAnnualPayout;
	var grossAnnualPayout;
	var diffenence;
	var wTaxRate;
	var wTax;
	var netAnnualPayout;
	
	var grossPerPay;
	var netPerPay;
	var fv;
	var yearEndValue;

	var displayFlag;
	var displayFlagForever=false;
	var totalNetPayouts=0;
	var totalWithholdingTaxes=0;
	var totalInvestmentIncome=0;
	var alreadyFound=false;
	var balanceRemaining=0;
	
	/**
	 * 
	 * if pre-exising  start year will be current year -1
	 * if new 		   start year will be current year
	 * 
	 * **/
	var firstMinValue;

	var rorPerDay=parseFloat(expectedROR/360);
	console.log("rorPerDay:"+rorPerDay);
	yearsActiveCount=0;
	
	

	console.log("Quebec Resident "+province);
	console.log("payment type "+selectionType);
	console.log("payment frequency "+period);

	console.log("startAgeGettingPayment: "+startAgeGettingPayment);
	console.log("selectionType: "+selectionType+" annualWithAmount: "+annualWithAmount);
	
	
	
	
	//for pre-existing client, show the current year as the first year
	var tempAge=0;
	if(accountType==1){
		  //pre-existing
		firstMinValue=startingBalance;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		
		tempAge=age-1;
		console.log("start age: "+tempAge+" to age: "+toAge);
		var dummyGraphObject1=new Object();
		dummyGraphObject1.age=tempAge-6;
		dummyGraphObject1.value=0;	
		lifArray.push(dummyGraphObject1);
		
		var dummyGraphObject2=new Object();
		dummyGraphObject2.age=tempAge-4;
		dummyGraphObject2.value=0;	
		lifArray.push(dummyGraphObject2);
		
		var dummyGraphObject3=new Object();
		dummyGraphObject3.age=tempAge-2;
		dummyGraphObject3.value=0;	
		lifArray.push(dummyGraphObject3);
		
		console.log("start to draw the table");
		
		
		valueOnJan=tempStartBalance;
		//change for new spreadsheet_v.3 2015.10.09
		var isFirstYearWTax=true;
		
		//spreadsheet_v.4 2016.12.16, add graph
		//graphGapAge is every 2 graphGapAge will draw a bar
		var graphStep=2;
		var lastGraphAge;
		var graphGapAge=tempAge+1;
		console.log("age:"+age+"tempAge: "+tempAge+" graphGapAge:" +
				" "+graphGapAge);
		
		
		
	}else{
		//new
		var firstYearEndValue=actualInterestEarning+startingBalance;
		firstMinValue=firstYearEndValue;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		tempAge=age-1;
		console.log("start age: "+age+" to age: "+toAge);
		var dummyGraphObject1=new Object();
		dummyGraphObject1.age=tempAge-6;
		dummyGraphObject1.value=0;	
		lifArray.push(dummyGraphObject1);
		
		var dummyGraphObject2=new Object();
		dummyGraphObject2.age=tempAge-4;
		dummyGraphObject2.value=0;	
		lifArray.push(dummyGraphObject2);
		
		var dummyGraphObject3=new Object();
		dummyGraphObject3.age=tempAge-2;
		dummyGraphObject3.value=0;	
		lifArray.push(dummyGraphObject3);
		
		console.log("start to draw the table");
		
		
		valueOnJan=tempStartBalance;
				
		//spreadsheet_v.4 2016.12.16, add graph
		//graphGapAge is every 2 graphGapAge will draw a bar
		var graphStep=2;
		var lastGraphAge;
		var graphGapAge=tempAge+1;
		console.log("graphGapAge "+graphGapAge);
	}
	
	var minFactor=0;
	var maxFactor=0;
	var adjustedMaxFactor=0;
	var factorAge=0;
	var netPaymentPerPeriod=0;
	var payTypeReq=0;
	var payTypeCode=0;
	var requestAmount=0;
	var lifpayment=0;
	var difference=0; //excess
	var qcExcess=0;
	var rocExcess=0;
	var LIFWHTCode=0;
	var LIFPaysper=0;
	var LIFPayperAmount=0;
	var LIFinterest=0;
	var netLIFPayment=0;
	var realNetPaymentPerPeriod=0;
	for ( var i = age; i <= toAge; i++ )
	{ 
		
		
		
		displayYear  = parseFloat(birthYear)+parseFloat(age);
		factorAge=parseFloat(age)-1;
		minFactor=getLIFFactor2017(minpjvalue,factorAge);
		maxFactor=getLIFFactor2017(maxpjvalue,factorAge);
		if(maxFactor>expectedROR){
			adjustedMaxFactor=maxFactor;
		}else{
			adjustedMaxFactor=expectedROR;
		}
		minimum=getMinimum(valueOnJan,minFactor);
		maximum=getMinimum(valueOnJan,adjustedMaxFactor);
		annualAnnualPayout=getAnnualPayout2017(selectionType,minimum,maximum,annualWithAmount);
		

		if(selectionType==gMIN){
			payTypeReq=1;//min
		}else if(selectionType==gMAX){
			payTypeReq=2;
		}else{
			payTypeReq=3;
		}
		

		
		requestAmount=0;
		if(selectionType==1){
			requestAmount=annualWithAmount;
		}else{
			requestAmount=0;
		}
		netPerPay=requestAmount;
		
		if(payTypeReq==3 && minimum>netPerPay){
			payTypeCode=1;
		}else{
			if(payTypeReq==3 && maximum<netPerPay){
				payTypeCode=2;
			}else{
				payTypeCode=payTypeReq;
			}
		}
		lifpayment=0;
		if(payTypeCode==1){
			lifpayment=minimum;
		}else{
			if(payTypeCode==2){
				lifpayment=maximum;
			}else{
				lifpayment=netPerPay;
			}
		}
		difference=getDifference2015(lifpayment,minimum); //excess
		qcExcess=getQCExcess(province,difference);
		rocExcess=getROCExcess(province,difference);
		LIFWHTCode=qcExcess+rocExcess;
		wTaxRate=getWTaxRate2017(LIFWHTCode);
		wTax=Math.round(difference*wTaxRate*100)/100;
		
		LIFPaysper=0;
		if(parseFloat(minFactor)-1==0){
			LIFPaysper=1;
		}else{
			LIFPaysper=period;
		}
		
		LIFPayperAmount=-1*lifpayment/LIFPaysper;
		
		
		fv=-1*FV2015(expectedROR/period,period,LIFPayperAmount,valueOnJan,1);
		LIFinterest=fv-(valueOnJan-lifpayment);
		netLIFPayment=0;
		
		/*if(parseFloat(netPerPay)-parseFloat(valueOnJan)>0){
			netLIFPayment=valueOnJan+LIFinterest;
		}else{
			netLIFPayment=lifpayment-wTax;
		}*/
		netLIFPayment=lifpayment-wTax;
		netPaymentPerPeriod=getNetPerPay(netLIFPayment,period);
		realNetPaymentPerPeriod=getRealNetPayPer(difference,period,wTaxRate,netPaymentPerPeriod);
		displayFlag=getDisplayFlag(valueOnJan,lifpayment,factorAge);
		console.log("displayFlag="+displayFlag+" year="+displayYear+" age="+age+" factorAge="+factorAge+" valueOnJan="+valueOnJan+" minFactor="+minFactor+" maxFactor="+maxFactor+" minimum:"+minimum+" maximum:"+maximum+" annualAnnualPayout:"+annualAnnualPayout+" payTypeReq:"+payTypeReq+" request amt:"+netPerPay+" payTypeCode:"+payTypeCode+" lifpayment:"+lifpayment+" difference:"+difference+" qcExcess:"+qcExcess+" rocExcess:"+rocExcess+" LIFWHTCode:"+LIFWHTCode+" wTaxRate:"+wTaxRate+" wTax:"+wTax+" LIFPaysper:"+LIFPaysper+" LIFPayperAmount:"+LIFPayperAmount+" fv:"+fv+" LIFinterest:"+LIFinterest+" netLIFPayment:"+netLIFPayment+" netPaymentPerPeriod:"+netPaymentPerPeriod);
		yearEndValue=fv;
		
		
		
		if(displayFlag==false&& displayFlagForever==false){
			
			//will display 
			
			yearsActiveCount=yearsActiveCount+1;
			beginRow("table-data-row");

			beginRowDataCenter();
			resultTableStr += displayYear;
			endRowData();
			
			beginRowDataCenter();
			resultTableStr += factorAge; 
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(valueOnJan));
			endRowData();
			
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(minFactor*100))+" %";
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(maxFactor*100))+" %";
			endRowData();
						
			beginRowData("table-data-right");
			resultTableStr += convertToMoney(lifpayment);
			endRowData();
			
			
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(wTax));
			endRowData();
			
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(netPaymentPerPeriod));
			endRowData();
			totalNetPayouts=parseFloat(totalNetPayouts)+parseFloat(lifpayment);
			totalWithholdingTaxes=totalWithholdingTaxes+wTax;
			totalInvestmentIncome=totalInvestmentIncome+LIFinterest;
			if(factorAge<graphGapAge){
			//for the graph
				lastGraphAge=factorAge;
				lifObject=new Object();
				lifObject.age=factorAge;
				lifObject.value=netPaymentPerPeriod;
				console.log(JSON.stringify(lifObject));
				lifArray.push(lifObject);	
			}else{
				graphGapAge=factorAge+graphStep;
			}
			
			
			//prepare to save lifTableObject to backend session for print;
			lifTableObject=new Object();
			lifTableObject.age=factorAge;
			lifTableObject.value=netPaymentPerPeriod;
			lifTableObject.wTax=wTax;
			lifTableObject.minimum=minimum;
			lifTableObject.maximum=maximum;
			lifTableObject.returnOnInvestment=0;
			lifTableObject.rifFactor=0;
			lifTableObject.rifMinFactor=Math.round(minFactor*100*100)/100;
			lifTableObject.rifMaxFactor=Math.round(maxFactor*100*100)/100;
			lifTableObject.valueOnJan=valueOnJan;
			lifTableObject.grossPerPay=0;
			lifTableObject.year=displayYear;
			lifTableObject.totalNetPayouts=totalNetPayouts;
			lifTableObject.annualAmount=lifpayment;
			lifTableArray.push(lifTableObject);	
			//end
			
		}else{
			//will not display
			if(alreadyFound==false){
				balanceRemaining=valueOnJan;
				alreadyFound=true;
			}
			if(displayFlagForever==false){
				displayFlagForever=true;
			}
		}
		
		valueOnJan=yearEndValue;
		age=age+1;

		
		
		calcSummaryTableStr = "";
		calcSummaryTableErrorStr="";
		
		if(isMinimumAssume){
			console.log("will show minimum")
			calcSummaryTableErrorStr +="Si vous indiquez un paiement annuel inf&#233;rieur au paiement minimum annuel exig&#233; dans une ann&#233;e donn&#233;e, la calculatrice de FRR augmentera le paiement au montant minimum exig&#233;";
		}else{
			console.log("will not show minimum");
		}
		if(isMaximumAssume){
			console.log("will show maximum")
			calcSummaryTableErrorStr +="Si vous indiquez un paiement annuel sup&#233;rieur au paiement maximum annuel autoris&#233; dans une ann&#233;e donn&#233;e, la calculatrice de FRV diminuera le paiement au montant maximum autoris&#233;.";
		}else{
			console.log("will not show maximum");
		}
		calcSummaryTableStr +="<table width='100%' cellspacing='0' cellpadding='0' border='0'>";
	
		 
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Ann&#233;es en vigueur :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += yearsActiveCount;
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Valeur initiale du r&#233;gime :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=  convertFrenchNumber(convertToMoney(startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Versement net :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalNetPayouts))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Imp&#244;ts retenus :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalWithholdingTaxes))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Solde restant :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(balanceRemaining))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='fs12n'>Rrevenu de placement :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=convertFrenchNumber(convertToMoney(totalInvestmentIncome))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr += "</table>";		
	
		
	}
	
	if(lastGraphAge==null){
		lastGraphAge=factorAge;
	}
	var dummyGraphObject4=new Object();
	if((lastGraphAge+2)>100){
		dummyGraphObject4.age=100;
	}else{
		dummyGraphObject4.age=lastGraphAge+2;
	}
	
	dummyGraphObject4.value=0;	
	lifArray.push(dummyGraphObject4);
	
	var dummyGraphObject5=new Object();
	if((lastGraphAge+4)>100){
		dummyGraphObject5.age=100;
	}else{
		dummyGraphObject5.age=lastGraphAge+4;
	}
	dummyGraphObject5.value=0;	
	lifArray.push(dummyGraphObject5);
	
	var dummyGraphObject6=new Object();
	if((lastGraphAge+6)>100){
		dummyGraphObject6.age=100;
	}else{
		dummyGraphObject6.age=lastGraphAge+6;
	}
	dummyGraphObject6.value=0;	
	lifArray.push(dummyGraphObject6);
	
	if(lifTableArray.length==0){
		resultTableStr += "<tr class='table-data-row'><td class='table-data-cell table-data-cell-error' colspan='7'>Il n'y a pas d'informations disponibles pour cette recherche.</td></tr>"
		
		lifArray=[];
		var dummyGraphObjectEmpty=new Object();
		dummyGraphObjectEmpty.age=100;
		dummyGraphObjectEmpty.value=0;	
		lifArray.push(dummyGraphObjectEmpty);
		
	}
	
	endTbody();
	endTable();
	
	queryParameters+="&totalNetPayouts="+convertFrenchNumber(convertToMoney(totalNetPayouts))+"&balanceRemaining="+convertFrenchNumber(convertToMoney(balanceRemaining))+"&InvestmentIncome="+convertFrenchNumber(convertToMoney(totalInvestmentIncome))+"&totalWithholdingTaxes="+convertFrenchNumber(convertToMoney(totalWithholdingTaxes))+"&planType=FRV"+"&paymentPer="+paymentPer;
	
	//send the table data to backend session;
	
	var lifTableObjectJsonString;
	
		
		lifTableObjectJsonString=JSON.stringify(lifTableArray);
		console.log(lifTableObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/rrifCalcAction.action?lang=fr"+queryParameters, 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: lifTableObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		      
		        console.log("success save the data into session");
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});

}

function rifCalculatorRedesign2017(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
        selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,isMinimumAssume,accountType,firstYearBeginDate,paymentPer)
{
	rifArray=[];
	rifTableArray=[];
	resultTableStr = "";
	resultTableStr += "<table id='tablesorter_rifcalculatorbox'  class='tablesorter calculated-data' width='100%' cellspacing='0' cellpadding='0' border='0' style=' table-layout:fixed'>";
	resultTableStr +="<col width=7%><col width=8%><col width=18%><col width=11%><col width=14%><col width=18%><col width=24%>	";
	writeRRIFHeader2015();
	writeTbody();
	
	console.log("open value "+startingBalance);
	console.log("ROR "+expectedROR);
	var birthYear=dateOfBirth;
	console.log("year of birth "+birthYear);
	console.log("open date "+issueDate);
	
	
	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=prepareFrenchNumber(firstPayYear)-prepareFrenchNumber(birthYear);
	
	
	var openYear=issueDate.getFullYear();
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=prepareNumber(openYear)-prepareNumber(birthYear)-1;	
	var tempAgeGettingContribution=startAgeGettingContribution;
	var tempStartBalance=startingBalance;
	
	//because 2012 investor only invest part of the year,so will calculate the yearfraction,2013,2014 will be whole year interest.	
	//var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	console.log("open year end "+openYearEnd);
	var openYearEnd=firstPayDate;
	console.log("openYearEnd:"+openYearEnd);
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	console.log("Actual Interesting Earning "+actualInterestEarning);
	
	var age;
	var yearsActiveCount;
	console.log("openYear:"+openYear+" firstPayYear:"+firstPayYear+" selectionType:"+selectionType);
	var tempYearGettingContribution;
	
	var valueOnJan;
	var minimum;
	var annualAnnualPayout;
	var grossAnnualPayout;
	var diffenence;
	var wTaxRate;
	var wTax;
	var netAnnualPayout;
	
	var grossPerPay=0;
	var netPerPay;
	var fv;
	var yearEndValue;

	var displayFlag;
	var displayFlagForever=false;
	var totalNetPayouts=0;
	var totalWithholdingTaxes=0;

	var alreadyFound=false;
	var balanceRemaining=0;
	var firstMinValue;
	
	/*
	 * if the first payment year is within the same year as the issue date and payment type is minimum amount then calculaotr should show $0 minimum payment for the that year
	 */
	if(selectionType==0){
		console.log("result will show 0 minimum  ");	
		tempYearGettingContribution=prepareNumber(openYear);
		yearsActiveCount=0;
		var openYearEnd=firstPayDate;	
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		var firstYearRemainingDays=getFirstYearRemainingDays(issueDate,openYearEnd,0);
		console.log("firstYearRemainingDays:"+firstYearRemainingDays);
		var rorPerDay=parseFloat(expectedROR/360);
		console.log("rorPerDay:"+rorPerDay);
		//var firstYearEndValue=1-FV2015(rorPerDay,firstYearRemainingDays,0,startingBalance,1);		
		var firstYearEndValue=actualInterestEarning+startingBalance;
		console.log("firstYearEndValue:"+firstYearEndValue);
		
		
		
		
	}else if(selectionType==1){
		console.log("result will show withhlding tax");
		tempYearGettingContribution=prepareNumber(openYear);
		yearsActiveCount=0;

		var firstYearDifference=annualWithAmount;
		var firstYearWTaxRate=getWTaxRate2015(province,firstYearDifference,deductWHT);
		var firstYearWTax=getWTax2015(province,firstYearDifference,firstYearWTaxRate,deductWHT);		
		var firstYearNetPerPay=0;	
		var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	
		var firstYearRemainingDays=getFirstYearRemainingDays(issueDate,openYearEnd,0);
		console.log("firstYearRemainingDays:"+firstYearRemainingDays);
		var rorPerDay=parseFloat(expectedROR/360);
		console.log("rorPerDay:"+rorPerDay);
		var firstYearEndValue=1-FV2015(rorPerDay,firstYearRemainingDays,0,startingBalance,1);		
		console.log("firstYearEndValue:"+firstYearEndValue);
		
		tempStartBalance=firstYearEndValue;
		/*if(isMinimumAssume){
			selectionType=0;
			annualWithAmount=prepareNumber("0");
		}*/
	}else{
		
		tempAgeGettingContribution++;
		tempYearGettingContribution=prepareNumber(openYear)+1;
		yearsActiveCount=0;
		tempStartBalance=parseFloat(tempStartBalance)+parseFloat(actualInterestEarning);
		/*if(isMinimumAssume){
			selectionType=0;
			annualWithAmount=prepareNumber("0");
		}*/
	}
	/*
	 * if the first payment year is within the same year as the issue date and payment type is minimum amount then calculaotr should show $0 minimum payment for the that year
	 */
	
	
	

	
	console.log("Quebec Resident "+province);
	console.log("payment type "+selectionType);
	console.log("payment frequency "+period);
	console.log("tempStartBalance: "+tempStartBalance);
	console.log("startAgeGettingPayment: "+startAgeGettingPayment);
	console.log("selectionType: "+selectionType+" annualWithAmount: "+annualWithAmount);
	
	
	
	
	//for pre-existing client, show the current year as the first year
	var tempAge=0;
	if(accountType==1){
		firstMinValue=startingBalance;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		tempAge=age-1;
		console.log("start age: "+tempAge+" to age: "+toAge);
		var dummyGraphObject1=new Object();
		dummyGraphObject1.age=tempAge-6;
		dummyGraphObject1.value=0;	
		rifArray.push(dummyGraphObject1);
		
		var dummyGraphObject2=new Object();
		dummyGraphObject2.age=tempAge-4;
		dummyGraphObject2.value=0;	
		rifArray.push(dummyGraphObject2);
		
		var dummyGraphObject3=new Object();
		dummyGraphObject3.age=tempAge-2;
		dummyGraphObject3.value=0;	
		rifArray.push(dummyGraphObject3);
		
		console.log("start to draw the table");
		
		
		valueOnJan=tempStartBalance;
		//change for new spreadsheet_v.3 2015.10.09
		var isFirstYearWTax=true;
		
		//spreadsheet_v.4 2016.12.16, add graph
		//graphGapAge is every 2 graphGapAge will draw a bar
		var graphStep=2;
		var lastGraphAge;
		var graphGapAge=tempAge+1;
		console.log("graphGapAge "+graphGapAge);
		
		
	}else{
		var firstYearEndValue=actualInterestEarning+startingBalance;
		firstMinValue=firstYearEndValue;
		tempStartBalance=firstMinValue;
		age=startAgeGettingPayment;
		tempAge=age-1;
		console.log("start age: "+age+" to age: "+toAge);
		var dummyGraphObject1=new Object();
		dummyGraphObject1.age=tempAge-6;
		dummyGraphObject1.value=0;	
		rifArray.push(dummyGraphObject1);
		
		var dummyGraphObject2=new Object();
		dummyGraphObject2.age=tempAge-4;
		dummyGraphObject2.value=0;	
		rifArray.push(dummyGraphObject2);
		
		var dummyGraphObject3=new Object();
		dummyGraphObject3.age=tempAge-2;
		dummyGraphObject3.value=0;	
		rifArray.push(dummyGraphObject3);
		
		console.log("start to draw the table");
		
		
		valueOnJan=tempStartBalance;
		//change for new spreadsheet_v.3 2015.10.09
		var isFirstYearWTax=true;
		
		//spreadsheet_v.4 2016.12.16, add graph
		//graphGapAge is every 2 graphGapAge will draw a bar
		var graphStep=2;
		var lastGraphAge;
		var graphGapAge=tempAge+1;
		console.log("graphGapAge "+graphGapAge);
	}
	var netPaymentPerPeriod=0;
	var factorAge=0;
	var requestAmount=0;
	var qcExcess=0;
	var rocExcess=0;
	var rrifWHTCode=0;
	var rrifPaysper=0;
	var rrifPayperAmount=0;
	var rrifinterest=0;
	var rrifNetPayment=0;
	var realNetPaymentPerPeriod=0;
	for ( var i = age; i <= toAge; i++ )
	{ 
		
		
		displayYear  = parseFloat(birthYear)+parseFloat(age);
		//displayYear  = parseFloat(birthYear)+parseFloat(age);
		factorAge=prepareNumber(age)-1;
		console.log("year="+displayYear+" age="+age+" factorAge="+factorAge+" valueOnJan="+valueOnJan);
		minimum=getMinimum(valueOnJan,getRIFFactor2015(factorAge));
		//annualAnnualPayout is net pay
		annualAnnualPayout=getAnnualPayout2015(selectionType,minimum,annualWithAmount);
		isFirstYearWTax=false;
		requestAmount=0;
		if(selectionType==1){
			requestAmount=annualWithAmount;
		}else{
			requestAmount=0;
		}
		
		if(parseFloat(requestAmount)-parseFloat(minimum)>0){
			netPerPay=requestAmount;//payment
		}else{
			netPerPay=minimum;
		}
		
		difference=getDifference2015(netPerPay,minimum); //excess
		qcExcess=getQCExcess(province,difference);
		rocExcess=getROCExcess(province,difference);
		rrifWHTCode=qcExcess+rocExcess;
		wTaxRate=getWTaxRate2017(rrifWHTCode);
		wTax=Math.round(difference*wTaxRate*100)/100;
		

		rrifPaysper=period;
		rrifPayperAmount=-1*netPerPay/rrifPaysper;
	
		fv=-1*FV2015(expectedROR/period,period,rrifPayperAmount,valueOnJan,1);
		rrifinterest=fv-(valueOnJan-netPerPay);
		
		
		rrifNetPayment=0;
		if(parseFloat(netPerPay)-parseFloat(valueOnJan)>0){
			rrifNetPayment=parseFloat(valueOnJan)+rrifinterest;
		}else{
			console.log("netPerPay:"+netPerPay+"wTax:"+wTax);
			rrifNetPayment=netPerPay-wTax;
		}
		netPaymentPerPeriod=getNetPerPay(rrifNetPayment,period);

		yearEndValue=fv;
		realNetPaymentPerPeriod=getRealNetPayPer(difference,period,wTaxRate,netPaymentPerPeriod);
		displayFlag=getDisplayFlag(valueOnJan,annualAnnualPayout,factorAge);
		console.log("display="+displayFlag+" age="+age+" factorAge="+factorAge+" riffactor"+getRIFFactor2015(factorAge)+" req amount="+requestAmount+" minimum="+minimum+" annual payout="+annualAnnualPayout+" netperpay="+netPerPay+" excess="+difference+" qcExcess:"+qcExcess+" rocExcess:"+rocExcess+" rrifWHTCode:"+rrifWHTCode+" Paysper:"+rrifPaysper+" rrifPayperAmount:"+rrifPayperAmount+" wtax rate="+wTaxRate+" wTax="+wTax+" rrifPayperAmount:"+rrifPayperAmount+" fv:"+fv+" rrifinterest:"+rrifinterest+" rrifNetPayment:"+rrifNetPayment+" realNetPaymentPerPeriod:"+realNetPaymentPerPeriod);
		
		
		if(displayFlag==false&& displayFlagForever==false){
			
			//will display 
			
			yearsActiveCount=yearsActiveCount+1;
			beginRow("table-data-row");

			beginRowDataCenter();
			resultTableStr += displayYear;
			endRowData();
			
			beginRowDataCenter();
			resultTableStr += factorAge; 
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(valueOnJan));
			endRowData();
			
			beginRowDataCenter();
			resultTableStr += convertFrenchNumber(convertToMoney(getRIFFactor2015(factorAge)*100))+" %";
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(netPerPay));
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(wTax));
			endRowData();
			
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(netPaymentPerPeriod));
			endRowData();
			totalNetPayouts=totalNetPayouts+netPaymentPerPeriod*period;
			totalWithholdingTaxes=totalWithholdingTaxes+wTax;
			
			if(factorAge<graphGapAge){
			//for the graph
				lastGraphAge=factorAge;
				rifObject=new Object();
				rifObject.age=factorAge;
				rifObject.value=netPaymentPerPeriod;
				console.log(JSON.stringify(rifObject));
				rifArray.push(rifObject);	
			}else{
				graphGapAge=factorAge+graphStep;
			}
			
			
			//prepare to save rifTableObject to backend session for print;
			rifTableObject=new Object();
			rifTableObject.age=factorAge;
			rifTableObject.value=netPaymentPerPeriod;
			rifTableObject.wTax=wTax;
			rifTableObject.minimum=minimum;
			rifTableObject.maximum=0;
			rifTableObject.returnOnInvestment=0;
			rifTableObject.rifFactor=Math.round(getRIFFactor2015(factorAge)*100*100)/100;
			rifTableObject.rifMinFactor=0;
			rifTableObject.rifMaxFactor=0;
			rifTableObject.valueOnJan=valueOnJan;
			rifTableObject.year=displayYear;
			rifTableObject.grossPerPay=grossPerPay;
			rifTableObject.totalNetPayouts=totalNetPayouts;
			rifTableObject.annualAmount=netPerPay;
			rifTableArray.push(rifTableObject);	
			//end
			
		}else{
			//will not display
			if(alreadyFound==false){
				balanceRemaining=valueOnJan;
				alreadyFound=true;
			}
			if(displayFlagForever==false){
				displayFlagForever=true;
			}
		}
		
		valueOnJan=yearEndValue;
		age=age+1;

		
		
		calcSummaryTableStr = "";
		calcSummaryTableErrorStr="";
		if(isMinimumAssume){
			console.log("will show minimum")
			calcSummaryTableErrorStr +="Si vous indiquez un paiement annuel inf&#233;rieur au paiement minimum annuel exig&#233; dans une ann&#233;e donn&#233;e, la calculatrice de FRR augmentera le paiement au montant minimum exig&#233;";
		}else{
			console.log("will not show minimum");
		}
		
		
		calcSummaryTableStr +="<table width='100%' cellspacing='0' cellpadding='0' border='0'>";
	
		 
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Ann&#233;es en vigueur :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += yearsActiveCount;
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Valeur initiale du r&#233;gime :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=  convertFrenchNumber(convertToMoney(startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Versement net :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalNetPayouts))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Imp&#244;ts retenus :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalWithholdingTaxes))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Solde restant :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(balanceRemaining))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='fs12n'>Rrevenu de placement :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=convertFrenchNumber(convertToMoney(balanceRemaining+totalNetPayouts+totalWithholdingTaxes-startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr += "</table>";		
	
		
	}
	
	if(lastGraphAge==null){
		lastGraphAge=factorAge;
	}
	var dummyGraphObject4=new Object();
	if((lastGraphAge+2)>100){
		dummyGraphObject4.age=100;
	}else{
		dummyGraphObject4.age=lastGraphAge+2;
	}
	
	dummyGraphObject4.value=0;	
	rifArray.push(dummyGraphObject4);
	
	var dummyGraphObject5=new Object();
	if((lastGraphAge+4)>100){
		dummyGraphObject5.age=100;
	}else{
		dummyGraphObject5.age=lastGraphAge+4;
	}
	dummyGraphObject5.value=0;	
	rifArray.push(dummyGraphObject5);
	
	var dummyGraphObject6=new Object();
	if((lastGraphAge+6)>100){
		dummyGraphObject6.age=100;
	}else{
		dummyGraphObject6.age=lastGraphAge+6;
	}
	dummyGraphObject6.value=0;	
	rifArray.push(dummyGraphObject6);
	
	if(rifTableArray.length==0){
		resultTableStr += "<tr class='table-data-row'><td class='table-data-cell table-data-cell-error' colspan='7'>Il n'y a pas d'informations disponibles pour cette recherche.</td></tr>"
		
		rifArray=[];
		var dummyGraphObjectEmpty=new Object();
		dummyGraphObjectEmpty.age=100;
		dummyGraphObjectEmpty.value=0;	
		rifArray.push(dummyGraphObjectEmpty);
		
	}
	
	endTbody();
	endTable();
	
	queryParameters+="&totalNetPayouts="+convertFrenchNumber(convertToMoney(totalNetPayouts))+"&balanceRemaining="+convertFrenchNumber(convertToMoney(balanceRemaining))+"&InvestmentIncome="+convertFrenchNumber(convertToMoney(balanceRemaining+totalNetPayouts+totalWithholdingTaxes-startingBalance))+"&totalWithholdingTaxes="+convertFrenchNumber(convertToMoney(totalWithholdingTaxes));
	
	//send the table data to backend session;
	
	var rifTableObjectJsonString;
	//if(rifTableArray.length>0){
		
		rifTableObjectJsonString=JSON.stringify(rifTableArray);
		console.log(rifTableObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/rrifCalcAction.action?lang=fr"+queryParameters, 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: rifTableObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		      
		        console.log("success save the data into session");
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});
	//}
}

function tfsaCalculatorRedesign2017(dateOfBirth, expectedROR, toAge, issueDate, firstPayDate, startingBalance, 
        selectionType, deductWHT, annualWithPercent, annualWithAmount, fundsPost1992, province, period,isMinimumAssume,accountType,firstYearBeginDate,pjIndex,paymentPer,currentAge,retireAge)
{
	tfsaArray=[];
	tfsaTableArray=[];
	resultTableStr = "";
	resultTableStr += "<table id='tablesorter_tfsacalculatorbox'  class='tablesorter calculated-data' width='100%' cellspacing='0' cellpadding='0' border='0' style=' table-layout:fixed'>";
	resultTableStr +="<col width=8%><col width=16%><col width=26%><col width=26%><col width=24%>	";
	writeTFSAHeader2015();
	writeTbody();
	
	console.log("open value "+startingBalance);
	console.log("ROR "+expectedROR);
	var birthYear=dateOfBirth;
	console.log("year of birth "+birthYear);
	console.log("open date "+issueDate);
	
	
	var firstPayYear=firstPayDate.getFullYear();
	//startAgeGettingPayment for get payment.should (Jan 1st firstPayDate- dateOfBirth). so if dob 1950.02.01. firstPaydate 2015.01.01
	var startAgeGettingPayment=parseInt(currentAge);
	
	console.log("startAgeGettingPayment:"+startAgeGettingPayment);
	var openYear=issueDate.getFullYear();
	//startAgeGettingContribution for investor begin to contribute the money and only get interest. should be(Jan 1st issueDate- dateOfBirth). so if issuedate 
	//2012.04.05, should convert to 2012.01.01 -1950.02.01
	
	var startAgeGettingContribution=parseInt(currentAge);	
	var tempAgeGettingContribution=startAgeGettingContribution;
	var tempStartBalance=startingBalance;
	
	//because 2012 investor only invest part of the year,so will calculate the yearfraction,2013,2014 will be whole year interest.	
	//var openYearEnd=getEndDateOfYear(issueDate.getFullYear());	console.log("open year end "+openYearEnd);
	var openYearEnd=firstPayDate;
	console.log("openYearEnd:"+openYearEnd);
	if(accountType=="1"){
		var openYearFraction= getYearFraction(issueDate,openYearEnd,0);
		console.log("openYearEnd:"+openYearEnd);  
    }else{
    	var newOpenYear=openYearEnd.getFullYear()-1;
    	var openMonth=openYearEnd.getMonth()+1;
    	var openDate=openYearEnd.getDate();
    	//console.log("newDate:"+openDate);
    	//console.log("new month:"+openMonth);
    	var newopenYearEnd=stringToDate2015(openMonth+"/"+openDate+"/"+newOpenYear);
    	console.log("newopenYearEnd:"+newopenYearEnd);
    	var openYearFraction= getYearFraction(issueDate,newopenYearEnd,0);
    }
	//console.log("open year fraction "+openYearFraction);
	var annualInterestEarning =getAnnualReturn2015(startingBalance,expectedROR);
	console.log("annual interest earning "+annualInterestEarning);
	var actualInterestEarning =getActualReturn2015(annualInterestEarning,openYearFraction);
	console.log("Actual Interesting Earning "+actualInterestEarning);
	
	
	var minpjvalue = 0;
	var maxpjvalue=  0;
	console.log("pjvalue min: "+minpjvalue+" max "+maxpjvalue);
	var age;
	var yearsActiveCount;
	console.log("openYear:"+openYear+" firstPayYear:"+firstPayYear+" selectionType:"+selectionType);
	var tempYearGettingContribution;
	
	var valueOnJan;
	var minimum;
	var maximum;
	var annualAnnualPayout;
	var grossAnnualPayout;
	var diffenence;
	var wTaxRate;
	var wTax;
	var netAnnualPayout;
	
	var grossPerPay;
	var netPerPay;
	var fv;
	var yearEndValue;

	var displayFlag;
	
	var totalNetPayouts=0;
	var totalWithholdingTaxes=0;

	var alreadyFound=false;
	var balanceRemaining=0;
	
	/**
	 * 
	 * if pre-exising  start year will be current year -1
	 * if new 		   start year will be current year
	 * 
	 * **/
	var firstMinValue;

	var rorPerDay=parseFloat(expectedROR/360);
	console.log("rorPerDay:"+rorPerDay);
	yearsActiveCount=0;
	
	

	console.log("Quebec Resident "+province);
	console.log("payment type "+selectionType);
	console.log("payment frequency "+period);

	console.log("startAgeGettingPayment: "+startAgeGettingPayment);
	console.log("selectionType: "+selectionType+" annualWithAmount: "+annualWithAmount);
	
	
	
	
	
	
		//new
		var firstYearEndValue=actualInterestEarning+startingBalance;
		firstMinValue=firstYearEndValue;
		tempStartBalance=firstMinValue;		
		age=startAgeGettingPayment;
		var tempAge=parseInt(age)
		
		
		console.log("start to draw the table");
		
		
		valueOnJan=tempStartBalance;
				
		//spreadsheet_v.4 2016.12.16, add graph
		//graphGapAge is every 2 graphGapAge will draw a bar
		var graphStep=2;
		var lastGraphAge;
		var graphGapAge=tempAge+1;
		console.log("graphGapAge "+graphGapAge);
	
	
	var minFactor=0;
	var maxFactor=0;
	var adjustedMaxFactor=0;
	var displayAge=0;
	var netPaymentPerPeriod=0;
	for ( var i = age; i <= retireAge; i++ )
	{ 
		
		
		displayYear  = parseInt(age)+parseInt(birthYear);// year of birth (4 digits)
		minFactor=0;
		maxFactor=0;
		
		minimum=0;
		maximum=0;
		

		var requestAmount=0;
		requestAmount=annualWithAmount;
		netPerPay=requestAmount;//payment	
		var tfsaPaysper=period;	
		var tfsaPayperAmount=-1*netPerPay/tfsaPaysper;
		fv=-1*FV2015(expectedROR/period,period,tfsaPayperAmount,valueOnJan,1);
		var tfsainterest=fv-(valueOnJan-netPerPay);
		
		var tfsaNetPayment=0;
		if(parseFloat(netPerPay)-parseFloat(valueOnJan)>0){
			tfsaNetPayment=parseFloat(valueOnJan)+tfsainterest;
		}else{
			tfsaNetPayment=netPerPay;
		}
		netPaymentPerPeriod=getNetPerPay(tfsaNetPayment,period);
		
		console.log("year="+displayYear+" age="+age+"valueOnJan="+valueOnJan+" request amt:"+netPerPay+" net Payment:"+tfsaNetPayment+" pays per:"+tfsaPaysper+" pay per:"+tfsaPayperAmount+" ror:"+expectedROR+" fv:"+fv+" tfsainterest:"+tfsainterest+" nettfsaPayment:"+tfsaNetPayment);
		
		yearEndValue=fv;
		displayFlag=getDisplayFlag(valueOnJan,annualWithAmount,age);
		
		if(displayFlag==false){
			
			//will display 
			
			yearsActiveCount=yearsActiveCount+1;
			beginRow("table-data-row");

			displayAge=parseInt(age); 
			beginRowDataCenter();
			resultTableStr += displayAge;
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(valueOnJan));
			endRowData();
			

			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(tfsainterest));
			endRowData();
			
	
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(tfsaNetPayment));
			endRowData();
			
			beginRowData("table-data-right");
			resultTableStr += convertFrenchNumber(convertToMoney(netPaymentPerPeriod));
			endRowData();
			totalNetPayouts=totalNetPayouts+netPaymentPerPeriod*period;
			totalWithholdingTaxes=0;
			
			if(displayAge<graphGapAge){
			//for the graph
				lastGraphAge=displayAge;
				tfsaObject=new Object();
				tfsaObject.age=displayAge;
				tfsaObject.value=tfsainterest;
				console.log(JSON.stringify(tfsaObject));
				tfsaArray.push(tfsaObject);	
			}else{
				graphGapAge=displayAge+graphStep;
			}
			
			
			//prepare to save tfsaTableObject to backend session for print;
			tfsaTableObject=new Object();
			tfsaTableObject.age=displayAge;
			tfsaTableObject.value=netPaymentPerPeriod;
			tfsaTableObject.wTax=0;
			tfsaTableObject.minimum=0;
			tfsaTableObject.maximum=0;
			tfsaTableObject.returnOnInvestment=tfsainterest;
			tfsaTableObject.rifFactor=0;
			tfsaTableObject.valueOnJan=valueOnJan;
			tfsaTableObject.year=displayYear;
			tfsaTableObject.grossPerPay=0;
			tfsaTableObject.totalNetPayouts=totalNetPayouts;
			tfsaTableObject.annualAmount=tfsaNetPayment;
			tfsaTableObject.rifMinFactor=0;
			tfsaTableObject.rifMaxFactor=0;
			tfsaTableArray.push(tfsaTableObject);	
			//end
			
		}else{
			//will not display
			if(alreadyFound==false){
				balanceRemaining=valueOnJan;
				alreadyFound=true;
			}
		}
		
		valueOnJan=yearEndValue;
		age=age+1;

		
		
		calcSummaryTableStr = "";
		calcSummaryTableErrorStr="";
		
		
		
		calcSummaryTableStr +="<table width='100%' cellspacing='0' cellpadding='0' border='0'>";
	
		 
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Ann&#233;es en vigueur :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += yearsActiveCount;
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Valeur initiale du r&#233;gime :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=  convertFrenchNumber(convertToMoney(startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Retrait net :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(totalNetPayouts))+" $";
		calcSummaryTableStr +="</td></tr>";
		

		
		calcSummaryTableStr +="<tr><td class='pb10 fs12n summarylabel'>Solde restant :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr += convertFrenchNumber(convertToMoney(balanceRemaining))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		
		calcSummaryTableStr +="<tr><td class='fs12n'>Rrevenu de placement :</td><td class='fs12n' align='right'>";
		calcSummaryTableStr +=convertFrenchNumber(convertToMoney(balanceRemaining+totalNetPayouts+totalWithholdingTaxes-startingBalance))+" $";
		calcSummaryTableStr +="</td></tr>";
		
		calcSummaryTableStr += "</table>";				
	
		
	}
	
	if(lastGraphAge==null){
		lastGraphAge=age;
	}
	
	
	if(tfsaTableArray.length==0){
		resultTableStr += "<tr class='table-data-row'><td class='table-data-cell table-data-cell-error' colspan='7'>Il n'y a pas d'informations disponibles pour cette recherche.</td></tr>"
		
		tfsaArray=[];
		var dummyGraphObjectEmpty=new Object();
		dummyGraphObjectEmpty.age=100;
		dummyGraphObjectEmpty.value=0;	
		tfsaArray.push(dummyGraphObjectEmpty);
		
	}
	
	endTbody();
	endTable();
	
	queryParameters+="&totalNetPayouts="+convertFrenchNumber(convertToMoney(totalNetPayouts))+"&balanceRemaining="+convertFrenchNumber(convertToMoney(balanceRemaining))+"&InvestmentIncome="+convertFrenchNumber(convertToMoney(balanceRemaining+totalNetPayouts+totalWithholdingTaxes-startingBalance))+"&totalWithholdingTaxes="+convertFrenchNumber(convertToMoney(totalWithholdingTaxes));
	
	//send the table data to backend session;
	
	var tfsaTableObjectJsonString;
	
		
		tfsaTableObjectJsonString=JSON.stringify(tfsaTableArray);
		console.log(tfsaTableObjectJsonString);
		$.ajax({ 
		    url: "/t2scr/static/app/tools/rifcalc/rrifCalcAction.action?lang=fr"+queryParameters, 
		    type: "POST",
		    // The key needs to match your method's input parameter (case-sensitive).
		    data: tfsaTableObjectJsonString,
		    contentType: "application/json; charset=utf-8",      
		    dataType: "text", 
		    success: function(data){ 
		      
		        console.log("success save the data into session");
		    }, 
		    error:function(){ 
		        alert("failure"+data); 
		    } 
		});

}


function runRIF2017(myForm)
{
	console.log("run RRIF 2017");   
	queryParameters=null;
	   var dob=myForm.txtBirthDate.value;
	   var dateOfBirth=dob;
		  /* if(dob!=""){
			    dateOfBirth = stringToDate2015(dob);
		   }*/
	   var todayDate=new Date();
	   var issueDate=todayDate;
	   var issdate=myForm.txtIssueDate.value;
	   // var issueDate=stringToDate2015(issdate);
	   console.log("issueDate"+issueDate+"dateOfBirth"+dateOfBirth);
	  /* if (issueDate == null || issueDate == false)
	   {
	      myForm.txtIssueDate.focus();
	      return false;
	   }*/
	   var expectedROR=prepareFrenchPercent(myForm.txtROR.value);
	   console.log(expectedROR);
	   var adjustedROR=getAdjustedROR(expectedROR);
	   console.log("adjustedROR"+adjustedROR);
	   var lastAge = prepareFrenchNumber("100");
	   var startingBalance = prepareFrenchNumber(myForm.txtPlanValue.value);
	   var selectionType = identifySelectionType(myForm.paymentType.value);
	   console.log("startingBalance"+startingBalance+" selectionType "+selectionType);
	   var period = prepareFrenchNumber(myForm.paymentFreq.value);
	   console.log("period is "+period+" mapsize"+MAP_SIZE);
	   paymentFreqName="";
	   for ( i = 0; i < MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gPeriodValue[i])==parseFloat(period)){
	   			paymentFreqName = gPeriods[i];
	   		}	  
	   }
	   
	   
	   var firstYearEndDate;
	   var firstYearBeginDate;
	   
	   var accountType=parseInt(myForm.accountType.value); //   1:pre-existing,2:new
	   var atName="";
	   for ( i = 0; i < ACCOUNT_TYPE_MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gAccountTypeValue[i])==parseFloat(accountType)){
	   			atName = gAccountTypes[i];
	   		}	  
	   }
	   console.log("accountType is: "+accountType);
	   if(accountType=="1"){
		   
		   firstYearEndDate =stringToDate2015("12/31/"+todayDate.getFullYear());
		   firstYearBeginDate=stringToDate2015("01/01/"+todayDate.getFullYear());
	   }else{
		   var adjustedYear=prepareNumber(todayDate.getFullYear())+1;
		   firstYearEndDate=stringToDate2015("12/31/"+adjustedYear);
		   firstYearBeginDate=stringToDate2015("01/01/"+adjustedYear);
		   
	   }
	   
	   //  var firstYearEndDate=getSmartFirstPaymentDate2015(issueDate,period);
	   console.log("first year begin: "+firstYearBeginDate+" first year end: "+firstYearEndDate);
	  // var firstYearBeginDate=getSmartBeginDate2015(issueDate);
	   var deductWHT=myForm.deductWithTax.value;
	   console.log("deductWHT"+deductWHT);
	   if(deductWHT=="true"){
		   var province = evaluateResidence(myForm.quebecResident.value);
	   }else{ 
		   var province = evaluateResidence("no"); 
	   }
	   
	   console.log("province: "+province);
	   
	   var post1992 ;
	   //alert(post1992);
	   
	   var annualWithPercent=0.0;
	   var annualWithAmount=0.0;
	   var paymentPer=0.0;
	   var pjIndex  = myForm.pensionJurisdictionOptions.selectedIndex;
	   var pjName="";
	   for ( i = 0; i < Pension_Jurisdiction_MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gPensionJurisdictionValue[i])==parseFloat(pjIndex)){
	   			pjName = gPensionJurisdictions[i];
	   		}	  
	   }
	   
	   var minpjvalue = gPensionJurisdictionMinValue[pjIndex];
	   var maxpjvalue=  gPensionJurisdictionMaxValue[pjIndex];
	   console.log("pjvalue min: "+minpjvalue+" max "+maxpjvalue);
	   paymentPer=prepareFrenchNumber(myForm.txtAmount.value);
	   annualWithAmount=getAnnualPayment2017(paymentPer,period)
	
	   var minimumAssume=preRIFCalculator2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,accountType,firstYearBeginDate);
	   console.log("pre calculation:"+minimumAssume+" paymentPer "+paymentPer);
	   console.log("dateOfBirth"+ dateOfBirth+"adjustedROR"+adjustedROR+"lastAge"+lastAge+"issueDate"+issueDate+"firstYearEndDate"+firstYearEndDate+"startingBalance"+startingBalance+"selectionType"+selectionType+"deductWHT"+deductWHT+"annualWithPercent"+annualWithPercent+"annualWithAmount"+annualWithAmount+ "post1992"+post1992+"province"+province+"period"+period);
	   queryParameters="&issueDate="+issdate+"&startBalance="+startingBalance+"&DOB="+dob+"&quebecResident="+myForm.quebecResident.value+"&paymentType="+myForm.paymentType.value+"&paymentFrequency="+paymentFreqName+"&deductWHT="+deductWHT+"&ror="+myForm.txtROR.value+"&pjName="+pjName+"&atName="+atName+"&planType=FERR"+"&paymentPer="+paymentPer;;
	   
	   if(selectionType==1){
		   //if payment Type is Annual dollar amount, then will compare the annual withdrawal amount with minimum amount,
		   //if annual withdrawal amount< minimum, then show the minimum result
		   if(parseFloat(paymentPer)<parseFloat(minimumAssume)){
			   rifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,true,accountType,firstYearBeginDate,paymentPer);
		   }else{
			   
			   rifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false,accountType,firstYearBeginDate,paymentPer);
		   }
	   }else{
	   		rifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false,accountType,firstYearBeginDate,paymentPer);
		}
	   
	// Build table sorter pagination sector
	   console.log("queryParameters="+queryParameters);
	   console.log("rifTableArray size is "+rifTableArray.length);
	   var table_size=parseInt(rifTableArray.length);
	   var perPageOptions ="";
	   
	   
	   $('#calculator-result-body').html(calcSummaryTableStr + rifSummary);
	   if(calcSummaryTableErrorStr!=""){
		   $('#calculationError').html(calcSummaryTableErrorStr);
		   $('#doShowSummaryError').val('true');
		   $('#calculationError').show();
		   $('.summarylabel').removeClass('pb10');
		   $('.summarylabel').addClass('pb5');
		   
	   }else{
		   $('#doShowSummaryError').val('false');
		   $('#calculationError').hide();
	   }
	   
	   if(table_size == 0){
		   $("#rif-calculator-pager").attr("style","display: none");
		   $("#result_summary_container").addClass("noValue");
		   $('#rif-calculator-result-table').html(resultTableStr);
	   }else{
		   if(table_size<=10 ){
		 	 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option>";
		 	
		   }else if(table_size>10&&table_size<=20){
			 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option>";
		
		   }else{
		   //table_size>20
		  	perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option><option value='30'>30</option>";
		
		   }
		   $("#result_summary_container").removeClass("noValue");
		   var paginationString = '<table  width="100%" cellpadding="0" cellspacing="0"><tr><td class="table-container-header-sub-title" width="20%"></td><td class="table-container-header-pager pb10" width="80%" align="right" valign="bottom"><table border="0" cellpadding="0" cellspacing="0"><tr><td><div id="rifCalculatorResultPager" class="pagerAGFRedesign pager rifCalculatorPagerForNoneIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pt8 pr5"><span id="rrifprevButton" class="prev clickable dib vam pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="rrifpagesID"><span>Pages:</span><select class="gotoPage select" id="rrifgotoPageID" style="width: 57px;"></select></td><td class="pt5 pr5"><ul  class="pagecount" > </ul></td><td class="pt8 pr25"><span id="rrifnextButton" class="next clickable dib vam pager-text" >Suivant > </span></td><td class="pt4"><select class="pagesize select" id="rrifperPageID" style="width: 57px;" >'+perPageOptions+'</select><span class="pl5 perPage"> PAR PAGE</span></td></td></tr></table></div><div id="rifCalculatorResultPager" class="pagerAGFRedesign pager rifCalculatorPagerForIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pr5 vam"><span id="rrifprevButton" class="prev clickable pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="rrifpagesID"><select class="gotoPage select" id="rrifgotoPageID" style="width: 57px;"></select></td><td class="pr5"><ul  class="pagecount" style="vertical-align:3px" > </ul></td><td class="pr25 vam"><span id="rrifnextButton" class="next clickable pager-text" >Suivant ></span></td><td class="pr5 pt5"><select class="pagesize select" id="rrifperPageID" style="width: 57px;" >'+perPageOptions+'</select></td><td class="vam"><span class="perPage"> PAR PAGE</span></td></tr></table></div></td></tr></table></td></tr></table>';
		   //var topBarString = '<div class="table-top-bar"><img border="0" src="/t2scr/sharedDeployedT2scrWeb/images/dot.gif" width="1" height="5" /></div>';
		   // Set result to result DIV
		   $("#rif-calculator-pager").attr("style","display: ");
		   $('#rif-calculator-pager').html(paginationString);
		   
		   
		   $('#rif-calculator-result-table').html(resultTableStr);
		   //$('div#calc-result-container').html(paginationString+topBarString+resultTableStr);
		  
		  
		   if (!!document.documentMode) {	
			//ie
				$(".rifCalculatorPagerForNoneIE").remove();
			}else{

				$(".rifCalculatorPagerForIE").remove();
			}
		   
		   var pagerOptions = {
				// target the pager markup - see the HTML block below
				container: $("#rifCalculatorResultPager"),

				// use this url format "http:/mydatabase.com?page={page}&size={size}"
				ajaxUrl: null,

				// process ajax so that the data object is returned along with the total number of rows
				// example: { "data" : [{ "ID": 1, "Name": "Foo", "Last": "Bar" }], "total_rows" : 100 }
				ajaxProcessing: function(ajax){
					if (ajax && ajax.hasOwnProperty('data')) {
						// return [ "data", "total_rows" ];
						return [ ajax.data, ajax.total_rows ];
					}
				},

				// output string - default is '{page}/{totalPages}'
				// possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
				output: '{startRow} to {endRow} ({totalRows})',

				// apply disabled classname to the pager arrows when the rows at either extreme is visible - default is true
				updateArrows: true,

				// starting page of the pager (zero based index)
				page: 0,

				// Number of visible rows - default is 10
				size: 10,

				// if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
				// table row set to a height to compensate; default is false
				fixedHeight: true,

				// remove rows from the table to speed up the sort of large tables.
				// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
				removeRows: false,

				// css class names of pager arrows
				cssNext: '.next', // next page arrow
				cssPrev: '.prev', // previous page arrow
				cssFirst: '.first', // go to first page arrow
				cssLast: '.last', // go to last page arrow
				cssGoto: '.gotoPage', // select dropdown to allow choosing a page

				//cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
				cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option

				// class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
				cssDisabled: 'disabled' // Note there is no period "." in front of this class name

			};
		   
		   //Tablesorter config 
			$("#tablesorter_rifcalculatorbox")
				.bind("pagerInitialized pagerComplete",function(e,c) { 
				 var i, pages = '', t = [],
		         cur = c.page + 1,
		         start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
		         end = cur < 3 ? 5 - cur : 2;
		         for (i = start; i < end; i++) {
				         if (cur + i >= 1 && cur + i < c.totalPages) { t.push( cur + i ); }
				     }
				        // make sure first and last page are included in the pagination
				        if ($.inArray(1, t) === -1) { t.push(1); }
				        if ($.inArray(c.totalPages, t) === -1) { t.push(c.totalPages); }
				        // sort the list
				        t = t.sort(function(a, b){ return a - b; });
				        // make links and spacers
				        $.each(t, function(j, v){
				            pages += '<li id="' + v + '"><a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a></li>';
				           // pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : ' | ' );
				           	pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ?'<li id="' + (j==0?'p':'n') + '"><a href="#" >' + '...' + '</a></li>' : ( j >= t.length - 1 ? '' : '  ' );
				           
				            // console.log("cur:"+cur+" v:"+v+" j:"+j+" t[j+1]:"+t[j+1]+" tlength:"+ t.length);
				             
				        });
				        $('.pagecount').html(pages);
				 })
				.tablesorter({
					theme: 'default',
					widthFixed: true,
					headers:{
						0: {sorter: false},
						1: {sorter: false},
						2: {sorter: false},
						3: {sorter: false},
						4: {sorter: false},
						5:{sorter: false}, 
						6:{sorter: false}, 
						7:{sorter: false},
						8:{sorter: false},
						9:{sorter: false}
						},
					widgets: ['zebra']
				})
		   .tablesorterPager(pagerOptions)
			.bind("pageMoved",function() { 
				$("#rrifgotoPageID").multiselect('refresh');
				 }); 
		   
			$("#rrifperPageID").multiselect({
				height:				"auto",
				minWidth:			50,
				multiple: 			false,
				header:				false,
				selectedList: 		1,		
				classes:			"custom-pager-select custom-menu rrifperPageID",
				beforeopen: function() {
					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						globalTempScrollTop = document.documentElement.scrollTop;
						window.scrollTo(0,0);							
					}					
				},					
				open: function() {
					$("button.rrifperPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');

					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						document.documentElement.scrollTop = globalTempScrollTop;
					}					
				},	
				close: function() {
					$("button.rrifperPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
				}			
			});
			$("button.rrifperPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
			setTimeout(function() {$("#rrifperPageID").next('button.ui-multiselect').width(50);},15);
			
			
		    $("#rrifgotoPageID").multiselect({
				height:				"auto",
				minWidth:			50,
				multiple: 			false,
				header:				false,
				selectedList: 		1,		
				classes:			"custom-pager-select custom-menu rrifgotoPageID",
				beforeopen: function() {
					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						globalTempScrollTop = document.documentElement.scrollTop;
						window.scrollTo(0,0);							
					}					
				},					
				open: function() {
					$("button.rrifgotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');

					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						document.documentElement.scrollTop = globalTempScrollTop;
					}					
				},	
				close: function() {
					$("button.rrifgotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
				}			
			});
			$("button.rrifgotoPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
			setTimeout(function() {$("#rrifgotoPageID").next('button.ui-multiselect').width(50);},15);
			
			
			$("#rrifperPageID").change(function () {	
			 	$("#rrifgotoPageID").multiselect('refresh');
			 	$(".calculator-result-container").css("height","auto");
			 	if(prepareNumber($("#rrifperPageID").val())<20){
			 		var rowCount=$("#tablesorter_rifcalculatorbox tr").length;
			 		if(rowCount >8){
						$(".calculator-result-container").css("height","auto");
					}else{
						$(".calculator-result-container").height($("#search-container").height());
					}
			 	}
			 	
			 	

			});	
			
			$('.pager .pagecount').bind('click', 'a', function(e){
			    //console.log("click11");
			    e.preventDefault();
			    var parentNode=$(e.target).parent(); 
			     
				console.log($(parentNode).attr("id"));

				var pageNumber=$(parentNode).attr("id");	
				var pg;	
				var pgindex;	
				var currentPageParentNode=$(".current").parent();
				var currentPageNumber=$("#rrifgotoPageID").val();					
				if(pageNumber.indexOf("p")!=-1){
					//previous action
					console.log("previous "+currentPageNumber);
					pg=parseInt(currentPageNumber)-1;
					pgindex=$("#rrifgotoPageID option[value="+pg+"]").index();
				}else if(pageNumber.indexOf("n")!=-1){
					//next action
					console.log("next "+currentPageNumber);
					pg=parseInt(currentPageNumber)+1;
					pgindex=$("#rrifgotoPageID option[value="+pg+"]").index();
					
				}else{
					console.log("normal");
					pg=parseInt(pageNumber);
					pgindex=$("#rrifgotoPageID option[value="+pg+"]").index();
				}
				console.log("currentpg "+pg+" pgindex "+pgindex);		
				$("#rrifgotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
			   	$("#rrifgotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
				$("#rrifgotoPageID").multiselect('refresh');
				$('#rrifgotoPageID').trigger("change");
		    });
			$("#rrifpagesID").attr("style","display: none");	
	   }

}
function runLIF2017(myForm)
{
	console.log("run LIF 2017");   
	queryParameters=null;
	   var dob=myForm.txtBirthDate.value;
	   var dateOfBirth=dob;
	  /* if(dob!=""){
		    dateOfBirth = stringToDate2015(dob);
	   }*/
	   var todayDate=new Date();
	   var issueDate=todayDate;
	   var issdate=myForm.txtIssueDate.value;
	   // var issueDate=stringToDate2015(issdate);
	   console.log("issueDate"+issueDate+"dateOfBirth"+dateOfBirth);
	  /* if (issueDate == null || issueDate == false)
	   {
	      myForm.txtIssueDate.focus();
	      return false;
	   }*/
	   var expectedROR=prepareFrenchPercent(myForm.txtROR.value);
	   console.log(expectedROR);
	   var adjustedROR=getAdjustedROR(expectedROR);
	   console.log("adjustedROR"+adjustedROR);
	   var lastAge = prepareFrenchNumber("100");
	   var startingBalance = prepareFrenchNumber(myForm.txtPlanValue.value);
	   var selectionType = identifySelectionType(myForm.paymentType.value);
	   console.log("startingBalance"+startingBalance+" selectionType "+selectionType);
	   var period = prepareFrenchNumber(myForm.paymentFreq.value);
	   console.log("period is "+period+" mapsize"+MAP_SIZE);
	   paymentFreqName="";
	   for ( i = 0; i < MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gPeriodValue[i])==parseFloat(period)){
	   			paymentFreqName = gPeriods[i];
	   		}	  
	   }
	   
	   
	   var firstYearEndDate;
	   var firstYearBeginDate;
	   var accountType=parseInt(myForm.accountType.value); //   1:pre-existing,2:new
	   var atName="";
	   for ( i = 0; i < ACCOUNT_TYPE_MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gAccountTypeValue[i])==parseFloat(accountType)){
	   			atName = gAccountTypes[i];
	   		}	  
	   }
	   
	   console.log("accountType is: "+accountType);
	   if(accountType=="1"){
		   
		   firstYearEndDate =stringToDate2015("12/31/"+todayDate.getFullYear());
		   firstYearBeginDate=stringToDate2015("01/01/"+todayDate.getFullYear());
	   }else{
		   var adjustedYear=prepareNumber(todayDate.getFullYear())+1;
		   firstYearEndDate=stringToDate2015("12/31/"+adjustedYear);
		   firstYearBeginDate=stringToDate2015("01/01/"+adjustedYear);
		   
	   }
	 //  var firstYearEndDate=getSmartFirstPaymentDate2015(issueDate,period);
	   console.log("first year begin: "+firstYearBeginDate+" first year end: "+firstYearEndDate);
	  // var firstYearBeginDate=getSmartBeginDate2015(issueDate);
	   var deductWHT=myForm.deductWithTax.value;
	   console.log("deductWHT"+deductWHT);
	   if(deductWHT=="true"){
		   var province = evaluateResidence(myForm.quebecResident.value);
	   }else{ 
		   var province = evaluateResidence("no"); 
	   }
	   
	   console.log("province: "+province);
	   
	   var post1992 ;
	   //alert(post1992);
	   
	   var annualWithPercent=0.0;
	   var annualWithAmount=0.0;
	   var paymentPer=0.0;
	   var pjIndex  = myForm.pensionJurisdictionOptions.selectedIndex;
	   var pjName="";
	   for ( i = 0; i < Pension_Jurisdiction_MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gPensionJurisdictionValue[i])==parseFloat(pjIndex)){
	   			pjName = gPensionJurisdictions[i];
	   		}	  
	   }
	   
	   paymentPer=prepareFrenchNumber(myForm.txtAmount.value);
	   annualWithAmount=getAnnualPayment2017(paymentPer,period);
	   //var minimumAssume=preRIFCalculator2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,accountType,firstYearBeginDate);
	   var minimumAssume=preLIFCalculatorMIN2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,accountType,firstYearBeginDate,pjIndex,paymentPer);
	   var maximumAssume=preLIFCalculatorMAX2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,accountType,firstYearBeginDate,pjIndex,paymentPer);
	   console.log("pre calculation:"+minimumAssume+" payment per period "+paymentPer);
	   console.log("dateOfBirth"+ dateOfBirth+"adjustedROR"+adjustedROR+"lastAge"+lastAge+"issueDate"+issueDate+"firstYearEndDate"+firstYearEndDate+"startingBalance"+startingBalance+"selectionType"+selectionType+"deductWHT"+deductWHT+"annualWithPercent"+annualWithPercent+"annualWithAmount"+annualWithAmount+ "post1992"+post1992+"province"+province+"period"+period);
	   queryParameters="&issueDate="+issdate+"&startBalance="+startingBalance+"&DOB="+dob+"&quebecResident="+myForm.quebecResident.value+"&paymentType="+myForm.paymentType.value+"&paymentFrequency="+paymentFreqName+"&deductWHT="+deductWHT+"&ror="+myForm.txtROR.value+"&pjName="+pjName+"&atName="+atName+"&planType=FRV";
	   
	   
	   
	   if(selectionType==1){
		   //if payment Type is Annual dollar amount, then will compare the annual withdrawal amount with minimum amount,
		   //if annual withdrawal amount< minimum, then show the minimum result
		   if(parseFloat(paymentPer)<parseFloat(minimumAssume)){
			   lifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,true,false,accountType,firstYearBeginDate,pjIndex,paymentPer);
			   
		   }else if(parseFloat(paymentPer)>parseFloat(maximumAssume)){
			   lifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false,true,accountType,firstYearBeginDate,pjIndex,paymentPer);
			   
		   }else{
			   
			   lifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false,false,accountType,firstYearBeginDate,pjIndex,paymentPer);
			   
		   }
	   }else{
		   lifCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false,false,accountType,firstYearBeginDate,pjIndex,paymentPer);
		   
		}
	// Build table sorter pagination sector
	   console.log("queryParameters="+queryParameters);
	   console.log("lifTableArray size is "+lifTableArray.length);
	   var table_size=parseInt(lifTableArray.length);
	   var perPageOptions ="";
	   
	   
	   $('#calculator-result-body').html(calcSummaryTableStr + lifSummary);
	   if(calcSummaryTableErrorStr!=""){
		   $('#calculationError').html(calcSummaryTableErrorStr);
		   $('#doShowSummaryError').val('true');
		   $('#calculationError').show();
		   $('.summarylabel').removeClass('pb10');
		   $('.summarylabel').addClass('pb5');
		   
	   }else{
		   $('#doShowSummaryError').val('false');
		   $('#calculationError').hide();
	   }
	   
	   if(table_size == 0){
		   $("#lif-calculator-pager").attr("style","display: none");
		   $("#result_summary_container").addClass("noValue");
		   $('#lif-calculator-result-table').html(resultTableStr);
	   }else{
		   if(table_size<=10 ){
		 	 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option>";
		 	
		   }else if(table_size>10&&table_size<=20){
			 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option>";
		
		   }else{
		   //table_size>20
		  	perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option><option value='30'>30</option>";
		
		   }
		   $("#result_summary_container").removeClass("noValue");
		   var paginationString = '<table  width="100%" cellpadding="0" cellspacing="0"><tr><td class="table-container-header-sub-title" width="20%"></td><td class="table-container-header-pager pb10" width="80%" align="right" valign="bottom"><table border="0" cellpadding="0" cellspacing="0"><tr><td><div id="lifCalculatorResultPager" class="pagerAGFRedesign pager lifCalculatorPagerForNoneIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pt8 pr5"><span id="lifprevButton" class="prev clickable dib vam pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="lifpagesID"><span>Pages:</span><select class="gotoPage select" id="lifgotoPageID" style="width: 57px;"></select></td><td class="pt5 pr5"><ul  class="pagecount" > </ul></td><td class="pt8 pr25"><span id="lifnextButton" class="next clickable dib vam pager-text" >Suivant > </span></td><td class="pt4"><select class="pagesize select" id="lifperPageID" style="width: 57px;" >'+perPageOptions+'</select><span class="pl5 perPage"> PAR PAGE</span></td></td></tr></table></div><div id="lifCalculatorResultPager" class="pagerAGFRedesign pager lifCalculatorPagerForIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pr5 vam"><span id="lifprevButton" class="prev clickable pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="lifpagesID"><select class="gotoPage select" id="lifgotoPageID" style="width: 57px;"></select></td><td class="pr5"><ul  class="pagecount" style="vertical-align:3px" > </ul></td><td class="pr25 vam"><span id="lifnextButton" class="next clickable pager-text" >Suivant ></span></td><td class="pr5 pt5"><select class="pagesize select" id="lifperPageID" style="width: 57px;" >'+perPageOptions+'</select></td><td class="vam"><span class="perPage"> PAR PAGE</span></td></tr></table></div></td></tr></table></td></tr></table>';
		   //var topBarString = '<div class="table-top-bar"><img border="0" src="/t2scr/sharedDeployedT2scrWeb/images/dot.gif" width="1" height="5" /></div>';
		   // Set result to result DIV
		   $("#lif-calculator-pager").attr("style","display: ");
		   $('#lif-calculator-pager').html(paginationString);
		   
		   
		   $('#lif-calculator-result-table').html(resultTableStr);
		   //$('div#calc-result-container').html(paginationString+topBarString+resultTableStr);
		  
		  
		   if (!!document.documentMode) {	
			//ie
				$(".lifCalculatorPagerForNoneIE").remove();
			}else{

				$(".lifCalculatorPagerForIE").remove();
			}
		   
		   var pagerOptions = {
				// target the pager markup - see the HTML block below
				container: $("#lifCalculatorResultPager"),

				// use this url format "http:/mydatabase.com?page={page}&size={size}"
				ajaxUrl: null,

				// process ajax so that the data object is returned along with the total number of rows
				// example: { "data" : [{ "ID": 1, "Name": "Foo", "Last": "Bar" }], "total_rows" : 100 }
				ajaxProcessing: function(ajax){
					if (ajax && ajax.hasOwnProperty('data')) {
						// return [ "data", "total_rows" ];
						return [ ajax.data, ajax.total_rows ];
					}
				},

				// output string - default is '{page}/{totalPages}'
				// possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
				output: '{startRow} to {endRow} ({totalRows})',

				// apply disabled classname to the pager arrows when the rows at either extreme is visible - default is true
				updateArrows: true,

				// starting page of the pager (zero based index)
				page: 0,

				// Number of visible rows - default is 10
				size: 10,

				// if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
				// table row set to a height to compensate; default is false
				fixedHeight: true,

				// remove rows from the table to speed up the sort of large tables.
				// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
				removeRows: false,

				// css class names of pager arrows
				cssNext: '.next', // next page arrow
				cssPrev: '.prev', // previous page arrow
				cssFirst: '.first', // go to first page arrow
				cssLast: '.last', // go to last page arrow
				cssGoto: '.gotoPage', // select dropdown to allow choosing a page

				//cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
				cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option

				// class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
				cssDisabled: 'disabled' // Note there is no period "." in front of this class name

			};
		   
		   //Tablesorter config 
			$("#tablesorter_lifcalculatorbox")
				.bind("pagerInitialized pagerComplete",function(e,c) { 
				 var i, pages = '', t = [],
		         cur = c.page + 1,
		         start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
		         end = cur < 3 ? 5 - cur : 2;
		         for (i = start; i < end; i++) {
				         if (cur + i >= 1 && cur + i < c.totalPages) { t.push( cur + i ); }
				     }
				        // make sure first and last page are included in the pagination
				        if ($.inArray(1, t) === -1) { t.push(1); }
				        if ($.inArray(c.totalPages, t) === -1) { t.push(c.totalPages); }
				        // sort the list
				        t = t.sort(function(a, b){ return a - b; });
				        // make links and spacers
				        $.each(t, function(j, v){
				            pages += '<li id="' + v + '"><a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a></li>';
				           // pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : ' | ' );
				           	pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ?'<li id="' + (j==0?'p':'n') + '"><a href="#" >' + '...' + '</a></li>' : ( j >= t.length - 1 ? '' : '  ' );
				           
				            // console.log("cur:"+cur+" v:"+v+" j:"+j+" t[j+1]:"+t[j+1]+" tlength:"+ t.length);
				             
				        });
				        $('.pagecount').html(pages);
				 })
				.tablesorter({
					theme: 'default',
					widthFixed: true,
					headers:{
						0: {sorter: false},
						1: {sorter: false},
						2: {sorter: false},
						3: {sorter: false},
						4: {sorter: false},
						5:{sorter: false}, 
						6:{sorter: false}, 
						7:{sorter: false},
						8:{sorter: false},
						9:{sorter: false}
						},
					widgets: ['zebra']
				})
		   .tablesorterPager(pagerOptions)
			.bind("pageMoved",function() { 
				$("#lifgotoPageID").multiselect('refresh');
				 }); 
		   
			$("#lifperPageID").multiselect({
				height:				"auto",
				minWidth:			50,
				multiple: 			false,
				header:				false,
				selectedList: 		1,		
				classes:			"custom-pager-select custom-menu lifperPageID",
				beforeopen: function() {
					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						globalTempScrollTop = document.documentElement.scrollTop;
						window.scrollTo(0,0);							
					}					
				},					
				open: function() {
					$("button.lifperPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');

					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						document.documentElement.scrollTop = globalTempScrollTop;
					}					
				},	
				close: function() {
					$("button.lifperPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
				}			
			});
			$("button.lifperPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
			setTimeout(function() {$("#lifperPageID").next('button.ui-multiselect').width(50);},15);
			
			
		    $("#lifgotoPageID").multiselect({
				height:				"auto",
				minWidth:			50,
				multiple: 			false,
				header:				false,
				selectedList: 		1,		
				classes:			"custom-pager-select custom-menu lifgotoPageID",
				beforeopen: function() {
					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						globalTempScrollTop = document.documentElement.scrollTop;
						window.scrollTo(0,0);							
					}					
				},					
				open: function() {
					$("button.lifgotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');

					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						document.documentElement.scrollTop = globalTempScrollTop;
					}					
				},	
				close: function() {
					$("button.lifgotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
				}			
			});
			$("button.lifgotoPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
			setTimeout(function() {$("#lifgotoPageID").next('button.ui-multiselect').width(50);},15);
			
			
			$("#lifperPageID").change(function () {	
			 	$("#lifgotoPageID").multiselect('refresh');
			 	$(".calculator-result-container").css("height","auto");
			 	if(prepareNumber($("#lifperPageID").val())<20){
			 		var rowCount=$("#tablesorter_lifcalculatorbox tr").length;
			 		if(rowCount >8){
						$(".calculator-result-container").css("height","auto");
					}else{
						$(".calculator-result-container").height($("#search-container").height());
					}
			 	}
			 	
			 	

			});	
			
			$('.pager .pagecount').bind('click', 'a', function(e){
			    //console.log("click11");
			    e.preventDefault();
			    var parentNode=$(e.target).parent(); 
			     
				console.log($(parentNode).attr("id"));

				var pageNumber=$(parentNode).attr("id");	
				var pg;	
				var pgindex;	
				var currentPageParentNode=$(".current").parent();
				var currentPageNumber=$("#lifgotoPageID").val();					
				if(pageNumber.indexOf("p")!=-1){
					//previous action
					console.log("previous "+currentPageNumber);
					pg=parseInt(currentPageNumber)-1;
					pgindex=$("#lifgotoPageID option[value="+pg+"]").index();
				}else if(pageNumber.indexOf("n")!=-1){
					//next action
					console.log("next "+currentPageNumber);
					pg=parseInt(currentPageNumber)+1;
					pgindex=$("#lifgotoPageID option[value="+pg+"]").index();
					
				}else{
					console.log("normal");
					pg=parseInt(pageNumber);
					pgindex=$("#lifgotoPageID option[value="+pg+"]").index();
				}
				console.log("currentpg "+pg+" pgindex "+pgindex);		
				$("#lifgotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
			   	$("#lifgotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
				$("#lifgotoPageID").multiselect('refresh');
				$('#lifgotoPageID').trigger("change");
		    });
			$("#lifpagesID").attr("style","display: none");	
	   }

}


function runTFSA2017(myForm)
{
	console.log("run TFSA 2017");   
	queryParameters=null;
	var currentAge=parseInt("1");
	 var retireAge=parseInt("100");
	 var yearsToRetirement=retireAge-currentAge;
	   
	  /* if(dob!=""){
		    dateOfBirth = stringToDate2015(dob);
	   }*/
	   var todayDate=new Date();
	   var issueDate=todayDate;
	   var issdate=myForm.txtIssueDate.value;
	   // var issueDate=stringToDate2015(issdate);
	  // console.log("issueDate"+issueDate+"dateOfBirth"+dateOfBirth);
	  /* if (issueDate == null || issueDate == false)
	   {
	      myForm.txtIssueDate.focus();
	      return false;
	   }*/
	   var expectedROR=prepareFrenchPercent(myForm.txtROR.value);
	   console.log(expectedROR);
	   var adjustedROR=getAdjustedROR(expectedROR);
	   console.log("adjustedROR"+adjustedROR);
	   var lastAge = prepareFrenchNumber("100");
	   var startingBalance = prepareFrenchNumber(myForm.txtPlanValue.value);
	   var selectionType = 1;
	   console.log("startingBalance"+startingBalance+" selectionType "+selectionType);
	   var period = prepareFrenchNumber(myForm.paymentFreq.value);
	   console.log("period is "+period+" mapsize"+MAP_SIZE);
	   paymentFreqName="";
	   for ( i = 0; i < MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gPeriodValue[i])==parseFloat(period)){
	   			paymentFreqName = gPeriods[i];
	   		}	  
	   }
	   
	   
	   var firstYearEndDate;
	   var firstYearBeginDate;
	   var accountType=parseInt(myForm.accountType.value); //   1:pre-existing,2:new
	   console.log("accountType is: "+accountType);
	   
	   var atName="";
	   for ( i = 0; i < ACCOUNT_TYPE_MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gAccountTypeValue[i])==parseFloat(accountType)){
	   			atName = gAccountTypes[i];
	   		}	  
	   }
	   if(accountType=="1"){
		   
		   firstYearEndDate =stringToDate2015("12/31/"+todayDate.getFullYear());
		   firstYearBeginDate=stringToDate2015("01/01/"+todayDate.getFullYear());
	   }else{
		   var adjustedYear=prepareNumber(todayDate.getFullYear())+1;
		   firstYearEndDate=stringToDate2015("12/31/"+adjustedYear);
		   firstYearBeginDate=stringToDate2015("01/01/"+adjustedYear);
		   
	   }
	   var dob=firstYearEndDate.getFullYear()-currentAge;
	   var dateOfBirth=dob;
	 //  var firstYearEndDate=getSmartFirstPaymentDate2015(issueDate,period);
	   console.log("first year begin: "+firstYearBeginDate+" first year end: "+firstYearEndDate);
	  // var firstYearBeginDate=getSmartBeginDate2015(issueDate);
	   var deductWHT=myForm.deductWithTax.value;
	   console.log("deductWHT"+deductWHT);
	   if(deductWHT=="true"){
		   var province = evaluateResidence(myForm.quebecResident.value);
	   }else{ 
		   var province = evaluateResidence("no"); 
	   }
	   
	   console.log("province: "+province);
	   
	   var post1992 ;
	   //alert(post1992);
	   
	   var annualWithPercent=0.0;
	   var annualWithAmount=0.0;
	   var paymentPer=0.0;
	   var pjIndex  = myForm.pensionJurisdictionOptions.selectedIndex;
	   var pjName="";
	   for ( i = 0; i < Pension_Jurisdiction_MAP_SIZE; i++)
	   { 
	   		if(parseFloat(gPensionJurisdictionValue[i])==parseFloat(pjIndex)){
	   			pjName = gPensionJurisdictions[i];
	   		}	  
	   }
	   paymentPer=prepareFrenchNumber(myForm.txtAmount.value);
	   annualWithAmount=getAnnualPayment2017(paymentPer,period);
	
	   //var minimumAssume=preRIFCalculator2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,accountType,firstYearBeginDate);
	  
	   console.log("dateOfBirth"+ dateOfBirth+"adjustedROR"+adjustedROR+"lastAge"+lastAge+"issueDate"+issueDate+"firstYearEndDate"+firstYearEndDate+"startingBalance"+startingBalance+"selectionType"+selectionType+"deductWHT"+deductWHT+"annualWithPercent"+annualWithPercent+"annualWithAmount"+annualWithAmount+ "post1992"+post1992+"province"+province+"period"+period);
	   queryParameters="&issueDate="+issdate+"&startBalance="+startingBalance+"&DOB="+dob+"&quebecResident="+myForm.quebecResident.value+"&paymentType="+selectionType+"&paymentFrequency="+paymentFreqName+"&deductWHT="+deductWHT+"&ror="+myForm.txtROR.value+"&pjName="+pjName+"&atName="+atName+"&planType=CELI"+"&paymentPer="+paymentPer+"&currentAge="+currentAge+"&retireAge="+retireAge+"&yearsToRetirement="+yearsToRetirement;
	   
	   
	   
	   tfsaCalculatorRedesign2017(dateOfBirth, adjustedROR, lastAge, issueDate, firstYearEndDate,startingBalance, selectionType, deductWHT,annualWithPercent, annualWithAmount, post1992, province, period,false,accountType,firstYearBeginDate,pjIndex,paymentPer,currentAge,retireAge);
	   
	// Build table sorter pagination sector
	   console.log("queryParameters="+queryParameters);
	   console.log("tfsaTableArray size is "+tfsaTableArray.length);
	   var table_size=parseInt(tfsaTableArray.length);
	   var perPageOptions ="";
	   
	   
	   $('#calculator-result-body').html(calcSummaryTableStr + tfsaSummary);
	   if(calcSummaryTableErrorStr!=""){
		   $('#calculationError').html(calcSummaryTableErrorStr);
		   $('#doShowSummaryError').val('true');
		   $('#calculationError').show();
		   $('.summarylabel').removeClass('pb10');
		   $('.summarylabel').addClass('pb5');
		   
	   }else{
		   $('#doShowSummaryError').val('false');
		   $('#calculationError').hide();
	   }
	   
	   if(table_size == 0){
		   $("#tfsa-calculator-pager").attr("style","display: none");
		   $("#result_summary_container").addClass("noValue");
		   $('#tfsa-calculator-result-table').html(resultTableStr);
	   }else{
		   if(table_size<=10 ){
		 	 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option>";
		 	
		   }else if(table_size>10&&table_size<=20){
			 perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option>";
		
		   }else{
		   //table_size>20
		  	perPageOptions =  perPageOptions +  "<option selected='selected' value='10'>10</option><option value='20'>20</option><option value='30'>30</option>";
		
		   }
		   $("#result_summary_container").removeClass("noValue");
		   var paginationString = '<table  width="100%" cellpadding="0" cellspacing="0"><tr><td class="table-container-header-sub-title" width="20%"></td><td class="table-container-header-pager pb10" width="80%" align="right" valign="bottom"><table border="0" cellpadding="0" cellspacing="0"><tr><td><div id="tfsaCalculatorResultPager" class="pagerAGFRedesign pager tfsaCalculatorPagerForNoneIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pt8 pr5"><span id="tfsaprevButton" class="prev clickable dib vam pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="tfsapagesID"><span>Pages:</span><select class="gotoPage select" id="tfsagotoPageID" style="width: 57px;"></select></td><td class="pt5 pr5"><ul  class="pagecount" > </ul></td><td class="pt8 pr25"><span id="tfsanextButton" class="next clickable dib vam pager-text" >Suivant > </span></td><td class="pt4"><select class="pagesize select" id="tfsaperPageID" style="width: 57px;" >'+perPageOptions+'</select><span class="pl5 perPage"> PAR PAGE</span></td></td></tr></table></div><div id="tfsaCalculatorResultPager" class="pagerAGFRedesign pager tfsaCalculatorPagerForIE"><table cellspacing="0" cellpadding="0" border="0" style="float: right;"><tr><td class="pr5 vam"><span id="tfsaprevButton" class="prev clickable pager-text" >< Pr&#233;c&#233;dent</span></td><td class="pr5" id="tfsapagesID"><select class="gotoPage select" id="tfsagotoPageID" style="width: 57px;"></select></td><td class="pr5"><ul  class="pagecount" style="vertical-align:3px" > </ul></td><td class="pr25 vam"><span id="tfsanextButton" class="next clickable pager-text" >Suivant ></span></td><td class="pr5 pt5"><select class="pagesize select" id="tfsaperPageID" style="width: 57px;" >'+perPageOptions+'</select></td><td class="vam"><span class="perPage"> PAR PAGE</span></td></tr></table></div></td></tr></table></td></tr></table>';
		   //var topBarString = '<div class="table-top-bar"><img border="0" src="/t2scr/sharedDeployedT2scrWeb/images/dot.gif" width="1" height="5" /></div>';
		   // Set result to result DIV
		   $("#tfsa-calculator-pager").attr("style","display: ");
		   $('#tfsa-calculator-pager').html(paginationString);
		   
		   
		   $('#tfsa-calculator-result-table').html(resultTableStr);
		   //$('div#calc-result-container').html(paginationString+topBarString+resultTableStr);
		  
		  
		   if (!!document.documentMode) {	
			//ie
				$(".tfsaCalculatorPagerForNoneIE").remove();
			}else{

				$(".tfsaCalculatorPagerForIE").remove();
			}
		   
		   var pagerOptions = {
				// target the pager markup - see the HTML block below
				container: $("#tfsaCalculatorResultPager"),

				// use this url format "http:/mydatabase.com?page={page}&size={size}"
				ajaxUrl: null,

				// process ajax so that the data object is returned along with the total number of rows
				// example: { "data" : [{ "ID": 1, "Name": "Foo", "Last": "Bar" }], "total_rows" : 100 }
				ajaxProcessing: function(ajax){
					if (ajax && ajax.hasOwnProperty('data')) {
						// return [ "data", "total_rows" ];
						return [ ajax.data, ajax.total_rows ];
					}
				},

				// output string - default is '{page}/{totalPages}'
				// possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
				output: '{startRow} to {endRow} ({totalRows})',

				// apply disabled classname to the pager arrows when the rows at either extreme is visible - default is true
				updateArrows: true,

				// starting page of the pager (zero based index)
				page: 0,

				// Number of visible rows - default is 10
				size: 10,

				// if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
				// table row set to a height to compensate; default is false
				fixedHeight: true,

				// remove rows from the table to speed up the sort of large tables.
				// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
				removeRows: false,

				// css class names of pager arrows
				cssNext: '.next', // next page arrow
				cssPrev: '.prev', // previous page arrow
				cssFirst: '.first', // go to first page arrow
				cssLast: '.last', // go to last page arrow
				cssGoto: '.gotoPage', // select dropdown to allow choosing a page

				//cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
				cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option

				// class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
				cssDisabled: 'disabled' // Note there is no period "." in front of this class name

			};
		   
		   //Tablesorter config 
			$("#tablesorter_tfsacalculatorbox")
				.bind("pagerInitialized pagerComplete",function(e,c) { 
				 var i, pages = '', t = [],
		         cur = c.page + 1,
		         start = cur > 1 ? (c.totalPages - cur < 3 ? -3 + (c.totalPages - cur) : -1) : 0,
		         end = cur < 3 ? 5 - cur : 2;
		         for (i = start; i < end; i++) {
				         if (cur + i >= 1 && cur + i < c.totalPages) { t.push( cur + i ); }
				     }
				        // make sure first and last page are included in the pagination
				        if ($.inArray(1, t) === -1) { t.push(1); }
				        if ($.inArray(c.totalPages, t) === -1) { t.push(c.totalPages); }
				        // sort the list
				        t = t.sort(function(a, b){ return a - b; });
				        // make links and spacers
				        $.each(t, function(j, v){
				            pages += '<li id="' + v + '"><a href="#" class="' + (v === cur ? 'current' : '') + '">' + v + '</a></li>';
				           // pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ? ' ... ' : ( j >= t.length - 1 ? '' : ' | ' );
				           	pages += j < t.length - 1 && ( t[j+1] - 1 !== v ) ?'<li id="' + (j==0?'p':'n') + '"><a href="#" >' + '...' + '</a></li>' : ( j >= t.length - 1 ? '' : '  ' );
				           
				            // console.log("cur:"+cur+" v:"+v+" j:"+j+" t[j+1]:"+t[j+1]+" tlength:"+ t.length);
				             
				        });
				        $('.pagecount').html(pages);
				 })
				.tablesorter({
					theme: 'default',
					widthFixed: true,
					headers:{
						0: {sorter: false},
						1: {sorter: false},
						2: {sorter: false},
						3: {sorter: false},
						4: {sorter: false},
						5:{sorter: false}, 
						6:{sorter: false}, 
						7:{sorter: false},
						8:{sorter: false},
						9:{sorter: false}
						},
					widgets: ['zebra']
				})
		   .tablesorterPager(pagerOptions)
			.bind("pageMoved",function() { 
				$("#tfsagotoPageID").multiselect('refresh');
				 }); 
		   
			$("#tfsaperPageID").multiselect({
				height:				"auto",
				minWidth:			50,
				multiple: 			false,
				header:				false,
				selectedList: 		1,		
				classes:			"custom-pager-select custom-menu tfsaperPageID",
				beforeopen: function() {
					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						globalTempScrollTop = document.documentElement.scrollTop;
						window.scrollTo(0,0);							
					}					
				},					
				open: function() {
					$("button.tfsaperPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');

					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						document.documentElement.scrollTop = globalTempScrollTop;
					}					
				},	
				close: function() {
					$("button.tfsaperPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
				}			
			});
			$("button.tfsaperPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
			setTimeout(function() {$("#tfsaperPageID").next('button.ui-multiselect').width(50);},15);
			
			
		    $("#tfsagotoPageID").multiselect({
				height:				"auto",
				minWidth:			50,
				multiple: 			false,
				header:				false,
				selectedList: 		1,		
				classes:			"custom-pager-select custom-menu tfsagotoPageID",
				beforeopen: function() {
					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						globalTempScrollTop = document.documentElement.scrollTop;
						window.scrollTo(0,0);							
					}					
				},					
				open: function() {
					$("button.tfsagotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');

					// to fix position issue in IE 8
					if($.browser.msie && ($.browser.version <= 8)) {
						document.documentElement.scrollTop = globalTempScrollTop;
					}					
				},	
				close: function() {
					$("button.tfsagotoPageID span.ui-icon").toggleClass('ui-icon-triangle-1-n ui-icon-triangle-1-s');
				}			
			});
			$("button.tfsagotoPageID span.ui-icon").toggleClass('ui-icon-triangle-2-n-s ui-icon-triangle-1-s');
			setTimeout(function() {$("#tfsagotoPageID").next('button.ui-multiselect').width(50);},15);
			
			
			$("#tfsaperPageID").change(function () {	
			 	$("#tfsagotoPageID").multiselect('refresh');
			 	$(".calculator-result-container").css("height","auto");
			 	
			 	if(prepareNumber($("#tfsaperPageID").val())<20){
			 		var rowCount=$("#tablesorter_tfsacalculatorbox tr").length;
			 		if(rowCount >1){
						$(".calculator-result-container").css("height","auto");
					}else{
						$(".calculator-result-container").height($("#search-container").height());
					}
			 	}
			 	

			});	
			
			$('.pager .pagecount').bind('click', 'a', function(e){
			    //console.log("click11");
			    e.preventDefault();
			    var parentNode=$(e.target).parent(); 
			     
				console.log($(parentNode).attr("id"));

				var pageNumber=$(parentNode).attr("id");	
				var pg;	
				var pgindex;	
				var currentPageParentNode=$(".current").parent();
				var currentPageNumber=$("#tfsagotoPageID").val();					
				if(pageNumber.indexOf("p")!=-1){
					//previous action
					console.log("previous "+currentPageNumber);
					pg=parseInt(currentPageNumber)-1;
					pgindex=$("#tfsagotoPageID option[value="+pg+"]").index();
				}else if(pageNumber.indexOf("n")!=-1){
					//next action
					console.log("next "+currentPageNumber);
					pg=parseInt(currentPageNumber)+1;
					pgindex=$("#tfsagotoPageID option[value="+pg+"]").index();
					
				}else{
					console.log("normal");
					pg=parseInt(pageNumber);
					pgindex=$("#tfsagotoPageID option[value="+pg+"]").index();
				}
				console.log("currentpg "+pg+" pgindex "+pgindex);		
				$("#tfsagotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
			   	$("#tfsagotoPageID option:eq("+pgindex+")").attr('selected', 'selected');
				$("#tfsagotoPageID").multiselect('refresh');
				$('#tfsagotoPageID').trigger("change");
		    });
			$("#tfsapagesID").attr("style","display: none");	
	   }

}
