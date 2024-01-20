"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const res = fetch("/api/test")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return <h1>Hello {data?.hello}</h1>;
}
