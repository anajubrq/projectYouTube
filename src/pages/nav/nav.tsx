import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export interface INavProps{
    isOpen: boolean;
    
    
}

export default function Nav({isOpen}:INavProps){
    return(
        <div className={`w-[240px] h-screen mt-[56px] absolute top-0 left-0 text-white transition-transform duration-300 ease-in-out bg-customGray ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='w-[224px] '>
                <ul className='ml-[11px] '>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]' src="/images/home-fill.png " alt="Icone Home"/>
                        <p className='ml-[24px]'>Home</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/explore.png" alt="Icone explore"/>
                        <p className='ml-[24px]'>Explorer</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/subscribe.png" alt="Icone subscribe"/>
                        <p className='ml-[24px]'>Home</p>
                    </li>
                </ul>
            </div>
            <div className='border-t border-b border-colorBoder'>
            <ul className='ml-[11px]'>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]' src="/images/library.png " alt="Icone libary"/>
                        <p className='ml-[24px]'>Library</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/history.png" alt="Icone History"/>
                        <p className='ml-[24px]'>History</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/yourVideos.png" alt="Icone Your Videos"/>
                        <p className='ml-[24px]'>Your Videos</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/watchLater.png" alt="Icone Watch Later"/>
                        <p className='ml-[24px]'>Watch Later</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/liked.png" alt="Icone Liked Videos"/>
                        <p className='ml-[24px]'>Liked Videos</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                        <img className='w-[24px] h-[24px]'  src="/images/showMore.png" alt="Icone Show More"/>
                        <p className='ml-[24px]'>Show More</p>
                    </li>
                </ul>
            </div>
            <div className=' border-b border-colorBoder'>
                <p className={`${roboto.className} text-[14px] flex flex-row items-center justify-start ml-[18px] w-[156px] h-[41px] uppercase text-colorFont`}>Subscriptions</p>
                <ul className='ml-[11px]'>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/jamesUser.png' alt='User James'/>
                      <p className='ml-[24px]'>James Gomes</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/alanUser.png' alt='User Alan Cooper'/>
                      <p className='ml-[24px]'>Alan Cooper</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/marcusUser.png' alt='User Marcus Levin'/>
                      <p className='ml-[24px]'>Marcus Levin</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/alexisUses.png' alt='User Alexis Sears'/>
                      <p className='ml-[24px]'>Alexis Sears</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/jesicaUser.png' alt='User Jessica Lambert'/>
                      <p className='ml-[24px]'>Jessica Lambert</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/annaUser.png' alt='User Anns White'/>
                      <p className='ml-[24px]'>Anna White</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/skylarUser.png' alt='User Skylar Dias'/>
                      <p className='ml-[24px]'>Skylar Dias</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/showMore.png' alt='Icone Show More'/>
                      <p className='ml-[24px]'>Show 13 More</p>
                    </li>
                </ul>
            </div>

            <div className=' border-b border-colorBoder '>
                <p className={`${roboto.className} text-[14px] flex flex-row items-center justify-start ml-[18px]  w-[210px] h-[41px] uppercase text-colorFont`}>More From Youtube</p>
                <ul className='ml-[11px] '>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/youTubePremium.png' alt='Icone YouTube Premium'/>
                      <p className='ml-[24px]'>Youtube Premium</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/gaming.png' alt='Icone Gaming'/>
                      <p className='ml-[24px]'>Gaming</p>
                    </li>
                    <li className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                      <img src='/images/live.png' alt='Icone Live'/>
                      <p className='ml-[24px]'>Live</p>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}