import { useState } from "react";

const velocityData = {
    "1550_23_15_140": { V1: 129, Vr: 129, V2: 145 },
    "1900_50_5_190": { V1: 142, Vr: 142, V2: 158 },
    "4150_68_25_180": { V1: 132, Vr: 134, V2: 144 },
    "3150_23_15_160": { V1: 124, Vr: 124, V2: 138 },
    "2550_5_5_120": { V1: 122, Vr: 122, V2: 137 },
};


export const VelocityCalculator = () => {
    const [elevation, setElevation] = useState("");
    const [temperature, setTemperature] = useState("");
    const [typeTemperature, setTypeTemperature] = useState("f");
    const [flap, setFlap] = useState("");
    const [weight, setWeight] = useState("140");

    const [v1, setV1] = useState("");
    const [vr, setVr] = useState("");
    const [v2, setV2] = useState("");


    const calculate = () => {
        const elev = parseFloat(elevation);
        const temp = typeTemperature === 'f' ? parseFloat(temperature) : (parseFloat(temperature) * 9 / 5) + 32;
        const flapAngle = parseFloat(flap);
        const grossWeight = weight;

        if (isNaN(elev) || isNaN(temp) || isNaN(flapAngle)) {
            alert("Por favor, completa todos los campos con valores válidos.");
            return;
        }
        const pa = elev;
        const key = `${pa}_${temp}_${flapAngle}_${grossWeight}`;

        console.log(key);
        const result = velocityData[key];

        if (result) {
            setV1(result.V1);
            setVr(result.Vr);
            setV2(result.V2);
        } else {
            setV1("N/A");
            setVr("N/A");
            setV2("N/A");
        }
    };

    return (
        <div className="bg-[#f1f6fb] min-h-screen flex flex-col items-center p-4">
            <div className="text-center mt-4 mb-6 text-2xl font-bold text-blue-700">
                Cálculo de Velocidades - Boeing 727
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
                <div>
                    <label className="block font-medium">Elevación del aeropuerto (ft):</label>
                    <input
                        type="number"
                        value={elevation}
                        onChange={(e) => setElevation(e.target.value)}
                        className="w-full border px-3 py-2 mt-1 rounded"
                        placeholder="Ej. 1550"
                    />
                </div>

                <div>
                    <label className="block font-medium">Temperatura</label>
                    <div className="flex gap-1">
                        <input
                            type="number"
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            className="w-full border px-3 py-2 mt-1 rounded"
                            placeholder="Ej. 23"
                        />
                        <select
                            value={typeTemperature}
                            onChange={(e) => setTypeTemperature(e.target.value)}
                            className="w-full border px-3 py-2 mt-1 rounded">
                            <option value="f">°F</option>
                            <option value="c">°C</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Flap (°):</label>
                    <input
                        type="number"
                        value={flap}
                        onChange={(e) => setFlap(e.target.value)}
                        className="w-full border px-3 py-2 mt-1 rounded"
                        placeholder="Ej. 15"
                    />
                </div>

                <div>
                    <label className="block font-medium">Peso de despegue (mil lbs):</label>
                    <select
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border px-3 py-2 mt-1 rounded"
                    >
                        <option value="120">120</option>
                        <option value="130">130</option>
                        <option value="140">140</option>
                        <option value="150">150</option>
                        <option value="160">160</option>
                        <option value="170">170</option>
                        <option value="180">180</option>
                        <option value="190">190</option>
                    </select>
                </div>

                <button
                    onClick={calculate}
                    className="w-full bg-blue-600 shadow-md text-white py-2 rounded hover:bg-blue-700"
                >
                    Calcular Velocidades
                </button>

                {v1 && (
                    <div className="mt-4 bg-gray-100 rounded-lg">
                        <p className="py-2 bg-slate-200 px-2"><strong>V1:</strong> {v1}</p>
                        <p className="py-2 bg-slate-300 px-2"><strong>Vr:</strong> {vr}</p>
                        <p className="py-2 bg-slate-400 px-2"><strong>V2:</strong> {v2}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
