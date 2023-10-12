import { Button } from "@/components/ui/button";
import axios, { AxiosResponse} from "axios";
import { Link } from "lucide-react";
import { useRouter } from "next/router";

export default function Project() {
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
            <div>
                <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
                    <p className='text-xl' onClick={() => getAllUsers()}>Get All Users</p>
                </Button>
                <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
                    <p className='text-xl' onClick={() => getUser()}>Get 1 User</p>
                </Button>
                <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
                    <p className='text-xl' onClick={() => deleteUser()}>Delete User</p>
                </Button>
                <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
                    <p className='text-xl' onClick={() => createUser()}>Create User</p>
                </Button>
                <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
                    <p className='text-xl' onClick={() => udpateUser()}>Update User</p>
                </Button>
                <Button>
                    <Link href="/chat">
                        Chat App
                    </Link>
                </Button>
            </div>
        </>
    )
}