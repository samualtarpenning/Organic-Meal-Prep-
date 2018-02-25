import { NgModule } from '@angular/core';




export class Country {
  iso: string;
  name: string;
  code: string;
  sample_phone: string;
  phone_mask: Array<Object>;

  constructor (iso: string, name: string) {
    this.iso = iso;
    this.name = name;


    


  }

  getMaskFromString(string: string): Array<Object> {
    let _string_chars = string.split(''),
        _digit_reg_exp = new RegExp(/\d/),
        _mask = _string_chars.map((char) => {
          // Replace any digit with a digit RegExp
          return (_digit_reg_exp.test(char)) ? _digit_reg_exp : char;
        });

    return _mask;
  }
}

