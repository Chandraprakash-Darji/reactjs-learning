import { useRouter } from "next/router";
import React from "react";

const Review = () => {
    const router = useRouter();
    const { productId, reviewId } = router.query;
    return <h1>Review about Product {productId} is {reviewId} </h1>;
};

export default Review; 
