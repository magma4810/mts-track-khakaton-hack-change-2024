import PropTypes from 'prop-types';

export function MenuElement({children}){
    return (
        <>
        <a href="#">
            <label className="menuElement">
            <input type="checkbox" value="value" name="name"/>
            {children}</label>
        </a> 
        </>
    )
}

MenuElement.propTypes = {
    children: PropTypes.node.isRequired,
};