export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const addTask = (userId) => {
    return {
        type: 'ADD_TASK',
        userId
    }
};

export const editTask = (userId, taskId) => {
    return {
        type: 'EDIT_TASK',
        userId,
        taskId
    }
};

export const addUser = (firstName, lastName, email, password) => {
    return {
        type: 'ADD_USER',
        firstName,
        lastName,
        email,
        password
    }
};