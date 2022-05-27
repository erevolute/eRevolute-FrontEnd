import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function DashboardNav() {
  const [user , loading , error] = useAuthState(auth);
  return (
    <nav className="navbar navbar2">
    <div className="container">
    <button
            className="btn button-offcanvas"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
         ≣≣
          </button>
      <div className="div ms-auto text-white">{user?.email}</div>
    </div>
  </nav>
  )
}

export default DashboardNav;