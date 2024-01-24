export const selectFoodCategory = (foodCategory: string) => {
  return {
    type: "SELECT_FOOD_CATEGORY" as const,
    payload: foodCategory,
  };
};

export const selectRegion = (region: string) => {
  return {
    type: "SELECT_REGION" as const,
    payload: region,
  };
};

export const updateView = (view: "SET_FOOD_CATEGORY" | "SET_REGION" | "VIEW_PRODUCTS") => {
  return {
    type: "UPDATE_VIEW" as const,
    payload: view,
  };
};
