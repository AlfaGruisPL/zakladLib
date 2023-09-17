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
        this.wizytyDzis = 0;
        this.wizytyWczoraj = 0;
        this.pracownik = {
            id: 0,
            imie: '',
            nazwisko: ''
        };
    }
}
exports.PodsumowanieZakladuTabelaPracownikDto = PodsumowanieZakladuTabelaPracownikDto;
