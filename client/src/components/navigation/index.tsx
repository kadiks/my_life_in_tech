import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <nav>
      <div className="content">
        <Link href="/">
          <a className="brand">My life in tech</a>
        </Link>
        <div className="menu">
          <Link href="/add-experience/">
            <a className="active">Ajouter mon expérience</a>
          </Link>
          <Link href="/about/">
            <a>A propos</a>
          </Link>
        </div>
      </div>
      <div className="bar"></div>
    </nav>
  );
};
