import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MessageValidationProcess from '../MessageValidationProcess/MessageValidationProcess';
import TicketingProcess from '../TicketingProcess/TicketingProcess';
import TestPage from '../TestPage';
import './Pagination.css';

function Pagination() {
  const location = useLocation();

  const { slideFromDirection } = useSelector(state => state.routePagination);

  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition
        key={location.pathname}
        classNames={slideFromDirection}
        timeout={300}
      >
        <Routes location={location}>
          <Route
            path="/ticketing/*"
            element={<TicketingProcess location={location} />}
          />
          <Route
            path="/auth/*"
            element={<MessageValidationProcess location={location} />}
          />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Pagination;
