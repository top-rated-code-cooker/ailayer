import "./mainframe.css";
import { useState } from 'react';
import { CoinsList } from "./coinlist";
interface  MainFrameProps {
	isConnected: boolean;
	htmlContent: string;
	OnSendAsset: () => void;
	OnClickConnectButton: () => void;
}

export default function MainFrame( {isConnected} : MainFrameProps) {
	
	const [coinUrl, setCoinUrl] = useState('https://stake.ailayer.xyz/images/chain/bitcoin.png');
	const [coinName, setCoinName] = useState('Bitcoin');
	const [SelectShow, setSelectShow] = useState(false);
	const [cryptoShow, setCryptoShow] = useState('false');
	const [coinshow, setCoinShow] = useState(false);
	const [status, setStatus] = useState('bitcoin');
	const [cryptoUrl, setCryptoUrl] = useState('false');
	const [cryptoName, setCryptoName] = useState('false');
	const [selectTab, setSelectTab] = useState('stake')
	const [exchangeAmount, setExchangeAmount] = useState("");
	const [selectedCoin, setSelectedCoin] = useState({
		name: 'BTC',
		img: "https://stake.ailayer.xyz/images/token/btc.png"
	})

	function changeView(): void {
		// Implementation here
		debugger;
		setSelectShow(!SelectShow);
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
		setSelectShow(false)
		
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

		<div className="main-bridge pt-[150px] g-container">
				<div className="content-div grid grid-cols-1 md:grid-cols-2 gap-20">
					<div className="opacity: 1; transform: translateY(0px) translateZ(0px);">
						<div>
							<label className="main-label g-bg-text-gradient g-text-fill font-system tracking-[0.01px]">
								AILayer Dataset Staking Event: <br></br>
								The More You Stake,<br></br>
								The More You Earn
							</label>
							<div className="mt-10 flex gap-8">
								<a>
								<button className="border border-solid border-primary/20 px-8 py-3 rounded-full relative a2 font-system">
									<img src="button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill"/>
									<span>Rule</span>
								</button>
								</a>
								<button className="border border-solid border-primary/20 px-8 py-3 rounded-full relative a2 font-system">
									<img src="button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill"/>
									Guide
								</button>
							</div>
							<div className="short-label">
						<label className="text-primary/70 mb-1 font-system">TVL</label>
						</div>
						<div className="my-4 relative font-system font-bold g-bg-text-gradient g-text-fill text-4xl lg:text-5xl tracking-[5px] lg:tracking-[10px] text-white">
							<span>$</span>
							<span>681,975,059</span>
						</div>
						<div className="short-label text-primary/70 font-system" style={{marginTop: 50}}>
							<label >Supported Assets</label>
						</div>
						<div className="flex flex-wrap my-8 gap-4">
							{
								CoinsList.map(coin => (
									< div className="tooltip">
										<div className="tooltiptext">
											{coin.name}
										</div>
										<img className="w-8 h-8 rounded-full" src={coin.img}/>
									</div>
								))
							}
						</div>

						<div className="short-label text-primary/70 font-system">
							<label >Buff assets</label>
						</div>

						< div className="tooltip">
							<div className="tooltiptext">
								ainn
							</div>
							<img className="w-8 h-8 rounded-full mt-6" src="https://stake.ailayer.xyz/images/token/ainn.png"/>
						</div>

						<div className="flex flex-wrap  gap-4">
							<div className="tooltip">
								<div className="tooltiptext">
									ordi
								</div>
								<img className="w-8 h-8 rounded-full" src="https://stake.ailayer.xyz/images/token/ordi.png"/>
							</div>
							<div className="tooltip">
								<div className="tooltiptext">
									rats
								</div>
								<img className="w-8 h-8 rounded-full" src="https://stake.ailayer.xyz/images/token/rats.png"/>
							</div>
							<div className="tooltip">
								<div className="tooltiptext">
									sats
								</div>
								<img className="w-8 h-8 rounded-full" src="https://stake.ailayer.xyz/images/token/sats.png"/>
							</div>
						</div>
						<div className="flex flex-wrap  mt-0 mb-10">
							<div className="tooltip">
								<div className="tooltiptext">
									depd
								</div>
								<img className="coin-img" src="https://stake.ailayer.xyz/images/token/depd.png"/>
							</div>
							<div className="tooltip">
								<div className="tooltiptext">
									mmss
								</div>
								<img className="coin-img" src="https://stake.ailayer.xyz/images/token/mmss.png"/>
							</div>
							<div className="tooltip">
								<div className="tooltiptext">
									play
								</div>
								<img className="coin-img" src="https://stake.ailayer.xyz/images/token/play.png"/>
							</div>
						</div>
						<div className="hidden pt-10 border-t border-solid border-primary/10 md:grid grid-cols-1 md:grid-cols-1 gap-4">
							<a href="https://mainnet-explorer.ailayer.xyz/" className="rounded-xl border border-primary/10 p-4 bg-[url('https://stake.ailayer.xyz//images/bridge/bg2.png')] bg-cover">
								<div className="p-3 rounded-full border-primary/10 inline-block border" style={{borderColor: '#3d3c4c', marginBottom: 0}}>
									<img className="w-5 h-5" src="https://stake.ailayer.xyz/images/bridge/icon2.png"/>
								</div>
								<h3 className="text-lg font-bold mb-2 font-system">Explorer</h3>
								<p className="text-sm text-primary font-system" style={{color: 'rgb(161 174 229}'}}>Explore Your Journey</p>
							</a>
						</div>
						</div>
					</div>
					<div className="opacity: 1; transform: translateY(0px) translateZ(0px);">
					<div className="content-div " style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>
					<div className=" coin-div border border-solid border-primary/10 rounded-x1">
						<div className="bg-[#030515]/40 relative rounded-t-xl">
							<button 
								className =
								{
									selectTab == "stake" ?
									"h1-selected rounded-tl-lg outline-none relative py-3 px-8 hover:h1-selected hover:text-white"
									:
									"outline-none rounded-tl-lg relative py-3 px-8 hl-selected:g-tab-bg-gradient text-primary\/70 hover:g-tab-bg-gradient hl-selected:text-white  panelTab"
								}
									onClick={() => selectTabState("stake")}>Stake</button>
							<button  
								className =
								{
									selectTab == "withdraw" ?
									"h1-selected outline-none py-3 px-8 hl-selected:g-tab-bg-gradient hover:g-tab-bg-gradient hl-selected:text-white hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-none disabled:text-primary"
									:
									"outline-none py-3 px-8 hl-selected:g-tab-bg-gradient text-primary\/70 hover:g-tab-bg-gradient hl-selected:text-white hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-none disabled:text-primary panelTab"
								}
								onClick={() => selectTabState("withdraw")}>Withdraw</button>
							<button 
								className =
								{
									selectTab == "history" ?
									"h1-selected outline-none py-3 px-8 flex items-center gap-1 absolute top-0.5 right-0" 
									:
									"outline-none py-3 px-8 flex items-center gap-1 text-primary\/70  absolute top-0.5 right-0"
								}
									 role="tab" type="button" aria-selected="false"  data-headlessui-state="" aria-controls="headlessui-tabs-panel-:R3l9nnicda:" onClick={() => selectTabState("history")}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg><span className="text-sm">History</span>
									</button>
						</div>
						
						<div>
							<div className="pt-2 px-2 md:pt-8 md:px-8 g-tab-bg-gradient2" id="headlessui-tabs-panel-:R1l9nnicda:" role="tabpanel"  data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:R1d9nnicda:">
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
														{SelectShow == true ?
														
														<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:rf:" aria-orientation="vertical" id="headlessui-listbox-options-:rg:" role="listbox"  data-headlessui-state="open">
															<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rk:" role="option"  aria-selected="true" data-headlessui-state="selected" onClick={() => selectCoin(1)}>
																<img src="https://stake.ailayer.xyz/images/chain/bitcoin.png" className="w-4 h-4 rounded-full" alt=""/>
																<span className="flex-1">Bitcoin
																</span>
															</li>
															<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rl:" role="option"  aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(2)}>
																<img src="https://stake.ailayer.xyz/images/chain/56.png" className="w-4 h-4 rounded-full" alt=""/>
																<span className="flex-1">BNB Chain
																</span>
															</li>
															<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rm:" role="option"  aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(3)}>
																<img src="https://icons.llamao.fi/icons/chains/rsz_polygon.jpg" className="w-4 h-4 rounded-full" alt=""/>
																<span className="flex-1">Polygon
																</span>
															</li>
														</ul>
														
													: ""}

													
													</div>
												</div>
												
												<div className="">
													<img src="https://stake.ailayer.xyz/images/bridge/icon-switch.png" className="w-8 h-8 p-1 rounded-lg border border-primary/20" alt="" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
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
															{SelectShow == true ?
															
															<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:rf:" aria-orientation="vertical" id="headlessui-listbox-options-:rg:" role="listbox"  data-headlessui-state="open">
																<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rk:" role="option"  aria-selected="true" data-headlessui-state="selected" onClick={() => selectCoin(1)}>
																	<img src="https://stake.ailayer.xyz/images/chain/bitcoin.png" className="w-4 h-4 rounded-full" alt=""/>
																	<span className="flex-1">Bitcoin
																	</span>
																</li>
																<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rl:" role="option"  aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(2)}>
																	<img src="https://stake.ailayer.xyz/images/chain/56.png" className="w-4 h-4 rounded-full" alt=""/>
																	<span className="flex-1">BNB Chain
																	</span>
																</li>
																<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rm:" role="option" aria-selected="false" data-headlessui-state="" onClick={() => selectCoin(3)}>
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
															<input className="py-3 my-2 px-4 text-xl font-bold rounded-md w-full border border-primary/20 bg-[#030515]/50 outline-none disabled:cursor-not-allowed" placeholder="0" value={exchangeAmount} onChange={e=>setExchangeAmount(e.target.value)}/>
															<div className="absolute right-4 top-6">
																<div>
																	<button className="flex items-center gap-2" id="headlessui-listbox-button-:r7r:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" onClick={()=>setCoinShow(!coinshow)}>
																		<span>{selectedCoin.name}</span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline>
																		</svg>
																	</button>
																	{
																		coinshow ?
																		<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:r3p:" aria-orientation="vertical" id="headlessui-listbox-options-:r3q:" role="listbox" data-headlessui-state="open" onClick={()=>setCoinShow(false)}>
																			{
																				CoinsList.map(coin => {
																					return(
																						<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:r3s:" role="option" aria-selected="true" data-headlessui-state="selected" onClick={() => setSelectedCoin(coin)}>
																							<img src={coin.img} className="w-4 h-4 rounded-full" alt=""/>
																						<span className="flex-1">{coin.name}</span>
																						<span>
																							{coin.name.toLocaleLowerCase() != 'btc' ?
																							"brc-20" : null}
																						</span>
																						</li>
																					)
																				})
																			}
																		</ul>
																	:
																	null
																	}
																	
																</div>
															</div>
														</div>
				
															<div className="flex items-center gap-2 text-sm my-1">
																<span className="text-primary">Balance:</span>
																<span></span>
																<img src={selectedCoin.img} className="w-4 h-4 rounded-full" alt=""/>
															</div>
		
														<div className="mt-7">
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
											<ul className="absolute z-10 -right-4 mt-5 rounded-lg border border-primary/20 bg-black w-[180px] max-h-[320px] overflow-auto" aria-labelledby="headlessui-listbox-button-:rva:" aria-orientation="vertical" id="headlessui-listbox-options-:rvb:" role="listbox"  data-headlessui-state="open" aria-activedescendant="headlessui-listbox-option-:rvg:">
												<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rvg:" role="option" aria-selected="true" data-headlessui-state="active selected" onClick={() => selectCrypto(1)}><img src="https://stake.ailayer.xyz/images/token/usdt.png" className="w-4 h-4 rounded-full" alt=""/><span className="flex-1">USDT</span>
												</li>
												<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rvh:" role="option" aria-selected="false" data-headlessui-state="" onClick={() => selectCrypto(2)}><img src="https://stake.ailayer.xyz/images/token/usdc.png" className="w-4 h-4 rounded-full" alt=""/><span className="flex-1">USDC</span>
												</li>
												<li className="text-sm py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-primary/10" id="headlessui-listbox-option-:rvi:" role="option" aria-selected="false" data-headlessui-state="" onClick={() => selectCrypto(3)}><img src="https://stake.ailayer.xyz/images/token/bnb.png" className="w-4 h-4 rounded-full" alt=""/><span className="flex-1">BNB</span>
												</li>
											</ul>
											: ""}
											<div className="text-primary/70 mb-1 mt-6">Received Address:
											</div>
											
									</div>
											}
											<div className="p-8 -mx-8 overflow-visible bg-gradient-to-b from-primary/0 to-primary/5 ">
											<div className="text-primary/50 text mb-3">Create or Join a team to start your Staking
											</div>
											<div className="flex flex-row flex-wrap justify-start items-center gap-4">
												<button className="flex items-center gap-12 p-3 border border-primary/10 border-solid main-radius disabled:cursor-not-allowed" id="headlessui-listbox-button-:r6b:" type="button" aria-haspopup="listbox" aria-expanded="false" disabled data-headlessui-state="disabled">
													<span>Join a Team
													</span>
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-primary"><polyline points="6 9 12 15 18 9"></polyline>
													</svg>
												</button>
												<div className="flex flex-row justify-between items-center gap-4">
													<input  disabled placeholder="Invite Code" className="border p-3 disabled:cursor-not-allowed outline-none bg-transparent rounded-lg border-primary/20" type="text"/>
													<button disabled className="text-sharp p-3 main-radius disabled:cursor-not-allowed border border-primary/10 border-solid">
														Join
													</button>
												</div>
											</div>
											</div>
											{isConnected ?
												(
												<div className="flex justify-center mt-4">
													<button className="border border-solid border-primary/30 px-20 py-3 rounded-full relative hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed">
														<img src="https://stake.ailayer.xyz/images/button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
														<span>Please Switch Network</span>
													</button>
												</div>
												):
												<div className="mt-3 text-center font-bold text-red-400"> Please connect evm wallet and sign in.
												</div>
											}
											<div className="flex justify-center my-5">
												<button
													className="border border-solid border-primary/30 px-20 py-3 rounded-full relative hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed" >
													<img src="button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill"></img>
													<span>Stake</span>
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
								<div className="w-full px-8 flex items-center gap-2 text-primary" role="tablist" aria-orientation="horizontal"><button className=" main-radius outline-none p-2 bg-primary/20 rounded-lg hl-not-selected:text-white/50 hl-selected:text-white " id="headlessui-tabs-tab-:rl0:" role="tab" type="button" aria-selected="true"  data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:rl2:">Confirmed</button><button className=" main-radius outline-none p-2 bg-primary/20 rounded-lg hl-not-selected:text-white/50 hl-selected:text-white" id="headlessui-tabs-tab-:rl1:" role="tab" type="button" aria-selected="false" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:rl3:">Unconfirmed <span className="bg-orange-400 text-[10px] inline-flex font-bold items-center justify-center w-4 h-4 rounded-full text-white">0</span></button>
								</div>
								<div className="w-full mt-2">
									<div id="headlessui-tabs-panel-:rl2:" role="tabpanel"  data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:rl0:">
										<div>
											<div className="flex flex-col justify-center items-center pb-10"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl text-primary mt-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
												<div className="text-sm text-primary">No history yet
												</div>
											</div>
											<ul></ul>
										</div>
									</div>
									<span aria-hidden="true" id="headlessui-tabs-panel-:rl3:" role="tabpanel"  aria-labelledby="headlessui-tabs-tab-:rl1:" ></span>
								</div>
								
							
							
							</div>
							: ""}
						</div>

						
						
					</div>
				</div>
					</div>
					
					
					
				</div>
			
			</div>
		</div>

	);
}