import { burgerState } from "./burgerState";
import { ADD_BREADMID,DELETE_BREADMID } from "./burgerAction"

export const burgerReducer = (state = burgerState, action) => {
    let burger ;
    switch (action.type) {
        case ADD_BREADMID:
            burger = { ...state.burger };
            burger[action.breaditem] += action.amount;
            state.burger = burger;
            state.total += action.amount * state.menu[action.breaditem];
            console.log(action.amount)
            return state;
        case DELETE_BREADMID:
            if(state.burger[action.breaditem] < 1){
                return {...state}
            }
            burger = { ...state.burger };
            burger[action.breaditem] += action.amount;
            state.burger = burger;
            state.total += action.amount * state.menu[action.breaditem]
            return state;
    }
    return state;
}