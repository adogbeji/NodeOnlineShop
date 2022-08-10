exports.get404 = (req, res, next) => {  // 'catch-all' route for dealing with unhandled routes
    res.status(404).render('404', { pageTitle: 'Page Not Found!', path: '/404'});
};