export type initStateType = {value: string};
const initState:initStateType = {value:"friday1"};

export const reduxReducer1 = (state = initState, action: reduxAction): initStateType => { // fix any
    switch (action.type) {
        case "addValue1": {
            return state={value:action.add};
        }

        default: return state;
    }
};


type reduxAction = {type: string, add:string};
export const reduxAC1 = (add:string): any => {return {type:"addValue1",add:add}};
