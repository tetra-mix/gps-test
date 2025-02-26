import { Map } from './components/Map'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/add';
import Reset from './pages/reset';
import Form from './pages/form';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/add" element={<Add />} />
        <Route path="/form/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
