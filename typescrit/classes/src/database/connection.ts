type Connection = {
    ip: string;
    name: string;
}

export function connection(info: Connection): boolean {
    console.log("====================================")
    console.log("Conexão com DB realizada com sucesso", info.ip)
    console.log("====================================")
    return true;
}

export function statusConnection(): void {
    console.log("Servidor está ativo")
}