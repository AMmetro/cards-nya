type initStateType = {value: string};
const initState:initStateType = {value:"friday2"};

export const reduxReducer2 = (state = initState, action: reduxAction): initStateType => { // fix any
    switch (action.type) {
        case "addValue2": {
            return state={value:action.add};
        }

        default: return state;
    }
};


type reduxAction = {type: string,add:string};
export const reduxAC2 = (add:string): any => {return {type:"addValue2",add:add}};
