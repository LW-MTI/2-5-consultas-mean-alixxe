const router = require('express').Router();
const handler = require('../utils/handler');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//conecta con la base de datos
mongoose.connect('mongodb://localhost:27017/unidad2', {
  useMongoClient: true
});

const User = require('../models/user.model');

module.exports = () => {
//siempre es igual
    router.get('/', (req, res) => {
        User.find({})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        User.find({_id:id})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    
    router.get('/name/:name', (req, res) => {
        const nombre = req.params.name;
        User.find({name:nombre})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    router.get('/email/email:', (req, res) => {
        const correo = req.params.email;
        User.find({email:correo})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });


/*----Inserciones---*/

router.post('/', (req, res) => {
    //Recibir parametros

    const usuario =  req.body;
    
    User.create(usuario)
        .then(
            function(data){
                console.log(data);
                res.json(data);

            }
        )
        .catch(
            function (err){
                console.log(err);
                res.status(400);
                res.json({error:err});
            }
        )
    });
   
    /* Eliminar */
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
                
        User.remove({_id:id}, function(err,data){
            if(err){
                console.log(err);
                res.status(400);
                res.json({error:err});
            }else{
                res.json(data);
            }
            
        })
        
    });

 //modificar
 router.put('/:id', (req, res) => {
    var id = args._id;
    var updateObj = {updatedDate: Date.now()};
    _.extend(updateObj, args);

    Model.findByIdAndUpdate(id, updateObj, function(err, model) {
        if (err) {
            logger.error(modelString +':edit' + modelString +' - ' + err.message);
            self.emit('item:failure', 'Failed to edit ' + modelString);
            return;
        }
        self.emit('item:success', model);
    });
    });

    return router;
}