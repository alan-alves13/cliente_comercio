export interface Usuario {
    id: number;
    nome: string;
    cpf: number;
    email: string;
    tipo: string;
    senha: number;
    data_nascimento: string;
    foto: string;
    cliente: boolean;
    administrador: boolean;
}