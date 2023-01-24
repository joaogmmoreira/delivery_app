import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();
  useEffect(() => {
    history.push('/login');
  }, []);
  return (
    <>
    </>
  );
}
