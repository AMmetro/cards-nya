import React, {ChangeEvent, useState} from "react";
import SuperInputTextPresent from "./SuperInputTextPresent";
import s from "./SuperInputText.module.css";


function SuperInputTextContainer() {
    const [text, setText] = useState<string>("start text");
    const error = text ? "" : "error";

    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }


    // const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>

            <div className={s.column}>
                <SuperInputTextPresent
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // className={s.blue} рабоет смешивание классов
                />


            </div>

        </div>
    );
}

export default SuperInputTextContainer;
