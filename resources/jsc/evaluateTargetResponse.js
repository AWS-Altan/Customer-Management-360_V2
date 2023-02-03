var statusCode = context.getVariable("response.status.code");
var responseMessage = context.getVariable("response.content");
 
if ( typeof statusCode !== 'undefined' && statusCode !== null && statusCode !== ""  ){
    if ( parseInt(statusCode.toString() ) >= 400 && parseInt(statusCode.toString() ) <= 599 ){
        var objJSON = JSON.parse(responseMessage);
        context.setVariable("errorMessage.status", statusCode.toString());
        context.setVariable("errorMessage.code", ( typeof objJSON.errorCode !== 'undefined' && objJSON.errorCode !== null && objJSON.errorCode !== ""  ) ? objJSON.errorCode : "");
        context.setVariable("error400message", ( typeof objJSON.description !== 'undefined' && objJSON.description !== null && objJSON.description !== ""  ) ? objJSON.description : "");
        //context.setVariable("errorMessage.detail", ( typeof objJSON.detail !== 'undefined' && objJSON.detail !== null && objJSON.detail !== ""  ) ? objJSON.detail : "");
    }
}