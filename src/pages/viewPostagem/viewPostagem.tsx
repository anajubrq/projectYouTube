"use client";

import { IPosts } from "../formPostagem/formPostagem";
import { useEffect } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
  });

interface IView {
    posts: IPosts[];
    setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
    isOpen: boolean;
}

export default function View({ posts, setPosts,isOpen }: IView) {
     const deletePostagem = (id: number) => {
         setPosts(posts.filter(posts => posts.id !== id));
     };

    
    useEffect(() => {
        const storedPostagens = localStorage.getItem('posts');
        if (storedPostagens) {
            setPosts(JSON.parse(storedPostagens));
        }
    }, []);

    console.log(posts, "posts:");

    return (
        <section className={` ${isOpen ? 'ml-[270px]  ' : 'ml-0 '} z-30 bg-black w-full h-screen p-4 `}>
            <div className="outline flex flex-row ">
            <div className={`text-white z-[100px] w-[276px] h-[247px] flex flex-col bg-black ml-[10px] mt-[125px] ${roboto.className} `}>
             
                    <div  className="outline outline-white flex flex-row gap-[30px]">
                        {posts.map(singlePost => (
                            <div key={singlePost.id} >
                
                    
                      <img
                          src={singlePost.videoCover}
                          alt={`Capa do vídeo de ${singlePost.title}`}
                          className="w-[276px] h-[155px] p-0 "
                                />
               <div className="flex">
                  <div className="w-[48px] h-[74px] flex justify-start">
                       <img 
                           src={singlePost.profilePicture}
                           alt='Foto user'
                           className=" w-[36px] h-[36px] rounded-full  z-[100px] mt-[12px]"
                                />
                         </div>       
                         <div className="w-[204px] h-[74px] flex flex-col mt-[6px] ">
                                 <h3 className="text-white text-[12px] h-[13px]">{singlePost.title}</h3>
                                 <p className="text-white  text-[12px] h-[12px]">Por: {singlePost.user}</p>
                                <p className=" mt-[2px] text-[11px] h-[12px]">{singlePost.description}</p>
                               
                                </div>
                                <button  onClick={() => singlePost.id !== undefined && deletePostagem(singlePost.id)} > 
                                    <img className="w-[20px] h-[20px] mb-[6px] " src="/images/delete.png" alt="button delet"/>
                                 </button> 
                                </div>
                            </div>
                        ))}
                    </div>
                
            </div>
            </div>
        </section>
    );
}
