
    function validateForm() {
        var iuser = document.forms["Form"].username.value;
        var ipassword = document.forms["Form"].password.value;
        if(ipassword!="s1s1s1" || ipassword=="" || iuser=="" || iuser=="@" || iuser=="!"|| iuser=="%"|| iuser=="&" || iuser=="*") {
            alert("Invalid username or password");
            return false;
        }   
    } 

    function validno() {
        var ifname = document.forms["Form1"].fname.value;
        var ilname = document.forms["Form1"].lname.value;
        var ipass = document.forms["Form1"].pass.value;
        var icpass = document.forms["Form1"].cpass.value;
        var iemail = document.forms["Form1"].icemail.value;
        if(ifname==""|| ilname=="" || ipass=="" || icpass==" " || (ipass!=icpass) || iemail=="")  {
            alert("Invalid inputs");
            return false;
        }
        if(ipass!=icpass) {
            alert("Invalid inputs");
            return false;
        }
        alert("Your signed up successfully!!");   
    }

    function va() {
        var iold = document.forms["Form2"].opass.value;
        var inew = document.forms["Form2"].npass.value;
        var icnew = document.forms["Form2"].cnpass.value;
        if(iold=="" || inew=="" || icnew==" ") {
            alert("Invalid inputs");
            return false;
        }
        if(inew!=icnew) {
            alert("Invalid inputs");
            return false;
        }
        alert("Password changed successfully");   
    }

    function va1() {
        var iemail = document.forms["Form3"].vmail.value;
        if(iemail=="") {
            alert("Invalid inputs");
            return false;
        }
    else {
        alert("Link send successfully");
    }
    }