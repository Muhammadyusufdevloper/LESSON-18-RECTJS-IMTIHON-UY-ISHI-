import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
