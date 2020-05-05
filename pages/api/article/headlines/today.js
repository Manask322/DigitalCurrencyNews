import nextConnect from 'next-connect';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

function makeDate(){
    const today_date = new Date()
    var date = today_date.getDate()
    if(date.toString().length == 1){
        date = "0" + date.toString()
    }
    var month = today_date.getMonth() + 1
    if(month.toString().length == 1){
        month = "0" + month.toString()
    }
    const year = today_date.getFullYear()
    return year.toString()+"-"+month+"-"+date  
}

handler.get(async (req, res) => {
    let doc = await req.db.collection('posts').find({date:makeDate(),news_type:"headlines"}).toArray()
    res.json(doc);
});

export default handler;