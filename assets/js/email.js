(function($) {
  
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const data = {
    personalizations: [
      {
        to: [
          {
            email: "ma@cwa.nevis.kn"
          }
        ],
        subject: `Message from ${name} (${email})`
      }
    ],
    from: {
      email: "sender@example.com"
    },
    content: [
      {
        type: "text/plain",
        value: message
      }
    ]
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
  xhr.setRequestHeader("Authorization", process.env.API_KEY);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  };
});

 
})(jQuery);