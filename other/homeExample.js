
import Layout from "./Components/Layout";
import { useEffect } from 'react'
import { useRouter } from "next/router";

export default function Home() {

    const router = useRouter();
    useEffect(() => {
        //localStorage.getItem('token') //check the token from localstorage
        //router.push('/');
    }, [])
    return (
        <>
            <Layout title={"Home Page"}>

            </Layout>

        </>
    );
};