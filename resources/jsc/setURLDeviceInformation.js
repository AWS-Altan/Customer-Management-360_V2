var queryStringPairs = context.getVariable("request.querystring");
var msisdn = context.getVariable("msisdn");
print(queryStringPairs)

var url = "http://34.237.230.77:8888/ms-device-manager/subscribers/"
context.setVariable("target.url", url.concat(msisdn.toString()).concat("?").concat("/deviceInformation").concat(queryStringPairs)); 