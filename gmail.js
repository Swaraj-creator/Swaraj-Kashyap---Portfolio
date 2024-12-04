
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "rXfLCdPaX9LGKUwiu",
    });
})();

var messageSent = false;
const funnyAlerts = {
    spamText: ["Is this your idea of filling my inbox?", "Are you testing my notification limits?", "Are you trying to Spam on Me?", "SPAMMER SPOTTED !", "Wanna Crash my Server?"],
    messageText: ["Don’t leave me guessing — type something !", "Blank messages don’t count as a start — say hello !", "A blank message? I was expecting a bit more excitement !", "Your first message deserves more than just… nothing.", "Come on, don’t let the first message be empty !"],
    unameText: ["Oops ! The username field can’t be empty.", "Looks like you forgot to enter a username.", "Hold on ! You need to enter a username first.", "Forgot to enter a username? Let’s fix that !", "Username required — don’t leave it blank !"],
    mailText: ["Hmm, that doesn’t look like a valid email address.", "Something’s off — please check your email address.", "That email’s not passing the vibe check. Fix it, please !", "Email format not recognized. Give it another shot !", "Looks like there’s an issue with your email. Retry ?"],
    mailSent: ["Your message is on its way !", "Mail successfully delivered !", "Message dispatched. Keep an eye out for replies !", "Sent! It’s now in Swaraj’s inbox.", "Mission accomplished — your email is sent !"]
};

function randomItem(lst) {
    let indx = Math.floor(Math.random() * lst.length);
    return lst[indx];
}

function throwAlerts(str) {
    document.querySelector("div.alert p").innerText = str;
    document.querySelector("div.alert").classList.add("show");
    setTimeout(() => {
        document.querySelector("div.alert").classList.remove("show");
    }, 5000);
}

function sendMail() {
    //pass
    var templateParams = {
        to_name: "Swaraj Kashyap",
        from_name: document.getElementById("client-name").value,
        message: document.getElementById("message").value,
        from_mail: document.getElementById("client-id").value
    };
    console.log(templateParams);
    if(!document.querySelector("div.alert").classList.contains("show")) {
        if(document.querySelector("input#btn").classList.contains("disable")) {
            let spamTxt = randomItem(funnyAlerts.spamText);
            throwAlerts(spamTxt);
        } else {
            if(templateParams.message.length <= 5) {
                let msgTxt = randomItem(funnyAlerts.messageText);
                throwAlerts(msgTxt);
            } else {
                if(templateParams.from_name == "") {
                    let unameTxt = randomItem(funnyAlerts.unameText);
                    throwAlerts(unameTxt);
                } else {
                    if(templateParams.from_mail.slice(-10) == "@gmail.com") {
                        emailjs.send('service_ic1ehep', 'template_3oj7ovb', templateParams).then(
                            (response) => {
                              console.log('SUCCESS!', response.status, response.text);
                            },
                            (error) => {
                              console.log('FAILED...', error);
                            },
                        );
                        throwAlerts(randomItem(funnyAlerts.mailSent));
                        messageSent = true;
                        document.querySelector("input#btn").classList.add("disable");
                        setTimeout(() => {
                            messageSent = false;
                            document.querySelector("input#btn").classList.remove("disable");
        
                        }, 300000);
                    } else {
                        let mailTxt = randomItem(funnyAlerts.mailText);
                        throwAlerts(mailTxt);
                    }
                }
            }
        }
    }
}
