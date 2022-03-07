

//Define some global variables
var RRSP_MAP_SIZE = 7;var RRSP_KEY_DOLLAR      = 36;var RRSP_KEY_PERCENTAGE  = 37;var RRSP_KEY_SPACE       = 32;var RRSP_KEY_COMMA       = 44;var RRSP_KEY_MINUS       = 45;var RRSP_KEY_DOT         = 46;var RRSP_KEY_FRONT_SLASH = 47;var RRSP_KEY_ZERO        = 48;var RRSP_KEY_ONE         = 49;var RRSP_KEY_NINE        = 57;var RRSP_KEY_RETURN      = 13;var RRSP_KEY_LINEFEED    = 10;var RRSP_KEY_TAB			= 9;var RRSP_KEY_BACKSPACE	= 8;var RRSP_KEY_DELETE		= 46;var RRSP_KEY_DELETE_MAC	= 8;var RRSP_KEY_LEFT_ARROW	= 37;var RRSP_KEY_RIGHT_ARROW	= 39;var RRSP_KEY_LEFT_ARROW_MAC	= 63234;var RRSP_KEY_RIGHT_ARROW_MAC	= 63235;
var debugOn = false;
// 
var gRRSPPeriods = new Array(RRSP_MAP_SIZE);
var gRRSPPeriodValue = new Array(RRSP_MAP_SIZE);
var helpWindow;

//TODO. Will this call the method on startup??
initRRSPMap();

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
      alert("Lentrée doit être un chiffre.");
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
	         	 // alert("Value must be equal to or less than: " + maxval);
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
     if ( validateNumber(str,0,80) == true )
     {
        return true;
     }
     else
     {
        alert("Le nombre dannées avant la retraite ne peut pas être plus que 80.");
	    myForm.yearsToRetire.value = "80.0";
	    myForm.yearsToRetire.focus();
	    return false;
     }
 }
 
 //-- Check the number of years funds should last for
 function checkYearsFundToLast(myForm)
 {
     var str = myForm.txtYearsFundToLast.value;
     if ( validateNumber(str, 0, 50) == true )
     {
        return true;
     }
     else
     {
        alert("Les fonds ne peuvent pas durer plus de 50 ans.");
	    myForm.txtYearsFundToLast.value = "50.0";
	    myForm.txtYearsFundToLast.focus();
	    return false;
     }
 
 }
///
// Ensure that the inflation rate cannot be more than 50%
//
//
function checkInflationRate(myForm)
{
     var str = myForm.inflationRate.value;
     if ( validateNumber(str, 0, 50) == true )
     {
         return true;
     }
     else
     {
	    alert("Le taux dinflation ne peut pas être supérieur à 50%.");
	    myForm.inflationRate.value = "50.0";
	    myForm.inflationRate.focus();
	    return false;
     }
 }
          
// -- This method initializes all the periods used within the calculators
function initRRSPMap()
{
	//TODO - Ensure that these arrays never passed the RRSP_MAP_SIZE
	gRRSPPeriods[0] = "Annuelle";       gRRSPPeriodValue[0] = 1.0;	gRRSPPeriods[1] = "Semestrielle";   gRRSPPeriodValue[1] = 2.0;	gRRSPPeriods[2] = "Trimestrielle";  gRRSPPeriodValue[2] = 4.0;	gRRSPPeriods[3] = "Mensuelle";      gRRSPPeriodValue[3] = 12.0;	gRRSPPeriods[4] = "Bimestrielle"; gRRSPPeriodValue[4] = 24.0;	gRRSPPeriods[5] = "Bimensuelle";    gRRSPPeriodValue[5] = 26.0;    gRRSPPeriods[6] = "Hebdomadaire";   gRRSPPeriodValue[6] = 52.0;
}

//-- 
// Build a list of all contribution/income frequencies
//--function hideRRSPValidationError(){
	
	$('#rrspRetirementGoalValidationError').hide();
	$('#rrspCurrentSavingValidationError').hide();
	$('#rrspContributionAmountValidationError').hide();
	$('#rrspRORValidationError').hide();
	$('#rrspFormNumberValidationError').hide();
	$('#rrspNumberValidationError').hide();
	$('#rrspCurrentAgeValidationError').hide();
	$('#rrspRetireAgeValidationError').hide();
	$('#rrspGreaterThanZeroValidationError').hide();	
	$('#rrspRORValueValidationError').hide();	
	$('#rrspRetirementGoalGreaterThanZeroValidationError').hide();
	$('#rrspCurrentAgeGreaterThanZeroValidationError').hide();
	$('#rrspRetireAgeGreaterThanZeroValidationError').hide();
	
}
function buildRRSPPeriodList()
{
  var descriptions ="";
  for ( i = 0; i < RRSP_MAP_SIZE; i++)
  { 
     descriptions =  descriptions + "<option>" + gRRSPPeriods[i] + "<br>";
  }
  return descriptions;
}

// -- Parse dates

function makeRRSPContributionChoice(myForm){   initRRSPMap();   var myIndex  = myForm.contributionFreqOptions.selectedIndex;   var selValue = gRRSPPeriodValue[myIndex];   myForm.contributionFreq.value = selValue;   hideRRSPValidationError();   console.log("contribution frequency selection is "+selValue);   return selValue;  }function checkRRSPCurrentAge(myForm){    var str = myForm.txtCurrentAge.value;    hideRRSPValidationError();    if ( str == null || str =="")	{ 	 	    		 $('#rrspCurrentAgeValidationError').show();  				 if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable					 }else{			 myForm.txtCurrentAge.focus();		 } 		 return false;	}else{		//remove the leading zero;		str=str.replace(/^0+/, '');		var tempStr = str;		if ( tempStr.lastIndexOf(",") != - 1 )		{		   tempArray2  = tempStr.split(",");		   tempStr2 = tempArray2.join("");		}else{			tempStr2=tempStr;		}		if(isNaN(tempStr2.valueOf())){			$("#rrspNumberValidationError").show();			myForm.txtCurrentAge.focus();						return false;		}else{			var minval = parseFloat("0.0");			var val=prepareNumber(tempStr2);			if ( val > minval  )		    {						var maxAge = 100;			    if ( val > maxAge )			    {			    	$('#rrspCurrentAgeValidationError').show();			    	 if (!!document.documentMode) {								//ie has problem regarding focus can not kept. cursor color is invisiable								 }else{						 myForm.txtCurrentAge.focus();					 } 			        return false;			    }else{			    	 myForm.txtCurrentAge.value=val;			    	 var currentAge=prepareNumber(myForm.txtCurrentAge.value);			    	 var retireAge=prepareNumber(myForm.txtRetireAge.value);			    	 var yearsToRetirement=retireAge-currentAge;			    	 if(yearsToRetirement>0){			    		 myForm.txtNumYearToRetirement.value=yearsToRetirement;			    		 return true;			    	 }else{			    		 console.log("retire age should be higher than current age");			    		 myForm.txtNumYearToRetirement.value=0;			    		 return true;			    	 }			    }		    }		    else		    {		    	$('#rrspCurrentAgeGreaterThanZeroValidationError').show();		    	 /*if (!!document.documentMode) {							//ie has problem regarding focus can not kept. cursor color is invisiable							 }else{					 myForm.txtCurrentAge.focus();				 }*/ 		    	return false;		    }		}		 	}}function checkRRSPRetireAge(myForm){    var str = myForm.txtRetireAge.value;    hideRRSPValidationError();    if ( str == null || str =="")	{ 	 	    		 $('#rrspRetireAgeValidationError').show();  		 		 if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable					 }else{			 myForm.txtRetireAge.focus();		 } 		 return false;	}else{		//remove the leading zero;		str=str.replace(/^0+/, '');		var tempStr = str;		if ( tempStr.lastIndexOf(",") != - 1 )		{		   tempArray2  = tempStr.split(",");		   tempStr2 = tempArray2.join("");		}else{			tempStr2=tempStr;		}		if(isNaN(tempStr2.valueOf())){			$("#rrspNumberValidationError").show();			if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable						 }else{				 myForm.txtRetireAge.focus();			 } 			return false;		}else{			var minval = parseFloat("0.0");			var val=prepareNumber(tempStr2);			if ( val > minval  )		    {				var maxAge = 100;			    if ( val > maxAge )			    {			    	$('#rrspRetireAgeValidationError').show();			    	if (!!document.documentMode) {							//ie has problem regarding focus can not kept. cursor color is invisiable								 }else{						 myForm.txtRetireAge.focus();					 } 			        return false;			    }else{			    	myForm.txtRetireAge.value=val;			    	 var currentAge=prepareNumber(myForm.txtCurrentAge.value);			    	 var retireAge=prepareNumber(myForm.txtRetireAge.value);			    	 var yearsToRetirement=retireAge-currentAge;			    	 if(yearsToRetirement>0){			    		 myForm.txtNumYearToRetirement.value=yearsToRetirement;			    		 return true;			    	 }else{			    		 console.log("retire age should be higher than current age");			    		 myForm.txtNumYearToRetirement.value=0;			    		 return true;			    	 }			    }		    }		    else		    {		    	$('#rrspRetireAgeGreaterThanZeroValidationError').show();		    	/*if (!!document.documentMode) {						//ie has problem regarding focus can not kept. cursor color is invisiable							 }else{					 myForm.txtRetireAge.focus();				 } */		    	return false;		    }		}		 	}}function acceptFrenchNumbers2015(event){	var message = "Seules les entrées numériques sont acceptées";	var browser = detectBrowser();		var keyval = 0;	var keyCode1 = 0;			if ( browser == "Explorer")	{					keyval = event.keyCode;  	 //alert(keyval);	 	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)	 {	     event.returnValue = true;	     hideRRSPValidationError();	     return true;	 }	 	 if((keyval <= RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))	 {	     event.returnValue = false;	     $('#rrspFormNumberValidationError').show();	 }	 	 	}	else if ( browser == "Firefox" )	{		 keyval = event.which;	 keyCode1 = event.keyCode;	  	 //alert ("Key Pressed: " + keyval); 	 	 	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED || keyval == RRSP_KEY_BACKSPACE 	 || keyCode1 == RRSP_KEY_TAB || keyCode1 == RRSP_KEY_DELETE 	 || keyCode1 == RRSP_KEY_LEFT_ARROW || keyCode1 == RRSP_KEY_RIGHT_ARROW||keyval == RRSP_KEY_DOLLAR)	 {		 hideRRSPValidationError();		 return true;	 }	  if((keyval <= RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))	  {		  $('#rrspFormNumberValidationError').show();	     return false;	  }	  	  	}	else if (browser == "Safari")	{				var browserType = navigator.userAgent.toLowerCase();		if (browserType.indexOf("Mac") != -1)		{					keyval = event.which;	 		keyCode1 = event.keyCode;	 			 		if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED  			 || keyval == RRSP_KEY_TAB || keyCode1 == RRSP_KEY_DELETE_MAC 			 || keyCode1 == RRSP_KEY_LEFT_ARROW_MAC || keyCode1 == RRSP_KEY_RIGHT_ARROW_MAC||keyval == RRSP_KEY_DOLLAR)			 {	 			hideRRSPValidationError(); 	 			return true;			 }			  if((keyval <= RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))			  {				 $('#rrspFormNumberValidationError').show();			     return false;			  }	 				}		else //Windows chrome		{					keyval = event.keyCode;  	 			 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED||keyval == RRSP_KEY_DOLLAR)			 {			     event.returnValue = true;			     hideRRSPValidationError();			     return true;			 }				 if((keyval <= RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))			 {			     event.returnValue = false;			     $('#rrspFormNumberValidationError').show();			 }		}		}else{		keyval = event.keyCode;  	 //alert(keyval);	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)	 {	     event.returnValue = true;	     hideRRSPValidationError();	     return true;	 }	 	 if((keyval <= RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))	 {	     event.returnValue = false;	     $('#rrspFormNumberValidationError').show();	     return false;	 }				}		return true;}function acceptFrenchPercentage2015(event){	var message = "Seules les entrées numériques sont acceptées";	var browser = detectBrowser();		var keyval = 0;	var keyCode1 = 0;			if ( browser == "Explorer")	{		keyval = event.keyCode;  	 //alert(keyval);	 	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)	 {	     event.returnValue = true;	     hideRRSPValidationError();	     return true;	 }	 	 if((keyval < RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))	 {	     event.returnValue = false;	     $('#rrspFormNumberValidationError').show();	 }	 	 	}	else if ( browser == "Firefox" )	{	 keyval = event.which;	 keyCode1 = event.keyCode;	  	 //alert ("Key Pressed: " + keyval); 	 	 	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED || keyval == RRSP_KEY_BACKSPACE 	 || keyCode1 == RRSP_KEY_TAB || keyCode1 == RRSP_KEY_DELETE 	 || keyCode1 == RRSP_KEY_LEFT_ARROW || keyCode1 == KEY_RIGHT_ARROW||keyval == RRSP_KEY_PERCENTAGE)	 {		 hideRRSPValidationError();		 return true;	 }	  if((keyval < RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))	  {		  $('#rrspFormNumberValidationError').show();	     return false;	  }	  	  	}	else if (browser == "Safari")	{		var browserType = navigator.userAgent.toLowerCase();		if (browserType.indexOf("Mac") != -1)		{			keyval = event.which;	 		keyCode1 = event.keyCode;	 			 		if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED  			 || keyval == RRSP_KEY_TAB || keyCode1 == RRSP_KEY_DELETE_MAC 			 || keyCode1 == RRSP_KEY_LEFT_ARROW_MAC || keyCode1 == RRSP_KEY_RIGHT_ARROW_MAC||keyval == RRSP_KEY_PERCENTAGE)			 {	 			hideRRSPValidationError(); 	 			return true;			 }			  if((keyval < RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))			  {				 $('#rrspFormNumberValidationError').show();			     return false;			  }	 				}		else //Windows chrome		{		  	 keyval = event.keyCode;  	 			 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED||keyval == RRSP_KEY_PERCENTAGE)			 {			     event.returnValue = true;			     hideRRSPValidationError();			     return true;			 }				 if((keyval < RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))			 {			     event.returnValue = false;			     $('#rrspFormNumberValidationError').show();			 }		}		}else{		keyval = event.keyCode;	  	 //alert(keyval);		 		 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)		 {		     event.returnValue = true;		     hideRRSPValidationError();		     return true;		 }		 		 if((keyval < RRSP_KEY_COMMA || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH)||(keyval == RRSP_KEY_DOT))		 {		     event.returnValue = false;		     $('#rrspFormNumberValidationError').show();		     return false;		 }	 			}	return true;}function validateFrenchNumber2015(str, min, max){    trimNum=str.replace(/\s+/g,"");	if(trimNum.lastIndexOf(",")!=-1){		numArray=trimNum.split(",")		trimNum=numArray[0]+","+numArray[1];	}   str=convertFrenchIntoStandardNumberFormat(trimNum);   var temp = str.replace("$",'');   var temp2 = temp.replace(",",'');   var val = parseFloat(temp2);   var minval = parseFloat(min);   var maxval = parseFloat(max);  // alert (val)   if ( isNaN(val) )   {      //alert("Entry must be a number.");      $('#rrspNumberValidationError').show();      return false;   }   else   {	   if ( minval == null && maxval == null )	   { 	      return true; 	   } 	    	   if( isNaN(minval) == false ) 	   { 	       if ( isNaN(maxval) == false ) 	       { 	          if ( val >= minval && val <= maxval ) 	          { 	             return true; 	          }		      else	          {	         	  //alert("Value must be equal to or less than: " + maxval);		          return false;		      }   		    }		    if ( val < minval )		    {		     	  //alert("Value must be greater than or equal to : " + minval);		          return false;		    }		    return true; 	   }       return true;   }}


//--
// Validate all the fields in a form
//function validateRRSPForm2015(myForm){	//Get all elements in this form	  hideRRSPValidationError();	  var field = "";	  for ( var i = 0; i < myForm.length; i++)	  {		  field = myForm.elements[i];	     //dropdown will not get validated	     if ( field.name == "contributionFreqOptions" )	     {	    	 continue;	     }	    //dropdown will not get validated	     	     	     if(field.type == 'button')// This button is dynamically created by multiselect plugin			 continue;		 if(field.name == "txtRetirementGoal"){			 if ( field.value == null || field.value =="")	    	 { 	 	    				 $('#rrspRetirementGoalValidationError').show();   	    		 return false;	    	 }else{		    		if(!checkRetirementGoalValue(myForm)){		    		 	return false;		    		}	    	 }		 }		 		 if(field.name == "txtCurrentSaving"){			 if ( field.value == null || field.value =="")	    	 { 	 	    				 $('#rrspCurrentSavingValidationError').show();   	    		 return false;	    	 }else{		    		if(!checkCurrentSavingValue(myForm)){		    		 	return false;		    		}	    	 }		 }		 if(field.name == "txtContributionAmount"){			 if ( field.value == null || field.value =="")	    	 { 	 	    				 $('#rrspContributionAmountValidationError').show();   	    		 return false;	    	 }else{		    		if(!checkContributionAmountValue(myForm)){		    		 	return false;		    		}	    	 }		 }						 if(field.name == "txtROR"){			 if ( field.value == null || field.value =="")	    	 { 	 	    				 $('#rrspRORValidationError').show();   	    		 return false;	    	 }else{		    		if(!checkRRSPRORMax2015(myForm)){		    		 	return false;		    		}	    	 }			 		 }		 if(field.name == "txtCurrentAge"){			 console.log("check current age ");			 if ( field.value == null || field.value =="")	    	 { 	 	    				 $('#rrspCurrentAgeValidationError').show();   	    		 return false;	    	 }else{		    		if(!checkRRSPCurrentAge(myForm)){		    		 	return false;		    		}	    	 }			 		 }		 if(field.name == "txtRetireAge"){			 console.log("check retire age ");			 if ( field.value == null || field.value =="")	    	 { 	 	    				 $('#rrspRetireAgeValidationError').show();   	    		 return false;	    	 }else{		    		if(!checkRRSPRetireAge(myForm)){		    		 	return false;		    		}		    		 if(!checkStartAgeEndAge(myForm)){						 $('#rrspRetireAgeValidationError').show();   						 return false;					 }	    	 }			 		 }		 		 	  }	  	  if(!checkStartAgeEndAge(myForm)){		 $('#rrspRetireAgeValidationError').show();   		 console.log("start age and retire age are both wrong");		 return false;	 }	  console.log("validation ok");	  return true;}function acceptOnlyNumbers(event){	var message = "Only numeric entries accepted";	hideRRSPValidationError();	var browser = detectBrowser();	var keyval = 0;	var keyCode1 = 0;	if ( browser == "Explorer")	{  	 keyval = event.keyCode;	 	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)	 {	     event.returnValue = true;	     hideRRSPValidationError();	     return true;	 }	 	 if((keyval <= RRSP_KEY_DOT || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH))	 {		 $('#rrspFormNumberValidationError').show();		 return false;	 }	 	 	}	else if ( browser == "Firefox" )	{	 keyval = event.which;	 keyCode1 = event.keyCode;	  	 //alert ("Key Pressed: " + keyval); 	 	 	 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED || keyval == RRSP_KEY_BACKSPACE 	 || keyCode1 == RRSP_KEY_TAB || keyCode1 == RRSP_KEY_DELETE 	 || keyCode1 == RRSP_KEY_LEFT_ARROW || keyCode1 == RRSP_KEY_RIGHT_ARROW)	 {		 hideRRSPValidationError();	     return true;	 }	  if((keyval <= RRSP_KEY_DOT || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH))	  {		  $('#rrspFormNumberValidationError').show();	     return false;	  }	  	  	}	else if (browser == "Safari")	{		var browserType = navigator.userAgent.toLowerCase();		if (browserType.indexOf("Mac") != -1)		{			keyval = event.which;	 		keyCode1 = event.keyCode;	 			 		if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED  			 || keyval == RRSP_KEY_TAB || keyCode1 == RRSP_KEY_DELETE_MAC 			 || keyCode1 == RRSP_KEY_LEFT_ARROW_MAC || keyCode1 == RRSP_KEY_RIGHT_ARROW_MAC)			 {	 			hideRRSPValidationError();			     return true;			 }			  if((keyval <= RRSP_KEY_DOT || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH))			  {				 $('#rrspFormNumberValidationError').show();			     return false;			  }		}		else //Windows		{		  	 keyval = event.keyCode;  	 			 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)			 {				 event.returnValue = true;			     hideRRSPValidationError();			     return true;			 }				 if((keyval <= RRSP_KEY_DOT || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH))			 {				 $('#rrspFormNumberValidationError').show();				 event.returnValue = false;			    			 }		}		}else{		keyval = event.keyCode;		 		 if ( keyval == RRSP_KEY_RETURN || keyval == RRSP_KEY_LINEFEED)		 {		     event.returnValue = true;		     hideRRSPValidationError();		     return true;		 }		 		 if((keyval <= RRSP_KEY_DOT || keyval > RRSP_KEY_NINE ) || (keyval == RRSP_KEY_FRONT_SLASH))		 {			 $('#rrspFormNumberValidationError').show();			 return false;		 }				}		return true;}

function resetRRSPForm(myForm)
{
  myForm.reset();    $("#txtRetirementGoalID").val("0 $");  $("#txtCurrentSavingID").val("0 $");  $("#txtContributionAmountID").val("0 $");    $("#contributionFreqOptionsID option:eq(0)").attr('selected', 'selected');  $("#contributionFreq").val("1,0");    $("#rrsptxtRORID").val("8,0 %");  $("#txtCurrentAgeID").val("0");  $("#txtRetireAgeID").val("0");  if (!!document.documentMode) {			//ie		$("#txtRetirementGoalID").addClass("glowing-border");		$("#txtCurrentSavingID").addClass("glowing-border");		$("#txtContributionAmountID").addClass("glowing-border");		$("#rrsptxtRORID").addClass("glowing-border");		$("#txtCurrentAgeID").addClass("glowing-border");		$("#txtRetireAgeID").addClass("glowing-border");		$("#clientName_0").addClass("glowing-border");			}
  return ;
}

function checkRetirementGoalValue(myForm){	console.log("check retirement Goal Value:"+myForm.txtRetirementGoal.value);	var str =  myForm.txtRetirementGoal.value;	hideRRSPValidationError();	if ( str == null || str =="")	{ 					 $('#rrspRetirementGoalValidationError').show();  		if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable					}else{			 myForm.txtRetirementGoal.focus();		} 		return false;	}else{									var tempStr = str;		//remove the $ : like xxx,xx$		if ( str.lastIndexOf("$") != -1 ) 		{		    tempArray1 = str.split("$");		    tempStr = tempArray1.join("");		   		    		}						//remove the space: xx xxx,xx		tempStr4=tempStr;		trimNum=tempStr4.replace(/\s+/g,"");		//replace the , with .		var tempStr2 = trimNum;   		tempStr2=convertFrenchIntoStandardNumberFormat(tempStr2);		//remove the leading zero;		tempStr2=tempStr2.replace(/^0+/, '');		console.log("after remove the leading 0 is"+tempStr2);		if ( tempStr2 == null || tempStr2 ==""){			myForm.txtRetirementGoal.value="0 $";						$('#rrspRetirementGoalGreaterThanZeroValidationError').show(); 			return false;		}else{			if(isNaN(tempStr2.valueOf())){				$("#rrspNumberValidationError").show();				 if (!!document.documentMode) {							//ie has problem regarding focus can not kept. cursor color is invisiable							}else{					 myForm.txtRetirementGoal.focus();				}				 				return false;			}else{				var minval = parseFloat("0.0");						var val=prepareNumberWithoutDecimal(tempStr2);				if ( val > minval  )			    {					myForm.txtRetirementGoal.value=convertFrenchNumber(val)+" $";								return true;			     }			    else			    {			    				    	$('#rrspRetirementGoalGreaterThanZeroValidationError').show(); 			    	/* if (!!document.documentMode) {								//ie has problem regarding focus can not kept. cursor color is invisiable								}else{						 myForm.txtRetirementGoal.focus();					}*/			    	return false;			    }			}		}		 	}		}function checkCurrentSavingValue(myForm){	var str =  myForm.txtCurrentSaving.value;	str = str.replace(/\s/g, '');		hideRRSPValidationError();	if ( str == null || str =="")	{ 	 	    		 $('#rrspCurrentSavingValidationError').show();  		if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable					}else{			 myForm.txtCurrentSaving.focus();		} 		return false;	}else{							var tempStr = str;		//remove the $ : like xxx,xx$		if ( str.lastIndexOf("$") != -1 ) 		{		    tempArray1 = str.split("$");		    tempStr = tempArray1.join("");		   		    		}				//remove the space: xx xxx,xx		tempStr4=tempStr;		trimNum=tempStr4.replace(/\s+/g,"");		//replace the , with .		var tempStr2 = trimNum;   		tempStr2=convertFrenchIntoStandardNumberFormat(tempStr2);				//remove the leading zero;		tempStr2=tempStr2.replace(/^0+/, '');		console.log("after remove the leading 0 is"+tempStr2);		if ( tempStr2 == null || tempStr2 ==""){			myForm.txtCurrentSaving.value="0 $";						return true;		}else{			if(isNaN(tempStr2.valueOf())){				$("#rrspNumberValidationError").show();				 if (!!document.documentMode) {							//ie has problem regarding focus can not kept. cursor color is invisiable							}else{					 myForm.txtCurrentSaving.focus();				}						return false;			}else{				var minval = parseFloat("0.0");				var val=prepareNumberWithoutDecimal(tempStr2);				if ( val >= minval  )			    {					//myForm.txtCurrentSaving.value=convertFrenchNumber(convertToMoney(val))+"$";					console.log("pass the CurrentSaving validation ");					myForm.txtCurrentSaving.value=convertFrenchNumber(val)+" $";								return true;			     }			    else			    {			    	$('#rrspGreaterThanZeroValidationError').show();			    	 if (!!document.documentMode) {								//ie has problem regarding focus can not kept. cursor color is invisiable								}else{						 myForm.txtCurrentSaving.focus();					}			    	return false;			    }			}		}		 	}		}function checkContributionAmountValue(myForm){	var str =  myForm.txtContributionAmount.value;	str = str.replace(/\s/g, '');		hideRRSPValidationError();	if ( str == null || str =="")	{ 	 	    		 $('#rrspContributionAmountValidationError').show();  		if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable					}else{			 myForm.txtContributionAmount.focus();		} 		return false;	}else{								var tempStr = str;		//remove the $ : like xxx,xx$		if ( str.lastIndexOf("$") != -1 ) 		{		    tempArray1 = str.split("$");		    tempStr = tempArray1.join("");		   		    		}				//remove the space: xx xxx,xx		tempStr4=tempStr;		trimNum=tempStr4.replace(/\s+/g,"");		//replace the , with .		var tempStr2 = trimNum;   		tempStr2=convertFrenchIntoStandardNumberFormat(tempStr2);				//remove the leading zero;		tempStr2=tempStr2.replace(/^0+/, '');		console.log("after remove the leading 0 is"+tempStr2);		if ( tempStr2 == null || tempStr2 ==""){			myForm.txtContributionAmount.value="0 $";						return true;		}else{			if(isNaN(tempStr2.valueOf())){				$("#rrspNumberValidationError").show();				 if (!!document.documentMode) {							//ie has problem regarding focus can not kept. cursor color is invisiable							}else{					 myForm.txtContributionAmount.focus();				}						return false;			}else{				var minval = parseFloat("0.0");				var val=prepareNumberWithoutDecimal(tempStr2);				console.log("pass the ContributionAmount validation ");				myForm.txtContributionAmount.value=convertFrenchNumber(val)+" $";							return true;			}		}		 	}		}function checkRRSPRORMax2015(myForm){    var str = myForm.txtROR.value;    hideRRSPValidationError();    if ( str == null || str =="")	{ 	 	    		 $('#rrspRORValidationError').show();  		 		 if (!!document.documentMode) {					//ie has problem regarding focus can not kept. cursor color is invisiable					}else{			myForm.txtROR.focus();		}				 return false;	}else{		if(str.indexOf("%")>-1){			//has $ sign, substring from 1 to end			str=str.substr(0,str.length-1);					}		var tempStr = str;		//remove the $ : like xxx,xx$		if ( str.lastIndexOf("$") != -1 ) 		{		    tempArray1 = str.split("$");		    tempStr = tempArray1.join("");		}			//remove the space: xx xxx,xx		tempStr4=tempStr;		trimNum=tempStr4.replace(/\s+/g,"");		//replace the , with .		var tempStr2 = trimNum;   		tempStr2=convertFrenchIntoStandardNumberFormat(tempStr2);			if(isNaN(tempStr2.valueOf())){				$("#rrspNumberValidationError").show();			 if (!!document.documentMode) {						//ie has problem regarding focus can not kept. cursor color is invisiable						}else{				myForm.txtROR.focus();			}					return false;		}else{			var minval = parseFloat("0.0");			var val=prepareNumber(tempStr2);						if ( val <= minval  )		    {				$('#rrspGreaterThanZeroValidationError').show();			       //myForm.txtROR.value = "4.0";			       myForm.txtROR.focus();			       			       return false;		     }else if(validateFrenchNumber2015(str,0,20) == true){		    	 console.log("pass the ror validation");		    	 myForm.txtROR.value= convertFrenchNumber(val)+" %";		    	 return true;		     }		    else{		    			    	$('#rrspRORValueValidationError').show();		    	 if (!!document.documentMode) {							//ie has problem regarding focus can not kept. cursor color is invisiable							}else{					myForm.txtROR.focus();				}			       return false;		    }		}	}}function checkStartAgeEndAge(myForm){	var startAge=prepareNumber(myForm.txtCurrentAge.value);	var endAge=prepareNumber(myForm.txtRetireAge.value);	var diff=endAge-startAge;	if(diff > 0){				return true;	}	else{		myForm.txtRetireAge.focus();		return false;	}}