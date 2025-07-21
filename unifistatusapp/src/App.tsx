import ubiquitilogo from './assets/ubiquiti-svgrepo-com.svg'
import './App.css'

import { useFetch} from './hooks/useFetch'
import { json } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_UNIFI_KEY

function App() {

  const { data } = useFetch(API_URL, API_KEY)

  console.log(data)



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
      <div className="card">
        <h2>Dispositivos</h2>
        {/* <p>{data.[0]}</p> */}

      </div>
    </>
  )
}

export default App