precision highp float;

uniform sampler2D tInput;
uniform sampler2D glow;

uniform float strength;
varying vec2 vUv;

void main() {
    vec4 c = texture2D(tInput, vUv);
    vec4 g = strength * texture2D(glow, vUv);
    // gl_FragColor = mix(c, c + g, g.a);
    gl_FragColor = c + g * g.a;
    // gl_FragColor.a = 1.0;
    // gl_FragColor.rgb += g.rgb;
    // gl_FragColor = g;
}