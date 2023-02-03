 var englishResult = context.getVariable("result");
 englishResult=(englishResult!==null && englishResult!=='')?englishResult:'';
 print ("englishResult::" + englishResult);

 var spanishResult="";
     if( englishResult.length>0 ){
         if ( englishResult.toUpperCase().indexOf("MOBILEBINDING")>-1 ){
             spanishResult="El suscriptor no fue creado en el DMC o no se recibio el sms binario";
             
         }else if ( englishResult.toUpperCase().indexOf("NOT CONTAIN ANY SETTING COMPATIBLE")>-1  ){
             spanishResult="El terminal no permite configuracion";

         }else if ( englishResult.toUpperCase().indexOf("NOT COMPATIBLE ESCENARIO")>-1  ){
             spanishResult="El BE no tiene asociado un escenario de envio de APN o la terminal no soporta los envíos de APN automaticos";

         }else if ( englishResult.toUpperCase().indexOf("UNAUTHORIZED")>-1  ){
             spanishResult="Error es debido a un problema en el API de consulta del DM";

         }else if ( englishResult.toUpperCase().indexOf("NOT AUTHENTICATED")>-1  ){
             spanishResult="Error es debido a un problema en el API de consulta del DM";

         }else if ( englishResult.toUpperCase().indexOf("not send apn")>-1  ){
             spanishResult="Limite de peticiones alcanzado";

         }
         
     }
   
 if (spanishResult.length>0){
     context.setVariable("result", spanishResult);
 }

