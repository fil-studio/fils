precision highp float;

varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tGlow;
uniform float exposure;
uniform float gamma;
uniform bool rgb;
uniform float rgbStrength;
uniform vec2 maxRGBDisp;
uniform vec2 rgbDelta;
uniform bool rgbRadial;

uniform bool renderGlow;
uniform bool renderScene;

#include <rgbSplit>

void main () {
    vec4 scene = vec4(0.0, 0.0, 0.0, 1.0);
    if(renderScene) {
        if(rgb) {
            scene = rgbSplit(tScene, vUv, rgbStrength, rgbDelta, maxRGBDisp, rgbRadial);
        }
        else scene = texture2D(tScene, vUv);
    }
    vec4 glow = vec4(0.0);
    if(renderGlow) {
        glow = texture2D(tGlow, vUv);
    }

    scene.rgb += glow.rgb;
    
    // tone mapping
    vec3 result = vec3(1.0) - exp(-scene.rgb * exposure);
    // also gamma correct while we're at it       
    result = pow(result, vec3(1.0 / gamma));

    /* vec3 color = scene.rgb;
    color += glow.rgb * glowStrength * glow.a; */

    gl_FragColor = vec4(result, scene.a + glow.a);
}