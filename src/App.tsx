import './App.css';
import { Homepage } from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import { Characters } from './pages/Character';


function App() {
  

  return (
    <div className='App'>
      
      <Routes>
          <Route path={'/'} element={<Homepage/>}/>
          <Route path={'/1'} element={<Characters index={1}/>}/>
          <Route path={'/2'} element={<Characters index={2}/>}/>
          <Route path={'/3'} element={<Characters index={3}/>}/>
          <Route path={'/4'} element={<Characters index={4}/>}/>
          <Route path={'/5'} element={<Characters index={5}/>}/>
          <Route path={'/6'} element={<Characters index={6}/>}/>
          <Route path={'/7'} element={<Characters index={7}/>}/>
          <Route path={'/8'} element={<Characters index={8}/>}/>
          <Route path={'/9'} element={<Characters index={9}/>}/>
          <Route path={'/10'} element={<Characters index={10}/>}/>

      </Routes>
    </div>
  );
}

export default App;
