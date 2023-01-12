import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactsPage from './Pages/ContactsPage';
function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
      </Routes>
  );
}

export default App;
