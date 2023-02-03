 var vplmnIdS6a = context.getVariable("vplmnIdS6a");
print(typeof(vplmnIdS6a));
print(vplmnIdS6a);
//país
var mcc = ( typeof(vplmnIdS6a) !== undefined && vplmnIdS6a !== null && vplmnIdS6a !== "" ) ? vplmnIdS6a.toString().substr(0,3) : "";
//operadora
var mnc = ( typeof(vplmnIdS6a) !== undefined && vplmnIdS6a !== null && vplmnIdS6a !== "" ) ? vplmnIdS6a.toString().substr(3,5) : "";
print ("mcc::<<" + mcc + ">>");
print ("mnc::<<" + mnc + ">>");

var msisdn = context.getVariable("msisdn");
var lastCoverageError = "false";

var response = {};

var arrEps = [];

if(!vplmnIdS6a){
    lastCoverageError = "true";
}else{
    response.msisdn = msisdn;
    response.lastCoverage = "Roaming Internacional";
	if ( ( mcc == "334" ) && ( mnc =="140") ){
		response.lastCoverage = "Huella Altán";
	}
	else if ( ( mcc == "334" ) && ( mnc !="140") ){
		response.lastCoverage = "Roaming Nacional";
	}    
}

context.setVariable("lastCoverageError", lastCoverageError)
context.setVariable("responseLastCoverage", JSON.stringify(response));