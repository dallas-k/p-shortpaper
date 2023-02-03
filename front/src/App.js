import {Routes, Route} from 'react-router-dom';

import Header from './component/header';
import Footer from './component/footer';

import ViewHome from './viewHome';
import ViewShop from './viewShop';
import ViewNews from './viewNews';
import ViewAbout from './viewAbout';
import ViewActors from './viewActors';
import ViewPerson from './ViewPerson';
import ViewWorld from './viewWorld';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<ViewHome />}></Route>
          <Route path='/shop' element={<ViewShop />}></Route>
          <Route path='/actors' element={<ViewActors />}></Route>
          <Route path='/actors/:idx' element={<ViewPerson />}></Route>
          <Route path='/news' element={<ViewNews />}></Route>
          <Route path='/about' element={<ViewAbout />}></Route>
          <Route path='/world' element={<ViewWorld />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
