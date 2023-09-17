export declare class PodsumowanieZakladuTabelaDto {
    dane: PodsumowanieZakladuTabelaPracownikDto[];
    constructor();
}
export declare class PodsumowanieZakladuTabelaPracownikDto {
    pracownik: {
        id: number;
        imie: string;
        nazwisko: string;
    };
    wizytyDzis: number;
    wizytyWczoraj: number;
    constructor();
}
