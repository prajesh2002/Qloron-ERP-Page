// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import {
//   Bars3Icon,
//   BellIcon,
//   UserIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// import img1 from "../images/logo.jpg";

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-black text-sm">
//       {({ open }) => (
//         <>
//           {/* max-w-7xl sm:px-6 lg:px-8*/}
//           <div className="mx-auto pr-0 sm:pr-0 md:pr-4">
//             <div className="relative flex h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img className="max-h-16 w-auto" src={img1} alt="Qloron" />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4 m-4 text-white">
//                     <div className=""></div>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       HOME
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       ABOUT US
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       SERVICES & SUPPORT
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       TECHNOLOGIES
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       PORTFOLIO
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       CONTACT US
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       CAREERS
//                     </a>
//                     <a
//                       href="/"
//                       className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                     >
//                       HIRE DEVELOPERS
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 md:ml-0 md:pr-0 sm:pr-0">
//                 <button className="text-white m-6 py-2 px-4 relative flex rounded-full bg-cyan-500 hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800 hover:bg-cyan-600">
//                   SORTBOXS
//                 </button>

//                 <button
//                   type="button"
//                   className="relative rounded-full bg-black p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {/* {navigation.map((item) => ( */}
//               <Disclosure.Button
//                 className="bg-black text-white
//                       hover:text-gray-300 hover:text-white
//                     flex flex-col rounded-md px-3 py-2 text-base font-medium"
//               >
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   HOME
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   ABOUT US
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   SERVICES & SUPPORT
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   TECHNOLOGIES
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   PORTFOLIO
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   CONTACT US
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   CAREERS
//                 </a>
//                 <a
//                   href="/"
//                   className="hover:bg-slate-300 hover:text-black hover:cursor-pointer rounded-2xl px-2 py-1"
//                 >
//                   HIRE DEVELOPERS
//                 </a>
//               </Disclosure.Button>
//               {/* ))} */}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }


// --------------------------
// // import { Fragment } from "react";
// // import { Disclosure, Menu, Transition } from "@headlessui/react";
// // import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// // import img1 from "../images/logo.jpg";

// // const navigation = [
// //   { name: "HOME", href: "#", current: true },
// //   { name: "ABOUT US", href: "#", current: false },
// //   { name: "SERVICES & SUPPORT", href: "#", current: false },
// //   { name: "TECHNOLOGIES", href: "#", current: false },
// //   { name: "PORTFOLIO", href: "#", current: false },
// //   { name: "CONTACT US", href: "#", current: false },
// //   { name: "CAREERS", href: "#", current: false },
// //   { name: "HIRE DEVELOPERS", href: "#", current: false },
// // ];

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(" ");
// // }

// // export default function Example() {
// //   return (
// //     <Disclosure as="nav" className="bg-black">
// //       {({ open }) => (
// //         <>
// //           {/*max-w-7xl px-2 sm:px-6 lg:px-8  */}
// //           <div className="mx-auto sm:pr-6 md:pr-10 lg:pr-14">
// //             <div className="relative flex h-16 items-center justify-between">
// //               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //                 {/* Mobile menu button*/}
// //                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
// //                   <span className="absolute -inset-0.5" />
// //                   <span className="sr-only">Open main menu</span>
// //                   {open ? (
// //                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
// //                   ) : (
// //                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
// //                   )}
// //                 </Disclosure.Button>
// //               </div>
// //               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //                 <div className="flex flex-shrink-0 items-center">
// //                   <img className="h-16 w-auto" src={img1} alt="Your Company" />
// //                 </div>
// //                 <div className="hidden sm:ml-6 sm:block">
// //                   <div className="flex space-x-4 m-3">
// //                     {navigation.map((item) => (
// //                       <a
// //                         key={item.name}
// //                         href={item.href}
// //                         className={classNames(
// //                           item.current
// //                             ? "bg-gray-900 text-white"
// //                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
// //                           "rounded-md px-3 py-2 text-sm font-medium"
// //                         )}
// //                         aria-current={item.current ? "page" : undefined}
// //                       >
// //                         {item.name}
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //                 <button
// //                   type="button"
// //                   className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// //                 >
// //                   <span className="absolute -inset-1.5" />
// //                   <span className="sr-only">View notifications</span>
// //                   <BellIcon className="h-6 w-6" aria-hidden="true" />
// //                 </button>

// //                 {/* Profile dropdown */}
// //                 <Menu as="div" className="relative ml-3">
// //                   <div>
// //                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //                       <span className="absolute -inset-1.5" />
// //                       <span className="sr-only">Open user menu</span>
// //                       <img
// //                         className="h-8 w-8 rounded-full"
// //                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// //                         alt=""
// //                       />
// //                     </Menu.Button>
// //                   </div>
// //                   <Transition
// //                     as={Fragment}
// //                     enter="transition ease-out duration-100"
// //                     enterFrom="transform opacity-0 scale-95"
// //                     enterTo="transform opacity-100 scale-100"
// //                     leave="transition ease-in duration-75"
// //                     leaveFrom="transform opacity-100 scale-100"
// //                     leaveTo="transform opacity-0 scale-95"
// //                   >
// //                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="/"
// //                             className={classNames(
// //                               active ? "bg-gray-100" : "",
// //                               "block px-4 py-2 text-sm text-gray-700"
// //                             )}
// //                           >
// //                             Your Profile
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="/"
// //                             className={classNames(
// //                               active ? "bg-gray-100" : "",
// //                               "block px-4 py-2 text-sm text-gray-700"
// //                             )}
// //                           >
// //                             Settings
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(
// //                               active ? "bg-gray-100" : "",
// //                               "block px-4 py-2 text-sm text-gray-700"
// //                             )}
// //                           >
// //                             Sign out
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                     </Menu.Items>
// //                   </Transition>
// //                 </Menu>
// //               </div>
// //             </div>
// //           </div>

// //           <Disclosure.Panel className="sm:hidden">
// //             <div className="space-y-1 px-2 pb-3 pt-2">
// //               {navigation.map((item) => (
// //                 <Disclosure.Button
// //                   key={item.name}
// //                   as="a"
// //                   href={item.href}
// //                   className={classNames(
// //                     item.current
// //                       ? "bg-gray-900 text-white"
// //                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
// //                     "block rounded-md px-3 py-2 text-base font-medium"
// //                   )}
// //                   aria-current={item.current ? "page" : undefined}
// //                 >
// //                   {item.name}
// //                 </Disclosure.Button>
// //               ))}
// //             </div>
// //           </Disclosure.Panel>
// //         </>
// //       )}
// //     </Disclosure>
// //   );
// // }


// --------------------------
// import React from "react";
// import {
//   Container,
//   Nav,
//   NavDropdown,
//   Navbar,
//   Image,
//   Button,
// } from "react-bootstrap";
// import logo from "../images/logo.jpg";
// import "../styles/header.css";

// function Header() {
//   return (
//     <>
//       <Navbar
//         sticky="top"
//         collapseOnSelect
//         expand="xl"
//         // expand="lg"
//         className="bg-slate-950 nav p-0 m-0 text-white"
//         variant="dark"
//         // style={{ height: "80px" }}
//         style={{textAlign:"center"}}
//       >
//         <Container fluid className="p-0 m-0">
//           <Navbar.Brand href="#home" className="p-0 m-0">
//             <Image
//               src={logo}
//               alt="QR Code"
//               // fluid
//               className="mt-0 mb-0 p-0 m-0"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mx-auto justify-content-between">
//               <Nav.Link href="#home" className="home">
//                 HOME
//               </Nav.Link>
//               <NavDropdown title="ABOUT US" id="collapsible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">ABC</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">PQR</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">XYZ</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown
//                 title="SERVICES & SUPPORT"
//                 id="collapsible-nav-dropdown"
//               >
//                 <NavDropdown.Item href="#action/3.1">ABC</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">PQR</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">XYZ</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#technologies">TECHNOLOGIES</Nav.Link>
//               <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
//               <Nav.Link href="#contactus">CONTACT US</Nav.Link>
//               <Nav.Link href="#careers">CAREERS</Nav.Link>
//               <Nav.Link href="#hiredevelopers">HIRE DEVELOPERS</Nav.Link>
//             </Nav>
//             <Nav className="ml-auto" style={{alignItems:"center"}}>
//               <button className="sortbox-btn">SORTBOXS</button>
//               <Nav.Link eventKey={2} href="#user" className="icon-link">
//                 <i className="fa-regular fa-user fa-xl icon"></i>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;

// -------------------------
// import react, { useState } from "react";
// import img from "../images/logo.jpg";
// import Button from "./Button";

// const Nav = () => {
//   const navEle = [
//     { name: "HOME", link: "#", current: true },
//     { name: "ABOUT US", link: "#", current: false },
//     { name: "SERVICES & SUPPORT", link: "#", current: false },
//     { name: "TECHNOLOGIES", link: "#", current: false },
//     { name: "PORTFOLIO", link: "#", current: false },
//     { name: "CONTACT US", link: "#", current: false },
//     { name: "CAREERS", link: "#", current: false },
//     { name: "HIRE DEVELOPERS", link: "#", current: false },
//   ];

//   let [open, setOpen] = useState(false);

//   return (
//     <div className="shadow-md w-full sticky top-0 left-0 z-[20]">
//       <div className="md:flex items-center justify-between bg-black text-white pr-2">
//         <div className="cursor-pointer flex items-center">
//           <span className="mr-1">
//             <img
//               src={img}
//               alt=""
//               // w-44 md:w-36 md:h-16 lg:w-full
//               className=" w-44 md:w-32 lg:w-full"
//               href="/"
//             />
//           </span>
//         </div>
//         <div className="text-3xl absolute right-4 top-3 cursor-pointer md:hidden">
//           <i
//             onClick={() => setOpen(!open)}
//             className="fa-solid fa-bars"
//             name={open ? "close" : "menu"}
//           ></i>
//         </div>
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-4 absolute bg-slate-950 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-6 transition-all duration-500 ease-in ${
//             open ? "top-15 opacity-100" : "top[-490px]"
//           } md:opacity-100 opacity-0`}
//         >
//           {navEle.map((Link) => (
//             <li
//               key={Link.name}
//               className=" md:ml-1 lg:ml-1 xl:ml-6 md:my-0 my-4 mx-2 lg:text-base md:text-xs md:mx-1 md:mr-0"
//             >
//               <a
//                 href={Link.link}
//                 className="hover:cursor-pointer hover:px-1 hover:py-1"
//               >
//                 {Link.name}{" "}
//               </a>
//             </li>
//           ))}
//           {/* our own custom Button component */}
//           <button className="text-white m-4 lg:py-2 lg:px-4 md:py-2 md:px-2 relative flex rounded-full bg-cyan-500 hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800 hover:bg-cyan-600 lg:text-base md:text-xs">
//             SORTBOXS
//           </button>
//           <div>
//             <i className="fa-solid fa-user lg:m-4 md:m-1 text-xl cursor-pointer rounded-full px-1 hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800 lg:text-base md:text-xs "></i>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;