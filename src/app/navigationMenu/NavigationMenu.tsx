import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export interface INavigationMenuProps{
    isOpen: boolean;
    
    
}
const listOfItems1 = [{
  title: 'Home',
  imgSrc : '/images/home-fill.png ',
   
},
{
  title: 'Explorer',
  imgSrc: '/images/explore.png'
},
{
  title: 'Home',
  imgSrc: '/images/subscribe.png'
}
]

const listOfItems2 = [
  {
    title: 'Library',
    imgSrc : '/images/library.png'
  },
  {
    title: 'History',
    imgSrc : '/images/history.png'
  },
  {
    title: 'Your Videos',
    imgSrc : '/images/yourVideos.png'
  },
  {
    title: 'Watch Later',
    imgSrc : '/images/watchLater.png'
  },
  {
    title: 'Liked Videos',
    imgSrc : '/images/liked.png'
  },
  {
    title: 'Show More',
    imgSrc : '/images/showMore.png'
  }
]


const listOfItems3 = [
  {
    title: 'James Gomes',
    imgSrc : '/images/jamesUser.png'
  },
  {
    title: 'Alan Cooper',
    imgSrc : '/images/alanUser.png'
  },
  {
    title: 'Marcus Levin',
    imgSrc : '/images/marcusUser.png'
  },
  {
    title: 'Alexis Sears',
    imgSrc : '/images/alexisUses.png'
  },
  {
    title: 'Jessica Lambert',
    imgSrc : '/images/jesicaUser.png'
  },
  {
    title: 'Anna White',
    imgSrc : '/images/annaUser.png'
  },
  {
    title: 'Skylar Dias',
    imgSrc : '/images/skylarUser.png'
  },{
    title: 'Show 13 More',
    imgSrc : '/images/showMore.png'
  }
]


const listOfItems4 = [
  {
    title: 'Youtube Premium',
    imgSrc : '/images/youTubePremium.png'
  },
  {
    title: 'Gaming',
    imgSrc : '/images/gaming.png'
  },
  {
    title: 'Live',
    imgSrc : '/images/live.png'
  }
]


export default function NavigationMenu({isOpen}:INavigationMenuProps){
    return(
        <div className={`  w-[240px] h-screen mt-[56px] absolute top-0 left-0 text-white transition-transform duration-300 ease-in-out bg-customGray ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='w-[224px] '>
                <ul className='ml-[11px]  '>
                  {listOfItems1.map((item, index)=> <li key={`listItemNav-${index}`} className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                    text-white rounded-[10px]`}>
                    <img className='w-[24px] h-[24px]' src={item.imgSrc} alt="Icone Home"/>
                    <p className='ml-[24px]'>{item.title}</p>
                  </li>)}
                    
                </ul>
            </div>
            <div className='border-t border-b border-colorBoder'>
            <ul className='ml-[11px]'>
              {listOfItems2.map((item,index)=>
              <li key={`ListIetemNav2-${index}`} className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
              text-white rounded-[10px]`} >
                <img className='w-[24px] h-[24px]' src={item.imgSrc} alt='Imagem' />
                <p className='ml-[24px]'>{item.title}</p>
              </li>
              )}
                </ul>
            </div>
            <div className=' border-b border-colorBoder'>
                <p className={`${roboto.className} text-[14px] flex flex-row items-center justify-start ml-[18px] w-[156px] h-[41px] uppercase text-colorFont`}>Subscriptions</p>
                <ul className='ml-[11px]'>
                  {listOfItems3.map((item,index)=>
                  <li key={`ListItemNav3-${index}`} className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                  text-white rounded-[10px]`} >
                     <img src={item.imgSrc} alt={`Imagem User ${item.title}`}/>
                     <p className='ml-[24px]'>{item.title}</p>

                  </li>)}
                  
                </ul>
            </div>

            <div className=' border-b border-colorBoder '>
                <p className={`${roboto.className} text-[14px] flex flex-row items-center justify-start ml-[18px]  w-[210px] h-[41px] uppercase text-colorFont`}>More From Youtube</p>
                <ul className='ml-[11px] '>
                  {listOfItems4.map((item,index)=>
                  <li key={`ListItemNav4-${index}`} className={`${roboto.className} p-[12px] text-[14px] flex flex-row items-center justify-start ml-[9px]  w-[210px] h-[41px]  hover:bg-colorBoder  
                  text-white rounded-[10px]`}>
                     <img src={item.imgSrc} alt={`Icone ${item.title}`}/>
                     <p className='ml-[24px]'>{item.title}</p>
                  </li>
                  )}
                    
                </ul>
            </div>
        </div>
    )
}