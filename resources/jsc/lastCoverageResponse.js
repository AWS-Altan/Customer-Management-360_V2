var objEps = ((typeof(context.getVariable("rspHSS.eps") !== 'undefined') && (context.getVariable("rspHSS.eps")!== null) && (context.getVariable("rspHSS.eps")!=="")))?JSON.parse(context.getVariable("rspHSS.eps")):"";
var msisdn = context.getVariable("msisdn");
var vplmnIdS6a = (objEps && objEps.vplmnIdS6a) ? objEps.vplmnIdS6a.toString() : "";
print("Flujo Nokia ...")
print ("vplmnIdS6a::<<" + vplmnIdS6a + ">>");

//país
var mcc = (objEps && objEps.vplmnIdS6a) ? objEps.vplmnIdS6a.toString().substr(0,3) : "";
//operadora
var mnc = (objEps && objEps.vplmnIdS6a) ? objEps.vplmnIdS6a.toString().substr(3,5) : "";
print ("mcc::<<" + mcc + ">>");
print ("mnc::<<" + mnc + ">>");


var lastCoverageError = "false";
var response = {};

if(!vplmnIdS6a){
    lastCoverageError = "true";
}else{
    response.msisdn = msisdn;
    response.lastCoverage = "Roaming Internacional";
	if ( ( ( mcc == "334" ) && ( mnc =="140") ) || ( mcc == "330" ) ){
		response.lastCoverage = "Huella Altán";
	}
	else if ( ( ( mcc == "334" ) && ( mnc !="140") ) || ( mcc == "33F" ) ){
		response.lastCoverage = "Roaming Nacional";
	}
}

context.setVariable("lastCoverageError", lastCoverageError)
context.setVariable("responseLastCoverage", JSON.stringify(response));