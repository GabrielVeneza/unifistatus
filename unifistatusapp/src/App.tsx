import ubiquitilogo from './assets/ubiquiti-svgrepo-com.svg'
import './App.css'

import { useFetch} from './hooks/useFetch'

const API_URL = import.meta.env.VITE_API_URL
if (!API_URL) {
  throw new Error('API URL is not defined. Please set the VITE_API_URL environment variable.');
}

const API_KEY = import.meta.env.VITE_UNIFI_KEY
if (!API_KEY) {
  throw new Error('API key is not defined. Please set the REACT_APP_UNIFI_KEY environment variable.');
}

function App() {

  const { data, loading, error } = useFetch(API_URL, API_KEY)

  console.log('data', data)

  return (
    <>
      <div>

        <a href="#" target="_blank">
          <img src={ubiquitilogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>UniFi Status</h1>
      <div className="card">
        <p>
          Sistema de monitoramento de status de dispositivos UniFi
        </p>
      </div>
    </>
  )
}

export default App