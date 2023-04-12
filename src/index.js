import { createRoot } from 'react-dom/client'
import './styles.css'
import App from '../src/App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(< App />)
