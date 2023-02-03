var reportMode = context.getVariable("reportMode");
var startDate = context.getVariable("startDate");
var endDate =  context.getVariable("endDate");
var proxyName =  context.getVariable("proxy.pathsuffix");
var formatDate = "YYYYMMDDHH";
var today = moment().tz("America/Mexico_City").format(formatDate);

print('proxyName::' + proxyName);


if(reportMode == "true"){
    if((typeof(startDate !== 'undefined') && startDate !== null && startDate !== "" ) && (typeof(endDate !== 'undefined') && endDate !== null && endDate !== "" )){
        
        stringToDate();
        
        if(validateStartEndDate() && validateStartLessToday()){
            context.setVariable("startDate", startDate);
            context.setVariable("endDate", endDate);
            context.setVariable("verifyDate", "true");
        }
        else{
            context.setVariable("errorCode", "400");
            context.setVariable("description", "Incorrect dates. The dates should be before than today and startDate should be before than endDate");
            context.setVariable("verifyDate", "false");
        }
        if(validateEndDate() === false){
            context.setVariable("errorCode", "400");
            context.setVariable("description", "Incorrect dates. The endDate should be before than today");
            context.setVariable("verifyDate", "false");
        }
        
        if (proxyName.indexOf("recordActionsByMobility")>=0){
            if(getRangeInDays(startDate, endDate) > 7 ){
                context.setVariable("errorCode", "400");
                context.setVariable("description", "Dates range not allowed");
                context.setVariable("verifyDate", "false");
            }
        }else{
            if(getRangeInDays(startDate, endDate) > 7 ){
                context.setVariable("errorCode", "400");
                context.setVariable("description", "Dates range not allowed");
                context.setVariable("verifyDate", "false");
            }
        }
        
        if(getRangeInDays(startDate, today) > 33 ){
            context.setVariable("errorCode", "400");
            context.setVariable("description", "startDate must be up to 33 days ago");
            context.setVariable("verifyDate", "false");
        }
    }
    else{
        context.setVariable("errorCode", "400");
        context.setVariable("description", "The starDate/endDate is incorrect.");
        context.setVariable("verifyDate", "false");
    }
}
if(reportMode == "false"){
    if((typeof(startDate !== 'undefined') && startDate !== null && startDate !== "" ) && (typeof(endDate !== 'undefined') && endDate !== null && endDate !== "" )){
        stringToDate();
        if(validateStartEndDate() && validateStartLessToday()){
            if(getRangeInDays(startDate, today) <= 33 ){
                if(getRangeInDays(startDate, endDate) <= 7 ){
                    context.setVariable("startDate", startDate);
                    context.setVariable("endDate", endDate);
                    context.setVariable("verifyDate", "true");
                }else{
                    context.setVariable("errorCode", "400");
                    context.setVariable("description", "Dates range not allowed between startDate and endDate must be up to 7 days");
                    context.setVariable("verifyDate", "false");
                }
            }else{
                context.setVariable("errorCode", "400");
                context.setVariable("description", "startDate must be up to 33 days ago");
                context.setVariable("verifyDate", "false");
            }
        }
        else{
            context.setVariable("errorCode", "400");
            context.setVariable("description", "Incorrect dates. The dates should be before than today and startDate should be before than endDate");
            context.setVariable("verifyDate", "false");
        }
        if(validateEndDate() === false){
            context.setVariable("errorCode", "400");
            context.setVariable("description", "Incorrect dates. The endDate should be before than today");
            context.setVariable("verifyDate", "false");
        }
    }
    else{
        if(typeof(startDate !== 'undefined') && startDate !== null && startDate !== ""){
            
            if(validateStartLessToday()){
                context.setVariable("startDate", startDate);
                context.setVariable("verifyDate", "true");
            }else{
                context.setVariable("errorCode", "400");
                context.setVariable("description", "Incorrect dates. The dates should be before than today and startDate should be before than endDate");
                context.setVariable("verifyDate", "false");
            }
        }else{
            if(typeof(endDate !== 'undefined') && endDate !== null && endDate !== ""){
                var finalStartDate = moment(endDate, formatDate).subtract(7, 'days').format(formatDate); 
                context.setVariable("startDate", finalStartDate);
                context.setVariable("verifyDate", "true");
                startDate = finalStartDate;
            }else{
                var finalStartDate = moment().tz("America/Mexico_City").subtract(7, 'days').format(formatDate); 
                context.setVariable("startDate", finalStartDate);
                context.setVariable("verifyDate", "true");
            }
        }
        if(typeof(endDate !== 'undefined') && endDate !== null && endDate !== ""){
            if(validateEndDate() === false){
                context.setVariable("errorCode", "400");
                context.setVariable("description", "Incorrect dates. The endDate should be before than today");
                context.setVariable("verifyDate", "false");
            }else{
                if (getRangeInDays(startDate, today) <= 33 ){
                    context.setVariable("endDate", endDate);
                    context.setVariable("verifyDate", "true");
                }else{
                    context.setVariable("errorCode", "400");
                    context.setVariable("description", "endDate must be up to 26 days ago");
                    context.setVariable("verifyDate", "false");
                }
            }
        }
        else{
            if(typeof(startDate !== 'undefined') && startDate !== null && startDate !== ""){
                if(validateStartLessToday()){
                    if(getRangeInDays(startDate, today) <= 33 ){
                        context.setVariable("startDate", startDate);
                        context.setVariable("verifyDate", "true");
                        var finalEndDate = moment(startDate, formatDate).add(7, 'days').format(formatDate);
                        if(finalEndDate>today){
                            context.setVariable("endDate", today);
                        }else{
                        context.setVariable("endDate", finalEndDate);
                        }
                    }else{
                        context.setVariable("errorCode", "400");
                        context.setVariable("description", "startDate must be up to 33 days ago");
                        context.setVariable("verifyDate", "false");
                    }
                }
                else{
                    context.setVariable("errorCode", "400");
                    context.setVariable("description", "Incorrect dates. The dates should be before than today");
                    context.setVariable("verifyDate", "false");
                }
                
            }else{
            context.setVariable("endDate", today);
            }
        }
    }
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
