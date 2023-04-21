import { MakeServerRequest } from './serverRequestHandler.js'

var isReasonValid = false;
var isSpentAmtValid = false;

// trigger initial amount value change
$("#initialAmt").keyup(function(){
    ValidateUserInput($(this).val(), "initial");
});

// trigger reason value change
$("#spentReason").keyup(function(){
    ValidateUserInput($(this),"spent");
});

// trigger spent amount value change
$("#spentAmount").keyup(function(){
    ValidateUserInput($(this), "spent");
});

// trigger initialAmt button click
$("#initialAmtBtn").click(function(event){
    event.preventDefault();
    MakeServerRequest($("#initialAmt").val());
});

function ValidateUserInput(userInput, valueType){
    const Amtpattern = /^[0-9.]+$/;
    if (valueType == "initial"){
        if(Amtpattern.test(userInput)){
            $("#initialAmtBtn").removeAttr("disabled");
            $("#initialAmtBtn").removeClass("disabled");
            $("#initialAmtBtn").removeClass("btn-secondary");
            $("#initialAmtBtn").addClass("btn-primary");
            $("#initialAmt").removeClass("border border-danger");
        }
        else if(userInput == ""){
            $("#initialAmtBtn").attr("disabled","");
            $("#initialAmtBtn").removeClass("btn-primary");
            $("#initialAmtBtn").addClass("disabled btn-secondary");
            $("#initialAmt").addClass("border border-danger");
        }
    }
    else if (valueType == "spent"){
        var currentElementID = userInput.attr('id');
        var currentBtnID = "spentAmountBtn";
        if(currentElementID == "spentReason"){
            if(userInput.val() != ""){
                $("#"+currentElementID).removeClass("border border-danger");
                isReasonValid = true;
            }
            else{
                $("#"+currentElementID).addClass("border border-danger");
                isReasonValid = false;
            }
        }

        if(currentElementID == "spentAmount"){
            if(Amtpattern.test(userInput.val())){
                $("#"+currentElementID).removeClass("border border-danger");
                isSpentAmtValid = true;
            }
            else{
                $("#"+currentElementID).addClass("border border-danger");
                isSpentAmtValid = false;
            }
        }


        if (isReasonValid && isSpentAmtValid){
            $("#"+currentBtnID).addClass("btn-primary");
            $("#"+currentBtnID).removeAttr("disabled");
            $("#"+currentBtnID).removeClass("disabled");
            $("#"+currentBtnID).removeClass("btn-secondary");
        } else{
            $("#"+currentBtnID).attr("disabled","");
            $("#"+currentBtnID).removeClass("btn-primary");
            $("#"+currentBtnID).addClass("disabled btn-secondary");
        }
    }
}