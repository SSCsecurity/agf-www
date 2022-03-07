// 
//
// These are utility methods that can be used by other javascript
// methods as required. They are generally simple date parsing, number
// manipulating methods

// Ayinde Yakubu, September, 2003
// Copyright (c) 2003, Unisen Inc
//
var gRRIF		=1;
var gLIF		=2;
var gTFSA		=3;
//Define some global variables
var MAP_SIZE = 7;
var PLAN_TYPE_MAP_SIZE = 3;
var ACCOUNT_TYPE_MAP_SIZE = 2;
var Pension_Jurisdiction_MAP_SIZE = 10;
var debugOn = false;
// 
var gPeriods = new Array(MAP_SIZE);
var gPeriodValue = new Array(MAP_SIZE);
var gPlanTypes = new Array(PLAN_TYPE_MAP_SIZE);
var gPlanTypeValue = new Array(PLAN_TYPE_MAP_SIZE);

var gAccountTypes = new Array(ACCOUNT_TYPE_MAP_SIZE);
var gAccountTypeValue = new Array(ACCOUNT_TYPE_MAP_SIZE);
var gPensionJurisdictions = new Array(Pension_Jurisdiction_MAP_SIZE);
var gPensionJurisdictionValue = new Array(Pension_Jurisdiction_MAP_SIZE);
var gPensionJurisdictionMinValue = new Array(Pension_Jurisdiction_MAP_SIZE);
var gPensionJurisdictionMaxValue = new Array(Pension_Jurisdiction_MAP_SIZE);
var helpWindow;


//Define standard keys
var KEY_DOLLAR      = 36;
var KEY_PERCENTAGE  = 37;
var KEY_SPACE       = 32;
var KEY_COMMA       = 44;
var KEY_MINUS       = 45;
var KEY_DOT         = 46;
var KEY_FRONT_SLASH = 47;
var KEY_ZERO        = 48;
var KEY_ONE         = 49;
var KEY_NINE        = 57;
var KEY_RETURN      = 13;
var KEY_LINEFEED    = 10;
var KEY_TAB			= 9;
var KEY_BACKSPACE	= 8;
var KEY_DELETE		= 46;
var KEY_DELETE_MAC	= 8;
var KEY_LEFT_ARROW	= 37;
var KEY_RIGHT_ARROW	= 39;
var KEY_LEFT_ARROW_MAC	= 63234;
var KEY_RIGHT_ARROW_MAC	= 63235;

//TODO. Will this call the method on startup??
initMap();
initPlanTypeMap();
initPensionJurisdictionMap();
initAccountTypeMap();








// -- String formatting routines
// - Take 12122.34639 and return $12,122.35
// -- 
function convertToMoney(amount, decplace)
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

// -- Format numbers to given decimal places
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

// truncate a number to some specified digits after the decimal
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

// --
// This function ensures that only valid numbers are entered in the field.
// Valid numbers are 0-9, . - and , A regular expression is the best way
// to parse this field
// 

function validateNumber(str, min, max)
{
   
   var temp = str.replace("$",'');
   var temp2 = temp.replace(",",'');
   var val = parseFloat(temp2);
   var minval = parseFloat(min);
   var maxval = parseFloat(max);

  // alert (val)
   if ( isNaN(val) )
   {
      alert("Entry must be a number.");
      return false;
   }
   else
   {
	   if ( minval == null && maxval == null )
	   {
 	      return true;
 	   }
 	   
 	   if( isNaN(minval) == false )
 	   {
 	       if ( isNaN(maxval) == false )
 	       {
 	          if ( val >= minval && val <= maxval )
 	          {
 	             return true;
 	          }
		      else
	          {
	         	  //alert("Value must be equal to or less than: " + maxval);
		          return false;
		      }   
		    }
		    if ( val < minval )
		    {
		     	  //alert("Value must be greater than or equal to : " + minval);
		          return false;
		    }
		    return true; 
	   }

       return true;
   }
}

function validateNumber2015(str, min, max)
{
   
   var temp = str.replace("$",'');
   var temp2 = temp.replace(",",'');
   var val = parseFloat(temp2);
   var minval = parseFloat(min);
   var maxval = parseFloat(max);

  // alert (val)
   if ( isNaN(val) )
   {
	   $('#rifNumberValidationError').show();
      return false;
   }
   else
   {
	   if ( minval == null && maxval == null )
	   {
 	      return true;
 	   }
 	   
 	   if( isNaN(minval) == false )
 	   {
 	       if ( isNaN(maxval) == false )
 	       {
 	          if ( val >= minval && val <= maxval )
 	          {
 	             return true;
 	          }
		      else
	          {
	         	  //alert("Value must be equal to or less than: " + maxval);
		          return false;
		      }   
		    }
		    if ( val < minval )
		    {
		     	  //alert("Value must be greater than or equal to : " + minval);
		    	  
		    	return false;
		    }
		    return true; 
	   }

       return true;
   }
}
///
// Ensure that the number of years to retirment is less than 100 
//
//
function checkYearsToRetirement(myForm)
{
     var str = myForm.yearsToRetire.value;
     if ( validateNumber(str) == true )
     {
        var years = prepareNumber(str);
		var ymax = 80;
		if ( years > ymax)
		{
		    alert("The number of years before retirement cannot be more than 80.");
		    myForm.yearsToRetire.value = "80";
		    myForm.yearsToRetire.focus();
	        return false;
        }
        else
        {
            return true;
        }
     }
     else
     {
	    myForm.yearsToRetire.value = "50.0";
	    myForm.yearsToRetire.focus();
	    return false;
     }
 }
///
// Ensure that the inflation rate cannot be more than 50%
//
//

// -- This method initializes all the periods used within the calculators
function initMap()
{
		
	//TODO - Ensure that these arrays never passed the MAP_SIZE

	gPeriods[0] = "Annual";       gPeriodValue[0] = 1.0;

	gPeriods[1] = "Semi-Annual";  gPeriodValue[1] = 2.0;

	gPeriods[2] = "Quarterly";    gPeriodValue[2] = 4.0;

	gPeriods[3] = "Monthly";      gPeriodValue[3] = 12.0;

	gPeriods[4] = "Bi-monthly";   gPeriodValue[4] = 24.0;

	gPeriods[5] = "Bi-weekly";    gPeriodValue[5] = 26.0;

    gPeriods[6] = "Weekly";       gPeriodValue[6] = 52.0;


}

//-- 
// Build a list of all contribution/income frequencies
//--
function buildPeriodList()
{
  var descriptions ="";
  for ( i = 0; i < MAP_SIZE; i++)
  { 
     if(i==0){
    	 descriptions =  descriptions + "<option  selected=''>" + gPeriods[i] + "<br>";
     }else{
    	 descriptions =  descriptions + "<option>" + gPeriods[i] + "<br>";
     }
  }
  return descriptions;
}

//-- This method initializes all the account type used within the calculators
function initAccountTypeMap()
{
	//TODO - Ensure that these arrays never passed the PLAN_TYPE_MAP_SIZE
	
	gAccountTypes[0] = "Pre-existing";       	gAccountTypeValue[0] = 1.0;
	gAccountTypes[1] = "New";  					gAccountTypeValue[1] = 2.0;
}

//-- 
//Build a list of all account types
//--
function buildAccountTypeList()
{
	var descriptions ="";
	for ( i = 0; i < ACCOUNT_TYPE_MAP_SIZE; i++)
	{ 
		if(i==0){
			 descriptions =  descriptions + "<option selected=''>" + gAccountTypes[i] + "<br>";
		}else{
			 descriptions =  descriptions + "<option>" + gAccountTypes[i] + "<br>";
		}
	}
	return descriptions;
}
//-- This method initializes all the plan type used within the calculators
function initPlanTypeMap()
{
	//TODO - Ensure that these arrays never passed the PLAN_TYPE_MAP_SIZE
	
	gPlanTypes[0] = "RRIF";       	gPlanTypeValue[0] = 1.0;
	gPlanTypes[1] = "LIF";  		gPlanTypeValue[1] = 2.0;
	gPlanTypes[2] = "TFSA";    		gPlanTypeValue[2] = 3.0;
}
//-- 
//Build a list of all plan types
//--
function buildPlanTypeList()
{
var descriptions ="";
for ( i = 0; i < PLAN_TYPE_MAP_SIZE; i++)
{ 
  if(i==0){
 	 descriptions =  descriptions + "<option selected=''>" + gPlanTypes[i] + "<br>";
  }else{
 	 descriptions =  descriptions + "<option>" + gPlanTypes[i] + "<br>";
  }
}
return descriptions;
}


//-- This method initializes all the Pension Jurisdiction used within the calculators
function initPensionJurisdictionMap()
{
	//TODO - Ensure that these arrays never passed the Pension_JurisdictionMAP_SIZE
	gPensionJurisdictions[0] = "Alberta";       				gPensionJurisdictionValue[0] = 0.0;   gPensionJurisdictionMinValue[0]=2.0;  gPensionJurisdictionMaxValue[0]=4.0
	gPensionJurisdictions[1] = "British Columbia";       		gPensionJurisdictionValue[1] = 1.0;   gPensionJurisdictionMinValue[1]=2.0;  gPensionJurisdictionMaxValue[1]=4.0
	gPensionJurisdictions[2] = "Federal";       				gPensionJurisdictionValue[2] = 2.0;	  gPensionJurisdictionMinValue[2]=2.0;	gPensionJurisdictionMaxValue[2]=6.0
	gPensionJurisdictions[3] = "Manitoba";  					gPensionJurisdictionValue[3] = 3.0;   gPensionJurisdictionMinValue[3]=2.0;	gPensionJurisdictionMaxValue[3]=5.0
	gPensionJurisdictions[4] = "New Brunswick";    				gPensionJurisdictionValue[4] = 4.0;   gPensionJurisdictionMinValue[4]=2.0;	gPensionJurisdictionMaxValue[4]=4.0
	gPensionJurisdictions[5] = "Newfoundland and Labrador";     gPensionJurisdictionValue[5] = 5.0;   gPensionJurisdictionMinValue[5]=3.0;	gPensionJurisdictionMaxValue[5]=7.0
	gPensionJurisdictions[6] = "Nova Scotia";       			gPensionJurisdictionValue[6] = 6.0;   gPensionJurisdictionMinValue[6]=2.0;	gPensionJurisdictionMaxValue[6]=5.0
	gPensionJurisdictions[7] = "Ontario";  						gPensionJurisdictionValue[7] = 7.0;   gPensionJurisdictionMinValue[7]=2.0;	gPensionJurisdictionMaxValue[7]=4.0
	gPensionJurisdictions[8] = "Qu&#233;bec";    					gPensionJurisdictionValue[8] = 8.0;   gPensionJurisdictionMinValue[8]=2.0;	gPensionJurisdictionMaxValue[8]=5.0
	gPensionJurisdictions[9] = "Saskatchewan";       			gPensionJurisdictionValue[9] = 9.0;   gPensionJurisdictionMinValue[9]=2.0;	gPensionJurisdictionMaxValue[9]=4.0
	
	
}
//-- 
//Build a list of all contribution/income frequencies
//--
function buildPensionJurisdictionList()
{
var descriptions ="";
for ( i = 0; i < Pension_Jurisdiction_MAP_SIZE; i++)
{ 
  if(i==0){
 	 descriptions =  descriptions + "<option  selected=''>" + gPensionJurisdictions[i] + "<br>";
  }else{
 	 descriptions =  descriptions + "<option>" + gPensionJurisdictions[i] + "<br>";
  }
}
return descriptions;
}

// -- Find the period description given an index
//
function getPeriodDesc(val)
{
    var indx = 0.0;
    var tmpval = 0.0;
    for ( i = 0; i < MAP_SIZE; i++ )
    {
        tmpval =  gPeriodValue[i];
        if ( tmpval == val )
        {
          indx = i;
          break;
        }
    }
    return gPeriods[indx];  
}

// -- Parse dates
// The date must be of the format 01-01-2003 or 01/01/2003 --dd-mm-year
// Use a a regular expression

function stringToDate(str)
{
	 var regexp = /(^[0-3][0-9])(\/|\.|\-)([0-1][0-9])(\/|\.|\-)([1-3][0-9]{3}$)/;

	 if ( regexp.test(str) == true ) 
	 {
	    
	     //alert("Valid date");
	     var result = str.match(regexp);
	     if ( result != null )
	     {
	        //alert (result[0]);
	        var daystr = result[1];
	       // alert (result[2]);
	        var monthstr = result[3];
	        //alert(result[4]);	        	        
   	        var yearstr = result[5];	        	        
	        //alert (result[6]);	        	        
	
			var day = parseFloat(daystr);
			var mth = parseFloat(monthstr) - 1;
			var year = parseFloat(yearstr);
			
			if ( day == 0 || mth == -1 || year == 0 || day > 31 || mth >= 12 )
			{
			    alert("Invalid date entry.");
			    return false;
			}
			
			var rs = new Date(year, mth, day,0,0,0,0);
			//alert(day + ":" + rs.getDate())
			//alert(mth + ":" + rs.getMonth())
		    //alert(year + ":" + rs.getFullYear())
			if ( day != rs.getDate() || mth != rs.getMonth()  || year!= rs.getFullYear())
		    {
		        alert("Invalid date entry.");
			    return false;
			}
			return (rs);
	     }
	 }
     alert("Invalid date entry.");
     return false;

}

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
				 $('#rifFormDateValidationError').show();
			    return false;
			}
			
			var rs = new Date(year, mth, day,0,0,0,0);
			//alert(day + ":" + rs.getDate())
			//alert(mth + ":" + rs.getMonth())
		    //alert(year + ":" + rs.getFullYear())
			if ( day != rs.getDate() || mth != rs.getMonth()  || year!= rs.getFullYear())
		    {
				 $('#rifFormDateValidationError').show();
			    return false;
			}
			return (rs);
	     }
	 }
	 $('#rifFormDateValidationError').show();
     return false;

}
// -- 
// Checks if this is a leap year
//
function isLeap(currentDate)
{
  
   var year = currentDate.getFullYear();
   return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? true : false;
}

// ---
// Get number of days from year
// ---
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

// ---
// Days left in a year
// ---
function daysLeftInYear(aCurrentDate)
{
  // Store the current date and time
  if ( aCurrentDate == null || aCurrentDate == false)
  {
     return false;
  }
     
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

//--
// Identify selections in a radio button
// --
function identifyRadioSelection(radioGroup)
{
   var result = "no";
   var pos = 0;
   for (var i = 0; i < radioGroup.length; i++){
    if (radioGroup[i].checked == true ){
        pos = i;
        break;
     }
   }
   if ( pos == 0 ) {  
       result = "yes";
   }
   return result;
}

// ---
//  This method find the days between any two set of dates.
// ---
function daysBetween(oDate_1, oDate_2) 
{
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24
    iTime_1 = oDate_1.getTime();
    iTime_2 = oDate_2.getTime();
     
    iDiff = Math.abs( iTime_1 - iTime_2 );

    return( Math.round( iDiff / ONE_DAY ) ); // 1000ms * 60secs * 60mins * 24hours = 1 day)
}



//--
// Validate all the fields in a form
//
function validateForm(myForm)
{

  //Get all elements in this form
	 
  var field = "";
  for ( var i = 0; i < myForm.length; i++)
  {
     field = myForm.elements[i];
     if ( field.name == "paymentFreqOptions" )
     {
         break;
     }
     if ( typeof (field) == "string" )
     {
    	 if(field.type == 'button')// This button is dynamically created by multiselect plugin
    		 continue;
    	 if ( field.value == null || field.value =="")
    	 { 	 	    
    		 //alert(field.name + " entry is invalid ");	
    		 //alert("The data you have entered is invalid. Please try again.");
    		 alert("The 'Date of Birth' and/or 'First Payment Date' data is invalid. Please try again.");    
    		 return false;
    	 }
     }
     else
     {
    	 if(field.type == 'button')// This button is dynamically created by multiselect plugin
    		 continue;
         if ( field.value == null || field.value =="")
         {             
             //alert(field.name + " entry is invalid "); 
             //alert("The data you have entered is invalid. Please try again.");
             alert("The 'Date of Birth' and/or 'First Payment Date' data is invalid. Please try again.");            
             return false;
         }
     }
  }
  return true;
}
function validateForm2015(myForm)
{

  //Get all elements in this form
	hideValidationError();
  var field = "";
  var skipped=false;
  for ( var i = 0; i < myForm.length; i++)
  {
     field = myForm.elements[i];
     //dropdown will not get validated
     if(field.name == "planType"){
		 if ( field.value == "3" )
    	 { 	 	    
			 skipped=true;
    	 }
		 
	 }
     if ( field.name == "paymentFreqOptions" )
     {
    	 continue;
     }

    //dropdown will not get validated
     
     
     if(field.type == 'button')// This button is dynamically created by multiselect plugin
		 continue;
	 if(field.name == "txtPlanValue"){
		 if ( field.value == null || field.value =="")
    	 { 	 	    
			 $('#rifCurrentPlanValueValidationError').show();   
    		 return false;
    	 }else{
	    		if(!checkCurrentPlanValue(myForm)){
	    		 	return false;
	    		}
    	 }
	 }
	 
	 if(field.name == "txtIssueDate"){
		 if ( field.value == null || field.value =="")
    	 { 	 	    
			 $('#rifRIFIssueDateValidationError').show();   
    		 return false;
    	 }else{
    		 
    		 if(!checkValidIssueDate2015(myForm,myForm.txtIssueDate.value)){
	    		 	return false;
	    	 }
    	 }
	 }
	 if(field.name == "txtAmount"){
		 if ( field.value == null || field.value =="")
    	 { 	 	    
			 if(skipped){
				 $('#rifWithdrawalAmountValidationError').show();  
			 }else{
				 $('#rifPayperAmountValidationError').show();  
			 }
			 
			 return false;
    	 }else{
    		if((myForm.paymentType.value=="FIXED")||(myForm.paymentType.value=="undefined")) {
	    		if(!checkWithdrawalAmount(myForm)){
	    			return false;
	    	 	}
    		}
    		else{
    			
    		}
    	 }
	 }
	 if(field.name == "txtROR"){
		 if ( field.value == null || field.value =="")
    	 { 	 	    
			 $('#rifRORValidationError').show();   
    		 return false;
    	 }else{
	    		if(!checkRORMax2015(myForm)){
	    		 	return false;
	    		}
    	 }
		 
	 }
	 /*issue log 398 remove the firstPayDate field and using getSmartFirstPaymentDate function instead
	  * if(field.name == "firstPayDate"){
		 
		 if ( field.value == null || field.value =="")
    	 { 	 	    
			 $('#rifFirstPaymentDateValidationError').show();   
    		 return false;
    	 }else{
    		 
    		 if(!checkValidPaymentDate2015(myForm,myForm.firstPayDate.value)){
	    		 return false;
	    	 }
    		 if(!validatePaymentDate2015(myForm,myForm.firstPayDate.value)){
    			 return false;
    		 }
    	 }
	 }*/
	
	 if(!skipped){
		 if(field.name == "paymentType"){
			 if ( field.value == null || field.value =="" || field.value=="undefined")
	    	 { 	 	    
				 $('#rifPaymentTypeValidationError').show();   
	    		 return false;
	    	 }
		 }
		 if(field.name == "txtBirthDate"){
			 if ( field.value == null || field.value =="")
	    	 { 	 	    
				 $('#rifBirthDayValidationError').show();   
	    		 return false;
	    	 }else{
	    		 if(!checkBirthYear(myForm)){
		    		 	return false;
		    	 }
	    	 }
		 }
	 }else{
		
	 }
	 /*if(field.name == "deductWithTax"){
		 if ( field.value == null || field.value =="" || field.value=="undefined")
    	 { 	 	    
			 $('#rifDeductWithholdTaxValidationError').show();   
    		 return false;
    	 }
	 }*/
	
	 if(field.name == "quebecResident"){
		 if($("input[name$='qResident']").attr('disabled')==false){
			 if ( field.value == null || field.value =="" || field.value=="undefined")
	    	 { 	 	    
				 $('#rifQuebecResidentValidationError').show();   
	    		 return false;
	    	 }
	 	 }
	 }

  }
  return true;
}
//---
// Reset all the fields of a form
// --
//--
//
function resetForm(myForm)
{
  myForm.reset();
  $("#txtPlanValueID").val("$50,000");
  $("#txtAmountID").attr('disabled', true);
  $("#txtAmountID").val("$0.00");
  $("#txtRORID").val("4.0%");
  $("#datepicker_issuedate").datepicker('setDate', getCurrentDate());
  
  $("#paymentFreqOptionsID option:eq(0)").attr('selected', 'selected');
  $("#paymentFreq").val("1.0");  
  $("#paymentFreqOptionsID").multiselect('refresh');
  $("#planTypeOptionsID option:eq(0)").attr('selected', 'selected');
  $("#planType").val("1");  
  $("#planTypeOptionsID").multiselect('refresh');
  $("#datepicker_issuedate").datepicker('setDate', getCurrentDate());
  $('#accountTypeOptionsID').multiselect('enable');
  if (!!document.documentMode) {	
	//ie
	$("#txtPlanValueID").addClass("glowing-border");
	$("#txtRORID").addClass("glowing-border");
	$("#txtAmountID").addClass("glowing-border");
	$("#dateinput_birthday").addClass("glowing-border");
	$("#datepicker_issuedate").addClass("glowing-border");
	$("#clientName_0").addClass("glowing-border");
	
  }
  return ;
}


// --
// Ensure the ROR  value is always below a particular range
// 
function checkRORMax(myForm)
{
    var str = myForm.txtROR.value;
    if ( validateNumber(str,0,20) == true )
    {
      return true;
   }
   else
   {
       alert("Expected rate of return cannot be greater than 20% ");
       myForm.txtROR.value = "20.0";
       myForm.txtROR.focus();
       return false;
   }
}

function checkRORMax2015(myForm)
{
    var str = myForm.txtROR.value;
    hideValidationError();
    if ( str == null || str =="")
	{ 	 	    
		 $('#rifRORValidationError').show();  
		 
		 if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
		}else{
			myForm.txtROR.focus();
		}
		 return false;
	}else{
		if(str.indexOf("%")>-1){
			//has $ sign, substring from 1 to end
			str=str.substr(0,str.length-1);
			
		}
		var tempStr = str;
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=str;
		}
		if(isNaN(tempStr2.valueOf())){
			$("#rifRORNumberValidationError").show();
			 if (!!document.documentMode) {	
					//ie has problem regarding focus can not kept. cursor color is invisiable			
			}else{
				myForm.txtROR.focus();
			}
			return false;
		}else{
			var minval = parseFloat("0.0");
			var val=prepareNumber(str);
			if ( val <= minval  )
		    {
				$('#rifRORGreaterThanZeroValidationError').show();
			       //myForm.txtROR.value = "4.0";
			       myForm.txtROR.focus();
			       return false;
		     }else if( validateNumber2015(str,0,20) == true){
		    	console.log(val);
		    	myForm.txtROR.value= val+"%";
		    	return true;
		     }
		    else
		    {
		    	$('#rifRORValueValidationError').show();
		    	 if (!!document.documentMode) {	
						//ie has problem regarding focus can not kept. cursor color is invisiable			
				}else{
					myForm.txtROR.focus();
				}
			       return false;
		    } 
		}

	}
}


function checkCurrentPlanValue(myForm){

	var str = myForm.txtPlanValue.value;
	//remove space
	str = str.replace(/\s/g, '');	
	hideValidationError();
	if ( str == null || str =="")
	{ 	 	    
		 $('#rifCurrentPlanValueValidationError').show();  
		 
		 if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
		}else{
			 myForm.txtPlanValue.focus();
		} 
		 return false;
	}else{
		
		//remove the $ : like xxx,xx$
		var tempStr;
		if ( str.lastIndexOf("$") != -1 ) 
		{
		    tempArray1 = str.split("$");
		    tempStr =tempArray1.join("");
		       
		}else{
			
			tempStr=str;
		}
		
		
		
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=tempStr;
		}
		//remove the leading zero;
		tempStr2=tempStr2.replace(/^0+/, '');
	
		if(isNaN(tempStr2.valueOf())){
			console.log("e");
			$("#rifOpenValueNumberValidationError").show();
			 if (!!document.documentMode) {	
					//ie has problem regarding focus can not kept. cursor color is invisiable			
			}else{
				 myForm.txtPlanValue.focus();
			} 
			return false;
		}else{
			var minval = parseFloat("0.0");
			var val=prepareNumber(tempStr2);
			if ( val > minval  )
		    {
				console.log(val);
				myForm.txtPlanValue.value="$"+convertToMoneyWithoutDecimal(val);
				return true;
		     }
		    else
		    {
		    	$('#rifOpenValueGreaterThanZeroValidationError').show();
		    	
		    	return false;
		    }
		}
		 
	}
   
}

function checkWithdrawalAmount(myForm){
	var ptype = parseInt(myForm.planType.value);

	var lang=myForm.globalLang.value;
	var str = myForm.txtAmount.value;
	str = str.replace(/\s/g, '');	
	hideValidationError();
	if ( str == null || str =="")
	{ 	 	    
		
		 if(ptype==3){
	    		//tfsa
			 $('#rifWithdrawalAmountValidationError').show();  
		 }else{
    		//rrif lif
    		 $('#rifPayperAmountValidationError').show();  
		 }
		 if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
		}else{
			 myForm.txtAmount.focus();
		} 
		 return false;
	}else{
		

		//remove the $ : like xxx,xx$
		var tempStr;
		if ( str.lastIndexOf("$") != -1 ) 
		{
		    tempArray1 = str.split("$");
		    tempStr =tempArray1.join("");
		       
		}else{
			
			tempStr=str;
		}
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=tempStr;
		}
		if(isNaN(tempStr2.valueOf())){
			
			if(ptype==3){
	    		//tfsa
				$("#rifWithdrawalperNumberValidationError").show();
	    	}else{
	    		//rrif lif
	    		$("#rifPayperNumberValidationError").show();
	    	}
			if (!!document.documentMode) {	
					//ie has problem regarding focus can not kept. cursor color is invisiable			
			}else{
				 myForm.txtAmount.focus();
			}
			return false;
		}else{
			var minval = parseFloat("0.0");
			var val=prepareNumber(tempStr2);
			if ( val > minval  )
		    {
				console.log(val);
				myForm.txtAmount.value="$"+convertToMoney(prepareNumber(val));
				return true;
		     }
		    else
		    {
		    	if(ptype==3){
		    		//tfsa
		    		$('#rifWithdrawalPerGreaterThanZeroValidationError').show();
		    	}else{
		    		//rrif lif
		    		$('#rifPayperGreaterThanZeroValidationError').show();
		    	}
		    	
		    	 if (!!document.documentMode) {	
						//ie has problem regarding focus can not kept. cursor color is invisiable			
				}else{
					 myForm.txtAmount.focus();
				}
		    	return false;
		    }
		}
		 
	} 
}

// Ensure that age can never be more than 100
// 
function checkAgeMax(myForm)
{
    var str = myForm.txtToAge.value;
    if ( validateNumber(str,0,100) == true )
    {
      return true;
    }
    else
    {
          alert("The ToAge cannot be more than 100.");
          myForm.txtToAge.value = "100";
          myForm.txtToAge.focus();
          return false;
    }
}

// Ensure that age can never be more than 100
// 
function checkAgeMax2015(myForm)
{
    var str = myForm.txtToAge.value;
    hideValidationError();
    if ( str == null || str =="")
	{ 	 	    
		 $('#rifToAgeValidationError').show();  
		 myForm.txtToAge.focus();
		 return false;
	}else{
		var tempStr = str;
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=str;
		}
		if(isNaN(tempStr2.valueOf())){
			$("#rifNumberValidationError").show();
			myForm.txtToAge.focus();
			return false;
		}else{
			var minval = parseFloat("0.0");
			var val=prepareNumber(str);
			if ( val > minval  )
		    {
				var maxAge = 100;
			    if ( val > maxAge )
			    {
			    	$('#rifAgeValidationError').show();
			        myForm.txtToAge.focus();
			        return false;
			    }else{
			      return true;
			    }
		    }
		    else
		    {
		    	$('#rifGreaterThanZeroValidationError').show();
		    	myForm.txtToAge.focus();
		    	return false;
		    }
		}
		 
	}
}

// ---
// Calculates age given a starting date and an end date
// ---
function calculateAge(startDate, endDate)
{
   
   if ( startDate == null || startDate == false || endDate == null || endDate == false )
   {
       alert("Date entry is invalid");
       return 0;
   }
   
   var s = startDate;
   var e = endDate;
   var   mon, day, year, DD, MM, YY, age;
  
   if ( endDate < startDate )
   {
      alert("End date cannot be earlier than start date ");
      return 0;
   }
   
   YY   = s.getFullYear();	// year of birth (4 digits)
   MM   = s.getMonth() + 1;	// month of birth (1-12)
   DD   = s.getDate();	// date of birth (1-31)

   year = e.getFullYear();	// get year of current
   mon  = e.getMonth() + 1;	// get month of current
   day  = e.getDate();	// get date of current

   age = year - YY;
  
   //Handle round offs
   if ((MM > mon) || (MM == mon && day < DD)) age --;
   return age;
}

function calculateAgeNew(startDate, endDate)
{
   
   if ( startDate == null || startDate == false || endDate == null || endDate == false )
   {
       alert("Date entry is invalid");
       return 0;
   }
   
   var s = startDate;
   var e = endDate;
   var   mon, day, year, DD, MM, YY, age;
  
   if ( endDate < startDate )
   {
      alert("End date cannot be earlier than start date ");
      return 0;
   }
   
   YY   = s.getFullYear();	// year of birth (4 digits)
   MM   = s.getMonth() + 1;	// month of birth (1-12)
   DD   = s.getDate();	// date of birth (1-31)

   year = e.getFullYear();	// get year of current
   mon  = e.getMonth() + 1;	// get month of current
   day  = e.getDate();	// get date of current

   age = year - YY;
  
   //Handle round offs
   //if ((MM > mon) || (MM == mon && day < DD)) age --;
   //age --;
   return age;
}

// -- 
// retrieve selected item 
//
function makePaymentChoice(myForm, result)
{
   initMap();
   var myIndex  = myForm.paymentFreqOptions.selectedIndex;
   var selValue = gPeriodValue[myIndex];
   myForm.paymentFreq.value = selValue;
   hideValidationError();
   console.log("payment frequency selection is "+selValue);
   return selValue;
  

}
//-- 
//retrieve selected item 
//
function makePensionJurisdictionChoice(myForm, result)
{
initPensionJurisdictionMap();
var myIndex  = myForm.pensionJurisdictionOptions.selectedIndex;
var selValue = gPensionJurisdictionValue[myIndex];
myForm.pensionJurisdiction.value = selValue;
hideValidationError();
console.log("Pension Jurisdiction selection is "+selValue);
checkBirthYear(myForm);
return selValue;


}

//-- 
//retrieve selected item 
//
function makeAccountTypeChoice(myForm, result)
{
initAccountTypeMap();
var myIndex  = myForm.accountTypeOptions.selectedIndex;
var selValue = gAccountTypeValue[myIndex];
myForm.accountType.value = selValue;
hideValidationError();
console.log("Account Type selection is "+selValue);
return selValue;


}


//-- 
//retrieve selected item 
//
function makePlanTypeChoice(myForm, result)
{
initPlanTypeMap();
var myIndex  = myForm.planTypeOptions.selectedIndex;
var selValue = gPlanTypeValue[myIndex];
myForm.planType.value = selValue;
hideValidationError();
console.log("plan type selection is "+selValue);
return selValue;


}

function resetRRIFInput(){
	
	//reset the input for rrif
	 $("#txtPlanValueID").val("$50,000");
	 $("#txtAmountID").attr('disabled', true);
	 $("#txtAmountID").val("$0.00");
	 $("#txtRORID").val("4.0%");
	 $("#datepicker_issuedate").datepicker('setDate', getCurrentDate());
	 $("#dateinput_birthday").val("");
	 $("#paymentFreqOptionsID option:eq(0)").attr('selected', 'selected');
	 $("#paymentFreq").val("1.0");  
	 $("#paymentFreqOptionsID").multiselect('refresh');
	 $(".pensionJurisdictionOptionsContainer").attr("style","display: none");
	 $('#pensionJurisdictionOptionsID').multiselect('disable');
	 //$("input[name$='dWTax']").removeAttr('disabled');
	
	 $("#accountTypeOptionsID option:eq(0)").attr('selected', 'selected');
	 $("#accountTypeID").val("1.0");  
	 $("#accountTypeOptionsID").multiselect('refresh');
	 
	 $('input[name="qPaymentType"]').attr('checked', false);
	 $("#paymentTypeID").val("");
	 
	 $('input[name="qResident"]').attr('checked', false);
	 //$('input[name="dWTax"]').attr('checked', false);
	 //$("input[name$='qResident']").attr('disabled', true);
	 //$('input[name="BirthdayRatio"][value="mine"]').attr('checked', true);
	 $(".paymentTypeContainer").attr("style","display: ");
	 $(".paymentPeriodContainer").attr("style","display: ");
	 $(".qResidentContainer").attr("style","display: ");
	 $(".birthDateContainer").attr("style","display: ");
	 $(".tfsaAgeSet").attr("style","display: none");
	 
	 $(".accountTypeOptionsContainer").attr("style","display: ");
	 $(".lif").attr("style","display: none");
	 $(".rriftfsa").attr("style","display: ");
	 $(".rriflifFreqName").attr("style","display: ");
	 $(".tfsaFreqName").attr("style","display: none");
	 
	 $(".rriflifOtherAmountName").attr("style","display: ");
 	 $(".tfsaOtherAmountName").attr("style","display: none");
	 if($(".rrifpd").hasClass("pr20")){
		 $(".rrifpd").removeClass("pr20");
	 }
	 if($(".rrifpd").hasClass("pr10")){
		 $(".rrifpd").removeClass("pr10");
	 }
	 if($(".lifpd").hasClass("pr10")){
		 $(".lifpd").removeClass("pr10");
	 }
	 $(".rrifpd").addClass("pr20");
	 close_help_tooltip();
	 close_result_help_tooltip();
	 $('#accountTypeOptionsID').multiselect('enable');

}

function resetRRIFResult(){
	$('#cumulativeRRIFTitle').attr("style","display: ");
	$('#cumulativeTFSATitle').attr("style","display: none");
	$('#cumulativeLIFTitle').attr("style","display: none");

	$("#rrif-cumulative-data").attr("style","display: ");
	$("#lif-cumulative-data").attr("style","display: none");
	$("#tfsa-cumulative-data").attr("style","display: none");
	
	$('#initial-data-tfsa-calculator-result-table').attr("style","display: none");
	$('#initial-data-lif-calculator-result-table').attr("style","display: none");
	$('#initial-data-rif-calculator-result-table').attr("style","display: ");
	
	
	$('#tfsa-calculator-result-table').attr("style","display: none");
	$('#lif-calculator-result-table').attr("style","display: none");
	$('#rif-calculator-result-table').attr("style","display: ");
	

		
	$('#tfsa-calculator-pager').attr("style","display: none");
	$('#lif-calculator-pager').attr("style","display: none");
	$('#rif-calculator-pager').attr("style","display: ");
	
	$(".initial-data").attr("style","display: ");
	$("#initial-data-rif-calculator-result-table").attr("style","height: 400px");
	$("#initial-data-lif-calculator-result-table").attr("style","display: none");
	$("#initial-data-tfsa-calculator-result-table").attr("style","display: none");
	
	$(".calculated-data").attr("style","display: none");
	$("#calculator-result-body").attr("style","display: none");
	$("#rif-calculator-pager").attr("style","display: none");
	$("#lif-calculator-pager").attr("style","display: none");
	$("#tfsa-calculator-pager").attr("style","display: none");
	
	$("#rif-calculator-result-table").attr("style","display: none");
	$("#lif-calculator-result-table").attr("style","display: none");
	$("#tfsa-calculator-result-table").attr("style","display: none");
	
	if(!$("#result_summary_container").hasClass("pb30")){
		$("#result_summary_container").addClass("pb30");
	}
	$(".calculator-result-container").height($("#search-container").height());
	$("#result_data_table_component").attr("style","display: ");
	$("#result_data_graph_component").attr("style","display: none");
	initialDisableLink("table-link");
	initialDisableIconLink("table-icon");
	initialDisableTableImage();
				
	initialDisableLink("graph-link");
	initialDisableIconLink("graph-icon");
	initialDisableGraphImage();
	hidePrintContainer();

	$("#rrifmessage2").attr("style","display: ");
	$("#lifmessage2").attr("style","display: none");
	$("#message3").attr("style","display: ");
	
	$(".tfsaassumptionmessage").attr("style","display: none");
	$(".lifassumptionmessage").attr("style","display: none");
	$(".lifassumptionmessage").attr("style","display: none");
	$(".rrifassumptionmessage").attr("style","display: ");
	$(".rrifassumptionmessage").attr("style","display: ");

	

	
}
function resetTFSAInput(){
	
	//reset the input for rrif
	 $("#txtPlanValueID").val("$50,000");
	 $("#txtAmountID").attr('disabled', true);
	 $("#txtAmountID").val("$0.00");
	 $("#txtRORID").val("4.0%");
	 $("#datepicker_issuedate").datepicker('setDate', getCurrentDate());
	 $("#dateinput_birthday").val("");
	 $("#paymentFreqOptionsID option:eq(0)").attr('selected', 'selected');
	 $("#paymentFreq").val("1.0");  
	 $("#paymentFreqOptionsID").multiselect('refresh');
	 $(".pensionJurisdictionOptionsContainer").attr("style","display: none");
	 $('#pensionJurisdictionOptionsID').multiselect('disable');
	 //$("input[name$='dWTax']").attr('disabled', true);
	 
	 $("#accountTypeOptionsID option:eq(0)").attr('selected', 'selected');
	 $("#accountType").val("1.0");  
	 $("#accountTypeOptionsID").multiselect('refresh');
	 
	 $('input[name="qPaymentType"]').attr('checked', false);
	 $("#paymentTypeID").val("FIXED");
	 $("#accountTypeID").val("2");
	 
	 $('input[name="qResident"]').attr('checked', false);
	 //$('input[name="dWTax"]').attr('checked', false);
	 //$("input[name$='qResident']").attr('disabled', true);
	 //$('input[name="BirthdayRatio"][value="mine"]').attr('checked', true);
	 
	 $(".paymentPeriodContainer").attr("style","display: ");
	 $(".paymentTypeContainer").attr("style","display: none");
	 $("#txtAmountID").attr('disabled', false);
     $("#txtAmountID").val("$0.00");
	 $(".lif").attr("style","display: none");
	 $(".rriftfsa").attr("style","display: ");
	 $(".qResidentContainer").attr("style","display: none");
	 $(".birthDateContainer").attr("style","display: none");
	 $(".tfsaAgeSet").attr("style","display: none");
	 $(".accountTypeOptionsContainer").attr("style","display: none");
	 
	 $(".rriflifFreqName").attr("style","display: none");
	 $(".tfsaFreqName").attr("style","display: ");
	 $(".rriflifOtherAmountName").attr("style","display: none");
 	 $(".tfsaOtherAmountName").attr("style","display: ");
	 if($(".rrifpd").hasClass("pr20")){
		 $(".rrifpd").removeClass("pr20");
	 }
	 if($(".rrifpd").hasClass("pr10")){
		 $(".rrifpd").removeClass("pr10");
	 }
	 if($(".lifpd").hasClass("pr10")){
		 $(".lifpd").removeClass("pr10");
	 }
	 
	 close_help_tooltip();
	 close_result_help_tooltip();
}

function resetTFSAResult(){
	$('#cumulativeRRIFTitle').attr("style","display: none");
	$('#cumulativeTFSATitle').attr("style","display: ");
	$('#cumulativeLIFTitle').attr("style","display: none");
	
	$("#rrif-cumulative-data").attr("style","display: none");
	$("#lif-cumulative-data").attr("style","display: none");
	$("#tfsa-cumulative-data").attr("style","display: ");
	
	$('#initial-data-tfsa-calculator-result-table').attr("style","display: ");
	$('#initial-data-lif-calculator-result-table').attr("style","display: none");
	$('#initial-data-rif-calculator-result-table').attr("style","display: none");
	
	$('#tfsa-calculator-result-table').attr("style","display: ");
	$('#lif-calculator-result-table').attr("style","display: none");
	$('#rif-calculator-result-table').attr("style","display: none");
	

	
	$('#tfsa-calculator-pager').attr("style","display: ");
	$('#lif-calculator-pager').attr("style","display: none");
	$('#rif-calculator-pager').attr("style","display: none");
	$(".initial-data").attr("style","display: ");
	$("#initial-data-rif-calculator-result-table").attr("style","display: none");
	$("#initial-data-lif-calculator-result-table").attr("style","display: none");
	$("#initial-data-tfsa-calculator-result-table").attr("style","height: 200px");
	
	
	$(".calculated-data").attr("style","display: none");
	$("#calculator-result-body").attr("style","display: none");
	$("#rif-calculator-pager").attr("style","display: none");
	$("#lif-calculator-pager").attr("style","display: none");
	$("#tfsa-calculator-pager").attr("style","display: none");
	
	$("#rif-calculator-result-table").attr("style","display: none");
	$("#lif-calculator-result-table").attr("style","display: none");
	$("#tfsa-calculator-result-table").attr("style","display: none");
	
	if(!$("#result_summary_container").hasClass("pb30")){
		$("#result_summary_container").addClass("pb30");
	}
	
	$(".calculator-result-container").css("height","auto");
	$("#result_data_table_component").attr("style","display: ");
	$("#result_data_graph_component").attr("style","display: none");
	initialDisableLink("table-link");
	initialDisableIconLink("table-icon");
	initialDisableTableImage();
				
	initialDisableLink("graph-link");
	initialDisableIconLink("graph-icon");
	initialDisableGraphImage();
	hidePrintContainer();

	$("#rrifmessage2").attr("style","display: none");
	$("#lifmessage2").attr("style","display: none");
	$("#message3").attr("style","display: none");
	
	$(".tfsaassumptionmessage").attr("style","display: ");
	$(".lifassumptionmessage").attr("style","display: none");
	$(".lifassumptionmessage").attr("style","display: none");
	$(".rrifassumptionmessage").attr("style","display: none");
	$(".rrifassumptionmessage").attr("style","display: none");

	
	

}
function resetLIFInput(){
	
	//reset the input for rrif
	 $("#txtPlanValueID").val("$50,000");
	 $("#txtAmountID").attr('disabled', true);
	 $("#txtAmountID").val("$0.00");
	 $("#txtRORID").val("4.0%");
	 $("#datepicker_issuedate").datepicker('setDate', getCurrentDate());
	 $("#dateinput_birthday").val("");
	 $("#paymentFreqOptionsID option:eq(0)").attr('selected', 'selected');
	 $("#paymentFreq").val("1.0");  
	 $("#paymentFreqOptionsID").multiselect('refresh');
	 $(".pensionJurisdictionOptionsContainer").attr("style","display: ");
	 $('#pensionJurisdictionOptionsID').multiselect('enable');
	 //$("input[name$='dWTax']").removeAttr('disabled');
	 
	 $("#accountTypeOptionsID option:eq(0)").attr('selected', 'selected');
	 $("#accountTypeID").val("1.0");  
	 $("#accountTypeOptionsID").multiselect('refresh');
	 
	 $('input[name="qPaymentType"]').attr('checked', false);
	 $("#paymentTypeID").val("");
	 
	 $('input[name="qResident"]').attr('checked', false);
	 //$('input[name="dWTax"]').attr('checked', false);
	 //$("input[name$='qResident']").attr('disabled', true);
	 //$('input[name="BirthdayRatio"][value="mine"]').attr('checked', true);
	 $(".paymentTypeContainer").attr("style","display: ");
	 $(".birthDateContainer").attr("style","display: ");
	 $(".tfsaAgeSet").attr("style","display: none");
	 $(".paymentPeriodContainer").attr("style","display: ");
	 $(".qResidentContainer").attr("style","display: ");
	 $(".accountTypeOptionsContainer").attr("style","display: ");
	 $(".rriftfsa").attr("style","display: ");
	 $(".lif").attr("style","display: ");
	 $(".rriflifFreqName").attr("style","display: ");
	 $(".tfsaFreqName").attr("style","display: none");
	 $(".rriflifOtherAmountName").attr("style","display: ");
 	 $(".tfsaOtherAmountName").attr("style","display: none");
	 
	 if($(".rrifpd").hasClass("pr20")){
		 $(".rrifpd").removeClass("pr20");
	 }
	 if($(".rrifpd").hasClass("pr10")){
		 $(".rrifpd").removeClass("pr10");
	 }
	 if($(".lifpd").hasClass("pr10")){
		 $(".lifpd").removeClass("pr10");
	 }
	 $(".rrifpd").addClass("pr10");
	 $(".lifpd").addClass("pr10");
	 
	 close_help_tooltip();
	 close_result_help_tooltip();
	 $('#accountTypeOptionsID').multiselect('enable');
}

function resetLIFResult(){
	$('#cumulativeRRIFTitle').attr("style","display: none");
	$('#cumulativeTFSATitle').attr("style","display: none");
	$('#cumulativeLIFTitle').attr("style","display: ");
	
	$("#rrif-cumulative-data").attr("style","display: none");
	$("#lif-cumulative-data").attr("style","display: ");
	$("#tfsa-cumulative-data").attr("style","display: none");
	
	$('#initial-data-tfsa-calculator-result-table').attr("style","display: none");
	$('#initial-data-lif-calculator-result-table').attr("style","display: ");
	$('#initial-data-rif-calculator-result-table').attr("style","display: none");
	
	$('#tfsa-calculator-result-table').attr("style","display: none");
	$('#lif-calculator-result-table').attr("style","display: ");
	$('#rif-calculator-result-table').attr("style","display: none");
	
	$('#calculator-result-graph').attr("style","display: none");
	
	$('#tfsa-calculator-pager').attr("style","display: none");
	$('#lif-calculator-pager').attr("style","display: ");
	$('#rif-calculator-pager').attr("style","display: none");
	
	$(".initial-data").attr("style","display: ");
	$("#initial-data-rif-calculator-result-table").attr("style","display: none");
	$("#initial-data-lif-calculator-result-table").attr("style","height: 400px");
	$("#initial-data-tfsa-calculator-result-table").attr("style","display: none");
	
	$(".calculated-data").attr("style","display: none");
	$("#calculator-result-body").attr("style","display: none");
	$("#rif-calculator-pager").attr("style","display: none");
	$("#lif-calculator-pager").attr("style","display: none");
	$("#tfsa-calculator-pager").attr("style","display: none");
	
	$("#rif-calculator-result-table").attr("style","display: none");
	$("#lif-calculator-result-table").attr("style","display: none");
	$("#tfsa-calculator-result-table").attr("style","display: none");
	
	if(!$("#result_summary_container").hasClass("pb30")){
		$("#result_summary_container").addClass("pb30");
	}
	$(".calculator-result-container").height($("#search-container").height());
	$("#result_data_table_component").attr("style","display: ");
	$("#result_data_graph_component").attr("style","display: none");
	initialDisableLink("table-link");
	initialDisableIconLink("table-icon");
	initialDisableTableImage();
				
	initialDisableLink("graph-link");
	initialDisableIconLink("graph-icon");
	initialDisableGraphImage();
	hidePrintContainer();

	$("#rrifmessage2").attr("style","display: none");
	$("#lifmessage2").attr("style","display: ");
	$("#message3").attr("style","display: ");
	
	$(".tfsaassumptionmessage").attr("style","display: none");
	$(".lifassumptionmessage").attr("style","display: ");
	$(".lifassumptionmessage").attr("style","display: ");
	$(".rrifassumptionmessage").attr("style","display: none");
	$(".rrifassumptionmessage").attr("style","display: none");

	
}
function refreshSearchInput()
{
	
	
	var planType=$("#planType").val();
	if(prepareNumber(planType)==gRRIF){
		//RIF	
		resetRRIFInput();
		resetRRIFResult();	 
		
	}else if(prepareNumber(planType)==gTFSA){
		//TFSA
		resetTFSAInput();
		resetTFSAResult();
	}else {
		//LIF
	
		resetLIFInput();
		resetLIFResult();
	} 

}
//--
// Show the help  page as a window
// --
function showHelp(helpName)
{ 
    window.open("rif_help.html","Help_Window","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=400")
}

//--
// Print the report 
//--
function printReport(reportName)
{
   window.print();
}

//---
// Begin the html form
//---
function beginHtml(str)
{
  document.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
  document.write("<html>");
  document.write("<head>");
  document.write("<title>");
  document.write(str);
  document.write("</title>");
  document.write("<LINK HREF='/t2scr/static/css/agfstyle_default_11px.css' MEDIA='screen' REL='stylesheet' TITLE='AGF_Small_Text' TYPE='text/css'/>");
  document.write("<LINK HREF='/t2scr/static/css/agfstyle_default_11px.css' MEDIA='screen' REL='alternate stylesheet' TITLE='AGF_Small_Text' TYPE='text/css'/>");
  document.write("<LINK HREF='/t2scr/static/css/agfstyle_default_14px.css' MEDIA='screen' REL='alternate stylesheet' TITLE='AGF_Large_Text' TYPE='text/css'/>");
  document.write("<LINK HREF='/t2scr/static/css/agfstyle_default_18px.css' MEDIA='screen' REL='alternate stylesheet' TITLE='AGF_Larger_Text' TYPE='text/css'/>");
  document.write("<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>");
  document.write("<HTTP-EQUIV='PRAGMA' CONTENT='NO-CACHE'>");
 // includeScripts();

  document.write("<script language=\"JavaScript\" src=\"utility.js\"      type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"calendar_lib.js\" type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"overlib_mini.js\" type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"rifcalc.js\"      type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"graph.js\"        type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"rifresult.js\"    type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"scalablefont.js\" type=\"text/javascript\"></script>");



  document.write("</head>");
}

function beginHtmlPrint(str)
{
  document.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
  document.write("<html>");
  document.write("<head>");
  document.write("<title>");
  document.write(str);
  document.write("</title>");
  document.write("<link rel='stylesheet' href='/t2scr/static/css/agfstyle.css' type='text/css'>");
  document.write("<STYLE TYPE='text/css'>.back	{margin:0px 15px 0px 0px;}</STYLE> "); 
  document.write("<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>");
  document.write("<HTTP-EQUIV='PRAGMA' CONTENT='NO-CACHE'>");
  
  //Include the standard scripts here
  includeScripts();

  //document.write("<script language=\"JavaScript\" src=\"utility.js\"      type=\"text/javascript\"></script>");
//  document.write("<script language=\"JavaScript\" src=\"calendar_lib.js\" type=\"text/javascript\"></script>");
//  document.write("<script language=\"JavaScript\" src=\"overlib_mini.js\" type=\"text/javascript\"></script>");
//  document.write("<script language=\"JavaScript\" src=\"rifcalc.js\"      type=\"text/javascript\"></script>");
//  document.write("<script language=\"JavaScript\" src=\"graph.js\"        type=\"text/javascript\"></script>");
//  document.write("<script language=\"JavaScript\" src=\"rifresult.js\"    type=\"text/javascript\"></script>");

  document.write("</head>");
}


//
// Include javascripts
//
function includeScripts()
{
  document.write("<script language=\"JavaScript\" src=\"utility.js\"      type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"calendar_lib.js\" type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"overlib_mini.js\" type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"rifcalc.js\"      type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"graph.js\"        type=\"text/javascript\"></script>");
  document.write("<script language=\"JavaScript\" src=\"rifresult.js\"    type=\"text/javascript\"></script>");
}	

// 
//
//--
// End html form
//
function endHtml()
{
   document.write("</html>");
}



function writeLinks(title, link)
{

 // alert("<a href= \"" + link + "\">" + title + "</a>");
  document.write("<a href=\"/" + link +"\">" + title +"</a>");
  
  
}

// ---
// These are HTML generation statements
// ---



//Print a new line for the specified number of times
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

//function beginBody()
//{
 //  document.write("<body>");
//}
//function endBody()
//{
//   document.write("</body>");
//}
//-- 
// End the table tag
//-- 
function endTable()
{
   document.write("</table>");
}

function beginRow()
{
  document.write("<tr>");
}

function show(str)
{
	document.write(str);
}

function endRow()
{
  document.write("</tr>");
}

function beginHeaderRowData()
{
  document.write("<td align='center' class='reportheader'>");
}

function endHeaderRowData()
{
  document.write("</td>");
}

function beginRowDataLeft()
{
  document.write("<td align='left' bgcolor='#ffffff'>");
}

function endRowData()
{
  document.write("</td>");
}


// --
// Format the HTML table containing results
// --
function beginTable(stitle)
{
   document.write("<table width='100%' cellpadding='1' cellspacing='1'>");
//   document.write("<td colspan='2' BGCOLOR='#E6E5E5'><DIV CLASS='headpad-gray'><strong>");
//   document.write(stitle);  
//   document.write("</strong></div></td>");
}



// -- Close a window
function closeIt()
{
  helpWindow.close();
}

// ---
// 
// ---
function makeParams(arry)
{
   var str = arry.join("+");   
   return str; 
}


function extractParams(str)
{
   var valArray = str.split("+");   
   return valArray;
}
//-- 
// Ensure that only numbers are accepted as entry
// 
function acceptNumbers(event)
{
	var message = "Only numeric entries accepted";

	var browser = detectBrowser();
	
	var keyval = 0;
	var keyCode1 = 0;
		
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;
  	 //alert(keyval);
	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
	 {
	     event.returnValue = true;
	     return true;
	 }
	 
	 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	 {
	     event.returnValue = false;
	     alert(message);
	 }	 
	 
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW)
	 {
	     return true;
	 }

	  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	  {
	     alert(message);
	     return false;
	  }
	  	  
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC)
			 {
			     return true;
			 }

			  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			  {
			     alert(message);
			     return false;
			  }
	 		
		}
		else //Windows
		{
		  	 keyval = event.keyCode;  	 

			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
			 {
			     event.returnValue = true;
			     return true;
			 }
	
			 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			 {
			     event.returnValue = false;
			     alert(message);
			 }
		}
	
	}else{
		keyval = event.keyCode;
	  	 //alert(keyval);
		 
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
		 {
		     event.returnValue = true;
		     return true;
		 }
		 
		 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		 {
		     event.returnValue = false;
		     alert(message);
		 }	
	}
	
	return true;

}
//accept dot and decimal
function acceptMoneyAmount2016(event)
{
	var message = "Only numeric entries accepted";
	hideValidationError();
	var browser = detectBrowser();

	var keyval = 0;
	var keyCode1 = 0;
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;

	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
	 {
	     event.returnValue = true;
	     hideValidationError();
	     return true;
	 }
	 
	 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	 {
		 $('#rifFormNumberValidationError').show();
		 return false;

	 }	 
	 
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW||keyval == KEY_DOLLAR)
	 {
		 hideValidationError();
	     return true;
	 }

	  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	  {
		  $('#rifFormNumberValidationError').show();
	     return false;
	  }
	  	  
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC||keyval == KEY_DOLLAR)
			 {
	 			hideValidationError();
			     return true;
			 }

			  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			  {
				 $('#rifFormNumberValidationError').show();
			     return false;
			  }

		}
		else //Windows
		{
		  	 keyval = event.keyCode;  	 
		  //	console.log(keyval)
			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
			 {
				 event.returnValue = true;
			     hideValidationError();
			     return true;
			 }
	
			 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			 {
				 $('#rifFormNumberValidationError').show();
				 event.returnValue = false;
			    
			 }

		}
	
	}else{
		
		keyval = event.keyCode;

		 
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }
		 
		 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		 {
			 $('#rifFormNumberValidationError').show();
			 return false;

		 }	
	}
	
	return true;

}

//don't accept dot and decimal
function acceptMoneyAmountNoDecimal2016(event)
{
	var message = "Only numeric entries accepted";
	hideValidationError();
	var browser = detectBrowser();
	var keyval = 0;
	var keyCode1 = 0;
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;

	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
	 {
	     event.returnValue = true;
	     hideValidationError();
	     return true;
	 }
	 
	 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH)||(keyval == KEY_DOT))
	 {
		 $('#rifFormNumberValidationError').show();
		 return false;

	 }	 
	 
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW||keyval == KEY_DOLLAR)
	 {
		 hideValidationError();
	     return true;
	 }

	  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH)||(keyval == KEY_DOT))
	  {
		  $('#rifFormNumberValidationError').show();
	     return false;
	  }
	  	  
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC||keyval == KEY_DOLLAR)
			 {
	 			hideValidationError();
			     return true;
			 }

			  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH)||(keyval == KEY_DOT))
			  {
				 $('#rifFormNumberValidationError').show();
			     return false;
			  }

		}
		else //Windows
		{
		  	 keyval = event.keyCode;  	 
		  //	console.log(keyval)
			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
			 {
				 event.returnValue = true;
			     hideValidationError();
			     return true;
			 }
	
			 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH)||(keyval == KEY_DOT))
			 {
				 $('#rifFormNumberValidationError').show();
				 event.returnValue = false;
			    
			 }

		}
	
	}else{
		
		keyval = event.keyCode;

		 
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }
		 
		 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH)||(keyval == KEY_DOT))
		 {
			 $('#rifFormNumberValidationError').show();
			 return false;

		 }	
	}
	
	return true;

}
function acceptPercentage2016(event)
{
	var message = "Only numeric entries accepted";
	hideValidationError();
	var browser = detectBrowser();
	var keyval = 0;
	var keyCode1 = 0;
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;

	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_PERCENTAGE)
	 {
	     event.returnValue = true;
	     hideValidationError();
	     return true;
	 }
	 
	 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	 {
		 $('#rifFormNumberValidationError').show();
		 return false;

	 }	 
	 
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW||keyval == KEY_PERCENTAGE)
	 {
		 hideValidationError();
	     return true;
	 }

	  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	  {
		  $('#rifFormNumberValidationError').show();
	     return false;
	  }
	  	  
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC||keyval == KEY_PERCENTAGE)
			 {
	 			hideValidationError();
			     return true;
			 }

			  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			  {
				 $('#rifFormNumberValidationError').show();
			     return false;
			  }

		}
		else //Windows
		{
		  	 keyval = event.keyCode;  	 

			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_PERCENTAGE)
			 {
				 event.returnValue = true;
			     hideValidationError();
			     return true;
			 }
	
			 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			 {
				 $('#rifFormNumberValidationError').show();
				 event.returnValue = false;
			    
			 }

		}
	
	}else{
		keyval = event.keyCode;

		 
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_PERCENTAGE)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }
		 
		 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		 {
			 $('#rifFormNumberValidationError').show();
			 return false;

		 }	
	}
	
	return true;

}
function acceptNumbers2015(event)
{
	var message = "Only numeric entries accepted";
	hideValidationError();
	var browser = detectBrowser();
	console.log(browser);
	var keyval = 0;
	var keyCode1 = 0;
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;

	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
	 {
	     event.returnValue = true;
	     hideValidationError();
	     return true;
	 }
	 
	 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	 {
		 $('#rifFormNumberValidationError').show();
		 return false;

	 }	 
	 
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW||keyval == KEY_DOLLAR)
	 {
		 hideValidationError();
	     return true;
	 }

	  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
	  {
		  $('#rifFormNumberValidationError').show();
	     return false;
	  }
	  	  
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC||keyval == KEY_DOLLAR)
			 {
	 			hideValidationError();
			     return true;
			 }

			  if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			  {
				 $('#rifFormNumberValidationError').show();
			     return false;
			  }

		}
		else //Windows
		{
		  	 keyval = event.keyCode;  	 

			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
			 {
				 event.returnValue = true;
			     hideValidationError();
			     return true;
			 }
	
			 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			 {
				 $('#rifFormNumberValidationError').show();
				 event.returnValue = false;
			    
			 }

		}
	
	}else{
		
		keyval = event.keyCode;

		 
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED||keyval == KEY_DOLLAR)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }
		 
		 if((keyval <= KEY_COMMA || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		 {
			 $('#rifFormNumberValidationError').show();
			 return false;

		 }	 
	}
	
	return true;

}


//--
//Ensure that entry is a valid date
//
function checkValidDate(myForm, str)
{
  
     var itemdate = stringToDate(str);
     if ( itemdate == false )
     {
         myForm.txtBirthDate.focus();
         return false;
     }
     else
     {
        return true;
     }
}

function checkValidIssueDate2015(myForm, str)
{
  
    if(myForm.txtIssueDate.value==""||myForm.txtIssueDate.value==null){
    	myForm.txtIssueDate.focus();
    	return false;
    }else{ 
		var itemdate = stringToDate2015(str);
	     if ( itemdate == false )
	     {
	         myForm.txtIssueDate.focus();
	         return false;
	     }
	     else
	     {
	        return true;
	     }
    	}
}

function checkValidPaymentDate2015(myForm, str)
{
  
    if(myForm.firstPayDate.value==""|| myForm.firstPayDate.value==null){
    	myForm.firstPayDate.focus();
    	return false;
    }else{
		var itemdateFirstPaymentYear = stringToDate2015(str);
	     if ( itemdateFirstPaymentYear == false )
	     {
	         myForm.firstPayDate.focus();
	         return false;
	     }
	     else
	     {
	    	 return true;
	     }
    }
}
function validatePaymentDate2015(myForm,str){
	
		var error;
	    if(myForm.firstPayDate.value==""|| myForm.firstPayDate.value==null){
	    	myForm.firstPayDate.focus();
	    	return false;
	    }else{
			var itemdateFirstPaymentYear = stringToDate2015(str);
		     if ( itemdateFirstPaymentYear == false )
		     {
		         myForm.firstPayDate.focus();
		         return false;
		     }
		     else
		     {
		    	//check  the issue date
			     if(myForm.txtIssueDate.value==""||myForm.txtIssueDate.value==null){
			     	myForm.txtIssueDate.focus();
			     	return false;
			     }else{ 
			 		var itemdateIssueDate = stringToDate2015(myForm.txtIssueDate.value);
			 	     if ( itemdateIssueDate == false )
			 	     {
			 	         myForm.txtIssueDate.focus();
			 	         return false;
			 	     }
			 	     else
			 	     {
			 	    	 var yearOfFirstPaymentYear=itemdateFirstPaymentYear.getFullYear();
			 	    	 var yearOfIssueDate=itemdateIssueDate.getFullYear();
			 	    	 if(itemdateIssueDate>itemdateFirstPaymentYear){
			 	    		var endDay00="12/31/";
			 	    		console.log("passed when issue year < first payment year"+yearOfIssueDate);
			 	    		error=$('#rifFirstPaymentDateAndAfterIssueDateValidationErrorMessage').html();
			 	    		error=error.replace("FirstPaymentDate",endDay00+yearOfIssueDate);
			    			 $('#rifFirstPaymentDateAndFrequencyValidationError').html(error);
			    			 $('#rifFirstPaymentDateAndFrequencyValidationError').show();
			    			 myForm.firstPayDate.focus();
			    			 return false;
			 	    	}
			 	    	 //check the payment frequency
					     $("#paymentFreqOptionsID").val();
					    
					     if(yearOfFirstPaymentYear==yearOfIssueDate){
					    	 var endDay0="12/31/";
					    	 console.log("passed when issue year = first payment year"+yearOfIssueDate);
					    	 error=$('#rifFirstPaymentDateAndAfterIssueDateValidationErrorMessage').html();
				    		 error=error.replace("FirstPaymentDate",endDay0+yearOfIssueDate);
				    		 $('#rifFirstPaymentDateAndFrequencyValidationError').html(error);
				    		 $('#rifFirstPaymentDateAndFrequencyValidationError').show();
				    		 myForm.firstPayDate.focus();
				    		 return false;
					     }else if(prepareNumber(yearOfFirstPaymentYear)==(prepareNumber(yearOfIssueDate)+1)){
					    	 console.log("payment frequency is "+$("#paymentFreqOptionsID").val()+" "+gPeriods[1]);
					    	 if($("#paymentFreqOptionsID").val()==gPeriods[0]){
					    		 //annual
					    		 console.log("pass payment frequency is annual");
					    		 return true;
					    	 }/*else if($("#paymentFreqOptionsID").val()==gPeriods[1]){
					    		 //semi-annual
					    		 var endDay="06/30/";
					    		 var endDayBase="07/01/";
					    		 var semiYearDate=stringToDate2015(endDay+yearOfFirstPaymentYear);
					    		 if(itemdateFirstPaymentYear>semiYearDate){
					    			// $("#datepicker_firstPaydate").datepicker('setDate', endDay+yearOfFirstPaymentYear);
					    			 console.log("year first payment date input error happen when payment frequency is semi-annual");
					    			 error=$('#rifFirstPaymentDateAndFrequencyValidationErrorMessage').html();
					    			 error=error.replace("FirstPaymentDate",endDayBase+yearOfFirstPaymentYear);
					    			 $('#rifFirstPaymentDateAndFrequencyValidationError').html(error);
					    			 $('#rifFirstPaymentDateAndFrequencyValidationError').show();
					    			 myForm.firstPayDate.focus();
					    			 return false;
					    		 }else{
					    			 console.log("passed when payment frequency is after 06/30");
					    			 
					    			 return true;
					    		 }
					    	 }else if($("#paymentFreqOptionsID").val()==gPeriods[2]){
					    		 //quartely
					    		 var endDay1="03/31/";
					    		 var endDay1Base="04/01/";
					    		 var quartYearDate=stringToDate2015(endDay1+yearOfFirstPaymentYear);
					    		 if(itemdateFirstPaymentYear>quartYearDate){
					    			 //$("#datepicker_firstPaydate").datepicker('setDate', endDay1+yearOfFirstPaymentYear);
					    			 console.log("year first payment date input error happen when payment frequency is quarterly");
					    			 error=$('#rifFirstPaymentDateAndFrequencyValidationErrorMessage').html();
					    			 error=error.replace("FirstPaymentDate",endDay1Base+yearOfFirstPaymentYear);
					    			 $('#rifFirstPaymentDateAndFrequencyValidationError').html(error);
					    			 $('#rifFirstPaymentDateAndFrequencyValidationError').show();
					    			 myForm.firstPayDate.focus();
					    			 return false;
					    		 }else{
					    			 console.log("passed when payment frequency is after 03/31");
					    			 return true;
					    		 }
					    	 }*/else if($("#paymentFreqOptionsID").val()==gPeriods[1]){
					    		 //monthly
					    		 var endDay2="01/31/";
					    		 var endDay2Base="02/01/";
					    		 var monthYearDate=stringToDate2015(endDay2+yearOfFirstPaymentYear);
					    		 if(itemdateFirstPaymentYear>monthYearDate){
					    			 //$("#datepicker_firstPaydate").datepicker('setDate', endDay2+yearOfFirstPaymentYear);
					    			 console.log("year first payment date input error happen when payment frequency is monthly  ");
					    			 error=$('#rifFirstPaymentDateAndFrequencyValidationErrorMessage').html();
					    			 error=error.replace("FirstPaymentDate",endDay2Base+yearOfFirstPaymentYear);
					    			 $('#rifFirstPaymentDateAndFrequencyValidationError').html(error);
					    			 $('#rifFirstPaymentDateAndFrequencyValidationError').show();
					    			 myForm.firstPayDate.focus();
					    			 return false;
					    		 }else{
					    			 console.log("passed when payment frequency is after 01/31");
					    			 return true;
					    		 }
					    	 }else{
					    		 console.log("passed when  payment frequency for any other frequency");
					    		 return true;
					    	 }
					    	 
					     }else{
					    	 console.log("can't be any date two year later than issue date");
					    	 var endDay3="01/01/";
					    	 //$("#datepicker_firstPaydate").datepicker('setDate', "");
					    	 error=$('#rifFirstPaymentDateAndFrequencyValidationErrorMessage').html();
					    	 var correctFirstPaymentYear=prepareNumber(yearOfIssueDate)+2;
					    	 //alert(correctFirstPaymentYear);
			    			 error=error.replace("FirstPaymentDate",endDay3+correctFirstPaymentYear);
			    			 $('#rifFirstPaymentDateAndFrequencyValidationError').html(error);
					    	 $('#rifFirstPaymentDateAndFrequencyValidationError').show();
					    	 myForm.firstPayDate.focus();
					    	 return false;
					     }
			 	     }
			     }
			     
			     
		     }
	}
}

function checkValidBirthDate2015(myForm, str)
{
	if(myForm.txtBirthDate.value==""||myForm.txtBirthDate.value==null){
		 myForm.txtBirthDate.focus();
		 return false;
	 }else{

		 var itemdate = stringToDate2015(str);
	     if ( itemdate == false )
	     {
	    	 myForm.txtBirthDate.focus();
	         return false;
	     }
	     else
	     {
	
	    	 return true;
	     }
	 }
}
function checkValidSpouseBirthDate2015(myForm, str)
{
    if(myForm.txtSpouseBirthDate.value==""||myForm.txtSpouseBirthDate.value==null){
    	myForm.txtSpouseBirthDate.focus();
    	return false;
    }else{
    	var itemdate = stringToDate2015(str);
        if ( itemdate == false )
        {
       	 myForm.txtSpouseBirthDate.focus();
            return false;
        }
        else
        {
           return true;
        }
    }
	
     
}
//-- 
//Ensure that only valid dates are accepted as entry
//-- 
// 
function acceptDates(event)
{
	var message = "Only numeric entries accepted";
	
	var browser = detectBrowser();
	
	var keyval = 0;
	var keyCode1 = 0;
		
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;
  	 //alert(keyval);

	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
	 {
	     event.returnValue = true;
	     return true;
	 }

	 if(event.keyCode < KEY_MINUS || event.keyCode > KEY_NINE  )
	 {
	     event.returnValue = false;
	     alert(message);
	 }
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW)
	 {
	     return true;
	 }

	  if(keyval < KEY_MINUS || keyval > KEY_NINE  )
	  {
	     alert(message);
	     return false;
	  }
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC)
			 {
			     return true;
			 }

			  if(keyval < KEY_MINUS || keyval > KEY_NINE  )
			  {
			     alert(message);
			     return false;
			  }
	 		
		}
		else //Windows chrome
		{
		  	 keyval = event.keyCode;  	 

			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
			 {
			     event.returnValue = true;
			     return true;
			 }
	
			 if(event.keyCode < KEY_MINUS || event.keyCode > KEY_NINE  )
			 {
			     event.returnValue = false;
			     alert(message);
			 }
		}
		
	}else{
		keyval = event.keyCode;
	  	 //alert(keyval);

		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
		 {
		     event.returnValue = true;
		     return true;
		 }

		 if(event.keyCode < KEY_MINUS || event.keyCode > KEY_NINE  )
		 {
		     event.returnValue = false;
		     alert(message);
		 }
	}
	return true;
}

function acceptDates2015(event)
{
	var message = "Only numeric entries accepted";
	hideValidationError();
	var browser = detectBrowser();
	
	var keyval = 0;
	var keyCode1 = 0;
		
	if ( browser == "Explorer")
	{
  	 keyval = event.keyCode;
  	 //alert(keyval);

	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
	 {
	     event.returnValue = true;
	     hideValidationError();
	     return true;
	 }

	 if(event.keyCode < KEY_MINUS || event.keyCode > KEY_NINE  )
	 {
		 $('#rifFormNumberValidationError').show();
		 event.returnValue = false;

	 }
	}
	else if ( browser == "Firefox" )
	{
	 keyval = event.which;
	 keyCode1 = event.keyCode;	 
 	 //alert ("Key Pressed: " + keyval);
 	 	 
	 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
	 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
	 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW)
	 {
		 hideValidationError();
		 return true;
	 }

	  if(keyval < KEY_MINUS || keyval > KEY_NINE  )
	  {
		  hideValidationError();
	     return false;
	  }
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC)
			 {
	 			hideValidationError(); 
	 			return true;
			 }

			  if(keyval < KEY_MINUS || keyval > KEY_NINE  )
			  {
				  $('#rifFormNumberValidationError').show();
			     return false;
			  }
	 		
		}
		else //Windows chrome
		{
		  	 keyval = event.keyCode;  	 

			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
			 {
			     event.returnValue = true;
			     hideValidationError();
			     return true;
			 }
	
			 if(event.keyCode < KEY_MINUS || event.keyCode > KEY_NINE  )
			 {
			     event.returnValue = false;
			     $('#rifFormNumberValidationError').show();
			 }
		}
		
	}else{
		keyval = event.keyCode;
	  	 //alert(keyval);

		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }

		 if(event.keyCode < KEY_MINUS || event.keyCode > KEY_NINE  )
		 {
			 $('#rifFormNumberValidationError').show();
			 event.returnValue = false;

		 }
	}
	return true;
}

//--
//Converts a number to percentage
//--
function toPercent(str)
{
   var pc = new Number(str) * 100.00;
   return ("" + pc + "%");
}

//--
//Format date values and convert it to day, month, full year format
//--
function formatDate(dateval)
{
   var d = dateval;
   var str = "";
   
   if (typeof(d) == "string" ) 
   {
       str = formatAsString(dateval);
   }
   else if (typeof(d) == "object")
   {
       str = formatAsDate(dateval)
   }
   else
   {
       alert("Cannot understand date format!");
       return false;
   }
   return str;
}

//
// The date input is a string that is formatted into the expected type
//
function formatAsString(datestr)
{
   //Sample format date -- format Thu Sep 8 00:00:00 EDT 1960   
   var dateval = datestr.split(" ");

   var month = dateval[1]
   var date  = dateval[2];
   var year  = dateval[5];
   
   var dstr = date + " . " + month + " . " + year;
   return dstr;

}

// --
// The date input is a date object. It is formatted into a string
//
function formatAsDate(dateobj)
{
   var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
   var strdate = dateobj.getDate() +  " . " + monthname[dateobj.getMonth()] + " . " + dateobj.getFullYear();
   return strdate;
}


function hideValidationError(){
	$('#calculationError').hide();
	$('#rifFormNumberValidationError').hide();
	$('#rifFormDateValidationError').hide();
	$('#rifNumberValidationError').hide();
	$('#rifRORValueValidationError').hide();
	$('#rifAgeValidationError').hide();
	$('#rifCurrentPlanValueValidationError').hide();
	$('#rifToAgeValidationError').hide();
	$('#rifRIFIssueDateValidationError').hide();
	$('#rifRORValidationError').hide();
	$('#rifWithdrawalAmountValidationError').hide();
	$('#rifBirthDayValidationError').hide();
	$('#rifSpouseBirthDayValidationError').hide();
	$('#rifGreaterThanZeroValidationError').hide();
	$('#rifDeductWithholdTaxValidationError').hide();
	$('#rifQuebecResidentValidationError').hide();	
	$('#rifAccountTypeValidationError').hide();
	$('#rifPaymentTypeValidationError').hide();
	$('#tfsaCurrentAgeValidationError').hide();
	$('#tfsaCurrentAgeGreaterThanZeroValidationError').hide();
	$('#tfsaRetireAgeValidationError').hide();
	$('#tfsaRetireAgeGreaterThanZeroValidationError').hide();
	$('#rifGreaterThan50ValidationError').hide();
	$('#rifGreaterThan55ValidationError').hide();
	
	$('#rifOpenValueGreaterThanZeroValidationError').hide();
	$('#rifRORGreaterThanZeroValidationError').hide();
	$('#rifPayperGreaterThanZeroValidationError').hide();
	$('#rifWithdrawalPerGreaterThanZeroValidationError').hide();
	
	$('#rifRORNumberValidationError').hide();
	$('#rifOpenValueNumberValidationError').hide();
	$('#rifPayperNumberValidationError').hide();
	$('#rifWithdrawalperNumberValidationError').hide();
	$('#rifBirthYearNumberValidationError').hide();
	$('#rifPayperAmountValidationError').hide();
	
	
}
function yearValidation(year,event) {

	  var text = /^[0-9]+$/;
	  if(ev.type=="blur" || year.length==4 && ev.keyCode!=8 && ev.keyCode!=46) {
	    if (year != 0) {
	        if ((year != "") && (!text.test(year))) {

	            alert("Please Enter Numeric Values Only");
	            return false;
	        }

	        if (year.length != 4) {
	            alert("Year is not proper. Please check");
	            return false;
	        }
	        var current_year=new Date().getFullYear();
	        if((year < 1920) || (year > current_year))
	            {
	            alert("Year should be in range 1920 to current year");
	            return false;
	            }
	        return true;
	    } }
	}
function acceptOnlyNumbers(event)
{
	var message = "Only numeric entries accepted";
	hideValidationError();	
	var browser = detectBrowser();
	var keyval = 0;
	var keyCode1 = 0;
	if ( browser == "Explorer")
	{
		
	  	 keyval = event.keyCode;

	
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }
		 
		 if((keyval <= KEY_DOT || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		 {

			 $('#rifFormNumberValidationError').show();
			 return false;
	
		 }	 
	 
	}
	else if ( browser == "Firefox" )
	{
		 keyval = event.which;
		 keyCode1 = event.keyCode;	 
	 	 //alert ("Key Pressed: " + keyval);
	 	 	 
		 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED || keyval == KEY_BACKSPACE 
		 || keyCode1 == KEY_TAB || keyCode1 == KEY_DELETE 
		 || keyCode1 == KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW)
		 {
			 hideValidationError();
		     return true;
		 }
	
		  if((keyval <= KEY_DOT || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		  {
			  $('#rifFormNumberValidationError').show();
		     return false;
		  }
	  	  
	}
	else if (browser == "Safari")
	{
		var browserType = navigator.userAgent.toLowerCase();
		if (browserType.indexOf("Mac") != -1)
		{
			keyval = event.which;
	 		keyCode1 = event.keyCode;
	 		
	 		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED  
			 || keyval == KEY_TAB || keyCode1 == KEY_DELETE_MAC 
			 || keyCode1 == KEY_LEFT_ARROW_MAC || keyCode1 == KEY_RIGHT_ARROW_MAC)
			 {
	 			hideValidationError();
			     return true;
			 }

			  if((keyval <= KEY_DOT || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			  {
				 $('#rifFormNumberValidationError').show();
			     return false;
			  }

		}
		else //Windows
		{
		  	 keyval = event.keyCode;  	 
			 if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
			 {
				 event.returnValue = true;
			     hideValidationError();
			     return true;
			 }
	
			 if((keyval <= KEY_DOT || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
			 {
				 $('#rifFormNumberValidationError').show();
				 event.returnValue = false;
			    
			 }

		}
	
	}else{
		keyval = event.keyCode;  	 
		if ( keyval == KEY_RETURN || keyval == KEY_LINEFEED)
		 {
		     event.returnValue = true;
		     hideValidationError();
		     return true;
		 }
		 
		if((keyval <= KEY_DOT || keyval > KEY_NINE ) || (keyval == KEY_FRONT_SLASH))
		 {

			 $('#rifFormNumberValidationError').show();
			 return false;
	
		 }	
		
	}
	
	return true;

}

function checkBirthYear(myForm)
{
	var str = myForm.txtBirthDate.value;
    hideValidationError();
    if ( str == null || str =="")
	{ 	 	    
		 $('#rifBirthDayValidationError').show();  

		 if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
		 }else{
			 myForm.txtBirthDate.focus();
		 } 
		 return false;
	}else{
		//remove the leading zero;
		str=str.replace(/^0+/, '');
		var tempStr = str;
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=tempStr;
		}
		if(isNaN(tempStr2.valueOf())){
			$("#rifBirthYearNumberValidationError").show();

			if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
			 }else{
				 myForm.txtBirthDate.focus();
			 } 
			return false;
		}else{
			var minval = parseFloat("1000.0");
			var val=prepareNumber(tempStr2);
			if ( val > minval  )
		    {
				var maxAge = 10000;
				if ( val >= maxAge )
			    {
			    	$('#rifBirthDayValidationError').show();

			    	if (!!document.documentMode) {	
						//ie has problem regarding focus can not kept. cursor color is invisiable			
					 }else{
						 myForm.txtBirthDate.focus();
					 } 
			        return false;
			    }else{
			    	
			    		    	
			    	var todayDate=new Date()
			    	var todayYear=todayDate.getFullYear(); 
			    	var x=parseInt(todayYear)-parseInt(val);
			    	var ptype = parseInt(myForm.planType.value);
		    		console.log("ptype "+ptype);
			    	if(ptype==2){
		    			//for LIF
			    		$('#accountTypeOptionsID').multiselect('enable');
			    		var pj=parseInt(myForm.pensionJurisdiction.value);
		    			console.log("pj "+pj);
		    			if((pj==4)||(pj==5)||(pj==6)||(pj==7)){
		    				
		    				if(x<55){
					    		$('#rifGreaterThan55ValidationError').show();
				
						    	if (!!document.documentMode) {	
									//ie has problem regarding focus can not kept. cursor color is invisiable			
								 }else{
									 myForm.txtBirthDate.focus();
								 } 
						        return false;
					    	}else{
					    		myForm.txtBirthDate.value=val;
						    	return true;
					    	}
		    			}else if((pj==2)||(pj==3)||(pj==8)||(pj==9)||(pj==0)||(pj==1)){
		    				if(x<50){
					    		$('#rifGreaterThan50ValidationError').show();
				
						    	if (!!document.documentMode) {	
									//ie has problem regarding focus can not kept. cursor color is invisiable			
								 }else{
									 myForm.txtBirthDate.focus();
								 } 
						        return false;
					    	}if(x==50){
					    		$("#accountTypeOptionsID option:eq(1)").attr('selected', 'selected');
					    		$("#accountTypeID").val("2");  
					    		$("#accountTypeOptionsID").multiselect('refresh');
					    		$('#accountTypeOptionsID').multiselect('disable');
					    		return true;
					    	}else{
					    		myForm.txtBirthDate.value=val;
						    	return true;
					    	}
		    			}else{
		    				myForm.txtBirthDate.value=val;
					    	return true;
		    			}
		    			
		    		}else{
		    			//for RRIF
		    			$('#accountTypeOptionsID').multiselect('enable');
		    			if(x<50){
				    		$('#rifGreaterThan50ValidationError').show();
			
					    	if (!!document.documentMode) {	
								//ie has problem regarding focus can not kept. cursor color is invisiable			
							 }else{
								 myForm.txtBirthDate.focus();
							 } 
					        return false;
				    	}if(x==50){
				    		$("#accountTypeOptionsID option:eq(1)").attr('selected', 'selected');
				    		$("#accountTypeID").val("2");  
				    		$("#accountTypeOptionsID").multiselect('refresh');
				    		$('#accountTypeOptionsID').multiselect('disable');
				    		return true;
				    	}else{
				    		myForm.txtBirthDate.value=val;
					    	return true;
				    	}
		    			
		    			
		    		}
			    	
			    	
			    	
			    	
			    }
		    }
		    else
		    {
		    	$('#rifBirthDayValidationError').show();
		    	console.log("4");
		    	return false;
		    }
		}
		 
	}
}



function checkCurrentAge(myForm)
{
	var str = myForm.txtCurrentAge.value;
    hideValidationError();
    if ( str == null || str =="")
	{ 	 	    
		 $('#tfsaCurrentAgeValidationError').show();  
		 
		 if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
		 }else{
			 myForm.txtCurrentAge.focus();
		 } 
		 return false;
	}else{
		//remove the leading zero;
		str=str.replace(/^0+/, '');
		var tempStr = str;
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=tempStr;
		}
		if(isNaN(tempStr2.valueOf())){
			$("#rifNumberValidationError").show();
			if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
			 }else{
				 myForm.txtCurrentAge.focus();
			 } 
			return false;
		}else{
			var minval = parseFloat("0.0");
			var val=prepareNumber(tempStr2);
			if ( val > minval  )
		    {
				var maxAge = 100;
				if ( val > maxAge )
			    {
			    	$('#tfsaCurrentAgeValidationError').show();
			    	if (!!document.documentMode) {	
						//ie has problem regarding focus can not kept. cursor color is invisiable			
					 }else{
						 myForm.txtCurrentAge.focus();
					 } 
			        return false;
			    }else{
			    	 myForm.txtCurrentAge.value=val;
			    	 
			    	 var currentAge=prepareNumber(myForm.txtCurrentAge.value);
			    	 var retireAge=prepareNumber(myForm.txtRetireAge.value);
			    	 var yearsToRetirement=retireAge-currentAge;
			    	 if(yearsToRetirement>0){
			    		 myForm.txtNumYearToRetirement.value=yearsToRetirement;
			    		 return true;
			    	 }else{
			    		 console.log("retire age should be higher than current age");
			    		 myForm.txtNumYearToRetirement.value=0;
			    		 return true;
			    	 }
			    }
		    }
		    else
		    {
		    	$('#tfsaCurrentAgeGreaterThanZeroValidationError').show();
		    	/*if (!!document.documentMode) {	
					//ie has problem regarding focus can not kept. cursor color is invisiable			
				 }else{
					 myForm.txtCurrentAge.focus();
				 }*/ 
		    	return false;
		    }
		}
		 
	}
}


function checkRetireAge(myForm)
{
    var str = myForm.txtRetireAge.value;
    hideValidationError();
    if ( str == null || str =="")
	{ 	 	    
		 $('#tfsaRetireAgeValidationError').show();  
		 
		 if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
		 }else{
			 myForm.txtRetireAge.focus();
		 } 
		 return false;
	}else{
		//remove the leading zero;
		str=str.replace(/^0+/, '');
		var tempStr = str;
		if ( tempStr.lastIndexOf(",") != - 1 )
		{
		   tempArray2  = tempStr.split(",");
		   tempStr2 = tempArray2.join("");
		}else{
			tempStr2=tempStr;
		}
		if(isNaN(tempStr2.valueOf())){
			$("#rifNumberValidationError").show();
			if (!!document.documentMode) {	
				//ie has problem regarding focus can not kept. cursor color is invisiable			
			 }else{
				 myForm.txtRetireAge.focus();
			 } 
			return false;
		}else{
			var minval = parseFloat("0.0");
			var val=prepareNumber(tempStr2);
			if ( val > minval  )
		    {
				var maxAge = 100;
			    if ( val > maxAge )
			    {
			    	$('#tfsaRetireAgeValidationError').show();
			    	if (!!document.documentMode) {	
						//ie has problem regarding focus can not kept. cursor color is invisiable			
					 }else{
						 myForm.txtRetireAge.focus();
					 } 
			        return false;
			    }else{
			    	 myForm.txtRetireAge.value=val;
			    	 var currentAge=prepareNumber(myForm.txtCurrentAge.value);
			    	 var retireAge=prepareNumber(myForm.txtRetireAge.value);
			    	 var yearsToRetirement=retireAge-currentAge;
			    	 if(yearsToRetirement>0){
			    		 myForm.txtNumYearToRetirement.value=yearsToRetirement;
			    		 return true;
			    	 }else{
			    		 console.log("retire age should be higher than current age");
			    		 myForm.txtNumYearToRetirement.value=0;
			    		 return true;
			    	 }
			    }
		    }
		    else
		    {
		    	$('#tfsaRetireAgeGreaterThanZeroValidationError').show();
		    	/*if (!!document.documentMode) {	
					//ie has problem regarding focus can not kept. cursor color is invisiable			
				}else{
					 myForm.txtRetireAge.focus();
				} */
		    	return false;
		    }
		}
		 
	}
}
function checkStartAgeEndAge(myForm){
	var startAge=prepareNumber(myForm.txtCurrentAge.value);
	var endAge=prepareNumber(myForm.txtRetireAge.value);
	var diff=endAge-startAge;
	
	if(diff > 0){
		
		return true;
	}
	else{
		myForm.txtRetireAge.focus();
		return false;
	}
}