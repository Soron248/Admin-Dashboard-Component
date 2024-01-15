import Invoice from "@/Components/Invoice/Invoice";
import React from "react";

export default function page() {
  return (
    <section className="max-w-full flex justify-center mx-auto mt-5 py-10 px-5 md:px-20 lg:px-28">
      <Invoice />
    </section>
  );
}
