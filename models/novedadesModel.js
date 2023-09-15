var pool = require('./bd');

// listo las novedades desde la base de datos.


async function getNovedades(){

    var query = 'select * from novedades order by id desc';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj){
try{    
    var query = 'insert into novedades set ?';
    var rows = await pool.query(query, [obj])
    return rows;
} catch (error) {
    console.log(error);
    throw error;
} // cierra catch
} //cierra insert


async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

// la info de 1 sola novedad para modificar después.
async function getNovedadById(id){
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0]; // 0 es para que me traiga 1 sola novedad.

}

/* para modificar UPDATE de los datos*/
async function modificarNovedadesById(obj, id){
    try{
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error) {
       throw error;
    }
}


module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadById, modificarNovedadesById  };

