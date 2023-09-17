"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodsumowanieZakladuInformacjedto = void 0;
class PodsumowanieZakladuInformacjedto {
    constructor() {
        this.dochodDzis = 0;
        this.dochodWTygodniu = 0;
        this.dochodWTygodniuPoprzednim = 0;
        this.dochodWczoraj = 0;
        this.wizytyWTygodniuPoprzednim = 0;
        this.wizytyDzis = { odbyte: 0, suma: 0 };
        this.wizytyWTygodniu = { odbyte: 0, suma: 0 };
        this.wizytyWczoraj = { odbyte: 0, suma: 0 };
    }
}
exports.PodsumowanieZakladuInformacjedto = PodsumowanieZakladuInformacjedto;
