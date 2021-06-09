import React, {ChangeEvent, useState} from "react";
import s from "./HW4.module.css";
import SuperInputTextContainer from "./SuperComponents/SuperInputText/SuperInputTextContainer";
import SuperButtonContainer from "./SuperComponents/SuperButton/SuperButtonContainer";

function Allcomponents() {

    const [text, setText] = useState<string>("");
    const error = text ? "" : "error";

    // const showAlert = () => {
    //     if (error) {
    //         alert("введите текст...");
    //     } else {
    //         alert(text); // если нет ошибки показать текст
    //     }
    // }

    // const [checked, setChecked] = useState<boolean>(false);
    // const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>

            {/*<div className={s.column}>*/}

            {/*    <SuperInputText*/}
            {/*        value={text}*/}
            {/*        onChangeText={setText}*/}
            {/*        onEnter={showAlert}*/}
            {/*        error={error}*/}
            {/*        // className={s.blue} рабоет смешивание классов*/}
            {/*    />*/}



                <SuperInputTextContainer/>
                <SuperButtonContainer/>


                {/*<SuperButton*/}
                {/*    red // пропсу с булевым значением не обязательно указывать true*/}
                {/*    onClick={showAlert}*/}
                {/*>*/}
                {/*    delete /!*/}
                {/*</SuperButton>*/}



        </div>
    );
}

export default Allcomponents;







// function Allcomponents() {
//
//   return (
//     <div>
//         <SuperInputTextContainer/>
//         <SuperButtonContainer/>
//
//     </div>
//   );
// }
//
// export default Allcomponents;
