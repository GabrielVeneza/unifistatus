import ubiquitilogo from "./assets/ubiquiti-svgrepo-com.svg";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_UNIFI_KEY;

function App() {
  const { data } = useFetch(API_URL, API_KEY);

  console.log(data);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={ubiquitilogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>UniFi Status</h1>

      <div className="card">
        <h2>Monitoramento de Dispositivos Unifi</h2>

        {/* Verificação 1: Se 'data' ainda não chegou (carregando) */}
        {!data && <p>Carregando...</p>}

        {/* Verificação 2: Se 'data' existe e tem o array 'data' com itens */}
        {data && data.data && data.data.length > 0 && (
          <ul
            style={{
              padding: 0,
              margin: 0,
              listStyleType: "none",
              maxHeight: "300px",
              // overflowY: "auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {data.data.map((device) => (
              <li
                key={device.id}
                style={{
                  flex: "1 0 21%", // Aproximadamente 4 por linha (100/4=25, menos gap)
                  boxSizing: "border-box",
                  marginBottom: "10px",
                  listStyleType: "none",
                  padding: "10px",
                  border: "2px solid" + (device.reportedState.state === "connected" ? "#4caf50" : "#f44336"),
                  borderRadius: "15px",
                  backgroundColor: "#f9f9f9ff",
                  color: "#333",
                  minWidth: "180px", // opcional, para garantir largura mínima
                  maxWidth: "23%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "5px",
                }}
              >
                <strong style={{display: "flex", flexDirection: "row", alignItems: "anchor-center", gap: "5px"}}>
                  <p style={{color: device.reportedState.state === "connected" ? "#4caf50" : "#f44336", fontSize: "17px"}} >•</p>
                  {device.reportedState.hostname}
                </strong>
                <span>{device.reportedState.ip}</span>
                <span>Status: {device.reportedState.state}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Verificação 3: Se 'data' chegou, mas o array está vazio */}
        {data && (!data.data || data.data.length === 0) && (
          <p>Nenhum dispositivo encontrado.</p>
        )}
      </div>
    </>
  );
}

export default App;