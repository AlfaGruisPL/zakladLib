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
    wizytyDzis: number = 0;
    wizytyWczoraj: number = 0;

    constructor() {
        this.pracownik = {
            id: 0,
            imie: '',
            nazwisko: ''
        }
    }
}
