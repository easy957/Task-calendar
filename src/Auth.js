import pb from "../src/lib/pocketbase/pocketbase";
import API, { createNewUser } from "./api/api"

import useLogout from "./hooks/useLogout";

import {useState} from "react";
import {useForm} from "react-hook-form";

export default function Auth() {
    const logout = useLogout();
    const testText = "test";

    const [isLoading, setLoading] = useState(false);
    //const {login, isLoading} = useLogin();

    const {register, handleSubmit, reset} = useForm();

    const isLoggedIn = pb.authStore.isValid;

    async function onSubmit (data) {
            setLoading(true);
            try{
            const authData = await pb
                .collection('users')
                //.getOne('RECORD_ID', { expand: 'relField1,relField2.subRelField', });
                .authWithPassword(data.email, data.password);
            } catch(e) {
                alert(e);
            }
            setLoading(false);
        reset();
    }

    async function getTask () {
        setLoading(true);
        try{
            const authData = await pb.collection('tasks').getOne('RECORD_ID', {
                expand: 'relField1,relField2.subRelField',
        });
        } catch(e) {
            alert(e);
        }
        //testText = authData;
    }

    if (isLoggedIn) 
        return (
            <>
                <h1>Logged In: {pb.authStore.model.email}</h1>
                <button onClick={logout}>Log Out</button>
            </>
    );

    return (
        <>
        {isLoading && <p>Loading...</p>}
        <h1>Log in</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder="email"
                //value={username}
                //onChange={(e) => setUsername(e.target.value)} 
                {...register("email")}
            />

            <input 
                type="password" 
                placeholder="password"
                //value={password}
                //onChange={(e) => setPassword(e.target.value)} 
                {...register("password")}
            />

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading" : "Login"}
            </button>
        </form>

        
        <button onClick={createNewUser("Partak", "partak@mail.com", "Partak")}>
                Create
        </button>

        </>
    );
}