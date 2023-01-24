export default function Navbar() {
  return (
    <header>
      <span>
        {localStorage.getItem('name')}
      </span>
    </header>
  );
}
