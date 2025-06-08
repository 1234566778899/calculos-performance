import { Outlet, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="w-full flex">
                <button onClick={() => navigate('/a')} className="w-full py-10 bg-slate-400 hover:brightness-95">Velocidades</button>
                <button onClick={() => navigate('/b')} className="w-full py-10 bg-slate-500 text-white hover:brightness-95">EPR</button>
                <button onClick={() => navigate('/c')} className="w-full py-10 bg-slate-600 text-white hover:brightness-95">Peso y Balance</button>
            </div>
            <br />
            <Outlet />
        </div>
    );
}
