import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../../services/userAPI';
import LoadingMsg from '../loading-msg/Loading';

function Header() {
  const [isLoading, setIsLoading] = useState(true);
  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      // setIsLoading(true);
      // if (isLoading) {
      const getNameUser = await getUser();
      setNameUser(getNameUser.name);
      setIsLoading(false);
      // }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <LoadingMsg />;
  }

  return (
    <header data-testid="header-component">
      <span data-testid="header-user-name">{nameUser}</span>
      <nav>
        <NavLink to="/search" data-testid="link-to-search">Search | </NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favorites | </NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      </nav>

    </header>

  );
}

export default Header;
