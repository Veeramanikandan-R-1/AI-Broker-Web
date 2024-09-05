import './App.scss';
import HomePage from './components/homePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MarketPage from './components/marketPage';
import { AppContext } from './appContext';
import { useState } from 'react';
import { Spinner } from './components/common/widgets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        path: "/markets",
        element: <MarketPage />,
      },
      {
        path: "watchlist",
        element: <div>TO BE DONE: Watchlist</div>,
      },
      {
        path: "bots",
        element: <div>TO BE DONE: AI Trading Bots</div>,
      },
      {
        path: "wallets",
        element: <div>TO BE DONE: Wallets</div>,
      },
      {
        path: "guides",
        element: <div>TO BE DONE: Guides</div>,
      },
      {
        path: "community",
        element: <div>TO BE DONE: Community</div>,
      },
      {
        path: "support",
        element: <div>TO BE DONE: Support</div>,
      },
    ]
  },
]);


function App() {
  const [data, setData] = useState({
    isLoading: false,
    userData: {},
    allTokens: [],
    topLists: {
      gainers: [],
      losers: [],
      volume: [],
      socialActivity: []
    }
  })
  return (
    <div className="App">
      <AppContext.Provider value={{ data, setData }}>
        <RouterProvider router={router} />
        {data?.isLoading && <Spinner />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
