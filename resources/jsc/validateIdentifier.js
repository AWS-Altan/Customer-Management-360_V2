 var identifierValue = context.getVariable("identifierValue");
 var identifierType = context.getVariable("identifierType");
 
 identifierValue = ((typeof(identifierValue) !== 'undefined') && (identifierValue !== null) && (identifierValue !== "")) ? identifierValue.toString() : "";
 
 identifierType = ((typeof(identifierType) !== 'undefined') && (identifierType !== null) && (identifierType !== "")) ? identifierType.toString() : "";
 
 if(identifierValue !== "" && identifierType !== ""){
     context.setVariable("isIdentifierValid", "true");
     
     if(identifierType === "msisdn" || identifierType === "imsi" || identifierType === "imei" || identifierType === "iccid"){
         context.setVariable(identifierType, identifierValue);
     }else{
        context.setVariable("isIdentifierValid", "false");
        context.setVariable("errorMessage.status", "400");
        context.setVariable("errorMessage.code", "400");
        context.setVariable("errorMessage.message", "identifierType is invalid. The values can be (msisdn, imsi, iccid, imei)");
     }
 }