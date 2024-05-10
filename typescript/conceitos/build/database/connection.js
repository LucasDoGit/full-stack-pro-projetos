"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConnection = exports.connection = void 0;
function connection(info) {
    console.log("====================================");
    console.log("Conexão com DB realizada com sucesso", info.ip);
    console.log("====================================");
    return true;
}
exports.connection = connection;
function statusConnection() {
    console.log("Servidor está ativo");
}
exports.statusConnection = statusConnection;
