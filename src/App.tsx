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
      </nav>
      <main>
        {/* sayfaların App component doma girdiğinde yukarıdaki linke göre sayfaların outlet olarak işaretlenmiş yere girişini sağlar. */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
