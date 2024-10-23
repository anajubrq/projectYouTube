"use client";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import { IPosts } from "../postEdit/PostEditForm";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

interface IListOfPosts {
    posts: IPosts[];
    isOpen: boolean;
    deletePost: (id: number) => void;
 
}

export default function ListOfPosts({ posts, isOpen, deletePost}: IListOfPosts) {
    const router = useRouter();

 

    return (
        <section className={`${isOpen ? 'ml-[270px]' : 'ml-0'} z-30 bg-black w-full h-screen p-4`}>
            <div className={`fixed text-white z-[100px] w-full flex flex-wrap gap-[30px] mt-[125px] ${roboto.className}`}>
                {posts.map((singlePost, index) => (
                    <div key={singlePost.id} className="w-[276px] flex-shrink-0">
                        <button onClick={() => router.push(`/view/${singlePost.id}`)}>
                            <img
                                src={singlePost.videoCover}
                                alt={`Capa do vídeo de ${singlePost.title}`}
                                className="w-[276px] h-[155px] p-0"
                            />
                        </button>

                        <div className="flex mt-2">
                            <div className="w-[48px] h-[74px] flex justify-start">
                                <img
                                    src={singlePost.profilePicture}
                                    alt="Foto user"
                                    className="w-[36px] h-[36px] rounded-full z-[100px] mt-[12px]"
                                />
                            </div>
                            <div className="w-[204px] h-[74px] flex flex-col mt-[6px]">
                                <h3 className="text-white text-[12px] h-[12px] leading-[12px]">{singlePost.title}</h3>
                                <p className="text-white text-[12px] h-[12px] mt-[10px]">{singlePost.user}</p>
                                <p className="mt-[2px] text-[11px] h-[12px]">{singlePost.description}</p>
                            </div>
                            <button onClick={() => singlePost.id !== undefined && deletePost(singlePost.id)}>
                                <img className="w-[20px] h-[20px] mb-[6px]" src="/images/delete.png" alt="button delete" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
