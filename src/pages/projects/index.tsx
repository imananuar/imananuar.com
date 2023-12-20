import { Button } from "@/components/ui/button";
import axios, { AxiosResponse} from "axios";
// import { Link } from "lucide-react";
import  Link  from "next/link";
import { useRouter } from "next/router";
import { NestJs, NodeJs, SpringBoot }  from '@/components/icons/customIcons';

export default function Projects() {
    const router  = useRouter();

    const getAllUsers = async () => {
        const response = await axios.get("http://localhost:7070/api/allUsers");
        console.log(response.data);
    }

    const getUser = async () => {
        const response = await axios.get("http://localhost:7070/api/user");
        console.log(response.data);
    }

    const deleteUser = async () => {
        const response = await axios.delete("http://localhost:7070/api/user");
    }

    const createUser = async () => {
        const response = await axios.post("http://localhost:7070/api/user");
        console.log("Successfully Created!");
    }

    const udpateUser = async () => {
        const response = await axios.put("http://localhost:7070/api/user");
        console.log("Successfully Created!");
    }

    return (
        <>
            <div className="h-screen">
                <div className="mx-auto md:my-10">
                    <h1 className="text-center text-4xl">PROJECTS</h1>
                </div>
                <div className="w-11/12 m-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
                    <div className="h-96">
                            <Link href="/login">
                                <div className="bg-blue-600 hover:bg-blue-700 h-full grid grid-rows-4 gap-9 border rounded-xl">
                                    <div className=" h-8/12 row-span-2 flex flex-col justify-end">
                                        <p className="text-white text-4xl text-center row-span-2">Main</p>
                                    </div>
                                    <div className=" flex justify-center">
                                        <div className=" my-auto">
                                            <NestJs width="50px" height="50px"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="h-96">
                            <Link href="/projects/chat">
                                <div className="bg-blue-600 hover:bg-blue-700 h-full grid grid-rows-4 gap-9 border rounded-xl">
                                    <div className=" h-8/12 row-span-2 flex flex-col justify-end">
                                        <p className="text-white text-4xl text-center row-span-2">Cat Chat Meow Meow</p>
                                    </div>
                                    <div className=" flex justify-center">
                                        <div className="">
                                            <NodeJs height="50px" width="50px" fill="white"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="h-96">
                            <Link href="/projects/bookie">
                                <div className="bg-blue-600 hover:bg-blue-700 h-full grid grid-rows-4 gap-9 border rounded-xl">
                                    <div className=" h-8/12 row-span-2 flex flex-col justify-end">
                                        <p className="text-white text-4xl text-center row-span-2">Bookie</p>
                                    </div>
                                    <div className=" flex justify-center">
                                        <div className="">
                                            <SpringBoot height="50px" width="50px" fill="white"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}