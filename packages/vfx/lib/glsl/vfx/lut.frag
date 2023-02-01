#version 100
precision highp float;

uniform sampler2D tInput;
uniform sampler2D lookupTable;
// #define LUT_NO_CLAMP
#define LUT_FLIP_Y

#include <lut>

varying vec2 vUv;

void main() {
    vec4 color = texture2D(tInput, vUv);

    gl_FragColor = lut(color, lookupTable);
}