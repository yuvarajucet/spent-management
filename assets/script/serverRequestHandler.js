// inital amount realted endpoints
export const initialAmountEndPoint = Object.freeze({
    addItem: '',
    removeItem: '',
});


// spent amount related endpoints.
export const spentAmountEndPoint = Object.freeze({
    addItem: '',
    removeItem: '',
});


export function MakeServerRequest(initialAmount){
    var inputData = { "userInitialAmount": initialAmount };
    $.ajax({
        type: "POST",
        url: initialAmount.addItem,
        data: JSON.stringify(inputData),
        headers : {
            "Content-Type":"application/json",
        },
        success: function(response){
            debugger;
        },
        error: function(response){
            debugger;
        }
    });
}