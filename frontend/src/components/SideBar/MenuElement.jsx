import PropTypes from "prop-types";

export function MenuElement({ children, ...props }) {
  return (
    <>
      <a href="#">
        <label className="menuElement">
          <input
            type="checkbox"
            value="value"
            name="name"
            checked={props.checked}
            onChange={props.setСhecked}
          />
          {children}
        </label>
      </a>
    </>
  );
}

MenuElement.propTypes = {
  children: PropTypes.node.isRequired,
};
