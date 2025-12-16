document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const first = document.getElementById("first-name").value.trim();
    const last = document.getElementById("last-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("signup-role").value;
    const terms = document.getElementById("terms-checkbox").checked;

    if (!first || !last || !email || !password) {
      alert("Please fill all required fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (!terms) {
      alert("Please accept the terms to continue.");
      return;
    }

    alert(`Account created for ${first} (${role}). Redirecting to login...`);
    window.location.href = "login.html";
  });
});
