/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HeroesPage from 'containers/HeroesPage/Loadable';
import HeroPage from 'containers/HeroPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: calc(960px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  position: relative;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Marvel Heroes"
        defaultTitle="Marvel Heroes"
      >
        <meta name="description" content="A React.js application to view Marvel heroes" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HeroesPage} />
        <Route path="/hero/:id" component={HeroPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
