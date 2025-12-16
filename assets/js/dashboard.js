document.addEventListener("DOMContentLoaded", () => {
  const bookingListEl = document.getElementById("booking-list");
  const listingListEl = document.getElementById("dashboard-listings");
  const toggleBtn = document.getElementById("toggle-bookings");

  const bookings = [
    {
      guest: "Rahul Singh",
      property: "Skyline Loft, Bengaluru",
      dates: "18–21 Dec",
      amount: 11400,
      status: "confirmed"
    },
    {
      guest: "Aditi Mehta",
      property: "Sea-facing Villa, Goa",
      dates: "24–27 Dec",
      amount: 29400,
      status: "pending"
    },
    {
      guest: "Arjun Nair",
      property: "Heritage Home, Jaipur",
      dates: "19–20 Dec",
      amount: 1800,
      status: "confirmed"
    }
  ];

  const hostListings = [
    {
      name: "Skyline Loft, Bengaluru",
      occupancy: "82% this month",
      rating: 4.95
    },
    {
      name: "Sea-facing Villa, Goa",
      occupancy: "68% this month",
      rating: 4.9
    },
    {
      name: "Workation Cabin, Manali",
      occupancy: "74% this month",
      rating: 4.88
    }
  ];

  function renderBookings() {
    bookingListEl.innerHTML = "";
    bookings.forEach(b => {
      const li = document.createElement("li");
      li.className = "booking-item";
      li.innerHTML = `
        <div class="booking-main">
          <span class="booking-title">${b.guest}</span>
          <span class="booking-meta">${b.property}</span>
          <span class="booking-meta">${b.dates}</span>
        </div>
        <div class="booking-amount">
          <div>₹${b.amount.toLocaleString()}</div>
          <div class="booking-status ${b.status}">
            ${b.status === "confirmed" ? "Confirmed" : "Pending"}
          </div>
        </div>
      `;
      bookingListEl.appendChild(li);
    });
  }

  function renderListings() {
    listingListEl.innerHTML = "";
    hostListings.forEach(item => {
      const li = document.createElement("li");
      li.className = "listing-item";
      li.innerHTML = `
        <div>
          <div class="listing-name">${item.name}</div>
          <div class="listing-meta">${item.occupancy} · ★ ${item.rating}</div>
        </div>
        <div class="listing-actions">
          <button class="btn-ghost small-btn">Edit</button>
          <button class="btn-ghost small-btn">View</button>
        </div>
      `;
      listingListEl.appendChild(li);
    });
  }

  toggleBtn.addEventListener("click", () => {
    const hidden = bookingListEl.style.display === "none";
    bookingListEl.style.display = hidden ? "flex" : "none";
    toggleBtn.textContent = hidden ? "Hide" : "Show";
  });

  document.getElementById("add-listing-btn").addEventListener("click", () => {
    alert("In a real app, this would open a multi-step wizard to add a new listing.");
  });

  renderBookings();
  renderListings();
});
