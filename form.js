function validateForm() {
  
            
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    if (/[\d]/.test(fname)) {
        alert('First name should not contain numbers.');
        return false;
    }

      
    if (fname.trim() === '') {
        alert('Please enter your first name');
        return false;
    }

    if (/[\d]/.test(lname)) {
        alert('Last name should not contain numbers.');
        return false;
    }

    if (lname.trim() === '') {
        alert('Please enter your last name');
        return false;
    }


    var emailInput = document.getElementById("email");
                var email = emailInput.value;
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(email)) {
                    alert("Invalid email address");
                    return false;
                }

                var password = document.getElementById("password").value;
                var confirm_password = document.getElementById("confirm_password").value;

                if(password.trim() === ''){
                    alert('Please enter the password');
                    return false;
                }

                if (password.length > 8) {
                    alert("Password must be maximum 8 characters.");
                    return false;
                }
                
                if(confirm_password.trim() === ''){
                    alert('Please enter the confirm password');
                    return false;
                }
        
        
                if (password != confirm_password) {
                    alert("Passwords do not match!");
                    return false;
                }
                
                var dob = document.getElementById("dob").value;
                console.log(dob);

            if (dob.trim() === "") {
                alert("Please enter your date of birth.");
                return false;
            }
            var nationality = document.getElementById("Nationality").value;
            if(nationality=="none"){
                alert('Please select your nationality');
                return false;
            }
            var gender = document.querySelector('input[name="gender"]:checked');
            if (gender === null) {
                alert("Please select your gender.");
                return false;
            }
            var phone = document.getElementById("phone").value;
            var phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return false;
            }
            var department = document.getElementById("Department").value;
            if (department === "") {
                alert("Please select your department.");
                return false;
            }
            var courses = document.querySelectorAll('input[name="courses"]:checked');
            if (courses.length === 0) {
                alert("Please select at least one course.");
                return false;
            }

            var address = document.getElementById("address").value;
            if (address.trim() === "") {
                alert("Please enter your address.");
                return false;
            }

            alert("All fields filled Succefully !");
            return true;


           

            
        }
     
                
