import data from "../db/data.json";

export function createNewCard(div) {
  const persons = data.persons;
  persons.forEach((person) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${person.Name} ${person.Surname}</h2>
        <p><strong>Должность:</strong> ${person.Job_title}</p>
        <p><strong>Телефон:</strong> ${person.Telephone}</p>
        <p><strong>Город:</strong> <div class="city">${person.City}</div></p>
        <p><strong>Адрес:</strong> ${person.Address}</p>
        <p><strong>Подразделение:</strong> ${person.Subdivision_1}</p>
        <p><strong>Функциональный блок:</strong> ${person.Function_block}</p>
        <p><strong>Подразделение 2:</strong> ${person.Subdivision_2}</p>
        <p><strong>Команда:</strong> ${person.Subdivision_3}</p>
        <p><strong>Роль:</strong> <div class="role">${person.Role}</div></p>
    `;
    div.appendChild(card);
  });
}
