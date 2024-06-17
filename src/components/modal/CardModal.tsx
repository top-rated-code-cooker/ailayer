import React from 'react';

interface ReferModelProps {
  closeModal: (arg0: boolean) => void;
}


const CardModal: React.FC<ReferModelProps> = ({ closeModal }) => {
  return (
    <div className="bg-[#121325] border-2 border-primary/20 rounded-2xl w-[600px] md:w-[720px] mx-4 h-[80%] overflow-hidden"><div className="flex flex-col relative bg-[#030515]/40 h-[100%]"><div className="absolute right-4 top-3 cursor-pointer border border-primary/20 rounded-full p-1" onClick={()=>closeModal(false)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg></div><div className="w-full py-5 px-10 text-xl border-b border-primary/5 bg-[radial-gradient(100%_60%_at_50%_10%,rgba(161,174,229,0.25)_0%,rgba(161,174,229,0.05)_50%,rgba(161,174,229,0.00)_100%)]">My Cards</div><div className="h-[100%] overflow-auto relative"><ul className="w-full divide-y-2 relative divide-primary/20"></ul></div><div className="flex  flex-wrap gap-1 justify-center items-center my-8"></div></div></div>
  );
};

export default CardModal;