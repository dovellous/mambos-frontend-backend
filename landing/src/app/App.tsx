import React from 'react';
import {useAuth} from "./auth/provider/AuthProvider";
import {Footer} from "./components/layout/footer";
import {Header} from "./components/layout/header";
import RoutePath from './routes/RoutePath';
import { Navbar } from './components/Navbar';
import './assets/App.scss';

type AppProps = {
  basename: string
}

const App: React.FC<AppProps> = ({basename}) => {

  return (
      <>
          <Header>
              {/*  Logo, Header navigation, Search   */}
          </Header>
          <RoutePath />
          <Footer>
              {/*  Logo, Quick Links, Social Links, Subscribe, Copyrights   */}
          </Footer>
      </>
  );
  
}

export default App;
