import Head from 'next/head';

import { Container, Title } from '@components/layout';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Home</Title>
    </Container>
  );
}
