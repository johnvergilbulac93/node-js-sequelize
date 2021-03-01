
module.exports =  {
     async register (req, res)  {
          const  User = require('../models/User.Model');
          
          try {
               const user = await User.create(req.body); 
               res.send(user.toJSON());
          } catch (error) {
               res.status(400).send({
                    error: "This email is already in use."
               });

          }  
     },
     async getUser (req, res)  {
          const  User = require('../models/User.Model');

          
          User.findAndCountAll().then( (users) =>{
               return res.status(200).json({
                    status: true,
                    innerData: users
                })
          }).catch( (err) => { 
               res.status(500).send({
                    error: "Something was wrong"
               });
          });
     }
};