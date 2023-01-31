import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import deleteUserService from '../../../services/deleteUserService';
import getAllUsers from '../../../services/getAllUsers';
import UserCard from './UserCard';

function RenderUserAdmin({ refresh }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterAdmin = (aUsers) => {
    const filteredUsers = aUsers.filter((user) => user.role !== 'administrator');
    return filteredUsers;
  };

  const fetchAllUsers = async () => {
    const responseAllUsers = await getAllUsers();
    const filteredUsers = filterAdmin(responseAllUsers.data.message);
    setUsers(filteredUsers);
    setLoading(false);
    // setRefresh();
    console.log(responseAllUsers.data.message);
  };

  const deleteUser = async (id) => {
    setLoading(true);
    await deleteUserService(id);
    fetchAllUsers();
  };

  useEffect(() => {
    (async () => {
      fetchAllUsers();
    })();
  }, [refresh]);

  // useEffect(() => {

  // }, [refresh]);

  const renderUsers = () => users.map((user, index) => {
    const { id, name, email, role } = user;
    console.log(user);
    return (
      <tbody
        key={ id }
      >
        <UserCard
          index={ index + 1 }
          name={ name }
          email={ email }
          role={ role }
          id={ id }
          deleteUser={ deleteUser }
        />
      </tbody>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      { loading ? <p>Loading...</p> : renderUsers() }
    </table>
  );
}

RenderUserAdmin.propTypes = {
  refresh: PropTypes.bool,
  // setRefresh: PropTypes.func,
}.isRequired;
export default RenderUserAdmin;
