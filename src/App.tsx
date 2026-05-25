import { useEffect, useState } from "react";

const seasonCoins = [
  "BONK",
  "FARTCOIN",
  "TROLL",
  "ASTEROID BAGS",
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
  "SHIBA",
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
  "ASTEROID ETH",
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
  "HYPERLIQUID",
];

const dexMap: Record<
  string,
  {
    chain: string;
    address: string;
  }
> = {
  BONK: {
    chain: "solana",
    address:
      "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
  },

  FARTCOIN: {
    chain: "solana",
    address:
      "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
  },
PURR: {
  chain: "hyperliquid",
  address:
    "0x9b498C3c8A0b8CD8BA1D9851d40D186F1872b44E",
},

BANANAS31: {
  chain: "ethereum",
  address:
    "0x41057f4161C37E00E9a6BD4919e9E819008C50D4",
},

BUTTCOIN: {
  chain: "solana",
  address:
    "Cm6fNnMk7NfzStP9CZpsQA2v3jjzbcYGAxdJySmHpump",
},

CHEEMS: {
  chain: "bsc",
  address:
    "0x0DF0587216a4a1bB7d5082fdc491d93d2dD4B413",
},

PIPPIN: {
  chain: "solana",
  address:
    "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump",
},

BABYDOGE: {
  chain: "bsc",
  address:
    "0xc748673057861a797275CD8A068AbB95A902e8de",
},

TURBO: {
  chain: "solana",
  address:
    "HHTY4UGjhuX4pEaAkXZRTNrNMCAKkoYZYsvGMpqkANKJ",
},

WOJAK: {
  chain: "solana",
  address:
    "8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump",
},

NEET: {
  chain: "solana",
  address:
    "Ce2gx9KGXJ6C9Mp5b5x1sn9Mg87JwEbrQby4Zqo3pump",
},

MOG: {
  chain: "ethereum",
  address:
    "0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a",
},

GIGACHAD: {
  chain: "solana",
  address:
    "63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9",
},

"ASTEROID BAGS": {
  chain: "solana",
  address:
    "4UeLCRqARmfb6e6KQijtiktqqXUxbfk6jZng7DhuBAGS",
},

NPC: {
  chain: "ethereum",
  address:
    "0x8eD97a637A790Be1feff5e888d43629dc05408F6",
},

SHIBA: {
  chain: "base",
  address:
    "0xFCa95aeb5bF44aE355806A5ad14659c940dC6BF7",
},

BABY_TROLL: {
  chain: "solana",
  address:
    "6qdzMx4c9rL2X3Ns3SwZ8uEo4zReDPjdXpAEmpo7pump",
},
  TROLL: {
    chain: "solana",
    address:
      "5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2",
  },

  PEPE: {
    chain: "ethereum",
    address:
      "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  },

  FLOKI: {
    chain: "bsc",
    address:
      "0xfb5b838b6cfeedc2873ab27866079ac55363d37e",
  },

  

  BRETT: {
    chain: "base",
    address:
      "0x532f27101965dd16442e59d40670faf5ebb142e4",
  },

  

  "BITCOIN MINER": {
    chain: "solana",
    address:
      "CG6outMCznjG7M9W6vf2Zyi3zH99wMtr54Uo3VFVpump",
  },
  WIF: {
  chain: "solana",
  address:
    "EKpQGSJtjMFqKZ5ZKQanSqYXRcF6mQ5Vd9wF5VQpump",
},

POPCAT: {
  chain: "solana",
  address:
    "7GCihgDB8fe6KNkQkLKJ85rN3m2eM8Wo4F8w6uWQpump",
},

MYRO: {
  chain: "solana",
  address:
    "HhJpBhA6A6f6D5Kjz1nVbWcv16Mo3ayD9n3zrWeNpump",
},

DEGEN: {
  chain: "base",
  address:
    "0x4ed4e862860beff2cfee5e9717e31ed4fcbf1720",
},

TOSHI: {
  chain: "base",
  address:
    "0xac1bd24c43551c2c4c5f53b0f5d6c9d3d7e4f123",
},
};

const manualLogos: Record<string, string> = {
  "BITCOIN MINER": "/bitcoinminer.png",
  DOGE: "/dogecoin.png",
  GROK: "/grok.png",
  HOSKY: "/hosky.png",
  JEFF: "/jeff.png",
  "KISHU INU": "/kishuinu.png",
  LADYS: "/ladys.png",
  PIP: "/pip.png",
  SNEK: "/snek.png",
  TURBO: "/turbo.png",
};

const MFLLogo = () => (
  <div
    style={{
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
  const logo =
  tokenData?.[coin]?.logo ||
  manualLogos?.[coin];
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
      }}
    >
      {coin.slice(0, 2)}
    </div>
  );
};

export default function App() {
  const [selected, setSelected] =
    useState<string[]>([]);

  const [captain, setCaptain] =
    useState<string | null>(null);

  const [showLineupPage, setShowLineupPage] =
    useState(false);

  const [showVotingPage, setShowVotingPage] =
    useState(false);

  const [votes, setVotes] =
    useState<string[]>([]);

  const [autoSubEnabled, setAutoSubEnabled] =
    useState(true);

  const [tokenData, setTokenData] =
    useState<any>({});

  useEffect(() => {
    async function fetchDexData() {
      try {
        const chains = [
          "solana",
          "ethereum",
          "bsc",
          "base",
          "hyperliquid",
        ];

        const updated: any = {};

        await Promise.all(
          chains.map(async (chain) => {
            const addresses = Object.values(
              dexMap
            )
              .filter(
                (token) =>
                  token.chain === chain
              )
              .map(
                (token) => token.address
              )
              .join(",");

            if (!addresses) return;

            try {
              const response = await fetch(
                `https://api.dexscreener.com/tokens/v1/${chain}/${addresses}`
              );

              const pairs =
                await response.json();

              pairs.forEach((pair: any) => {
                const address =
                  pair.baseToken?.address
                    ?.toLowerCase()
                    ?.trim();

                const matchingEntry =
                  Object.entries(
                    dexMap
                  ).find(
                    ([_, token]) =>
                      token.address.toLowerCase() ===
                      address
                  );

                if (matchingEntry) {
                  const [symbol] =
                    matchingEntry;

                  updated[symbol] = {
                    logo:
                      pair.info?.imageUrl ||
                      manualLogos[symbol],

                    change24h: Number(
                      pair.priceChange?.h24 || 0
                    ),
                  };
                }
              });
            } catch (err) {
              console.log(chain, err);
            }
          })
        );

        Object.entries(manualLogos).forEach(
          ([symbol, logo]) => {
            if (!updated[symbol]) {
              updated[symbol] = {
                logo,
                change24h: 0,
              };
            }
          }
        );

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
      setVotes(
        votes.filter((v) => v !== coin)
      );
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
    ← BACK
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
            display: "grid",
            gap: "12px",
          }}
        >
          {votingCoins.map((coin) => {
            const active =
              votes.includes(coin);

            return (
              <div
                key={coin}
                onClick={() =>
                  toggleVote(coin)
                }
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
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <TokenLogo
                    coin={coin}
                    tokenData={tokenData}
                  />

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
                    color: active
                      ? "#f7931a"
                      : "#7d7d7d",
                    fontWeight: 700,
                  }}
                >
                  {active
                    ? "VOTED"
                    : "VOTE"}
                </div>
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
          YOUR 5 STAR LINE UP
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
              background:
                autoSubEnabled
                  ? "rgba(74,222,128,0.12)"
                  : "rgba(255,255,255,0.06)",
              borderRadius: "999px",
              padding: "10px 16px",
              color: autoSubEnabled
                ? "#4ade80"
                : "#9e9e9e",
              border: "none",
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
            position: "relative",
            height: "540px",
            marginBottom: "40px",
          }}
        >
          {selected.map((coin, index) => {
            const positions = [
              {
                top: "0%",
                left: "50%",
              },
              {
                top: "30%",
                left: "18%",
              },
              {
                top: "30%",
                left: "82%",
              },
              {
                top: "62%",
                left: "28%",
              },
              {
                top: "62%",
                left: "72%",
              },
            ];

            const isCaptain =
              captain === coin;

            return (
              <div
                key={coin}
                onClick={() =>
                  setCaptain(coin)
                }
                style={{
                  position: "absolute",
                  top: positions[index].top,
                  left:
                    positions[index].left,
                  transform:
                    "translate(-50%, 0)",
                  width: "148px",
                  ...glassPanel,
                  border: isCaptain
                    ? "1px solid rgba(247,147,26,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  padding: "18px",
                  textAlign: "center",
                  cursor: "pointer",
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
                  <TokenLogo
                    coin={coin}
                    tokenData={tokenData}
                  />
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
                    color:
                      (tokenData?.[coin]
                        ?.change24h || 0) >=
                      0
                        ? "#4ade80"
                        : "#ef4444",

                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {(tokenData?.[coin]
                    ?.change24h || 0) > 0
                    ? "+"
                    : ""}
                  {tokenData?.[
                    coin
                  ]?.change24h?.toFixed(
                    1
                  ) || "0.0"}
                  %
                </div>

                <div
                  style={{
                    color: isCaptain
                      ? "#f7931a"
                      : "#7d7d7d",
                    fontSize: "12px",
                  }}
                >
                  {isCaptain
                    ? "TEAM CAPTAIN"
                    : "TAP TO CAPTAIN"}
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
                  gap: "12px",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <TokenLogo
                  coin={coin}
                  tokenData={tokenData}
                />

                <div
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {coin}
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  background:
                    "rgba(74,222,128,0.12)",
                  border:
                    "1px solid rgba(74,222,128,0.25)",
                  color: "#4ade80",
                  padding: "10px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                SUB IN
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
          GRAND FINALS ON WEEKENDS
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
                <TokenLogo
                  coin={coin}
                  tokenData={tokenData}
                />
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
                  color:
                    (tokenData?.[coin]
                      ?.change24h || 0) >=
                    0
                      ? "#4ade80"
                      : "#ef4444",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {(tokenData?.[coin]
                  ?.change24h || 0) > 0
                  ? "+"
                  : ""}
                {tokenData?.[
                  coin
                ]?.change24h?.toFixed(1) ||
                  "0.0"}
                %
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
                  ? "PICKED"
                  : "PICK ME"}
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

const centerSubtitle: React.CSSProperties =
  {
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

const smallLabel: React.CSSProperties =
  {
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
  border:
    "1px solid rgba(255,255,255,0.06)",
  boxShadow:
    "0 10px 40px rgba(0,0,0,0.28)",
};

const glassButton: React.CSSProperties =
  {
    background:
      "rgba(255,255,255,0.045)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter:
      "blur(20px)",
    border:
      "1px solid rgba(255,255,255,0.06)",
    color: "#f5f5f5",
    padding: "18px",
    borderRadius: "24px",
    fontWeight: 700,
    cursor: "pointer",
    width: "100%",
    fontSize: "15px",
  };