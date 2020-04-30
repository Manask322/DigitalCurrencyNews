import nextConnect from 'next-connect';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcryptjs';
import middleware from '../../middlewares/middleware';
const handler = nextConnect();


handler.use(middleware);

handler.post( async (req, res) => {
  const { news_type, heading, subheading, author, content, image } = req.body;
  
  const article = await req.db
    .collection('posts')
    .insertOne({ news_type, heading, subheading, author, content, image })
    .then(({ ops }) => ops[0]);
    console.log(article)
    res.status(201).json({
        msg: "Article Added"
    });
});

export default handler;
