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
    wizytyDzis: {
        odbyte: number;
        suma: number;
        kwota: number;
    };
    wizytyWczoraj: {
        suma: number;
        kwota: number;
    };
    wizytyZ7Dni: {
        suma: number;
        kwota: number;
    };
    wizytyZ30Dni: {
        suma: number;
        kwota: number;
    };
    constructor();
}
