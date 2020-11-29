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

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task,
    }
};

export const editTask = (userId, taskId) => {
    return {
        type: 'EDIT_TASK',
        userId,
        taskId
    }
};

export const viewTask = (userId, taskId) => {
    return {
        type: 'VIEW_TASK',
        userId,
        taskId
    }
};

export const deleteTask = (Id) => {
    return {
        type: 'DELETE_TASK',
        payload: Id
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