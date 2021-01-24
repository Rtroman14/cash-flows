import React, { createContext, useState } from "react";

export const PostCategoryContext = createContext();

export function PostProvider(props) {
    const [category, setCategory] = useState(0);
    const changeCategory = selectedCategory => setCategory(selectedCategory);

    return (
        <PostCategoryContext.Provider value={{ category, changeCategory }}>
            {props.children}
        </PostCategoryContext.Provider>
    );
}
