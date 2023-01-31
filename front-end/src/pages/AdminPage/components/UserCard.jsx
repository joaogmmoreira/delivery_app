import PropTypes from 'prop-types';

function UserCard({ index, name, email, role, id, deleteUser }) {
  return (
    <tr key={ index }>
      <td>{ index }</td>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ role }</td>
      <td>
        <button
          type="button"
          onClick={ () => deleteUser(id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

UserCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  id: PropTypes.number,
  deleteUser: PropTypes.func,
}.isRequired;

export default UserCard;
