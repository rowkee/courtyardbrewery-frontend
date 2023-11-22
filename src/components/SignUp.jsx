import React from "react";
import { useState } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({
      username: '',
      first_name: '',
      last_name: '',
      password: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          const data = await response.json();
          console.log('User signed up successfully:', data);
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username (recommeneded to use email)"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleInputChange}
      />      
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
