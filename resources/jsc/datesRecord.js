var reportMode = context.getVariable("reportMode");
var startDate = context.getVariable("startDate");
var endDate =  context.getVariable("endDate");
var formatDate = "YYYYMMDDHH";
var today = moment().tz("America/Mexico_City").format(formatDate);



if((typeof(startDate !== 'undefined') && startDate !== null && startDate !== "" ) && (typeof(endDate !== 'undefined') && endDate !== null && endDate !== "" )){
    
    stringToDate();
    
    if(validateStartEndDate()){
        context.setVariable("startDate", startDate);
        context.setVariable("endDate", endDate);
        context.setVariable("verifyDate", "true");
    }
    else{
        context.setVariable("errorCode", "400");
        context.setVariable("description", "Incorrect dates. The endDate shouldn't be before than startDate");
        context.setVariable("verifyDate", "false");
    }
    if(validateEndDate() === false){
        context.setVariable("errorCode", "400");
        context.setVariable("description", "Incorrect dates. The endDate should be before than today");
        context.setVariable("verifyDate", "false");
    }
    if(getRangeInDays(startDate, endDate) > 90 ){
        context.setVariable("errorCode", "400");
        context.setVariable("description", "Dates range not allowed");
        context.setVariable("verifyDate", "false");
    }
}
else{
    context.setVariable("errorCode", "400");
    context.setVariable("description", "The starDate/endDate is incorrect.");
    context.setVariable("verifyDate", "false");
}

function stringToDate(){
    startDate = startDate.toString();
    startDate = moment(startDate, formatDate).format(formatDate);
    endDate = endDate.toString();
    endDate = moment(endDate, formatDate).format(formatDate);
}
function validateStartEndDate(){
    if(startDate <= endDate){
        return true;
    }else{
        return false;
    }
}
function validateEndDate(){
    if(endDate<= today){
        return true;
    }else{
        return false;
    }
}
function getRangeInDays(fechaStart, fechaEnd){
        var year = fechaStart.substr(0,4);
        var mes = fechaStart.substr(4,2);
        var dia = fechaStart.substr(6,2);
        
        var yearEnd = fechaEnd.substr(0,4);
        var mesEnd = fechaEnd.substr(4,2);
        var diaEnd = fechaEnd.substr(6,2);
        
        var fechaStartDate = new Date(year,mes-1,dia);
        var fechaEndDate = new Date(yearEnd,mesEnd-1,diaEnd);
    return ((fechaEndDate.getTime()-fechaStartDate.getTime() ) / 86400000);
}
