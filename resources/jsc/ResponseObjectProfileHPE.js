var responseContentHpe = JSON.parse(context.getVariable("responseGetProfileHssHPE.content"));

print(typeof(responseContentHpe));
print(responseContentHpe);

var objHlr = {};
var objUmtsSubscriber = {};
var objPdpContext1 = {};
var objPdpContext2 = {};
var objEpsPdnContext1 = {};
var objEpsPdnContext2 = {};
var objEpsPdnContext3 = {};
var objVlrMobData = {};
var objSgsnMobData = {};
var objEps = {};
var objHss = {};
var objMnp = ((typeof(context.getVariable("rspHSS.mnp")!== 'undefined') && (context.getVariable("rspHSS.mnp")!== null) && (context.getVariable("rspHSS.mnp")!=="")))?JSON.parse(context.getVariable("rspHSS.mnp")):"";

print('objMnp');
print(objMnp);
print('objEps');
print(objEps);
print('objHss');
print(objHss);

var StatusCodePcrf = "";//context.getVariable("rspPCRF.result");
var dscImsi = "";//context.getVariable("rspPCRF.dscImsi");
print("dscImsi" + dscImsi);
print(typeof(dscImsi));
var dscNai = "";//context.getVariable("rspPCRF.dscNai");
var dscCategory = "";//context.getVariable("rspPCRF.dscCategory");
var dsCoverage = "";//context.getVariable("rspPCRF.dsCoverage");
var dscSubState = "";//context.getVariable("rspPCRF.dscSubState");
var dscSmsEnable = "";//context.getVariable("rspPCRF.dscSmsEnable");
var dscSubscriberProfileItem = "";//context.getVariable("rspPCRF.dscSubscriberProfileItem");


var pdp_ctx_cos_name_1_kvm = context.getVariable("pdp_ctx_cos_name_1_kvm");
var pdp_ctx_cos_name_2_kvm = context.getVariable("pdp_ctx_cos_name_2_kvm");
var apn_config_entry_name_1_kvm = context.getVariable("apn_config_entry_name_1_kvm");
var apn_config_entry_name_2_kvm = context.getVariable("apn_config_entry_name_2_kvm");
var apn_config_entry_name_3_kvm = context.getVariable("apn_config_entry_name_3_kvm");

var responseObject = {};
//Retirar-------------------------
if (StatusCodePcrf == "success"){
    responseObject.dscImsi = (typeof(dscImsi)!== 'undefined') && (typeof(dscImsi)!== null) ? dscImsi.toString():"";
    responseObject.dscNai = (typeof(dscNai)!== 'undefined') && (typeof(dscNai)!== null) ? dscNai.toString():"";
    responseObject.dscCategory = (typeof(dscCategory)!== 'undefined') && (typeof(dscCategory)!== null) ? dscCategory.toString():"";
    responseObject.dsCoverage = (typeof(dsCoverage)!== 'undefined') && (typeof(dsCoverage)!== null) ? dsCoverage.toString():"";
    responseObject.dscSubState = (typeof(dscSubState)!== 'undefined') && (typeof(dscSubState)!== null) ? dscSubState.toString():"";
    responseObject.dscSmsEnable = (typeof(dscSmsEnable)!== 'undefined') && (typeof(dscSmsEnable)!== null) ? dscSmsEnable.toString():"";
    responseObject.dscSubscriberProfileItem = (typeof(dscSubscriberProfileItem)!== 'undefined') && (typeof(dscSubscriberProfileItem)!== null)  ? dscSubscriberProfileItem.toString():"";
    responseObject.roamSubscriptionInfo = ((typeof(responseContentHpe.roam_restrict_name) !== 'undefined') && (responseContentHpe.roam_restrict_name!== null) && (responseContentHpe.roam_restrict_name!=="")) ? responseContentHpe.roam_restrict_name : "";
}
else{
    responseObject.dscImsi = "";
    responseObject.dscNai = "";
    responseObject.dscCategory = "";
    responseObject.dsCoverage = "";
    responseObject.dscSubState = "";
    responseObject.dscSmsEnable = "";
    responseObject.dscSubscriberProfileItem = "";
    responseObject.roamSubscriptionInfo = "";
    
}
//--------------------
var arrHlr = [];
objHlr.imsi = ((typeof(responseContentHpe.imsi) !== 'undefined') && (responseContentHpe.imsi!== null) && (responseContentHpe.imsi!=="")) ? responseContentHpe.imsi : "";
objHlr.imsiActive = ((typeof(responseContentHpe.attach_status) !== 'undefined') && (responseContentHpe.attach_status!== null) && (responseContentHpe.attach_status!=="")) ? responseContentHpe.attach_status : "";
arrHlr.push(objHlr);
responseObject.hlr = arrHlr;

var arrUmtsSubscriber = [];
objUmtsSubscriber.accTypeGSM = ((typeof(responseContentHpe.e_utran_allowed) !== 'undefined') && (responseContentHpe.e_utran_allowed!== null) && (responseContentHpe.e_utran_allowed!=="")) ? responseContentHpe.e_utran_allowed : "";
objUmtsSubscriber.accTypeGERAN = ((typeof(responseContentHpe.geran_allowed) !== 'undefined') && (responseContentHpe.geran_allowed!== null) && (responseContentHpe.geran_allowed!=="")) ? responseContentHpe.geran_allowed : "";
objUmtsSubscriber.accTypeUTRAN = ((typeof(responseContentHpe.utran_allowed) !== 'undefined') && (responseContentHpe.utran_allowed!== null) && (responseContentHpe.utran_allowed!=="")) ? responseContentHpe.utran_allowed : "";
arrUmtsSubscriber.push(objUmtsSubscriber);
responseObject.umtsSubscriber = arrUmtsSubscriber;

var arrPdpContext = [];
objPdpContext1.qosProfile = ((typeof(responseContentHpe.qos_cos_name_1) !== 'undefined') && (responseContentHpe.qos_cos_name_1!== null) && (responseContentHpe.qos_cos_name_1!=="")) ? responseContentHpe.qos_cos_name_1 : "";
objPdpContext1.apn = ((typeof(pdp_ctx_cos_name_1_kvm) !== 'undefined') && (pdp_ctx_cos_name_1_kvm!== null) && (pdp_ctx_cos_name_1_kvm!=="")) ? pdp_ctx_cos_name_1_kvm : "";
objPdpContext1.apnArea = ((typeof(responseContentHpe.hplmn_cos) !== 'undefined') && (responseContentHpe.hplmn_cos!== null) && (responseContentHpe.hplmn_cos!=="")) ? responseContentHpe.hplmn_cos : "";
arrPdpContext.push(objPdpContext1);

objPdpContext2.qosProfile = ((typeof(responseContentHpe.qos_cos_name_2) !== 'undefined') && (responseContentHpe.qos_cos_name_2!== null) && (responseContentHpe.qos_cos_name_2!=="")) ? responseContentHpe.qos_cos_name_2 : "";
objPdpContext2.apn = ((typeof(pdp_ctx_cos_name_2_kvm) !== 'undefined') && (pdp_ctx_cos_name_2_kvm!== null) && (pdp_ctx_cos_name_2_kvm!=="")) ? pdp_ctx_cos_name_2_kvm : "";
objPdpContext2.apnArea = ((typeof(responseContentHpe.hplmn_cos) !== 'undefined') && (responseContentHpe.hplmn_cos!== null) && (responseContentHpe.hplmn_cos!=="")) ? responseContentHpe.hplmn_cos : "";
arrPdpContext.push(objPdpContext2);
responseObject.pdpContext = arrPdpContext;

var arrEpsPdnContext = [];
objEpsPdnContext1.qos = ((typeof(responseContentHpe.eps_qos_cos_name_1) !== 'undefined') && (responseContentHpe.eps_qos_cos_name_1!== null) && (responseContentHpe.eps_qos_cos_name_1!=="")) ? responseContentHpe.eps_qos_cos_name_1 : "";
objEpsPdnContext1.apn = ((typeof(apn_config_entry_name_1_kvm) !== 'undefined') && (apn_config_entry_name_1_kvm!== null) && (apn_config_entry_name_1_kvm!=="")) ? apn_config_entry_name_1_kvm : "";
arrEpsPdnContext.push(objEpsPdnContext1);

objEpsPdnContext2.qos = ((typeof(responseContentHpe.eps_qos_cos_name_2) !== 'undefined') && (responseContentHpe.eps_qos_cos_name_2!== null) && (responseContentHpe.eps_qos_cos_name_2!=="")) ? responseContentHpe.eps_qos_cos_name_2 : "";
objEpsPdnContext2.apn = ((typeof(apn_config_entry_name_2_kvm) !== 'undefined') && (apn_config_entry_name_2_kvm!== null) && (apn_config_entry_name_2_kvm!=="")) ? apn_config_entry_name_2_kvm : "";
arrEpsPdnContext.push(objEpsPdnContext2);

objEpsPdnContext3.qos = ((typeof(responseContentHpe.eps_qos_cos_name_3) !== 'undefined') && (responseContentHpe.eps_qos_cos_name_3!== null) && (responseContentHpe.eps_qos_cos_name_3!=="")) ? responseContentHpe.eps_qos_cos_name_3 : "";
objEpsPdnContext3.apn = ((typeof(apn_config_entry_name_3_kvm) !== 'undefined') && (apn_config_entry_name_3_kvm!== null) && (apn_config_entry_name_3_kvm!=="")) ? apn_config_entry_name_3_kvm : "";
arrEpsPdnContext.push(objEpsPdnContext3);
responseObject.epsPdnContext = arrEpsPdnContext;

var arrVlrMobData = [];
objVlrMobData.vlrIdValid = ((typeof(responseContentHpe.gsm_ms_state_att) !== 'undefined') && (responseContentHpe.gsm_ms_state_att!== null) && (responseContentHpe.gsm_ms_state_att!=="")) ? responseContentHpe.gsm_ms_state_att : "";
objVlrMobData.isdnNumberOfVLR = ((typeof(responseContentHpe.serving_vlr_num) !== 'undefined') && (responseContentHpe.serving_vlr_num!== null) && (responseContentHpe.serving_vlr_num!=="")) ? responseContentHpe.serving_vlr_num : "";
objVlrMobData.mobileTerminatingCallPossible = ((typeof(responseContentHpe.baic) !== 'undefined') && (responseContentHpe.baic!== null) && (responseContentHpe.baic!=="")) ? responseContentHpe.baic : "";
objVlrMobData.plmnAllowed = ((typeof(responseContentHpe.gsm_ms_state_att) !== 'undefined') && (responseContentHpe.gsm_ms_state_att!== null) && (responseContentHpe.gsm_ms_state_att!=="")) ? responseContentHpe.gsm_ms_state_att : "";
objVlrMobData.roamingAreaAllowed = ((typeof(responseContentHpe.gsm_ms_state_att) !== 'undefined') && (responseContentHpe.gsm_ms_state_att!== null) && (responseContentHpe.gsm_ms_state_att!=="")) ? responseContentHpe.gsm_ms_state_att : "";
objVlrMobData.msPurged = ((typeof(responseContentHpe.purged_for_gsm) !== 'undefined') && (responseContentHpe.purged_for_gsm!== null) && (responseContentHpe.purged_for_gsm!=="")) ? responseContentHpe.purged_for_gsm : "";
objVlrMobData.mscNumber = ((typeof(responseContentHpe.serving_msc_num) !== 'undefined') && (responseContentHpe.serving_msc_num!== null) && (responseContentHpe.serving_msc_num!=="")) ? responseContentHpe.serving_msc_num : "";
arrVlrMobData.push(objVlrMobData);
responseObject.vlrMobData = arrVlrMobData;

var arrSgsnMobData = [];
objSgsnMobData.sgsnIdValid = ((typeof(responseContentHpe.ms_state_att) !== 'undefined') && (responseContentHpe.ms_state_att!== null) && (responseContentHpe.ms_state_att!=="")) ? responseContentHpe.ms_state_att : "";
objSgsnMobData.isdnNumberOfSGSN = ((typeof(responseContentHpe.serving_sgsn_num) !== 'undefined') && (responseContentHpe.serving_sgsn_num!== null) && (responseContentHpe.serving_sgsn_num!=="")) ? responseContentHpe.serving_sgsn_num : "";
objSgsnMobData.plmnAllowed = ((typeof(responseContentHpe.ms_state_att) !== 'undefined') && (responseContentHpe.ms_state_att!== null) && (responseContentHpe.ms_state_att!=="")) ? responseContentHpe.ms_state_att : "";
objSgsnMobData.roamingAreaAllowed = ((typeof(responseContentHpe.ms_state_att) !== 'undefined') && (responseContentHpe.ms_state_att!== null) && (responseContentHpe.ms_state_att!=="")) ? responseContentHpe.ms_state_att : "";
objSgsnMobData.gprsAllowed = ((typeof(responseContentHpe.gprs_subscription_enabled) !== 'undefined') && (responseContentHpe.gprs_subscription_enabled!== null) && (responseContentHpe.gprs_subscription_enabled!=="")) ? responseContentHpe.gprs_subscription_enabled : "";
arrSgsnMobData.push(objSgsnMobData);
responseObject.sgsnMobData = arrSgsnMobData;

var arrEps = [];
objEps.maxBandwidthUp = ((typeof(responseContentHpe.ambr_max_req_bandwidth_ul) !== 'undefined') && (responseContentHpe.ambr_max_req_bandwidth_ul!== null) && (responseContentHpe.ambr_max_req_bandwidth_ul!=="")) ? responseContentHpe.ambr_max_req_bandwidth_ul : "";
objEps.maxBandwidthDown = ((typeof(responseContentHpe.ambr_max_req_bandwidth_dl) !== 'undefined') && (responseContentHpe.ambr_max_req_bandwidth_dl!== null) && (responseContentHpe.ambr_max_req_bandwidth_dl!=="")) ? responseContentHpe.ambr_max_req_bandwidth_dl : "";
objEps.mmeIdentity = ((typeof(responseContentHpe.serving_mme_name) !== 'undefined') && (responseContentHpe.serving_mme_name!== null) && (responseContentHpe.serving_mme_name!=="")) ? responseContentHpe.serving_mme_name : "";
objEps.plmnStatus = ((typeof(responseContentHpe.attach_status) !== 'undefined') && (responseContentHpe.attach_status!== null) && (responseContentHpe.attach_status!=="")) ? responseContentHpe.attach_status : "";
objEps.mmeRealm = ((typeof(responseContentHpe.serving_mme_dest_realm) !== 'undefined') && (responseContentHpe.serving_mme_dest_realm!== null) && (responseContentHpe.serving_mme_dest_realm!=="")) ? responseContentHpe.serving_mme_dest_realm : "";
//print("imsi");
//print(responseContentHpe.imsi);
//print("imsi range");
//print((responseContentHpe.imsi).substring(0,8));
objEps.vplmnIdS6a = context.getVariable("vplmnIdS6a");
objEps.refDeviceProfileName = ((typeof(responseContentHpe.monte_rau_tau_timer) !== 'undefined') && (responseContentHpe.monte_rau_tau_timer!== null) && (responseContentHpe.monte_rau_tau_timer!=="")) ? responseContentHpe.monte_rau_tau_timer : "";
arrEps.push(objEps);
responseObject.eps = arrEps;

var arrHss = [];
objHss.scscfDestinationRealm = ((typeof(responseContentHpe.s_cscf_realm) !== 'undefined') && (responseContentHpe.s_cscf_realm!== null) && (responseContentHpe.s_cscf_realm!=="")) ? responseContentHpe.s_cscf_realm : "";
objHss.ccfPrimary = ((typeof(responseContentHpe.pri_chrg_coll_fn_name) !== 'undefined') && (responseContentHpe.pri_chrg_coll_fn_name!== null) && (responseContentHpe.pri_chrg_coll_fn_name!=="")) ? responseContentHpe.pri_chrg_coll_fn_name : "";
objHss.ccfSecondary = ((typeof(responseContentHpe.sec_chrg_coll_fn_name) !== 'undefined') && (responseContentHpe.sec_chrg_coll_fn_name!== null) && (responseContentHpe.sec_chrg_coll_fn_name!=="")) ? responseContentHpe.sec_chrg_coll_fn_name : "";
objHss.usedAuthenticationScheme = "";
arrHss.push(objHss);
responseObject.hss = arrHss;

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


//responseObject.responseContentHpe = responseContentHpe;
context.setVariable("responseObject", JSON.stringify(responseObject));