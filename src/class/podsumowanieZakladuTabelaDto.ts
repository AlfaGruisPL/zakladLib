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
        odbute: number;
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
        this.wizytyDzis = {odbute: 0, suma: 0, kwota: 0}
    }
}
