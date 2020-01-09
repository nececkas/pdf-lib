import {
  DictMap,
  PDFContext,
  PDFDict,
  PDFName,
  PDFNumber,
  PDFObject,
  PDFPushButton,
} from 'src/index';

describe('PDFPushButton', () => {
  let context: PDFContext;
  let dict: DictMap;

  beforeEach(() => {
    const fieldFlags = PDFNumber.of(1 << 17);
    context = PDFContext.create();
    dict = new Map<PDFName, PDFObject>([
      [PDFName.FT, PDFName.Btn],
      [PDFName.Ff, fieldFlags],
    ]);
  });

  it('can be constructed from a PDFDict', () => {
    const acroFormFieldDict = PDFDict.fromMapWithContext(dict, context);
    const pushButton = PDFPushButton.fromDict(acroFormFieldDict);
    expect(pushButton).toBeInstanceOf(PDFPushButton);
  });

  it('returns an undefined value', () => {
    const acroFormFieldDict = PDFDict.fromMapWithContext(dict, context);
    const pushButton = PDFPushButton.fromDict(acroFormFieldDict);
    expect(pushButton.V()).toBe(undefined);
  });

  it('returns an undefined default value', () => {
    const acroFormFieldDict = PDFDict.fromMapWithContext(dict, context);
    const pushButton = PDFPushButton.fromDict(acroFormFieldDict);
    expect(pushButton.DV()).toBe(undefined);
  });
});