import React from 'react'

function DashboardNav() {
  return (
    <nav className="navbar p-5 navbar-light bg-light">
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
    </div>
  </nav>
  )
}

export default DashboardNav;