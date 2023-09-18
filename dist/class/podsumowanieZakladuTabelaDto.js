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
        this.wizytyDzis = { odbute: 0, suma: 0, kwota: 0 };
    }
}
exports.PodsumowanieZakladuTabelaPracownikDto = PodsumowanieZakladuTabelaPracownikDto;
