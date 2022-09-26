import logoImg from "./assets/logo-nlw.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-white font-black text-6xl mt-20">
        Seu<span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span>está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUlr="/image3.png" title="Counter-Strike: Global Offensive" adsCount={1}/>
      </div> 

      <CreateAdBanner />
    </div>
  );
}

export default App;
