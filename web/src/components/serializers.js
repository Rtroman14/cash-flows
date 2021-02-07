import React from "react";
import Figure from "./Figure";

const serializers = {
    types: {
        authorReference: ({ node }) => <span>{node.author.name}</span>,
        mainImage: Figure,
    },
};

export default serializers;

// https://www.youtube.com/watch?v=fKXGTJ0NA5c
