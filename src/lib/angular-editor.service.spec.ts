import {inject, TestBed} from '@angular/core/testing';

import {AngularEditorService} from './angular-editor.service';

describe('AngularEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularEditorService]
    });
  });

  it('should be created', inject([AngularEditorService], (service: AngularEditorService) => {
    expect(service).toBeTruthy();
  }));
});
