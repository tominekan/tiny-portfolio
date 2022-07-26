"use strict"

const sendEmail = (name, email, content, access_token) => {

    const toParams = (data) => {
        let form_data = [];

        for ( var key in data ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
        }

        return form_data.join("&");
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            alert("Successfully Sent!");
        } else if(request.readyState == 4) {
            alert("Could not send mail, please try again. \nError Code: " + request.response);
        }
    }

    // Subject and message for email
    let subject = `From ${name}: email ${email}`
    let message = content + "\nSent From (Tiny-Portfolio)"
    let mailData = {
        "access_token": access_token,
        "subject": subject,
        "text": message,
    }

    var params = toParams(mailData);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

export default sendEmail;