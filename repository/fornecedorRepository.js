import conexao from "../database/conexao.js";

export async function buscarPorId(id) {
    const sql = "select * from fornecedores where id_fornecedor = ?";
    const [fornecedores] = await conexao.execute(sql, [id]);

    return fornecedores[0];
}