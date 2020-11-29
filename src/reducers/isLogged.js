const dataUsers = {
    "userId": "87323242342342",
    "firstName": "Jason",
    "lastname": "Siervo",
    "email": "jason.siervo@gmail.com",
    "password": "secret"
};

const loggedReducer = (state = dataUsers, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
};

export default loggedReducer;