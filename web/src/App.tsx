import logoImg from "./assets/logo-nlw.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./components/Form/Input";
import { GameController } from "phosphor-react";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  console.log("Render");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-white font-black text-6xl mt-20">
        Seu
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUlr={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content
          className="fixed 
          bg-[#2A2634] py-8 px-10 text-white 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          rounded-lg w-[480px] shadow-lg shadow-black/25"
          >
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <form className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual é o game?
                </label>
                <Input
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="game">Seu nickname</label>
                <Input
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearPlaying">Joga há quantos anos?</label>
                  <Input type="text" placeholder="Tudo bem ser ZERO" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord</label>
                  <Input type="text" placeholder="Usuario#0000" />
                </div>
              </div>
               
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo" 
                      className="w-8 h-8 rounded bg-zinc-900">
                        D
                      </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <button 
                      title="Segunda-feira"
                      className="w-8 h-8 rounded bg-zinc-900">
                        S
                      </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <button 
                      title="Terça-feira"
                      className="w-8 h-8 rounded bg-zinc-900">
                        T
                      </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <button 
                      title="Quarta-feira"
                      className="w-8 h-8 rounded bg-zinc-900">
                        Q
                      </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <button 
                      title="Quinta-feira"
                      className="w-8 h-8 rounded bg-zinc-900">
                        Q
                      </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <button 
                      title="Sexta-feira" 
                      className="w-8 h-8 rounded bg-zinc-900">
                        S
                      </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <button 
                      title="Sábado"
                      className="w-8 h-8 rounded bg-zinc-900">
                        S
                      </button>
                  </div>
                </div>

                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="hoursPLaying">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="flex justify-end mt-4 gap-4">
                <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 font-semibold rounded-md">
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="
                    flex items-center gap-3 
                  bg-violet-500 hover:bg-violet-600
                    font-semibold rounded-md h-12 px-5"
                >
                  <GameController className="w-6 h-6"/>
                  Encontrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
