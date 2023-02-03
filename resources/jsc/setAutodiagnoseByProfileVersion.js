var finalResponse = context.getVariable('finalResponse');
var profileData = JSON.parse(finalResponse);
var offeringNetworkSpeedAppVideo = context.getVariable('OfferingNetworkSpeedAppVideo');
var purchasedOfferings = profileData.purchasedOfferings;
var throttlingOfferings =profileData.throttling;
var offers = (typeof(purchasedOfferings.offers) !== undefined && purchasedOfferings.offers!== null && purchasedOfferings.offers!== "")?purchasedOfferings.offers:[];
var throttlingOffers = (typeof(throttlingOfferings.throttlings) !== undefined && throttlingOfferings.throttlings!== null && throttlingOfferings.throttlings!== "")?throttlingOfferings.throttlings:[];
var offeringSpeedVideoL1 = offeringNetworkSpeedAppVideo.split('|');
var product = profileData.subscriber.product;


offers =(JSON.stringify(offers) == '[null]')?[]:offers;
context.setVariable("offers", JSON.stringify(offers));

throttlingOffers =(JSON.stringify(throttlingOffers) == '[null]')?[]:throttlingOffers;
context.setVariable("throttlingOffers", JSON.stringify(throttlingOffers));

profileData.netweorkSpeedVideoApp = {};
profileData.tethering = {};
profileData.sva = {};
profileData.data = {};
profileData.rs = {};
profileData.voice = {};
profileData.sms = {};
profileData.defaultOffer = {};
profileData.OfferNoB28 = {};
profileData.OfferNoRenewal = {};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//networkSpeedVideoApp, tethering, throttling, SVA, data, rs, voz, defaultOffer, OfferNoB28, OfferNoRenewal
if (product == 'Oferta por defecto'){
    profileData.netweorkSpeedVideoApp.severity = "1";
    profileData.netweorkSpeedVideoApp.value  = "";
    profileData.netweorkSpeedVideoApp.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";
    
    profileData.tethering.severity = "1";
    profileData.tethering.value  = "";
    profileData.tethering.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";

    profileData.throttling.severity = "1";
    profileData.throttling.value  = "";
    profileData.throttling.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";

    profileData.sva.severity = "1";
    profileData.sva.value  = "";
    profileData.sva.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";    

    profileData.data.severity = "1";
    profileData.data.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";    
    profileData.data.availableMb  = "0";    
    profileData.data.availablePercent  = "0";    
    profileData.data.registerCounter  = "0";
    profileData.data.registers  = [];
    profileData.data.latestExpirationDate  = "";

    profileData.rs.severity = "1";
    profileData.rs.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";    
    profileData.rs.availableMb  = "0";    
    profileData.rs.availablePercent  = "0";    
    profileData.rs.registerCounter  = "0";
    profileData.rs.registers  = [];
    profileData.rs.latestExpirationDate  = "";

    profileData.voice.severity = "1";
    profileData.voice.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";    
    profileData.voice.availableMb  = "0";    
    profileData.voice.availablePercent  = "0";    
    profileData.voice.registerCounter  = "0";
    profileData.voice.registers  = [];
    profileData.voice.latestExpirationDate  = "";

    profileData.sms.severity = "1";
    profileData.sms.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico.";    
    profileData.sms.availableMb  = "0";    
    profileData.sms.availablePercent  = "0";    
    profileData.sms.registerCounter  = "0";
    profileData.sms.registers  = [];
    profileData.sms.latestExpirationDate  = "";

    profileData.defaultOffer.severity = "2";
    profileData.defaultOffer.value  = "SI";
    profileData.defaultOffer.diagnose  = "El UF aún no cuenta con una oferta definitiva"; 

    profileData.OfferNoB28.severity = "1";
    profileData.OfferNoB28.value  = "";
    profileData.OfferNoB28.diagnose  = "El UF aún no cuenta con una oferta definitiva, por lo que no se puede determinar éste diagnóstico."; 

    profileData.OfferNoRenewal.severity = "1";
    profileData.OfferNoRenewal.value  = "";
    profileData.OfferNoRenewal.diagnose  = "El UF aún no cuenta con una oferta definitiva"; 

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//netweorkSpeedVideoApp
if (product == 'IoT' || product == 'Mifi' || product == 'Movilidad'){
    profileData.netweorkSpeedVideoApp.severity = "-1";
    profileData.netweorkSpeedVideoApp.value  = "";
    profileData.netweorkSpeedVideoApp.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF.";
}

if (product.startsWith('HBB')){

    var offersVideoSpeedResponse = howMuchOffersAreVideo();
    var offersVideoSpeedArr = offersVideoSpeedResponse.split('|');
    
    if(parseInt(offersVideoSpeedArr[0]) == 0){
        profileData.netweorkSpeedVideoApp.severity = "1";
        profileData.netweorkSpeedVideoApp.value  = "N/A";
        profileData.netweorkSpeedVideoApp.diagnose  = "Apagado. Las aplicaciones de contenido de Video se visualizan a la velocidad contratada en la oferta";    
    }
    
    if(parseInt(offersVideoSpeedArr[0]) >= 1){
        profileData.netweorkSpeedVideoApp.severity = "2";
        profileData.netweorkSpeedVideoApp.value  = offersVideoSpeedArr[1]+"mbps";
        profileData.netweorkSpeedVideoApp.diagnose  = "Encendido. Las aplicaciones de contenido de Video se visualizan a una velocidad inferior a la contratada en la oferta";    
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tethering
if(product.startsWith('HBB') || product == 'IoT' || product == 'Mifi'){
    profileData.tethering.severity = "-1";
    profileData.tethering.value  = "";
    profileData.tethering.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF.";
}


if(product == 'Movilidad'){
    profileData.tethering.severity = "1";
    
    //Se debe tomar el nombre de la oferta primaria--> Consultar al catalogo de ofertas
    profileData.tethering.value  = "";
    profileData.tethering.diagnose  = "";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//throttling
if(product == 'IoT'){
    profileData.throttling.severity = "-1";
    profileData.throttling.value  = "";
    profileData.throttling.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF.";    
}

if (product.startsWith('HBB') || product == 'Mifi' || product == 'Movilidad'){
    var throttlingData = evaluateThrottling();
    var throttlingDataArr = throttlingData.split('|');
    profileData.throttling.severity = throttlingDataArr[0];
    profileData.throttling.value  = throttlingDataArr[1];
    profileData.throttling.diagnose  = throttlingDataArr[2];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sva
if (product == 'Mifi' || product == 'IoT'){
    profileData.sva.severity = "-1";
    profileData.sva.value  = "";
    profileData.sva.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF.";
}

if (product.startsWith('HBB') || product == 'Movilidad'){
    var svagData = evaluateSva();
    var svaDataArr = throttlingData.split('|');
    profileData.sva.severity = svaDataArr[0];
    profileData.sva.value  = svaDataArr[1];
    profileData.sva.diagnose  = svaDataArr[2];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//data
if (product.startsWith('HBB') || product == 'Movilidad' || product == 'Mifi' || product == 'IoT'){
    var dataObject = JSON.parse(evalData());
    profileData.data.severity = dataObject.severity;
    profileData.data.diagnose  = dataObject.diagnose; 
    profileData.data.availableMb  = dataObject.availableMb;    
    profileData.data.availablePercent  = dataObject.availablePercent;
    profileData.data.registerCounter  = dataObject.registerCounter;
    profileData.data.registers  = dataObject.registers;
    profileData.data.latestExpirationDate  = dataObject.latestExpirationDate;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//rs
if (product.startsWith('HBB') || product == 'Movilidad' || product == 'Mifi' || product == 'IoT'){
    var dataObject = JSON.parse(evalRs());
    profileData.rs.severity = dataObject.severity;
    profileData.rs.diagnose  = dataObject.diagnose; 
    profileData.rs.availableMb  = dataObject.availableMb;    
    profileData.rs.availablePercent  = dataObject.availablePercent;
    profileData.rs.registerCounter  = dataObject.registerCounter;
    profileData.rs.registers  = dataObject.registers;
    profileData.rs.latestExpirationDate  = dataObject.latestExpirationDate;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//voice
if (product == 'HBB' || product == 'Mifi' || product == 'IoT'){
    
    profileData.voice.severity = "-1";
    profileData.voice.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF."; 
    profileData.voice.availableMb  = "0";    
    profileData.voice.availablePercent  = "0";
    profileData.voice.registerCounter  = "0";
    profileData.voice.registers  = [];
    profileData.voice.latestExpirationDate  = "";
}

if (product == 'HBB+TF' || product == 'Movilidad'){
    var dataObject = JSON.parse(evalVoice());
    profileData.rs.severity = dataObject.severity;
    profileData.rs.diagnose  = dataObject.diagnose; 
    profileData.rs.availableMb  = dataObject.availableMb;    
    profileData.rs.availablePercent  = dataObject.availablePercent;
    profileData.rs.registerCounter  = dataObject.registerCounter;
    profileData.rs.registers  = dataObject.registers;
    profileData.rs.latestExpirationDate  = dataObject.latestExpirationDate;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sms
if (product.startsWith('HBB') || product == 'Mifi' || product == 'IoT'){
    
    profileData.sms.severity = "-1";
    profileData.sms.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF."; 
    profileData.sms.availableMb  = "0";    
    profileData.sms.availablePercent  = "0";
    profileData.sms.registerCounter  = "0";
    profileData.sms.registers  = [];
    profileData.sms.latestExpirationDate  = "";
}

if (product == 'Movilidad'){
    var dataObject = JSON.parse(evalSms());
    profileData.sms.severity = dataObject.severity;
    profileData.sms.diagnose  = dataObject.diagnose; 
    profileData.sms.availableMb  = dataObject.availableMb;    
    profileData.sms.availablePercent  = dataObject.availablePercent;
    profileData.sms.registerCounter  = dataObject.registerCounter;
    profileData.sms.registers  = dataObject.registers;
    profileData.sms.latestExpirationDate  = dataObject.latestExpirationDate;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//defaultOffer
if (product != 'Oferta por defecto'){
    profileData.defaultOffer.severity = "0";
    profileData.defaultOffer.value  = "NO";
    profileData.defaultOffer.diagnose  = "El UF ya cuenta con una oferta definitiva"; 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OfferNoB28
if (product.startsWith('HBB') || product == 'Mifi' || product == 'IoT'){
    profileData.OfferNoB28.severity = "-1";
    profileData.OfferNoB28.value  = "";
    profileData.OfferNoB28.diagnose  = "El diagnóstico no aplica para el producto que tiene el UF"; 
}

if (product == 'Movilidad'){
    //Verificar como obtener la oferta primaria
    profileData.OfferNoB28.severity = "";
    profileData.OfferNoB28.value  = "";
    profileData.OfferNoB28.diagnose  = "";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OfferNoRenewal
if (product != 'Oferta por defecto'){
    //Verificar como obtener la oferta primaria
    profileData.OfferNoRenewal.severity = "";
    profileData.OfferNoRenewal.value  = "";
    profileData.OfferNoRenewal.diagnose  = ""; 
}


context.setVariable("finalResponse", JSON.stringify(profileData));

//metodos utilitarios
function howMuchOffersAreVideo(){
    var knowingHowMuchOffersAreInOfferingNetworkSpeedAppVideo = 0;
    var speedValue = "0";
    if(offers.length>0){
        for(var c = 0; c<offers.length; c++){
            if(JSON.stringify(offers[c]) !== 'null'){
                for (var d = 0; d<offeringSpeedVideoL1.length; d++){
                    var offeringSpeedVideoL2 = offeringSpeedVideoL1[d].split('=');
                    if(offers[c].offeringId == offeringSpeedVideoL2[0]){
                        knowingHowMuchOffersAreInOfferingNetworkSpeedAppVideo++;
                        speedValue = offeringSpeedVideoL2[1];
                    }    
                    
                }    
            }
        }
    }
    return knowingHowMuchOffersAreInOfferingNetworkSpeedAppVideo.toString()+"|"+speedValue
}

function evaluateThrottling(){
    var throttlingData = "1|NO|El servicio se encuentra operando a la velocidad normal contratada."
    if(throttlingOffers.length>0){
        for(var c = 0; c<throttlingOffers.length; c++){
            if(JSON.stringify(throttlingOffers[c]) !== 'null'){
                if(throttlingOffers[c].initialAmt  != throttlingOffers[c].initialAmt){
                    throttlingData = "2|SI|El servicio se encontraba o se encuentra operando a una velocidad reducida. Revise que cuenta con Mb en sus bolsas."
                    break;
                }
            }
        }
    }
    return throttlingData;
}

function evaluateSva(){
    var svaData = "1|N/A|La línea no cuenta con ofertas de Servicio de Valor Agregado"
    var valuesSva = "";
    if(offers.length>0){
        for(var c = 0; c<offers.length; c++){
            if(JSON.stringify(offers[c]) !== 'null'){
                if(Number(offers[c].offeringId.substring(5,7))==6 && Number(offers[c].offeringId.substring(8,10))==9){
                    valuesSva+= offers[c].offeringId+"-"+offers[c].serviceType+" |"; //Ir al catalogo de ofertas para obtener el valor del nombre de la oferta           
                }       
                svaDataSeverity = "1";
                svaDataValue=valuesSva.substring(0, valuesSva.length - 1);
                svaDataDiagnose= "La línea cuenta con ofertas de Servicio de Valor Agregado";
            }
        }
    }
    return svaData;
}

function evalData(){
    var dataData = {};
    var availableAmtSum = 0;
    var numOfRegisters = 0;
    var initialAmtSum = 0;
    var latestExpirationDate = 0;
    var availableMbInPercent = 0;

    dataData.severity = '';
    dataData.diagnose = '';
    dataData.registers =[];
    registers = {};
    if(offers.length>0){
        for(var c = 0; c<offers.length; c++){
            if(JSON.stringify(offers[c]) !== 'null'){
                if(offers[c].serviceType=='Datos'){
                    
                    registers.unusedAmt = offers[c].availableAmt;
                    registers.totalAmt = offers[c].initialAmt;
                    registers.expipreDate = offers[c].expireEffectiveDate;
                    registers.leyend = offers[c].availableAmt+" Mb disponibles de un total de "+offers[c].initialAmt+" Mb";
                    dataData.registers.push(registers);
                    availableAmtSum+=Number(offers[c].availableAmt);
                    initialAmtSum+=Number(offers[c].initialAmt);
                    numOfRegisters++;

                    if(Number(offers[c].expireEffectiveDate)>latestExpirationDate){
                        latestExpirationDate = Number(offers[c].expireEffectiveDate);
                    }
                }
            }
        }

        availableMbInPercent = (availableAmtSum*100)/initialAmtSum;

        if((availableAmtSum - 30) > (initialAmtSum * 0.5)){
            dataData.severity = "0";
            dataData.diagnose = "Aún cuenta con más del 50% de Mb disponibles";
        }

        if(((availableAmtSum - 30) > (initialAmtSum * 0.2)) && ((availableAmtSum - 30) <= (initialAmtSum * 0.5))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 50% de Mb disponibles";
        }

        if(((availableAmtSum - 30) > (initialAmtSum * 0.01)) && ((availableAmtSum - 30) <= (initialAmtSum * 0.2))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 80% de Mb disponibles";
        }    

         if((availableAmtSum - 30) <= 0){
            dataData.severity = "3";
            dataData.diagnose = "No cuenta con Mb disponibles.";
        }
    }
    
    dataData.availableMb = availableAmtSum.toString();
    dataData.registerCounter = numOfRegisters.toString();
    dataData.availablePercent = availableMbInPercent.toString();
    dataData.latestExpirationDate = latestExpirationDate.toString();

    return JSON.stringify(dataData);   
}

function evalRs(){
    var dataData = {};
    var availableAmtSum = 0;
    var numOfRegisters = 0;
    var initialAmtSum = 0;
    var latestExpirationDate = 0;
    var availableMbInPercent = 0;

    dataData.severity = '';
    dataData.diagnose = '';
    dataData.registers = [];
    registers = {};
    if(offers.length>0){
        for(var c = 0; c<offers.length; c++){
            if(JSON.stringify(offers[c]) !== 'null'){
                if(offers[c].serviceType=='Redes Sociales'){
                    
                    registers.unusedAmt = offers[c].availableAmt;
                    registers.totalAmt = offers[c].initialAmt;
                    registers.expipreDate = offers[c].expireEffectiveDate;
                    registers.leyend = offers[c].availableAmt+" Mb disponibles de un total de "+offers[c].initialAmt+" Mb";
                    dataData.registers.push(registers);
                    availableAmtSum+=Number(offers[c].availableAmt);
                    initialAmtSum+=Number(offers[c].initialAmt);
                    numOfRegisters++;

                    if(Number(offers[c].expireEffectiveDate)>latestExpirationDate){
                        latestExpirationDate = Number(offers[c].expireEffectiveDate);
                    }
                }
            }
        }
        availableMbInPercent = (availableAmtSum*100)/initialAmtSum;

        if((availableAmtSum - 20) > (initialAmtSum * 0.5)){
            dataData.severity = "0";
            dataData.diagnose = "Aún cuenta con más del 50% de Mb disponibles";
        }

        if(((availableAmtSum - 20) > (initialAmtSum * 0.2)) && ((availableAmtSum - 30) <= (initialAmtSum * 0.5))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 50% de Mb disponibles";
        }

        if(((availableAmtSum - 20) > (initialAmtSum * 0.01)) && ((availableAmtSum - 30) <= (initialAmtSum * 0.2))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 80% de Mb disponibles";
        }    

         if((availableAmtSum - 20) <= 0){
            dataData.severity = "3";
            dataData.diagnose = "No cuenta con Mb disponibles.";
        }
    }
    
    dataData.availableMb = availableAmtSum.toString();
    dataData.registerCounter = numOfRegisters.toString();
    dataData.availablePercent = availableMbInPercent.toString();
    dataData.latestExpirationDate = latestExpirationDate.toString();
    return JSON.stringify(dataData);   
}

function evalVoice(){
    var dataData = {};
    var availableAmtSum = 0;
    var numOfRegisters = 0;
    var initialAmtSum = 0;
    var latestExpirationDate = 0;
    var availableMbInPercent = 0;

    dataData.severity = '';
    dataData.diagnose = '';
    dataData.registers = [];
    registers = {};
    if(offers.length>0){
        for(var c = 0; c<offers.length; c++){
            if(JSON.stringify(offers[c]) !== 'null'){
                if(offers[c].serviceType=='Voz'){
                    
                    registers.unusedAmt = offers[c].availableAmt;
                    registers.totalAmt = offers[c].initialAmt;
                    registers.expipreDate = offers[c].expireEffectiveDate;
                    registers.leyend = offers[c].availableAmt+" Mb disponibles de un total de "+offers[c].initialAmt+" Mb";
                    dataData.registers.push(registers);
                    availableAmtSum+=Number(offers[c].availableAmt);
                    initialAmtSum+=Number(offers[c].initialAmt);
                    numOfRegisters++;

                    if(Number(offers[c].expireEffectiveDate)>latestExpirationDate){
                        latestExpirationDate = Number(offers[c].expireEffectiveDate);
                    }
                }
            }
        }

        availableMbInPercent = (availableAmtSum*100)/initialAmtSum;

        if((availableAmtSum) > (initialAmtSum * 0.5)){
            dataData.severity = "0";
            dataData.diagnose = "Aún cuenta con más del 50% del total de minutos disponibles";
        }

        if(((availableAmtSum) > (initialAmtSum * 0.2)) && ((availableAmtSum) <= (initialAmtSum * 0.5))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 50% de Minutos disponibles";
        }

        if(((availableAmtSum) > (initialAmtSum * 0.01)) && ((availableAmtSum) <= (initialAmtSum * 0.2))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 80% de Minutos disponibles";
        }    

         if((availableAmtSum) <= 0){
            dataData.severity = "3";
            dataData.diagnose = "No cuenta con Minutos disponibles.";
        }
    }
    
    dataData.availableMb = availableAmtSum.toString();
    dataData.registerCounter = numOfRegisters.toString();
    dataData.availablePercent = availableMbInPercent.toString();
    dataData.latestExpirationDate = latestExpirationDate.toString();
    return JSON.stringify(dataData);   
}

function evalSms(){
    var dataData = {};
    var availableAmtSum = 0;
    var numOfRegisters = 0;
    var initialAmtSum = 0;
    var latestExpirationDate = 0;
    var availableMbInPercent = 0;

    dataData.severity = '';
    dataData.diagnose = '';
    dataData.registers = [];
    registers = {};
    if(offers.length>0){
        for(var c = 0; c<offers.length; c++){
            if(JSON.stringify(offers[c]) !== 'null'){
                if(offers[c].serviceType=='SMS'){
                    
                    registers.unusedAmt = offers[c].availableAmt;
                    registers.totalAmt = offers[c].initialAmt;
                    registers.expipreDate = offers[c].expireEffectiveDate;
                    registers.leyend = offers[c].availableAmt+" Mb disponibles de un total de "+offers[c].initialAmt+" Mb";
                    dataData.registers.push(registers);
                    availableAmtSum+=Number(offers[c].availableAmt);
                    initialAmtSum+=Number(offers[c].initialAmt);
                    numOfRegisters++;

                    if(Number(offers[c].expireEffectiveDate)>latestExpirationDate){
                        latestExpirationDate = Number(offers[c].expireEffectiveDate);
                    }
                }
            }
        }
        availableMbInPercent = (availableAmtSum*100)/initialAmtSum;

        if((availableAmtSum) > (initialAmtSum * 0.5)){
            dataData.severity = "0";
            dataData.diagnose = "Aún cuenta con más del 50% del total de SMS disponibles";
        }

        if(((availableAmtSum) > (initialAmtSum * 0.2)) && ((availableAmtSum) <= (initialAmtSum * 0.5))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 50% de SMS disponibles";
        }

        if(((availableAmtSum) > (initialAmtSum * 0.01)) && ((availableAmtSum) <= (initialAmtSum * 0.2))){
            dataData.severity = "2";
            dataData.diagnose = "Ha consumido más del 80% de SMS disponibles";
        }    

        if((availableAmtSum) <= 0){
            dataData.severity = "3";
            dataData.diagnose = "No cuenta con SMS disponibles.";
        }
    }
    
    dataData.availableMb = availableAmtSum.toString();
    dataData.registerCounter = numOfRegisters.toString();
    dataData.availablePercent = availableMbInPercent.toString();
    dataData.latestExpirationDate = latestExpirationDate.toString();
    return JSON.stringify(dataData);   
}