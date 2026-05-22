import { useState } from "react";

const coins = [
  "BONK",
  "FARTCOIN",
  "TROLL",
  "ASTEROID",
  "BITCOIN MINER",
  "PEPE",
  "MOG",
  "SHIBA",
  "TURBO",
  "WOJAK",
  "DOGE",
  "BABYDOGE",
  "FLOKI",
  "CHEEMS",
  "BANANAS31",
  "JEFF",
  "PIP",
  "PURR",
  "BASED",
  "SCHITZO",
];

export default function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);

  function toggleCoin(coin: string) {
    if (selected.includes(coin)) {
      setSelected(selected.filter((c) => c !== coin));

      if (captain === coin) {
        setCaptain(null);
      }

      return;
    }

    if (selected.length >= 5) return;

    setSelected([...selected, coin]);
  }

  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          MEMEMACHINE
        </h1>

        <div
          style={{
            background: "#111",
            padding: "10px 16px",
            borderRadius: "12px",
          }}
        >
          SEASON 1
        </div>
      </div>

      <div
        style={{
          background: "#111",
          borderRadius: "24px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Pick Your 5
        </h2>

        <p
          style={{
            opacity: 0.7,
            lineHeight: 1.6,
          }}
        >
          Select 5 memecoins for this week's tournament.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
          marginBottom: "30px",
        }}
      >
        {coins.map((coin) => {
          const active = selected.includes(coin);
          const isCaptain = captain === coin;

          return (
            <div
              key={coin}
              onClick={() => toggleCoin(coin)}
              style={{
                background: active ? "#f7931a" : "#111",
                borderRadius: "18px",
                padding: "18px",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      marginBottom: "6px",
                    }}
                  >
                    {coin}
                  </div>

                  <div
                    style={{
                      opacity: 0.7,
                      fontSize: "14px",
                    }}
                  >
                    {active ? "Selected" : "Tap to Select"}
                  </div>
                </div>

                {active && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCaptain(coin);
                    }}
                    style={{
                      background: isCaptain ? "gold" : "#222",
                      color: isCaptain ? "black" : "white",
                      border: "none",
                      borderRadius: "12px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    ⭐
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          background: "#111",
          borderRadius: "24px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            marginBottom: "12px",
            fontSize: "24px",
          }}
        >
          Your Lineup
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {selected.map((coin) => (
            <div
              key={coin}
              style={{
                background: captain === coin ? "gold" : "#222",
                color: captain === coin ? "black" : "white",
                padding: "10px 14px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              {captain === coin ? "⭐ " : ""}
              {coin}
            </div>
          ))}
        </div>

        <button
          style={{
            background: "#f7931a",
            border: "none",
            color: "white",
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          SAVE LINEUP
        </button>
      </div>
    </div>
  );
}