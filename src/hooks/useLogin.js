import pb from "../lib/pocketbase/pocketbase"
import {useState} from "react";

export default function useLogin() {
    const [isLoading, setLoading] = useState(false);

    async function login (email, password) {
        setLoading(true);
        try{
        const authData = await pb
            .collection('users')
            //.getOne('RECORD_ID', { expand: 'relField1,relField2.subRelField', });
            .authWithPassword(email, password);
        } catch(e) {
            alert(e);
        }
        setLoading(false);
    }

    return {login, isLoading}
}