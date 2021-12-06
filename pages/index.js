import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    //中央寄せを実現
    <Layout title="Home">
      <p className="text-4xl">ようこそ NextJsへ</p>
    </Layout>
  );
}
