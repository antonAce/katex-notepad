function App() {
  return (
    <div className="bg-slate-100/50 flex flex-row gap-2 p-2 w-screen h-screen">
      <div className="grow">
        <div className="flex flex-col gap-2 w-full h-full">
          <div className="basis-12 container">
          </div>
          <div className="grow container">
          </div>
        </div>
      </div>
      <div className="hidden sm:block basis-64 container">
      </div>
    </div>
  );
}

export default App;
