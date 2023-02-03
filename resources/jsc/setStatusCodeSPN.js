var responseContent = context.getVariable("response.content");
var respHttpStatusCode = context.getVariable("response.status.code");
var statusCode = responseContent.statusCode;
var auditorData = {};
var objResponseContent =JSON.parse(responseContent);
var respContentStatusResult = objResponseContent.body;
var objResponseContentBody =JSON.parse(respContentStatusResult);
var objResponseContentResult = objResponseContentBody.result;

context.setVariable("result", objResponseContentResult);