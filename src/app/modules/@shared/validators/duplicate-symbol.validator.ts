import { ValidatorFn, AbstractControl } from "@angular/forms";
import { LocalStorageService } from "@core/index";
import { StockSymbolQuote } from "@stock-tracker/index";


export class DuplicateSymbolValidator {

  constructor(private localStorageService: LocalStorageService) {}

  duplicateSymbolValidator(localStorageKey:string): ValidatorFn {

    return (input: AbstractControl): { [key: string]: boolean; } | null => {
      const localStorageSymbols = this.localStorageService.getItem(localStorageKey);
      const stockSymbolsAndQuote: StockSymbolQuote[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];

      if (stockSymbolsAndQuote.find(s => s.stockSymbol.symbol === input.value?.toUpperCase())) {
        return { duplicate: true };
      }
      return null;
    }

  }


}
