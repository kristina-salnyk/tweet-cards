import { useEffect } from 'react';
import WebFont from 'webfontloader';

import { UsersList } from './components/UsersList';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'sans-serif'],
      },
    });
  }, []);

  return <UsersList />;
}
export default App;
