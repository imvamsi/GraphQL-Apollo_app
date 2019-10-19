const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

//runs on PORT during deployment else runs on 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
