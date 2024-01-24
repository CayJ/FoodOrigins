import React from "react";
import { Routes, Route } from "react-router-dom";
import { SelectFoodCategory } from "./pages/SelectFoodCategory";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectFoodCategory />} />
    </Routes>
  );
};

export default App;
