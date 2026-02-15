
// A0059-exercicio-votacao

type VotationOption = {
    numberOfvotes: number;
    option: string;
};

export class Votation {
    private _votationOptions: VotationOption[] = [];
    constructor(public details: string) {}

    addVotationOption(votationOption: VotationOption): void {
        this._votationOptions.push(votationOption);
    }

    vote(votationIndex: number): void {
        if (!this._votationOptions[votationIndex]) return;
        this._votationOptions[votationIndex].numberOfvotes += 1;
    }
};

export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }
}
