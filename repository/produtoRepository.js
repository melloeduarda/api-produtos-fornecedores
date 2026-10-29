import conexao  from "../database/conexao";

export async function buscarPorId(id) {
    const sql = "select * from produtos where id_produto = ?";
    const [produtos] = await conexao.execute(sql, [id]);

    return produtos[0];
}

export async function vincularProduto(idProduto, idFornecedor) {
    const sql = "update produtos set fk_id_fornecedor = ? where id_produto = ?";

    const [resultado] = await conexao.execute(sql, [
        idFornecedor,
        idProduto
    ]);

    return resultado.affectedRows;
}

export async function removerFornecedor(idProduto) {
   const sql = "update produtos set fk_id_fornecedor = null where id_prosuto = ?";
   
   const [resultado] = await conexao.execute(sql, [idProduto]);

   return resultado.affectedRows;
}