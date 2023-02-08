import pb from "../src/lib/pocketbase/pocketbase.js";

import {useState} from "react";
import {useForm} from "react-hook-form";

// Get first user
const getFirstMember = pb.collection('users').getOne('RECORD_ID', {
    expand: 'relField1,relField2.subRelField',
  });

export default function Auth() {
    const [isLoading, setLoading] = useState(false);
    const [dummy, setDummy] = useState(0);
    const {register, handleSubmit} = useForm();

    const isLoggedIn = pb.authStore.isValid;

    async function login (data) {
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
    }

    function logout() {
        pb.authStore.clear();
        setDummy(Math.random());
    }

    if (isLoggedIn) return (
        <>
            <h1>Logged In: {pb.authStore.model.email}</h1>
            <button onClick={logout}>Log Out</button>
        </>
    );

    return (
        <>
        {isLoading && <p>Loading...</p>}
        <h1>Log in</h1>

        <form onSubmit={handleSubmit(login)}>
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

        </>
    );
}