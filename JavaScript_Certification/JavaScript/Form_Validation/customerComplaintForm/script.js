const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsFieldset = document.getElementById("complaints-group");
const complaintCheckboxes = document.querySelectorAll(
  '#complaints-group input[type="checkbox"]',
);
const complaintDescription = document.getElementById("complaint-description");

const solutionsFieldset = document.getElementById("solutions-group");
const solutionRadios = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");

const otherComplaint = document.getElementById("other-complaint");
const otherSolution = document.getElementById("other-solution");

function setBorder(el, valid) {
  if (!el) return;
  el.style.borderColor = valid ? "green" : "red";
}

function validateForm() {
  const results = {
    "full-name": false,
    email: false,
    "order-no": false,
    "product-code": false,
    quantity: false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false,
  };

  results["full-name"] = !!fullName && fullName.value.trim().length > 0;

  const emailVal = email ? email.value.trim() : "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  results.email = emailRegex.test(emailVal);

  const orderVal = orderNo ? orderNo.value.trim() : "";
  results["order-no"] = /^2024\d{6}$/.test(orderVal);

  const productVal = productCode ? productCode.value.trim() : "";
  results["product-code"] =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productVal);

  const qtyVal = quantity ? String(quantity.value).trim() : "";
  results.quantity = /^\d+$/.test(qtyVal) && parseInt(qtyVal, 10) > 0;

  const complaintsChecked =
    complaintCheckboxes && complaintCheckboxes.length
      ? Array.from(complaintCheckboxes).some((cb) => cb.checked)
      : false;
  results["complaints-group"] = complaintsChecked;

  const otherComplaintChecked = otherComplaint && otherComplaint.checked;
  const complaintDescVal = complaintDescription
    ? complaintDescription.value.trim()
    : "";
  results["complaint-description"] =
    !otherComplaintChecked || complaintDescVal.length >= 20;

  const solutionsChecked =
    solutionRadios && solutionRadios.length
      ? Array.from(solutionRadios).some((r) => r.checked)
      : false;
  results["solutions-group"] = solutionsChecked;

  const otherSolutionChecked = otherSolution && otherSolution.checked;
  const solutionDescVal = solutionDescription
    ? solutionDescription.value.trim()
    : "";
  results["solution-description"] =
    !otherSolutionChecked || solutionDescVal.length >= 20;

  return results;
}

function isValid(validationObj) {
  if (!validationObj || typeof validationObj !== "object") return false;
  return Object.values(validationObj).every((v) => v === true);
}

if (fullName) {
  fullName.addEventListener("change", () => {
    const v = validateForm();
    setBorder(fullName, v["full-name"]);
  });
}

if (email) {
  email.addEventListener("change", () => {
    const v = validateForm();
    setBorder(email, v.email);
  });
}

if (orderNo) {
  orderNo.addEventListener("change", () => {
    const v = validateForm();
    setBorder(orderNo, v["order-no"]);
  });
}

if (productCode) {
  productCode.addEventListener("change", () => {
    const v = validateForm();
    setBorder(productCode, v["product-code"]);
  });
}

if (quantity) {
  quantity.addEventListener("change", () => {
    const v = validateForm();
    setBorder(quantity, v.quantity);
  });
}

if (complaintCheckboxes && complaintCheckboxes.length) {
  complaintCheckboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      const v = validateForm();
      setBorder(complaintsFieldset, v["complaints-group"]);
      setBorder(complaintDescription, v["complaint-description"]);
    });
  });
}

if (complaintDescription) {
  complaintDescription.addEventListener("change", () => {
    const v = validateForm();
    setBorder(complaintDescription, v["complaint-description"]);
  });
}

if (solutionRadios && solutionRadios.length) {
  solutionRadios.forEach((r) => {
    r.addEventListener("change", () => {
      const v = validateForm();
      setBorder(solutionsFieldset, v["solutions-group"]);
      setBorder(solutionDescription, v["solution-description"]);
    });
  });
}

if (solutionDescription) {
  solutionDescription.addEventListener("change", () => {
    const v = validateForm();
    setBorder(solutionDescription, v["solution-description"]);
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    const v = validateForm();
    const ok = isValid(v);
    if (!ok) {
      e.preventDefault();
      if (!v["full-name"] && fullName) setBorder(fullName, false);
      if (!v.email && email) setBorder(email, false);
      if (!v["order-no"] && orderNo) setBorder(orderNo, false);
      if (!v["product-code"] && productCode) setBorder(productCode, false);
      if (!v.quantity && quantity) setBorder(quantity, false);
      if (!v["complaints-group"] && complaintsFieldset)
        setBorder(complaintsFieldset, false);
      if (!v["complaint-description"] && complaintDescription)
        setBorder(complaintDescription, false);
      if (!v["solutions-group"] && solutionsFieldset)
        setBorder(solutionsFieldset, false);
      if (!v["solution-description"] && solutionDescription)
        setBorder(solutionDescription, false);
    }
  });
}
