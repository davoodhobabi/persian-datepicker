


export const dateRengeValidation = (value , callback) =>{
    if(value){
        if(
          typeof (value.start * 1) === "number"  &&
           typeof (value.end * 1) === "number" &&
            value.end * 1 > value.start * 1
             ){
                callback(value)
       }else{
         console.error("invalid dateRenge : dateRenge must be contain 'end' & 'start' keys , 'end' must be grather than 'start'");
         console.warn("datepicker now using default dateRenge")
       }
      }else{
        console.warn("datepicker now using default dateRenge")
    }
}