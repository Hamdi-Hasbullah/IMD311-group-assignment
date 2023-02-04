function validateForm() {
    let x = document.forms["form1"]["name"].value;
    if (x == "") {
        alert("Please fill the information")    
        return false;
    }
    else {
        alert("message send")
        return true;
    }
}