import React from 'react';

interface ReferModelProps {
  closeModal: (arg0: boolean) => void;
}

const ReferModel: React.FC<ReferModelProps> = ({ closeModal }) => {
  return (
      <div className="bg-[#121325] main-radius rounded-2xl w-[480px] md:w-[840px] mx-4 overflow-hidden" style={{fontFamily: 'math'}}>
        <div className="relative p-4 bg-[radial-gradient(100%_60%_at_50%_10%,rgba(161,174,229,0.40)_0%,rgba(161,174,229,0.13)_50%,rgba(161,174,229,0.00)_100%)]">
          <div className="absolute right-4 top-4 cursor-pointer main-radius rounded-full p-1" onClick={() => closeModal(false)}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
            </svg>
          </div>
          <div className="text-2xl my-6 text-center">Referral Rules
          </div>
          <div className="bg-[#030515]/20 p-6 mb-4 rounded-lg gap-5 lg:gap-10 flex flex-col items-center  max-h-[600px] overflow-auto">
            <img src="https://stake.ailayer.xyz/images/stake/refereal_rules.png" className="w-[200px]" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
            <div className="flex pl-5 gap-4 flex-col justify-start text-primary text-center">
              <p>In this staking event, you can either create your own team and invite others, or join someone else's team. Each team is limited to 1,000 members.</p>
              <p>How to Invite or Join Another Team: Join another team using their team's code, or share your team's code to invite others.</p>
              <p>Whether you're a team leader or a member, inviting others brings extra points. If you invite someone to your team and they stake assets, you'll earn 16% of their daily basic points; if your directly invited team member invites someone else, you will earn an additional 8% of that member's staked daily basic points. Thus, you earn two types of invitation points.</p>
              <div className="flex flex-col items-center my-4 ">
                <p className=" text-[#ECF0FF] mb-2">Invitation Points:</p>
                <div className="flex flex-col justify-evenly">
                  <p className="">Directly invited members' basic points * 16%</p>
                  <p className="text-xl">+</p>
                  <p className="">Indirectly invited members' basic points * 8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReferModel;