

import React, { useState } from "react";

const LudoLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 p-4 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-32 h-32 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <svg className="w-24 h-24 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-md z-10">
        <div className="bg-white border-2 border-purple-200 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <svg className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h1 className="text-3xl font-bold text-purple-700">Ludo King</h1>
            <p className="text-lg text-gray-600">Sign in to play with friends</p>
          </div>

          <div className="flex justify-center p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Ludo Game Board"
              className="rounded-lg mb-4 w-[150px] h-[150px]"
            />
          </div>

          <div className="px-6 pb-6">
            <button
              className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center justify-center gap-2 transition duration-200"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full" />
              ) : (
                <>
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Get Started
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LudoLogin;

