declare module "bignumber" {

    class BigNumber {
        constructor(value: number|string); // Acccepts a number OR a string
        toNumber(): number;

        // Those static attributes could have been in the module, a few lines beneath
        static ROUND_DOWN: any;
        static config(arg: any): void;
    }

    // A standalone class is not exportable, so there is an empty module
    module BigNumber { }

    // The exported values is the merge of the BigNumber class and the BigNumber module
    export = BigNumber;
}