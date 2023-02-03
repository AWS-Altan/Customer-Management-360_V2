var version = context.getVariable("version");
var responseContent = context.getVariable("response.content");

var isValidResponse = validateResponse(responseContent);
var hasErrors = hasErrorResponse(responseContent);

if(isValidResponse && !hasErrors){
    newResponse = editResponse(JSON.parse(responseContent), version);
    context.setVariable("response.content", JSON.stringify(newResponse));
}

if ( isValidResponse && hasErrors ){
    var objResponse = JSON.parse(responseContent);
    var errorCode = objResponse.errorCode;
    context.setVariable("response.status.code", errorCode);
}

function hasErrorResponse(responseContent){
    var objResponse = JSON.parse(responseContent);
    return objResponse.errorCode;
}

function validateResponse(responseContent){
    if ( typeof(responseContent) !== 'undefined' && responseContent !== null 
        && responseContent !== ""){
        try{
            JSON.parse(responseContent);
            return true;
        }catch(e){
            return false;
        }        
    }
    return false;
}

function editResponse(response, version){
    var newResponse = response;
    var homologatedValue = newResponse.imei.homologated;
    var newHomologatedValue=homologatedValue;
    if (version == 1){
        if (homologatedValue == 'HOMOLOGADO' || homologatedValue == 'VOLTE'){
            newHomologatedValue = 'HOMOLOGADOS O VOLTE';
        }
    }
    if (version == 2){
        if (homologatedValue == 'HOMOLOGADO' || homologatedValue == 'VOLTE'){
            newHomologatedValue = 'HOMOLOGADOS O VOLTE';
        }
        if (homologatedValue == 'NO PROBADO' || homologatedValue == 'NO COMPATIBLE'){
            newHomologatedValue = 'NO COMPATIBLE';
        }
    }
    if (version == 3){
        if (homologatedValue == 'HOMOLOGADO' || homologatedValue == 'VOLTE'){
            newHomologatedValue = 'HOMOLOGADOS O VOLTE';
        }
        if (homologatedValue == 'NO PROBADO' || homologatedValue == 'NO COMPATIBLE' || homologatedValue.includes('VOZAPP') ){
            newHomologatedValue = 'NO COMPATIBLE';
        }
    }
    newResponse.imei.homologated = newHomologatedValue;
    
    return newResponse;
}