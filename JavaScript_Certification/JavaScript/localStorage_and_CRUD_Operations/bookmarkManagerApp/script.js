const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const categoryDropdown = document.getElementById("category-dropdown");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const viewCategoryBtn = document.getElementById("view-category-button");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");

function getBookmarks() {
  const raw = localStorage.getItem("bookmarks");
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    const valid = parsed.every((item) => {
      return (
        item &&
        typeof item === "object" &&
        typeof item.name === "string" &&
        typeof item.category === "string" &&
        typeof item.url === "string"
      );
    });
    if (valid) {
      return parsed;
    }
    return [];
  } catch (e) {
    return [];
  }
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function populateCategoryList(selectedCategory) {
  categoryList.innerHTML = "";

  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter((b) => b.category === selectedCategory);

  if (!filtered.length) {
    const p = document.createElement("p");
    p.innerText = "No Bookmarks Found";
    categoryList.appendChild(p);
    return;
  }
  filtered.forEach((bookmark, idx) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = bookmark.name;
    input.name = "bookmark";
    input.value = bookmark.name;

    const label = document.createElement("label");
    label.htmlFor = bookmark.name;

    const anchor = document.createElement("a");
    anchor.href = bookmark.url;
    anchor.innerText = bookmark.name;

    label.appendChild(anchor);

    categoryList.appendChild(input);
    categoryList.appendChild(label);
    if (idx < filtered.length - 1) {
      categoryList.appendChild(document.createElement("br"));
    }
  });
}
const formCategoryName = formSection.querySelector(".category-name");
const listCategoryName = bookmarkListSection.querySelector(".category-name");

addBookmarkBtn.addEventListener("click", () => {
  formCategoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener("click", () => {
  const name = nameInput.value;
  const url = urlInput.value;
  const category = categoryDropdown.value;

  const bookmarks = getBookmarks();
  bookmarks.push({ name, category, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  const category = categoryDropdown.value;
  listCategoryName.innerText = category;
  populateCategoryList(category);
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const checked = categoryList.querySelector('input[type="radio"]:checked');
  if (!checked) {
    return;
  }
  const nameToDelete = checked.value;
  const category = listCategoryName.innerText;

  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(
    (b) => !(b.name === nameToDelete && b.category === category),
  );
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  populateCategoryList(category);
});
