const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.users }
        case "SET_SELECTED_USERS": {
            const { selectedUsers } = action;
            const arr = Object.assign([], state.users);
            const filtered_arr = arr.filter(item => {
                const { id } = item;
                return selectedUsers.indexOf(id) !== -1;
            });
            console.log(filtered_arr);
            return { ...state, users: filtered_arr };
        }
        default:
            return state;
    }
}

export default userReducer;