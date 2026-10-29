import { Produto } from "../model/Produto.js";
import { Fornecedor } from "../model/Fornecedor.js";
import { buscarPorId, vincuarFornededor, removerFornecedor } from "../repository/produtoRepository.js";
import { buscarPorId as buscarFornecedorPorId } from "../repository/fornecedorRepository.js";

export async function vincularFornecedorAoProduto(req, res) {
    try{
        const idProduto = Number(req.params.idProduto);
        const idFornecedor = Number(req.params.idFornecedor);

        Produto.validarId(idProduto, "produto");
        Fornecedor.validarId(idFornecedor);

        const produto = await buscarProdutoPorId(idProduto);
        const fornecedor = await buscarFornecedorPorId(idFornecedor);

        if (!produto || !fornecedor){
            return res.status(404).json({
                mensagem: "Produto ou fornecedor não encontrado"
            });
        }

        await vincuarFornededor(idProduto, idFornecedor);

        return res.status(200).json({
            mensagem: "Fornecedor vinvulado ao produto com sucesso",
            id_produto: idProduto,
            fk_id_fornecedor: idFornecedor
        });
    }catch (erro){
        return res.status(400).json({
            mensagem: erro.mensagem
        });
    }
}

export async function removerFornecedorDoProduto(req, res) {
    try{
        const idProduto = Number(req.params.idProduto);

        Produto.validarId(idProduto, "produto");

        const produto = await buscarProdutoPorId(idProduto);

        if(!produto) {
            return res.status(404).json({
                mensagem: "Fornecedor removido do produto com sucesso"
            });
        }
    }catch (error) {
        return res.status(400).json({
            mensagem: erro.mensagem
        });
    }
}

