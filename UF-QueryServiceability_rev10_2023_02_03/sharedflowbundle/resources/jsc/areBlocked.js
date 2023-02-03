var coverageData = context.getVariable("coverageData");
var errorDescription = context.getVariable("errorDescription");
var serviceabilityVersion = context.getVariable("serviceabilityVersion");
//var excludeEBLKValidation=context.getVariable("excludeEBLKValidation");
var excludeEBLKValidation=((typeof(context.getVariable("excludeEBLKValidation")) !== undefined && context.getVariable("excludeEBLKValidation") !== null && context.getVariable("excludeEBLKValidation") !==  "" && context.getVariable("excludeEBLKValidation") !==  "false"))? context.getVariable("excludeEBLKValidation"):'';
coverageData= (typeof(coverageData) !== 'undefined' && coverageData !== null && coverageData !== "") ? coverageData.toString() : "";


if(serviceabilityVersion === '3'){
    
    if ( (errorDescription.includes("blocked") && excludeEBLKValidation==='') || errorDescription.includes("Restricted") || errorDescription.includes("Without")) {
        context.setVariable("errorMessage.code", coverageData);
        context.setVariable("errorMessage.status", "400");
        context.setVariable("errorMessage.message", errorDescription);
        context.setVariable("areBlocked", "true");
    }else{
        context.setVariable("areBlocked", "false");
    }
    
}else{
    if ( coverageData.includes("blocked") || coverageData.includes("Restricted") || coverageData.includes("Without")) {
        context.setVariable("errorMessage.code", "400");
        context.setVariable("errorMessage.status", "400");
        context.setVariable("errorMessage.message", coverageData);
        context.setVariable("areBlocked", "true");
    
    }else{
        context.setVariable("areBlocked", "false");
    }   
}