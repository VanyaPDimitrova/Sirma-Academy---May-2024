function architecturalEraIdentifier(year, material) {
  let architecturalEra = '';

  if (year < 500 && material == 'stone') {
    architecturalEra = 'Ancient';

  } else if (500 <= year && year <= 1500 && material == 'stone') {
    architecturalEra = 'Medieval';
    
  } else if (1500 <= year && year <= 1800 && material == 'wood') {
    architecturalEra = 'Colonial';
    
  } else if (1800 <= year && year <= 1900 && material == 'steel') {
    architecturalEra = 'Industrial';
    
  } else if (1900 < year && material == 'steel') {
    architecturalEra = 'Modern';
    
  } else {
    architecturalEra = 'Uncertain';
  }

  console.log(architecturalEra);
}

architecturalEraIdentifier(300, 'stone');
architecturalEraIdentifier(1500, 'wood');
architecturalEraIdentifier(1500, 'stone');
architecturalEraIdentifier(2000, 'steel');
architecturalEraIdentifier(1100, 'wood');
architecturalEraIdentifier(1800, 'steel');
