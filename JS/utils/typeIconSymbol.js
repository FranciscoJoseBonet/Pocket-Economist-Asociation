export function iconTypeSymbol(type){
    switch(type){
        case "expense":
            return ["bi-graph-down-arrow", "Gasto"]
        case "balance":
            return ["bi-wallet2", "Saldo"]
        case "income":
            return ["bi-graph-up-arrow", "Ingreso"]
        case "savings":
            return ["bi-piggy-bank", "Ahorro"]
    }
}