import data from "../db/data.json";

function createFilter(filter) {
  const div = document.createElement("div");
  div.className = "filter";
  div.innerHTML = `
        <button class="dropdown-btn">${filter.filter_name}</button>
    `;
  div.appendChild(addValues(filter.value));
  return div;
}

function addValues(values) {
  const dropdown_container = document.createElement("div");
  dropdown_container.className = "dropdown-container";
  values.forEach((element) => {
    dropdown_container.innerHTML += `<a href="#"><label><input type="checkbox">${element}</label></a>`;
  });
  return dropdown_container;
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
