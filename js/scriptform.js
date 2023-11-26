function validasi(event) {
    event.preventDefault();

    var isValid= true
   
    document.getElementById("emailerror").textContent=""
    document.getElementById("msgerror").textContent=""

    var email= document.getElementById("email").value
    if(!email.endsWith("@gmail.com")){
        document.getElementById("emailerror").textContent="Email must contains @gmail.com"
        isValid=false
    }
    var message = document.getElementById("msg").value
    console.log(msg);
    if(message.length <6 || message.length>150){
        document.getElementById("msgerror").textContent="Message must contains between 6 and 150 characters"
        isValid=false
    }
    if (isValid){
        document.getElementById("formulir").submit()
    }

}