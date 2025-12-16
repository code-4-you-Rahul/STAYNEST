document.addEventListener("DOMContentLoaded", () => {
  const listings = [
    {
      id: 1,
      title: "Minimalist Studio near IT Park",
      city: "Bengaluru",
      location: "Whitefield · 2 guests · Wi-Fi",
      type: "apartment",
      price: 2800,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=800",
      tags: ["Self check-in", "Workspace", "Kitchen"]
    },
    {
      id: 2,
      title: "Sea-facing Villa with Infinity Pool",
      city: "Goa",
      location: "Candolim · 6 guests · Entire villa",
      type: "villa",
      price: 9800,
      rating: 4.95,
      image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&w=800",
      tags: ["Pool", "Breakfast included", "Beach access"]
    },
    {
      id: 3,
      title: "Private Room in Heritage Home",
      city: "Jaipur",
      location: "Old City · 2 guests · Breakfast",
      type: "room",
      price: 1800,
      rating: 4.7,
      image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&w=800",
      tags: ["Traditional stay", "Great location"]
    },
    {
      id: 4,
      title: "Penthouse with City Skyline View",
      city: "Mumbai",
      location: "Lower Parel · 4 guests · Entire place",
      type: "apartment",
      price: 7600,
      rating: 4.93,
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&w=800",
      tags: ["Rooftop access", "Luxury"]
    },
    {
      id: 5,
      title: "Cozy Workation Cabin in the Hills",
      city: "Manali",
      location: "Log Huts Area · 3 guests",
      type: "villa",
      price: 4200,
      rating: 4.88,
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=800",
      tags: ["Mountain view", "Work desk", "Quiet"]
    },
    {
      id: 6,
      title: "Budget Private Room near Metro",
      city: "Delhi",
      location: "Rajouri Garden · 1 guest",
      type: "room",
      price: 1100,
      rating: 4.4,
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&w=800",
      tags: ["Great value", "Close to metro"]
    }
  ];

  const grid = document.getElementById("listing-grid");
  const filterChips = document.querySelectorAll(".filter-chip");
  const sortSelect = document.getElementById("sort-select");
  const cityTitle = document.getElementById("home-city");

  // read search params from landing page
  const params = new URLSearchParams(window.location.search);
  const paramCity = params.get("city");
  if (paramCity) {
    cityTitle.textContent = paramCity;
  }

  let currentType = "all";
  let currentSort = "recommended";

  function renderListings() {
    let filtered = listings.filter(item =>
      currentType === "all" ? true : item.type === currentType
    );

    if (currentSort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating-desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    grid.innerHTML = "";
    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "listing-card";
      card.innerHTML = `
        <div class="listing-image" style="background-image:url('${item.image}')">
          <span class="listing-type">${item.type}</span>
        </div>
        <div class="listing-body">
          <div class="listing-header">
            <div>
              <h3 class="listing-title">${item.title}</h3>
              <span class="listing-location">${item.location}</span>
            </div>
            <div class="listing-rating">
              <span>★ ${item.rating.toFixed(2)}</span>
            </div>
          </div>
          <div class="listing-tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="listing-footer">
            <div class="listing-price">₹${item.price.toLocaleString()} <span>/night</span></div>
            <button class="btn-book" data-id="${item.id}">Book →</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentType = chip.dataset.type;
      renderListings();
    });
  });

  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    renderListings();
  });

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-book");
    if (!btn) return;
    const id = btn.dataset.id;
    alert(`This is a demo.\nHere we’d open booking modal for listing #${id}.`);
  });

  renderListings();
});
