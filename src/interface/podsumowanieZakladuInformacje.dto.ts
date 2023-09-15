export interface PodsumowanieZakladuInformacjeDto {
    wizytyDzis: {
        odbyte: any;
        suma: any;
    };
    wizytyWTygodniu: {
        odbyte: any;
        suma: any;
    };
    test: number;
    dochodDzis: number;
    dochodWczoraj: number;
    wizytyWTygodniuPoprzednim: number;
    wizytyWczoraj: {
        odbyte: any;
        suma: any;
    };
}
