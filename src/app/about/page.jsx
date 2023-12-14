import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
          Creating attractive digital products
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
          Hello, I'm LiangKang, a front-end developer passionate about 
          crafting immersive digital experiences. With expertise in HTML, 
          CSS, and JavaScript, I bring creativity and precision to every project. 
          Beyond coding, I enjoy exploring the latest design trends and technologies.
           Let's connect and bring innovative web solutions to life!
          </p>
          <h1 className={styles.title}>Personal Skills</h1>
          <p className={styles.desc}>      
          Front end language:JAVASCRIPT, HTML5, CSS3, ES6,TS GIT, 
          GITEE, REACT, REACT-ROUTER, REACT-HOOKS, REDUX, VUE3,
           VUE-ROUTER, PINIA, AXIOS, NEXTJS, UNI-APP.
          <p>
          Backend language:JAVA, SPRINGBOOT, MYSQL, SQL, NODEJS,
          MYBATIS.
          </p>
          <p>
          Component library:ELEMENT-PLUS, ANT-DESIGN, MUI, ANT-DESIGN-VUE, VANT.
          </p>
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.desc}>
         <h3>Personal project</h3>
         1.React management backend:
         <p>https://gitee.com/cplk/react-demo.git</p>
         <br />
         2.Mini Program Mall:
         <p>https://gitee.com/cplk/uni-app-vue3-ts.git</p>
         <br />
         3.Personal homepage:
         <p>https://gitee.com/cplk/nextjs-demo.git</p>
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
