export const source = `

   <div class="container px-5 py-24 mx-auto" style="text-align: center;">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-5" style="font-size:42px;
      font-weight:500;">Add your heading title here</h1>
        <p style="font-size:21px; line-height:1.5; font-weight:400;">Use the from module in order to reﬂect what information you want to collect.</p>

        <form style="text-align:left; width: 40%;
        margin: 50px auto;">
        <div class="form-group">
          <label style="font-size: 18px;
          font-weight: 500;">Email</label>
          <br>
          <input type="email" 
          data-gjs-type= "textarea"
          style="width: 100%;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;">
        </div>
        <br>
        <div class="form-group">
          <label style="font-size: 18px;
          font-weight: 500;">Name</label>
          <br>
          <input type="text" 
          data-gjs-type= "textarea"
          style="width: 100%;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;">
        </div>
        <br>
        <div class="form-group">
          <label style="font-size: 18px;
          font-weight: 500;">Message</label>
          <br>
          <textarea  data-gjs-type= "textarea"
          style="width:100%;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
          resize: none;" row="7" ></textarea>
        </div>
        <button type="submit" 
        data-gjs-type= "button"
        class="btn" style="margin-top: 20px;
        width: 100%;
        padding: 8px;
        background-color: #0a917f;
        color:#ffffff;
        border-radius: 5px;">Submit</button>
      </form>

   </div>
`;
