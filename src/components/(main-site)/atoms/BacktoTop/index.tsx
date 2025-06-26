"use client"

import { useEffect, useState } from 'react';
import './BacktoTop.css';
import { ArrowUp } from 'lucide-react';

const BacktoTop = () => {
    const [show, setShow] = useState(false);

      useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return show ? (
        <button
            className={`BacktoTop${show ? ' show' : ''}`}
            onClick={handleClick}
            aria-label="Voltar ao topo"
            tabIndex={show ? 0 : -1}
        >
            <ArrowUp className='icon-seta' />
        </button>
    ) : null;
};

export default BacktoTop;