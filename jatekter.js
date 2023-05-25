import Cella from "./cella.js";
class JatekTer {
    #db;
    #allapotLista;
    #elemLista;
    #lepes;
    #click;

    constructor() {
        this.#click = true;
        this.#elemLista = ["f", "f", "f", "u", "u", "u", "fe", "fe", "fe"];
        console.log("hello");
        this.#init();
        this.#jatekter();
     
            $(window).on("Babukattintas", (event) => {
                const elem = (event.detail.id);
                this.#jatekter();
            });
      


    }

   

    #jatekter() {






    }

    #lepesekkeresese() {


    }

    #init() {
        let szin = true;
        const szuloElem = $("article");
        szuloElem.empty();
        for (let index = 0; index < 9; index++) {
            szin = !szin;
            let cella = new Cella(index, this.#elemLista[index], szuloElem);
            this.#elemLista.push(cella)
        }


    }

    #ellenorzes() {


    }





}


export default JatekTer;