import data from "../db/data.json";

function createFilter(filter) {
  const div = document.createElement("div");
  div.className = "filter";
  div.innerHTML = `
        <button class="dropdown-btn">${filter.filter_name}</button>
    `;
  div.appendChild(addValues(filter));
  return div;
}

function addValues(filter) {
  const dropdown_container = document.createElement("div");
  dropdown_container.className = "dropdown-container";
  const values = filter.value;
  values.forEach((element) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = element;
    checkbox.name = filter.filter_name;

    const label = document.createElement("label");
    label.textContent = element;
    label.prepend(checkbox);

    const link = document.createElement("a");
    link.href = "#";
    link.appendChild(label);

    checkbox.addEventListener("change", filterCards);

    dropdown_container.appendChild(link);
  });

  return dropdown_container;
}

function filterCards() {
  const cards = document.querySelectorAll(".card");
  const selectedRoles = Array.from(
    document.querySelectorAll("input[type='checkbox'][name='Роль']:checked"),
  ).map((checkbox) => checkbox.value);
  const selectedCities = Array.from(
    document.querySelectorAll("input[type='checkbox'][name='Город']:checked"),
  ).map((checkbox) => checkbox.value);

  cards.forEach((card) => {
    const role = card.querySelector(".role").textContent;
    const city = card.querySelector(".city").textContent;

    const roleMatches =
      selectedRoles.includes(role) && card.style.display !== "none";
    const cityMatches =
      selectedCities.includes(city) && card.style.display !== "none";

    const matches =
      (selectedRoles.length === 0 || roleMatches) &&
      (selectedCities.length === 0 || cityMatches);

    card.style.display = matches ? "block" : "none";
  });
}

export function sidebar(div) {
  const filters = data.filters;

  filters.forEach((element) => {
    div.appendChild(createFilter(element));
  });
  let filter = document.querySelectorAll(".filter");
  filter.forEach(function (element) {
    let dropdown_container = element.querySelector(".dropdown-container");
    element.addEventListener("click", function () {
      if (dropdown_container.style.display === "block") {
        dropdown_container.style.display = "none";
      } else {
        dropdown_container.style.display = "block";
      }
    });
  });
}
