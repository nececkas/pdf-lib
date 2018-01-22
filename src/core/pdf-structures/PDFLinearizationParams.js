/* @flow */
import { PDFDictionary } from 'core/pdf-objects';
import { validate, isInstance } from 'utils/validate';

class PDFLinearizationParams extends PDFDictionary {
  static validKeys = Object.freeze(['L', 'H', 'O', 'E', 'N', 'T', 'P']);

  static fromDict = (dict: PDFDictionary): PDFLinearizationParams => {
    validate(dict, isInstance(PDFDictionary), '"dict" must be a PDFDictionary');
    return new PDFLinearizationParams(
      dict.map,
      dict.lookup,
      PDFLinearizationParams.validKeys,
    );
  };
}

export default PDFLinearizationParams;
