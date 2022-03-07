 // initialize AGF and GDPR objects if not already initialized
  window.AGF = window.AGF || {};
  window.AGF.GDPR = window.AGF.GDPR || {};

  window.AGF.GDPR.setInputValue = function (input, value) {
    if (!input) {
      return;
    }
    input.value = value;
    if (input.getAttribute('type') === 'checkbox') {
      if (value === 'on' || value === 'checked' || value === true) {
        input.setAttribute('checked', 'checked');
        input.checked = true;
      } else if (value === 'off' || value === false || value === "false") {
        input.removeAttribute('checked');
        input.checked = false;
      }
    }
  }

  // form methods
  // sets input values based on existing saved settings
  window.AGF.GDPR.setInputValues = function (value) {
    var settings = window.AGF.GDPR.settings;
    var input;
    if (settings) {
      for (key in settings) {
        var s = value || settings[key];
        input = document.querySelector('[name=' + key + ']');
        window.AGF.GDPR.setInputValue(input, s)
      }
    }
  }

  // set all values to true or false
  window.AGF.GDPR.setAll = function (bool) {
    var form = document.getElementById('gdpr-form');
    var inputs = form.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      input = inputs[i];
      window.AGF.GDPR.setInputValue(input, bool)
      window.AGF.GDPR.updateSettings(input.getAttribute('name'), input.checked);
    }
  }



  // show 'updated' message
  window.AGF.GDPR.showMessage = function () {
    var msg = document.getElementById('gdpr-message');
    if (!msg.classList.contains('is-open')) {
      msg.classList.add('is-open')
    }
    clearTimeout(window.AGF.GDPR.messageTimeout);
    window.AGF.GDPR.messageTimeout = setTimeout(function () {
      msg.classList.remove('is-open');
    }, 2000)
  }


  window.AGF.GDPR.checkAll = function () {
    if (!window.AGF.GDPR.settings) {
      return;
    }
    var keys = Object.keys(window.AGF.GDPR.settings);
    var isAll = true;
    if (keys.length) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key === 'all' || key === 'date') {
          continue;
        }
        var val = window.AGF.GDPR.settings[key];
        if (val !== true) {
          isAll = false;
          break;
        }
      }
    }

    if (isAll) {
      window.AGF.GDPR.setInputValue(document.querySelector('input[name="all"]'), true)
      window.AGF.GDPR.updateSettings('all', true);
      window.AGF.GDPR.showMessage();
    }
  }

  // triggered on any input change
  window.AGF.GDPR.checkInput = function (el) {
    var name = el.getAttribute('name') || el.getAttribute('id');
    var value = el.value
    if (el.getAttribute('type') === 'checkbox') {
      value = el.checked;
    }
    window.AGF.GDPR.showMessage();
    if (name !== 'all' && value !== true && value !== 'on') {
      window.AGF.GDPR.setInputValue(document.querySelector('input[name="all"]'), false)
      window.AGF.GDPR.updateSettings('all', false);
      window.AGF.GDPR.updateSettings(name, value);
    } else if (name !== 'all') {
      window.AGF.GDPR.updateSettings(name, value);
      window.AGF.GDPR.checkAll()
    }
  }

  window.AGF.GDPR.onAllInputChanged = function (e) {
    var el = e.target;
    var name = el.getAttribute('name') || el.getAttribute('id');
    var value = el.checked
    window.AGF.GDPR.setAll(value);
  }

  window.AGF.GDPR.checkAllInputs = function () {
    var form = document.getElementById('gdpr-form');
    var inputs = form.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      window.AGF.GDPR.checkInput(inputs[i])
    }
  }

  // adds input listeners
  window.AGF.GDPR.addSubmitListener = function () {
    var form = document.getElementById('gdpr-form')
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.AGF.GDPR.checkAllInputs()
      return false;
    })
  }

  window.AGF.GDPR.addAllListener = function () {
    var form = document.getElementById('gdpr-form')
    form.querySelector('input[name="all"]').addEventListener('change', window.AGF.GDPR.onAllInputChanged);
  }

  // initialize form
  window.AGF.GDPR.formInit = function () {
    var settings = window.AGF.GDPR.settings;
    if (!settings || settings.all === true) {
      window.AGF.GDPR.setAll(true)
    } else if (settings) {
      window.AGF.GDPR.setInputValues()
    }
    window.AGF.GDPR.addAllListener();
    window.AGF.GDPR.addSubmitListener();
  }

  window.AGF.GDPR.formInit();