$(function () {
  'use strict'

  QUnit.module('scrollspy plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.expect(1)
    assert.ok($(document.body).scrollspy, 'scrollspy method is defined')
  })

  QUnit.module('scrollspy', {
    beforeEach: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.bootstrapScrollspy = $.fn.scrollspy.noConflict()
    },
    afterEach: function () {
      $.fn.scrollspy = $.fn.bootstrapScrollspy
      delete $.fn.bootstrapScrollspy
      $('#qunit-fixture').html('')
    }
  })

  QUnit.test('should add the active class correctly when there are nested elements at 0 scroll offset', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-1" class="nav-link" href="#div-1">div 1</a>' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-2" class="nav-link" href="#div-2">div 2</a></li>' +
      '</ul>' +
      '</li>' +
      '</ul>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should add the active class correctly when there are nested elements (nav markup)', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<nav class="nav">' +
      '<a id="a-1" class="nav-link" href="#div-1">div 1</a>' +
      '<nav class="nav">' +
      '<a id="a-2" class="nav-link" href="#div-2">div 2</a>' +
      '</nav>' +
      '</nav>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should add the active class correctly when there are nested elements (nav nav-item markup)', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-1" class="nav-link" href="#div-1">div 1</a></li>' +
      '<ul class="nav">' +
      '<li class="nav-item"><a id="a-2" class="nav-link" href="#div-2">div 2</a></li>' +
      '</ul>' +
      '</ul>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })

  QUnit.test('should add the active class correctly when there are nested elements (list-group markup)', function (assert) {
    assert.expect(6)
    var times = 0
    var done = assert.async()
    var navbarHtml = '<nav id="navigation" class="navbar">' +
      '<div class="list-group">' +
      '<a id="a-1" class="list-group-item" href="#div-1">div 1</a>' +
      '<div class="list-group">' +
      '<a id="a-2" class="list-group-item" href="#div-2">div 2</a>' +
      '</div>' +
      '</div>' +
      '</nav>'

    var contentHtml = '<div class="content" style="position: absolute; top: 0px; overflow: auto; height: 50px">' +
      '<div id="div-1" style="padding: 0; margin: 0">' +
      '<div id="div-2" style="height: 200px; padding: 0; margin: 0">div 2</div>' +
      '</div>' +
      '</div>'

    $(navbarHtml).appendTo('#qunit-fixture')

    var $content = $(contentHtml)
      .appendTo('#qunit-fixture')
      .bootstrapScrollspy({
        offset: 0,
        target: '#navigation'
      })

    function testActiveElements() {
      if (++times > 3) {
        return done()
      }

      $content.one('scroll', function () {
        assert.ok($('#a-1').hasClass('active'), 'nav item for outer element has "active" class')
        assert.ok($('#a-2').hasClass('active'), 'nav item for inner element has "active" class')
        testActiveElements()
      })

      $content.scrollTop($content.scrollTop() + 10)
    }

    testActiveElements()
  })
})
