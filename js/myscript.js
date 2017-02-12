

$().ready(function(){

    $("#MyForm").validate({

       rules:{
            
            username: {
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            pswd: {
                required: true,
                minlength: 5,
                maxlength: 16,
            },
           
       },

       messages:{
            
           
            username: {
                required: "Це поле обов'язкове для заповнення",
                minlength: "Мінімальне число символів 2",
                maxlength: "Максимальне число символів 16",
            },
             
            pswd:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Пароль має бути мінімум 6 символів",
                maxlength: "Пароль має бути максимум 16 символів",
            },
            
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
                username: $("#username").val(),
                pswd: $("#pswd").val(),
            },
            dataType: "json"
        })
        .done(function(data){
            $("#MyForm").html("<h1>Thank you!</h1>" 
              + "<p> Additional info: " + JSON.stringify(data) + "</p>");
        });
    });
});