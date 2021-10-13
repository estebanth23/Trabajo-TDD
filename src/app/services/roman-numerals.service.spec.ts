import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // casos negativos
  it('arabic negative', () => {
    expect(service.arabicToRoman(-1)).toEqual('error');
  });
  it('arabic 0', () => {
    expect(service.arabicToRoman(0)).toEqual('error');
  });
  it('arabic > 1000', () => {
    expect(service.arabicToRoman(1001)).toEqual('error');
  });
  it('arabic undefined', () => {
    expect(service.arabicToRoman(undefined)).toEqual('error');
  });
  it('arabic null', () => {
    expect(service.arabicToRoman(null)).toEqual('error');
  });
  it('arabic null', () => {
    expect(service.arabicToRoman(NaN)).toEqual('error');
  });

  //casos buenos, unidades luego decenas, luego centenas hasta 1000
  it('Roman 1', () => {
    expect(service.arabicToRoman(1)).toEqual('I');
  });

  it('Roman 2', () => {
    expect(service.arabicToRoman(2)).toEqual('II');
  });

  it('Roman 3', () => {
    expect(service.arabicToRoman(3)).toEqual('III');
  });

  it('Roman 4', () => {
    expect(service.arabicToRoman(4)).toEqual('IV');
  });

  it('Roman 5', () => {
    expect(service.arabicToRoman(5)).toEqual('V');
  });

  it('Roman 6', () => {
    expect(service.arabicToRoman(6)).toEqual('VI');
  });

  it('Roman 7', () => {
    expect(service.arabicToRoman(7)).toEqual('VII');
  });

  it('Roman 8', () => {
    expect(service.arabicToRoman(8)).toEqual('VIII');
  });

  it('Roman 9', () => {
    expect(service.arabicToRoman(9)).toEqual('IX');
  });

  it('Roman 10', () => {
    expect(service.arabicToRoman(10)).toEqual('X');
  });

  it('Roman 20', () => {
    expect(service.arabicToRoman(20)).toEqual('XX');
  });

  it('Roman 30', () => {
    expect(service.arabicToRoman(30)).toEqual('XXX');
  });

  it('Roman 40', () => {
    expect(service.arabicToRoman(40)).toEqual('XL');
  });

  it('Roman 50', () => {
    expect(service.arabicToRoman(50)).toEqual('L');
  });

  it('Roman 60', () => {
    expect(service.arabicToRoman(60)).toEqual('LX');
  });

  it('Roman 70', () => {
    expect(service.arabicToRoman(70)).toEqual('LXX');
  });

  it('Roman 80', () => {
    expect(service.arabicToRoman(80)).toEqual('LXXX');
  });

  it('Roman 90', () => {
    expect(service.arabicToRoman(90)).toEqual('XC');
  });

  // Hundreds

  it('Roman 100', () => {
    expect(service.arabicToRoman(100)).toEqual('C');
  });

  it('Roman 200', () => {
    expect(service.arabicToRoman(200)).toEqual('CC');
  });

  it('Roman 300', () => {
    expect(service.arabicToRoman(300)).toEqual('CCC');
  });

  it('Roman 400', () => {
    expect(service.arabicToRoman(400)).toEqual('CD');
  });

  it('Roman 500', () => {
    expect(service.arabicToRoman(500)).toEqual('D');
  });

  it('Roman 600', () => {
    expect(service.arabicToRoman(600)).toEqual('DC');
  });

  it('Roman 700', () => {
    expect(service.arabicToRoman(700)).toEqual('DCC');
  });

  it('Roman 800', () => {
    expect(service.arabicToRoman(800)).toEqual('DCCC');
  });

  it('Roman 900', () => {
    expect(service.arabicToRoman(900)).toEqual('CM');
  });

  // 1000

  it('Roman 1000', () => {
    expect(service.arabicToRoman(1000)).toEqual('M');
  });

















  
});
