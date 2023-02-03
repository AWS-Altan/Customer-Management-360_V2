var responseContent = context.getVariable("response.content");

var isValidResponse = validateResponse(responseContent);
print(isValidResponse);

if (isValidResponse){
    var finalResponse = buildResponse(responseContent);
    context.setVariable("response.content", JSON.stringify(finalResponse) );    
}


function validateResponse(responseContent){
    if ( typeof(responseContent) !== 'undefined' && responseContent !== null 
        && responseContent !== ""){
        try{
            JSON.parse(responseContent);
            print('valido validateResponse');
            return true;
        }catch(e){
            return false;
        }        
    }
    return false;
}

function buildResponse(responseContent){
    print('entro a empezar a crear el build');
    var originResponse = JSON.parse(responseContent);
    var objNewResponse={};
    
    objNewResponsebody = originResponse.body;
    print('entro a despues body');
    
    var originResponseBody = JSON.parse(objNewResponsebody);
    objNewResponse.result = originResponseBody.result;
    objNewResponse.msisdn = originResponseBody.msisdn;
    objNewResponse.effectiveDate = originResponseBody.effectiveDate;
    objNewResponse.template_ota = originResponseBody.template_ota;
    
    return objNewResponse;
}