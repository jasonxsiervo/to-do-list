
const dataTasks = [
    {
        "id": "b4234370d-9223-4343a4a-9bc9-f1f5ffdd9070140",
        "title": "Get Groceries 🛒",
        "details": "Get apples",
        "date": "Mon Nov 02 2020 12:00:00 GMT+0800 (Philippine Standard Time) {}",
        "time": `23:11`,
    }
];

const tasksReducer = (state = dataTasks, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        case "ADD_TASK":
            console.log('payload: ', action.payload);
            return [...state, { ...action.payload }];
        case 'EDIT_TASK':
            return state - 1;
        case 'VIEW_TASK':
            return state - 1;
        case 'DELETE_TASK':
            const copyState = [...state];
            console.log("ID: ", action.payload);
            const i = copyState.findIndex(x => x.id === action.payload);
            copyState.splice(i, 1);
            return [...copyState];
        default:
            return state;
    }
}

export default tasksReducer;