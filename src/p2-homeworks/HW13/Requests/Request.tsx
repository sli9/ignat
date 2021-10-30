import React, {useState} from "react";
import {requestApi} from "./RequestsAPI";

const Request = () => {
    const [check, setCheck] = useState(false)
    const [answer, setAnswer] = useState()

    async function requestCallback () {
        try {
            const res = await requestApi.postRequest(check)
                setAnswer(res.data.errorText)
        } catch(error){
            console.log(error.response)
            setAnswer(error.response ? error.response.data.errorText : error.message)
        }

    }
    return <div>
        <h2>{answer}</h2>
        <button onClick={requestCallback}>Request</button>
        <input type={'checkbox'} checked={check} onChange={() => {
            setCheck(!check)
        }}/>
    </div>

}

export default Request