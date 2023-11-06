import { Layout } from "./components/Layout";

import { Header } from "./components/Header/Header";
import { login } from "./services/login";
import { Card } from "./components/Card";
function App() {
  return (
    <>
    <Header />
    <Card 
      titulo = {"Fazer Login"}
     />
     
    </>
  );
}

export default App;
