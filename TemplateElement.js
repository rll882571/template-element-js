const products = [
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling, over-ear Bluetooth headphones.",
    price: "$99.99",
    image: "https://placehold.co/200x100?text=Headphones"
  },
  {
    name: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: "$149.99",
    image: "https://placehold.co/200x100?text=Smart Watch"
  },
  {
    name: "Portable Charger",
    description: "10,000mAh power bank with fast charging.",
    price: "$29.99",
    image: "https://placehold.co/200x100?text=Charger"
  },
  {
    name: " peper",
    description: "Track your fitness and stay connected.",
    price: "$149.99",
    image: "https://placehold.co/200x100?text=Smart Watch"
  }
];

// Captura o template e o container da lista no HTML
const template = document.getElementById("product-card");
const productList = document.getElementById("product-list");

// Passa por cada produto do array
products.forEach((product) => {
  // Clona o conteúdo interno do template
  const clone = template.content.cloneNode(true);
  
  // Busca todos os elementos relevantes na ordem em que aparecem
  const elements = clone.querySelectorAll("h2, p, img");

  // Distribui os dados usando os índices corretos da NodeList
  elements[0].textContent = product.name;         // <h2>
  elements[1].textContent = product.description;  // Primeiro <p>
  elements[2].textContent = product.price;        // Segundo <p>
  elements[3].src = product.image;                // <img>
  elements[3].alt = product.name;                 // Atributo alt da <img>

  // Insere o clone preenchido dentro da div no HTML
  productList.appendChild(clone);
});