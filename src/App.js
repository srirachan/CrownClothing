import CategoryItem from "./components/category-item/category-item";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation";

import "./category.scss";
import SignIn from "./routes/sign-in/signin";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<CategoryItem />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/sign-in' element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;
