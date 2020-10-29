const api = require('./controllers');



function router(app){
    app.get("/api/GetAllPhoto",api.GetAll),
    app.post("/api/NewPhoto",api.Create),
    app.get("/api/:main_id",api.GetOne),
    app.put("/api/UpdatePhoto/:main_id",api.Edit),
    app.delete("/api/DestroyPhoto/:main_id",api.Delete)



    return app;
}

module.exports = router;