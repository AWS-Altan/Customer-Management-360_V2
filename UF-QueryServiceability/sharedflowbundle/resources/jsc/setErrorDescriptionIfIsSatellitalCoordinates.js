var errorDescription = context.getVariable('errorDescription');
var serviceabilityVersion = context.getVariable("serviceabilityVersion");

if(serviceabilityVersion === '3' && errorDescription === 'satelital' ){
    errorDescription = '';
}


context.setVariable('errorDescription', errorDescription);