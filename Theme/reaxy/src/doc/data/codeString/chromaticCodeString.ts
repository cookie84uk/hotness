export const chromaticCodeString = `
import { scaleSequential } from 'd3-scale';
import { interpolateViridis } from 'd3-scale-chromatic';

// Create a sequential color scale
const colorScale = scaleSequential(interpolateViridis);

// Use the scale to map data values to colors
const color = colorScale(0.5); // Get color for a data value of 0.5

`;
