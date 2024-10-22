"use client";
import { IPosts } from "../formPost/formPost";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface IMain02 {
  posts: IPosts[];
  selectedPost?: IPosts; 
  setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
  isOpen: boolean;
}

const listMain = [
  {
    imgSrc: '/images/btLike.png'
  },
  {
    imgSrc: '/images/btDeslike.png'
  },
  {
    imgSrc: '/images/btShare.png'
  },
  {
    imgSrc: '/images/btSalve.png'
  },
  {
    imgSrc: '/images/bt3pontos.png'
  }
];

export default function Main02({ posts, selectedPost, setPosts, isOpen }: IMain02) {
  const router = useRouter();

  return (
    <div className={`${isOpen ? 'ml-[270px]' : 'ml-0'} z-30 bg-customGray w-[664px] h-screen p-4 flex flex-row gap-[90px] ${roboto.className}`}>
      <div className="flex flex-wrap gap-[30px] w-[664px] ml-[40px] ">
        {selectedPost && ( 
          <div key={selectedPost.id} className="w-[640px]  ">
            <button>
              <img
                src={selectedPost.videoCover}
                alt={`Capa do vídeo de ${selectedPost.title}`}
                className="w-[640px] h-[360px]"
              />
            </button>

            <div className="flex flex-col items-center mt-4">
              <div className="w-[640px] h-auto flex flex-col p-4">
                {/* Título do Post */}
                <h3 className="text-white text-[18px] mb-2">
                  {selectedPost.title}
                </h3>

                {/* Descrição e Ícones */}
                <div className="flex flex-row justify-between items-center mb-4">
                  <p className="text-colorFont text-[11px] w-[175px]">
                    {selectedPost.description}
                  </p>
                  <ul className="flex flex-row gap-2">
                    {listMain.map((icon, index) => (
                      <li key={`listMain1-${index}`}>
                        <img
                          className="w-[70px] h-[40px]"
                          src={icon.imgSrc}
                          alt="Icones"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Foto de perfil e comentário */}
                <div className="flex items-start gap-4">
                  <img
                    src={selectedPost.profilePicture}
                    alt="Foto user"
                    className="w-[36px] h-[36px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-white">{selectedPost.user}</h1>
                    <p className="text-white text-[12px]">1.2M subscribers</p>
                  </div>
                  <div>
                    <img className="ml-[339px] w-[100px]" src='/images/Subscribes-Btn.png' alt='Icone de Subscribes'/>
                  </div>
                </div>

                <div className="mt-4 flex flex-col justify-center items-end">
                  <p className="text-white text-[14px] w-[556px] text-justify">
                    Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.
                  </p>
                  <p className="text-colorFont uppercase cursor-pointer mr-[485px] mt-[2px] text-[12px]">show more</p>
                </div>

                <div>
                  <img src="/images/Comment.png" alt="Imagem"/>
                  <img src="/images/Comments2.png" alt="Imagem2"/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-[426px]">
        {posts.map((singlePost) => (
          <div key={singlePost.id} className="w-[426px] flex flex-row gap-[10px] mt-[10px] ">
            <button onClick={() => router.push(`/view/${singlePost.id}`)}>
              <img
                src={singlePost.videoCover}
                alt={`Capa do vídeo de ${singlePost.title}`}
                className=" w-[176px] h-[94px] p-0"
              />
            </button>

            <div className="flex mt-2">
              
              <div className="w-[204px] h-[74px] flex flex-col mt-[6px]">
                <h3 className="text-white text-[12px] h-[12px] leading-[12px]">{singlePost.title}</h3>
                <p className="text-white text-[12px] h-[12px] mt-[10px]">{singlePost.user}</p>
                <p className="mt-[2px] text-white text-[11px] h-[12px]">{singlePost.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
