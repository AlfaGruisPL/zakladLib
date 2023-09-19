"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodsumowanieZakladuTabelaPracownikDto = exports.PodsumowanieZakladuTabelaDto = void 0;
class PodsumowanieZakladuTabelaDto {
    constructor() {
    }
}
exports.PodsumowanieZakladuTabelaDto = PodsumowanieZakladuTabelaDto;
class PodsumowanieZakladuTabelaPracownikDto {
    constructor() {
        this.pracownik = {
            id: 0,
            imie: '',
            nazwisko: ''
        };
        this.wizytyWczoraj = { suma: 0, kwota: 0 };
        this.wizytyOStatniTydzien = { suma: 0, kwota: 0 };
        this.wizytyPoprzedniTydzien = { suma: 0, kwota: 0 };
        this.wizytyOstatniMiesiac = { suma: 0, kwota: 0 };
        this.wizytyPoprzedniMiesiac = { suma: 0, kwota: 0 };
        this.wizytyDzis = { odbyte: 0, suma: 0, kwota: 0 };
    }
}
exports.PodsumowanieZakladuTabelaPracownikDto = PodsumowanieZakladuTabelaPracownikDto;
