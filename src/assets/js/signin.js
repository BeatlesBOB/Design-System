$(document).ready(function() {

    $("#signinForm").validate({
      errorPlacement: function($error, $element) {
         $error.appendTo(".errorMessage");
         $element.addClass("his-invalidated")
       },
      rules: {
         email: {
           required: true,
           email: true
         },
         password: {
           required: true,
           minlength: 5
         }
       },
        messages: {
            password: {
              required: "<p class='text-error text--light--italic text-0p'>Please provide a password <p>",
              minlength: "<p class='text-error text--light--italic text-0p'>Your password must be at least 5 characters long<p>"
            },
            email: "<p class='text-error text--light--italic text-0p'>Please enter a valid email address</p>"
        },
        invalidHandler: function(form){ 
         animateCSS('.a-input', 'shakeX');
        }, 
        submitHandler: function(form) {
          event.preventDefault();
          console.log("sucess")
          form.querySelectorAll("input").forEach(function(el){
            el.classList.add("his-validated");
          });
        }
      
    })
    
 });



 function animateCSS(element,animation){
   var prefix = 'animate__';
   document.querySelectorAll(element).forEach(function(el){
      el.classList.add('animate__animated',prefix+animation );
      el.addEventListener('animationend', () => {
         el.classList.remove('animate__animated', prefix+animation);
       });   
    });
 }