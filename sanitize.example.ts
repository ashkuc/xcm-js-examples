import { Location } from "@open-xcm-tools/xcm-types";
import { sanitizeLocation } from "@open-xcm-tools/xcm-util";

void (() => {
  let locations: Location[] = [
    {
      parents: 1n, 
      interior: {
        x2: [
          { parachain: 1000n },
          {
            accountId32: {
              id: "0x006ddf51db56437ce5c886ab28cd767fc85ad5cc5d4a679376a1f7e71328b501",
            },
          },
        ],
      },
    },
    {
      parents: 1n,
      interior: {
        x2: [
          { parachain: 1000n },
          {
            accountId32: { id: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" },
          },
        ],
      },
    },
    {
      parents: 0n,
      interior: {
        x3: [
          { parachain: 1000n },
          { palletInstance: 50n },
          { generalIndex: 2002n },
        ],
      },
    },
  ];

  try {
    locations.forEach(sanitizeLocation);
    console.log("[OK] sanitizeLocation pass valid locations");
  } catch (e) {
    console.log("should NOT happen");
  }

  locations = [
    {
      parents: 1n,
      interior: {
        x3: [
          { parachain: 1000000000000000n },
          { palletInstance: 50n },
          { generalIndex: 1984n },
        ],
      }
    },
    {
      parents: 0n,
      interior: {
        x3: [
          { parachain: 1000n },
          { palletInstance: 50n },
          { generalIndex: 2002n },
        ]
      }
    },
  ];

  try {
    locations.forEach(sanitizeLocation);
    console.log("should NOT happen");
  } catch (e) {
    console.log("[OK] sanitizeLocation does NOT pass an invalid location");
  }
})();