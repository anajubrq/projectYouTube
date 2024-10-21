"use client";
import { Button } from "@/components/ui/button";
import { IPostagens } from "../formPostagem/formPostagem";
import { useEffect } from "react";

interface IView {
    postagens: IPostagens[];
    setPostagens: React.Dispatch<React.SetStateAction<IPostagens[]>>;
}

export default function View({ postagens, setPostagens }: IView) {
    const deletePostagem = (id: number) => {
        setPostagens(postagens.filter(postagem => postagem.id !== id));
    };

    
    useEffect(() => {
        const storedPostagens = localStorage.getItem('postagens');
        if (storedPostagens) {
            setPostagens(JSON.parse(storedPostagens));
        }
    }, [setPostagens]);

    console.log(postagens, "postagens:");

    return (
        <section className="z-30 bg-gray-100 w-full h-screen p-4">
            <div className="text-white z-[100px] w-[500px] h-[500px] bg-black">
                {postagens.length === 0 ? (
                    <p className="text-center text-lg">Nenhuma postagem disponível.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-[100px]">
                        {postagens.map(singlePostagem => (
                            <div key={singlePostagem.id} className="bg-white rounded-lg shadow p-4 z-[100px]">
                                <h3 className="text-xl font-semibold z-[100px]">{singlePostagem.title}</h3>
                                <p className="text-gray-600 z-[100px]">Por: {singlePostagem.user}</p>
                                <img
                                    src={singlePostagem.profilePicture}
                                    alt={singlePostagem.user}
                                    className="w-full h-auto rounded mt-2 z-[100px]"
                                />
                                <img
                                    src={singlePostagem.videoCover}
                                    alt={`Capa do vídeo de ${singlePostagem.title}`}
                                    className="w-full h-auto rounded mt-2 z-[100px]"
                                />
                                <p className="mt-2 z-[100px]">{singlePostagem.description}</p>
                                <Button 
                                    onClick={() => singlePostagem.id !== undefined && deletePostagem(singlePostagem.id)} 
                                    className="mt-4 w-full">
                                    Remover
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
