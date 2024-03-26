#!/usr/bin/python3

import cgi


print("Content-type: text/html \n\n")

print("""
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>chat script</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h3>Simple input and output with forms and more complex with past messgaes</h3>
  <h6><a href="naruto_fillers.html">Return to main page</a></h6>
""")

#do some Python stuff
form_data = cgi.FieldStorage()
input_message = form_data.getvalue("input_message", "(no message entered)")
past_messages = form_data.getvalue("past_messages", "")
#we may need to format our past messages variable better

if input_message != "(no message entered)":
    past_messages = input_message + "<br>" + past_messages

print("""
  <p>Most recent message: {0}</p>
  <p>form</p>
  <form method="GET" action="chat_script.py">
    <p>message: <input type="text" name="input_message" autofocus/></p>
    <input type="hidden" name="past_messages" value="{1}">
    <p>Past messages: {1}</p>
    <input type="submit" value="submit">
  </form>
</body>
</html>
""".format(input_message, past_messages))