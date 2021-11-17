import React, { useState } from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from './styles/theme';

import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './components/pages/AllQuotes';
import SingleQuote from './components/pages/NewQuote/NewQuote';
import QuoteDetail from './components/pages/QuoteDetail';
import NotFound from './components/pages/NotFound';
import NavBar from './components/Navigation/NavBar';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const changeThemeHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isClicked ? themeLight : themeDark}>
      <GlobalStyle />
      <NavBar onChangeTheme={changeThemeHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" exact />
          </Route>
          <Route path="/all-quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/new-quote">
            <SingleQuote />
          </Route>
          <Route path="/all-quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
}

export default App;
