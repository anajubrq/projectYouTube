"use client";
import Header from "@/app/header/header";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import MaincontentDisplay from "@/app/mainContentDisplay/MaincontentDisplay";
import { IPosts } from "@/app/postEdit/PostEditForm";

export default function View02() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [post, setPost] = useState<IPosts[]>([]);
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [searchPost, setSearchPost] = useState("");
    const pathname = usePathname(); 

    
    const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
    };

    useEffect(() => {
      const storedPosts = localStorage.getItem('posts');
      if (storedPosts) {
          setPost(JSON.parse(storedPosts));
      }
  }, []);
    
    const postId = pathname.split('/').pop(); 
    const postToShow = post.find((post) => post.id === Number(postId));

    return (
        <div>
            <Header
            setSearchPost={setSearchPost}
            searchPost={searchPost}
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                setOpenModalCreate={setOpenModalCreate}
            />
            <MaincontentDisplay 
                isOpen={isMenuOpen}
                posts={post} 
                selectedPost={postToShow} 
                setPosts={setPost}
            />
        </div>
    );
}
