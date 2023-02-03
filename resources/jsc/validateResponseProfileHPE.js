var responseRangeHPE = context.getVariable("responseIfExistsInHPE.responseData");

print("responseRangeHPE: "+responseRangeHPE);


if(typeof( responseRangeHPE) !== 'undefined' ||  responseRangeHPE !== null ||  responseRangeHPE !== ""){
      context.setVariable("responseFromRangeHPE", responseRangeHPE);
  }else{
    context.setVariable("responseFromRangeHPE", responseRangeHPE);
  }   