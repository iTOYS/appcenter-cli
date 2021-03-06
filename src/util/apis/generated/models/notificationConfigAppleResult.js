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
 * Apple notification certificate configuration result.
 *
 */
class NotificationConfigAppleResult {
  /**
   * Create a NotificationConfigAppleResult.
   * @property {string} type
   * @property {string} endpointType Type of endpoint the certificate or token
   * are associated with. Possible values include: 'production', 'sandbox'
   * @property {date} certExpiration Certificate expiration date.
   * @property {string} certFilename Certificate file name
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationConfigAppleResult
   *
   * @returns {object} metadata of NotificationConfigAppleResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'apns_config',
      type: {
        name: 'Composite',
        className: 'NotificationConfigAppleResult',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          endpointType: {
            required: true,
            serializedName: 'endpoint_type',
            type: {
              name: 'String'
            }
          },
          certExpiration: {
            required: true,
            serializedName: 'cert_expiration',
            type: {
              name: 'DateTime'
            }
          },
          certFilename: {
            required: true,
            serializedName: 'cert_filename',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationConfigAppleResult;
