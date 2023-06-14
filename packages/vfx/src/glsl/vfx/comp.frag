#version 300 es

precision highp float;

in vec2 vUv;
uniform sampler2D tBackground;
uniform sampler2D tScene;
uniform sampler2D tGlow;

uniform bool renderBackground;
uniform bool renderGlow;
uniform bool renderScene;

layout (location = 0) out vec4 pcColor;

void main () {
    vec4 bg = renderBackground ? texture(tBackground, vUv) : vec4(0.);
    vec4 scene = vec4(0.);
    if(renderScene) {
        scene = texture(tScene, vUv);
    }
    vec4 glow = vec4(0.0);
    if(renderGlow) {
        glow = texture(tGlow, vUv);
    }
    
    float bA = smoothstep(.9, 1., scene.a);

    scene = mix(bg, scene, bA);
    scene.rgb += glow.rgb;
    // scene = mix(bg, scene, scene.a + glowA);
    
    pcColor = scene;
    // gl_FragColor = vec4(scene.rgb, scene.a + glow.a);
    // gl_FragColor = glow;
    // gl_FragColor = scene;
}