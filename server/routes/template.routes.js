const TemplateController = require("../controllers/template.controller");

module.exports = (app) => {
    app.get('/api/templates', TemplateController.index);
    app.post('/api/templates', TemplateController.create);
    app.get('/api/templates/random', TemplateController.random);
    app.get('/api/templates/:id', TemplateController.show);
    app.put('/api/templates/:id', TemplateController.update);
    app.delete('/api/templates/:id', TemplateController.destroy);
}

