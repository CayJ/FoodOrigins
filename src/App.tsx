import React from "react";
import { Routes, Route } from "react-router-dom";
import { SelectFoodCategory } from "./pages/SelectFoodCategory";
import SelectRegion from "./pages/SelectRegion";
import SelectFood from "./pages/SelectFood";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectFoodCategory />} />
        <Route path="/:food_category/" element={<SelectRegion />} />
        <Route path="/:food_category/:region" element={<SelectFood />} />
    </Routes>
  );
};

export default App;
