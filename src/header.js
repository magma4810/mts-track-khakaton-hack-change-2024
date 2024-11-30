export function header(div) {
  div.innerHTML = `
        <div class="icon"><img src="https://design.mts.ru/img/mts-logo.svg" alt=""><div class="name">LENDING</div></div>
        <div class="text-field__icon">
            <input class="text-field__input" type="search" name="search" id="search" placeholder="Введите имя или фамилию сотрудника">
            <button class = "icon_button"><span class="text-field__aicon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
            </span></button>
          </div>
    `;
  document.querySelector(".icon_button").addEventListener("click", () => {
    filterNameOrSurname();
  });
}

function filterNameOrSurname() {
  const searchValue = document
    .querySelector(".text-field__input")
    .value.toLowerCase();
  console.log(searchValue);
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const name = card.querySelector(".name").textContent.toLowerCase();
    const surname = card.querySelector(".surname").textContent.toLowerCase();
    const nameAndSurname = name + " " + surname;
    console.log(nameAndSurname);
    console.log(searchValue);
    if (
      (name.includes(searchValue) ||
        surname.includes(searchValue) ||
        nameAndSurname.includes(searchValue)) &&
      card.style.display !== "none"
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
