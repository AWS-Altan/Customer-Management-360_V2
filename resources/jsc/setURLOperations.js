var queryStringPairs = context.getVariable("request.querystring");
var msisdn = context.getVariable("msisdn");
print(queryStringPairs)

var url = "http://52.86.21.42:8778/py-ms-subscriber-hist-info/subscribers/";
context.setVariable("target.url", url.concat(msisdn.toString()).concat("/operations?").concat(queryStringPairs)); 