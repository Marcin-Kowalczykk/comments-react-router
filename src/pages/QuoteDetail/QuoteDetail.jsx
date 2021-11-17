import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import { P } from '.';

import Comment from '../../comments';
import HighlightedQuote from '../../quotes/HighlightedQuote';
import { quotesArray } from '../../../data/dummyData';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const thisQuote = quotesArray.find((elem) => elem.id === params.quoteId);

  if (!thisQuote) {
    return <p>thisQuote doesnt exist</p>;
  }

  return (
    <div>
      <HighlightedQuote text={thisQuote.quote} author={thisQuote.author} />
      <Route path={match.path} exact>
        <Link to={`${match.url}/comments`}>
          <P>load comments</P>
        </Link>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comment />
      </Route>
    </div>
  );
};

export default QuoteDetail;
