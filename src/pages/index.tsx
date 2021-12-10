import Head from 'next/head';

import { Container, Title } from '@components/layout';
import {Test} from '@components/test';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Home</Title>

      <Test message='im the message prop'> I'm a child prop </Test>

    </Container>
  );
}
