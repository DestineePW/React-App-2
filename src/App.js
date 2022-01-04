import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupPage from "./Pages/NewMeetups";
import FavoritesPage from "./Pages/Favorites";

function App() {
  //Example of path
  // Localhost:300/path
  return (
    <Routes>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
    </Routes>
    
  );
}

export default App;
