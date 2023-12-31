import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        {/* spa routing için kullanılan bir component a href kullanmıyoruz */}
        {' '}
        <Link to="/useEffect" >Use Effect Sample</Link>
        {' '}
        <Link to="/reactMemo" >React Memo Sample</Link>
        {' '}
        <Link to="/useRef" >UseRef Sample</Link>
        {' '}
        <Link to="/useMemo">Use Memo Sample</Link>
        {' '}
        {/* sayfa yenilenerek yönlendirme yapıyor. */}
         <Link to="/useLayoutEffect">Use Layout Effect Sample</Link>
         {' '}
          <Link to="/useCallback">Use Callback Sample</Link>
        <a href='/useLayoutEffect'> Href</a>
             {' '}
         <Link to="/logout">LogOut</Link>
      </nav>
      <main>
        {/* sayfaların App component doma girdiğinde yukarıdaki linke göre sayfaların outlet olarak işaretlenmiş yere girişini sağlar. */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
