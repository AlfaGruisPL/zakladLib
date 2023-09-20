export class PodsumowanieZakladuInformacjedto {
    wizytyDzis: {
        odbyte: any;
        suma: any;
    };
    wizytyWTygodniu: {
        odbyte: any;
        suma: any;
    };
    dochodDzis: number = 0;
    dochodWTygodniu: number = 0;
    dochodWTygodniuPoprzednim: number = 0;
    dochodWczoraj: number = 0;
    wizytyWTygodniuPoprzednim: number = 0;
    wizytyWczoraj: number = 0

    sumaWizyt: number = 0
    sumaWizytKwota: number = 0

    constructor() {
        this.wizytyDzis = {odbyte: 0, suma: 0}
        this.wizytyWTygodniu = {odbyte: 0, suma: 0}
    }
}
