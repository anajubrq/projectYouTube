"use client"
import { Roboto } from 'next/font/google';
import Nav from '../navigationMenu/NavigationMenu';
import { useRouter } from "next/navigation";
import ButtonIcons from '../myComponents/buttonIcons/ButtonIcons';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface HeaderProps {
   
    toggleMenu: () => void; 
    isMenuOpen: boolean;
    setOpenModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchPost: (value:string)=> void;
    searchPost: string;
    }

export default function Header({toggleMenu, isMenuOpen,setOpenModalCreate, setSearchPost, searchPost,}:HeaderProps) {
    const router = useRouter();


  return (
    
        <div className={`${roboto.className} w-full h-[56px] bg-customGray flex flex-row items-center justify-between fixed top-0 left-0 z-1000`}>
        <div className='flex flex-row items-center w-[190px] ml-[22px] '>

            <ButtonIcons onClick={toggleMenu} >
            <img src="/images/Group.png" className="w-[20px] h-[20px] " alt="Menu" />
            </ButtonIcons>
        {/* <button
    onClick={toggleMenu}
    className="flex items-center justify-center text-white rounded-full transition-colors duration-300 
                hover:bg-colorInput active:bg-colorInput w-[40px] h-[40px]" 
    >
    <img src="/images/Group.png" className="w-[20px] h-[20px] " alt="Menu" />
    </button>  */}

        <button onClick={() => router.push('/')}
         className='ml-[6px]'>  <img src="/images/Youtube-Logo.png" className="w-[90px] h-[20px]" alt="logo" /> </button>
        </div>

        <div className='flex flex-row items-center '>
            <input 
            type="text" 
            className='w-[362px] h-[38px] bg-colorInput p-[8px] outline-none text-white' 
            placeholder="Search" 
            value={searchPost}
            onChange={(e) => setSearchPost(e.target.value)}
            
            />
            <button onClick={()=>console.log('serarchPost Items:',searchPost)} className="h-[40px] w-[55px]  ">
            <img src='/images/lupaPesquisar.png' alt='icon pesquisar'  />
            </button>
            <button className="h-[40px] w-[40px]  ">
            <img src='/images/IconAudio.png' alt='icon audio'  />
            </button>
        </div>

        <div className='flex flex-row items-center justify-center ml-[35px] mr-[33px]'>
            <button  onClick={()=> setOpenModalCreate(true)} className="hover:bg-colorInput active:bg-colorInput rounded-full w-[40px] h-[40px] flex items-center justify-center"> 
                <img src='/images/iconCreate.png' alt='Botão de criar items'/>
            </button>
            <button className="hover:bg-colorInput active:bg-colorInput rounded-full w-[40px] h-[40px]  flex items-center justify-center"> 
                <img src='/images/iconsApps.png ' alt='Botão de aplicativos'/>
            </button>
            <button className="hover:bg-colorInput active:bg-colorInput rounded-full w-[40px] h-[40px] flex items-center justify-center "> 
                <img src='/images/iconNotifications.png' alt='Botão de notificação'/>
            </button>
            <button className="hover:bg-colorInput active:bg-colorInput rounded-full w-[40px] h-[40px]  flex items-center justify-center"> 
                <img src='/images/iconProfile.png' alt='Icone do Perfil'/>
                
            </button>

        </div>
        <Nav isOpen={isMenuOpen } />
        </div>
        
        
   
  );
}
