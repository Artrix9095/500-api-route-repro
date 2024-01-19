import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch("/api/test").then((r) => r.json());

  return <h1>Hello {res.world}</h1>;
}
