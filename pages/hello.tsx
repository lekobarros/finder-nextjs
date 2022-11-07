import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import ButtonA from '../components/A';
import ButtonB from 'components/B/index.tsx';

const Hello: NextPage = () => {
  return (
    <div>
      <div style={{ position: "absolute", zIndex: "0", top: "50%", left: "50%", width: "16rem", height: "16rem", transform: "translate(-50%, -50%)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ButtonB width="160" height="160" opacity="0" onClick={() => alert(123)}/>
        <ButtonB width="256" height="256" delay="0" opacity="0.6" />
        <ButtonB width="384" height="384" delay="0" opacity="0.8"/>
        <ButtonA>Find</ButtonA>
      </div>
    </div >
  )
}

export default Hello;