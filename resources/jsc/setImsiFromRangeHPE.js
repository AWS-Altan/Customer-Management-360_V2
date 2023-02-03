var imsiResponse =context.getVariable("imsiResponse");
var product = context.getVariable("product");

print("product::"+ product+";");

print("IMSI: "+ imsiResponse);

if(typeof(imsiResponse) !== 'undefined' && imsiResponse !== null && imsiResponse !== ""){
      print("imsi found");
      context.setVariable("imsi", imsiResponse);
  }else{
      print("empty imsi");
    context.setVariable("imsi", "");
  }   

  