export function sidebar(div) {
  div.innerHTML = `
  <div class='filter'>
  <button class="dropdown-btn"> 
 	
Подразделение 1 

  </button>
  <div class="dropdown-container">
    <a href="#"><label><input type="checkbox">Центральный офис</label></a>
    <a href="#"><label><input type="checkbox">Филиал в Оренбургской области</label></a>
    <a href="#"><label><input type="checkbox">Филиал в Волгоградской области</label></a>
    </div>
    </div>
    <div class='filter'>
  <button class="dropdown-btn">Функциональный блок</button>
  <div class="dropdown-container">
    <a href="#"><label><input type="checkbox">Корпоративный блок</label></a>
    <a href="#"><label><input type="checkbox">Розничный блок</label></a>
    </div>
  </div>
  `;

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
