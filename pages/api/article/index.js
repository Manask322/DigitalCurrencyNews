import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('posts').find({news_type:'heading'}).toArray()
    res.json(doc);
});

export default handler;