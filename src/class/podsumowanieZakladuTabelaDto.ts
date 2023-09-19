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
    wizytyOStatniTydzien: {
        suma: number;
        kwota: number
    };
    wizytyPoprzedniTydzien: {
        suma: number;
        kwota: number
    };
    wizytyOstatniMiesiac: {
        suma: number;
        kwota: number
    };
    wizytyPoprzedniMiesiac: {
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
        this.wizytyOStatniTydzien = {suma: 0, kwota: 0}
        this.wizytyPoprzedniTydzien = {suma: 0, kwota: 0}
        this.wizytyOstatniMiesiac = {suma: 0, kwota: 0}
        this.wizytyPoprzedniMiesiac = {suma: 0, kwota: 0}
        this.wizytyDzis = {odbyte: 0, suma: 0, kwota: 0}

    }
}
