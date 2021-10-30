class SiteController{
    index(req, res, next){
        return res.json('Hello everyone');
    }
}

module.exports =new SiteController;