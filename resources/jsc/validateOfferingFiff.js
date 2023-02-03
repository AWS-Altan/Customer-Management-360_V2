var offeringId = context.getVariable("offeringId");
var validity = context.getVariable("validity");

validity = (typeof(validity) !== 'undefined' && validity !== null && validity !== "")? validity : 31 ;

if( (  (offeringId.charAt(2) === "4") || (offeringId.charAt(2) === "1") || (offeringId.charAt(2) === "6") || (offeringId.charAt(2) === "8") ) && 
    (   offeringId.charAt(1) === "1"  ||  offeringId.charAt(1) === "2"  ||  offeringId.charAt(1) === "4"  ||  offeringId.charAt(1) === "5"  
     || offeringId.charAt(1) === "7"  || offeringId.charAt(1) === "8") ){
    context.setVariable("additionalDates", "true");
    context.setVariable("validity", validity);
}else{
    context.setVariable("additionalDates", "false");
    context.setVariable("validity", validity);
} 
