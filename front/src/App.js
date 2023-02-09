import {Routes, Route} from 'react-router-dom';

import Header from './component/header';
import ViewHome from './viewHome';
import ViewShop from './viewShop';
import ViewContent from './viewContents';
import ViewAbout from './viewAbout';
import ViewActors from './viewActors';
import ViewPerson from './ViewPerson';
import ViewWorld from './viewWorld';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact={true} element={<ViewHome />}></Route>
        <Route path='/*' element={<Header />}>
          <Route path='shop' element={<ViewShop />}></Route>
          <Route path='actors' element={<ViewActors />}></Route>
          <Route path='actors/:idx' element={<ViewPerson />}></Route>
          <Route path='contents' element={<ViewContent />}></Route>
          <Route path='about' element={<ViewAbout />}></Route>
          <Route path='world' element={<ViewWorld />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
