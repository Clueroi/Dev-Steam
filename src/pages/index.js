import styled from 'styled-components'

import Head from 'next/head'
import Navbar from '../components/navbar/navbar.jsx'
import H2 from '@/components/typography/H2.jsx'

const StyledContainer= styled.div`
    max-width:1000px;
    margin: 40px 0;
    padding:0 40px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <StyledContainer>
        <div>
          <H2>Novos Produtos</H2>
        </div>
        <div>
          <H2>Outros Jogos</H2>
        </div>
      </StyledContainer>
      
    </>
  )
}
