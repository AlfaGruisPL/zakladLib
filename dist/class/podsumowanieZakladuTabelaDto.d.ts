export declare class PodsumowanieZakladuTabelaDto {
    dane: [
        {
            pracownik: {
                id: number;
                imie: string;
                nazwisko: string;
            };
            wizytyDzis: number;
            wizytyWczoraj: number;
        }
    ];
    constructor();
}
