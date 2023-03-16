//let cliente = ""
let dineroPF = 0
let bank = ""
let interes = 0
let days = 0
const TNA = 0.75

class Cliente {

    constructor (nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

function saveCliente() {
    while(true){
        Nombre = prompt("Ingrese su Nombre")
        if(Nombre != "" && Nombre != null){
            break;
        } else {
            alert('Nombre Incorrecto')
            continue;
        }
    }
    while(true){
        Apellido = prompt("Ingrese su Apellido")
        if(Apellido != "" && Apellido != null){
            break;
        } else {
            alert('Apellido Incorrecto')
            continue;
        }
    }
    while(true){
        Email = prompt("Ingrese su Email")
        if(Email != "" && Email != null){
            break;
        } else {
            alert('Email Incorrecto')
            continue;
        }
    }

    const ClienteWeb = new Cliente(Nombre, Apellido, Email);
    return ClienteWeb
}

function moneyConvert() {
    while(true){
        dineroPF = parseFloat(prompt("Ingrese el monto a ingresar en el Plazo Fijo"))
            if (!isNaN(dineroPF) && dineroPF != null && dineroPF != "" && dineroPF > 0) {
                break;
            } else {
                alert("El monto ingresado no es correcto")
                continue;
            }
    }
}

function saveBank() {
    while(true){
        bank = prompt("Ingrese su Banco (BBVA - Supervielle - BNA")
        switch (bank.toLowerCase()) {
            case "bbva":
                bank = "Banco BBVA"
                interes = 0.3
                return false
            case "supervielle":
                bank = "Banco Supervielle"
                interes = 0.4
                return false
            case "bna":
                bank = "Banco Nación"
                interes = 0.8
                return false
            default:
                alert("No ha ingresado un banco correcto")
                continue;
        }
    }
}

function saveDays() {
    while(true){
        days = parseInt(prompt("Ingrese por cuantos días quiere generar su Plazo Fijo. Siendo mayor o igual a 15 días y menor o igual que 60"))
            if (days >= 15 && days <= 60) {
                break;
            } else {
                alert("El día ingresado es menor que 15 o mayor a 60")
                continue;
            }
    }
}

function emularPrestamo(){
    let interesesConsolidados = 0
    let capitalFinal = 0
    ClienteWeb = saveCliente()
    moneyConvert()
    saveBank()
    saveDays()
    //console.log(cliente)
    console.log(dineroPF)
    console.log(bank)
    console.log(interes)
    console.log(days)
    interesesConsolidados = (((( (TNA + interes) / 365 ) * days).toFixed(4)) * 100)
    capitalFinal = ((interesesConsolidados * dineroPF) / 100)
    capitalFinal = capitalFinal + dineroPF
    console.log(capitalFinal)
    divResultEmulador = document.getElementById("resultEmulador");
    divResultEmulador.innerHTML = "<h1><a href='#'>" + ClienteWeb.nombre + " " + ClienteWeb.apellido + "</a></h1><p>Su Plazo Fijo emulado a <b>" + days + "</b> días en el <b>" + bank + "</b><br /> le dará como un saldo final la suma de <b>$" + capitalFinal + "</b>.<br /> La información ha sido enviada a su casilla de email: <b>" + ClienteWeb.email + "</b>";
}