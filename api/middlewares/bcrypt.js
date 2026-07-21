const bcrypt = require('bcrypt');
const saltRounds = 10;

async function codificar(item){
    return await bcrypt.hash(item, saltRounds)
}

async function comparar(item1,item2){
    return await bcrypt.compare(item1,item2)
}

module.exports = {codificar, comparar}