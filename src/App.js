import ReactDOM from "react-dom/client"
import {
  Routes,
  Route,
} from "react-router-dom"
import Elder from "./components/Elder"

const App = () => {
  return (
    <> 
        <Routes>
          <Route path="/" element={<Elder />} />
          
        </Routes>
      
    

      
    
    </>
 
  )

}

export default App;
