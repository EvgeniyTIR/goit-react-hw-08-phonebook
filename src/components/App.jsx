import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Refreshing  user ...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
// import { selectError, selectIsLoading } from "redux/selectors";

// import { ContactForm } from "./ContactForm/ContactForm";
// import {ContactList} from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//     return (
//       <div>

//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         <Filter />

//         <ContactList />

//         {isLoading && !error && <b>Request in progress...</b>}

//       </div>
//     )

// };
