import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import PopularScreen from "./screens/PopularScreen";
import TopRatedScreen from "./screens/TopRatedScreen";
import UpcomingScreen from "./screens/UpcomingScreen";
import NowPlayingScreen from "./screens/NowPlayingScreen";

function App() {
  // Disable right click on the page
  //   useEffect(() => {
  //     const handleContextmenu = e => {
  //         e.preventDefault()
  //     }
  //     document.addEventListener('contextmenu', handleContextmenu)
  //     return function cleanup() {
  //         document.removeEventListener('contextmenu', handleContextmenu)
  //     }
  // }, [ ])

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<h1>Movie id Screen</h1>} />{" "}
          {/* /movie:id is a dynamic route */}
          <Route path="/movies/popular" element={<PopularScreen />} />
          <Route path="/movies/top_rated" element={<TopRatedScreen />} />
          <Route path="/movies/upcoming" element={<UpcomingScreen />} />
          <Route path="/movies/now_playing" element={<NowPlayingScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
