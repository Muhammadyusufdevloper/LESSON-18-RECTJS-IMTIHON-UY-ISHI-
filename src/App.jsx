import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import SingleRout from "./pages/single-rout";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="single/:id" element={<SingleRout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
