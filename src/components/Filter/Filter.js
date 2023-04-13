import propTypes from 'prop-types';
export default function Filter({value, onChange}){
    return <>
    <label>Find contacts by name</label>
    <input type="text" value={value} onChange={onChange}></input>
    </>
};
Filter.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}