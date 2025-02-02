import Join from "./components/Join";
import Subscription from "./components/Subscription";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <main className="grid justify-center items-center h-dvh">
      <div className=" bg-white m-5 rounded-2xl md:grid md:grid-cols-2 md:max-w-3xl">
        <Join />
        <Subscription />
        <WhyUs />
      </div>
    </main>
  );
}

export default App;
