import React from "react";
import fs from "fs";
import path from "path";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <header className="w-full">
        <NavBar />

    </header>
  );
}


export async function getStaticProps() {

    const files = fs.readdirSync(path.join("/static/posts"));
    console.log(files);
    return {
      props: {
        title: "Soliloquy",
        description: "Personal Blogging Website",
      },
    };
}