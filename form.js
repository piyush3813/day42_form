function validation(){
    var username = document.getElementById('text').value;
    var password = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;
    var url = document.getElementById('url').value;
    var phonenumber = document.getElementById('tel').value;
    var search = document.getElementById('serch').value;
    var sdate_time = document.getElementById('interview').value;
    var salary = document.getElementById('salary').value;
    

    var name = /^[A-Z][a-z]{3,}$/;
    var MOBILE = /^(91)[\\s][1-9][0-9]{9}$/;
    var PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[!@#$%&*^()<>:;']).{8,}$/;
    var E_MAIL = ("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");

            if(name.test(username)){
                document.getElementById("name_error").innerHTML = " ";
            }
            else{
                    document.getElementById("name_error").innerHTML = "**Invalid Username";
                    return false;
                }
            if(MOBILE.test(phonenumber)){
                document.getElementById("telephone_error").innerHTML = " ";
            }
            else{
                    document.getElementById("telephone_error").innerHTML = "**Invalid Username";
                    return false;
                }
            if(PASSWORD.test(password)){
                document.getElementById("password_error").innerHTML = " ";
            }
            else{
                    document.getElementById("password_error").innerHTML = "**Invalid Username";
                    return false;
                }
            if(E_MAIL.test(email)){
                document.getElementById("email_error").innerHTML = " ";
            }
            else{
                    document.getElementById("email_error").innerHTML = "**Invalid Username";
                    return false;
                }
            
            
} 