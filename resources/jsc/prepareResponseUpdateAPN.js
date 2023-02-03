var responseContent = context.getVariable("response.content");

var isValidResponse = validateResponse(responseContent);

if (isValidResponse){
    var finalResponse = buildResponse(responseContent);
    context.setVariable("response.content", JSON.stringify(finalResponse) );    
}


function validateResponse(responseContent){
    if ( typeof(responseContent) !== 'undefined' && responseContent !== null 
        && responseContent !== ""){
        try{
            JSON.parse(responseContent);
            print('valido');
            return true;
        }catch(e){
            return false;
        }        
    }
    return false;
}

function buildResponse(responseContent){
    var originResponse = JSON.parse(responseContent);
    var objNewResponse={};
    
    objNewResponse.product = originResponse.Product;
    objNewResponse.effectiveDate = originResponse.EffectiveDate;
    objNewResponse.msisdn = originResponse.msisdn;
    objNewResponse.offeringId = originResponse.OfferId;
    objNewResponse.scenarioID = originResponse.idEscenario;
    
    return objNewResponse;
}