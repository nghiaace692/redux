const initialState = {
    item: [
        {
            name: "",
            completed: false,
            id: Date.now()
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NAME":
            return {
                ...state,
                item: [...state.item, { name: action.payload }]
            };
        case 'TOGGLE':
            return {
                ...state,
                item:[...state.item,{completed:true}]
            }
        default:
            return state;
    }
};
