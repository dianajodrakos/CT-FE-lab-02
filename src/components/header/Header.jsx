import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>Animal Crossing Villagers</h1>
      </Link>
    </div>
  );
}
