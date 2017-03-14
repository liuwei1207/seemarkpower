var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./Home/index.html', {
        title: 'seemarkpower'
    });
});

/* GET about index page. */
router.get('/about/index', function(req, res, next) {
    res.render('./About/index.html', {
        title: 'seemarkpower'
    });
});

/* GET about honor page. */
router.get('/about/honor', function(req, res, next) {
    res.render('./About/honor.html', {
        title: 'seemarkpower'
    });
});

/* GET about info page. */
router.get('/about/info', function(req, res, next) {
    res.render('./About/info.html', {
        title: 'seemarkpower'
    });
});

/* GET about cnews page. */
router.get('/about/cnews', function(req, res, next) {
    res.render('./About/cnews.html', {
        title: 'seemarkpower'
    });
});

/* GET about inews page. */
router.get('/about/inews', function(req, res, next) {
    res.render('./About/inews.html', {
        title: 'seemarkpower'
    });
});


module.exports = router;
