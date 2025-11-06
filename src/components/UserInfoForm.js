import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../redux/userSlice';

function UserInfoForm() {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>
      <form autoComplete="off">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(updateName(e.target.value))}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </label>
      </form>
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default UserInfoForm;
