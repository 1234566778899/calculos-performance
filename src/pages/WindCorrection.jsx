import { useState } from "react";


function deg2rad(deg) {
    return (deg * Math.PI) / 180;
}

function rad2deg(rad) {
    return (rad * 180) / Math.PI;
}

function calculateWindCorrection(course, tas, windDir, windMag) {
    const crsRad = deg2rad(course);
    const windRad = deg2rad(windDir);
    const windAngle = windRad - crsRad;

    const sinWCA = (windMag / tas) * Math.sin(windAngle);
    const wcaRad = Math.asin(sinWCA);
    const wcaDeg = rad2deg(wcaRad);

    const hdg = course + wcaDeg;

    const gs =
        tas * Math.cos(wcaRad) -
        windMag * Math.cos(windAngle);

    return {
        WCA: Number(wcaDeg.toFixed(2)),
        HDG: Number(hdg.toFixed(2)),
        GS: Number(gs.toFixed(2)),
    };
}


export const WindCorrection = () => {
    const [crs, setCrs] = useState("");
    const [tas, setTas] = useState("");
    const [windDir, setWindDir] = useState("");
    const [windMag, setWindMag] = useState("");
    const [distance, setDistance] = useState("");
    const [gph, setGph] = useState("");

    const [wca, setWca] = useState(0);
    const [hdg, setHdg] = useState(0);
    const [gs, setGs] = useState(0);
    const [flightTime, setFlightTime] = useState("00:00");
    const [fuel, setFuel] = useState("0.00");

    const calculate = () => {
        const course = parseFloat(crs);
        const tasVal = parseFloat(tas);
        const windDirVal = parseFloat(windDir);
        const windMagVal = parseFloat(windMag);
        const distanceVal = parseFloat(distance);
        const gphVal = parseFloat(gph);

        if (isNaN(course) || isNaN(tasVal) || isNaN(windDirVal) || isNaN(windMagVal)) {
            alert("Por favor completa todos los campos de viento");
            return;
        }

        const { WCA, HDG, GS } = calculateWindCorrection(course, tasVal, windDirVal, windMagVal);

        setWca(WCA);
        setHdg(HDG);
        setGs(GS);

        if (!isNaN(distanceVal) && !isNaN(GS) && GS > 0) {
            const time = distanceVal / GS;
            setFlightTime(`${Math.floor(time)}:${Math.round((time % 1) * 60).toString().padStart(2, '0')}`);
            if (!isNaN(gphVal)) {
                setFuel((time * gphVal).toFixed(2));
            }
        } else {
            setFlightTime("00:00");
            setFuel("0.00");
        }
    };


    return (
        <div className="bg-[#f1f6fb] min-h-screen flex flex-col items-center p-4">
            <div className="text-center mt-4 mb-2 text-2xl font-semibold text-green-600">Wind correction</div>

            <div className="bg-white p-4 rounded shadow-md w-full max-w-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">CRS</label>
                        <input type="number" value={crs} onChange={(e) => setCrs(e.target.value)} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">TAS</label>
                        <input type="number" value={tas} onChange={(e) => setTas(e.target.value)} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Wind Dir.</label>
                        <input type="number" value={windDir} onChange={(e) => setWindDir(e.target.value)} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Wind Mag.</label>
                        <input type="number" value={windMag} onChange={(e) => setWindMag(e.target.value)} className="input" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div className="bg-green-600 text-white py-2 rounded">WCA<br /><strong>{wca}</strong></div>
                    <div className="bg-green-600 text-white py-2 rounded">HDG<br /><strong>{hdg}</strong></div>
                    <div className="bg-green-600 text-white py-2 rounded">G.S<br /><strong>{gs}</strong></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Distance</label>
                        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} className="input" />
                    </div>
                    <div className="bg-green-600 text-white flex items-center justify-center rounded text-center">
                        <div>
                            Flight Time<br /><strong>{flightTime}</strong>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">GPH</label>
                        <input type="number" value={gph} onChange={(e) => setGph(e.target.value)} className="input" />
                    </div>
                    <div className="bg-green-600 text-white flex items-center justify-center rounded text-center">
                        <div>
                            Fuel<br /><strong>{fuel}</strong>
                        </div>
                    </div>
                </div>

                <button
                    onClick={calculate}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Calcular
                </button>
            </div>

            {/* Footer icons - solo placeholders */}
            <div className="fixed bottom-0 bg-gray-800 w-full p-3 flex justify-around text-white">
                <span>🧮</span>
                <span>⏱️</span>
                <span>ℹ️</span>
            </div>
        </div>
    );
};
