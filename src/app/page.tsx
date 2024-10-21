"use client";
import FormPostagens, { IPostagens } from "@/pages/formPostagem/formPostagem";
import Header from "@/pages/header/header";
import Itens from "@/pages/itens/itens";
import View from "@/pages/viewPostagem/viewPostagem";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [postagem, setPostagem] = useState<IPostagens[]>([]);
  const [openModalCriar, setOpenModalCriar] = useState(false);

  useEffect(() => {
    const storedPostagens = localStorage.getItem('postagens');
    if (storedPostagens) {
      setPostagem(JSON.parse(storedPostagens));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('postagens', JSON.stringify(postagem));
  }, [postagem]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        setOpenModalCriar={setOpenModalCriar} 
      />
      <Itens isOpen={isMenuOpen} />
      <FormPostagens
        setPostagens={setPostagem}
        isOpenModalCriar={openModalCriar}
        setOpenModalCriar={setOpenModalCriar}
        postagens={postagem}
      />
      <View
        postagens={postagem} 
        setPostagens={setPostagem} 
      />
    </div>
  );
}
