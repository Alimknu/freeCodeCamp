function normalizeUnits(manifest) {
  let nM = { ...manifest };

  if (nM.unit == "lb") {
    nM.weight = nM.weight * 0.45;
    nM.unit = "kg";
  }

  return nM;
}

function validateManifest(manifest) {
  let missing = {};

  if (!manifest.hasOwnProperty("containerId")) {
    missing.containerId = "Missing";
  } else if (
    !(manifest.containerId > 0 && Number.isInteger(manifest.containerId))
  ) {
    missing.containerId = "Invalid";
  }

  if (!manifest.hasOwnProperty("destination")) {
    missing.destination = "Missing";
  } else if (
    !(
      typeof manifest.destination === "string" &&
      manifest.destination.trim().length > 0
    )
  ) {
    missing.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    missing.weight = "Missing";
  } else if (!(manifest.weight > 0 && !Number.isNaN(manifest.weight))) {
    missing.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    missing.unit = "Missing";
  } else if (!(manifest.unit == "kg" || manifest.unit == "lb")) {
    missing.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    missing.hazmat = "Missing";
  } else if (!(typeof manifest.hazmat === "boolean")) {
    missing.hazmat = "Invalid";
  }

  return missing;
}

function processManifest(manifest) {
  let res = validateManifest(manifest);
  if (Object.keys(res).length === 0) {
    let normalizedManifest = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(res);
  }
}
