/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PrivateBasicReleaseDetails class.
 * @constructor
 * Basic information on a release for private apis
 *
 * @member {number} [id] ID identifying this unique release.
 * 
 * @member {string} [version] The release's version.<br>
 * For iOS: CFBundleVersion from info.plist.<br>
 * For Android: android:versionCode from AppManifest.xml.
 * 
 * @member {string} [shortVersion] The release's short version.<br>
 * For iOS: CFBundleShortVersionString from info.plist.<br>
 * For Android: android:versionName from AppManifest.xml.
 * 
 * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
 * time.
 * 
 * @member {string} [distributionGroupId] the destination id of release where
 * it is distributed.
 * 
 * @member {string} [destinationType] The destination type.<br>
 * <b>group</b>: The release distributed to internal groups and
 * distribution_groups details will be returned.<br>
 * <b>store</b>: Coming Soon - The release distributed to external stores and
 * distribution_stores details will be returned. <br>
 * . Possible values include: 'group', 'store'
 * 
 * @member {boolean} [isLatest] Indicates if this is the latest release in the
 * group.
 * 
 */
function PrivateBasicReleaseDetails() {
}

/**
 * Defines the metadata of PrivateBasicReleaseDetails
 *
 * @returns {object} metadata of PrivateBasicReleaseDetails
 *
 */
PrivateBasicReleaseDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PrivateBasicReleaseDetails',
    type: {
      name: 'Composite',
      className: 'PrivateBasicReleaseDetails',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'Number'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        shortVersion: {
          required: false,
          serializedName: 'short_version',
          type: {
            name: 'String'
          }
        },
        uploadedAt: {
          required: false,
          serializedName: 'uploaded_at',
          type: {
            name: 'String'
          }
        },
        distributionGroupId: {
          required: false,
          serializedName: 'distribution_group_id',
          type: {
            name: 'String'
          }
        },
        destinationType: {
          required: false,
          serializedName: 'destination_type',
          type: {
            name: 'String'
          }
        },
        isLatest: {
          required: false,
          serializedName: 'is_latest',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = PrivateBasicReleaseDetails;
