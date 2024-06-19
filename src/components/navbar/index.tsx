import { useRef, useState } from "react";
import { usePopper } from "react-popper";
import "./navbar.css";
import "./responsive.css";
// import axios from "axios";

// interface NavItemProps {
//   text: string;
//   to: string;
// }

// function NavItem(props: NavItemProps) {
//   return (

//     <a className="nav-item text-decoration-none font-hind g-bg-text-gradient" href={props.to ?? '#'}>
//       {props.text == "Social Campaign" &&
//         <span className="nav-text nav-special">Epoch 2</span>}
//       <span className="nav-text">{props.text}</span>
//     </a>
//   );
// }

// function MenuItem(props: NavItemProps) {
//   return (
//     <a className="menu-item">
//       <span className="text">{props.text}</span>
//     </a>
//   );
// }

// function GasPopover() {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const arrowElement = useRef(null);
//   const [feerate, setFeerate] = useState({ hourFee: 0, halfHourFee: 0, fastestFee: 0 });
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current,
//     {
//       modifiers: [
//         { name: "arrow", options: { element: arrowElement.current } },
//       ],
//     }
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(`https://mempool.space/api/v1/fees/recommended`);
//         setFeerate(data);
//       } catch (error) {
//         console.log("Server responded with:", error);
//       }
//     };

//     fetchData(); // fetch data immediately
//     const intervalId = setInterval(fetchData, 5000); // fetch data every 30 seconds

//     // clean up the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <button
//         className="pill"
//         ref={referenceElement}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//       >
//         <i className="iconfont icon-gas1"></i>
//         <span>{feerate.halfHourFee}</span>
//       </button>
//       <div
//         className={`gas-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="arrow" style={styles.arrow} ref={arrowElement}></div>
//         <div className="popover-content">
//           <div className="gas-list">
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-bike"></i>
//               <span className="nav-rate-text">Low: {feerate.hourFee} sats/vB</span>
//             </div>
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-plane1"></i>
//               <span className="nav-rate-text">Medium: {feerate.halfHourFee} sats/vB</span>
//             </div>
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-flashlight-line"></i>
//               <span className="nav-rate-text">High: {feerate.fastestFee} sats/vB</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// interface InfoPopoverProps extends PropsWithChildren {
//   title: string;
// }

// function InfoPopover({ title, children }: InfoPopoverProps) {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const arrowElement = useRef(null);
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current,
//     {
//       modifiers: [
//         { name: "arrow", options: { element: arrowElement.current } },
//       ],
//     }
//   );

//   return (
//     <>
//       <div
//         ref={referenceElement}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//       >
//         {children}
//       </div>
//       <div
//         className={`info-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="arrow" style={styles.arrow} ref={arrowElement}></div>
//         <span className="popover-content">{title}</span>
//       </div>
//     </>
//   );
// }

// interface ExtraItemProps {
//   title: string;
//   icon: string;
// }

// function ExtraItem({ title, icon }: ExtraItemProps) {
//   return (
//     <div className="additional-item">
//       <i className={`iconfont gn-icon-click ${icon}`}></i>
//       <span>{title}</span>
//     </div>
//   );
// }

// function EllipsisPopover() {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current
//   );

//   function onNightToggle() { }

//   return (
//     <>
//       <button
//         className="more-btn"
//         ref={referenceElement}
//         onClick={() => setVisible(!visible)}
//         onBlur={() => setVisible(false)}
//       >
//         <i className="iconfont icon-more"></i>
//       </button>
//       <div
//         className={`more-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="popover-content">
//           <div>
//             <div className="night-mode">
//               <i className="iconfont gn-icon-click icon-dark"></i>
//               <span>Night Mode</span>
//               <SwitchButton
//                 className="toggle"
//                 onUpdate={onNightToggle}
//                 defaultVal={true}
//               />
//             </div>
//             <ExtraItem title="About" icon="icon-info-circle-filled" />
//             <ExtraItem title="API" icon="icon-soundmian" />
//             <ExtraItem title="Twitter" icon="icon-twitter1" />
//             <ExtraItem title="Discord" icon="icon-discord-fill" />
//             <ExtraItem title="Documentation" icon="icon-book-filled" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

interface AddressPopoverProps {
  address: string;
  disconnectWallet: () => void;
}

function AddressPopover({ address, disconnectWallet }: AddressPopoverProps) {
  const [visible, setVisible] = useState(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current
  );

  return (
    <>
      <button
        className="address-btn"
        ref={referenceElement}
        onClick={() => setVisible(!visible)}
        onBlur={() => setVisible(false)}
      >
        <div className="wrapper">
          <span>{address.slice(0, 4) + "..." + address.slice(-4)}</span>
          <i
            className="addr-arrow-icon iconfont icon-chevron-down"
            style={{
              transform: visible ? "rotate(180deg)" : "rotateY(0)",
            }}
          ></i>
        </div>
      </button>
      <div
        className={`address-popover popover ${visible ? "is-visible" : "hidden"}`}
        style={styles.popper}
        ref={popperElement}
        {...attributes.popper}
      >
        <div className="popover-content">
          <div className="addr-menu-list">
            <div className="addr-menu-item">Orders</div>
            <div className="addr-menu-item">Sign In on Mobile</div>
            <button className="addr-menu-item" onClick={disconnectWallet}>
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// interface SwitchButtonProps {
//   className?: string;
//   defaultVal?: boolean;
//   onUpdate?: (newVal: boolean) => void;
// }

// interface MenuControlToggleProps extends SwitchButtonProps {
//   text: string;
// }

// function SwitchButton({ className, defaultVal, onUpdate }: SwitchButtonProps) {
//   const [value, setValue] = useState(!!defaultVal);

//   function handleSwitch() {
//     setValue(!value);
//     onUpdate?.(!value);
//   }

//   return (
//     <label
//       className={`switch ${className} ${value ? "on" : "off"}`}
//       onClick={handleSwitch}
//     ></label>
//   );
// }

// function MenuControlToggle({ text, onUpdate }: MenuControlToggleProps) {
//   return (
//     <a className="menu-item">
//       <span className="text">{text}</span>
//       <SwitchButton onUpdate={onUpdate} />
//     </a>
//   );
// }

// interface SideNavProps {
//   open: boolean;
// }

// function SideNav({ open }: SideNavProps) {
//   return (
//     <aside
//       className="sidenav"
//       style={{
//         display: open ? "" : "none",
//       }}
//     >
//       <div className="wrapper">
//         <div className="menu-links">
//           <MenuItem text="Discover" to="" />
//           <MenuItem text="Portfolio" to="" />
//           <MenuItem text="Inscriptions" to="" />
//           <MenuItem text="Index" to="" />
//           <MenuItem text="Mint" to="" />
//           <MenuItem text="Rewards" to="" />
//           <MenuItem text="About" to="" />
//           <MenuItem text="Documentation" to="" />
//         </div>

//         <MenuControlToggle text="Dark Mode" />
//         <MenuItem text="Install Our App" to="" />
//       </div>
//     </aside>
//   );
// }

interface NavbarProps {
  isConnected: boolean;
  accountAddress: string;
  onClickConnectButton: () => void;
  OnWalletDisconnect: () => void;
}

export default function Navbar({
  isConnected,
  accountAddress,
  onClickConnectButton,
  OnWalletDisconnect,
}: NavbarProps) {
  // const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed left-0 right-[5px] top-0 z-30 flex items-center border-b-2 border-primary/5 text-primary backdrop-blur-2xl lg:bg-transparent px-4">
      <div className="w-full">
        <header className="relative g-container mx-auto flex items-center justify-between py-3 lg:py-6">
          <a className="flex items-center space-x-2.5" href="/">
            <img src="text-logo.png" width="130" height="35" alt="Logo"/>
          </a>
          <div className="hidden items-center space-x-5 rounded-full border px-6 py-3 lg:flex xl:space-x-7 xl:px-8 xl:py-4 border-primary/10 ">
              <a href="/" target="_blank" className="font-system text-[16px] g-text-fill g-bg-text-gradient relative">Home</a>
                    <div className="h-1 w-1 rounded-full bg-primary/70">
                    </div>
              <a href="https://social.ailayer.xyz" target="_blank" className="font-system g-text-fill g-bg-text-gradient relative text-[16px]">
                <span className="g-text-fill g-bg-text-gradient absolute -right-5 -top-4 text-[12px]">Epoch 2</span>
                Social Campaign</a><div className="h-1 w-1 rounded-full bg-primary/70"></div>
              <a className="relative text-[16px]" href="/stake">
                <span className="g-text-fill g-bg-text-gradient font-system">Staking Campaign</span></a>
              <div className="h-1 w-1 rounded-full bg-primary/70"></div>
              <a className=" relative text-[16px]" href="/">
                <span className="g-text-fill g-bg-text-gradient font-system">Stake</span>
              </a>
          </div>
          {/* <div className="main-nav">
            <div className="logo-container">
              <img className="" style={{ marginTop: '-10px' }} src="https://stake.ailayer.xyz/images/text-logo.png" />
            </div>

            <div className="hidden items-center space-x-5 rounded-full border px-6 py-3 lg:flex xl:space-x-7 xl:px-8 xl:py-4 border-primary/10 ">
              <a href="https://ailayer.xyz" target="_blank" className="font-hind text-[16px] g-text-fill g-bg-text-gradient relative">Home</a>
                <div className="h-1 w-1 rounded-full bg-primary/70">
                </div>
              <a href="https://social.ailayer.xyz" target="_blank" className="font-hind g-text-fill g-bg-text-gradient relative text-[16px]">
                <span className="g-text-fill g-bg-text-gradient absolute -right-5 -top-4 text-[12px]">Epoch 2</span>
                Social Campaign</a><div className="h-1 w-1 rounded-full bg-primary/70"></div>
              <a className="font-hind relative text-[16px]" href="/stake">
                <span className="g-text-fill g-bg-text-gradient">Staking Campaign</span></a>
              <div className="h-1 w-1 rounded-full bg-primary/70"></div>
              <a className="font-hind relative text-[16px]" href="/bridge">
                <span className="g-text-fill g-bg-text-gradient">Stake</span>
              </a>
            </div>

            <div className="nav-end">
              <button className="nav-btn">
                Connect Wallet
              </button>
            </div>
          </div> */}
          <div className="hidden lg:block">
            <div className="relatvive">
            {isConnected ? (
            <div className="address-dropdown">
              <AddressPopover
                address={accountAddress}
                disconnectWallet={OnWalletDisconnect}
              />
            </div>
          ) : (
            <button onClick={onClickConnectButton}
              className="border border-solid border-primary/30 px-4 py-3 rounded-full relative flex items-center gap-2" id="headlessui-menu-button-:r0:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
              <img src="button-inner-shadow.png" className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full object-fill" data-nsfw-filter-status="sfw" style={{visibility: "visible"}}/>
              <span>Connect Wallet</span>
            </button>
          )}
            </div>
          </div>
        </header>
        {/* <SideNav open={openMenu} /> */}
      </div>
    </div>
  );
}
