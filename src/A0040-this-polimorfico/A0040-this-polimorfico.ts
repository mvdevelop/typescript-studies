
// A0040: this polimorfico

export class Calculadora {
    constructor(public numero: number) {}

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    mult(n: number): this {
        this.numero *= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }
}

export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).sub(3).mult(4).div(2).pow(2);
console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
    private method: 'GET' | 'POST' | null = null;
    private url: string | null = null;

    setMethod(method: 'GET' | 'POST'): this {
        this.method = method;
        return this;
    }

    setURL(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        if (!this.method || !this.url) {
            throw new Error('Method and URL must be set before sending the request.');
        }
        console.log(`Sending ${this.method} request to ${this.url}`);
    }
}

const request = new RequestBuilder(); // Builder
request.setURL('https://www.google.com')
       .setMethod('GET')
       .send();
