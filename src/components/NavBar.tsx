import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar position="static" className="flex justify-center align-middle w-full h-10">
        <Link href="/"><p className=" font-extrabold text-emerald-400">Soliloquy</p></Link>

        <NavbarContent>
            <NavbarItem>
                <Link href="/posts">Posts</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/about">About</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/contact">Contact</Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent >
            <NavbarItem>
                <Link href="/signup">Login or Sign Up</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}
