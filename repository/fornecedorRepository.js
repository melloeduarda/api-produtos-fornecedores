import conexao from "../database/conexao.js";

export async function cadastrar(fornecedor) {
  const sql = "INSERT INTO fornecedores (nome, cnpj) VALUES (?, ?)";
  const [resultado] = await conexao.execute(sql, [
    fornecedor.nome,
    fornecedor.cnpj
  ]);

  return resultado.insertId;
}

export async function listar() {
  const sql = "SELECT * FROM fornecedores ORDER BY id_fornecedor";
  const [linhas] = await conexao.execute(sql);

  return linhas;
}

export async function buscarPorId(id) {
  const sql = "SELECT * FROM fornecedores WHERE id_fornecedor = ?";
  const [fornecedores] = await conexao.execute(sql, [id]);

  return fornecedores[0];
}

export async function atualizar(id, fornecedor) {
  const sql = "UPDATE fornecedores SET nome = ?, cnpj = ?";
  const [resultado] = await conexao.execute(sql, [
    fornecedor.nome,
    fornecedor.cnpj,
    id
  ]);

  return resultado.affectedRows;
}

export async function excluir(id) {
  const sql = "DELETE FROM fornecedores WHERE id_fornecedor = ?";
  const [resultado] = await conexao.execute(sql, [id]);

  return resultado.affectedRows;
}
