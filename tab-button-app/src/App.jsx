import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="w-[90%] max-w-[1000px] m-auto">
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;