import { useRouter } from "next/router";
import React from "react";

function CategoryDetailse() {
  const router = useRouter();
  const { title } = router.query;

  // console.log(title);

  return <div>CategoryDetailse</div>;
}

export default CategoryDetailse;
