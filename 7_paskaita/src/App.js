import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactsPage from './Pages/ContactsPage';
import CarPage from './Pages/CarPage';
function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='/cars/:id' element={<CarPage/>}/>
      </Routes>
  );
}

export default App;
