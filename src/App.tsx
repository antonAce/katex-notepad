import React from 'react';
import Button from './components/Button';

function App() {
  const textAreaStyles: React.CSSProperties = {
    resize: "none"
  };

  return (
    <div className="flex flex-row w-screen h-screen bg-base-100">
      <div className="basis-48 min-w-48 bg-neutral border-r border-neutral-focus">
        <div className="flex flex-col gap-default w-full h-full">
          <div className="basis-10 px-default bg-neutral-focus">
            <div className="flex items-center gap-default w-full h-full">
              <span className="truncate text-base-100 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className="basis-30 p-default">
            <div className="flex flex-row gap-default">
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Button>
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                  <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
              </Button>
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </Button>
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </Button>
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex-1 px-default">
            <div className="bg-neutral-focus"></div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <textarea className="bg-transparent px-4 py-2 text-sm leading-loose w-full h-full" style={textAreaStyles}
          placeholder="$ J(g, y) = -\frac{1}{m} \sum_{j=1}^{m} (y \log(g) + (1 - y) \log(1 - g) ) $"></textarea>
      </div>
    </div>
  );
}

export default App;
