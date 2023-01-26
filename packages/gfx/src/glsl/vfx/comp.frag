precision highp float;

varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tGlow;
uniform float exposure;
uniform float gamma;

uniform bool renderGlow;
uniform bool renderScene;

void main () {
    vec4 scene = vec4(0.0);
    if(renderScene) {
        scene = texture2D(tScene, vUv);
    }
    vec4 glow = vec4(0.0);
    if(renderGlow) {
        glow = texture2D(tGlow, vUv);
        // glow.rgb -= vec3(.2);
    }
    
    float glowA = length(glow.rgb);

    scene.rgb += glow.rgb * glowA;
    
    // tone mapping
    vec3 result = vec3(1.0) - exp(-scene.rgb * exposure);
    // also gamma correct while we're at it       
    result = pow(result, vec3(1.0 / gamma));

    gl_FragColor = vec4(result, scene.a + glowA);
    // gl_FragColor = vec4(scene.rgb, scene.a + glow.a);
    // gl_FragColor = glow;
    // gl_FragColor = scene;
}