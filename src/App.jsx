import React, { useState, useEffect } from "react";
import { pb } from "./services/pocketbase";
import Counter from "./components/Counter";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import FormPage from "./pages/FormPage";
import Description from "./components/Description";

function App() {
  const [gifts, setGifts] = useState([]);
  const [boysCount, setBoysCount] = useState(0);
  const [girlsCount, setGirlsCount] = useState(0);

  useEffect(() => {
    loadGifts();
  }, []);

  const loadGifts = async () => {
    try {
      const records = await pb.collection("gifts").getFullList();
      setGifts(records);

      // Actualizar contadores
      const boys = records.filter((gift) => gift.Genero === "Masculino").length;
      const girls = records.filter((gift) => gift.Genero === "Femenino").length;

      setBoysCount(boys);
      setGirlsCount(girls);
    } catch (error) {
      console.error("Error loading gifts:", error);
    }
  };

  const handleGiftSubmit = async (giftData) => {
    try {
      // Validar límites
      if (giftData.Generoo === "Masculino" && boysCount >= 40) {
        alert("Ya se han registrado 40 regalos para niños");
        return;
      }
      if (giftData.Generoo === "Femenino" && girlsCount >= 40) {
        alert("Ya se han registrado 40 regalos para niñas");
        return;
      }

      // Crear regalo
      await pb.collection("gifts").create(giftData);

      // Recargar datos
      loadGifts();
    } catch (error) {
      console.error("Error creating gift:", error);
    }
  };

  return (
    <BrowserRouter>
      <Analytics />
      <div className="App">
        <nav className="mb-4">
          <Link
            to="/"
            className="mr-4 text-segundo-color hover:text-counter-primary"
          >
            Inicio
          </Link>
          <Link
            to="/registro"
            className="text-segundo-color hover:text-counter-primary"
          >
            Registrar Regalo
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="font-oswald text-3xl">
                  Campaña de Regalos Solidarios
                </h1>
                <Description />
                <Counter
                  boysCount={boysCount}
                  girlsCount={girlsCount}
                  gifts={gifts}
                />
                {/* <GiftList gifts={gifts} /> */}
              </>
            }
          />
          <Route
            path="/registro"
            element={<FormPage onGiftSubmit={handleGiftSubmit} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
