import warn from '../assets/warn.png';
import trash from '../assets/trash.png';
import { useState } from 'react';
import threePoints from '../assets/three_points.png';
import icon1 from '../assets/icon1.png';
import smile from '../assets/smile.png';
import join from '../assets/join.png';

export default function Contact() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const MessagePopup = () => {
        if(isPopupOpen) { 
            setIsPopupOpen(false);
        } else {
            setIsPopupOpen(true);
        }
    };


    return (
        <>
            <div className="flex flex-col w-[879px] bg-white h-[836px] p-[30px] pt-0">
                <div className="flex specialSpace items-center h-[80px] w-full relative">
                    <div className='flex flex-col gap-y-[5px]'>
                        <div className='singularText'>Publihebdos</div>
                        <div className="flex items-center gap-x-[5px]">
                            <div className='bg-[#34A853] rounded-full w-[12px] h-[12px]'></div>
                            <div className='leading-[16.41px] font-[400] text-[14px] text-[#808080]'>En ligne</div>
                        </div>
                    </div>
                    <img src={threePoints} alt="three points" className='m-w-[100%] m-h-[100%] w-[24px] h-[24px] cursor-pointer' onClick={MessagePopup}/>
                    {isPopupOpen && (
                        <div className="absolute top-[57px] right-0 rounded-[10px] bg-white p-[16px] z-10 shadow-popup">
                            <div className='flex py-[10px] px-[14px] gap-[8px] items-center  cursor-pointer rounded-[10px]'>
                                <img src={warn} alt="" className='w-[20px] h-[20px] m-w-[100%] m-h-[100%]'/>
                                <div className='flex singularText font-[400] items-center h-[20px]'>Signaler l’utilisateur</div>
                            </div>
                            <div className='flex py-[10px] px-[14px] gap-[8px] items-center  cursor-pointer rounded-[10px] bg-[#E25D5D1A]'>
                                <img src={trash} alt="" className='w-[20px] h-[20px] m-w-[100%] m-h-[100%]'/>
                                <div className='flex singularText font-[400] items-center h-[20px]'>Archiver la conversation</div>
                            </div>
                        </div>

                    )}
                </div>
                <div className="flex flex-col h-full bg-[#F8F8F8] p-[30px] rounded-[20px]">
                    <div className="space-y-4 flex-grow">
                        <div className="flex justify-start">
                            <div className="flex items-start space-x-4">
                                <img src={icon1} alt="icon1" className="w-8 h-8"/>
                                <div className="bg-white p-[15.5px] rounded-[30px] shadow-custom">
                                    <div>Bonjour, nous sommes intéressés par votre profil, seriez-vous disponible pour discuter ?</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-end">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#4285F4] text-white p-[15.5px] rounded-[30px] shadow-message">
                                    <div>Bonjour, oui je suis actuellement disponible pour discuter. Ce serait à quel sujet ?</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-start">
                            <div className="flex items-start space-x-4">
                                <img src={icon1} alt="icon1" className="w-8 h-8"/>
                                <div className="bg-white p-[15.5px] rounded-[30px] shadow-custom">
                                    <div>Nous recherchons activement un rédacteur pour la gazette du Centre Morbihan. <br />Êtes-vous à la recherche de ce type de poste ?</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-end">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#4285F4] text-white p-[15.5px] rounded-[30px] shadow-message">
                                    <div>Bonjour, oui je suis actuellement disponible pour discuter. Ce serait à quel sujet ?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-end py-[20px] px-[30px] w-full">
                        <div className="flex items-center space-x-[20px] rounded-[20px] p-2 w-full bg-white py-[20px] px-[30px]">
                            <input type="text" placeholder="Saisissez votre message" className="flex-grow px-4 py-2 bg-transparent border-none focus:outline-none placeholder:text-[#BBBBBB] placeholder:text-[16px] placeholder:font-[400] singularText font-[400] text-[#BBBBBB]"/>
                            <img src={smile} alt="smile" className="w-[24px] h-[24px] cursor-pointer" />
                            <img src={join} alt="join" className="w-[24px] h-[24px] cursor-pointer" />
                        </div>
                    </div>
                </div>








            </div>
        </>
    )
}
