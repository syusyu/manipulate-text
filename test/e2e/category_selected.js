describe('Category label', function() {

  var hasClass = function (element, cls) {
      return element.getAttribute('class').then(function (classes) {
          return classes.split(' ').indexOf(cls) !== -1;
      });
  };
  describe('LOG Category is selected', function() {

    beforeEach(function() {
      browser.get('#/sql');
    });


    it('Should log category is selected', function() {
      var categoryLog = element(by.id('category-log'));
      expect(hasClass(categoryLog, 'selected')).toBe(false);
      categoryLog.click();
      expect(hasClass(categoryLog, 'selected')).toBe(true);
    });
  });
});
