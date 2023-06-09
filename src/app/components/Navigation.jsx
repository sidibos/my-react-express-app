import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
    <div>
        <Link to="/dashboard">
            <h1>
                Dashboard
            </h1>
        </Link>
    </div>
)

export const ConnectNavigation = connect(state => state) (Navigation);