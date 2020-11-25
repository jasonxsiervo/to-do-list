const dataUsers = [
    {
        "userId": "87323242342342",
        "email": "jason.siervo@gmail.com",
        "firstName": "Jason",
        "lastname": "Siervo",
        "password": "secret"
    },
    {
        "userId": "87323242342342",
        "email": "angelo.siervo@gmail.com",
        "firstName": "Angelo Isaac",
        "lastname": "Siervo",
        "password": "password"
    },

];

const loggedReducer = (state = dataUsers, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
};

export default loggedReducer;