import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function Sidebar() {

    const [isCollapse, setIsCollapse] = useState<boolean>(false);

    return (
    <>  
        <div className={`absolute border border-blue-500 h-screen flex`}>
            <nav className={`flex flex-col transition-width duration-300 ease-in-out ${isCollapse ? 'w-full' : 'w-0'} overflow-hidden`}>
                <div>Anime Icon</div>
                <ul className="relative border border-red-400 flex flex-col ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
                <div className="flex-grow flex flex-col border justify-end border-green-400 bottom-0">
                    <div className="border border-blue-400 md:flex md:justify-between">
                        <div className="border border-black flex w-full">
                            <a>Whatsapp</a>
                        </div>
                        <div className="border border-black flex w-full">
                            <a>Linkedin</a>
                        </div>
                        <div className="border border-black flex w-full">
                            <a>Instagram</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="border border-green-400 my-auto cursor-pointer font-zeyada" onClick={() => setIsCollapse(!isCollapse)}>
                <a className="font-zeyada">Icon Arrow</a>
            </div>
        </div>
    </>
    );
}
