const newsRouter = require('./news.route');
const siteController = require('./site.route');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteController);
}

module.exports = route;
