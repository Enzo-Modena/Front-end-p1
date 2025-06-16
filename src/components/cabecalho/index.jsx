'use client';

import { useState } from 'react';
import styles from './page.module.css'; 
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo Afterlife" width={60} height={60} />
      </div>

      <nav className={styles.mainNav}>
        <Link href="/">HOME</Link>
        <Link href="/sobre">SOBRE</Link>
        <Link href="/ingressos">INGRESSOS</Link>
        <Link href="/hospedagem">HOSPEDAGEM</Link>
      </nav>

      <div className={styles.actionItems}>
        <FaShoppingCart className={styles.cart} />
        <Link href="/login?mode=login" className={styles.loginBtn}>
          <FaUser className={styles.icon} />
          ACESSAR
        </Link>
      </div>
    </header>
  );
}

