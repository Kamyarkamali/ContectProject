import { useRouter } from "next/router";
import React from "react";

function ServicesId() {
  const router = useRouter();

  console.log(router);

  return <div>ServicesId</div>;
}

export default ServicesId;
