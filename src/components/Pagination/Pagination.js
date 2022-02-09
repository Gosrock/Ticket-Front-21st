import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MessageValidationProcess from '../MessageValidationProcess/MessageValidationProcess';
import TicketingProcess from '../TicketingProcess/TicketingProcess';
import TestPage from '../TestPage';
import './Pagination.css';
import ListProcess from '../ListProcess/ListProcess';
import TicketCodePage from '../ListProcess/TicketCodePage/TicketCodePage';
// 모달용 - 전체 컨테이너의 크기 받아서 넘겨줌
import { handleResize } from '../../config/handleResize';

function Pagination() {
  const location = useLocation();

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { slideFromDirection } = useSelector(state => state.routePagination);
  return (
    <TransitionGroup
      className="transitions-wrapper"
      childFactory={child => {
        return React.cloneElement(child, {
          classNames: slideFromDirection
        });
      }}
    >
      <CSSTransition
        key={location.pathname}
        classNames={slideFromDirection}
        timeout={1000}
      >
        <Routes location={location}>
          <Route path="/test" element={<TestPage />} />
          <Route path="/test2" element={<TestPage />} />
          <Route
            path="/tickets/:ticketId"
            element={<TicketCodePage style={{ position: 'absolute' }} />}
          />
          <Route
            path="/ticketing/*"
            element={<TicketingProcess location={location} />}
          />
          <Route path="/list/*" element={<ListProcess location={location} />} />
          <Route
            path="/auth/*"
            element={<MessageValidationProcess location={location} />}
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Pagination;
