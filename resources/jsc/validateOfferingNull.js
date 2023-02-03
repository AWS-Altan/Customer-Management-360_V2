 var offeringId = context.getVariable("offeringId");
 var moduleValue = context.getVariable("moduleValue");

offeringId = ((typeof(offeringId) !== 'undefined') && (offeringId !== null) && (offeringId !== "")) ? offeringId.toString() : "";

if(typeof(offeringId) !== 'undefined' && offeringId !== null && offeringId !== ""){
    context.setVariable("request.queryparam.offeringId", offeringId);
}

if(typeof(moduleValue) === 'undefined' || moduleValue === null || moduleValue === ""){
    print("moduleValue ALL-muestra todas las ofertas")
    context.setVariable("moduleValue", "ALL");
}    