let conn = require('./db');

module.exports = {
    getMenus(){
        // A promise returns reject or resolve 
        return new Promise((resolve,reject) =>{

            //to execute the query 
            conn.query(`
                SELECT * FROM tb_menus ORDER BY title
            `,(err,results) => {
                if(err){
                    reject(err);
                }

                resolve(results);
            });
        });
    }
}

