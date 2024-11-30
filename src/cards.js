import data from "../db/data.json";
export function createNewCard(div) {
  div.innerHTML += '<div class="coincidences">Совпадения не найдены :(</div>';
  const persons = data.persons;
  persons.forEach((person) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h2><div class="name">${person.Name}</div><div class="surname">${person.Surname}</div></h2>
            <p><strong>Должность:</strong> ${person.Job_title}</p>
            <p><strong>Телефон:</strong> ${person.Telephone}</p>
            <p><strong>Город:</strong> <div class="city">${person.City}</div></p>
            <p><strong>Роль:</strong> <div class="role">${person.Role}</div></p>
        `;

    card.addEventListener("click", () => {
      openModal(person);
    });

    div.appendChild(card);
  });
}

function openModal(person) {
  const modal = document.querySelector(".modal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
        <p><strong>Имя:</strong> ${person.Name}</p>
        <p><strong>Фамилия:</strong> ${person.Surname}</p>
        <p><strong>Должность:</strong> ${person.Job_title}</p>
        <p><strong>Телефон:</strong> ${person.Telephone}</p>
        <p><strong>Город:</strong> ${person.City}</p>
        <p><strong>Адрес:</strong> ${person.Address}</p>
        <p><strong>Подразделение:</strong> ${person.Subdivision_1}</p>
        <p><strong>Функциональный блок:</strong> ${person.Function_block}</p>
        <p><strong>Подразделение 2:</strong> ${person.Subdivision_2}</p>
        <p><strong>Команда:</strong> ${person.Subdivision_3}</p>
        <p><strong>Роль:</strong> ${person.Role}</p>
    `;

  modal.style.display = "block";
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
