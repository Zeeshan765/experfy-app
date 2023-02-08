export const adminPageTemplate = () => {
  ((pageCode) => {
    axios
      .post(`${apiEndPoint}/page-Template`, {
        title: "TalentCloud Overview Page",
        pageCode,
      })
      .then((res) => {
        clearLocalStorage();
        toast.success("Changes saved successfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  })();
};
