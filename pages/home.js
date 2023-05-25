
import Layout from "./layout";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/')
        }
    })


    const loadData = async () => {

        const token = localStorage.getItem("token");

        await axios
            .get(
                "http://localhost:3010/users",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((result) => {
                console.log(result.data);
            })
            .catch((error) => {

                console.log(error);
            });
    }


    return (
        <>
            <Layout title={"Home Page"}>
                <div className="home">
                </div>
            </Layout>
        </>
    );
};