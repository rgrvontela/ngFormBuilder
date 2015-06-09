app.config([
  'formioComponentsProvider',
  function(formioComponentsProvider) {
    formioComponentsProvider.register('signature', {
      views: [
        {
          name: 'Display',
          template: 'formio/components/signature/display.html'
        },
        {
          name: 'API',
          template: 'formio/components/signature/api.html'
        }
      ]
    });
  }
]);
app.run([
  '$templateCache',
  function($templateCache) {

    // Create the settings markup.
    $templateCache.put('formio/components/signature/display.html',
      '<ng-form>' +
        '<form-builder-option property="footer" label="Footer Label" placeholder="Footer Label" title="The footer text that appears below the signature area."></form-builder-option>' +
        '<form-builder-option property="width" label="Width" placeholder="Width" title="The width of the signature area."></form-builder-option>' +
        '<form-builder-option property="height" label="Height" placeholder="Height" title="The height of the signature area."></form-builder-option>' +
        '<form-builder-option property="backgroundColor" label="Background Color" placeholder="Background Color" title="The background color of the signature area."></form-builder-option>' +
        '<form-builder-option property="penColor" label="Pen Color" placeholder="Pen Color" title="The ink color for the signature area."></form-builder-option>' +
      '</ng-form>'
    );

    // Create the API markup.
    $templateCache.put('formio/components/signature/api.html',
      '<ng-form>' +
        '<form-builder-option-key></form-builder-option-key>' +
      '</ng-form>'
    );
  }
]);