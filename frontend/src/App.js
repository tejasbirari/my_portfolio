import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Adminpage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Protected from "./services/Protected";


function App() {
  return (
    <div className="App" style={{ background: "#14131a" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<Protected><Adminpage /></Protected>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
