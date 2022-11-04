const { Register } = require("../models");

const playerController = {
    async list(req, res) {
      console.log(req.body)
      const registers = await Register.findAll({ include : ['player','penalty'],
        where: {
           paid_status: false,active: true
        }
      });
      res.render('setPayment', { registers });
    },
    async registerPaid(req,res) {

        
        const register = req.body;

        //These lines put the ID of the ticked register in an array
        registerID = []
        values = Object.entries(register)
        for(value of values) {
            registerID.push(value[0])
        }

        console.log(registerID)
        await Register.update({ paid_status: true }, {
            where: {
               id: registerID
            }
          });
          res.redirect('/setPayment');
    
    }
}

module.exports = playerController