import { Produto } from "../model/Produto.js";
import { Fornecedor } from "../model/Fornecedor.js";
import { buscarPorId, vincuarFornededor, removerFornecedor } from "../repository/produtoRepository.js";
import { buscarPorId as buscarFornecedorPorId } from "../repository/fornecedorRepository.js";

export async function vincularFornecedorAoProduto(req, res) {
    try{
        const idProduto = Number(req.params.idProduto);
        const idFornecedor = Number(req.params.idFornecedor);

        Produto.validarId(idProduto, "produto");
        Fornecedor.vaid
    }catch{

    }
}

