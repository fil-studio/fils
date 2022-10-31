precision highp float;

varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tGlow;
uniform float glowStrength;
uniform bool rgb;
uniform float rgbStrength;
uniform vec2 rgbDelta;

#include <rgbSplit>

void main () {
    vec4 scene;
    if(rgb) scene = rgbSplit(tScene, vUv, rgbStrength, rgbDelta);
    else scene = texture2D(tScene, vUv);
    vec4 glow = texture2D(tGlow, vUv);

    vec3 color = scene.rgb;
    color += glow.rgb * glowStrength * glow.a;

    gl_FragColor = vec4(color, scene.a + glow.a);
}