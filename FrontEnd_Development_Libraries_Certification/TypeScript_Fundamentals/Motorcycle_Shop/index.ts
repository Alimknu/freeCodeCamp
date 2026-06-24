type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";

interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
  horsepower: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const res = await fetch(
    "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json",
  );

  return await res.json();
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
  let res = "";

  res = `<div>
    <div class="motorcycle-card-image-container">
      <img src="${motorcycle.image_url}"/>
    </div>
    <p class="motorcycle-card-year-badge">${motorcycle.year}</p>
    <p class="motorcycle-card-title">${motorcycle.name}</p>
    <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
    <p class="motorcycle-card-category">${motorcycle.category}</p>
    <p class="motorcycle-card-description">${motorcycle.description}</p>
    <p class="motorcycle-card-price">${motorcycle.price}</p>
    <p class="motorcycle-card-engine">${motorcycle.horsepower}</p>
  </div>`;

  return res;
}

class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];

  constructor() {}

  async init() {
    this.allMotorcycles = await fetchMotorcycles();
    this.renderMotorcycles();
  }

  async renderMotorcycles() {
    if (this.allMotorcycles.length === 0) {
      this.allMotorcycles = await fetchMotorcycles();
    }

    let res = "";
    this.allMotorcycles.forEach((motorcycle) => {
      res += renderMotorcycleCard(motorcycle);
    });

    const motorcycleGrid = document.getElementById("motorcycle-grid");

    if (motorcycleGrid) {
      motorcycleGrid.innerHTML = res;
    }

    const resultsNumber = document.getElementById("results-number");

    if (resultsNumber) {
      resultsNumber.textContent = String(this.allMotorcycles.length);
    }
  }
}

const app = new MotorcycleGalleryApp();
app.init();
