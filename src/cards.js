import data from "../db/data.json";
export function createNewCard(div) {
  div.innerHTML += '<div class="coincidences">Совпадения не найдены :(</div>';
  const persons = data.persons;
  persons.forEach((person) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h2><div class="name">${person.name}</div><div class="surname">${person.surname}</div></h2>
            <p><strong>Должность:</strong> ${person.position.name}</p>
            <p><strong>Телефон:</strong> ${person.phone_number}</p>
             <p><strong>Адрес:</strong> <div class="city">${person.address}</div></p>
            <p><strong>Роль:</strong> <div class="role">${person.role.name}</div></p>
        `;

    card.addEventListener("click", () => {
      openModal(person);
    });

    div.appendChild(card);
  });
}

function openModal(person) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
        <p><strong>Имя:</strong> ${person.name}</p>
        <p><strong>Фамилия:</strong> ${person.surname}</p>
        <p><strong>Должность:</strong> ${person.position.name}</p>
        <p><strong>Телефон:</strong> ${person.phone_number}</p>
        <p><strong>Адрес:</strong> <div class="city">${person.address}</div></p>
        <p><strong>Подразделение:</strong> ${person.division.name}</p>
        <p><strong>Роль:</strong> ${person.role.name}</p>
        
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
