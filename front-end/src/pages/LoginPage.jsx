import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h1>My Login Page</h1>
      <Link to="/login">
        <span>Login Page</span>
      </Link>

      <Link to="/">
        <span>Home Page</span>
      </Link>
    </div>
  );
}
