import React from 'react';
import { Button, Eyebrow } from 'payload/components/elements';


const NewPageCreate = () => {

    return (
        <>
        <Eyebrow/>
            <h1>Page Create</h1>

            <form>
            <label htmlFor="page_title">Page Title</label>
            <input type="text" id="page_title"  name="Page Title" />
            <br/><br/>
            <label htmlFor="page_author">Page Description</label>
            <input type="text" id="page_author"  name="author" />
            <br/><br/>
            <label htmlFor="page_code">Page Description</label>
            <input type="text" id="page_code"  name="pageCode" />

            </form>
        </>
    )
}

export default NewPageCreate;