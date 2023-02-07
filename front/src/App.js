import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Header from './component/header';
import Footer from './component/footer';
import ViewHome from './viewHome';
import ViewShop from './viewShop';
import ViewContent from './viewContents';
import ViewAbout from './viewAbout';
import ViewActors from './viewActors';
import ViewPerson from './ViewPerson';
import ViewWorld from './viewWorld';
import NotFound from './NotFound';

function App() {
  // const [location, setLocation] = useState(useLocation().pathname);
  // console.log(useParams());
  console.log(useLocation());
  return (
    <>
        <Header />
        <main>
          <Routes>
            <Route path='/' exact={true} element={<ViewHome />}></Route>
            <Route path='/shop' element={<ViewShop />}></Route>
            <Route path='/actors' element={<ViewActors />}></Route>
            <Route path='/actors/:idx' element={<ViewPerson />}></Route>
            <Route path='/contents' element={<ViewContent />}></Route>
            <Route path='/about' element={<ViewAbout />}></Route>
            <Route path='/world' element={<ViewWorld />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
