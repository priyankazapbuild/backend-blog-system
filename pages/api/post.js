// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "../db";
export default function handler(req, res) {
  try {
    // const title = req.body.title;
    // const description = req.body.description;
    const result = excuteQuery({
      query: 'SELECT * FROM posts',
      // values: [title],
    });
    console.log(result, "mmm");
    return result;
    // res.status(200).json({result});
  } catch (error) {
    console.log(error);
  }
}
