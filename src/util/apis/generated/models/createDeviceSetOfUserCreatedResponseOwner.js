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
 * @summary Device Set Owner
  *
 * The owner of a device set
 *
 */
class CreateDeviceSetOfUserCreatedResponseOwner {
  /**
   * Create a CreateDeviceSetOfUserCreatedResponseOwner.
   * @property {string} type Type of account
   * @property {string} id Account ID
   * @property {string} [displayName] Display name of the account
   * @property {string} name Name of the account
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateDeviceSetOfUserCreatedResponseOwner
   *
   * @returns {object} metadata of CreateDeviceSetOfUserCreatedResponseOwner
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateDeviceSetOfUserCreatedResponse_owner',
      type: {
        name: 'Composite',
        className: 'CreateDeviceSetOfUserCreatedResponseOwner',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateDeviceSetOfUserCreatedResponseOwner;