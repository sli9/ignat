import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

export type themeType = 'dark' | 'red' | 'some'
const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, themeType>(state => state.theme.theme)

    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const onChangeCallback = useCallback((theme: themeType) => {
        dispatch(changeThemeC(theme))
    }, [dispatch])
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
