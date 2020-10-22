jQuery(document).ready(function() {

    jQuery("#formStep").validate({
        rules: {
           "montextarea":{
              "required": true,
              "minlength": 2,
              "maxlength": 60000
           },
           "monemail": {
              "email": true,
              "maxlength": 255
           },
           "montelephone": {
              "required": true
           }
           
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        }
    })
    
 });


