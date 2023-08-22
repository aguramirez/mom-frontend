
export const silviaReducer = (state=[], action) => {

    switch (action.type) {
        case 'addPago':
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];
    
        default:
            break;
    }
}