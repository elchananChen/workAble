import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage.tsx";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/app-sidebar";
import Contact from "./pages/Contact.tsx";
import SignUpForm from "./components/signUpForm/signUpForm.tsx";
import { LoginForm } from "./components/login-form.tsx";

function App() {
  return (
    <div>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarTrigger></SidebarTrigger>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/auth" element={<AuthPage />}>
            <Route path="signUp" element={<SignUpForm />} />
            <Route path="logIn" element={<LoginForm />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </div>
  );
}

export default App;
