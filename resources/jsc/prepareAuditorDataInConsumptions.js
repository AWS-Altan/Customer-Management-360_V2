var mvno = context.getVariable("mvno");

try{
    var data = buildDataObject(mvno);
    context.setVariable("Auditor.data", JSON.stringify(data));
}catch(e){
    var data = {}
    data.error = e.toString();
    context.setVariable("Auditor.data", JSON.stringify(data));
}

function buildDataObject(mvno){
    var data = {};
    data.mvno = mvno;
    data.method = "POST";
    data.url = "12d0s7vf6b.execute-api.us-east-1.amazonaws.com/Prod/umbrales";
    return data;
}