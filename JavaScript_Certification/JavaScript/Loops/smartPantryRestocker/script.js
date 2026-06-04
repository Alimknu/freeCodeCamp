function parseShipment(rawData) {
  const res = [];
  const existingSku = [];

  for (const item of rawData) {
    const [sku, name, qtyStr, expires, zone] = item.split("|");

    const obj = {
      sku: sku,
      name: name,
      qty: Number(qtyStr),
      expires: expires,
      zone: zone || "general",
    };

    if (existingSku.includes(obj.sku)) {
      continue;
    }

    res.push(obj);
    existingSku.push(obj.sku);
  }

  return res;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else {
      const skuExists = pantry.some(
        (pantryItem) => pantryItem.sku === item.sku,
      );
      type = skuExists ? "restock" : "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

function groupByZone(actions) {
  const groups = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!groups[zone]) {
      groups[zone] = [];
    }
    groups[zone].push(action);
  }

  return groups;
}

function clonePantry(pantry) {
  return pantry.map((item) => ({ ...item }));
}

const pantry = [
  {
    sku: "A1",
    name: "Apples",
    qty: 10,
    expires: "2026-06-03",
    zone: "produce",
  },
  { sku: "B2", name: "Bananas", qty: 5, expires: "2026-03-03", zone: "dairy" },
];

const rawShipmentData = [
  "A1|Apples|25|2025-12-31|produce",
  "A1|Apples|30|2025-12-31|produce",
  "C3|Carrots|0|2025-10-15|vegetables",
  "D4|Dates|50|2026-01-20|",
  "E5|Eggs|-5|2025-09-10|dairy",
];

const parsedShipment = parseShipment(rawShipmentData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantry, parsedShipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);
