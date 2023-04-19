import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

export default function App() {
  const [selectedZapato, setSelectedZapato] = useState(null);

  const handleSelectedZapato = (zapato) => {
    setSelectedZapato(zapato);
  };

  const handleCardClose = () => {
    setSelectedZapato(null);
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <Header />
        <main className="h-[90vh] flex gap-8 p-8 m-4">
          <div className="flex-1 h-full ">
            {selectedZapato && (
              <Card.DetailedCard zapato={selectedZapato} onClose={handleCardClose} />
            )}
            <div className="bg-[#e7e6e2] text-gray-900 w-full p-0.5 pl-4">
              <h2 className="text-lg font-semibold">COMPLETA TU LOOK</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              <Card type="look" onCardClick={handleSelectedZapato} />
            </div>
            <div className="bg-white text-gray-600 w-full p-4 pl-4 mt-10">
              <h2 className="text-lg font-semibold">PRODUCTOS RECOMENDADOS</h2>
              <hr className="mt-2 mb-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              <Card type="recomendacion" onCardClick={handleSelectedZapato} />
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}