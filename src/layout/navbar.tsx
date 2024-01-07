import { CollapseIcon, HomeIcon, InstagramIcon, LinkedInIcon, PenIcon, TerminalIcon, UserIcon, WhatsappIcon} from "@/components/icons/customIcons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Sidebar() {

    const [isCollapse, setIsCollapse] = useState<boolean>(false);

    const navbarItem = [
        {
            "name": "Home",
            "url": "/",
            "component": HomeIcon
        },
        {
            "name": "About",
            "url": "/about",
            "component": UserIcon
        },
        {
            "name": "Projects",
            "url": "/projects",
            "component": TerminalIcon
        },
        {
            "name": "Blog",
            "url": "/blog",
            "component": PenIcon
        }
    ]

    const Icon = (props: any) => {
        const IconComponent = navbarItem[props.index].component;
        return <IconComponent width={20} height={20} className="flex my-auto "/>
    }

    return (
    <>  
        <div className={`absolute h-screen flex w-7/12 md:w-2/12 `}>
            <nav className={`flex flex-col transition-width duration-300 ease-in ${isCollapse ? 'w-full' : 'w-0'} overflow-hidden bg-neutral-800`}>
                <div className="ml-8 py-4">
                    <Image
                        src="/../public/profile.jpg"
                        width={80}
                        height={80}
                        alt="Majutsu no Index picture"
                        className="rounded-full"
                    />
                </div>
                <ul className="relative flex flex-col ">
                    {
                        navbarItem.map((item, index) => (
                            <Link href={item.url} className="hover:bg-pastel-yellow hover:text-black" key={index}>
                                <div className="flex ml-8 fill-white hover:fill-black">

                                    <Icon index={index} />
                                    
                                    <li key={index} className="py-3 text-xl flex">
                                        <div className="ml-4">
                                            <p className="">{item.name}</p>
                                        </div>
                                    </li>
                                </div>
                            </Link>
                        ))
                    }
                </ul>
                <div className="flex-grow flex flex-col justify-end">
                    <div className="flex justify-between">
                        <Link href={"https://google.com"} className=" flex w-full hover:bg-pastel-yellow fill-white hover:fill-black py-4">
                            <div className=" flex w-full">
                                <WhatsappIcon width={30} height={30} className="mx-auto"/>
                            </div>
                        </Link>
                        <Link href={"https://google.com"} className=" flex w-full hover:bg-pastel-yellow fill-white hover:fill-black py-4">
                            <div className=" flex w-full">
                                <LinkedInIcon width={30} height={30} className="mx-auto"/>
                            </div>
                        </Link>
                        <Link href={"https://google.com"} className=" flex w-full hover:bg-pastel-yellow fill-white hover:fill-black py-4">
                            <div className=" flex w-full">
                                <InstagramIcon width={30} height={30} className="mx-auto"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className={`my-auto cursor-pointer ${isCollapse ? 'rotate-180 transform-gpu duration-300 ease-in': 'rotate-360 transform-gpu duration-300 ease-in'}`} onClick={() => setIsCollapse(!isCollapse)}>
                <CollapseIcon width={50} height={50} className=""/>
            </div>
        </div>
    </>
    );
}
