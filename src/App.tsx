import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { SelectFoodCategory } from "./pages/SelectFoodCategory";
import SelectRegion from "./pages/SelectRegion";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectFoodCategory />} />
        <Route path="/:food_category/" element={<SelectRegion />} />
    </Routes>
  );
};

export default App;
