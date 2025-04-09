"use client"

import type React from "react"
import { useState, useEffect } from "react"

const LudoLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800 overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl text-purple-700">Ludo King</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#how-to-play" className="text-gray-700 hover:text-purple-600 transition-colors">
                How to Play
              </a>
              <a href="#leaderboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Leaderboard
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition-colors">
                Play Now
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                Features
              </a>
              <a
                href="#how-to-play"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                How to Play
              </a>
              <a
                href="#leaderboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                Leaderboard
              </a>
              <button className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition-colors">
                Play Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div className="absolute inset-0 bg-purple-500 opacity-10"></div>
        </div>
        <div className="container relative mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-purple-800 mb-6">
                  The Ultimate <span className="text-yellow-500">Ludo</span> Experience
                </h1>
                <p className="mt-4 text-lg text-gray-600 mb-8">
                  Play the classic board game with friends and family in real-time. Compete globally, track your scores,
                  and become the Ludo King!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Play Now
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-purple-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Ludo Game Board"
                  className="max-w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        src="https://via.placeholder.com/50"
                        alt="User"
                      />
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        src="https://via.placeholder.com/50"
                        alt="User"
                      />
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        src="https://via.placeholder.com/50"
                        alt="User"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">1,000+ players online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated dice */}
        <div className="absolute left-10 top-1/4 animate-bounce delay-100">
          <svg className="h-12 w-12 text-red-500 opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
        </div>
        <div className="absolute right-10 bottom-1/4 animate-bounce delay-300">
          <svg className="h-10 w-10 text-green-500 opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-purple-700 mb-4">Game Features</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Experience the classic board game like never before with these amazing features
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-10">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-red-400 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold mb-2">Real-Time Play</h6>
                <p className="text-gray-600 text-center">
                  Play in real-time with friends and family from anywhere in the world. No waiting, no delays!
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-10">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blue-400 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold mb-2">Multiplayer</h6>
                <p className="text-gray-600 text-center">
                  Play with up to 4 players simultaneously. Invite friends or match with random players globally.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-10">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-green-400 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold mb-2">Scoreboard</h6>
                <p className="text-gray-600 text-center">
                  Track your progress with detailed statistics. Climb the global leaderboard and become the champion.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-10">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-yellow-400 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h6 className="text-xl font-semibold mb-2">Customization</h6>
                <p className="text-gray-600 text-center">
                  Customize game rules, board themes, and tokens. Make the game truly yours with endless options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-purple-700 mb-4">How to Play</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Simple rules, endless fun. Learn how to play in minutes!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10 md:mb-0">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    1
                  </div>
                  <h5 className="text-xl font-semibold">Roll the Dice</h5>
                </div>
                <p className="text-gray-600 mb-6">
                  Take turns rolling the dice. You need a 6 to move a token out of the home circle.
                </p>

                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    2
                  </div>
                  <h5 className="text-xl font-semibold">Move Your Tokens</h5>
                </div>
                <p className="text-gray-600 mb-6">
                  Move your tokens clockwise around the board according to the number you roll.
                </p>

                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    3
                  </div>
                  <h5 className="text-xl font-semibold">Capture Opponents</h5>
                </div>
                <p className="text-gray-600 mb-6">Land on an opponent's token to send it back to their home circle.</p>

                <div className="flex items-center">
                  <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    4
                  </div>
                  <h5 className="text-xl font-semibold">Win the Game</h5>
                </div>
                <p className="text-gray-600">Be the first to get all four of your tokens to the finish line to win!</p>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="relative">
                <img
                  alt="Ludo Game in Action"
                  src="https://via.placeholder.com/600x400"
                  className="max-w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-lg font-bold">Watch Tutorial</p>
                  <div className="flex items-center mt-2">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>3 min video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-purple-700 mb-4">Global Leaderboard</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                See who's dominating the Ludo world. Will you be next?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 mx-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-semibold text-left text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left text-gray-500 uppercase tracking-wider">
                          Wins
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left text-gray-500 uppercase tracking-wider">
                          Games
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left text-gray-500 uppercase tracking-wider">
                          Win Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-yellow-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-yellow-400 text-white rounded-full">
                              1
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/50" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">LudoMaster99</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">248</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">312</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">79.5%</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full">
                              2
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/50" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">DiceRoller42</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">201</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">267</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">75.3%</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full">
                              3
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/50" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">TokenQueen</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">187</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">254</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">73.6%</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-6 rounded-full transition-colors">
                  View Full Leaderboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-purple-700 mb-4">What Players Say</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Don't just take our word for it. See what our community has to say.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 mx-auto">
              <div className="relative">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg p-8">
                  <div
                    className={`transition-opacity duration-500 ${activeTestimonial === 0 ? "opacity-100" : "opacity-0 absolute"}`}
                  >
                    <div className="flex items-center mb-6">
                      <img className="h-12 w-12 rounded-full mr-4" src="https://via.placeholder.com/50" alt="User" />
                      <div>
                        <h5 className="text-lg font-semibold">Sarah Johnson</h5>
                        <p className="text-sm text-gray-600">Ludo Enthusiast</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg italic">
                      "This is the best Ludo game I've ever played! The real-time gameplay is smooth, and I love
                      competing with players from around the world. The scoreboard feature keeps me motivated to improve
                      my ranking."
                    </p>
                  </div>

                  <div
                    className={`transition-opacity duration-500 ${activeTestimonial === 1 ? "opacity-100" : "opacity-0 absolute"}`}
                  >
                    <div className="flex items-center mb-6">
                      <img className="h-12 w-12 rounded-full mr-4" src="https://via.placeholder.com/50" alt="User" />
                      <div>
                        <h5 className="text-lg font-semibold">Michael Chen</h5>
                        <p className="text-sm text-gray-600">Casual Gamer</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg italic">
                      "I play with my family across different cities, and it feels like we're all sitting at the same
                      table. The customization options are fantastic - we created our own house rules and even
                      customized our tokens!"
                    </p>
                  </div>

                  <div
                    className={`transition-opacity duration-500 ${activeTestimonial === 2 ? "opacity-100" : "opacity-0 absolute"}`}
                  >
                    <div className="flex items-center mb-6">
                      <img className="h-12 w-12 rounded-full mr-4" src="https://via.placeholder.com/50" alt="User" />
                      <div>
                        <h5 className="text-lg font-semibold">Priya Sharma</h5>
                        <p className="text-sm text-gray-600">Competitive Player</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg italic">
                      "As someone who takes Ludo seriously, I appreciate the detailed statistics and leaderboard. The
                      matchmaking system is fair, and I've made friends with players who match my skill level. Highly
                      recommended!"
                    </p>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setActiveTestimonial(0)}
                      className={`h-3 w-3 mx-1 rounded-full ${activeTestimonial === 0 ? "bg-purple-600" : "bg-gray-300"}`}
                    />
                    <button
                      onClick={() => setActiveTestimonial(1)}
                      className={`h-3 w-3 mx-1 rounded-full ${activeTestimonial === 1 ? "bg-purple-600" : "bg-gray-300"}`}
                    />
                    <button
                      onClick={() => setActiveTestimonial(2)}
                      className={`h-3 w-3 mx-1 rounded-full ${activeTestimonial === 2 ? "bg-purple-600" : "bg-gray-300"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Play?</h2>
              <p className="text-lg opacity-80 mb-8">
                Join thousands of players worldwide and experience the ultimate Ludo game. Play now for free!
              </p>
              <button className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mx-2">
                Play Now
              </button>
              <button className="bg-transparent hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full border-2 border-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mx-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl text-purple-700">Ludo King</span>
              </div>
              <p className="text-gray-600 mb-4">The ultimate real-time Ludo experience for players around the world.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/12 px-4 mb-8 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Links</h5>
              <ul className="list-none space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-600 hover:text-purple-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-to-play" className="text-gray-600 hover:text-purple-600">
                    How to Play
                  </a>
                </li>
                <li>
                  <a href="#leaderboard" className="text-gray-600 hover:text-purple-600">
                    Leaderboard
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/12 px-4 mb-8 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul className="list-none space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-4/12 px-4">
              <h5 className="text-lg font-semibold mb-4">Stay Updated</h5>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none border border-gray-300"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ludo King. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LudoLandingPage

