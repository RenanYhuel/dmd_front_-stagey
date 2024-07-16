import threePoints from '../assets/three_points.png';
import loop from '../assets/loop.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import plus from '../assets/plus.png';
import discussion from '../assets/discussion.png';
import { useState } from 'react';

export default function Contact() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const ContactPopup = () => {
        if(isPopupOpen) { 
            setIsPopupOpen(false);
        } else {
            setIsPopupOpen(true);
        }
    };


    return (
        <>
            <div className="flex flex-col border-r-2 border[grey] w-[350px] bg-white h-full">
                <div className="flex h-[84px] specialSpace px-[20px] py-[30px] border-b-2 border[grey] relative">
                    <div className='specialText'>Conversations</div>
                    <div><img src={threePoints} alt="three points" onClick={ContactPopup} className='m-w-[100%] m-h-[100%] w-[24px] h-[24px] cursor-pointer'/></div>
                    {isPopupOpen && (
                        <div className="absolute top-[57px] right-[23px] rounded-[10px] bg-white p-[16px] z-10 shadow-popup">
                            <div className='flex py-[10px] px-[14px] gap-[8px] items-center  cursor-pointer rounded-[10px] bg-[#4285F41A]'>
                                <img src={plus} alt="" className='w-[20px] h-[20px] m-w-[100%] m-h-[100%]'/>
                                <div className='flex singularText font-[400] items-center h-[20px]'>Créer une conversation</div>
                            </div>
                            <div className='flex py-[10px] px-[14px] gap-[8px] items-center  cursor-pointer rounded-[10px] '>
                                <img src={discussion} alt="" className='w-[20px] h-[20px] m-w-[100%] m-h-[100%]'/>
                                <div className='flex singularText font-[400] items-center h-[20px]'>Conversations archivées</div>
                            </div>
                        </div>

                    )}
                </div>
                <div className="flex gap-[15px] h-[84px] px-[15px] border-b-2 border[grey] specialSpace items-center">
                    <input type="text" placeholder="Rechercher un message..." className='flex-grow px-4 py-2 bg-transparent border-none focus:outline-none placeholder:text-[#BBBBBB] placeholder:text-[16px] placeholder:font-[400] singularText font-[400] text-[#BBBBBB]'/>
                    <img src={loop} alt="loop" className='m-w-[100%] m-h-[100%] w-[24px] h-[24px] cursor-pointer'/>
                </div>
                <div className="flex flex-col h-[440px]">
                    <div className="flex border-b-2 border[grey] py-[30px] px-[20px] h-[110px] space-x-[20px] cursor-pointer active"> {/*Active style class "active"*/ }
                        <img src={icon1} alt="icon1" className="rounded-[3px] w-[50px] h-[50px]"/>
                        <div className='flex flex-col w-[240px] gap-x-[20px]'>
                            <div className="flex specialSpace ">
                                <div className='text-[#1E1E1E] font-[500] text-[16px] leading-[18.75px]'>Publihebdos</div>
                                <div className='text-[#808080] text-[15px] leading-[17.58px]'>12 Jan</div>
                            </div>
                            <div className="text-ellipsis singularText font-[400] text-[#4F4F4F] h-[19px]">Toi: Du tout, je recherche principalement dans la médecine. Merci pour la proposition!</div>
                        </div>
                    </div>
                    <div className="flex border-b-2 border[grey] py-[30px] px-[20px] h-[110px] space-x-[20px] cursor-pointer">
                        <img src={icon2} alt="icon2" className="rounded-[3px] w-[50px] h-[50px]"/>
                        <div className='flex flex-col w-[240px] gap-x-[20px]'>
                            <div className="flex specialSpace ">
                                <div className='text-[#1E1E1E] font-[500] text-[16px] leading-[18.75px]'>Microsoft</div>
                                <div className='text-[#808080] text-[15px] leading-[17.58px]'>10 Jan</div>
                            </div>
                            <div className="text-ellipsis singularText font-[400] text-[#4F4F4F] h-[19px] ">Toi: Merci à vous, bonne journée!</div>
                        </div>
                    </div>
                    <div className="flex border-b-2 border[grey] py-[30px] px-[20px] h-[110px] space-x-[20px] cursor-pointer">
                        <img src={icon3} alt="icon3" className="rounded-[3px] w-[50px] h-[50px]"/>
                        <div className='flex flex-col w-[240px] gap-x-[20px]'>
                            <div className="flex specialSpace ">
                                <div className='text-[#1E1E1E] font-[500] text-[16px] leading-[18.75px]'>OVH</div>
                                <div className='text-[#808080] text-[15px] leading-[17.58px]'>10 Jan</div>
                            </div>
                            <div className="text-ellipsis singularText font-[400] text-[#4F4F4F] h-[19px]">Avec plaisir, n’oubliez pas de ramener votre CV. A demain.</div>
                        </div>
                    </div>
                    <div className="flex border-b-2 border[grey] py-[30px] px-[20px] h-[110px] space-x-[20px] cursor-pointer">
                        <img src={icon4} alt="icon4" className="rounded-[3px] w-[50px] h-[50px]"/>
                        <div className='flex flex-col w-[240px] gap-x-[20px]'>
                            <div className="flex specialSpace ">
                                <div className='text-[#1E1E1E] font-[500] text-[16px] leading-[18.75px]'>Hostinger</div>
                                <div className='text-[#808080] text-[15px] leading-[17.58px]'>08 Jan</div>
                            </div>
                            <div className="text-ellipsis singularText font-[400] text-[#4F4F4F] h-[19px]">Toi: J’y manquerai pas!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
