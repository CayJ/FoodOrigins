interface OriginState {
    foodCategory: string,
    region: string,
    view: "SET_FOOD_CATEGORY" | "SET_REGION" | "VIEW_PRODUCTS";
}

interface SelectFoodCategoryAction {
    type: "SET_FOOD_CATEGORY";
    payload: string;
}

interface SelectRegionAction {
    type: "SET_REGION";
    payload: string;
}

interface UpdateViewAction {
    type: "UPDATE_VIEW";
    payload: "SET_FOOD_CATEGORY" | "SET_REGION" | "VIEW_PRODUCTS";
}

type OriginActions = SelectFoodCategoryAction | SelectRegionAction | UpdateViewAction;

const initialState: OriginState = {
    foodCategory: "",
    region: "",
    view: "SET_FOOD_CATEGORY",
};

const originReducer = (state = initialState, action: OriginActions): OriginState => {
    switch (action.type) {
        case "SET_FOOD_CATEGORY":
            return {
                ...state,
                foodCategory: action.payload,
            };
        case "SET_REGION":
            return {
                ...state,
                region: action.payload,
            };
        case "UPDATE_VIEW":
            return {
                ...state,
                view: action.payload,
            };
        default:
            return state;
    }
};

export default originReducer;
