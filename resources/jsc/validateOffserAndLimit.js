var page = context.getVariable("page");
var limit = context.getVariable("limit");



if ( typeof(page) === 'undefined' || page === null || page === ""){
     context.setVariable("offsetValue", "false");
     context.setVariable("errorMessage.status", "400");
     context.setVariable("errorMessage.code", "400");
     context.setVariable("errorMessage.message", "The request sent is incorrect. Field page is mandatory");
 }else{
     context.setVariable("page", page);
     }


if (typeof(limit) === 'undefined' || limit === null || limit === ""){
    context.setVariable("limitValue", "false");
    context.setVariable("errorMessage.status", "400");
    context.setVariable("errorMessage.code", "400");
    context.setVariable("errorMessage.message", "The request sent is incorrect. Field limit is mandatory");
 }else{
     context.setVariable("limit", limit);
     }