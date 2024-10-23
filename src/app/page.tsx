"use client";
import Header from "@/app/header/header";
import ListOfPosts from "@/app/listOfPosts/ListOfPosts";
import { useEffect, useState } from "react";
import { IPosts } from "./postEdit/PostEditForm";
import ListOfItems from "./listOfItems/ListOfItems";
import PostForm from "./postForm/PostForm";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [openModalCreate, setOpenModalCreate] = useState(false);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

    const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const [searchPost, setSearchPost] = useState("");
 
  const filteredPosts = posts.filter(posts => 
    posts.title.toLowerCase().includes(searchPost.toLowerCase()) 
);

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter(posts => posts.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); 
  };

  return (
    <div>
      <Header 
      setSearchPost={setSearchPost}
      searchPost={searchPost}
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        setOpenModalCreate={setOpenModalCreate}
      />
      <ListOfItems isOpen={isMenuOpen} />
      <PostForm
         setPosts={setPosts}
      isOpenModalCreate={openModalCreate}
        setOpenModalCreate={setOpenModalCreate}
        posts={posts}
      />
      <ListOfPosts
      isOpen={isMenuOpen}
      posts={filteredPosts}
      deletePost={deletePost}
      />
    </div>
  );
}
