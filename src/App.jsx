import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./layout";

import { Dashboard } from "./pages/DashBoard";
import { ListOfPatient } from "./pages/ListOfPatient";
import { LoginForm } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ROUTES } from './constants/Index';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.Dashboard.path} element={<Dashboard />} />
          <Route path={ROUTES.Patients.path} element={<ListOfPatient />} />
          <Route path={ROUTES.Login.path} element={<LoginForm />} />
          <Route path={ROUTES.Sign_Up.path} element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;