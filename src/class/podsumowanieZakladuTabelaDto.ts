export class PodsumowanieZakladuTabelaDto {
    dane: PodsumowanieZakladuTabelaPracownikDto[];

    constructor() {

    }
}

export class PodsumowanieZakladuTabelaPracownikDto {

    pracownik: {
        id: number;
        imie: string,
        nazwisko: string
    }
    wizytyDzis: {
        odbyte: number;
        suma: number;
        kwota: number
    };
    wizytyWczoraj: {
        suma: number;
        kwota: number
    };

    constructor() {
        this.pracownik = {
            id: 0,
            imie: '',
            nazwisko: ''
        }
        this.wizytyWczoraj = {suma: 0, kwota: 0}
        this.wizytyDzis = {odbyte: 0, suma: 0, kwota: 0}
    }
}
