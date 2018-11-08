/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {$} from 'protractor';

import {openBrowser, verifyNoBrowserErrors} from '../../../e2e_util/e2e_util';

describe('largetable benchmark', () => {
  afterEach(verifyNoBrowserErrors);

  it(`should render the table`, () => {
    openBrowser({
      url: '',
      ignoreBrowserSynchronization: true,
      params: [{name: 'cols', value: 5}, {name: 'rows', value: 5}],
    });
    $('#createDom').click();
    expect($('#root').getText()).toContain('0/0');
    $('#createDom').click();
    expect($('#root').getText()).toContain('A/A');
    $('#destroyDom').click();
    expect($('#root').getText() as any).toEqual('');
  });
});