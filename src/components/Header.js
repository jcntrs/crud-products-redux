import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link to="/" className="text-light">CRUD Products Redux</Link>
                </h1>
            </div>
            <Link to="/productos/nuevo" className="btn btn-success nuevo-post d-block d-md-inline-block">Agregar Producto</Link>
        </nav>
    );
}

export default Header;