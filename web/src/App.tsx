import logoImg from "./assets/Logo.png";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="
        text-white 
        font-black 
        text-6xl
        mt-20
      ">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>
    </div>
  )
}

export default App
