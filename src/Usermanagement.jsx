import React, { useState } from "react";
import "./Usermanagement.css";
import Header from "./Header";

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", role: "Admin" },
  ]);

  const [newUser, setNewUser] = useState({ username: "", role: "" });
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const input = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ username: "", role: "" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditedUser(userToEdit);
    setEditing(true);
  };

  const editInput = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const saveEditedUser = () => {
    setUsers(
      users.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
    setEditing(false);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  return (
    <>
      <Header />
      <div className="user-management">
        <h3>USER MANAGEMENT</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.role}
              <button onClick={() => deleteUser(user.id)} id="usr-btn">
                Delete
              </button>
              <button onClick={() => editUser(user.id)} id="usr-btn">
                Edit
              </button>
            </li>
          ))}
        </ul>

        <h3>Add User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUser();
          }}
        >
          <label>
            Username:
            <input
              id="usr-btn"
              type="text"
              name="username"
              value={newUser.username}
              onChange={input}
            />
          </label>
          <label>
            Role:
            <input
              id="usr-btn"
              type="text"
              name="role"
              value={newUser.role}
              onChange={input}
            />
          </label>
          <button type="submit" id="usr-btn">
            Add User
          </button>
        </form>

        {editing && (
          <div>
            <h3>Edit User</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveEditedUser();
              }}
            >
              <label>
                Username:
                <input
                  id="usr-btn"
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={editInput}
                />
              </label>
              <label>
                Role:
                <input
                  id="usr-btn"
                  type="text"
                  name="role"
                  value={editedUser.role}
                  onChange={editInput}
                />
              </label>
              <button type="submit" id="usr-btn">
                Save
              </button>
              <button type="button" id="usr-btn" onClick={cancelEditing}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default UserManagement;
