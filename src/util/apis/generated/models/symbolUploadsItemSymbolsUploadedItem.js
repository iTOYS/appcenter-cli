/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SymbolUploadsItemSymbolsUploadedItem.
 */
class SymbolUploadsItemSymbolsUploadedItem {
  /**
   * Create a SymbolUploadsItemSymbolsUploadedItem.
   * @property {string} symbolId The symbol id of the symbol binary
   * @property {string} platform The platform the symbol is associated with
   */
  constructor() {
  }

  /**
   * Defines the metadata of SymbolUploadsItemSymbolsUploadedItem
   *
   * @returns {object} metadata of SymbolUploadsItemSymbolsUploadedItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SymbolUploadsItem_symbols_uploadedItem',
      type: {
        name: 'Composite',
        className: 'SymbolUploadsItemSymbolsUploadedItem',
        modelProperties: {
          symbolId: {
            required: true,
            serializedName: 'symbol_id',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: true,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SymbolUploadsItemSymbolsUploadedItem;
