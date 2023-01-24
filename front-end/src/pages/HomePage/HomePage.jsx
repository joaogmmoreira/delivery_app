import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();
  history.push('/login');

  return (
    <>
    </>
  );
}
