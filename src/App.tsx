import { useEffect, useState } from "react";

const seasonCoins = [
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

const votingCoins = [
  "DOGE",
  "SHIBA INU",
  "PEPE",
  "FLOKI",
  "WOJAK",
  "MOG",
  "TURBO",
  "BABYDOGE",
  "FARTCOIN",
  "BONK",
  "WIF",
  "BODEN",
  "CHUD",
  "PIP",
  "MOTHER",
  "MYRO",
  "POPCAT",
  "SAMO",
  "HOSKY",
  "KISHU INU",
  "LADYS",
  "BEN",
  "RFD",
  "HOPPY",
  "BOB",
  "GROK",
  "MAGA",
  "KEK",
  "TOSHI",
  "BRETT",
  "DEGEN",
  "MOCHI",
  "PONKE",
  "JEFF",
  "GIGA CHAD",
  "PURR",
  "CHEEMS",
  "ELON",
  "DOGELON",
  "SMOL",
  "PAJAMAS",
  "NORMIE",
  "SNEK",
  "MICHI",
  "KAREN",
  "ASTEROID",
  "TROLL",
  "SCHITZO",
  "BANANAS31",
  "POOH",
  "HARAMBE",
];

const ecosystemLogos = [
  "CMC",
  "CG",
  "PH",
  "JUP",
  "PF",
  "HYPE",
];
const dexMap: Record<string, string> = {
  BONK:
    "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",

  PEPE:
    "0x6982508145454ce325ddbe47a25d4ec3d2311933",
};
const MFLLogo = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "10px",
    }}
  >
    <img
      src="/mfl-logo.png"
      alt="MFL"
      style={{
        width: "136px",
        objectFit: "contain",
        display: "block",
        filter:
          "drop-shadow(0 8px 22px rgba(247,147,26,0.12))",
      }}
    />

    <div
      style={{
        marginTop: "4px",
        fontSize: "11px",
        letterSpacing: "2px",
        color: "#8e8e8e",
        fontWeight: 700,
      }}
    >
      SEASON 1
    </div>
  </div>
);

const TokenLogo = ({
  coin,
  tokenData,
}: {
  coin: string;
  tokenData: any;
}) => {
  const logo = tokenData?.[coin]?.logo;

  if (logo) {
    return (
      <img
        src={logo}
        alt={coin}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "999px",
          objectFit: "cover",
          border:
            "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 6px 18px rgba(0,0,0,0.24)",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "999px",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        border:
          "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        fontWeight: 800,
        color: "#f7931a",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        flexShrink: 0,
        boxShadow:
          "0 6px 18px rgba(0,0,0,0.24)",
      }}
    >
      {coin.slice(0, 2)}
    </div>
  );
};
export default function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);

  const [showLineupPage, setShowLineupPage] =
    useState(false);

  const [showVotingPage, setShowVotingPage] =
    useState(false);

  const [votes, setVotes] = useState<string[]>([]);

  const [autoSubEnabled, setAutoSubEnabled] =
    useState(true);
const [tokenData, setTokenData] =
  useState<any>({});

useEffect(() => {
  async function fetchDexData() {
    try {
      const addresses = Object.values(
        dexMap
      ).join(",");

      const response = await fetch(
        `https://api.dexscreener.com/tokens/v1/solana/${addresses}`
      );

      const pairs = await response.json();
      console.log(pairs);
      const updated: any = {};

      pairs.forEach((pair: any) => {
        const symbol =
  pair.baseToken.symbol.toUpperCase();

        updated[symbol] = {
          logo: pair.info?.imageUrl,
        };
      });

      setTokenData(updated);
    } catch (err) {
      console.log(err);
    }
  }

  fetchDexData();
}, []);
  function toggleCoin(coin: string) {
    if (selected.includes(coin)) {
      setSelected(
        selected.filter((c) => c !== coin)
      );

      if (captain === coin) {
        setCaptain(null);
      }

      return;
    }

    if (selected.length >= 5) return;

    setSelected([...selected, coin]);
  }

  function toggleVote(coin: string) {
    if (votes.includes(coin)) {
      setVotes(votes.filter((v) => v !== coin));
      return;
    }

    if (votes.length >= 5) return;

    setVotes([...votes, coin]);
  }

  const substituteCoins = seasonCoins.filter(
    (coin) => !selected.includes(coin)
  );

  if (showVotingPage) {
    return (
      <div style={pageStyle}>
        <MFLLogo />

        <div style={centerSubtitle}>
          VOTING
        </div>

        <div
          style={{
            position: "sticky",
            top: "12px",
            zIndex: 30,
            marginBottom: "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              ...glassPanel,
              padding: "14px 18px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "13px",
              color: "#f7931a",
            }}
          >
            Which 5 memecoins would you like
            to see next season?
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button
            onClick={() =>
              setShowVotingPage(false)
            }
            style={glassButton}
          >
            ← LINE UP
          </button>

          <button
            onClick={() => {
              setShowVotingPage(false);
              setShowLineupPage(false);
            }}
            style={glassButton}
          >
            HOME
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              color: "#f7931a",
              fontSize: "11px",
              letterSpacing: "2px",
              marginBottom: "10px",
              fontWeight: 800,
            }}
          >
            LOCK YOUR VOTES IN
          </div>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "12px",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            SHAPE IT.
          </h2>

          <div
            style={{
              color: "#f7931a",
              fontWeight: 700,
            }}
          >
            Votes Used: {votes.length}/5
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {votingCoins.map((coin, index) => {
            const active = votes.includes(coin);

            return (
              <div
                key={coin}
                onClick={() => toggleVote(coin)}
                style={{
                  ...glassPanel,
                  padding: "16px",
                  cursor: "pointer",
                  border: active
                    ? "1px solid rgba(247,147,26,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <TokenLogo coin={coin} />

                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {coin}
                  </div>
                </div>

                {coin === "JEFF" ? (
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "10px",
                      lineHeight: 1.4,
                      color: "#9e9e9e",
                      maxWidth: "120px",
                    }}
                  >
                    SEASON 1 - 4 WEEKLY
                    TOURNAMENTS
                    <br />
                    THEN WE MOVE ONTO
                    SEASON 2!
                  </div>
                ) : (
                  <div
                    style={{
                      color: active
                        ? "#f7931a"
                        : "#7d7d7d",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "1px",
                    }}
                  >
                    {active
                      ? "VOTED"
                      : "VOTE"}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (showLineupPage) {
    return (
      <div style={pageStyle}>
        <MFLLogo />

        <div style={centerSubtitle}>
          YOUR 5 STAR LINE UP!
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button
            onClick={() =>
              setShowLineupPage(false)
            }
            style={glassButton}
          >
            ← HOME
          </button>

          <button
            onClick={() =>
              setShowVotingPage(true)
            }
            style={glassButton}
          >
            VOTING →
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "18px",
            marginBottom: "18px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={smallLabel}>
              AUTO SUBS
            </div>

            <div
              style={{
                color: autoSubEnabled
                  ? "#4ade80"
                  : "#7d7d7d",
                fontWeight: 700,
              }}
            >
              {autoSubEnabled
                ? "AUTO SUB ENABLED"
                : "DISABLED"}
            </div>
          </div>

          <button
            onClick={() =>
              setAutoSubEnabled(
                !autoSubEnabled
              )
            }
            style={{
              background: autoSubEnabled
                ? "rgba(74,222,128,0.12)"
                : "rgba(255,255,255,0.06)",
              border: autoSubEnabled
                ? "1px solid rgba(74,222,128,0.25)"
                : "1px solid rgba(255,255,255,0.06)",
              color: autoSubEnabled
                ? "#4ade80"
                : "#9e9e9e",
              borderRadius: "999px",
              padding: "10px 16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {autoSubEnabled
              ? "ON"
              : "OFF"}
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "20px",
            marginBottom: "28px",
            display: "flex",
            justifyContent:
              "space-between",
          }}
        >
          <div>
            <div style={smallLabel}>
              WEEKLY SCORE
            </div>

            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              148
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={smallLabel}>
              CURRENT RANK
            </div>

            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#f7931a",
              }}
            >
              #14
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: "540px",
            marginBottom: "40px",
          }}
        >
          {selected.map((coin, index) => {
            const positions = [
              { top: "0%", left: "50%" },
              { top: "30%", left: "18%" },
              { top: "30%", left: "82%" },
              { top: "62%", left: "28%" },
              { top: "62%", left: "72%" },
            ];

            const isCaptain =
              captain === coin;

            return (
              <div
                key={coin}
                style={{
                  position: "absolute",
                  top: positions[index].top,
                  left: positions[index].left,
                  transform:
                    "translate(-50%, 0)",
                  width: "148px",
                  ...glassPanel,
                  border: isCaptain
                    ? "1px solid rgba(247,147,26,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  padding: "18px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "14px",
                    display: "flex",
                    justifyContent:
                      "center",
                  }}
                >
                  <TokenLogo coin={coin} />
                </div>

                <div
                  style={{
                    fontWeight: 800,
                    marginBottom: "10px",
                    fontSize: "15px",
                  }}
                >
                  {coin}
                </div>

                <div
                  style={{
                    color: "#4ade80",
                    marginBottom: "12px",
                    fontWeight: 700,
                  }}
                >
                  +12.4%
                </div>

                <div
                  style={{
                    color: "#7d7d7d",
                    fontSize: "12px",
                  }}
                >
                  {autoSubEnabled
                    ? "Auto Subbed In — Half Time"
                    : "Captain Active"}
                </div>
              </div>
            );
          })}
        </div>

        <div style={smallLabel}>
          SUBSTITUTES
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, 1fr)",
            gap: "14px",
          }}
        >
          {substituteCoins.map((coin) => (
            <div
              key={coin}
              style={{
                ...glassPanel,
                padding: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <TokenLogo coin={coin} />

                <div
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {coin}
                </div>
              </div>

              <div
                style={{
                  color: "#4ade80",
                  marginBottom: "14px",
                  fontWeight: 700,
                }}
              >
                +6.8%
              </div>

              <button
                style={{
                  background:
                    "rgba(74,222,128,0.12)",
                  border:
                    "1px solid rgba(74,222,128,0.25)",
                  color: "#4ade80",
                  borderRadius: "999px",
                  padding: "10px 14px",
                  width: "100%",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                sub in
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <MFLLogo />

      <div style={centerSubtitle}>
        <div>COMPETE DAILY</div>

        <div
          style={{
            color: "#f7931a",
            marginTop: "4px",
          }}
        >
          GRAND FINALS ON WEEKENDS!
        </div>
      </div>

      <div
        style={{
          position: "sticky",
          top: "12px",
          zIndex: 30,
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            ...glassPanel,
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "13px 18px",
            borderRadius: "999px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#f7931a",
              boxShadow:
                "0 0 18px rgba(247,147,26,0.45)",
            }}
          />

          <div
            style={{
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            PICK YOUR TEAM
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "18px",
          flexWrap: "wrap",
        }}
      >
        {ecosystemLogos.map((logo) => (
          <div
            key={logo}
            style={{
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.06)",
              borderRadius: "999px",
              padding: "8px 12px",
              fontSize: "11px",
              color: "#9e9e9e",
              fontWeight: 700,
            }}
          >
            {logo}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2, 1fr)",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        {seasonCoins.map((coin) => {
          const active =
            selected.includes(coin);

          return (
            <div
              key={coin}
              onClick={() =>
                toggleCoin(coin)
              }
              style={{
                ...glassPanel,
                padding: "20px",
                cursor: "pointer",
                border: active
                  ? "1px solid rgba(247,147,26,0.4)"
                  : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <TokenLogo coin={coin} />
              </div>

              <div
                style={{
                  fontWeight: 800,
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                {coin}
              </div>

              <div
                style={{
                  color: "#4ade80",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                +12.4%
              </div>

              <div
                style={{
                  color: "#7d7d7d",
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                MCAP $45M
              </div>

              <button
                style={{
                  width: "100%",
                  background: active
                    ? "rgba(247,147,26,0.12)"
                    : "rgba(74,222,128,0.12)",
                  border: active
                    ? "1px solid rgba(247,147,26,0.3)"
                    : "1px solid rgba(74,222,128,0.25)",
                  color: active
                    ? "#f7931a"
                    : "#4ade80",
                  padding: "12px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {active
                  ? "picked"
                  : "pick me"}
              </button>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "grid",
          gap: "14px",
        }}
      >
        <button
          disabled={
            selected.length !== 5
          }
          onClick={() => {
            if (
              !captain &&
              selected.length > 0
            ) {
              setCaptain(selected[0]);
            }

            setShowLineupPage(true);
          }}
          style={{
            ...glassButton,
            opacity:
              selected.length === 5
                ? 1
                : 0.5,
          }}
        >
          ★ STAR LINE UP
        </button>

        <button
          onClick={() =>
            setShowVotingPage(true)
          }
          style={glassButton}
        >
          🔒 LOCK YOUR VOTES IN FOR NEXT
          SEASON
        </button>
      </div>
    </div>
  );
}

const centerSubtitle: React.CSSProperties = {
  marginBottom: "18px",
  textAlign: "center",
  color: "#b5b5b5",
  lineHeight: 1.3,
  fontWeight: 700,
  letterSpacing: "1px",
};

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(247,147,26,0.08) 0%, #111315 35%, #090909 100%)",
  color: "#f5f5f5",
  padding: "24px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, sans-serif",
};

const smallLabel: React.CSSProperties = {
  fontSize: "12px",
  color: "#8e8e8e",
  marginBottom: "6px",
  letterSpacing: "1px",
};

const glassPanel: React.CSSProperties = {
  background: "rgba(255,255,255,0.045)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow:
    "0 10px 40px rgba(0,0,0,0.28)",
};

const glassButton: React.CSSProperties = {
  background: "rgba(255,255,255,0.045)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.06)",
  color: "#f5f5f5",
  padding: "18px",
  borderRadius: "24px",
  fontWeight: 700,
  cursor: "pointer",
  width: "100%",
  fontSize: "15px",
};