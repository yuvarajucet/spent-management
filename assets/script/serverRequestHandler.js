export const host = Object.freeze({
    HOST:"http://127.0.0.1:8000"
});

// inital amount realted endpoints
export const initialAmountEndPoint = Object.freeze({
    addItem: '/api/v1/addamount',
    removeItem: '',
});


// spent amount related endpoints.
export const spentAmountEndPoint = Object.freeze({
    addItem: '',
    removeItem: '',
});


export function MakeServerRequest(initialAmount){
    var inputData = { "amount": initialAmount };
    $.ajax({
        type: "POST",
        url: host.HOST+initialAmountEndPoint.addItem,
        data: JSON.stringify(inputData),
        headers : {
            "Content-Type":"application/json"
        },
        success: function(response){
            if (response.status_code == 200){
                debugger;
                $("#initialAmt")[0].value = "";
                addInitialDataIntoTable(JSON.parse(response.data));
            } else{
                // var target = $(".error");
                // target.append($("<p>" + response.message + "</p>"));
            }
        },
        error: function(response){
            console.log(response);
        }
    });
}


function addInitialDataIntoTable(data){
    debugger;
    var target = $("#initialtable");
    if (target.children().length > 0){
        target.children().remove();
    }
    var tableHeader = $("<tr><th>S.No</th><th>Initial Amount</th><th>Edit</th></tr>");
    var tableData = $("<tr><td>1</td><td> &#8377; " + data.amount + "</td><td>Edit</td></tr>");
    target.append(tableHeader);
    target.append(tableData);
}