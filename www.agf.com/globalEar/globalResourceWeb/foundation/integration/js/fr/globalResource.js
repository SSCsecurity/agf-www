
function detectBrowser()
{
	var browserType = navigator.userAgent.toLowerCase();
	var browser = "";
		
	if(browserType != null ){
		if((browserType.indexOf("msie") != -1)){
			browser = "Explorer";			
		}
		if ((browserType.indexOf("mozilla") != -1) && (browserType.indexOf("spoofer")
	== -1) && (browserType.indexOf("compatible") == -1)) {
			if (browserType.indexOf("firefox") != -1) {
				browser = "Firefox";				
			}
			else if (browserType.indexOf("netscape") != -1) {
				browser = "Netscape";				
			} else {
				browser = "Mozilla";				
			}
		}		
		if (browserType.indexOf("safari") != -1) {
			browser = "Safari";
		}		
	}
	
	return browser;
	
}
// -- Convert string that may contain dollar sign and commas into 
// number e.g. $82,999.92 is converted to 82999.92. The string
//can contain any number of commas and $ sign 
//
function prepareNumber(str)
{
   if ( isNaN(str) == false )
   {
	   return    str.valueOf();
   }
   
   var tempStr = str;
   if ( str.lastIndexOf("$") != -1 ) 
   {
       tempArray1 = str.split("$");
       tempStr = tempArray1.join("");
   }
   var tempStr2 = tempStr;
   if ( tempStr.lastIndexOf(",") != - 1 )
   {
       tempArray2  = tempStr.split(",");
       tempStr2 = tempArray2.join("");
   }

   var val = parseFloat(tempStr2.valueOf());

   return val;
}
function stringToDateCangu(str)
{       
  console.log(str);
  var regexp = /^([0-9]{4})(\/|\.|\-)([0-1][0-9])(\/|\.|\-)([0-3][0-9])$/;
   if ( regexp.test(str) == true ) 
   {
      
       //alert("Valid date");
       var result = str.match(regexp);
       console.log(result);
       if ( result != null )
       {
          //alert (result[0]);
          var daystr = result[5];
         // alert (result[2]);
          var monthstr = result[3];
          //alert(result[4]);                   
          var yearstr = result[1];                    
          //alert (result[6]);                    
  
      var day = parseFloat(daystr);
      var mth = parseFloat(monthstr) ;
      var year = parseFloat(yearstr);
      
      
      if ( day == 0 || mth == -1 || year == 0 || day > 31 || mth >= 12 )
      {
        console.log("Date range Error");
          return false;
      }
      
      var rs = new Date(year, mth, day,0,0,0,0);
      //alert(day + ":" + rs.getDate())
      //alert(mth + ":" + rs.getMonth())
        //alert(year + ":" + rs.getFullYear())
      if ( day != rs.getDate() || mth != rs.getMonth()  || year!= rs.getFullYear())
        {
        console.log("Date conversion Error");
          return false;
      }
      return (rs);
       }
   }
   console.log("Date format Error");
   return false;

}

//-- Parse dates
//The date must be of the format MM-DD-YYYY or MM/DD/YYYY 
//Use a a regular expression
function stringToDate2015(str)
{
   var regexp = /(^[0-1][0-9])(\/|\.|\-)([0-3][0-9])(\/|\.|\-)([1-3][0-9]{3}$)/;

   if ( regexp.test(str) == true ) 
   {
      
       //alert("Valid date");
       var result = str.match(regexp);
       if ( result != null )
       {
          //alert (result[0]);
          var daystr = result[3];
         // alert (result[2]);
          var monthstr = result[1];
          //alert(result[4]);                   
            var yearstr = result[5];                    
          //alert (result[6]);                    
  
      var day = parseFloat(daystr);
      var mth = parseFloat(monthstr) - 1;
      var year = parseFloat(yearstr);
      
      if ( day == 0 || mth == -1 || year == 0 || day > 31 || mth >= 12 )
      {
        console.log("Date range Error");
          return false;
      }
      
      var rs = new Date(year, mth, day,0,0,0,0);
      //alert(day + ":" + rs.getDate())
      //alert(mth + ":" + rs.getMonth())
        //alert(year + ":" + rs.getFullYear())
      if ( day != rs.getDate() || mth != rs.getMonth()  || year!= rs.getFullYear())
        {
        console.log("Date conversion Error");
          return false;
      }
      return (rs);
       }
   }
   console.log("Date format Error");
     return false;

}

/**
 * 
 * RRIF RRSP Calculator utility French Only
 * 
 */

//convert number format from 0xx xx,x to xxxx.x
function convertFrenchIntoStandardNumberFormat(str){
  if(isNaN(str)){
    //remove the leading zero
    var p=str.lastIndexOf(',');
    if(p!=-1){
      var narray=str.split(",");
      if(narray[0]!=0){
        
        str=str.replace(/^0+/, ''); //if 0,xx, then no change, if 0x,xx then remove leading 0
      }               
    } 
    var trimNum=str.replace(/\s+/g,"");
    pos=trimNum.lastIndexOf(',');
    if(pos!=-1){
      result=trimNum.replace(',','.');
    }else{
      result=trimNum;
    }
    return result;
  }else{
    //if 0,return 0
    return str.valueOf();
  }
  
}


//convert xx xx.xx $ into xxx xx,xx 
function convertFrenchNumber(str){
  var currentNum=str;
  //remove $
  trimNum1=currentNum.replace(/\$+/g,"");
  //remove coma
  trimNum=trimNum1.replace(/\,+/g,"");
  if(trimNum.lastIndexOf(".")==-1){
    //no comma,will add space every three digit from last.
    withSpaceNum=trimNum.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    trimNum3=withSpaceNum.replace(/\s+/g,"");
    if(trimNum3=="00"){
      
      return "0,0";
    }
    return withSpaceNum;
  }else{
    
    numArray=trimNum.split(".");
    withSpaceFirstPartNum=numArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return withSpaceFirstPartNum+","+numArray[1];
  }
}



//convert xx xx.xx $ into xxx xx,xx 
function convertFrenchNumberWithoutDecimal(str){
  var currentNum=str;
  //remove $
  trimNum1=currentNum.replace(/\$+/g,"");
  //remove coma
  trimNum=trimNum1.replace(/\,+/g,"");
  if(trimNum.lastIndexOf(".")==-1){
    //no comma,will add space every three digit from last.
    withSpaceNum=trimNum.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    trimNum3=withSpaceNum.replace(/\s+/g,"");
    if(trimNum3=="00"){
      
      return "0,0";
    }
    return withSpaceNum;
  }else{
    
    numArray=trimNum.split(".");
    withSpaceFirstPartNum=numArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return withSpaceFirstPartNum;
  }
}


//-- String formatting routines

//- Take 12122 and return $12,122

//-- 

function convertToMoneyWithoutDecimal(amount, decplace)

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

var _result=""+_neg_sign+_d;

return _result;

}

//This method contains a percentage to ordinary number
function percent(value)
{
   var tempvalue =  value / 100.0;
   displayMessage ( "value: " + value + " result " + tempvalue);
   return tempvalue;
}


//-- Converts str into ordinal numbers e.g. 11.24% to 0.1124
//
function preparePercent(str)
{ 
 //alert(str);
 var val = str;
 if ( isNaN(str) )
 { 
    val = extractLastSign(str, "%");
 }
 result = percent(val);
 return result;
}

//-- Converts str into ordinal numbers e.g. 11,24% to 0.1124
//
function prepareFrenchPercent(str)
{ 
  //alert(str);
  var val = str;
  if ( isNaN(str) )
  { 
    tempVal=convertFrenchIntoStandardNumberFormat(str);
    val = extractLastSign(tempVal, "%");
  
  }
  result = percent(val);
  return result;
}


//-- Convert string that may contain dollar sign and commas into 
//number e.g. $82 999,92 is converted to 82999.92. The string
//can contain any number of commas and $ sign 
//
function prepareFrenchNumber(str)
{
if ( isNaN(str) == false )
{
return    str.valueOf();
}
var tempStr = str;
//remove the $ : like xxx,xx$
if ( str.lastIndexOf("$") != -1 ) 
{
tempArray1 = str.split("$");
tempStr = tempArray1.join("");
}
//remove the space: xx xxx,xx
tempStr4=tempStr;
trimNum=tempStr4.replace(/\s+/g,"");
//replace the , with .
var tempStr2 = trimNum;   
tempStr2=convertFrenchIntoStandardNumberFormat(tempStr2);

var val = parseFloat(tempStr2.valueOf());

return val;
}



//-- Convert string that may contain dollar sign and commas into 
//number e.g. $82 999,92 is converted to 82999.92. The string
//can contain any number of commas and $ sign 
//
function prepareFrenchNumberWithoutDecimal(str)
{
if ( isNaN(str) == false )
{
return    str.valueOf();
}
var tempStr = str;
//remove the $ : like xxx,xx$
if ( str.lastIndexOf("$") != -1 ) 
{
tempArray1 = str.split("$");
tempStr = tempArray1.join("");
}
//remove the space: xx xxx,xx
tempStr4=tempStr;
trimNum=tempStr4.replace(/\s+/g,"");
//replace the , with .
var tempStr2 = trimNum;   
tempStr2=convertFrenchIntoStandardNumberFormat(tempStr2);

var val = tempStr2.valueOf();

return val;
}


//-- Convert string that may contain dollar sign and commas into 

//number e.g. $82,999.92 is converted to 82999.92. The string

//can contain any number of commas and $ sign 

//

function prepareNumberWithoutDecimal(str)

{

if ( isNaN(str) == false )

{
     console.log("it is a number:"+str);
  return    str.valueOf();

}


console.log(str);
var regex = /^\$|([0-9]+\,)\.[0-9]*/;



var tempStr = str;
console.log(tempStr);
if ( str.lastIndexOf("$") != -1 ) 

{

  tempArray1 = str.split("$");

     tempStr = tempArray1.join("");

}
console.log(tempStr);
var tempStr2 = tempStr;

if ( tempStr.lastIndexOf(",") != - 1 )

{

  tempArray2  = tempStr.split(",");

  tempStr2 = tempArray2.join("");

}



console.log(tempStr2);

 

var val = tempStr2.valueOf();

console.log(val);



return val;

}
//Utility Methods

function isEmpty(field)

{

return ( (field.value==null || field.value=="" ) ? true : false);

}


//-- Format numbers to given decimal places
function formatNumber(number, decpoints)
{
   var str = new String(number);
   var values = str.split(".");
   var val ="";
   if ( values.length == 2 )
   {
      var decimalPart =  values[1].substr(0, decpoints);
      val = values[0] + "." + decimalPart;
   }
   else
   {
       val = str;
   }
   
//   alert (" Number->" + number + " val-> " + val);
   
   return val;

}



//truncate a number to some specified digits after the decimal

function truncateNumber(value, dec)

{

var decPlace = parseInt(dec);

var str = value.toString();

var result = str;

var pos = str.indexOf(".");

if ( pos != - 1 ) {

   var parts = str.split(".");

   var tempStr =  parts[1].substr(0, decPlace);

   result = parts[0] + "." + tempStr;

}       



return result;

}

//Extracts % sign from the rate input

function extractLastSign(aItem, aSign)

{

var result="";

//alert ( aItem );

if ( aItem != null && aSign != null )

{

    pos=aItem.lastIndexOf(aSign);

     if (pos != - 1 )

     {

        result=aItem.substr(0,pos);

     }

     else

     {

        result=aItem;

     }

}

//alert(result);

return result;

}
//Checks if this is a leap year

//

function isLeap(currentDate)
{
   var year = currentDate.getFullYear();
   return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? true : false;
}

//---
//Get number of days from year
//---
function getNumberOfDaysInYear(currentDate)
{
 if ( currentDate == null || currentDate == false )
 {
    return false;
 }
 
 if (isLeap(currentDate)) 
  {
     return 366;
  }
  else
  {
     return 365;
  }
}


//---

//Days left in a year

//---

function daysLeftInYear(aCurrentDate)

{

// Store the current date and time

var current_date = aCurrentDate;



// Store the date of the next New Year's Day

var new_years_date = new Date();



new_years_date.setYear(current_date.getFullYear() + 1);

new_years_date.setMonth(0);

new_years_date.setDate(1);

new_years_date.setHours(0,0,0,0);



// Call the days_between function

//alert ("start date: " + current_date);

//alert ("end date:" + new_years_date);

var days_left = daysBetween(current_date, new_years_date);

return (days_left);

}



//---

//This method find the days between any two set of dates.

//---

function daysBetween(oDate_1, oDate_2) 

{

 // The number of milliseconds in one day

 var ONE_DAY = 1000 * 60 * 60 * 24

 iTime_1 = oDate_1.getTime();

 iTime_2 = oDate_2.getTime();

  

 iDiff = Math.abs( iTime_1 - iTime_2 );



 return( Math.round( iDiff / ONE_DAY ) ); // 1000ms * 60secs * 60mins * 24hours = 1 day)

}
function show_rif_calculator_result_tooltip(){
	
	$('#rif_calculator_result_dialog').dialog(
		     { position: { my: "right top", at: "right bottom", of: "#calculator_result_link", collision: "none" }},
		     { height: 320},
		     { width: 400},
		     { resizable: false},
		     { dialogClass: "tool_tip_calculator_dialog"}    
	    );
}
function show_lif_calculator_result_tooltip(){

	$('#lif_calculator_result_dialog').dialog(
		     { position: { my: "right top", at: "right bottom", of: "#calculator_result_link", collision: "none" }},
		     { height: 320},
		     { width: 400},
		     { resizable: false},
		     { dialogClass: "tool_tip_calculator_dialog"}    
	    );
}
function show_tfsa_calculator_result_tooltip(){

	$('#tfsa_calculator_result_dialog').dialog(
		     { position: { my: "right top", at: "right bottom", of: "#calculator_result_link", collision: "none" }},
		     { height: 320},
		     { width: 400},
		     { resizable: false},
		     { dialogClass: "tool_tip_calculator_dialog"}    
	    );
}
function close_result_help_tooltip(){
  if($('#rif_calculator_result_dialog').dialog('isOpen')){
    $('#rif_calculator_result_dialog').dialog('close');
  }
  if($('#lif_calculator_result_dialog').dialog('isOpen')){
    $('#lif_calculator_result_dialog').dialog('close');
  }
  if($('#tfsa_calculator_result_dialog').dialog('isOpen')){
    $('#tfsa_calculator_result_dialog').dialog('close');
  }
  
}
function close_help_tooltip(){
  if($('#rif_help_dialog').dialog('isOpen')){
    $('#rif_help_dialog').dialog('close');
  }
  if($('#lif_help_dialog').dialog('isOpen')){
    $('#lif_help_dialog').dialog('close');
  }
  if($('#tfsa_help_dialog').dialog('isOpen')){
    $('#tfsa_help_dialog').dialog('close');
  }
  
}
function show_lif_help_tooltip(){
	
	close_help_tooltip();
	$('#lif_help_dialog').dialog(
		     { position: { my: "left top", at: "left bottom", of: "#calculator_link", collision: "none" }},
		     { height: 380},
		     { width: 400},
		     { resizable: false},
		     { dialogClass: "tool_tip_calculator_dialog"}    
	    );
}
function show_tfsa_help_tooltip(){
	
	close_help_tooltip();
	$('#tfsa_help_dialog').dialog(
		     { position: { my: "left top", at: "left bottom", of: "#calculator_link", collision: "none" }},
		     { height: 260},
		     { width: 400},
		     { resizable: false},
		     { dialogClass: "tool_tip_calculator_dialog"}    
	    );
}
function show_rrsp_help_tooltip(){
	$('#rrsp_help_dialog').dialog(
	     { position: { my: "left top", at: "left bottom", of: "#calculator_link", collision: "none" }},
	     { height: 380},
	     { width: 400},
	     { resizable: false},
	     { dialogClass: "tool_tip_calculator_dialog"}    
    );
}
function show_rif_help_tooltip(){
  close_help_tooltip();
  $('#rif_help_dialog').dialog(
         { position: { my: "left top", at: "left bottom", of: "#calculator_link", collision: "none" }},
         { height: 380},
         { width: 400},
         { resizable: false},
         { dialogClass: "tool_tip_calculator_dialog"}    
      );
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
    function nextGraph(myForm)
      {
        hideValidationError();
        var planType=$("#planType").val();
        document.rifForm.paymentType.value=$('input[name="qPaymentType"]:checked').val();
        //document.rifForm.who.value=$('input[name="BirthdayRatio"]:checked').val();  
        if((prepareNumber(planType)==gRRIF)||(prepareNumber(planType)==gLIF)){
            document.rifForm.paymentType.value=$('input[name="qPaymentType"]:checked').val();           
          document.rifForm.quebecResident.value=$('input[name="qResident"]:checked').val();       
          //document.rifForm.deductWithTax.value=$('input[name="dWTax"]:checked').val();
        }else{      
          document.rifForm.quebecResident.value="no";       
          //document.rifForm.deductWithTax.value="false";
          //document.rifForm.paymentType.value="MIN";
        }
        
        if ( validateForm2015(myForm) == true )
        {
          
          
          if(prepareNumber(planType)==gRRIF){           
            runRIFGraph(myForm);
          }else if(prepareNumber(planType)==gTFSA){
            runTFSAGraph(myForm);
          }else if(prepareNumber(planType)==gLIF){            
            runLIFGraph(myForm);
          }else{
            console.log("wrong plan type");
          }
          return true;
        }
        else
        {
          return false;
        }
        
      }
      
      function nextPage(myForm)
      {
        hideValidationError();
        var planType=$("#planType").val();
        document.rifForm.paymentType.value=$('input[name="qPaymentType"]:checked').val();
        //document.rifForm.who.value=$('input[name="BirthdayRatio"]:checked').val();  
        if((prepareNumber(planType)==gRRIF)||(prepareNumber(planType)==gLIF)){
            document.rifForm.paymentType.value=$('input[name="qPaymentType"]:checked').val();           
          document.rifForm.quebecResident.value=$('input[name="qResident"]:checked').val();       
          //document.rifForm.deductWithTax.value=$('input[name="dWTax"]:checked').val();
        }else{      
          document.rifForm.quebecResident.value="no";       
          //document.rifForm.deductWithTax.value="false";
          //document.rifForm.paymentType.value="MIN";
        }
          
        if ( validateForm2015(myForm) == true )
        {
          
          if(prepareNumber(planType)==gRRIF){           
            runRIF2017(myForm);
          }else if(prepareNumber(planType)==gTFSA){
            runTFSA2017(myForm);
          }else if(prepareNumber(planType)==gLIF){            
            runLIF2017(myForm);
          }else{
            console.log("wrong plan type");
          }
        
          return true;
        }
        else
        {
          return false;
        }
      }

      function nextRRSPPage(myForm)
      {
        hideRRSPValidationError();

        if ( validateRRSPForm2015(myForm) == true )
        {
          
          rspCalculator(myForm);
        
          return true;
        }
        else
        {
          return false;
        }
      }

      function hideRRSPPrintContainer(){
        $("#rrsp-print-outer-container").attr("style","display: none");
        if(!$("#rrsp-print-outer-container").parent().hasClass("pt30")){
          $("#rrsp-print-outer-container").parent().addClass("pt30");
        }
        $("#rrsp-print-container").attr("style","display: none");
      }
      function displayRRSPPrintContainer(){
        $("#rrsp-print-outer-container").attr("style","display: ");
        if($("#rrsp-print-outer-container").parent().hasClass("pt30")){
          $("#rrsp-print-outer-container").parent().removeClass("pt30");
        }
        $("#rrsp-print-container").attr("style","display: ");
      }
      function hidePrintContainer(){
        $("#print-outer-container").attr("style","display: none");
        if(!$("#print-outer-container").parent().hasClass("pt0")){
          $("#print-outer-container").parent().addClass("pt0");
        }
        $("#print-container").attr("style","display: none");
        if($(".note-container-cangu").hasClass("print-link")){
          $(".note-container-cangu").removeClass("print-link");
        }
      }
      function displayPrintContainer(){
        $("#print-outer-container").attr("style","display: ");
        if($("#print-outer-container").parent().hasClass("pt0")){
          $("#print-outer-container").parent().removeClass("pt0");
        }
        $("#print-container").attr("style","display: ");
        if(!$(".note-container-cangu").hasClass("print-link")){
          $(".note-container-cangu").addClass("print-link");
        }
      }
      function initialDisableLink(element){
        $("#"+element).css("text-decoration","none");
        $("#"+element).css("cursor", "default");
        $("#"+element).css("color", "#d1cfd0");
      }
      function initialDisableIconLink(element){
        $("#"+element).css("cursor", "default");
      }

      function initialDisableTableImage(){
        $("#table-image").attr("src","/t2scr/sharedDeployedT2scrWeb/images/table-icon-grey.png");
      }
      function initialDisableGraphImage(){
        $("#graph-image").attr("src","/t2scr/sharedDeployedT2scrWeb/images/graph-icon-grey.png");
      }
      
      function calculatedDisableTableImage(){
        $("#table-image").attr("src","/t2scr/sharedDeployedT2scrWeb/images/table-icon-blue.png");
        
      }
      function calculatedDisableGraphImage(){
        $("#graph-image").attr("src","/t2scr/sharedDeployedT2scrWeb/images/graph-icon-blue.png");
      }
      
      function calculatedEnableTableImage(){
        $("#table-image").attr("src","/t2scr/sharedDeployedT2scrWeb/images/table-icon-black.png");
      }
      
      function calculatedEnableGraphImage(){
        $("#graph-image").attr("src","/t2scr/sharedDeployedT2scrWeb/images/graph-icon-black.png");
      }
      function calculatedDisableIconLink(element){
        $("#"+element).css("cursor", "default");
      }
      function calculatedDisableLink(element){
        $("#"+element).css("text-decoration","none");
        $("#"+element).css("cursor", "default");
        $("#"+element).css("color", "#4178AE");
      }
      function disableLink(element){
        $("#"+element).css("text-decoration","none");
        $("#"+element).css("cursor", "default");
        $("#"+element).css("color", "#4178AE");
      }
      function enableLink(element){
        $("#"+element).css("text-decoration","");
        $("#"+element).css("cursor", "");
        $("#"+element).css("color", "#000000");
        
      }
      function disableIconLink(element){
        $("#"+element).css("cursor", "default");
      }
      function enableIconLink(element){
        $("#"+element).css("cursor", "");
      }
      function clickToExport(){
        var userRole="${sessionScope.authorizeduser.AZUserRole}";
        var planType=$("#planType").val();
        generateCalculatorReport(userRole,planType);  
      }
      function clickToExportRRSP(){
        var userRole="${sessionScope.authorizeduser.AZUserRole}";
        console.log(userRole);
        generateRRSPCalculatorReport(userRole); 
      }