function route(app) {
    app.get('/', (req, res) => {
        res.render('home')
    })

    app.get('/search', (req, res) => {
        res.render('search')
    })

    app.post('/search', (req, res) => {
        console.log(req.query);
        res.render('')
    })

    app.get('/news', (req, res) => {
        res.render('news')
    })
}
module.exports = route;