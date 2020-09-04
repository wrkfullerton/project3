export const initialState = {
    tutorCard: [],
};

const reducer = (state, action) => {
    console.log(action); 
    switch(action.type) {
        case "VIEW_TUTOR":
            // logic for viewing tutor
            return {
            ...state,
            tutorCard: [...state.tutorCard, action.item],
        };

        case 'REMOVE_TUTOR_STATE':

        let newTutor = [...state.tutorCard];

        const index = state.tutorCard.findIndex(
            (tutorCardItem) => tutorCardItem.id === action.id
        );

        if (index >= 0) {
            newTutor.splace(index, 1);
        } else {
            console.warn(
                'Cant remove Tutor (id: ${action.id}) as its not found.'
            );
        }
        return { ...state, tutorCard: newTutor };
            
            default:
                return state;
        }
    }
        
export default reducer;