import PropTypes from "prop-types";

export function NewCard({ person }) {
  return (
    <div className="card">
      <h2>
        <div className="name">
          {person.name} {person.surname}
        </div>
      </h2>
      <p>
        <strong>Должность:</strong> {person.position.name}
      </p>
      <p>
        <strong>Телефон:</strong> {person.phone_number}
      </p>
      <div>
        <p className="city">
          <strong>Город:</strong>
          {person.address.split(",")[0]}
        </p>
      </div>
      <div>
        <p className="role">
          <strong>Роль:</strong> {person.role.name}
        </p>
      </div>
    </div>
  );
}

NewCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    position: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    phone_number: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    role: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
