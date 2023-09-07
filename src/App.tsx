import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formpage from './pages/Formpage';
import Previewpage from './pages/Previewpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formpage />} />
        <Route path="/preview" element={<Previewpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
