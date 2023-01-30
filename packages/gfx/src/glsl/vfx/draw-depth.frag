#version 100
precision highp float;

#include <depth>

uniform sampler2D tDepth;
varying vec2 vUv;

void main () {
	float depth = smoothstep(0., 1., readDepth (tDepth, vUv));
	gl_FragColor = vec4(
        texture2D(tDepth, vUv).rrr,
        1.0);//vec4(vec3(depth), 1.0);
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor = texture2D(tDepth, vUv);
}