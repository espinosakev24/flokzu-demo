import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Login, Content } from './pages';
import { mockServer } from './mockServer';
import { AuthRoute } from 'components';
import { LoginProvider } from 'context';
import './app.css';

mockServer();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <AuthRoute path="/content" component={Content} />
            <Route path="/mobile" component={Content} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </LoginProvider>
    </ChakraProvider>
  );
}
export default App;
