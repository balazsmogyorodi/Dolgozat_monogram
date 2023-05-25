class Cella {
    #adat;
    #click;
    #divelem;

    constructor(id, adat, szuloElem) {
        this.#click = true;
        this.id = id;
        this.#adat = adat;
        console.log(this.#adat);
        szuloElem.append(`<div class=""> </div>`);
        this.#divelem = szuloElem.children("div:last-child");
        this.#szinBeallit()
        this.setAllapot();
       
            this.#divelem.on("click", () => {
                this.setClick();
                console.log(this.#click);
                this.#kattintasTrigger();
            });
   
    }

    

    szerErtek(ertek) {
        this.#divelem.html(ertek)
    }

    getId() {
        return this.id;
    }

    setAllapot() {
        if (this.#adat == "f") {
            this.#divelem.append(`<img src="kepek/stock-vector-chess-pawn-symbol-isolated-on.jpg" class="gyalog">`);
        }
        if (this.#adat == "fe") {

            this.#divelem.append(`<img src="kepek/istockphoto-1138390647-612x612-transformed.jpeg" class="gyalog">`);
        } else {
            console.log("semmi")
            return;
        }
    }

    #szinBeallit() {
        if ((this.id % 2) == 1) {
            this.#divelem.attr("class", "feher");
        } else {
            this.#divelem.attr("class", "fekete");
        }
    }

    #kattintasTrigger() {
        if (this.#adat == "f") {
            window.dispatchEvent(new CustomEvent("Babukattintas", { detail: this, }));
            this.eltuntet()
        }
        if (this.#adat == "fe") {
            window.dispatchEvent(new CustomEvent("Babukattintas", { detail: this, }));
            this.eltuntet();
        } else {
            return;
        }
    }

    eltuntet() {
        this.#divelem.css("visibility", "hidden");
    }






   

}


export default Cella;