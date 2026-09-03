
// get the form element 
const form = document.querySelector(".contact-form");
// get the form status element
const statusMessage = document.querySelector("#form-status");
// add sumbit listner
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Clear previous message and status
    statusMessage.textContent = "";
    statusMessage.className = "form-status";

    // Validation (possible empty filed)
    if (!name || !email || !message) {
      showMessage("Please fill in all fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // after successful submission
    showMessage(
      `Thank you, ${name}! Your message has been received. Will get back to you soon.`,
      "success"
    );

    // Clear the form after successful submission
    form.reset();
  });

  // helpers


  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(message, type) {
    statusMessage.textContent = message;
    statusMessage.classList.add(`form-status-${type}`);
  }