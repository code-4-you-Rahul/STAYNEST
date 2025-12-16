document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("landing-search-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (!city || !checkin || !checkout) {
      alert("Please fill all fields to search stays.");
      return;
    }

    const params = new URLSearchParams({ city, checkin, checkout, guests });
    window.location.href = `home.html?${params.toString()}`;
  });
});
