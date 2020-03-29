import React, {useContext} from 'react';
import { Hero, UserContext } from '../components/';

const Home = () => {
  const {
    state: {
      isLoggedIn,
      user: { name },
    },
  } = useContext(UserContext);
  return (
  <div className="container">
    
    {isLoggedIn ? "hello there" :<Hero title="Get Tabs App" body="A better bookmarking tool"/>}
  </div>
)
}

export default Home