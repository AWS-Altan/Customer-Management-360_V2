var response = context.getVariable("response.content");
var responseJSON = JSON.parse(response);
var product = responseJSON.subscriber.product;
var isUnknownProduct = 'false';
var purchasedOfferings = responseJSON.purchasedOfferings;
var offers = (typeof(purchasedOfferings.offers) !== undefined && purchasedOfferings.offers!== null && purchasedOfferings.offers!== "")?purchasedOfferings.offers:[];
var responsePromotionBonus = context.getVariable("responseCheckPromotionBonus.content");
var bonos = JSON.parse(responsePromotionBonus);
var offersCNBCN = [];

var selfMngLifeCycle = context.getVariable("selfMngLifeCycle");
var selfMngLifeCycle = (typeof(selfMngLifeCycle) !== undefined && selfMngLifeCycle!== null && selfMngLifeCycle!== "")?selfMngLifeCycle:'false';
//var status= responseJSON.subscriber.status.status;

var statusCode = context.getVariable("responseCheckPromotionBonus.status.code");
print("statusCode: "+ statusCode);

var isValidResponse = context.getVariable('isValidResponse');
print("isValidResponse: "+ isValidResponse);

if(selfMngLifeCycle == 'true'){
    responseJSON.subscriber.status = {
        status : responseJSON.subscriber.status.status,
        reason : responseJSON.subscriber.status.reason,
        subReason : responseJSON.subscriber.status.subReason
    }
}else{
    responseJSON.subscriber.status = {
        status : responseJSON.subscriber.status.status,
        reason : responseJSON.subscriber.status.reason
    }
}

if(isValidResponse == "false"){
    bonos = "";
}


//offers =(JSON.stringify(offers) == '[null]')?[]:offers;
context.setVariable("offers", JSON.stringify(offers));

bonos =(JSON.stringify(bonos) == '[null]')?[]:bonos;
context.setVariable("bonos", JSON.stringify(bonos));

print("TypeOffers: "+typeof(offers));

if(offers.length>0){
    for (var i = 0; i < offers.length; i++) {
        if(offers[i] !== null){
            print(offers[i].offeringId);
            print(offers[i].serviceType);
            if (offers[i].serviceType == 'CN' || offers[i].serviceType == 'BCN'){
                offers[i].serviceType = "Datos";
                offers[i].uom = "Mb";
                offersCNBCN.push(offers[i].offeringId);  
            }
            
            if (bonos !== ""){
                print("bonos: "+ bonos);
                if (bonos.some(e => e.offer_id_promocion == offers[i].offeringId) || bonos.some(e => e.offer_id_promocion_porta == offers[i].offeringId)){
                    offers[i]["bonoPromocional"] = "SI";
                }else {
                    offers[i]["bonoPromocional"] = "NO";
                }
            }else{
                offers[i]["bonoPromocional"] = "NO";    
            }
        }
    }
}

isUnknownProduct = (product == 'Unknown')?'true':isUnknownProduct;
context.setVariable("subscriberProduct", product);
context.setVariable("isUnknownProduct", isUnknownProduct);

context.setVariable('offersCNBCN', offersCNBCN.toString());
context.setVariable('finalResponse', JSON.stringify(responseJSON));