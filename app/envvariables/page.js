const EnvirionmentVar = () => {
  console.log(process.env);
  console.log(process.env.NODE_ENV);

  console.log("API KEY IN .ENV FILE IS: ", process.env.API_KEY);
  return (
    <div>
      <h1>Environment Variables</h1>
    </div>
  );
};

export default EnvirionmentVar;
