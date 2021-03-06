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
 * Class representing a GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage.
 */
class GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage {
  /**
   * Create a GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage.
   * @property {string} [thumb]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage
   *
   * @returns {object} metadata of GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetDeviceSetOfUserOKResponse_deviceConfigurationsItem_image',
      type: {
        name: 'Composite',
        className: 'GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage',
        modelProperties: {
          thumb: {
            required: false,
            serializedName: 'thumb',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetDeviceSetOfUserOKResponseDeviceConfigurationsItemImage;
