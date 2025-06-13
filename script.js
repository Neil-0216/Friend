
        function Submit(){

        
        
        let firstName = document.getElementById('fname1').value.trim();
        let lastName = document.getElementById('lname1').value.trim();
        let telephone = document.getElementById('tel1').value.trim();
        let email = document.getElementById('email1').value.trim();
        let organization = document.getElementById('org1').value.trim();
        let province = document.getElementById('prob1').value;
        let city = document.getElementById('city1').value;
        let barangay = document.getElementById('bar1').value;
        let street = document.getElementById('street1').value.trim();
        let message = document.getElementById('mes1').value.trim();


        if (firstName === "") {
            alert("Please enter your First Name!");
            document.getElementById('fname1').focus();
            return false;
        }
        else if (lastName === "") {
            alert("Please enter your Last Name!");
            document.getElementById('lname1').focus();
            return false;
        }
        else if (firstName===lastName){
            alert("Please enter your real last name");
            document.getElementById('lname1').focus();
            return false;
        }
        else if (telephone === "") {
            alert("Please enter number only in Telephone No.");
            document.getElementById('tel1').focus();
            return false;
        }
        else if (isNaN(telephone)) {
            alert("Please enter number only in Telephone!");
            document.getElementById('tel1').focus();
            return false;
        }
        else if (email === "") {
            alert("Please enter your Email Address!");
            document.getElementById('email1').focus();
            return false;
        }
        else if (organization === "") {
            alert("Please enter your Organization!");
            document.getElementById('org1').focus();
            return false;
        }
        else if (province === "Select your Province:") {
            alert("Please select your Province!");
            document.getElementById('prob1').focus();
            return false;
        }
        else if (province != "Davao del Norte") {
            alert("Please select Davao Del Norte a your Province!");
            document.getElementById('prob1').focus();
            return false;
        }
        else if (city === "Select your Municipality or City") {
            alert("Please select your City/Municipality!");
            document.getElementById('city1').focus();
            return false;
        }
        else if (city != "Tagum City") {
            alert("Please select Tagum City as your City/Municipality!");
            document.getElementById('city1').focus();
            return false;
        }
        else if (barangay === "Select your Barangay:") {
            alert("Please select your Barangay!");
            document.getElementById('bar1').focus();
            return false;
        }
        else if (barangay != "Mankilam") {
            alert("Please select Mankilam as your Barangay!");
            document.getElementById('bar1').focus();
            return false;
        }
        else if (street === "") {
            alert("Please enter your Street Address!");
            document.getElementById('street1').focus();
            return false;
        }
        else if (message === "") {
            alert("Please enter your Message!");
            document.getElementById('mes1').focus();
            return false;
        }
        else {
        
            alert("Form submitted successfully!");
        }
    }