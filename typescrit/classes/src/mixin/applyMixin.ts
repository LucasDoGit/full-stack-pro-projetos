// Isso pode estar em qualquer lugar em sua base de código:
export function aplicarMixins(derivadoCtor: any, construtores: any[]) {
    construtores.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((nome) => {
        Object.defineProperty(
          derivadoCtor.prototype,
          nome,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, nome) ||
            Object.create(null)
        );
      });
    });
}