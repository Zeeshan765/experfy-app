import { useState, useCallback } from "react";
export const useSelectPageId=()=>{
    const [pageId, setPageId] = useState ("");
    const setselectPageId = (id) => {
        setPageId(id);
    };
    return { pageId, setselectPageId };
}