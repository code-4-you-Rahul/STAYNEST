document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("staynest-map", {
    zoomControl: false,
    scrollWheelZoom: true,
  }).setView([20.5937, 78.9629], 5); // India center

  // Tile layer (dark theme)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Example listings
  const stays = [
    {
      name: "Skyline Loft, Bengaluru",
      coords: [12.9716, 77.5946],
      price: "₹3,800/night",
    },
    {
      name: "Beachfront Villa, Goa",
      coords: [15.2993, 74.1240],
      price: "₹9,800/night",
    },
    {
      name: "Heritage Home, Jaipur",
      coords: [26.9124, 75.7873],
      price: "₹1,800/night",
    },
  ];

  stays.forEach((stay) => {
    L.marker(stay.coords)
      .addTo(map)
      .bindPopup(`
        <strong>${stay.name}</strong><br>
        <span>${stay.price}</span>
      `);
  });
});
