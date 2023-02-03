var responseCatalogOffers = context.getVariable('responseGetODCO');
var responseCatalogOffersJSON = JSON.parse(responseCatalogOffers);
var newProduct = ''
var finalResponse = context.getVariable('finalResponse');
var finalResponseJSON = JSON.parse(finalResponse);

for(var x = 0; responseCatalogOffersJSON.length>0; x++){
    var offerDetailData = responseCatalogOffersJSON[x].offer_detail_data;    
    for(y=0;  offerDetailData.length>0; y++){
        var productFamily = offerDetailData[y].productFamily
        break;
    }
    break;
}
context.setVariable('productFamily', productFamily)

if(productFamily.startsWith('MOV') || productFamily.startsWith('MOB')){
	newProduct = 'Movilidad';
}
if(productFamily.startsWith('HBB') || productFamily.startsWith('IH-')){
	newProduct = 'HBB';
}
if(productFamily.startsWith('HBB-TF')){
	newProduct = 'HBB+TF';
}
if(productFamily.startsWith('MIF')){
	newProduct = 'Mifi';
}
if(productFamily.startsWith('IOT')){
	newProduct = 'IoT';
}

context.setVariable('newProduct', newProduct)
finalResponseJSON.subscriber.product = newProduct;
context.setVariable('finalResponse', JSON.stringify(finalResponseJSON));

