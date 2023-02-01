#version 100
precision highp float;

#include <depth>

uniform sampler2D tDepth;
uniform sampler2D tInput;
uniform sampler2D tBlur;
uniform bool debug;
varying vec2 vUv;

uniform float aperture;
uniform float focalDistance;

void main () {
	float depth = readDepth (tDepth, vUv);
	// float depth = texture2D(tDepth, vUv).r;
	vec3 noBlur = texture2D(tInput, vUv).rgb;
	vec3 blur = texture2D(tBlur, vUv).rgb;

	float distanceToCamera = mix(cameraNear, cameraFar, depth);
	// float distanceToCamera = depth;

	float CoC = distance(distanceToCamera, focalDistance);
	float st = smoothstep(0.0, aperture, CoC);

	vec3 color = mix(noBlur, blur, st);

	/* vec2 uv = gl_FragCoord.xy / textureSize(depthTexture, 0).xy;
	float depth = texture(depthTexture, uv).r;
	float centerDepth = texture(depthTexture, vec2(0.5, 0.5)).r;
	float mixFactor = smoothstep(focalDistance - focalRange, focalDistance + focalRange, depth);
	vec4 blurredScene = texture(blurredSceneTexture, uv);
	vec4 scene = mix(blurredScene, gl_FragColor, mixFactor);
	gl_FragColor = scene; */
	
	if(debug) {
		gl_FragColor = vec4(vec3(1.0-st), 1.0);
	}
	else {
		gl_FragColor = vec4(color, 1.0);
	}
}