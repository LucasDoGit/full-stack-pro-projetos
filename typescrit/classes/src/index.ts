import { connection, statusConnection } from './database/connection'
import status, { resetarBanco } from './database/aplicativo';

function acessarSistema() {
    connection({ ip: "192.168.2.222", name: "MongoDB" })
}

// usando o export
acessarSistema();
statusConnection();
// usando o export default e tambem o export
status();
resetarBanco();