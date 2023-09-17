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
    wizytyWczoraj: {
        odbyte: any;
        suma: any;
    };

    constructor() {
        this.wizytyDzis = {odbyte: 0, suma: 0}
        this.wizytyWTygodniu = {odbyte: 0, suma: 0}
        this.wizytyWczoraj = {odbyte: 0, suma: 0}
    }
}
