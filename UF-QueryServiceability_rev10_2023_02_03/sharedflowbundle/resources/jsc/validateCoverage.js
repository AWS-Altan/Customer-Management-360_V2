var coverageData = context.getVariable("coverageData");
var offeringId = (typeof(context.getVariable("offeringId")) !== 'undefined') ? context.getVariable("offeringId").toString() : '';

if ( coverageData && offeringId) {
    var subsOfferId = Number(offeringId.substring(3,5));
    var subsBroad = Number(coverageData.substring(9,11));
    
    print('offer' + subsOfferId + '; coverage: ' + subsBroad);
    
    if (subsOfferId <=  subsBroad){
        context.setVariable("evalCoverage", "true");
    }else{
        context.setVariable("evalCoverage", "false");
    }  

}else{
    print('No hay datos válidos para evaluar');
    context.setVariable("evalCoverage", "false");
}