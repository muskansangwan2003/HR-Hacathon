// Function to send user message
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput !== '') {
      var chatboxMessages = document.getElementById('chatbox-messages');
      var userMessage = '<div><strong>User:</strong> ' + userInput + '</div>';
      chatboxMessages.innerHTML += userMessage;
      document.getElementById('user-input').value = '';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('challenge-form');
    const confirmationMessage = document.getElementById('confirmation-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform form submission handling (can be replaced with backend processing)
      // For now, just display a confirmation message
      confirmationMessage.style.display = 'block';
  
      // Reset the form (optional)
      form.reset();
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    const confirmationMessage = document.getElementById('confirmation-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform form submission handling (can be replaced with backend processing)
      // For now, just display a confirmation message
      confirmationMessage.style.display = 'block';
  
      // Reset the form (optional)
      form.reset();
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('job-application-form');
    const confirmationMessage = document.getElementById('confirmation-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform form submission handling (can be replaced with backend processing)
      // For now, just display a confirmation message
      confirmationMessage.style.display = 'block';
  
      // Reset the form (optional)
      form.reset();
    });
  });
  
