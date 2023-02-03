 var identifierValue = context.getVariable("identifierValue");
 var identifierType = context.getVariable("identifierType");
 
 identifierValue = ((typeof(identifierValue) !== undefined) && (identifierValue !== null) && (identifierValue !== "")) ? identifierValue.toString() : "";
 
 identifierType = ((typeof(identifierType) !== undefined) && (identifierType !== null) && (identifierType !== "")) ? identifierType.toString() : "";
 
 if(identifierType !== ""){
     context.setVariable("isIdentifierValid", "true");
     identifierType = identifierType.toLowerCase();
     if(identifierType === "cp" || identifierType === "state" || identifierType === "city" || identifierType === "planid"){
         context.setVariable("improvement."+identifierType, identifierValue);
     }else{
        context.setVariable("isIdentifierValid", "false");
        context.setVariable("errorMessage.status", "400");
        context.setVariable("errorMessage.code", "400");
        context.setVariable("errorMessage.message", "identifierType is invalid. The values can be (cp, state, city, planId)");
     }
 }