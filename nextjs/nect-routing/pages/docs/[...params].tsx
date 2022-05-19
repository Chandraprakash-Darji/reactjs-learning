import { useRouter } from "next/router";
import React from "react";

const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);
    if (params.length === 2)
        return (  
            <h1>
                Veiwing docs for feature {params[0]} and concept {params[1]}
            </h1>
        );
    if (params.length === 1)
        return <h1>Veiwing docs for feature {params[0]}</h1>;
    return <h2>Docs Home Page</h2>;
};

export default Docs;
