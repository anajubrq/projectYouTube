"use client";
import { IPosts } from "@/app/formPost/formPost";
import Header from "@/app/header/header";
import Main02 from "@/app/main02/main02";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; 

export default function View02() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); 
    
    const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const storedPostagens = localStorage.getItem('posts');
        if (storedPostagens) {
            setPosts(JSON.parse(storedPostagens));
        }
    }, []);
    
    const postId = pathname.split('/').pop(); 
    const postToShow = posts.find((post) => post.id === Number(postId));

    return (
        <div>
            <Header
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                setOpenModalCreate={setOpenModalCreate}
            />
            <Main02 
                isOpen={isMenuOpen}
                posts={posts} 
                selectedPost={postToShow} 
                setPosts={setPosts}
            />
        </div>
    );
}
