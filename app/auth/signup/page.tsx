// signup/page.tsx
import { useState } from 'react';
import axios from 'axios';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/auth/register', { email, password, role });
      console.log('Registration Successful', response.data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <select
        onChange={(e) => setRole(e.target.value)}
            aria-label="Role selection">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
