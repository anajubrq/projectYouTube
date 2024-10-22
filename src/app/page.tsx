"use client";
import FormPostagens, {  IPosts } from "@/app/formPost/formPost";
import Header from "@/app/header/header";
import Itens from "@/app/itens/itens";
import View from "@/app/viewPost/viewPost";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [post, setPosts] = useState<IPosts[]>([]);
  const [openModalCreate, setOpenModalCreate] = useState(false);

  useEffect(() => {
    const storedPostagens = localStorage.getItem('posts');
    if (storedPostagens) {
      setPosts(JSON.parse(storedPostagens));
    }
  }, []);

    const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const deletePostagem = (id: number) => {
    const updatedPosts = post.filter(posts => posts.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); 
  };

  return (
    <div>
      <Header 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        setOpenModalCreate={setOpenModalCreate}
      />
      <Itens isOpen={isMenuOpen} />
      <FormPostagens
         setPosts={setPosts}
      isOpenModalCreate={openModalCreate}
        setOpenModalCreate={setOpenModalCreate}
        posts={post}
      />
      <View
      isOpen={isMenuOpen}
      posts={post}
      setPosts={setPosts}
      deletePostagem={deletePostagem}
      />
    </div>
  );
}
