var coverageData = context.getVariable("serviceability");
var offeringId = (typeof(context.getVariable("offeringId")) !== 'undefined') ? context.getVariable("offeringId").toString() : '';

if ( coverageData.includes("broadband1") || coverageData.includes("broadband2") || coverageData.includes("broadband5") || coverageData.includes("broadband10") || coverageData.includes("broadband20") || coverageData.includes("broadband30")) {
    var subsOfferId = offeringId.substr(3,2);
    var subsBroad = Number(coverageData.substring(9,11));
    
    print('offer' + offeringId + '; coverage: ' + subsBroad);
    
    if (Number(subsOfferId) <=  subsBroad){
        context.setVariable("continue", "true");
    }else if(Number(subsOfferId) ===  99){
        context.setVariable("continue", "true");
    }else{
        context.setVariable("continue", "false");
    }

}else{
    context.setVariable("continue", "error");
    context.setVariable("errorMessage.status", "400");
    context.setVariable("errorMessage.code", "400");
    context.setVariable("errorMessage.message", "Serviceability was not validated. Validate your parameters");
}