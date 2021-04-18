import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import MenuData from '../static/MenuData'
import DiagnoseForm from './components/DiagnoseForm'
import DiagnoseList from './components/DiagnoseList'
import './styles.css'

export default function MyApp() {
  const [menu, selectedMenu] = useState(MenuData.HOME)
  const [print, setPrint] = useState(false)

  const onPrint = () => {
    setPrint(true)
  }

  useEffect(() => {
    if(print) {
      window.print()
      setPrint(false)
    }
  }, [onPrint])

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Animal Diagnose</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <main>
        {!print && <div className="header" />}
        <div className="container">
            <h1 className="title">
            Aplikasi Diagnosa Hewan
            </h1>
            <div style={{margin:"1rem 0rem"}}>
              {
                !print && (
                  <>
                    <button className="btn btn-primary" onClick={() => selectedMenu(MenuData.HOME)}>Beranda</button>
                    <button className="btn btn-secondary" onClick={() => selectedMenu(MenuData.FORM)}>Tambah Data</button>
                    {menu === MenuData.HOME && <button className="btn btn-secondary" onClick={onPrint}>Cetak Data</button>}
                  </>      
                )
              }
            </div>
            {menu === MenuData.FORM && <DiagnoseForm onSubmit={() => selectedMenu(MenuData.HOME)} />}
            {menu === MenuData.HOME && <DiagnoseList />}
        </div>
      </main>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
