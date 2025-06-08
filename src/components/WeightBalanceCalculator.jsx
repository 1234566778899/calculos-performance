/******************************************************************
 *   B-727 · Peso y Balance  — columnas:  Peso | Momento (/1000)
 ******************************************************************/
import { useState } from "react";

/* — Pesos/momentos básicos de la aeronave — */
const BOW_LB = 105_500;   // Basic Operating Weight
const BOI_1000 = 92_837;   // Basic Operating Index  (/1000)

/* — Mini-hook para cada fila: peso y momento (/1000) — */
const useRow = () => {
    const [w, setW] = useState(0);    // weight  (lb)
    const [m, setM] = useState(0);    // moment (/1000 lb-in)
    return { w, m, setW, setM };
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

    /* 3. Cálculo */
    const calc = () => {
        /* ojo: tanks 1 & 3 son dos ⇒ peso y momento se multiplican ×2 */
        const weight =
            BOW_LB +
            paxFw.w + paxAf.w +
            cargFw.w + cargAf.w +
            (fuel13.w * 2) + fuel2.w;

        const moment =
            BOI_1000 +
            paxFw.m + paxAf.m +
            cargFw.m + cargAf.m +
            (fuel13.m * 2) + fuel2.m;

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
