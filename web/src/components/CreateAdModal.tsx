import { Input } from "./Form/Input";
import { Check, GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
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
            <select
              id="game"
              className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
            >
              <option disabled selected>
                Selecione o game que deseja jogar
              </option>
              {games.map((game) => {
                return (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Seu nickname
            </label>
            <Input type="text" placeholder="Como te chamam dentro do game?" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearPlaying" className="font-semibold">
                Joga há quantos anos?
              </label>
              <Input type="text" placeholder="Tudo bem ser ZERO" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord" className="font-semibold">
                Qual seu Discord
              </label>
              <Input type="text" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">
                Quando costuma jogar?
              </label>

              <div className="grid grid-cols-4 gap-1">
                <button
                  title="Domingo"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  D
                </button>
                <button
                  title="Segunda-feira"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  S
                </button>
                <button
                  title="Terça-feira"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  T
                </button>
                <button
                  title="Quarta-feira"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  Q
                </button>
                <button
                  title="Quinta-feira"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  Q
                </button>
                <button
                  title="Sexta-feira"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  S
                </button>
                <button
                  title="Sábado"
                  className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500"
                >
                  S
                </button>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="hoursPLaying" className="font-semibold">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <label className="flex items-center mt-2 justify-end gap-2 text-sm">
            <Checkbox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              checked={useVoiceChannel}
              onCheckedChange={(check) => {
                if (check === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 rounded text-emerald-500 text-semibold" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="flex justify-end mt-4 gap-4">
            <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 font-semibold rounded-md">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="flex items-center gap-3 bg-violet-500 hover:bg-violet-600 font-semibold rounded-md h-12 px-5"
            >
              <GameController className="w-6 h-6" />
              Encontrar Duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
