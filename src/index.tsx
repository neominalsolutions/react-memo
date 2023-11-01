import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import UseEffectSample from './pages/useEffect/UseEffectSample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactMemoSample from './pages/reactMemo/ReactMemoSample';
import UseRefSample from './pages/useRef/UseRefSample';
import UseMemoSample from './pages/useMemo/UseMemoSample';
import UseLayoutEffectSample from './pages/useLayoutEffect/UseLayoutEffectSample';
import UseCallbackSample from './pages/useCallback/UseCallbackSample';


const UseEffectSampleLazy = React.lazy(() => import('./pages/useEffect/UseEffectSample'));

// useRef Module haline gelip webpack artık ayrı bir js dosyasına bölecek ve sadece ilgili route istedeğinde componentlerin yüklenemsi sağlanacak.
// code-splitting tekniği diyoruz. 
const UseRefSampleLazy = React.lazy(() => import('./pages/useRef/UseRefSample'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const logOut = () => {
  alert("Çıkış Yapılıyor");
}

root.render(
  // sadece development modda çalışır.
  // <React.StrictMode>
  <Suspense fallback={<>... loading </>}>
    <BrowserRouter>
      <Routes>
        {/* /about /contact */}
        {/* app componenti outlet ile sarıp layout gibi kullanıcaz */}
        {/* nested route yapısı */}
        <Route path='/' Component={App}>
          {/* React Lazy */}
          <Route path='/useEffect' Component={UseEffectSampleLazy}></Route>
          <Route path='/reactMemo' Component={ReactMemoSample}></Route>
          <Route path='/useRef' Component={UseRefSampleLazy}></Route>
          <Route path='/useMemo' Component={UseMemoSample}></Route>
          <Route path='/useLayoutEffect' element={<>
            <p>Element</p>
            <UseLayoutEffectSample />
          </>}></Route>

            <Route path='/logout' action={() => logOut}></Route>

          </Route>
          <Route path='/useCallback' Component={UseCallbackSample}></Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
