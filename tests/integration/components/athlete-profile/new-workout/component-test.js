import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('athlete-profile/new-workout', 'Integration | Component | athlete profile/new workout', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{athlete-profile/new-workout}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#athlete-profile/new-workout}}
      template block text
    {{/athlete-profile/new-workout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
