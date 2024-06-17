import "./mainframe.css";
import Footer from "../footer";
import React, { useState } from 'react';


export default function MainFrame( ) {
	const [coinUrl, setCoinUrl] = useState('https://stake.ailayer.xyz/images/chain/bitcoin.png');
	const [coinName, setCoinName] = useState('Bitcoin');
	const [SelectShow, setSelectShow] = useState('false');
	const [coinShow, setCoinShow] = useState('false');
	const [cryptoShow, setCryptoShow] = useState('false');
	const [status, setStatus] = useState('bitcoin');
	const [cryptoUrl, setCryptoUrl] = useState('false');
	const [cryptoName, setCryptoName] = useState('false');
	const [selectTab, setSelectTab] = useState('stake')
	function changeView(): void {
		// Implementation here
		setSelectShow('true');
	}

	function selectTabState(value: string) {
		setSelectTab(value);
	}

	function selectCoin(value: number){
		if (value == 1) {
			setCoinUrl("https://stake.ailayer.xyz/images/chain/bitcoin.png");
			setCoinName("Bitcoin");
			setStatus("bitcoin");
		}
		else if (value == 2) {
			setCoinUrl("https://stake.ailayer.xyz/images/chain/56.png");
			setCoinName("BNB Chain");
			setStatus("bnb");
		}
		else {
			setCoinUrl("https://icons.llamao.fi/icons/chains/rsz_polygon.jpg");
			setCoinName("Polygon");
			setStatus("polygon");
		}
		setSelectShow("false")
		
	  }

	  function selectCrypto(value: number){
		if (value == 1) {
			setCryptoUrl("https://stake.ailayer.xyz/images/token/usdt.png");
			setCryptoName("USDT");
		}
		else if (value == 2) {
			setCryptoUrl("https://stake.ailayer.xyz/images/token/usdc.png");
			setCryptoName("USDC");
		}
		else {
			setCryptoUrl("https://stake.ailayer.xyz/images/token/bnb.png");
			setCryptoName("BNB");
		}
		setCryptoShow("false")
		
	  }

	  function changeCrypto() {
		setCryptoShow("true")
	  }
	
	return (
		<div className="whole-border">
			<div className="main-bridge pt-[150px] g-container">
				<div className="content-div">
					<label className="main-label g-bg-text-gradient g-text-fill">
						AlLayer Dataset Staking Event: <br></br>
						The More You Stake,<br></br>
						The More You Earn
					</label>
					<div className="btn-div mt-10 flex gap-8">
						<a>
						<button className="bridge-btn mr-7 border border-primary/20 px-8 py-3 rounded-full relative a2">
							<img src="button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill"/>
							Rule
						</button>
						</a>
						<button className="bridge-btn border border-primary/20 px-8 py-3 rounded-full relative a2">
							<img src="button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill"/>
							Guid
						</button>
					</div>
					<div className="short-label">
						<label >TVL</label>
					</div>
					<div className="short-label" style={{marginTop: 20, fontSize: 47}}>
						<label><strong>$ 695, 349, 059</strong></label>
					</div>
					<div className="short-label" style={{marginTop: 50}}>
						<label >Supported Assets</label>
					</div>
					<div className="flex flex-wrap -mx-2">
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/btc.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ainn.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/sats.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ordi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/rats.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/depi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/bdin.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/aigc.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/stst.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/soul.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/9527.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/mice.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/depd.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/play.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/aisi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/nost.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/mmss.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/kong.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/btcs.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/deai.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/roup.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/pgid.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/efil.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/etgm.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/slor.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/korm.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/3518.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/csas.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/piin.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/insc.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ligo.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/vdbx.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/pika.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/foxs.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/sparkle.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ethi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ethpi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ierc-m4.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/zeroi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/pols.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/bnbs.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/sofi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/bsci.png"/>
					</div>
					<div className="short-label">
						<label >Buff assets</label>
					</div>
					<img className="coin-img mt-8" src="https://stake.ailayer.xyz/images/token/ainn.png"/>
					<div className="flex flex-wrap -mx-2 mt-1">
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/ordi.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/rats.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/sats.png"/>
					</div>
					<div className="flex flex-wrap -mx-2 mt-0">
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/depd.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/mmss.png"/>
						<img className="coin-img" src="https://stake.ailayer.xyz/images/token/play.png"/>
					</div>
					<div className="exp-div mt-10 w-full rounded-lg bg-cover pb-5">
						<a href="https://mainnet-explorer.ailayer.xyz/" className=" w-full">
							<div className="p-3 rounded-full border-primary/10 inline-block border m-4" style={{borderColor: '#3d3c4c', marginLeft: 20, marginBottom: 0}}>
								<img className="w-5 h-5" src="https://stake.ailayer.xyz/images/bridge/icon2.png"/>
							</div>
							<h3 className="text-lg font-bold mb-2 ml-4" >Explorer</h3>
							<p className="text-sm text-primary ml-4" style={{color: 'rgb(161 174 229}'}}>Explore Your Journey</p>
						</a>
					</div>
				</div>
				<div className="content-div" style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>
					<div className=" coin-div rounded-x1">
						<div className="bg-[#030515]/40 relative" style={{borderRadius: 10}}>
							<button className="outline-none relative py-3 px-8 hl-selected:g-tab-bg-gradient hover:g-tab-bg-gradient hl-selected:text-white hover:text-white" id="headlessui-tabs-tab-:R1d9nnicda:" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:R1l9nnicda:" onClick={() => selectTabState("stake")}>Stake</button>
							<button className="outline-none py-3 px-8 hl-selected:g-tab-bg-gradient hover:g-tab-bg-gradient hl-selected:text-white hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-none disabled:text-primary" id="headlessui-tabs-tab-:R2d9nnicda:" role="tab" type="button" aria-selected="false" tabIndex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:R2l9nnicda:" onClick={() => selectTabState("withdraw")}>Withdraw</button>
							<button className="outline-none py-3 px-8 flex items-center gap-1 absolute top-0.5 right-0" id="headlessui-tabs-tab-:R3d9nnicda:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:R3l9nnicda:" onClick={() => selectTabState("history")}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg><span className="text-sm">History</span></button>
						</div>
						
						<div>
							<div style={{backgroundColor: 'rgba(3, 5, 21, .5)'}} className="pt-2 px-2 md:pt-8 md:px-8 g-tab-bg-gradient2" id="headlessui-tabs-panel-:R1l9nnicda:" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:R1d9nnicda:">
								{selectTab != "history" && 
								<div style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>
									<div className="flex flex-col justify-between">
										<div className="mb-4">
											<div className="text-primary/70 mb-1">Network
											</div>
											{selectTab == "stake"?
											<div className="flex items-center gap-2 md:gap-8">
												<div className="main-radius flex-1 border border-primary/30 p-3 bg-[#030515]/50 rounded-lg flex items-center gap-2 text-sm">
													<img src={coinUrl} alt="" className="w-8 h-8 rounded-full" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
													<div className="flex-1">
														<div className="text-primary">From
														</div>
														<div className="text-xs md:text-sm">{coinName}
														</div>
													</div>
													<div className="relative">
														<button className="flex items-center gap-2" id="headlessui-listbox-button-:R1mpll9nnicda:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" onClick={changeView}>
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline>
															</svg>
														</button>
														{SelectShow == "true" ?
														
														<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:rf:" aria-orientation="vertical" id="headlessui-listbox-options-:rg:" role="listbox" tabindex="0" data-headlessui-state="open">
															<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rk:" role="option" tabindex="-1" aria-selected="true" data-headlessui-state="selected" onClick={() => selectCoin(1)}>
																<img src="https://stake.ailayer.xyz/images/chain/bitcoin.png" className="w-4 h-4 rounded-full" alt=""/>
																<span className="flex-1">Bitcoin
																</span>
															</li>
															<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rl:" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(2)}>
																<img src="https://stake.ailayer.xyz/images/chain/56.png" className="w-4 h-4 rounded-full" alt=""/>
																<span className="flex-1">BNB Chain
																</span>
															</li>
															<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rm:" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(3)}>
																<img src="https://icons.llamao.fi/icons/chains/rsz_polygon.jpg" className="w-4 h-4 rounded-full" alt=""/>
																<span className="flex-1">Polygon
																</span>
															</li>
														</ul>
														
													: ""}

													
													</div>
												</div>
												
												<div className="main-radius">
													<img src="https://stake.ailayer.xyz/images/bridge/icon-switch.png" className="w-8 h-8 p-1 " alt="" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
												</div>
												<div className="main-radius flex-1 border border-primary/30 p-3 bg-[#030515]/50 rounded-lg flex items-center gap-2 text-sm">
													<img src="https://stake.ailayer.xyz/images/chain/ainn.png" alt="" className="w-8 h-8 rounded-full" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
														<div>
															<div className="text-primary">To
															</div>
															<div className="text-xs md:text-xs md:mt-1">AILayer
															</div>
														</div>
													</div>
												</div>
												:""}

												{selectTab == "withdraw" ? 
												<div className="flex items-center gap-2 md:gap-8">
												<div className="flex-1 main-radius p-3 bg-[#030515]/50 rounded-lg flex items-center gap-2 text-sm"><img src="https://stake.ailayer.xyz/images/chain/ainn.png" alt="" className="w-8 h-8 rounded-full"/>
													<div>
														<div className="text-primary">From
														</div>
														<div className="text-xs md:text-xs md:mt-1">AILayer
														</div>
													</div>
												</div>
												<div><img src="https://stake.ailayer.xyz/images/bridge/icon-switch.png" className="w-8 h-8 p-1 rounded-lg main-radius" alt=""/>
												</div>
												<div className="flex-1 main-radius p-3 bg-[#030515]/50 rounded-lg flex items-center gap-2 text-sm"><img src={coinUrl} alt="" className="w-8 h-8 rounded-full"/>
													<div className="flex-1">
														<div className="text-primary">To
														</div>
														<div className="text-xs md:text-sm">{coinName}
														</div>
													</div>
													<div className="relative">
															<button className="flex items-center gap-2" id="headlessui-listbox-button-:R1mpll9nnicda:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" onClick={changeView}>
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline>
																</svg>
															</button>
															{SelectShow == "true" ?
															
															<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:rf:" aria-orientation="vertical" id="headlessui-listbox-options-:rg:" role="listbox" tabindex="0" data-headlessui-state="open">
																<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rk:" role="option" tabindex="-1" aria-selected="true" data-headlessui-state="selected" onClick={() => selectCoin(1)}>
																	<img src="https://stake.ailayer.xyz/images/chain/bitcoin.png" className="w-4 h-4 rounded-full" alt=""/>
																	<span className="flex-1">Bitcoin
																	</span>
																</li>
																<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rl:" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(2)}>
																	<img src="https://stake.ailayer.xyz/images/chain/56.png" className="w-4 h-4 rounded-full" alt=""/>
																	<span className="flex-1">BNB Chain
																	</span>
																</li>
																<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rm:" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(3)}>
																	<img src="https://icons.llamao.fi/icons/chains/rsz_polygon.jpg" className="w-4 h-4 rounded-full" alt=""/>
																	<span className="flex-1">Polygon
																	</span>
																</li>
															</ul>
															
														: ""}
														</div>
												</div>
												
											</div>	
	
												:""}
											</div>
											
											
											{status == "bitcoin" ?

													<div className="my-2">
														<div className="text-primary/70 mb-1">Amount</div>
														<div className="relative">
															<input className="py-3 my-2 px-4 text-xl font-bold rounded-md w-full main-radius bg-[#030515]/50 outline-none disabled:cursor-not-allowed" placeholder="0" value=""/>
															<div className="absolute right-4 top-6">
																<div>
																	<button className="flex items-center gap-2" id="headlessui-listbox-button-:r7r:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
																		<span>BTC</span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline>
																		</svg>
																	</button>
																</div>
															</div>
														</div>
														<div className="my-1">
															<div className="flex items-center gap-2 text-sm">
																<span className="text-primary">Balance:</span>
																<span></span><img src="https://stake.ailayer.xyz/images/token/btc.png" className="w-4 h-4 rounded-full" alt=""/>
															</div>
														</div>
														<div className="mt-4">
															<div className="flex justify-between">
																<h3 className="text-primary/70">Fee Rate
																</h3>
																<div className="flex items-center gap-1 text-sm hover:text-primary cursor-pointer">
																	<span>16 sats/vByte</span>
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
																</div>
															</div>
															<div className="flex justify-between my-2"><h3 className="text-primary/70">Target Address</h3><span className="text-sm"></span>
															</div>
														
															<div className="bg-primary/5 px-8 py-4 -mx-8 text-sm text-white/80">
																<div className="flex justify-between">
																	<div>You will Receive
																	</div>
																	<div className="text-primary/80"> BTC
																	</div>
																</div>
																<div className="flex justify-between my-1">
																	<div>Estimated Time of Arrival
																	</div>
																	<div className="text-primary/80"> ≈60 minutes
																	</div>
																</div>
																<div className="flex justify-between my-1">
																	<div>Fees
																	</div>
																	<div className="text-primary/80">Bridge Free(0 BTC)
																	</div>
																</div>
															</div>
														</div>
													</div>

													: ""}
											{status != 'bitcoin' && 
											
											<div className="my-2">
											<div className="flex justify-end items-center gap-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 cursor-pointer hover:opacity-70">
													<circle cx="12" cy="12" r="3"></circle>
													<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
												</svg>
											</div>
											<div className="text-primary/70 mb-1">Total Amount
											</div>
											<div className="relative main-radius">
												<input style={{border: 'none'}} className="py-3 my-2 px-4 text-xl font-bold rounded-md w-full border border-primary/20 bg-[#030515]/50 outline-none disabled:cursor-not-allowed" placeholder="0" value=""/>
												<div className="absolute right-4 top-6">
													<div>
														<button className="flex items-center gap-2" id="headlessui-listbox-button-:R6h6ll9nnicda:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
															<span>Select</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline></svg>
														</button>
													</div>
												</div>
											</div>
											
											<div className="text-primary/70 mb-1 mt-4">Received Token
											</div>
											
											<div className="relative main-radius">
												<input style={{border: 'none'}} disabled className="py-3 my-2 px-4 text-xl font-bold rounded-md w-full border border-primary/20 bg-[#030515]/50 outline-none disabled:cursor-not-allowed" placeholder="0" value=""/>
												<div className="absolute right-4 top-6">
													<div>
														<button className="flex items-center gap-2" id="headlessui-listbox-button-:R6h6ll9nnicda:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" onClick={changeCrypto}>
														<span className="flex items-center gap-2"><img src={cryptoUrl} className="w-4 h-4 rounded-full" alt=""/>{cryptoName}</span>
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline></svg>
														</button>
													</div>
												</div>
											</div>
											{cryptoShow == "true" ? 
											<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:rva:" aria-orientation="vertical" id="headlessui-listbox-options-:rvb:" role="listbox" tabindex="0" data-headlessui-state="open" aria-activedescendant="headlessui-listbox-option-:rvg:">
												<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rvg:" role="option" tabindex="-1" aria-selected="true" data-headlessui-state="active selected" onClick={() => selectCrypto(1)}><img src="https://stake.ailayer.xyz/images/token/usdt.png" className="w-4 h-4 rounded-full" alt=""/><span className="flex-1">USDT</span>
												</li>
												<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rvh:" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="" onClick={() => selectCrypto(2)}><img src="https://stake.ailayer.xyz/images/token/usdc.png" className="w-4 h-4 rounded-full" alt=""/><span className="flex-1">USDC</span>
												</li>
												<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rvi:" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="" onClick={() => selectCrypto(3)}><img src="https://stake.ailayer.xyz/images/token/bnb.png" className="w-4 h-4 rounded-full" alt=""/><span className="flex-1">BNB</span>
												</li>
											</ul>
											: ""}
											<div className="text-primary/70 mb-1 mt-6">Received Address:
											</div>
											
									</div>
											}
											<div className="text-primary/70 mb-1 mt-10">Create or Join a team to start your Staking
											</div>
											<div style={{display: 'inline-flex'}} className="flex flex-row flex-wrap justify-start items-center gap-4">
												<button className="flex items-center gap-12 p-3 main-radius disabled:cursor-not-allowed" id="headlessui-listbox-button-:r6b:" type="button" aria-haspopup="listbox" aria-expanded="false" disabled data-headlessui-state="disabled">
													<span>Join a Team
													</span>
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline>
													</svg>
												</button>
												<input style={{width: '45%'}} disabled placeholder="Invite Code" className="border p-3 disabled:cursor-not-allowed outline-none bg-transparent main-radius" type="text"/>
												<button disabled className="text-sharp p-3 main-radius disabled:cursor-not-allowed">
													Join
												</button>
											</div>
											<div className="mt-3 text-center font-bold text-red-400">Please connect evm wallet and sign in.
											</div>
											<div className="flex justify-center mt-4">
												<button className="border border-primary/30 px-20 py-3 rounded-full relative hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed">
													<img src="https://stake.ailayer.xyz/images/button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
													<span>Please Switch Network</span>
												</button>
											</div>
											<div className="text-xs text-primary text-center mt-4 mb-5">Powered by Butternetwork</div>
										</div>


										
								</div>
								
							}
							
							{selectTab == "history" ? 
							<div className="flex flex-col justify-center items-center text-sm -mx-8 md:-mt-8">
								<div className="py-2 text-primary/50 w-full px-8">Cross-chain history might being delayed a bit. Thanks for your patience
								</div>
								<div className="w-full px-8 flex items-center gap-2 text-primary" role="tablist" aria-orientation="horizontal"><button className=" main-radius outline-none p-2 bg-primary/20 rounded-lg hl-not-selected:text-white/50 hl-selected:text-white " id="headlessui-tabs-tab-:rl0:" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:rl2:">Confirmed</button><button className=" main-radius outline-none p-2 bg-primary/20 rounded-lg hl-not-selected:text-white/50 hl-selected:text-white" id="headlessui-tabs-tab-:rl1:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:rl3:">Unconfirmed <span className="bg-orange-400 text-[10px] inline-flex font-bold items-center justify-center w-4 h-4 rounded-full text-white">0</span></button>
								</div>
								<div className="w-full mt-2">
									<div id="headlessui-tabs-panel-:rl2:" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:rl0:">
										<div>
											<div className="flex flex-col justify-center items-center pb-10"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl text-primary mt-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
												<div className="text-sm text-primary">No history yet
												</div>
											</div>
											<ul></ul>
										</div>
									</div>
									<span aria-hidden="true" id="headlessui-tabs-panel-:rl3:" role="tabpanel" tabindex="-1" aria-labelledby="headlessui-tabs-tab-:rl1:" ></span>
								</div>
								
							
							
							</div>
							: ""}
						</div>

						
						
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}