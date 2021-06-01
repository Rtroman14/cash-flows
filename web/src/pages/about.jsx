import React from "react";
import Typical from "react-typical";

import Layout from "../components/layout";

export default function Dashboard() {
    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                }}
            >
                <Typical
                    steps={["Soon...", 1000, "Be Patient,", 1500, "It's coming... 😄", 2500]}
                    loop={Infinity}
                    wrapper="h1"
                />
            </div>
        </Layout>
    );
}
