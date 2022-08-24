import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home';
import { ContextProvider } from '../state/rootContext';
import styles from '../styles/Home.module.css'
// const data = require('../data/data.json');

const Index: NextPage = () => {
  return (
    <ContextProvider>
        <div>
          <Home />
        </div>
    </ContextProvider>
  )
}

export default Index
