
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

    get votationOption(): VotationOption[] {
        return this._votationOptions;
    }
};

export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotations(): void {
        for (const votation of this.votations) {
            console.log(votation.details);
            for (const votationOption of votation.votationOption) {
                console.log(votationOption.option, votationOption.numberOfvotes);
            }

            console.log('###');
            console.log('');
        }
    }
}

const votation01 = new Votation('Qual é sua linguagem de programação favorita ?');
votation01.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation01.addVotationOption({ option: 'JavaScript', numberOfvotes: 0 });
votation01.addVotationOption({ option: 'Java', numberOfvotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation01);

votationApp.showVotations();
