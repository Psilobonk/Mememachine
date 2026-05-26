import { useEffect, useState } from "react";

const seasonCoins = [
  "BONK",
  "FARTCOIN",
  "TROLL",
  "ASTEROID ETH",
  "BITCOIN MINER",
  "GIGACHAD",
  "MOG",
  "NEET",
  "TURBO",
  "WOJAK",
  "PIPPIN",
  "BABYDOGE",
  "FLOKI",
  "CHEEMS",
  "BANANAS31",
  "BUTTCOIN",
  "AURA",
  "PURR",
  "BRETT",
  "PEPE",
];

const votingCoins = [
  "NPC",
  "SHIB",
  "PEPE",
  "FLOKI",
  "WOJAK",
  "MOG",
  "TURBO",
  "BABY_TROLL",
  "FARTCOIN",
  "BONK",
  "WIF",
  "BODEN",
  "CHUD",
  "PIP",
  "MOTHER",
  "MYRO",
  "POPCAT",
  "SAMOYEDCOIN",
  "HOSKY",
  "KISHU_INU",
  "LADYS",
  "ASTEROID BAGS",
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
  "GIGACHAD",
  "PURR",
  "CHEEMS",
  "ELON",
  "CATCOIN",
  "SMOLE",
  "PAJAMAS",
  "NORMIE",
  "SNEK",
  "MICHI",
  "PENGU",
  "ASTEROID ETH",
  "TROLL",
  "TRUMP",
  "DOGECOIN",
  "POOH",
  "HARAMBE",
];

const ecosystemLogos = ["CMC", "CG", "PH", "JUP", "PF", "HYPE"];

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

  PEPE: {
  chain: "ethereum",
  address:
    "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
},

  TROLL: {
  chain: "solana",
  address:
    "5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2",
},

  FLOKI: {
  chain: "bsc",
  address:
    "0xfb5b838b6cfeedc2873ab27866079ac55363d37e",
},

    FARTCOIN: {
    chain: "solana",
    address:
      "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
  },

  "BITCOIN MINER": {
    chain: "solana",
    address:
      "CG6outMCznjG7M9W6vf2Zyi3zH99wMtr54Uo3VFVpump",
  },

  PURR: {
    chain: "hype",
    address:
      "0x9b498C3c8A0b8CD8BA1D9851d40D186F1872b44E",
  },

    BANANAS31: {
    chain: "bsc",
    address:
      "0x3d4f0513E8a29669B960f9dBcA61861548A9A760",
  },
  AURA: {
    chain: "solana",
    address:
      "DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2",
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
"ASTEROID ETH": {
  chain: "ethereum",
  address:
    "0xf280B16EF293D8e534e370794ef26bF312694126",
},
  NPC: {
    chain: "ethereum",
    address:
      "0x8eD97a637A790Be1feff5e888d43629dc05408F6",
  },

  SHIB: {
    chain: "base",
    address:
      "0xFCa95aeb5bF44aE355806A5ad14659c940dC6BF7",
  },

  BABY_TROLL: {
    chain: "solana",
    address:
      "6qdzMx4c9rL2X3Ns3SwZ8uEo4zReDPjdXpAEmpo7pump",
  },

  WIF: {
    chain: "solana",
    address:
      "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
  },

  BODEN: {
    chain: "solana",
    address:
      "3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o",
  },

  CHUD: {
    chain: "solana",
    address:
      "6yjNqPzTSanBWSa6dxVEgTjePXBrZ2FoHLDQwYwEsyM6",
  },

  PIP: {
    chain: "hype",
    address:
      "0x1bEe6762F0B522c606DC2Ffb106C0BB391b2E309",
  },

  MOTHER: {
    chain: "solana",
    address:
      "3S8qX1MsMqRbiwKg2cQyx7nis1oHMgaCuc9c4VfvVdPN",
  },

  MYRO: {
    chain: "solana",
    address:
      "HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4",
  },

  POPCAT: {
    chain: "solana",
    address:
      "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
  },

  SAMOYEDCOIN: {
    chain: "solana",
    address:
      "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  },

  HOSKY: {
    chain: "ada",
    address:
      "a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59",
  },

  KISHU_INU: {
    chain: "ethereum",
    address:
      "0xA2b4C0Af19cC16a6CfAcCe81F192B024d625817D",
  },

  LADYS: {
    chain: "ethereum",
    address:
      "0x12970E6868f88f6557B76120662c1B3E50A646bf",
  },

  RFD: {
    chain: "ethereum",
    address:
      "0x955d5c14C8D4944dA1Ea7836bd44D54a8eC35Ba1",
  },

  HOPPY: {
    chain: "ethereum",
    address:
      "0x6E79B51959CF968d87826592f46f819F92466615",
  },

  BOB: {
    chain: "bsc",
    address:
      "0x51363F073b1E4920fdA7AA9E9d84BA97EdE1560e",
  },

  GROK: {
    chain: "solana",
    address:
      "7Sdx8mxze5DRhB15dyDR24Zo6Nie9SsvkKGzWYdkHU3K",
  },

  MAGA: {
    chain: "solana",
    address:
      "Hon2rHAiqkcDtUzL5gA2vjXPr7T1MPCK2UT2AHKCpump",
  },

  KEK: {
    chain: "solana",
    address:
      "FThrNpdic79XRV6i9aCWQ2UTp7oRQuCXAgUWtZR2cs42",
  },

  TOSHI: {
    chain: "base",
    address:
      "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
  },

  BRETT: {
    chain: "base",
    address:
      "0x532f27101965dd16442E59d40670FaF5eBB142E4",
  },

  DEGEN: {
    chain: "base",
    address:
      "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
  },

  MOCHI: {
    chain: "base",
    address:
      "0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50",
  },

  PONKE: {
    chain: "solana",
    address:
      "5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC",
  },

  JEFF: {
    chain: "hype",
    address:
      "0x52e444545fbE9E5972a7A371299522f7871aec1F",
  },

  ELON: {
    chain: "ethereum",
    address:
      "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
  },

  CATCOIN: {
    chain: "bsc",
    address:
      "0x59F4F336Bf3D0C49dBfbA4A74eBD2a6aCE40539A",
  },

  SMOLE: {
    chain: "solana",
    address:
      "9Ttyez3xiruyj6cqaR495hbBkJU6SUWdV6AmQ9MvbyyS",
  },

  PAJAMAS: {
    chain: "solana",
    address:
      "FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw",
  },

  NORMIE: {
    chain: "base",
    address:
      "0x47b464eDB8Dc9BC67b5CD4C9310BB87b773845bD",
  },

  SNEK: {
    chain: "ada",
    address:
      "279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b",
  },

  MICHI: {
    chain: "solana",
    address:
      "AywAYdNJnSLSXwKWYxDciPjqGRnwp4iZdQptuuQTpump",
  },

  PENGU: {
    chain: "solana",
    address:
      "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
  },

  TRUMP: {
    chain: "solana",
    address:
      "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
  },

  POOH: {
    chain: "ethereum",
    address:
      "0xB69753c06BB5c366BE51E73bFc0cC2e3DC07E371",
  },

  HARAMBE: {
    chain: "solana",
    address:
      "Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP",
  },
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
        filter: "drop-shadow(0 8px 22px rgba(247,147,26,0.12))",
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
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.24)",
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
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        fontWeight: 800,
        color: "#f7931a",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        flexShrink: 0,
        boxShadow: "0 6px 18px rgba(0,0,0,0.24)",
      }}
    >
      {coin.slice(0, 2)}
    </div>
  );
};

export default function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);

  const [showLineupPage, setShowLineupPage] = useState(false);

  const [showVotingPage, setShowVotingPage] = useState(false);

  const [votes, setVotes] = useState<string[]>([]);

  const [autoSubEnabled, setAutoSubEnabled] = useState(true);
  const [tokenData, setTokenData] = useState<any>({});

  useEffect(() => {
  async function fetchDexData() {
    try {
      const solanaAddresses = Object.values(dexMap)
        .filter((token) => token.chain === "solana")
        .map((token) => token.address)
        .join(",");

      const bscAddresses = Object.values(dexMap)
        .filter((token) => token.chain === "bsc")
        .map((token) => token.address)
        .join(",");

      const ethereumAddresses = Object.values(dexMap)
        .filter((token) => token.chain === "ethereum")
        .map((token) => token.address)
        .join(",");

      const baseAddresses = Object.values(dexMap)
  .filter((token) => token.chain === "base")
  .map((token) => token.address)
  .join(",");
  const hypeAddresses = Object.values(dexMap)
  .filter((token) => token.chain === "hype")
  .map((token) => token.address)
  .join(",");  
      const [
  solanaResponse,
  bscResponse,
  ethereumResponse,
  baseResponse,
  hypeResponse,
] = await Promise.all([
        fetch(
          `https://api.dexscreener.com/tokens/v1/solana/${solanaAddresses}`
        ),
        fetch(
          `https://api.dexscreener.com/tokens/v1/bsc/${bscAddresses}`
        ),
        fetch(
          `https://api.dexscreener.com/tokens/v1/ethereum/${ethereumAddresses}`
        ),
fetch(
  `https://api.dexscreener.com/tokens/v1/base/${baseAddresses}`
      ),
   fetch(
  `https://api.dexscreener.com/tokens/v1/hype/${hypeAddresses}`
),   
]);


      const solanaPairs =
        await solanaResponse.json();

      const bscPairs =
        await bscResponse.json();

      const ethereumPairs =
        await ethereumResponse.json();
const basePairs =
  await baseResponse.json();
  const hypePairs =
  await hypeResponse.json();
      console.log("HYPE DATA:", hypePairs);
  const pairs = [
  ...solanaPairs,
  ...bscPairs,
  ...ethereumPairs,
  ...basePairs,
  ...hypePairs,
];

      console.log(pairs);
const manualLogos: Record<string, string> = {
  DOGECOIN: "/dogecoin.png",
  TURBO: "/turbo.png",
  KISHU_INU: "/kishu.png",
  LADYS: "/ladys.png",
  "BITCOIN MINER": "/bitcoinminer.png",
  GROK: "/grok.png",
};
      const updated: any = {};
const performanceMap: Record<string, number> = {};
     pairs.forEach((pair: any) => {
  const logo = pair.info?.imageUrl;

  const address =
  (pair.baseToken?.address || "")
    .toLowerCase()
    .trim();

  const matchingEntry =
    Object.entries(dexMap).find(
      ([_, token]) =>
        token.address.toLowerCase() ===
        address
    );

  if (matchingEntry) {
    const [symbol] = matchingEntry;

    const change =
  Number(pair.priceChange?.h24 || 0);

performanceMap[symbol] = change;

updated[symbol] = {
  logo: logo || manualLogos[symbol],
  change24h: change,
};
  }
});
Object.entries(manualLogos).forEach(([symbol, logo]) => {
  if (!updated[symbol]) {
    updated[symbol] = {
      logo,
    };
  }
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
      setSelected(selected.filter((c) => c !== coin));

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

  const substituteCoins = seasonCoins.filter((coin) => !selected.includes(coin));

  if (showVotingPage) {
    return (
      <div style={pageStyle}>
        <MFLLogo />

        <div style={centerSubtitle}>VOTING</div>

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
            Which 5 memecoins would you like to see next season?
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button onClick={() => setShowVotingPage(false)} style={glassButton}>
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
                  justifyContent: "space-between",
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
                  <TokenLogo coin={coin} tokenData={tokenData} />

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
                    SEASON 1 - 4 WEEKLY TOURNAMENTS
                    <br />
                    THEN WE MOVE ONTO SEASON 2!
                  </div>
                ) : (
                  <div
                    style={{
                      color: active ? "#f7931a" : "#7d7d7d",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "1px",
                    }}
                  >
                    {active ? "VOTED" : "VOTE"}
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

        <div style={centerSubtitle}>YOUR 5 STAR LINE UP!</div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button onClick={() => setShowLineupPage(false)} style={glassButton}>
            ← HOME
          </button>

          <button onClick={() => setShowVotingPage(true)} style={glassButton}>
            VOTING →
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "18px",
            marginBottom: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={smallLabel}>AUTO SUBS</div>

            <div
              style={{
                color: autoSubEnabled ? "#4ade80" : "#7d7d7d",
                fontWeight: 700,
              }}
            >
              {autoSubEnabled ? "AUTO SUB ENABLED" : "DISABLED"}
            </div>
          </div>

          <button
            onClick={() => setAutoSubEnabled(!autoSubEnabled)}
            style={{
              background: autoSubEnabled
                ? "rgba(74,222,128,0.12)"
                : "rgba(255,255,255,0.06)",
              border: autoSubEnabled
                ? "1px solid rgba(74,222,128,0.25)"
                : "1px solid rgba(255,255,255,0.06)",
              color: autoSubEnabled ? "#4ade80" : "#9e9e9e",
              borderRadius: "999px",
              padding: "10px 16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {autoSubEnabled ? "ON" : "OFF"}
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "20px",
            marginBottom: "28px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={smallLabel}>WEEKLY SCORE</div>

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
            <div style={smallLabel}>CURRENT RANK</div>

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

            const isCaptain = captain === coin;

            return (
              <div
                key={coin}
                style={{
                  position: "absolute",
                  top: positions[index].top,
                  left: positions[index].left,
                  transform: "translate(-50%, 0)",
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
                    justifyContent: "center",
                  }}
                >
                  <TokenLogo coin={coin} tokenData={tokenData} />
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
      (tokenData?.[coin]?.change24h || 0) >= 0
        ? "#4ade80"
        : "#ef4444",
    fontWeight: 700,
    marginBottom: "8px",
  }}
>
  {(tokenData?.[coin]?.change24h || 0) > 0
    ? "+"
    : ""}
  {tokenData?.[coin]?.change24h?.toFixed(1) || "0.0"}%
</div>
                <div
                  style={{
                    color: "#7d7d7d",
                    fontSize: "12px",
                  }}
                >
                  {autoSubEnabled ? "Auto Subbed In — Half Time" : "Captain Active"}
                </div>
              </div>
            );
          })}
        </div>

        <div style={smallLabel}>SUBSTITUTES</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
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
                <TokenLogo coin={coin} tokenData={tokenData} />

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
    color:
      (tokenData?.[coin]?.change24h || 0) >= 0
        ? "#4ade80"
        : "#ef4444",
    fontWeight: 700,
    marginBottom: "8px",
  }}
>
  {(tokenData?.[coin]?.change24h || 0) > 0
    ? "+"
    : ""}
  {tokenData?.[coin]?.change24h?.toFixed(1) || "0.0"}%
</div>

              <button
                style={{
                  background: "rgba(74,222,128,0.12)",
                  border: "1px solid rgba(74,222,128,0.25)",
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
              boxShadow: "0 0 18px rgba(247,147,26,0.45)",
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
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.06)",
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
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        {seasonCoins.map((coin) => {
          const active = selected.includes(coin);

          return (
            <div
              key={coin}
              onClick={() => toggleCoin(coin)}
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
                <TokenLogo coin={coin} tokenData={tokenData} />
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
                {tokenData?.[coin]?.change24h?.toFixed(1) || "0.0"}%
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
                  color: active ? "#f7931a" : "#4ade80",
                  padding: "12px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {active ? "picked" : "pick me"}
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
          disabled={selected.length !== 5}
          onClick={() => {
            if (!captain && selected.length > 0) {
              setCaptain(selected[0]);
            }

            setShowLineupPage(true);
          }}
          style={{
            ...glassButton,
            opacity: selected.length === 5 ? 1 : 0.5,
          }}
        >
          ★ STAR LINE UP
        </button>

        <button onClick={() => setShowVotingPage(true)} style={glassButton}>
          🔒 LOCK YOUR VOTES IN FOR NEXT SEASON
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
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
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
  boxShadow: "0 10px 40px rgba(0,0,0,0.28)",
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

  if (matchingEntry) {
    const [symbol] = matchingEntry;

    const change =
  Number(pair.priceChange?.h24 || 0);

performanceMap[symbol] = change;

updated[symbol] = {
  logo: logo || manualLogos[symbol],
  change24h: change,
};
  }
});
Object.entries(manualLogos).forEach(([symbol, logo]) => {
  if (!updated[symbol]) {
    updated[symbol] = {
      logo,
    };
  }
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
      setSelected(selected.filter((c) => c !== coin));

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

  const substituteCoins = seasonCoins.filter((coin) => !selected.includes(coin));

  if (showVotingPage) {
    return (
      <div style={pageStyle}>
        <MFLLogo />

        <div style={centerSubtitle}>VOTING</div>

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
            Which 5 memecoins would you like to see next season?
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button onClick={() => setShowVotingPage(false)} style={glassButton}>
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
                  justifyContent: "space-between",
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
                  <TokenLogo coin={coin} tokenData={tokenData} />

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
                    SEASON 1 - 4 WEEKLY TOURNAMENTS
                    <br />
                    THEN WE MOVE ONTO SEASON 2!
                  </div>
                ) : (
                  <div
                    style={{
                      color: active ? "#f7931a" : "#7d7d7d",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "1px",
                    }}
                  >
                    {active ? "VOTED" : "VOTE"}
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

        <div style={centerSubtitle}>YOUR 5 STAR LINE UP!</div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button onClick={() => setShowLineupPage(false)} style={glassButton}>
            ← HOME
          </button>

          <button onClick={() => setShowVotingPage(true)} style={glassButton}>
            VOTING →
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "18px",
            marginBottom: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={smallLabel}>AUTO SUBS</div>

            <div
              style={{
                color: autoSubEnabled ? "#4ade80" : "#7d7d7d",
                fontWeight: 700,
              }}
            >
              {autoSubEnabled ? "AUTO SUB ENABLED" : "DISABLED"}
            </div>
          </div>

          <button
            onClick={() => setAutoSubEnabled(!autoSubEnabled)}
            style={{
              background: autoSubEnabled
                ? "rgba(74,222,128,0.12)"
                : "rgba(255,255,255,0.06)",
              border: autoSubEnabled
                ? "1px solid rgba(74,222,128,0.25)"
                : "1px solid rgba(255,255,255,0.06)",
              color: autoSubEnabled ? "#4ade80" : "#9e9e9e",
              borderRadius: "999px",
              padding: "10px 16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {autoSubEnabled ? "ON" : "OFF"}
          </button>
        </div>

        <div
          style={{
            ...glassPanel,
            padding: "20px",
            marginBottom: "28px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={smallLabel}>WEEKLY SCORE</div>

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
            <div style={smallLabel}>CURRENT RANK</div>

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

            const isCaptain = captain === coin;

            return (
              <div
                key={coin}
                style={{
                  position: "absolute",
                  top: positions[index].top,
                  left: positions[index].left,
                  transform: "translate(-50%, 0)",
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
                    justifyContent: "center",
                  }}
                >
                  <TokenLogo coin={coin} tokenData={tokenData} />
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
      (tokenData?.[coin]?.change24h || 0) >= 0
        ? "#4ade80"
        : "#ef4444",
    fontWeight: 700,
    marginBottom: "8px",
  }}
>
  {(tokenData?.[coin]?.change24h || 0) > 0
    ? "+"
    : ""}
  {tokenData?.[coin]?.change24h?.toFixed(1) || "0.0"}%
</div>
                <div
                  style={{
                    color: "#7d7d7d",
                    fontSize: "12px",
                  }}
                >
                  {autoSubEnabled ? "Auto Subbed In — Half Time" : "Captain Active"}
                </div>
              </div>
            );
          })}
        </div>

        <div style={smallLabel}>SUBSTITUTES</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
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
                <TokenLogo coin={coin} tokenData={tokenData} />

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
    color:
      (tokenData?.[coin]?.change24h || 0) >= 0
        ? "#4ade80"
        : "#ef4444",
    fontWeight: 700,
    marginBottom: "8px",
  }}
>
  {(tokenData?.[coin]?.change24h || 0) > 0
    ? "+"
    : ""}
  {tokenData?.[coin]?.change24h?.toFixed(1) || "0.0"}%
</div>

              <button
                style={{
                  background: "rgba(74,222,128,0.12)",
                  border: "1px solid rgba(74,222,128,0.25)",
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
              boxShadow: "0 0 18px rgba(247,147,26,0.45)",
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
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.06)",
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
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        {seasonCoins.map((coin) => {
          const active = selected.includes(coin);

          return (
            <div
              key={coin}
              onClick={() => toggleCoin(coin)}
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
                <TokenLogo coin={coin} tokenData={tokenData} />
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
                {tokenData?.[coin]?.change24h?.toFixed(1) || "0.0"}%
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
                  color: active ? "#f7931a" : "#4ade80",
                  padding: "12px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {active ? "picked" : "pick me"}
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
          disabled={selected.length !== 5}
          onClick={() => {
            if (!captain && selected.length > 0) {
              setCaptain(selected[0]);
            }

            setShowLineupPage(true);
          }}
          style={{
            ...glassButton,
            opacity: selected.length === 5 ? 1 : 0.5,
          }}
        >
          ★ STAR LINE UP
        </button>

        <button onClick={() => setShowVotingPage(true)} style={glassButton}>
          🔒 LOCK YOUR VOTES IN FOR NEXT SEASON
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
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
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
  boxShadow: "0 10px 40px rgba(0,0,0,0.28)",
};

