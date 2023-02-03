var queryStringPairs = context.getVariable("request.querystring");
print(queryStringPairs)

var url = "http://18.207.12.184:8090/identifySubscriber";
context.setVariable("target.url", url.concat("?").concat(queryStringPairs)); 