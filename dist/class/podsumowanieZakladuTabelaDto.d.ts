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
    wizytyOStatniTydzien: {
        suma: number;
        kwota: number;
    };
    wizytyPoprzedniTydzien: {
        suma: number;
        kwota: number;
    };
    wizytyOstatniMiesiac: {
        suma: number;
        kwota: number;
    };
    wizytyPoprzedniMiesiac: {
        suma: number;
        kwota: number;
    };
    constructor();
}
