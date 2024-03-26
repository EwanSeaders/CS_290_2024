const http = require('http');
const fs = require('fs');
// const fetch = require('node-fetch');


var input_form = document.getElementById('input');
input_message = document.getElementById('message').innerHTML;
message_output = document.getElementById('message_output').innerHTML;

if (input_message == '') {
  return
}
else {
  //listens to the submit button and executes code accordingly
  input_form.addEventListener('submit', function(event) {
    event.preventDefault();
  

    fetch('/chat.html', {
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: input_message
      
    }).then(response => {
        // Handle response from server
        output = document.getElementById('message_output').innerHTML;
        output = response + '\n' + output;
        input_message = '';

        
    }).catch(error => {
        // Handle error
        console.log('error')
    });

  });
}