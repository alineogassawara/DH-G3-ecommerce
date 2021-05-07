import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from "react";
import { Button } from "react-bootstrap";
import {
  FormGroup,
  Input,
  Label, Modal,
  ModalBody,
  ModalFooter, ModalHeader
} from "reactstrap";
import "./style.css";

const ModalAtualizar = ({product}) => {
  const [nome, setNome] = useState(product.nome)
  const [categoria, setCategoria] = useState(product.categoria)
  const [estoque, setEstoque] = useState(product.estoque)
  const [preco, setPreco] = useState(product.preco)

  return (
    <Modal id="myModal" isOpen={true}>
      <ModalHeader>{`Atualizar produto ${product.nome} de id ${product.id}`}</ModalHeader>
      <ModalBody>
      <FormGroup>
          <Label htmlFor="password">Produto:</Label>
          <Input type="text" id="categoria" value={nome} onChange={(e)=>setNome(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Categoria:</Label>
          <Input type="text" id="categoria" value={categoria} onChange={(e)=>setCategoria(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Estoque:</Label>
          <Input type="text" id="estoque" value={estoque} onChange={(e)=>setEstoque(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Preço:</Label>
          <Input type="text" id="preco" value={preco} onChange={(e)=>setPreco(e.target.value)}/>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button id="buttonNAV" className="btn btn-primary" href="/dashboard/produto/Atualizar/:id">
          Atualizar
        </Button>
        <Button id="buttonNAV" className="btn btn-secondary" href="/dashboard">
          Sair
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAtualizar;
