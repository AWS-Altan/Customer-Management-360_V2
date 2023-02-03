var msisdn = context.getVariable("msisdn");
var url = "http://34.229.166.166:8778/py-ms-subscriber/subscribers/";
context.setVariable("target.url", url.concat(msisdn.toString()).concat("/profile")); 