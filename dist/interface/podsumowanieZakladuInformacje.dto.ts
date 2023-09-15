export interface PodsumowanieZakladuInformacjeDto {
    wizytyDzis: {
        odbyte;
        suma;
    };
    wizytyWTygodniu: {
        odbyte;
        suma;
    };

    dochodDzis: number;
    dochodWczoraj: number;
    wizytyWTygodniuPoprzednim: number;
    wizytyWczoraj: {
        odbyte;
        suma;
    };
}
