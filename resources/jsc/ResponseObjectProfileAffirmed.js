var responseObject = context.getVariable("responseObject");
var responseContentAffirmed = context.getVariable("responseGetProfileHssAffirmed.content");
var dataObject = JSON.parse(responseObject)

dataObject.affirmed = JSON.parse(responseContentAffirmed)
print(JSON.stringify(dataObject))
context.setVariable("responseObject", JSON.stringify(dataObject));

