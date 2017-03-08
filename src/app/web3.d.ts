// modules that you require must be in quotes, or they'll be considered as ambient global variables.
declare module 'web3' {

    // web3 uses bignumber.js, which is not on definitely typed
    import * as BigNumber from 'bignumber';

    class Web3 {

        // It's weird that the providers are in an instance, instead of in the librairy
        providers: typeof providers;

        // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3setprovider
        setProvider(provider: providers.IProvider): void;

        // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3eth
        eth: {

            // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcoinbase
            coinbase: string;

            // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethdefaultaccount
            defaultAccount: string;

            // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract
            contract(abi: IAbiDefinition[]): IContract;

            // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetbalance
            getBalance(addressHexString: string, defaultBlock?: number|string, callback?: (err: any, result: BigNumber) => void): BigNumber;

            // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethfilter
            filter(value: string|IFilterObject): IFilterResult;

            compile: {
                // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcompilesolidity
                solidity(sourceString: string, cb?: (err: any, result: any) => void): Object
            }
        }
    }

    // I usally start interface namesby an I but do as you want

    interface IAbiIOParameter {
        name: string;
        type: string;
    }

    interface IAbiDefinition {
        constants: boolean;
        inputs: IAbiIOParameter[];
        name: string;
        outputs: IAbiIOParameter[];
        type: string;
    }

    interface IContract {
        // TODO
    }

    // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethfilter
    interface IFilterObject {
        fromBlock: number|string;
        toBlock: number|string;
        address: string;
        topics: string[];
    }

    // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethfilter
    interface IFilterResult {
        get(callback: () => void): void;
        watch(callback: () => void): void;
        stopWatching(): void;
    }

    module providers {

        // Multiple providers will certainly have methods in common, this interface can be filled with those methods and attributes
        interface IProvider {
        }

        // The implements clause is optional, a HttpProvider will be usable where a IProvider is expected.
        class HttpProvider implements IProvider {
            constructor (url?: string);
        }
    }

    module Web3 {} // Empty module so the class is expotable as a module

    export = Web3;
}