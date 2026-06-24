interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  filter(el: (item: T) => boolean): T[] {
    return this.items.filter((item) => el(item));
  }
}

function renderProduct(product: Product) {
  let res = `<div class="item" id="${product.id}">
    <p class="price">${product.price}</p>`;

  switch (product.type) {
    case "book":
      res += `<p>Book: ${product.title} by ${product.author}</p></div>`;
      break;

    case "electronics":
      res += `<p>Electronics: ${product.item} - ${product.model}`;
      if (product.warranty) {
        res += ` - Warranty: ${product.warranty} year(s)`;
      }
      res += `</p></div>`;
      break;

    case "clothing":
      res += `<p>Clothing: ${product.item} by ${product.brand}`;

      if (product.size) {
        res += ` - Size ${product.size}`;
      }
      res += `</p></div>`;
      break;

    default:
      const _exhaustiveCheck: never = product;
      throw new Error(`Unknown product type: ${JSON.stringify(product)}`);
  }

  return res;
}

const products = new Collection<Product>([
  {
    type: "book",
    id: "b1",
    price: 15.99,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    type: "electronics",
    id: "e1",
    price: 999.99,
    item: "Smartphone",
    model: "X-200",
    warranty: 2,
  },
  {
    type: "clothing",
    id: "c1",
    price: 29.99,
    item: "T-Shirt",
    brand: "Classic Threads",
    size: "M",
  },
]);

const output = document.querySelector("#output");

function showProducts(typeFilter?: Product["type"]) {
  if (!output) {
    return;
  }

  const itemsToRender = typeFilter
    ? products.filter((prod) => prod.type === typeFilter)
    : products.getAll();

  output.innerHTML = itemsToRender.map((prod) => renderProduct(prod)).join("");
}

const allButton = document.querySelector("#all");
const booksButton = document.querySelector("#books");
const electronicsButton = document.querySelector("#electronics");
const clothingButton = document.querySelector("#clothing");

allButton?.addEventListener("click", () => showProducts());
booksButton?.addEventListener("click", () => showProducts("book"));
electronicsButton?.addEventListener("click", () => showProducts("electronics"));
clothingButton?.addEventListener("click", () => showProducts("clothing"));

document.addEventListener("DOMContentLoaded", () => {
  showProducts();
});
