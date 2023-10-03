        // function printHello(){
        //     // Get the element where you want to display the message
        //     var outputElement = document.getElementById("output");
            
        //     // Clear any previous content
        //     outputElement.innerHTML = "";
            
        //     // Create a new text node with the message
        //     var message = document.createTextNode("Hello, World!");
            
        //     // Append the text node to the output element
        //     outputElement.appendChild(message);
        // }

        // function printHello() {
        //         var outputDiv = document.getElementById("output");
        //         outputDiv.innerHTML = "Form submitted!";
        //     }


        function validateForm() {
                var fname = document.getElementById("fname").value;
                var lname = document.getElementById("lname").value;
                var address = document.getElementById("addr").value;
                var phone = document.getElementById("phone").value;
                var appointmentDate = document.getElementById("date").value;
                var appointmentTime = document.getElementById("time").value;
              
                // Check if required fields are empty
                if (fname === "" || lname === "" || address === "" || phone === "" || appointmentDate === "" || appointmentTime === "") {
                  alert("All fields are required!");
                  return false; // Prevent form submission
                }
              
                // Check if the phone number contains exactly 10 digits
                if (phone.length !== 10 || isNaN(phone)) {
                  alert("Please enter a valid 10-digit phone number.");
                  return false; // Prevent form submission
                }
              
                // You can add more specific validation checks here as needed.
              
                // If all checks pass, the form will be submitted
                printHello();  // Call printHello only if the form is valid
                return false;  // Prevent the form from actually submitting
              }
              


        // function validateForm() {
        //         var fname = document.getElementById("fname").value;
        //         var lname = document.getElementById("lname").value;
        //         var address = document.getElementById("addr").value;
        //         var phone = document.getElementById("phone").value;
        //         var appointmentDate = document.getElementById("date").value;
        //         var appointmentTime = document.getElementById("time").value;
    
        //         // Check if required fields are empty
        //         if (fname === "" || lname === "" || address === "" || phone === "" || appointmentDate === "" || appointmentTime === "") {
        //             alert("All fields are required!");
        //             return false; // Prevent form submission
        //         }
        //         // Check if the phone number contains exactly 10 digits
        //         if (phone.length !== 10 || isNaN(phone)) {
        //                 alert("Please enter a valid 10-digit phone number.");
        //                 return false; // Prevent form submission
        //         }

        //         // You can add more specific validation checks here as needed.

        //         // If all checks pass, the form will be submitted
        //         return true;
        // }

        function printHello() {
                //alert("Submit form?");
                var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = "Form submitted!";
                
                // Open a new tab or window with a blank page
                //var newTab = window.open("", "_blank");
                
                // Write the message to the new tab or window
                //newTab.document.write("<h1>Form submitted successfully!</h1>");
                
                return false; // Prevent the form from actually submitting
            }
            
    