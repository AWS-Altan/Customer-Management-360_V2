var offeringId = context.getVariable("responsePrimaryOffering.offeringId");
var speed = "";
var product;
var offerFeature = "Normal";

verifyOfferingId(offeringId);

function verifyOfferingId(offeringId) {
    
    if(typeof(offeringId) !== 'undefined' && offeringId !== null && offeringId !== ""){
        offeringId = offeringId.toString();
        print('Oferta Reactivate: ' + offeringId);
        if(offeringId[1] == "0" || offeringId[1] == "1" || offeringId[1] == "2"){
        	context.setVariable("product", "HBB");
          	context.setVariable("verifyProduct", "true");
        }else if(offeringId[1] == "3" || offeringId[1] == "4" || offeringId[1] == "5"){
        	context.setVariable("product", "Empty");
          	context.setVariable("verifyProduct", "true");
        }else if(offeringId[1] == "6" || offeringId[1] == "7" || offeringId[1] == "8"){
        	context.setVariable("product", "Movilidad");
          	context.setVariable("verifyProduct", "true");
        }else{
    	    context.setVariable("verifyProduct", "false");
        }
        
        if(offeringId[2] == "5" || offeringId[2] == "6"){
            context.setVariable("offerFeature", "Fixed Telephony");
            context.setVariable("verifyProduct", "true");
        }
        
        if(offeringId.substring(0,5) === "10000"){
	        context.setVariable("offerDefault", "true");
        }else{
  	        context.setVariable("offerDefault", "false");
        }
        
    }else{
        context.setVariable("verifyProduct", "error");
    }
    
    //context.setVariable("product", "Empty");
    //context.setVariable("verifyProduct", "true");
}