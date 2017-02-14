$().ready(function(){

    $("#MyFormUp").validate({

       rules:{
           
            
            usernamesignup: {
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            passwordsignup: {
                required: true,
                minlength: 5,
                maxlength: 16,
            },
            passwordsignup_confirm: {
                required: true,
                minlength: 5,
                equalTo: "#passwordsignup"
            },
           
       },

       messages:{
            
           
            usernamesignup: {
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів 2",
                maxlength: "Максимальне число символів 16",
            },
             
            passwordsignup:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
            },
             passwordsignup_confirm:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
                equalTo: "Повторіть пароль"
            }

       }

    });
});


$(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/natalia9rokicka@gmail.com",
            method: "POST",
            data: {
                
                usernamesignup: $("#usernamesignup").val(),
                passwordsignup: $("#passwordsignup").val(),
                passwordsignup_confirm: $("# passwordsignup_confirm").val(),
               
         },
            dataType: "json"
        })
        .done(function(data){
            $("#MyFormUp").html("<h1>Thank you!</h1>" 
              + "<p> Additional info: " + JSON.stringify(data) + "</p>");
        });
    });
});