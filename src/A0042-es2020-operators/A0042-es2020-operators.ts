
// A0042-es2020-operators.ts

// Encadeamento opcional (?.) e Operador de Coalescência Nula (??)

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: "Documento de exemplo",
    texto: "Este é um documento de exemplo.",
    //data: new Date()
};

console.log(documento.data?.toLocaleDateString() ?? "Data não disponível-01.");
console.log(undefined ?? "Data não disponível-02.");
console.log(null ?? "Data não disponível-03.");
console.log(false ?? "Data não disponível-04.");
console.log(0 ?? "Data não disponível-05.");
console.log("" ?? "Data não disponível-06.");
