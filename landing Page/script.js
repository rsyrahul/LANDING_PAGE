// JavaScript to handle form submission
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
  
    if (name && email && date) {
      alert(`Reservation confirmed for ${name} on ${date}. We'll contact you at ${email} soon!`);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
  