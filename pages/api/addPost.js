import excuteQuery from "../db";
export default async function handler(req, res) {
  try {
    console.log("req.body---",req)
    // const data = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     image: req.body.image
    // };
    // console.log("data---",data)
    // const result = await excuteQuery({
    //     query: 'INSERT INTO posts (title, description, image) VALUES("abc","test","cvdfv")',
    //     // values: [data.title,data.description,data.image],
    // });
    // console.log(result, "mmm11");
    // return result;
  } catch (error) {
    console.log(error);
  }
}


// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };
export const config = {
  api: {
    externalResolver: true,
    bodyParser: false
  },
}