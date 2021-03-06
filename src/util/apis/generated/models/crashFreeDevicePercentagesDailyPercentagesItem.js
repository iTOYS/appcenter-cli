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
 * Class representing a CrashFreeDevicePercentagesDailyPercentagesItem.
 */
class CrashFreeDevicePercentagesDailyPercentagesItem {
  /**
   * Create a CrashFreeDevicePercentagesDailyPercentagesItem.
   * @property {string} [datetime] The ISO 8601 datetime.
   * @property {number} [percentage] Percentage of the object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashFreeDevicePercentagesDailyPercentagesItem
   *
   * @returns {object} metadata of CrashFreeDevicePercentagesDailyPercentagesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashFreeDevicePercentages_daily_percentagesItem',
      type: {
        name: 'Composite',
        className: 'CrashFreeDevicePercentagesDailyPercentagesItem',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          percentage: {
            required: false,
            serializedName: 'percentage',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashFreeDevicePercentagesDailyPercentagesItem;
