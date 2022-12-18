import React from "react";
import Card from "./Card";
import SkillSection from "./SkillSection";
import kalkulatorImg from "/public/img/kalkulator-img.jpg";
import bdcaImg from "/public/img/bdca-img.jpg";
import Project from "./Project";
import bidarBlog from "/public/img/bidar-blog.jpg";
export default function Content() {
  return (
    <div className="my-7">
      <SkillSection />
      <h1 className="mb-5 text-center text-sky-600 text-2xl mt-10">My Projects</h1>
      <div className="flex flex-col lg:flex-row items-center flex-wrap">
        <Project
          title={"Kalkulator"}
          img={kalkulatorImg}
          link="https://mardiansyah17.github.io/kalkulator-v2/"
          description={`Ini adalah project tugas kuliah saya yaitu membuat kalkulator project
        ini saya buat menggunakan Taildiwnd dan ReactJs`}
        />
        <Project
          title={"Website Bina Darma Cyberarmy"}
          img={bdcaImg}
          link="https://www.bidarcyberarmy.org/"
          description={`Saya membantu di bagian frontend untuk membuat website organisasi Bina Darma Cyberarmy menggunakan TailwindCSS dan React`}
        />
        <Project
          title={"Website Bloging system"}
          img={bidarBlog}
          link="https://ti-bidar.com/"
          description={`Saya membuat Bloging system menggunakan Laravel dan ReactJs`}
        />
      </div>
    </div>
  );
}
