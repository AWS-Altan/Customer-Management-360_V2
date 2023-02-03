var imsi = ((typeof(context.getVariable("rspHSS.imsi")) !== 'undefined') && (context.getVariable("rspHSS.imsi")!== null) && (context.getVariable("rspHSS.imsi")!=="")) ? context.getVariable("rspHSS.imsi") : "";//Si es diferente de indefinido, tómala
var roamSubscriptionInfo = ((typeof(context.getVariable("rspHSS.roamSubscriptionInfo")) !== 'undefined')&& (context.getVariable("rspHSS.roamSubscriptionInfo")!== null) && (context.getVariable("rspHSS.roamSubscriptionInfo")!=="")) ? context.getVariable("rspHSS.roamSubscriptionInfo") : "";
var objHlr = ((typeof(context.getVariable("rspHSS.hlr")!== 'undefined') && (context.getVariable("rspHSS.hlr")!== null) && (context.getVariable("rspHSS.hlr")!=="")))?JSON.parse(context.getVariable("rspHSS.hlr")):"";
var objUmtsSubscriber = ((typeof(context.getVariable("rspHSS.umtsSubscriber")!== 'undefined') && (context.getVariable("rspHSS.umtsSubscriber")!== null) && (context.getVariable("rspHSS.umtsSubscriber")!=="")))?JSON.parse(context.getVariable("rspHSS.umtsSubscriber")):"";
var objPdpContext = ((typeof(context.getVariable("rspHSS.pdpContext")!== 'undefined') && (context.getVariable("rspHSS.pdpContext")!== null) && (context.getVariable("rspHSS.pdpContext")!=="")))?JSON.parse(context.getVariable("rspHSS.pdpContext")):"";
var objEpsPdnContext = ((typeof(context.getVariable("rspHSS.epsPdnContext")!== 'undefined') && (context.getVariable("rspHSS.epsPdnContext")!== null) && (context.getVariable("rspHSS.epsPdnContext")!=="")))?JSON.parse(context.getVariable("rspHSS.epsPdnContext")):"";
var objVlrMobData = ((typeof(context.getVariable("rspHSS.vlrMobData")!== 'undefined') && (context.getVariable("rspHSS.vlrMobData")!== null) && (context.getVariable("rspHSS.vlrMobData")!=="")))?JSON.parse(context.getVariable("rspHSS.vlrMobData")):"";
var objSgsnMobData = ((typeof(context.getVariable("rspHSS.sgsnMobData")!== 'undefined') && (context.getVariable("rspHSS.sgsnMobData")!== null) && (context.getVariable("rspHSS.sgsnMobData")!=="")))?JSON.parse(context.getVariable("rspHSS.sgsnMobData")):"";
var objEps = ((typeof(context.getVariable("rspHSS.eps")!== 'undefined') && (context.getVariable("rspHSS.eps")!== null) && (context.getVariable("rspHSS.eps")!=="")))?JSON.parse(context.getVariable("rspHSS.eps")):"";
var objHss = ((typeof(context.getVariable("rspHSS.hss")!== 'undefined') && (context.getVariable("rspHSS.hss")!== null) && (context.getVariable("rspHSS.hss")!=="")))?JSON.parse(context.getVariable("rspHSS.hss")):"";
var objMnp = ((typeof(context.getVariable("rspHSS.mnp")!== 'undefined') && (context.getVariable("rspHSS.mnp")!== null) && (context.getVariable("rspHSS.mnp")!=="")))?JSON.parse(context.getVariable("rspHSS.mnp")):"";


var dscImsi = "";//context.getVariable("rspPCRF.dscImsi");
var dscNai = "";//context.getVariable("rspPCRF.dscNai");
var dscCategory = "";//context.getVariable("rspPCRF.dscCategory");
var dsCoverage = "";// context.getVariable("rspPCRF.dsCoverage");
var dscSubState = "";// context.getVariable("rspPCRF.dscSubState");
var dscSmsEnable = "";// context.getVariable("rspPCRF.dscSmsEnable");
var dscSubscriberProfileItem = "";// context.getVariable("rspPCRF.dscSubscriberProfileItem");

var responseObject = {};

    responseObject.dscImsi = (typeof(dscImsi)!== 'undefined') ? dscImsi.toString():"";
    responseObject.dscNai = (typeof(dscNai)!== 'undefined') ? dscNai.toString():"";
    responseObject.dscCategory = (typeof(dscCategory)!== 'undefined') ? dscCategory.toString():"";
    responseObject.dsCoverage = (typeof(dsCoverage)!== 'undefined') ? dsCoverage.toString():"";
    responseObject.dscSubState = (typeof(dscSubState)!== 'undefined') ? dscSubState.toString():"";
    responseObject.dscSmsEnable = (typeof(dscSmsEnable)!== 'undefined') ? dscSmsEnable.toString():"";
    responseObject.dscSubscriberProfileItem = (typeof(dscSubscriberProfileItem)!== 'undefined') ? dscSubscriberProfileItem.toString():"";
    responseObject.roamSubscriptionInfo = roamSubscriptionInfo;

    print("objHlr: " + JSON.stringify(objHlr));
    print("objEps: " + JSON.stringify(objEps));
    if (objHlr !== ""){
        var imsiActive = [];
        if(Array.isArray(objHlr)){
            for(var i = 0; i < objHlr.length; i++){
                var objHlrObj = {};
                objHlrObj.imsi = (typeof(imsi)!== 'undefined') ? imsi.toString():"";
                objHlrObj.imsiActive = (typeof(objHlr[i].isActiveIMSI)!== 'undefined') ? objHlr[i].isActiveIMSI.toString():"";
                imsiActive.push(objHlrObj);
            }
            responseObject.hlr = imsiActive;
        }else{
            var objHlrObj = {};
            print('imsiActive: ' + objHlr.isActiveIMSI);
            objHlrObj.imsi = (typeof(imsi)!== 'undefined') ? imsi.toString():"";
            objHlrObj.imsiActive = (typeof(objHlr.isActiveIMSI)!== 'undefined') ? objHlr.isActiveIMSI.toString():"";
            imsiActive.push(objHlrObj);
            responseObject.hlr = imsiActive;
        }
    }else{
        var imsiActive = [];
        var objHlrObj = {};
            objHlrObj.imsi = (typeof(imsi)!== 'undefined') ? imsi.toString():"";
            objHlrObj.imsiActive = (typeof(objHlr.isActiveIMSI)!== 'undefined') ? objHlr.isActiveIMSI.toString():"";
            imsiActive.push(objHlrObj);
            responseObject.hlr = imsiActive;
    }
    
    
    if (objUmtsSubscriber !== ""){
        var umtsSubscriber = [];
        if(Array.isArray(objUmtsSubscriber)){
            for(var i = 0; i < objUmtsSubscriber.length; i++){
                var umtsSubscriberObj = {};
                umtsSubscriberObj.accTypeGSM = (typeof(objUmtsSubscriber[i].accTypeGSM)!== 'undefined') ? objUmtsSubscriber[i].accTypeGSM.toString():"";
                umtsSubscriberObj.accTypeGERAN = (typeof(objUmtsSubscriber[i].accTypeGERAN)!== 'undefined') ? objUmtsSubscriber[i].accTypeGERAN.toString():"";
                umtsSubscriberObj.accTypeUTRAN = (typeof(objUmtsSubscriber[i].accTypeUTRAN)!== 'undefined') ? objUmtsSubscriber[i].accTypeUTRAN.toString():"";
                umtsSubscriber.push(umtsSubscriberObj);
            }
            responseObject.umtsSubscriber = umtsSubscriber;
        }else{
            var umtsSubscriberObj = {};
            umtsSubscriberObj.accTypeGSM = (typeof(objUmtsSubscriber.accTypeGSM)!== 'undefined') ? objUmtsSubscriber.accTypeGSM.toString():"";
            umtsSubscriberObj.accTypeGERAN = (typeof(objUmtsSubscriber.accTypeGERAN)!== 'undefined') ? objUmtsSubscriber.accTypeGERAN.toString():"";
            umtsSubscriberObj.accTypeUTRAN = (typeof(objUmtsSubscriber.accTypeUTRAN)!== 'undefined') ?objUmtsSubscriber.accTypeUTRAN.toString():"";
            umtsSubscriber.push(umtsSubscriberObj);
            responseObject.umtsSubscriber = umtsSubscriber;
        }
        
        
    }else{
        responseObject.umtsSubscriber = [];
    }
    
    
    if (objPdpContext !== ""){
        var pdpContext = [];
        if(Array.isArray(objPdpContext)){
            for(var i = 0; i < objPdpContext.length; i++){
                var pdpContextObj = {};
                pdpContextObj.qosProfile = (typeof(objPdpContext[i].qosProfile)!== 'undefined') ? objPdpContext[i].qosProfile.toString():"";
                pdpContextObj.apn = (typeof(objPdpContext[i].apn)!== 'undefined') ? objPdpContext[i].apn.toString():"";
                pdpContextObj.apnArea = (typeof(objPdpContext[i].apnArea)!== 'undefined') ? objPdpContext[i].apnArea.toString():"";
                pdpContext.push(pdpContextObj);
            }
            responseObject.pdpContext = pdpContext;
            
        }else{
            var pdpContextObj = {};
            pdpContextObj.qosProfile = (typeof(objPdpContext.qosProfile)!== 'undefined') ? objPdpContext.qosProfile.toString():"";
            pdpContextObj.apn = (typeof(objPdpContext.apn)!== 'undefined') ? objPdpContext.apn.toString():"";
            pdpContextObj.apnArea = (typeof(objPdpContext.apnArea)!== 'undefined') ? objPdpContext.apnArea.toString():"";
            pdpContext.push(pdpContextObj);
            responseObject.pdpContext = pdpContext;   
        }
        
    }else{
        responseObject.pdpContext =[];
    }

    if (objEpsPdnContext !== ""){
        var epsPdnContext = [];
        if(Array.isArray(objEpsPdnContext)){
            for(var i = 0; i < objEpsPdnContext.length; i++){
                var epsPdnContextObj = {};
                epsPdnContextObj.qos = (typeof(objEpsPdnContext[i].qos)!== 'undefined') ? objEpsPdnContext[i].qos.toString():"";
                epsPdnContextObj.apn = (typeof(objEpsPdnContext[i].apn)!== 'undefined') ? objEpsPdnContext[i].apn.toString():"";
                epsPdnContext.push(epsPdnContextObj);
            }
            responseObject.epsPdnContext = epsPdnContext;
            
        }else{
            var epsPdnContextObj = {};
            epsPdnContextObj.qos = (typeof(objEpsPdnContext.qos)!== 'undefined') ? objEpsPdnContext.qos.toString():"";
            epsPdnContextObj.apn = (typeof(objEpsPdnContext.apn)!== 'undefined') ? objEpsPdnContext.apn.toString():"";
            epsPdnContext.push(epsPdnContextObj);
            responseObject.epsPdnContext = epsPdnContext;   
        }
        
    }else{
        responseObject.epsPdnContext =[];
    }
    
    
    if (objVlrMobData !== ""){
        var vlrMobData = [];
        if(Array.isArray(objVlrMobData)){
            for(var i = 0; i < objVlrMobData.length; i++){
                var vlrMobDataObj = {};
                vlrMobDataObj.vlrIdValid = (typeof(objVlrMobData[i].vlrIdValid)!== 'undefined') ? objVlrMobData[i].vlrIdValid.toString():"";
                vlrMobDataObj.isdnNumberOfVLR = (typeof(objVlrMobData[i].isdnNumberOfVLR)!== 'undefined') ? objVlrMobData[i].isdnNumberOfVLR.toString():"";
                vlrMobDataObj.mobileTerminatingCallPossible = (typeof(objVlrMobData[i].mobileTerminatingCallPossible)!== 'undefined') ? objVlrMobData[i].mobileTerminatingCallPossible.toString():"";
                vlrMobDataObj.plmnAllowed = (typeof(objVlrMobData[i].plmnAllowed)!== 'undefined') ? objVlrMobData[i].plmnAllowed.toString():"";
                vlrMobDataObj.roamingAreaAllowed = (typeof(objVlrMobData[i].roamingAreaAllowed)!== 'undefined') ? objVlrMobData[i].roamingAreaAllowed.toString():"";
                vlrMobDataObj.msPurged = (typeof(objVlrMobData[i].msPurged)!== 'undefined') ? objVlrMobData[i].msPurged.toString():"";
                vlrMobDataObj.mscNumber = (typeof(objVlrMobData[i].mscNumber)!== 'undefined') ? objVlrMobData[i].mscNumber.toString():"";
                vlrMobData.push(vlrMobDataObj);
            }
            responseObject.vlrMobData = vlrMobData;
            
        }else{
            var vlrMobDataObj = {};
            vlrMobDataObj.vlrIdValid = (typeof(objVlrMobData.vlrIdValid)!== 'undefined') ? objVlrMobData.vlrIdValid.toString():"";
            vlrMobDataObj.isdnNumberOfVLR = (typeof(objVlrMobData.isdnNumberOfVLR)!== 'undefined') ? objVlrMobData.isdnNumberOfVLR.toString():"";
            vlrMobDataObj.mobileTerminatingCallPossible = (typeof(objVlrMobData.mobileTerminatingCallPossible)!== 'undefined') ? objVlrMobData.mobileTerminatingCallPossible.toString():"";
            vlrMobDataObj.plmnAllowed = (typeof(objVlrMobData.plmnAllowed)!== 'undefined') ? objVlrMobData.plmnAllowed.toString():"";
            vlrMobDataObj.roamingAreaAllowed = (typeof(objVlrMobData.roamingAreaAllowed)!== 'undefined') ? objVlrMobData.roamingAreaAllowed.toString():"";
            vlrMobDataObj.msPurged = (typeof(objVlrMobData.msPurged)!== 'undefined') ? objVlrMobData.msPurged.toString():"";
            vlrMobDataObj.mscNumber = (typeof(objVlrMobData.mscNumber)!== 'undefined') ? objVlrMobData.mscNumber.toString():"";
            vlrMobData.push(vlrMobDataObj);
            responseObject.vlrMobData = vlrMobData;
        }
    
    }else{
        responseObject.vlrMobData = [];
    }
    
    
    if (objSgsnMobData !== ""){
        var sgsnMobData = [];
        if(Array.isArray(objSgsnMobData)){
            for(var i = 0; i < objSgsnMobData.length; i++){
                var sgsnMobDataObj = {};
                sgsnMobDataObj.sgsnIdValid = (typeof(objSgsnMobData[i].sgsnIdValid)!== 'undefined') ? objSgsnMobData[i].sgsnIdValid.toString():"";
                sgsnMobDataObj.isdnNumberOfSGSN = (typeof(objSgsnMobData[i].isdnNumberOfSGSN)!== 'undefined') ? objSgsnMobData[i].isdnNumberOfSGSN.toString():"";
                sgsnMobDataObj.plmnAllowed = (typeof(objSgsnMobData[i].plmnAllowed)!== 'undefined') ? objSgsnMobData[i].plmnAllowed.toString():"";
                sgsnMobDataObj.roamingAreaAllowed = (typeof(objSgsnMobData[i].roamingAreaAllowed)!== 'undefined') ? objSgsnMobData[i].roamingAreaAllowed.toString():"";
                sgsnMobDataObj.gprsAllowed = (typeof(objSgsnMobData[i].gprsAllowed)!== 'undefined') ? objSgsnMobData[i].gprsAllowed.toString():"";   
                sgsnMobData.push(sgsnMobDataObj);
            }
            responseObject.sgsnMobData = sgsnMobData;
            
        }else{
            var sgsnMobDataObj = {};
            sgsnMobDataObj.sgsnIdValid = (typeof(objSgsnMobData.sgsnIdValid)!== 'undefined') ? objSgsnMobData.sgsnIdValid.toString():"";
            sgsnMobDataObj.isdnNumberOfSGSN = (typeof(objSgsnMobData.isdnNumberOfSGSN)!== 'undefined') ? objSgsnMobData.isdnNumberOfSGSN.toString():"";
            sgsnMobDataObj.plmnAllowed = (typeof(objSgsnMobData.plmnAllowed)!== 'undefined') ? objSgsnMobData.plmnAllowed.toString():"";
            sgsnMobDataObj.roamingAreaAllowed = (typeof(objSgsnMobData.roamingAreaAllowed)!== 'undefined') ? objSgsnMobData.roamingAreaAllowed.toString():"";
            sgsnMobDataObj.gprsAllowed = (typeof(objSgsnMobData.gprsAllowed)!== 'undefined') ? objSgsnMobData.gprsAllowed.toString():"";
            sgsnMobData.push(sgsnMobDataObj);
            responseObject.sgsnMobData = sgsnMobData;
        }
        
    }else{
        responseObject.sgsnMobData = [];
    }
    
    
    if (objEps !== ""){
        var eps = [];
        if(Array.isArray(objEps)){
            for(var i = 0; i < objEps.length; i++){
                var epsObj = {}; 
                epsObj.maxBandwidthUp = (typeof(objEps[i].maxBandwidthUp)!== 'undefined') ? objEps[i].maxBandwidthUp.toString():"";
                epsObj.maxBandwidthDown = (typeof(objEps[i].maxBandwidthDown)!== 'undefined') ? objEps[i].maxBandwidthDown.toString():"";
                epsObj.mmeIdentity = (typeof(objEps[i].mmeIdentity)!== 'undefined') ? objEps[i].mmeIdentity.toString():"";
                epsObj.plmnStatus = (typeof(objEps[i].plmnStatus)!== 'undefined') ? objEps[i].plmnStatus.toString():"";
                epsObj.mmeRealm = (typeof(objEps[i].mmeRealm)!== 'undefined') ? objEps[i].mmeRealm.toString():"";
                epsObj.vplmnIdS6a = (typeof(objEps[i].vplmnIdS6a)!== 'undefined') ? objEps[i].vplmnIdS6a.toString():"";
				epsObj.refDeviceProfileName = (typeof(objEps[i].refDeviceProfileName)!== 'undefined') ? objEps[i].refDeviceProfileName.toString():"";
                eps.push(epsObj);
            }
            responseObject.eps = eps;
            
        }else{
            var epsObj = {};
            epsObj.maxBandwidthUp = (typeof(objEps.maxBandwidthUp)!== 'undefined') ? objEps.maxBandwidthUp.toString():"";
            epsObj.maxBandwidthDown = (typeof(objEps.maxBandwidthDown)!== 'undefined') ? objEps.maxBandwidthDown.toString():"";
            epsObj.mmeIdentity = (typeof(objEps.mmeIdentity)!== 'undefined') ? objEps.mmeIdentity.toString():"";
            epsObj.plmnStatus = (typeof(objEps.plmnStatus)!== 'undefined') ? objEps.plmnStatus.toString():"";
            epsObj.mmeRealm = (typeof(objEps.mmeRealm)!== 'undefined') ? objEps.mmeRealm.toString():"";
            epsObj.vplmnIdS6a = (typeof(objEps.vplmnIdS6a)!== 'undefined') ? objEps.vplmnIdS6a.toString():"";
			epsObj.refDeviceProfileName = (typeof(objEps.refDeviceProfileName)!== 'undefined') ? objEps.refDeviceProfileName.toString():"";
            eps.push(epsObj);
            responseObject.eps = eps;
        }
        
    }else{
        responseObject.eps = [];
    }

    
    if (objHss !== ""){
        var hss = [];
        if(Array.isArray(objHss)){
            for(var i = 0; i < objHss.length; i++){
                var hssObj = {};
                hssObj.scscfDestinationRealm = (typeof(objHss[i].scscfDestinationRealm)!== 'undefined') ? objHss[i].scscfDestinationRealm.toString():"";
                hssObj.ccfPrimary = (typeof(objHss[i].ccfPrimary)!== 'undefined') ? objHss[i].ccfPrimary.toString():"";
                hssObj.ccfSecondary = (typeof(objHss[i].ccfSecondary)!== 'undefined') ? objHss[i].ccfSecondary.toString():"";
                hssObj.usedAuthenticationScheme = (typeof(objHss[i].privateUserId)!== 'undefined' && typeof(objHss[i].privateUserId.usedAuthenticationScheme)!== 'undefined') ? objHss[i].privateUserId.usedAuthenticationScheme.toString():"";
                hss.push(hssObj);
            }
            responseObject.hss = hss;
            
        }else{
            var hssObj = {};
            hssObj.scscfDestinationRealm = (typeof(objHss.scscfDestinationRealm)!== 'undefined') ? objHss.scscfDestinationRealm.toString():"";
            hssObj.ccfPrimary = (typeof(objHss.ccfPrimary)!== 'undefined') ? objHss.ccfPrimary.toString():"";
            hssObj.ccfSecondary = (typeof(objHss.ccfSecondary)!== 'undefined') ? objHss.ccfSecondary.toString():"";
            hssObj.usedAuthenticationScheme = (typeof(objHss.privateUserId)!== 'undefined' && typeof(objHss.privateUserId.usedAuthenticationScheme)!== 'undefined') ? objHss.privateUserId.usedAuthenticationScheme.toString():"";
            hss.push(hssObj);
            responseObject.hss = hss;
        }
    }else{
        responseObject.hss = [];
        
    }  
    
    if (objMnp !== ""){
        var mnp = [];
        if(Array.isArray(objMnp)){
            for(var i = 0; i < objMnp.length; i++){
                var mnpObj = {};
                mnpObj.msisdn = (typeof(objMnp[i].portedMsisdn.msisdn)!== 'undefined') ? objMnp[i].portedMsisdn.msisdn.toString():"";
                mnpObj.imsi = (typeof(objMnp[i].portedMsisdn.imsi)!== 'undefined') ? objMnp[i].portedMsisdn.imsi.toString():"";
                mnpObj.portStatus = (typeof(objMnp[i].portedMsisdn.portStatus)!=='undefined') ? objMnp[i].portedMsisdn.portStatus.toString():"";
                mnpObj.routingLocation = (typeof(objMnp[i].portedMsisdn.routingLocation)!== 'undefined') ? objMnp[i].portedMsisdn.routingLocation.toString():"";
                mnp.push(mnpObj);
            }
            responseObject.mnp = mnp;
            
        }else{
            var mnpObj = {};
            mnpObj.msisdn = (typeof(objMnp.portedMsisdn.msisdn)!== 'undefined') ? objMnp.portedMsisdn.msisdn.toString():"";
            mnpObj.imsi = (typeof(objMnp.portedMsisdn.imsi)!== 'undefined') ? objMnp.portedMsisdn.imsi.toString():"";
            mnpObj.portStatus = (typeof(objMnp.portedMsisdn.portStatus)!=='undefined') ? objMnp.portedMsisdn.portStatus.toString():"";
            mnpObj.routingLocation = (typeof(objMnp.portedMsisdn.routingLocation)!== 'undefined') ? objMnp.portedMsisdn.routingLocation.toString():"";
            mnp.push(mnpObj);
            responseObject.mnp = mnp;
        }
    }else{
        responseObject.mnp = [
            {
                "msisdn": "",
                "portStatus": "",
                "routingLocation": ""
            }        
        ]
        
    }  

context.setVariable("responseObject", JSON.stringify(responseObject));

