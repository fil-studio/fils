#version 100
precision highp float;
varying vec2 vUv;

uniform sampler2D tInput;
uniform vec2 resolution;
uniform float gridSize;

uniform bool pixelate;
uniform int dithering;

#include <dither2>

void main () {
    vec2 uvStep = vec2(gridSize / resolution.x, gridSize / resolution.y); 

    // pixelate
    vec2 uv = floor(vUv / uvStep) * uvStep + uvStep * 0.5;
    if(!pixelate) {
        uv = vUv;
    }
    vec4 pixelated = texture2D(tInput, uv);

    if (dithering == 1) {
        pixelated = dither2x2(gl_FragCoord.xy, pixelated);
    } else if (dithering == 2) {
        pixelated = dither4x4(gl_FragCoord.xy, pixelated);
    } else if (dithering == 3) {
        pixelated = dither8x8(gl_FragCoord.xy, pixelated);
    }

    gl_FragColor = pixelated;

}