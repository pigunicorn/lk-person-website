import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  
  const imageWidth = params.category === "applications" ? 450 : undefined;
  const imageHeight = params.category === "applications" ? 580 : undefined;
  const isfill = params.category === "applications" ? false : true;
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={isfill}
              src={item.image}
              alt=""
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
