function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="grow">
        <div className="flex flex-col w-full h-full">
          <div className="basis-12 bg-slate-300">
            Toolbar
          </div>
          <div className="grow bg-slate-900">
            Workspace
          </div>
        </div>
      </div>
      <div className="hidden sm:block basis-64 bg-slate-600">
        Drafts
      </div>
    </div>
  );
}

export default App;
