
var startDate = context.getVariable("startDate");
startDate = (typeof(startDate) !== undefined && startDate !== null && startDate !== "" ) ? startDate.toString() : '';
var endDate =  context.getVariable("endDate");
endDate = (typeof(endDate) !== undefined && endDate !== null && endDate !== "" ) ? endDate.toString() : '';
var formatDate = "YYYYMMDDHH";
var today = moment().tz("America/Mexico_City").format(formatDate);




if(startDate !== '' && endDate !== ''){
    
    stringToDate();
    
    if(!validateStartEndDate()){
        context.setVariable("errorCode", "400");
        context.setVariable("description", "Incorrect dates. The dates should be before than today and startDate should be before than endDate");
        context.setVariable("verifyDate", "false");
    }
}

if((startDate === '' && endDate !== '') || (startDate !== '' && endDate === '')){
    context.setVariable("errorCode", "400");
    context.setVariable("description", "Incorrect dates. The endDate should be before than today");
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
function validateStartLessToday(){
    if(startDate<= today){
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
