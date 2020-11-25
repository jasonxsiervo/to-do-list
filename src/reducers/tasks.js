const dataTasks = [
    {
        "code": "BAcyDyQwcXX",
        "caption": "Lunch #hamont",
        "likes": 56,
        "id": "1161022966406956503",
        "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
];

const tasksReducer = (state = dataTasks, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        case "ADD_TASK":
            return state + action.payload;
        case 'EDIT_TASK':
            return state - 1;
        default:
            return state;
    }
}

export default tasksReducer;