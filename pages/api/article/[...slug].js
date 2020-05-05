import nextConnect from 'next-connect';
import middleware from '../../../middlewares/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {
        query: { slug },
      } = req
    let doc = await req.db.collection('posts').find({heading:slug[0],date:slug[1]}).toArray()
    res.json(doc);
});

export default handler;