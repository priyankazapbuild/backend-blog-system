// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "../db";
// console.log("inside");
// const app = require('express')();

// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true,
// }));
export default async function handler(req, res) {
  try {
    const result = await excuteQuery({
        query: 'SELECT * FROM posts',
        values: [],
    });
    // console.log(result, "mmm");
    return result;
  } catch (error) {
    console.log(error);
  }
}