class news_controller{
    // [GET] /news
    index(req, res){
        res.render('news')
    }
}
module.exports = new news_controller;