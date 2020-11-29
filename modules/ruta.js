let Ruta = (function(numero){

    this.numero = numero;
    this.inicio = undefined;

    function addBase(newBase){
        
        if(this.inicio == null){
            this.inicio = newBase
            this.inicio.siguiente = this.inicio;
            this.inicio.anterior = this.inicio;
        } else {
            let aux = this.inicio;
            while(aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
            aux.siguiente = newBase;
            aux.siguiente.anterior = aux;
            aux.siguiente.siguiente = this.inicio;
            this.inicio.anterior = newBase;
        }
        return newBase
    }

    function searchBase(name){
        let aux = this.inicio;
        if (aux != null){
            while(aux.nombre != name && aux.siguiente != this.inicio){
                aux = aux.siguiente
            }
            if(aux.nombre == name){
                return aux
            } else {
                alert('No se ha encontrado esa Base!')
            }
        }
    }

    function deleteBase(name){
        let aux = this.inicio

        if(this.inicio.nombre === name && this.inicio.siguiente === this.inicio){
            this.inicio = null;
        } else if (this.inicio.nombre == name){
            this.inicio.siguiente.anterior = this.inicio.anterior
            this.inicio.anterior.siguiente = this.inicio.siguiente
            this.inicio = this.inicio.siguiente
        } else {
            while (aux.siguiente.nombre != name){
                aux = aux.siguiente
            }

            if(aux.siguiente.nombre == name){
                aux.siguiente = aux.siguiente.siguiente;
                aux.siguiente.anterior = aux;
            } else {
                alert ('Base no encontrada!')
            }
        }
    }

    function changePos(newBase, pos){
        let aux = this.inicio;
        if(pos == 1){
            newBase.anterior = aux.anterior;
            newBase.anterior.siguiente = newBase;
            newBase.siguiente = aux;
            aux.anterior = newBase;
            this.inicio = newBase;
        } else {
            let gg = 1;
            while(gg != pos){
                if(aux.siguiente != this.inicio){
                    aux=aux.siguiente;
                    gg++;
                } else {
                    alert ('Posicion Invalida!')
                    break;
                }
            }

            if(gg == pos){
                newBase.anterior = aux.anterior
                newBase.siguiente = aux;
                newBase.anterior.siguiente = newBase
                newBase.siguiente.anterior = newBase
            }
        }
    }

    function listBases(){
        let connect = ' ';
        let aux = this.inicio
        connect = aux.nombre + ' '
        while(aux.siguiente != this.inicio){
            connect += aux.siguiente.nombre + ' '
            aux = aux.siguiente
        }
        return connect
    }

    function createPath(start, initHour, endHour){
        let aux = this.buscar(start)

        let connect = `"${aux.nombre}" - ${initHour.getHours()}:${initHour.getMinutes()}`

        while(initHour.getHours() < endHour.getHours() || initHour.getMinutes() < endHour.getMinutes()){
            initHour.setMinutes(initHour.getMinutes() + aux.siguiente.minutos)
            aux = aux.siguiente;

            connect += ` || "${aux.nombre}"  ${initHour.getHours()}:${initHour.getMinutes()}`
        }
        return connect;
    }





    return {agregar: addBase,
            buscar: searchBase,
            borrar: deleteBase,
            insertar: changePos,
            listar: listBases,
            recorrido: createPath}
});

export {Ruta}