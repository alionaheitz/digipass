import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Landing/Layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to digipass!</title>
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Home;
