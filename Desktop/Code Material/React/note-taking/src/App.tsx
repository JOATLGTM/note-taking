import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route>
          <Route index element={<h1>Show</h1>} />
          <Route index path="edit" element={<h1>Show</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
