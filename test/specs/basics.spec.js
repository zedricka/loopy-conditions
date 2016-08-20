var expect = chai.expect;
var should = chai.should();

// load basics.js into new VM

describe( 'Main', function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub( console, 'log' );
    sandbox.stub( console, 'error' );
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe('greaterNumber', function() {
    it('should have a function called `greaterNumber`', function() {
      expect(greaterNumber).to.exist;
    });
    it('should return the greater number', function() {
      expect(greaterNumber(100, 10)).equal(100);
      expect(greaterNumber(-100, 10)).equal(10);
    });
  });

  describe('stringOfNumbers', function() {
    it('should have a function called `stringOfNumbers`',function (){
      expect(stringOfNumbers).to.exist;
    });
    it('Should return a string of numbers up to the number passed in as a parameter', function(){
      expect(stringOfNumbers(10)).equal('0123456789');
      expect(stringOfNumbers(-10)).equal('');
    });
  });
  describe('sumOfArray', function() {
    it('should have a function called `stringOfNumbers`', function(){
      expect(sumOfArray).to.exist;
    });
    it('should return the sum of all numbers in an array', function(){
      var testArr = [100, 1020];
      expect(sumOfArray(testArr)).equal(1120);
    });
    it('should dissregard any other datatypes that are not numbers in the array', function(){
      var testArr = [100, 1020, {}, 'pokemon'];
      expect(sumOfArray(testArr)).equal(1120);
    });
  });
  describe('getEvens', function() {
    it('should have a function called `getEvens`', function() {
      expect(getEvens).to.exist;
    });
    it('should return all the even numbers in an array', function() {
      var testArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
      expect(getEvens(testArr)).to.include(2,4,6,8,10,12);
    });
  });
  describe('getOdds', function() {
    it('should have a function called `getOdds`', function() {
      expect(getOdds).to.exist;
    });
    it('should return all the even numbers in an array', function() {
      var testArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
      expect(getOdds(testArr)).to.include(1,3,5,7,9,11,13);
    });
  });
  describe('calculate', function(){
    it('should have a function called calculate', function() {
      expect(calculate).to.exist;
    });
    it('should return a number', function() {
      expect(calculate(1345,73452,'add')).equal(74797);
      expect(calculate(1293,1993,'subtract')).equal(-700)
      expect(calculate(9031,12932,'multiply')).equal(116788892)
      expect(calculate(19398327421938,128374627384,'divide')).equal(151.10717606145678)
    });
    it('should return "Invalid Parameter" if it is not an operator we defined', function() {
      expect(calculate(1.2 , 31, "sharkie")).equal('Invalid operator');
    });
  })
});
