
import './App.css';

import DisplayPage from './components/DisplayPage'
import EditRecipe from './components/EditRecipe'

function App() {
  return (
    <div className="App">
      
        {/* Including  the DisplayPage and EditRecipe components for testing purposes*/}
        <DisplayPage />
        <EditRecipe />

    </div>
  );
}

export default App;
