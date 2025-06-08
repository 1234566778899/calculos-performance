import { useState } from "react";

/* ---------- TABLA EPR BASE ---------- */
export const eprTable = {
    /* -------------  PRESS ALT −1000 ft  ------------- */
    "-1000_-20": { epr13: 2.06, epr2: 2.08 },
    "-1000_-15": { epr13: 2.06, epr2: 2.08 },
    "-1000_-10": { epr13: 2.05, epr2: 2.07 },
    "-1000_-5": { epr13: 2.04, epr2: 2.06 },
    "-1000_0": { epr13: 2.04, epr2: 2.06 },
    "-1000_5": { epr13: 2.04, epr2: 2.06 },
    "-1000_10": { epr13: 2.04, epr2: 2.06 },
    "-1000_15": { epr13: 2.04, epr2: 2.06 },
    "-1000_20": { epr13: 2.04, epr2: 2.06 },
    "-1000_25": { epr13: 2.04, epr2: 2.06 },
    "-1000_30": { epr13: 2.03, epr2: 2.05 },
    "-1000_35": { epr13: 2.00, epr2: 2.03 },
    "-1000_40": { epr13: 1.99, epr2: 1.94 },
    "-1000_45": { epr13: 1.94, epr2: 1.92 },
    "-1000_49": { epr13: 1.91, epr2: 1.91 },

    /* -------------  PRESS ALT    0 ft (S.L.)  ---------- */
    "0_-20": { epr13: 2.11, epr2: 2.12 },
    "0_-15": { epr13: 2.11, epr2: 2.12 },
    "0_-10": { epr13: 2.11, epr2: 2.12 },
    "0_-5": { epr13: 2.10, epr2: 2.11 },
    "0_0": { epr13: 2.10, epr2: 2.11 },
    "0_5": { epr13: 2.10, epr2: 2.11 },
    "0_10": { epr13: 2.10, epr2: 2.11 },
    "0_15": { epr13: 2.10, epr2: 2.11 },
    "0_20": { epr13: 2.10, epr2: 2.11 },
    "0_25": { epr13: 2.10, epr2: 2.11 },
    "0_30": { epr13: 2.08, epr2: 2.10 },
    "0_35": { epr13: 2.03, epr2: 2.05 },
    "0_40": { epr13: 1.99, epr2: 1.94 },
    "0_45": { epr13: 1.94, epr2: 1.92 },
    "0_49": { epr13: 1.91, epr2: 1.91 },

    /* ----------  PRESS ALT 1000 ft  ---------- */
    "1000_-20": { epr13: 2.15, epr2: 2.16 },
    "1000_-15": { epr13: 2.15, epr2: 2.16 },
    "1000_-10": { epr13: 2.15, epr2: 2.16 },
    "1000_-5": { epr13: 2.15, epr2: 2.16 },
    "1000_0": { epr13: 2.15, epr2: 2.16 },
    "1000_5": { epr13: 2.15, epr2: 2.16 },
    "1000_10": { epr13: 2.13, epr2: 2.15 },
    "1000_15": { epr13: 2.12, epr2: 2.13 },
    "1000_20": { epr13: 2.12, epr2: 2.13 },
    "1000_25": { epr13: 2.11, epr2: 2.12 },
    "1000_30": { epr13: 2.08, epr2: 2.10 },
    "1000_35": { epr13: 2.03, epr2: 2.05 },
    "1000_40": { epr13: 1.99, epr2: 2.00 },
    "1000_45": { epr13: 1.94, epr2: 1.96 },
    "1000_49": { epr13: 1.91, epr2: 1.92 },

    /* ----------  PRESS ALT 2000 ft  ---------- */
    "2000_-20": { epr13: 2.21, epr2: 2.22 },
    "2000_-15": { epr13: 2.21, epr2: 2.22 },
    "2000_-10": { epr13: 2.21, epr2: 2.22 },
    "2000_-5": { epr13: 2.21, epr2: 2.22 },
    "2000_0": { epr13: 2.20, epr2: 2.21 },
    "2000_5": { epr13: 2.17, epr2: 2.18 },
    "2000_10": { epr13: 2.14, epr2: 2.16 },
    "2000_15": { epr13: 2.14, epr2: 2.16 },
    "2000_20": { epr13: 2.14, epr2: 2.15 },
    "2000_25": { epr13: 2.11, epr2: 2.12 },
    "2000_30": { epr13: 2.08, epr2: 2.10 },
    "2000_35": { epr13: 2.03, epr2: 2.05 },
    "2000_40": { epr13: 1.99, epr2: 2.00 },
    "2000_45": { epr13: 1.94, epr2: 1.96 },
    "2000_49": { epr13: 1.91, epr2: 1.92 },

    /* ----------  PRESS ALT 3000 ft  ---------- */
    "3000_-20": { epr13: 2.22, epr2: 2.24 },
    "3000_-15": { epr13: 2.22, epr2: 2.24 },
    "3000_-10": { epr13: 2.22, epr2: 2.24 },
    "3000_-5": { epr13: 2.24, epr2: 2.26 },
    "3000_0": { epr13: 2.24, epr2: 2.26 },
    "3000_5": { epr13: 2.25, epr2: 2.27 },
    "3000_10": { epr13: 2.25, epr2: 2.27 },
    "3000_15": { epr13: 2.26, epr2: 2.28 },
    "3000_20": { epr13: 2.24, epr2: 2.26 },
    "3000_25": { epr13: 2.24, epr2: 2.26 },
    "3000_30": { epr13: 2.21, epr2: 2.24 },
    "3000_35": { epr13: 2.14, epr2: 2.16 },
    "3000_40": { epr13: 1.99, epr2: 1.94 },
    "3000_45": { epr13: 1.94, epr2: 1.92 },
    "3000_49": { epr13: 1.91, epr2: 1.91 },

    /* ----------  PRESS ALT 3858 ft & above  ---------- */
    "3858_-20": { epr13: 2.27, epr2: 2.29 },
    "3858_-15": { epr13: 2.27, epr2: 2.29 },
    "3858_-10": { epr13: 2.27, epr2: 2.29 },
    "3858_-5": { epr13: 2.27, epr2: 2.29 },
    "3858_0": { epr13: 2.27, epr2: 2.29 },

    "3858_5": { epr13: 2.24, epr2: 2.27 },
    "3858_10": { epr13: 2.21, epr2: 2.24 },
    "3858_15": { epr13: 2.17, epr2: 2.18 },
    "3858_20": { epr13: 2.14, epr2: 2.15 },
    "3858_25": { epr13: 2.12, epr2: 2.10 },
    "3858_30": { epr13: 2.10, epr2: 2.08 },
    "3858_35": { epr13: 2.07, epr2: 2.05 },
    "3858_40": { epr13: 2.03, epr2: 1.99 },
    "3858_45": { epr13: 1.96, epr2: 1.92 },
    "3858_49": { epr13: 1.92, epr2: 1.91 },
};


/* ---------- COMPONENTE ---------- */
export const EPRCalculator = () => {
    const [pa, setPa] = useState("");
    const [temp, setTemp] = useState("");
    const [degType, setDegType] = useState("c"); // 'c' | 'f'
    const [antiIce, setAntiIce] = useState(false);
    const [airCond, setAirCond] = useState(false);
    const [bleed6th, setBleed6th] = useState(false);
    const [result, setResult] = useState(null);

    /* ----- CORE ----- */
    const calcular = () => {
        /* 1️⃣  Normalizar entradas ----------------------------------- */
        const paVal = parseFloat(pa);
        const tempC = degType === "c"
            ? parseFloat(temp)
            : (parseFloat(temp) - 32) * 5 / 9;

        if (Number.isNaN(paVal) || Number.isNaN(tempC)) {
            setResult({ epr13: "N/A", epr2: "N/A" });
            return;
        }

        console.log(tempC)
        /* 2️⃣  Listas únicas de altitudes y temperaturas -------------- */
        const keys = Object.keys(eprTable);
        const alts = [...new Set(keys.map(k => +k.split("_")[0]))].sort((a, b) => a - b);

        const temps = (alt) => [...new Set(
            keys.filter(k => k.startsWith(`${alt}_`)).map(k => +k.split("_")[1])
        )].sort((a, b) => a - b);

        const lin = (x1, y1, x2, y2, x) => x1 === x2 ? y1 : y1 + (y2 - y1) * (x - x1) / (x2 - x1);

        /* 3️⃣  Función que da EPR base para una PA y OAT concretos ----- */
        const eprAt = (altTarget) => {
            const tList = temps(altTarget);

            /* -- Encuentra extremos de temperatura --------------------- */
            const tLow = tList.findLast(t => t <= tempC) ?? tList[0];
            const tHigh = tList.find(t => t >= tempC) ?? tList[tList.length - 1];

            const baseLo = eprTable[`${altTarget}_${tLow}`];
            const baseHi = eprTable[`${altTarget}_${tHigh}`];

            return {
                epr13: lin(tLow, baseLo.epr13, tHigh, baseHi.epr13, tempC),
                epr2: lin(tLow, baseLo.epr2, tHigh, baseHi.epr2, tempC),
            };
        };

        /* 4️⃣  Interpolación (o no) en altitud ------------------------- */
        const altLow = alts.findLast(a => a <= paVal) ?? alts[0];
        const altHigh = alts.find(a => a >= paVal) ?? alts[alts.length - 1];

        const lowVal = eprAt(altLow);
        const highVal = eprAt(altHigh);

        let epr13 = lin(altLow, lowVal.epr13, altHigh, highVal.epr13, paVal);
        let epr2 = lin(altLow, lowVal.epr2, altHigh, highVal.epr2, paVal);

        console.log(epr13, epr2)
        /* 5️⃣  Correcciones dinámicas --------------------------------- */
        if (!airCond) epr13 += 0.04;      // A/C OFF  → +0.04 a 1&3
        if (antiIce) epr2 -= 0.03;      // Anti-ice ON → −0.03 a 2
        if (bleed6th && tempC >= 10) epr2 -= 0.05;     // 6th ON + OAT≥10 → −0.05 a 2

        /* 6️⃣  Mostrar ------------------------------------------------- */
        setResult({
            epr13: epr13.toFixed(2),
            epr2: epr2.toFixed(2),
        });
    };


    /* ----- UI ----- */
    return (
        <div className="bg-[#f4f6fa] min-h-screen flex flex-col items-center p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">EPR</h2>

            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4">
                {/* Altitud */}
                <div>
                    <label className="font-medium">Altitud de Presión (ft):</label>
                    <input
                        type="number"
                        value={pa}
                        onChange={(e) => setPa(e.target.value)}
                        className="w-full border px-3 py-2 mt-1 rounded"
                    />
                </div>

                {/* Temperatura */}
                <div>
                    <label className="font-medium">Temperatura:</label>
                    <div className="flex gap-1">
                        <input
                            type="number"
                            value={temp}
                            onChange={(e) => setTemp(e.target.value)}
                            className="w-full border px-3 py-2 mt-1 rounded"
                        />
                        <select
                            value={degType}
                            onChange={(e) => setDegType(e.target.value)}
                            className="border px-3 py-2 mt-1 rounded"
                        >
                            <option value="f">°F</option>
                            <option value="c">°C</option>
                        </select>
                    </div>
                </div>

                {/* Correcciones */}
                <div className="grid grid-cols-3 gap-2">
                    <label className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            checked={antiIce}
                            onChange={() => setAntiIce(!antiIce)}
                        />{" "}
                        ANTI-ICE
                    </label>

                    <label className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            checked={airCond}
                            onChange={() => setAirCond(!airCond)}
                        />{" "}
                        AIR COND
                    </label>

                    <label className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            checked={bleed6th}
                            onChange={() => setBleed6th(!bleed6th)}
                        />{" "}
                        6TH
                    </label>
                </div>

                <button
                    onClick={calcular}
                    className="w-full bg-blue-600 shadow-md text-white py-2 rounded hover:bg-blue-700"
                >
                    Calcular EPR
                </button>

                {result && (
                    <div className="bg-gray-100 rounded mt-4">
                        <p className="p-2 bg-slate-200">
                            <strong>1 & 3:</strong> {result.epr13}
                        </p>
                        <p className="p-2 bg-slate-300">
                            <strong>2:</strong> {result.epr2}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
