const form = document.querySelector(".contact-form");
const statusMessage = document.querySelector("#form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Clear previous status message
    statusMessage.textContent = "";
    statusMessage.className = "form-status";

    // Basic validation
    if (!name || !email || !message) {
      showMessage("Please fill in all fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // Simulate successful submission
    showMessage(
      `Thank you, ${name}! Your message has been sent successfully.`,
      "success"
    );

    // Clear the form after successful submission
    form.reset();
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(message, type) {
    statusMessage.textContent = message;
    statusMessage.classList.add(`form-status-${type}`);
  }