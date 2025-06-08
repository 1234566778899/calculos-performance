/******************************************************************
 *   B-727 · Peso y Balance  — columnas:  Peso | Momento (/1000)
 ******************************************************************/
import { useEffect, useState } from "react";

/* — Pesos/momentos básicos de la aeronave — */
const BOW_LB = 105_500;   // Basic Operating Weight
const BOI_1000 = 92_837;   // Basic Operating Index  (/1000)

/* — Mini-hook para cada fila: peso y momento (/1000) — */
const useRow = () => {
    const [w, setW] = useState(0);    // weight  (lb)
    const [m, setM] = useState(0);    // moment (/1000 lb-in)
    return { w, m, setW, setM };
};
const arms = {
    '8500': 992.1,
    '9000': 993.0,
    '9500': 993.9,
    '10000': 994.7,
    '10500': 995.4,
    '11000': 996.1,
    '11500': 996.8,
    '12000': 997.5
}

const arms2 = {
    '8500': 917.5,
    '9000': 917.2,
    '9500': 917.0,
    '10000': 916.8,
    '10500': 916.6,
    '11000': 916.5,
    '11500': 916.3,
    '12000': 916.1,

    '18500': 915.1,
    '19000': 915.0,
    '19500': 914.9,
    '20000': 914.9,
    '20500': 914.8,
    '21000': 914.7,
    '21500': 914.6,
    '22000': 914.6,

    '22500': 914.5,
    '23000': 914.5,
    '23500': 914.4,
    '24000': 914.3,
    '24500': 914.3,
    '24250': 914.3,
    '25000': 914.2,
    '25200': 914.2,
    '25500': 914.2,
    '26000': 914.1,
    '26200': 914.1,
    '26500': 914.1,
    '27000': 914.0,
    '27500': 913.9,
    '28000': 913.9,
    '28500': 913.8,
    '29000': 913.7,
    '29500': 913.7,
    '30000': 913.6
};

export default function WB727Sheet() {
    /* 1. Filas de la tabla */
    const paxFw = useRow();
    const paxAf = useRow();
    const cargFw = useRow();
    const cargAf = useRow();
    const fuel13 = useRow();   // cada tanque 1 & 3
    const fuel2 = useRow();   // tanque 2

    /* 2. Resultados */
    const [totW, setTotW] = useState(null);
    const [totM1, setTotM] = useState(null);   // momento /1000
    const [cg, setCg] = useState(null);

    useEffect(() => {
        const { setM } = paxFw;
        if (paxFw.w !== 0) {
            setM(paxFw.w * 582 / 1000);   // 10 in de distancia entre filas (pax)
        }
    }, [paxFw])
    useEffect(() => {
        const { setM } = paxAf;
        if (paxAf.w !== 0) {
            setM(paxAf.w * 1028 / 1000);
        }
    }, [paxAf])
    useEffect(() => {
        const { setM } = cargFw;
        if (cargFw.w !== 0) {
            setM(cargFw.w * 680 / 1000);
        }
    }, [cargFw])
    useEffect(() => {
        const { setM } = cargAf;
        if (cargAf.w !== 0) {
            setM(cargAf.w * 1166 / 1000);
        }
    }, [cargAf])
    useEffect(() => {
        const { setM } = fuel13;
        if (fuel13.w !== 0 && arms[fuel13.w]) {
            setM(Math.round(fuel13.w * arms[fuel13.w] / 1000));
        }
    }, [fuel13])
    useEffect(() => {
        const { setM } = fuel2;
        if (fuel2.w !== 0 && arms2[fuel2.w]) {
            setM(fuel2.w * arms2[fuel2.w] / 1000);
        }
    }, [fuel2])
    /* 3. Cálculo */
    const calc = () => {
        /* ojo: tanks 1 & 3 son dos ⇒ peso y momento se multiplican ×2 */
        const weight =
            BOW_LB +
            paxFw.w + paxAf.w +
            cargFw.w + cargAf.w +
            (fuel13.w * 2) + fuel2.w;

        console.log({
            BOW_LB,
            paxFw,
            paxAf,
            cargFw,
            cargAf,
            fuel13,
            fuel2
        })
        const moment =
            BOI_1000 +
            paxFw.m + paxAf.m +
            cargFw.m + cargAf.m +
            (fuel13.m * 2) + fuel2.m;

        console.log({
            weight,
            moment,
            cg: moment / weight
        })
        const cgIn = +((moment / weight) * 1000).toFixed(1);

        setTotW(weight);
        setTotM(moment.toFixed(1));
        setCg(cgIn);
    };

    const cell = (val, setter) => (
        <input
            type="number"
            value={val}
            onChange={e => setter(Number(e.target.value) || 0)}
            className="border w-full p-2 text-right"
        />
    );

    return (
        <div className="p-6 min-h-screen bg-[#eef3f9] flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Peso y Balance</h1>

            <div className="bg-white shadow-lg rounded p-6 w-full max-w-3xl space-y-6">
                <table className="w-full text-center border">
                    <tbody>
                        <tr>
                            <td className="border p-2 bg-slate-500"></td>
                            <td className="border p-2 bg-slate-500 text-white">Peso (lb)</td>
                            <td className="border p-2 bg-slate-500 text-white">Momento (/1000)</td>
                        </tr>

                        {/* Passengers */}
                        <tr><td colSpan={3} className="border p-2 bg-slate-300">Passengers</td></tr>
                        <tr>
                            <td className="border p-2 text-end font-bold">Forward</td>
                            <td className="border p-2">{cell(paxFw.w, paxFw.setW)}</td>
                            <td className="border p-2">{cell(paxFw.m, paxFw.setM)}</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-end font-bold">AFT</td>
                            <td className="border p-2">{cell(paxAf.w, paxAf.setW)}</td>
                            <td className="border p-2">{cell(paxAf.m, paxAf.setM)}</td>
                        </tr>

                        {/* Cargo */}
                        <tr><td colSpan={3} className="border p-2 bg-slate-300">Cargo</td></tr>
                        <tr>
                            <td className="border p-2 text-end font-bold">Forward</td>
                            <td className="border p-2">{cell(cargFw.w, cargFw.setW)}</td>
                            <td className="border p-2">{cell(cargFw.m, cargFw.setM)}</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-end font-bold">AFT</td>
                            <td className="border p-2">{cell(cargAf.w, cargAf.setW)}</td>
                            <td className="border p-2">{cell(cargAf.m, cargAf.setM)}</td>
                        </tr>

                        {/* Fuel */}
                        <tr><td colSpan={3} className="border p-2 bg-slate-300">Fuel</td></tr>
                        <tr>
                            <td className="border p-2 text-end font-bold">1 &amp; 3</td>
                            <td className="border p-2">{cell(fuel13.w, fuel13.setW)}</td>
                            <td className="border p-2">{cell(fuel13.m, fuel13.setM)}</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-end font-bold">2</td>
                            <td className="border p-2">{cell(fuel2.w, fuel2.setW)}</td>
                            <td className="border p-2">{cell(fuel2.m, fuel2.setM)}</td>
                        </tr>
                    </tbody>
                </table>

                <button
                    onClick={calc}
                    className="w-full bg-blue-600 text-white py-2 rounded shadow-md hover:bg-blue-700"
                >
                    Calcular C.G.
                </button>

                {cg !== null && (
                    <div className="bg-gray-100 p-4 rounded text-sm space-y-1">
                        <p><strong>Peso total:</strong> {totW.toLocaleString()} lb</p>
                        <p><strong>Momento total:</strong> {totM1} (× 1000 lb-in)</p>
                        <p><strong>C.G.:</strong> {cg} in desde datum</p>
                    </div>
                )}
            </div>
        </div>
    );
}
