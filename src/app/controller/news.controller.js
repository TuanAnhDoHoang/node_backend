class NewsController{
    // [GET] /news
    index(req, res){
        console.log(req);
        res.render('news')
    }
    slug(req, res){
        res.send('new detail');
    }
}
module.exports = new NewsController;