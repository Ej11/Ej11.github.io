function showDescription(descript){
    $("#description").html("Description: " + descript);
}
function hideDescription(){
    $("#description").html("");
}

function validate(){
    var txtDob = $("#txtDate").val();
    var today = new Date();
    var d = new Date(txtDob);
    if (d > today){
        alert("Date of birth is not valid. Date has to be before today");
        return false;
    }
}
