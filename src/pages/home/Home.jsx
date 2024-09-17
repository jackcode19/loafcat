import React from 'react'
import Layout from '../../components/layout/Layout'
import Card from '../../components/card/Card';
import Slider from 'react-slick';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"


// import { ReactComponent as WalletIcon } from '../../assets/icons/phantom.svg'; // ensure you have this svg
// import { ReactComponent as SolIcon } from './icons/sol.svg'; // ensure you have this svg
// import { ReactComponent as ExchangeIcon } from './icons/exchange.svg'; // ensure you have this svg

import loafcat from '../../assets/img/loafcat.png'
import loafcatRight from '../../assets/img/loafcat-right.png'
import comic1 from '../../assets/img/comic1.png'
import comic2 from '../../assets/img/comic2.png'

function Home() {
   const handleCopy = () => {
    navigator.clipboard.writeText('LoafdJ3iWSAvstx3zppSGKA6sRvL9GzRtU1iRV7HkLkm');
    alert("Address copied to clipboard!");
   };

   const portfolio = [
      {
         src: '/img/portfolio/porto1.png',
         alt: 'Meme 1',
         text: 'GET BACK TO WORK',
      },
      {
         src: '/img/portfolio/porto1.png',
         alt: 'Meme 1',
         text: 'GET BACK TO WORK',
      },
      {
         src: '/img/portfolio/porto1.png',
         alt: 'Meme 1',
         text: 'GET BACK TO WORK',
      },
   ]; 

   // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
     slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
   };
   
//    renderArrows = () => {
//     return (
//       <div className="slider-arrow">
//         <ButtonBase
//           className="arrow-btn prev"
//           onClick={() => this.slider.slickPrev()}
//         >
//           <ArrowLeft />
//         </ButtonBase>
//         <ButtonBase
//           className="arrow-btn next"
//           onClick={() => this.slider.slickNext()}
//         >
//           <ArrowRight />
//         </ButtonBase>
//       </div>
//     );
//   };
   
  return (
   <Layout>  
      {/* Hero */}
      <section className="bg-welcome bg-center bg-no-repeat bg-cover pb-32"> 
         {/* Content */}
         <div className=" w-full h-screen flex flex-col justify-center items-center">
            <div className="">
               <h1 className="font-bold text-7xl sm:text-9xl lg:text-10xl text-slate-100 text-center font-pixelF font-outline-2 xl:font-outline-4 drop-shadow-2xl font-fontMain">
                  Welcome
               </h1>
            </div>
         </div>
      </section>

        {/* About */}
      <section className="text-white px-6 py-12 md:px-12 lg:px-32 flex flex-col md:flex-row items-center justify-between">
         {/* Text Section */}
         <div className="md:w-2/3">
         <h1 className="text-3xl font-bold mb-4 flex items-center">
            Freshly baked from the bakery
            <span className="ml-2">🍞</span>
         </h1>
         <p className="text-lg mb-6 tracking-wide text-justify">
            Welcome to the SLOAF Cat universe on Solana, where the members give
            their energy to create meme magic miracles on the blockchain. Born in
            antiquity, in the lands of ancient Egypt, where cats ruled as furry
            wizards and built ancient wonders like the pyramids, SLOAF Cat is here
            to bring all that magic back into this world through the blockchain.
         </p>

         {/* Icons Section */}
         <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="Telegram" className="hover:text-gray-300">
               <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <title>X</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
               <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
               </svg>
            </a>
            <a href="#" aria-label="Website" className="hover:text-gray-300">
               <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <title>CoinMarketCap</title>
                  <path d="M20.738 14.341c-.419.265-.912.298-1.286.087-.476-.27-.738-.898-.738-1.774v-2.618c0-1.264-.5-2.164-1.336-2.407-1.416-.413-2.482 1.32-2.882 1.972l-2.498 4.05v-4.95c-.028-1.14-.398-1.821-1.1-2.027-.466-.135-1.161-.081-1.837.953l-5.597 8.987A9.875 9.875 0 0 1 2.326 12c0-5.414 4.339-9.818 9.672-9.818 5.332 0 9.67 4.404 9.67 9.818.004.018.002.034.003.053.05 1.049-.29 1.883-.933 2.29zm3.08-2.34-.001-.055C23.787 5.353 18.497 0 11.997 0 5.48 0 .177 5.383.177 12c0 6.616 5.303 12 11.82 12 2.991 0 5.846-1.137 8.037-3.2.435-.41.46-1.1.057-1.541a1.064 1.064 0 0 0-1.519-.059 9.56 9.56 0 0 1-6.574 2.618c-2.856 0-5.425-1.263-7.197-3.268l5.048-8.105v3.737c0 1.794.696 2.374 1.28 2.544.584.17 1.476.054 2.413-1.468.998-1.614 2.025-3.297 3.023-4.88v2.276c0 1.678.672 3.02 1.843 3.68 1.056.597 2.384.543 3.465-.14 1.312-.828 2.018-2.354 1.944-4.193z" />
               </svg>
            </a>
            
         </div>
         </div>

         {/* Image Section */}
         <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
         <img
            src={loafcat}
            alt="Sloaf Cat"
            className="w-[400px] h-[350px"
         />
         </div>
      </section>
        
      {/* Started */}
      <section className="text-white px-6 py-12 md:px-12 lg:px-32">
         {/* Heading */}
         <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
         How It Started?
         </h2>

         {/* Comic Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Left Comic Panels */}
            <div className="">
               <img src={comic1} alt="" className='w-full' />
            </div>

         {/* Right Comic Panels */}
            <div className="">
               <img src={comic1}  className='w-full' alt="" srcset="" />
            </div>
         </div>
      </section>
      
      {/* Supply */}
      <section className=" text-white px-6 py-20 md:px-12 lg:px-32 text-center">
         {/* Title */}
         <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tokenomics</h2>
         
         {/* Address */}
         <div className="relative inline-block mb-12">
         <p 
            className="text-md lg:text-lg text-secondary cursor-pointer hover:underline"
            onClick={handleCopy}
         >
            LoafdJ3iWSAvstx3zppSGKA6sRvL9GzRtU1iRV7HkLkm
         </p>
         <span className="absolute top-0 right-0 text-xs text-gray-400 transform rotate-12">Click to copy!</span>
         </div>
         
         {/* Content Box */}
         <div className="border-[11px] border-secondary inline-block md:flex md:justify-between py-10">
               
            <div class="md:grid grid-rows-1 md:grid-flow-col gap-0 -translate-y-7 pr-6">
               <div class="row-span-3 flex justify-center items-center md:translate-x-10">
                  <p className="text-2xl lg:text-[50px] font-bold md:-rotate-90">Supply</p>
               </div>
               <div class="col-span-2">
                  <img
                  src={loafcatRight}
                  alt="Sloaf Cat"
                  className="w-[350px] h-[250px] mb-4"/> 
               </div>
               <div class="row-span-2 col-span-3">
                  <p className="text-4xl lg:text-[80px] font-bold mt-2 md:-translate-x-4 translate-y-3">100 B</p>        
               </div>
            </div>
               
         
         {/* Right Section - Token Details */}
         <div className="flex flex-col justify-center md:items-start text-left items-center md:w-2/3 md:pl-12 mt-6 md:mt-0">
            <p className="text-lg lg:text-[39px]">
               <span className="font-bold ">Taxes:</span> <span>0/0</span>
            </p>
            <p className="text-lg lg:text-[39px] mt-10">
               <span className="font-bold">Liquidity:</span> <span>Burnt</span>
            </p>
            <p className="text-lg lg:text-[39px] mt-10">
               <span className="font-bold">Mint & Freeze:</span> <span>Revoked</span>
            </p>
         </div>
         </div>
      </section>
      
      {/* Ho To Buy */}
      <section className=" text-white py-20 px-6 md:px-12 lg:px-32">
         {/* Cards Container */}
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
               
            {/* Section Title */}
            <div className="text-center mb-10 w-1/2 mx-auto flex flex-col justify-center py-6">
               <h2 className="text-6xl font-bold uppercase tracking-widest">
                  How To Buy
               </h2>
               <p className="text-yellow-400 mt-2 text-sm">Confused? Check detailed guide <a href="#" className="underline">here</a></p>
            </div>
               
            {/* Card 1: Get a Wallet */}
            <div className="border-[13px] border-secondary py-6 md:py-16 text-center flex flex-col justify-center">
               <img src="/img/buy/phantom.png" alt="Get a wallet" className="mx-auto w-[150px] h-[120px] mb-16" />
               <div className="">
                  <h3 className="text-2xl font-bold">Get a wallet</h3>
                  <p className="mt-2 text-yellow-400">Get a Solana wallet</p>
               </div>
            </div>

            {/* Card 2: Get $SOL */}
            <div className="flex flex-col justify-center border-[13px] border-secondary p-6 md:py-16 text-center">
               <img src="/img/buy/sol.png" alt="Get $SOL" className="mx-auto w-[150px] h-[120px] mb-16" />
               <h3 className="text-2xl font-bold">Get $SOL</h3>
               <p className="mt-2 text-yellow-400">Now buy some sol!</p>
            </div>

            {/* Card 3: Exchange $SOL to $LOAFCAT */}
            <div className="flex flex-col justify-center border-[13px] border-secondary p-6 md:py-16 text-center">
               <img src="/img/buy/phantom.png" alt="SOL to Loafcat" className="mx-auto w-[150px] h-[120px] mb-16" />
               <h3 className="text-2xl font-bold">$SOL to $LOAFCAT</h3>
               <p className="mt-2 text-yellow-400">Exchange your $SOL to $LOAFCAT</p>
            </div>
         </div>
      </section>
      
      {/* Buy Widget */}
      <section className=" text-white py-16 px-6">
         {/* Main Title */}
         <div className="text-center mb-8">
         <h3 className="text-4xl md:text-6xl text-secondary font-bold tracking-widest mb-16">Or</h3>
         <h2 className="text-3xl font-bold uppercase tracking-wide">Buy Directly Here</h2>
         </div>

         {/* Widget Container */}
         <div className=" border-[11px] border-secondary p-10 py-20 max-w-lg mx-auto text-center">
         {/* Top Icons (Solana + Token) */}
         <div className="flex justify-between mb-6">
            <img src="/img/widget/jupiter.svg" alt="Platform" className="w-10 h-10" />
            <div className="text-yellow-500 flex items-center space-x-2">
               <span className="text-sm">0.5%</span>
               <img src="/path-to-swap-icon.png" alt="Swap" className="w-6 h-6" />
            </div>
         </div>

         {/* Token Inputs */}
         <div className="mb-10">
            <div className="flex items-center justify-between bg-purple-700 p-4 rounded-lg">
               <img src="/img/widget/sol.svg" alt="SOL" className="w-8 h-8" />
               <input
               type="text"
               placeholder="0.00"
               className="bg-transparent text-right text-white w-full outline-none text-2xl"
               />
            </div>
            <div className="my-4 text-secondary text-3xl">^ ^</div>
            <div className="flex items-center justify-between bg-purple-700 p-4 rounded-lg">
               <img src="/img/widget/loaf.svg" alt="Loafcat" className="w-8 h-8" />
               <input
               type="text"
               placeholder="0.00"
               className="bg-transparent text-right text-white w-full outline-none text-2xl"
               />
            </div>
         </div>

         {/* Connect Wallet Button */}
         <button className=" bg-secondary text-primary font-bold py-4 px-20 rounded-lg text-xl hover:bg-yellow-500 transition duration-300">
            Connect a Wallet
         </button>
         </div>
      </section>

      {/* Dex */} 
      <section className=" text-white py-16 px-6">
         {/* Section Title */}
         <div className="text-center mb-8">
         <h2 className="text-3xl font-bold uppercase tracking-wide">
            Available also on
         </h2>
         </div>

         {/* Icons Row */}
         <div className="flex justify-center items-center space-x-8">
         {/* Replace with actual image URLs */}
         <img src="/img/dex/jupiter.svg" alt="Platform 1" className="w-12 h-12" />
         <img src="/img/dex/raydium.svg" alt="Platform 2" className="w-12 h-12" />
         <img src="/img/dex/dextools.svg" alt="Platform 3" className="w-12 h-12" />
         <img src="/img/dex/dexscreener.svg" alt="Platform 4" className="w-12 h-12" />
         </div>
      </section>
      
        
      <section className=" text-white py-12 px-6">
         <div className="container mx-auto">

         {/* Meme Slider */}
         <Slider {...settings} className="">
            {portfolio.map((meme, index) => (
               <div key={index} className="p-4">
               <div className="border-[11px] border-secondary  overflow-hidden p-6">
                  <div className="p-2 text-left mb-6">
                     <h2 className="text-xl md:text-4xl font-bold">{meme.text}</h2>
                  </div>
                  <img
                     src={meme.src}
                     alt={meme.alt}
                     className="w-full h-auto object-cover"
                  />
                  
               </div>
               </div>
            ))}
         </Slider>

         {/* Slider arrows */}
         {/* <div className="flex justify-between items-center mt-6">
            <button className="text-yellow-400 text-4xl">{'<'}</button>
            <button className="text-yellow-400 text-4xl">{'>'}</button>
         </div> */}
         </div>
      </section>
      
      {/* Partnership */}
      <section className=" text-white py-20 text-center ">
         {/* Heading */}
         <h2 className="text-4xl font-bold mb-8">Partnership</h2>

         {/* Logo Grid */}
         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-6xl mx-auto px-4">
            <div className="flex justify-center items-center">
               <img src='/img/parnership/solbank.svg' alt='' className="w-56 h-20 object-contain" />
            </div>
            
            <div className="flex justify-center items-center">
               <img src='/img/parnership/solbank.svg' alt='' className="w-56 h-20 object-contain" />
            </div>
            
            <div className="flex justify-center items-center">
               <img src='/img/parnership/solbank.svg' alt='' className="w-56 h-20 object-contain" />
            </div>
            
            <div className="flex justify-center items-center">
               <img src='/img/parnership/solbank.svg' alt='' className="w-56 h-20 object-contain" />
            </div>
            
            <div className="flex justify-center items-center">
               <img src='/img/parnership/solbank.svg' alt='' className="w-56 h-20 object-contain" />
            </div>
            
            <div className="flex justify-center items-center">
               <img src='/img/parnership/solbank.svg' alt='' className="w-56 h-20 object-contain" />
            </div>
         </div>
      </section>
      
        
   </Layout>
  )
}

export default Home