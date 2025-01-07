import React, { useState } from 'react';

function useOptimistic(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [optimistic, setOptimisticValue] = useState(initialValue);

  const updateOptimistic = (newValue) => {
    setOptimisticValue(newValue); 
    setValue(newValue); 
  };

  return [optimistic, updateOptimistic];
}

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [optimisticUsername, setOptimisticUsername] = useOptimistic(formData.username);
  const [optimisticPassword, setOptimisticPassword] = useOptimistic(formData.password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setOptimisticUsername(value);
    } else if (name === 'password') {
      setOptimisticPassword(value);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);
    

    setFormData({
      username: '',
      password: '',
    });
    setOptimisticUsername('');
    setOptimisticPassword('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={optimisticUsername} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={optimisticPassword} 
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
