"use client";
import Button from "@/components/button";
import Image from "next/image";
import { Alert } from "flowbite-react";

export default function Example() {
  return (
    <div className="divide-x divide-blue-200 text-black flex flex-row">
      <Alert color="info">Alert!</Alert>
    </div>
  );
}
