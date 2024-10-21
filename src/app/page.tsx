"use client";
import FormPostagens, {  IPosts } from "@/pages/formPostagem/formPostagem";
import Header from "@/pages/header/header";
import Itens from "@/pages/itens/itens";
import View from "@/pages/viewPostagem/viewPostagem";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [post, setPosts] = useState<IPosts[]>([]);
  const [openModalCreate, setOpenModalCreate] = useState(false);

  useEffect(() => {
    const storedPostagens = localStorage.getItem('postagens');
    if (storedPostagens) {
      setPosts(JSON.parse(storedPostagens));
    }
  }, []);

  


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
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
      />
    </div>
  );
}
