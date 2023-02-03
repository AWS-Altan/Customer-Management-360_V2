 var responseObject = {
	"dscImsi": "",
	"dscNai": "",
	"dscCategory": "",
	"dsCoverage": "",
	"dscSubState": "",
	"dscSmsEnable": "",
	"dscSubscriberProfileItem": "",
	"roamSubscriptionInfo": "",
	"hlr": [{
		"imsi": "",
		"imsiActive": ""
	}],
	"umtsSubscriber": [{
		"accTypeGSM": "",
		"accTypeGERAN": "",
		"accTypeUTRAN": ""
	}],
	"pdpContext": [{
			"qosProfile": "",
			"apn": "",
			"apnArea": ""
		},
		{
			"qosProfile": "",
			"apn": "",
			"apnArea": ""
		}
	],
	"epsPdnContext": [{
			"qos": "",
			"apn": ""
		},
		{
			"qos": "",
			"apn": ""
		},
		{
			"qos": "",
			"apn": ""
		}
	],
	"vlrMobData": [{
		"vlrIdValid": "",
		"isdnNumberOfVLR": "",
		"mobileTerminatingCallPossible": "",
		"plmnAllowed": "",
		"roamingAreaAllowed": "",
		"msPurged": "",
		"mscNumber": ""
	}],
	"sgsnMobData": [{
		"sgsnIdValid": "",
		"isdnNumberOfSGSN": "",
		"plmnAllowed": "",
		"roamingAreaAllowed": "",
		"gprsAllowed": ""
	}],
	"eps": [{
		"maxBandwidthUp": "",
		"maxBandwidthDown": "",
		"mmeIdentity": "",
		"plmnStatus": "",
		"mmeRealm": "",
		"vplmnIdS6a": "",
		"refDeviceProfileName": ""
	}],
	"hss": [{
		"scscfDestinationRealm": "",
		"ccfPrimary": "",
		"ccfSecondary": "",
		"usedAuthenticationScheme": ""
	}]
}

context.setVariable("responseObject", JSON.stringify(responseObject));