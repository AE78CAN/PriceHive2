const form = document.getElementById("search-form");
const results = document.getElementById("results");

// Mock product data
const demoProducts = [
  { title: "Wireless Headphones", price: "$49.99", image: "https://via.placeholder.com/200?text=Headphones", url: "#" },
  { title: "Smartphone 2025 Model", price: "$699.00", image: "https://via.placeholder.com/200?text=Smartphone", url: "#" },
  { title: "Nike Running Shoes", price: "$89.99", image: "https://via.placeholder.com/200?text=Shoes", url: "#" },
  { title: "Kitchen Blender", price: "$59.95", image: "https://via.placeholder.com/200?text=Blender", url: "#" },
  { title: "Office Chair", price: "$129.00", image: "https://via.placeholder.com/200?text=Chair", url: "#" },
  { title: "Gaming Laptop", price: "$1299.99", image: "https://via.placeholder.com/200?text=Laptop", url: "#" }
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = document.getElementById("search-input").value.toLowerCase();
  results.innerHTML = "";

  const filtered = demoProducts.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  if (filtered.length > 0) {
    filtered.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <a href="${product.url}" target="_blank">View</a>
      `;
      results.appendChild(div);
    });
  } else {
    results.innerHTML = "<p>No products found. Try another search!</p>";
  }
});