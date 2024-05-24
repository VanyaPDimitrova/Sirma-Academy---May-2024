function climateZoneIdentifier(latitude, hemisphere) {
  latitude = Math.abs(latitude);

  let climateZones = '';

  if (latitude == 0) {
    climateZones = 'Equator';

  } else if (0 < latitude && latitude <= 23.5) {
    climateZones = 'Tropic Zone';

  } else if (23.5 < latitude && latitude <= 66.5) {
    climateZones = 'Temperate Zone';
    
  } else if (66.5 < latitude) {
    climateZones = 'Arctic Zone';
  }

  console.log(climateZones);
}

climateZoneIdentifier(70, 'N');
climateZoneIdentifier(45, 'S');
climateZoneIdentifier(10, 'N');
climateZoneIdentifier(0, 'N');
climateZoneIdentifier(-85, 'S');
