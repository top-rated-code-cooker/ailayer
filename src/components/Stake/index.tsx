import ReferModal from "../modal/ReferModal";
import CardModal from "./CardModal";
import "./stake.css"
import Modal from 'react-modal';
import { useState } from "react";

function Stake(){
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);
    // useEffect(() => {
    //     console.log(modalIsOpen)
    // }, [modalIsOpen]) 

    // useEffect(() => {
    //     Modal.setAppElement('#root');
    // }, [])

    const openModal = () => {
        setModalIsOpen(true);
        console.log('opening modal')
    };

    const closeModal = (flag: boolean) => {
        console.log(flag)
        setModalIsOpen(false);
        console.log('closing modal')
    };

    const closeCardModal = (flag: boolean) => {
        console.log(flag)
        setCardModalIsOpen(false);
        console.log('closing modal')
    };


    console.log(modalIsOpen)
    
    return(
        <div className="pt-[120px] g-container main-div">
            <div style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>
                <div className="my-16">
                    <div className="flex flex-row justify-start items-end gap-3 my-8">
                        <div className="text-xl lg:text-2xl font-semibold">Your Wallet Assets
                        </div>
                        <div className="text-primary">--
                        </div>
                        <div className=" main-radius rounded-xl text-lg p-2 bg-black/15"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-2">
                        <div className="bg-cover bg-[url('https://stake.ailayer.xyz/images/stake/bg_left.png')] p-8 lg:p-10 main-radius rounded-xl">
                            <div className="flex justify-between">
                                <div className="text-primary text-xl">My Staked Tokens
                                </div><a href="/mainframe"><button className="text-primary text-md flex justify-center items-center gap-2">Stake<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></button></a>
                            </div>
                            <div className="flex justify-start items-center gap-3 my-5"><img src="https://stake.ailayer.xyz/images/token/btc.png" className="w-10 h-10 rounded-full"/>
                            <div className=" text-4xl font-semibold text-[#ECF0FF]">-- BTC
                            </div>
                            <button><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className="mb-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                        <div className="flex justify-start gap-8">
                            <div className="flex justify-start items-center gap-3">
                                <div className=" text-2xl font-semibold">TVL Points: --radius
                                </div>
                                <button><span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className="mb-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                                </button>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <div className="text-2xl font-semibold">Buff: <span>--</span>
                                </div>
                                <button><span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className="mb-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover bg-[url('https://stake.ailayer.xyz/images/stake/bg_right.png')] p-8 lg:p-10 main-radius rounded-xl">
                        <div className="flex justify-between">
                            <div className="text-primary text-xl">Your Invite Code
                            </div>
                            <button className="text-primary text-md flex justify-center items-center gap-2" onClick={openModal}>Referral Rules <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                          
                            
                            </button>
                           
                        </div>
                        <div className="flex justify-start items-center gap-2 my-5">
                            <div className=" text-4xl font-semibold">--
                            </div>
                            <button className=" main-radius rounded-xl text-lg p-2 bg-black/15"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path><path d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"></path></svg>
                            </button>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                        <div className=" text-2xl font-semibold">Team Members: --
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-overlay"
    >
        <ReferModal closeModal={closeModal}/>
        
    </Modal>
    <Modal
        isOpen={cardModalIsOpen}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-overlay"
    >
        <CardModal closeModal={closeCardModal}/>
        
    </Modal>
    <div className="bg-primary/5 main-radius rounded-xl py-4 px-4 lg:p-8 relative">
        <div className="md:flex justify-between items-center mb-2">
            <div className="text-lg">Team Assets: 0 BTC
            </div>
            <div className="text-primary/50 text-sm">Next Milestone: 0.1 BTC
            </div>
        </div>
        <div className="relative h-[200px]">
            <div className="absolute top-[84px] md:top-[115px] main-radius">
            </div>
            <div className="text-primary absolute text-xs md:text-sm flex flex-col justify-between gap-2 mb-4 mt-1 items-start left-0">
                <img src="https://stake.ailayer.xyz/images/stake/level_1.png" className="opacity-0 w-16" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/><span>Award</span>
                <div className="w-[14px] h-[14px] rounded-full bg-[#272B45] relative">
                </div>
                <span>Target</span>
            </div>
            <div className="text-primary absolute text-xs md:text-sm flex flex-col justify-between gap-2 mb-4 mt-1  items-center left-[13%] md:left-[17%]"><img src="https://stake.ailayer.xyz/images/stake/level_1.png" className="opacity-1 w-16" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/><span>+0.20%</span>
            <div className="w-[14px] h-[14px] rounded-full bg-[#272B45] relative">
            </div>
            <span>0.1BTC</span>
        </div>
        <div className="text-primary absolute text-xs md:text-sm flex flex-col justify-between gap-2 mb-4 mt-1   items-center left-[33%] md:left-[37%]"><img src="https://stake.ailayer.xyz/images/stake/level_2.png" className="opacity-1 w-16" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/><span>+0.40%</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#272B45] relative">
        </div>
        <span>1BTC</span>
    </div>
    <div className="text-primary absolute text-xs md:text-sm flex flex-col justify-between gap-2 mb-4 mt-1 items-center left-[53%] md:left-[57%]"><img src="https://stake.ailayer.xyz/images/stake/level_3.png" className="opacity-1 w-16" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/><span>+0.80%</span>
    <div className="w-[14px] h-[14px] rounded-full bg-[#272B45] relative">
    </div><span>5BTC</span>
</div>
<div className="text-primary absolute text-xs md:text-sm flex flex-col justify-between gap-2 mb-4 mt-1 items-center left-[73%] md:left-[77%] "><img src="https://stake.ailayer.xyz/images/stake/level_4.png" className="opacity-1 w-16" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}} /><span>+1.40%</span>
    <div className="w-[14px] h-[14px] rounded-full bg-[#272B45] relative">
    </div>
    <span>20BTC</span>
</div>
<div className="text-primary absolute text-xs md:text-sm flex flex-col justify-between gap-2 mb-4 mt-1 items-end right-0"><img src="https://stake.ailayer.xyz/images/stake/level_5.png" className="opacity-1 w-16" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/><span>+2.20%</span><div className="w-[14px] h-[14px] rounded-full bg-[#272B45] relative">
</div>
<span>50BTC</span>
</div>
</div>
<div className="bg-origin-border bg-cover bg-no-repeat main-radius bg-[url('https://stake.ailayer.xyz/images/stake/drawcard-bg.png')] lg:bg-[url('https://stake.ailayer.xyz/images/stake/drawcard-bg.png')] rounded-lg lg:w-full p-5 flex flex-col lg:flex-row justify-center lg:justify-between  items-start lg:items-center mt-4 gap-2">
    <div className="flex w-max-full justify-start items-start lg:items-center flex-col lg:flex-row gap-2">
        <div className="flex justify-start items-center"><span className="text-primary/50">Next Draw Time: </span><button><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
        </div>
        <div className="flex justify-center items-center lg:ml-5"><button disabled className="main-radius py-2 px-6 rounded-full relative hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"><img src="https://stake.ailayer.xyz/images/button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill"/><span>Draw Cards</span></button>
        </div>
    </div>
    <button className="flex justify-start items-center text-primary"><span>My Cards</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
    </button>
</div>
</div>
<div style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}} >
    <div className="mt-10 relative">
        <div className="bg-[#030515]/40 text-primary/50 relative text-xl lg:text-2xl font-semibold" role="tablist" aria-orientation="horizontal">
            <button className="outline-none py-4 pr-4 hl-selected:text-white hover:text-white" id="headlessui-tabs-tab-:r2:" role="tab" type="button" aria-selected="false" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r4:">
                <div className="flex flex-col justify-between gap-1"><span>Your Assets</span>
                </div>
            </button>
            <button
                className="outline-none py-4 pr-4 hl-selected:text-white hover:text-white"
                id="headlessui-tabs-tab-:r3:"
                role="tab"
                type="button"
                aria-selected="true"
                data-headlessui-state="selected"
                aria-controls="headlessui-tabs-panel-:r5:"
                >
                <div className="flex flex-col justify-between gap-1">
                    <span>Team Assets</span>
                    <div style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
                    <img className="opacity-100" src="https://stake.ailayer.xyz/images/stake/sel.png" alt="Selected Icon" />
                    </div>
                </div>
            </button>
        </div>
    <div>
    <span 
        aria-hidden="true" 
        id="headlessui-tabs-panel-:r4:" 
        role="tabpanel" 
        aria-labelledby="headlessui-tabs-tab-:r2:" 
        style={{
            position: 'fixed', 
            top: '1px', 
            left: '1px', 
            width: '1px', 
            height: '0px', 
            padding: '0px', 
            margin: '-1px', 
            overflow: 'hidden', 
            clip: 'rect(0px, 0px, 0px, 0px)', 
            whiteSpace: 'nowrap', 
            borderWidth: '0px'
        }}
        ></span>
        <div id="headlessui-tabs-panel-:r5:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:r3:" data-headlessui-state="selected">
        <div className="bg-primary/5 main-radius flex flex-wrap lg:flex-nowrap flex-row justify-start items-center p-4 rounded-xl lg:gap-8">
            <div className="flex flex-col p-4 gap-1">
                <div className="text-primary text-lg">Total Assets
                </div>
                <div className="flex justify-start items-center gap-2 lg:my-5"><img src="https://stake.ailayer.xyz/images/token/btc.png" className="w-6 h-6 rounded-full"/>
                    <div className="">0 BTC
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-cente gap-4">
            </div>
        </div>
    </div>
</div>
<div className="bg-gradient-to-r from-[#0B0D1F]/0 to-[#0B0D1F] rounded-lg w-[40px] absolute top-20 right-[1px] bottom-3">
</div>
</div>
</div>
<div style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>
    <div className="mt-6">
        <div className="text-xl mt-10 lg:mt-0 pl-4 lg:pl-0 lg:text-2xl font-semibold">Your Team
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-4">
        </div>
    </div>
</div>
        </div>
    )
}

export default Stake;