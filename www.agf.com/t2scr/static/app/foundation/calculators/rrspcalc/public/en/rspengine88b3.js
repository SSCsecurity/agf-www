// JavaScript Document
//RSP Calculator
// Ayinde Yakubu, Copyright (c) 2003, Unisen Inc
var calcSummaryTableStr = "";var calcSummaryMessageStr = "";

//This method contains a percentage to ordinary number
function percent(value)
{
   var tempvalue =  value / 100.0;
   displayMessage ( "value: " + value + " result " + tempvalue);
   return tempvalue;
}

//-- varify that input is valid
function verifyInput(fieldName)
{
  // 
  // 
  //
}
// -- Converts str into ordinal numbers e.g. 11.24% to 0.1124
// 
function preparePercent(str)
{ 
    var val = str;
    if ( isNaN(str) )
	{ 
	    val = extractLastSign(str, "%");
	}
	result = percent(val);
	return result;
}

// -
//Utility Methods
function isEmpty(field)
{
  return ( field.value==null || field.value=="");
}
// -- Convert string that may contain dollar sign and commas into 
// number e.g. $82,999.92 is converted to 82999.92. The string
//can contain any number of commas and $ sign 
//
function prepareNumber(str){   if ( str == null )   {      return 0;   }   if ( isNaN(str) == false )   {       return    str.valueOf();   }      var tempStr = str;   if ( str.lastIndexOf("$") != -1 )    {       tempArray1 = str.split("$");	   tempStr = tempArray1.join("");   }   var tempStr2 = tempStr;   if ( tempStr.lastIndexOf(",") != - 1 )   {       tempArray2  = tempStr.split(",");       tempStr2 = tempArray2.join("");   }   var result = parseFloat(tempStr2.valueOf());      return result;}
// -- 
// retrieve selected item 
//
function makeIncomeChoice(fieldName)
{
   var option=document.rrspForm.incomeFreqOptions.options[document.rrspForm.incomeFreqOptions.selectedIndex].text;
   document.rrspForm.incomeFreq.value=lookup(option);
}

function makeContribChoice(fieldName)
{
   var option=document.rrspForm.contribOptions.options[document.rrspForm.contribOptions.selectedIndex].text;
   document.rrspForm.contribFreq.value=lookup(option);
}

// -- String formatting routines
// - Take 12122.34639 and return $12,122.35
// -- 

function convertToMoney(amount)
{
  var _dollars=parseInt(amount);
  var _cents=parseInt((amount - _dollars)*100);
  var _negative = _dollars <0;
  if(_negative)
  {  _dollars = -_dollars;
     _cents=-_cents;
  }
  
  while(_cents.toString().length < 2)
     _cents="0"+_cents;
  
  var _dA=_dollars.toString().split("");
  var _d="";
  for(var i=_dA.length-1;i>=0;i--)
  {
    var _comma="";
	if((_dA.length-i)%3==0 && i!=0)_comma=",";
    _d=_comma+_dA[i]+_d;
  }
  var _neg_sign=_negative?"-":"";
  var _result=""+_neg_sign+_d+"."+_cents;
  return _result;
}


//Display a simple alert or message box
function displayMessage(value)
{
   if ( debugOn == true )
   {
       //alert (value);
   }
   else 
   { 
     // document.write("<em>" + value + "</em>");
   }
}


// -Method to perform a look up given a description
// It simulates a map
function lookup(description)
{
   for ( i = 0; i < RRSP_MAP_SIZE; i++)
   {   
      var period = gRRSPPeriods[i];
      if ( description == gRRSPPeriods[i] ) 
	  {
	     return gRRSPPeriodValue[i];
	  }
   }
   //If none found, default to yearly
   return 1;
}

//Deflated Interest Factor
//The rate of inflation is deducted from the expected rate of
//of return. Will be used if payment is not increased due to inflation
function deflatedInterestFactor(inflR, ror)
{  
   var deflatedIntFact =  ( (1.0 - inflR ) * ( 1.0 + ror ) - 1.0);
   displayMessage("deflated Interest Factor" + deflatedIntFact);
   return deflatedIntFact;
}

//Inflated Interest Factor. The rate of inflation is added to the expected rate
//of return. Will be used if the payment is increased due to inflation.
function inflatedInterestFactor(inflationRate, expectedROR)
{
   var inflatedIntFact = (( 1.0 + inflationRate ) * ( 1.0 + expectedROR ) - 1 );
   displayMessage("inflated Interest Factor" + inflatedIntFact);
   return inflatedIntFact;
}


//Annual Income required in dollars. The current value of the required
//income in today's dollars based on the amount and the number of 
//payment per year.
function annualIncomeInTodayDollars(requiredIncome , paymentPerYear)
{
    var annualIncome = requiredIncome * paymentPerYear;
    displayMessage("Annual Income in Today Dollars" + annualIncome);
    return annualIncome;
}

//Annual income required in future dollars. The future value of the desired income
//at retirement with inflation rate applied
function annualIncomeInFutureDollars(requiredIncome, inflationRate, yearsToRetire)
{
    var tempval = Math.pow ( (1.0 + inflationRate), yearsToRetire);
	var fv = (requiredIncome*tempval);
    displayMessage("Annual Income in Future Dollars" + fv);
	return fv;
}

// ---
//  Required Savings at retirement. This refers to the total amount of savings
//  required to sustain income requirement for the total number of years
// ---
function reqSavAtRetireSimple(annualIncomeFD, expectedROR, yearsFundToLast)
{	 console.log("annualIncomeFD:"+annualIncomeFD+" expectedROR:"+expectedROR+" yearsFundToLast:"+yearsFundToLast);
   var negYears = (-1.0) * yearsFundToLast;
   var tempOne = Math.pow((1.0 + expectedROR), negYears);
   var tempTwo = expectedROR/(1.0 + expectedROR);
   
   var requiredSavings = annualIncomeFD * ( (1.0 - tempOne)/tempTwo);
   displayMessage("required savings simple" + requiredSavings);
   return requiredSavings;
}

// - RequiredSavings at Retirement if Income increases with inflation
// - The total amount of savings required to sustain income requirements for the total
//   number of years if income increases with inflation.
// --
function reqSavAtRetireIncInflation(annualIncomeFD, expectedROR, inflationRate, yearsFundToLast)
{
   var deflatedFactor = deflatedInterestFactor(inflationRate, expectedROR);
   var negYears = (-1.0) * yearsFundToLast;
   var tempOne = Math.pow((1.0 + deflatedFactor), negYears);
   var tempTwo = (deflatedFactor/(1.0 + deflatedFactor));
   
   
   var requiredSavings = annualIncomeFD * ( ( 1.0 - tempOne)/tempTwo);
  // alert (requiredSavings);
  
   //alert("required savings income increase with inflation" + requiredSavings);
   return requiredSavings;
   
}

// - Current RRSP Assets (Future Value). 
// The future value of the present RRSP at retirement time without any further
// contributions
// -
function currentRRSPFutureValueNoContrib(currentRRSP, expectedROR, yearsToRetire)
{
   var tempOne = Math.pow((1.0 + expectedROR ) , yearsToRetire);
  //alert (tempOne);
   var fv = currentRRSP * tempOne;
   displayMessage("Future value of current rrsp" + fv);
   return fv;
}

// --Total Annual Contributions
// The total amount of contributions per year
// -- 
function totalAnnualContribMethod(contribAmount, contributionFactor)
{
   var totalContrib = contribAmount * contributionFactor;
   displayMessage("Total annual contribution" + totalContrib);
   return totalContrib;
}

//--
//Future value of current assets
//The future value of present RRSP at retirement with further contributions
//--
function currentRRSPFutureValueWithContrib(currentRRSP, expectedROR, noOfPeriods, totalAnnualContrib)
{  	var one = new Number(1.0);
   var tROR = one + expectedROR;
   var tperiod = new Number(noOfPeriods);
   var tempOne = Math.pow(tROR, noOfPeriods);

   var tPeriods =  one + tperiod ;
   var tempExp = Math.pow(tROR, tPeriods);
   
   var futureValue = (currentRRSP * tempOne) + totalAnnualContrib * ((tempExp - tROR)/expectedROR);
   displayMessage("Future value of current rrsp with contrib" + futureValue);   
   return futureValue;
}

//---
//Future value of current assets if contribution increases with inflation.
//The future value of the present RRSP asset at retirement time with further contributions
//that increase with inflation
//
//
//  Balance(n) = P(1 + r)^n + c[((1 + r1)^{n + 1} - (1 + r1))/r1]
// Where P : Principal
//       C : Contribution part
//       r : Expected ROR
//       r1: Expected ROR with inflation rate added
//---
function currentRRSPFutureValueWithContribInflate(currentRRSP, expectedROR, inflationRate, noOfPeriods, totalAnnualContrib)
{

   
   //var str = new String(inflatedIntr);
   //var pos = str.indexOf(".");
   //var truncIntr = str.substr(pos, 5).valueOf();
   //inflatedIntr = truncIntr;
   
   var addedIntr = new Number(1.0) + new Number(expectedROR);
   //alert(addedIntr);
   
   var principalCompoundIntr = Math.pow(addedIntr, noOfPeriods);
   //alert(principalCompoundIntr);

  //Calculate the principal part   
   var principalGrowthPart = currentRRSP * principalCompoundIntr;
   //alert(principalGrowthPart);


   //Calculate interest rates with inflation
   var inflatedIntr = inflatedInterestFactor(inflationRate, expectedROR);
   //alert(inflatedIntr);

   var addedInflatedIntr = new Number(1.0) + new Number(inflatedIntr);
   //alert("Sum Inflated Intr Rate: " +addedInflatedIntr);
   
   //alert("A.No of periods: " + noOfPeriods);
   var periods = new Number(noOfPeriods)  + new Number(1.0);
   //alert("B.No of periods: " + noOfPeriods);
   var contribCompoundIntr = Math.pow(addedInflatedIntr, periods);
   //alert(contribCompoundIntr);
    
   //Calculate the contribution part
   var contribGrowth = (contribCompoundIntr -  addedInflatedIntr)/inflatedIntr;
   var contribPart =  totalAnnualContrib *  contribGrowth ;
   
   var fv = principalGrowthPart + contribPart;
   
   //alert("Final-> " + fv);
   displayMessage("future value if contrib increases with inflation " + fv);
   
   return fv;
}

// ---
// Net Amount Required.
// The difference between the future values of current RRSP assets with contributions and 
// required savings at retirement
// ---
function netAmountRequired( requiredSavingAtRetirement, futureValueOfRRSP)
{
    var netAmount = requiredSavingAtRetirement - futureValueOfRRSP;
    displayMessage("Net amount required" + netAmount);
	return netAmount;
}

// ---
// Required Total Annual Contribution Amount
// The amount of contribution required annually over the years to retirement in order
// to meet the net amount 
// ---
function requiredTotalAnnualContrib(netAmountRequired, expectedROR, yearsToRetirement )
{  
   var sumROR = 1.0 + expectedROR;
   var incrYear  = new Number(1.0) + new Number(yearsToRetirement);
   var tempOne = Math.pow(sumROR, incrYear);
   
   var requiredTotalAmt = netAmountRequired / ((tempOne - sumROR)/expectedROR);
   displayMessage("required total amount " + requiredTotalAmt);
   
   return requiredTotalAmt;
}

// ---
// Required Contribution Amount
// The required amount of contribution per year
// ---
function requiredContribPerPeriod(requiredTotalAmt, reqContrPerYear)
{
     var amount = requiredTotalAmt / reqContrPerYear;
	 displayMessage("Required Contrib per period " + amount );
	 return amount;
}	 




/**
 * The main driver called by the form submission
 */
function rspCalculator(myForm)
{	 calcSummaryTableStr = "";	 calcSummaryMessageStr = "";	 var summaryMessage1=myForm.summaryMessage1.value;	 var summaryMessage2=myForm.summaryMessage2.value;	 var queryParameters="";	 var retirementGoal=prepareNumber(myForm.txtRetirementGoal.value);	 console.log(myForm.txtRetirementGoal.value+"---"+retirementGoal);	 var requiredIncome=retirementGoal;	 var incomeFrequency="1.0";//Annually	 var currentSaving=prepareNumber(myForm.txtCurrentSaving.value);	 var contributionAmount=prepareNumber(myForm.txtContributionAmount.value);	 var contribFreqPerAnnum=prepareNumber(myForm.contributionFreq.value);	 var freqName="";	 for ( i = 0; i < RRSP_MAP_SIZE; i++)	 {    		if(parseFloat(gRRSPPeriodValue[i])==parseFloat(contribFreqPerAnnum)){   			freqName = gRRSPPeriods[i];   		}	  	 }	 var yearsFundToLast=prepareNumber(myForm.yeartolast.value);	 var expectedROR=preparePercent(myForm.txtROR.value);	 var inflationRate = preparePercent("0.0");	 var currentAge=prepareNumber(myForm.txtCurrentAge.value);	 var retireAge=prepareNumber(myForm.txtRetireAge.value);	 var yearsToRetirement=retireAge-currentAge;	 var incomeIncreaseWithInflation = "no";//radio button yes/no	 var currentRRSP=currentSaving;	 var contribAmount=contributionAmount;	 var contribIncreaseWithInflation = "no";	 //console.log("contribFreqPerAnnum:"+contribFreqPerAnnum+" yearsFundToLast:"+yearsFundToLast+" incomeIncreaseWithInflation:"+incomeIncreaseWithInflation+" currentRRSP:"+currentRRSP+" contribAmount:"+" contribIncreaseWithInflation:"+contribIncreaseWithInflation);	 var projectedRetirementSavings=0.0;	  	 var surplusShortfall=0.0;	 var deflatedIntrFactor = deflatedInterestFactor(inflationRate,expectedROR);	 var inflatedIntrFactor = inflatedInterestFactor(inflationRate, expectedROR);	 var annualIncomeTodaysDollar = annualIncomeInTodayDollars(requiredIncome, incomeFrequency);	 var annualIncomeInFutureDollar = annualIncomeInFutureDollars(annualIncomeTodaysDollar,inflationRate,yearsToRetirement);		 var requiredSavingsAtRetirement = 0.0;	 	 console.log("deflatedIntrFactor:"+deflatedIntrFactor+" inflatedIntrFactor:"+inflatedIntrFactor+" annualIncomeTodaysDollar:"+annualIncomeTodaysDollar+" annualIncomeInFutureDollar:"+annualIncomeInFutureDollar);	  	 console.log("contribFreqPerAnnum:"+contribFreqPerAnnum+" yearsFundToLast:"+yearsFundToLast+" incomeIncreaseWithInflation:"+incomeIncreaseWithInflation+" currentRRSP:"+currentRRSP+" contribAmount:"+" contribIncreaseWithInflation:"+contribIncreaseWithInflation);	 console.log("retirementGoal:"+retirementGoal+" yeartolast:"+yearsFundToLast+" currentSaving:"+currentSaving+" contributionAmount:"+contributionAmount+" freqName:"+freqName+" expectedROR:"+expectedROR+" currentAge:"+currentAge+" retireAge:"+retireAge);		//extract all parameters	 queryParameters += "&retirementGoalP="+retirementGoal+"&currentSaving="+currentSaving+"&contributionAmount="+contributionAmount+"&freqName="+freqName+"&ror="+myForm.txtROR.value+"&currentAge="+currentAge+"&retireAge="+retireAge+"&yearsFundToLast="+yearsFundToLast;	 if ( incomeIncreaseWithInflation == "no" ) {		 requiredSavingsAtRetirement = reqSavAtRetireSimple(annualIncomeInFutureDollar, expectedROR, yearsFundToLast);	 }else {		 requiredSavingsAtRetirement = reqSavAtRetireIncInflation(annualIncomeInFutureDollar, expectedROR, inflationRate, yearsFundToLast);	 }	 	 //Calculate future values of current holdings with and without contributions	 var totalAnnualContrib = totalAnnualContribMethod(contribAmount,contribFreqPerAnnum);	 var futurevalueRRSP = currentRRSPFutureValueNoContrib(currentRRSP, expectedROR, yearsToRetirement);	 var futureValueOfCurrent = futurevalueRRSP;   	 if ( totalAnnualContrib == 0.0 ){        futurevalueRRSP = currentRRSPFutureValueNoContrib(currentRRSP, expectedROR, yearsToRetirement);	 }	 console.log("requiredSavingsAtRetirement:"+requiredSavingsAtRetirement+" totalAnnualContrib:"+totalAnnualContrib);	 if (contribIncreaseWithInflation =="no" ) {       futurevalueRRSP = currentRRSPFutureValueWithContrib(currentRRSP, expectedROR, yearsToRetirement, totalAnnualContrib);	 }else { //contribution increases with inflation	   futurevalueRRSP = currentRRSPFutureValueWithContribInflate(currentRRSP, expectedROR, inflationRate, yearsToRetirement, totalAnnualContrib);	}	 //Calculate net amount required   var netAmountReqd = netAmountRequired(retirementGoal, futurevalueRRSP);   //Calculate the required total annual contribution amount   var totalAnnualContribRequired = requiredTotalAnnualContrib(netAmountReqd, expectedROR, yearsToRetirement);   //Required contributions per period   var reqContribPerPeriod = requiredContribPerPeriod(totalAnnualContribRequired, contribFreqPerAnnum);    console.log("futurevalueRRSP:"+futurevalueRRSP+"netAmountReqd:"+netAmountReqd+" totalAnnualContribRequired:"+totalAnnualContribRequired+" reqContribPerPeriod:"+reqContribPerPeriod);   projectedRetirementSavings=futurevalueRRSP;      //if(netAmountReqd>0){	   surplusShortfall=-1*netAmountReqd;   //}	      calcSummaryTableStr +="<table width='100%' cellspacing='0' cellpadding='0' border='0'>";    calcSummaryTableStr +="<tr><td class='pb10 fs12n'>Retirement Goal:</td><td class='fs12n' align='right'>";   calcSummaryTableStr += "$"+convertToMoney(retirementGoal);   calcSummaryTableStr +="</td></tr>";		   calcSummaryTableStr +="<tr><td class='pb10 fs12n'>Total Annual Contributions:</td><td class='fs12n' align='right'>";   calcSummaryTableStr +=  "$"+convertToMoney(totalAnnualContrib);   calcSummaryTableStr +="</td></tr>";	   calcSummaryTableStr +="<tr><td class='pb10 fs12n'>Projected Retirement Savings:</td><td id='projectRetirementSavingID' class='fs12n' align='right'>";   calcSummaryTableStr += "$"+convertToMoney(projectedRetirementSavings);   calcSummaryTableStr +="</td></tr>";	   calcSummaryTableStr +="<tr><td class='pb10 fs12n'>Surplus/Shortfall:</td><td class='fs12n' align='right'>";   calcSummaryTableStr += "$"+convertToMoney(surplusShortfall);   calcSummaryTableStr +="</td></tr>";	   calcSummaryTableStr += "</table>";	   calcSummaryMessageStr +="<div class='table-container-header-sub-title'>Your Retirement Scenario:</div>";   var messageIndex=1;   if(netAmountReqd>0){	   calcSummaryMessageStr +="<p class='fs12n mt5'>"+summaryMessage2+"</p>" 	   messageIndex=2;   }else{	   calcSummaryMessageStr +="<p class='fs12n mt5'>"+summaryMessage1+"</p>" 	   messageIndex=1;   }   	   $('#rrsp-calculator-result-body').html(calcSummaryTableStr);
   $('#rrsp-calculator-result-summary-message').html(calcSummaryMessageStr);   //var futurevalueRRSPSimulation=0;   var futurevalueRRSPSimulation=0;   var yearsToRetirementSimulation=0;
   var rspJsonObject;   var rspJsonObjectArray=[];   var rspGoalObject;   var rspGoalObjectArray=[];   var rspObject;   var rspArray=[];   for ( var i = parseFloat(currentAge); i <= parseFloat(retireAge); i++ ){	   yearsToRetirementSimulation=i-currentAge;	   if ( totalAnnualContrib == 0.0 ){		   futurevalueRRSPSimulation = currentRRSPFutureValueNoContrib(currentRRSP, expectedROR, yearsToRetirementSimulation);	   }		   if (contribIncreaseWithInflation =="no" ) {		   futurevalueRRSPSimulation = currentRRSPFutureValueWithContrib(currentRRSP, expectedROR, yearsToRetirementSimulation, totalAnnualContrib);	   }else { //contribution increases with inflation		   futurevalueRRSPSimulation = currentRRSPFutureValueWithContribInflate(currentRRSP, expectedROR, inflationRate, yearsToRetirementSimulation, totalAnnualContrib);	   }	   	   rspObject=new Object();	   rspObject.age=i;	   rspObject.value=futurevalueRRSPSimulation;	   rspArray.push(rspObject);		   	   console.log("currentAge:"+i+" yearsToRetirementSimulation:"+yearsToRetirementSimulation+" retirementSaving:"+futurevalueRRSPSimulation);   }
   rspGoalObject= new Object();   rspGoalObject.goalAge=retireAge;   rspGoalObject.goalValue=retirementGoal;   rspGoalObjectArray.push(rspGoalObject);      rspJsonObject=new Object();   rspJsonObject.line=rspArray;   rspJsonObject.goal=rspGoalObjectArray;   rspJsonObjectArray.push(rspJsonObject)   var rspObjectJsonString=JSON.stringify(rspJsonObjectArray);   console.log(rspObjectJsonString);   queryParameters += "&retirementGoal="+convertToMoney(retirementGoal)+"&totalAnnualContrib="+convertToMoney(totalAnnualContrib)+"&surplusShortfall="+convertToMoney(surplusShortfall)+"&projectedRetirementSavings="+convertToMoney(projectedRetirementSavings)+"&messageIndex="+messageIndex     $.ajax({ 	    url: "/t2scr/static/app/tools/rspcalc/genRspCalcImage.action?lang=en"+queryParameters, 	    type: "POST",	    // The key needs to match your method's input parameter (case-sensitive).	    data: rspObjectJsonString,	    contentType: "application/json; charset=utf-8",      	    dataType: "text", 	    success: function(data){ 	        $("#rrspCalcImageID").attr("src","data:image/gif;base64," + data);	       // console.log(data);	    }, 	    error:function(){ 	        alert("failure"+data); 	    } 	});
	
}
function generateRRSPCalculatorReport(userRole){	console.log("ok1");	if("INV"==userRole){		window.open('/t2scr/static/app/tools/rspcalc/RRSP_ILLUSTRATOR.do?lang=en','_blank');	}else{				var isOpen = $('.pdfRRSPPortionClientInfomation').dialog('isOpen');		if(isOpen){	    	$('.pdfRRSPPortionClientInfomation').dialog('close');	    }				$(".pdfRRSPPortionClientInfomation").dialog({			position:		{my:"center", at:"center", of: window},		   	modal: 			true,			resizable: 		false,			draggable: 		false,			minWidth:       "350",			width: 			"350",			minHeight:      "220",			height: 		"220",			dialogClass:	"account-detail-pdf-option-dialog-style"		});	}		}
