import React from 'react'
import loafcatRight from '../../assets/img/loafcat-right.png'

function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-12 md:px-12 lg:px-24 text-center">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-8">Join us</h2>

      {/* Icon Row */}
      <div className="flex justify-center items-center mb-8 space-x-6">
        {/* Replace the src values with the paths to your actual icons */}
        <div className="">
          <img src={loafcatRight} alt="Icon 1" className="w-36 h-32" />
        </div>
            <a href="#" aria-label="Telegram" className="hover:text-gray-300">
               <svg
                  role="img"
                  width="50"
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
                  width="50"
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
                  width="50"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <title>CoinMarketCap</title>
                  <path d="M20.738 14.341c-.419.265-.912.298-1.286.087-.476-.27-.738-.898-.738-1.774v-2.618c0-1.264-.5-2.164-1.336-2.407-1.416-.413-2.482 1.32-2.882 1.972l-2.498 4.05v-4.95c-.028-1.14-.398-1.821-1.1-2.027-.466-.135-1.161-.081-1.837.953l-5.597 8.987A9.875 9.875 0 0 1 2.326 12c0-5.414 4.339-9.818 9.672-9.818 5.332 0 9.67 4.404 9.67 9.818.004.018.002.034.003.053.05 1.049-.29 1.883-.933 2.29zm3.08-2.34-.001-.055C23.787 5.353 18.497 0 11.997 0 5.48 0 .177 5.383.177 12c0 6.616 5.303 12 11.82 12 2.991 0 5.846-1.137 8.037-3.2.435-.41.46-1.1.057-1.541a1.064 1.064 0 0 0-1.519-.059 9.56 9.56 0 0 1-6.574 2.618c-2.856 0-5.425-1.263-7.197-3.268l5.048-8.105v3.737c0 1.794.696 2.374 1.28 2.544.584.17 1.476.054 2.413-1.468.998-1.614 2.025-3.297 3.023-4.88v2.276c0 1.678.672 3.02 1.843 3.68 1.056.597 2.384.543 3.465-.14 1.312-.828 2.018-2.354 1.944-4.193z" />
               </svg>
            </a>
      </div>

      {/* Disclaimer Text */}
      <div className="max-w-7xl mx-auto mb-8 text-xs text-gray-400 text-justify">
        <p>
          Disclaimer: The Loafcat token is not endorsed by or affiliated with any specific blockchain entities or companies. The information on this site is provided for informational purposes only and is not intended as a solicitation for investment. It should not be taken as investment, financial, or trading advice. Cryptocurrency investments carry market risks. Readers are strongly advised to conduct their own research and consult with a professional financial advisor before making any investment decisions or trading in cryptocurrency and securities.
        </p>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400">
        Copyright 2024 - $LOAFCAT
      </div>
    </footer>
  )
}

export default Footer