var contactMeButton = document.querySelector("#contact_me_submit_button");

contactMeButton.addEventListener("click", function(event) {
    var name = document.getElementById("contact_me_name_id").value;
    var subject = document.getElementById("contact_me_subject_id").value;
    var msg = document.getElementById("contact_me_msg_id").value;
    var email = document.getElementById("contact_me_email_id").value;



    if (name.length == 0 || subject.length == 0 || msg.length == 0 || email.length == 0) {
        var notice = "You should fill";
        if (name.length == 0) {
            notice += " name";
        }

        if (subject.length == 0) {
            notice += " subject";
        }

        if (msg.length == 0) {
            notice += " message";
        }

        if (email.length == 0) {
            notice += " email";
        }

        document.getElementById("contact_me_notice").style.display = "block";
        document.getElementById("contact_me_notice").innerHTML = notice;
    } else {

        var http_request = new XMLHttpRequest();
		http_request.open("POST","/contactMeFormPost",true);

		http_request.send('{"name":"' + name  + '","email":"' +  email + '","subject":"' + subject + '","msg":"' + msg + '"}')

        document.getElementById("contact_me_notice").style.display = "block";
        document.getElementById("contact_me_notice").innerHTML = "Hi " +  name + ", your message has been sent";

        document.getElementById("contact_me_name_id").value= "";
        document.getElementById("contact_me_subject_id").value = "";
        document.getElementById("contact_me_msg_id").value = "";
    }

    event.preventDefault();
});

