function Trim(text)
{
    return text.replace(/^\s+|\s+$/g,"");
}

function sendTxt()
{
    var user = document.getElementById("txtSendName").value;
    var msg = document.getElementById("txtSendContent").value;


    if (Trim(user)=="")
    {
        alert("Name is empty");
        document.getElementById("txtSendName").focus();
        return false;
    }

    if (Trim(msg)=="")
    {
        alert("comment is empty");
        document.getElementById("txtSendContent").focus();
        return false;
    }

    document.getElementById("ulContent").innerHTML+= user + " says \r\n:<li>"+ msg +"</li>\r\n";

    document.getElementById("txtSendName").value = "";
    document.getElementById("txtSendContent").value = "";
}


var blog1_form = document.querySelector("#blog_comments");

blog1_form.addEventListener("submit", function(event) {
    var user = document.getElementById("txtSendName").value;
    var msg = document.getElementById("txtSendContent").value;

    if (Trim(user)=="")
    {
        alert("Name is empty");
        document.getElementById("txtSendName").focus();
        return false;
    }

    if (Trim(msg)=="")
    {
        alert("comment is empty");
        document.getElementById("txtSendContent").focus();
        return false;
    }

    document.getElementById("ulContent").innerHTML+= user + " says \r\n: <li>\r"+ msg +"</li>\r\n";

    document.getElementById("txtSendName").value = "";
    document.getElementById("txtSendContent").value = "";

    event.preventDefault();
});